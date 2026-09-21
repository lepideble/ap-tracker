import { compute, type Callback, type Reactive, type Subscriber } from '#lib/reactive';
import { type ConnectionManger, type ConnectionOptions } from './Connection';

export interface Slot extends ConnectionOptions {
    label: string;
}

export type SlotData = Omit<Slot, 'label'> & { label: string|null };

export interface SlotRepository extends Reactive<SlotData[]> {
    add(slot: SlotData): void;
    update(slot: SlotData): void;
    remove(id: string): void;
}

export class SlotManager {
    #repository: SlotRepository;
    #connections: ConnectionManger;
    #value: Reactive<Slot[]>;

    constructor(repository: SlotRepository, connections: ConnectionManger) {
        this.#repository = repository;
        this.#connections = connections;
        this.#value = compute((slots) => slots.map((data) => ({
            id: data.id,
            label: data.label ?? `${data.name}@${data.host}`,
            host: data.host,
            name: data.name,
            password: data.password,
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

        await this.#connections.connect({ id, host, name, password });
        this.#repository.add({ id, label, host, name, password });
    }

    async update(id: string, label: string|null, host: string, name: string, password: string|null = null): Promise<void> {
        await this.#connections.connect({ id, host, name, password });
        this.#repository.update({ id, label, host, name, password });
    }

    remove(id: string) {
        this.#repository.remove(id);
    }
}
