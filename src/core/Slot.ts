import { compute, type Callback, type Reactive, type Subscriber } from '#lib/reactive';
import { ConnectionManger, type ConnectionOptions } from './Connection';
import { type Tracker, type TrackerFactory } from './Tracker';

export interface Slot extends ConnectionOptions {
    id: string;
    label: string;
    tracker: Promise<Tracker>;
}

export interface SlotData extends ConnectionOptions {
    id: string;
    label: string|null;
}

export interface SlotRepository extends Reactive<SlotData[]> {
    add(slot: SlotData): void;
    update(slot: SlotData): void;
    remove(id: string): void;
}

export class SlotManager {
    #repository: SlotRepository;
    #connections: ConnectionManger;
    #trackerFactory: TrackerFactory;
    #trackers: Record<string, Promise<Tracker>>;
    #value: Reactive<Slot[]>;

    constructor(repository: SlotRepository, connections: ConnectionManger, trackerFactory: TrackerFactory) {
        const trackers: Record<string, Promise<Tracker>> = {};

        this.#repository = repository;
        this.#connections = connections;
        this.#trackerFactory = trackerFactory;
        this.#trackers = trackers;
        this.#value = compute((slots) => slots.map((data) => ({
            id: data.id,
            label: data.label ?? `${data.name}@${data.host}`,
            host: data.host,
            name: data.name,
            password: data.password,
            get tracker(): Promise<Tracker> {
                if (!(data.id in trackers)) {
                    trackers[data.id] = connections.get(data.id, data).then(trackerFactory.create);
                }

                return trackers[data.id];
            },
        })), [this.#repository])
    }

    get value() {
        return this.#value.value;
    }

    subscribe(callback: Callback): Subscriber {
        return this.#value.subscribe(callback);
    }

    async add(label: string|null, host: string, name: string, password: string|null = null): Promise<void> {
        const id = crypto.randomUUID();

        const connection = await this.#connections.get(id, { host, name, password });

        this.#trackers[id] = this.#trackerFactory.create(connection);
        this.#repository.add({ id, label, host, name, password });
    }

    async update(id: string, label: string|null, host: string, name: string, password: string|null = null): Promise<void> {
        const connection = await this.#connections.get(id, { host, name, password });

        this.#trackers[id] = this.#trackerFactory.create(connection);
        this.#repository.update({ id, label, host, name, password });
    }

    remove(id: string) {
        this.#repository.remove(id);
    }
}
