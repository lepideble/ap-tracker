import { compute, type Callback, type Reactive, type Subscriber } from './Reactive';

export interface Slot {
    id: string;
    label: string;
    host: string;
    name: string;
    password: string|null;
}

export type SlotData = Omit<Slot, 'label'> & { label: string|null };

export interface SlotRepository extends Reactive<SlotData[]> {
    add(slot: SlotData): void;
    update(slot: SlotData): void;
    remove(id: string): void;
}

export class SlotManager {
    #repository: SlotRepository;
    #value: Reactive<Slot[]>;

    constructor(repository: SlotRepository) {
        this.#repository = repository;
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

    add(label: string|null, host: string, name: string, password: string|null = null) {
        this.#repository.add({ id: crypto.randomUUID(), label, host, name, password });
    }

    update(id: string, label: string|null, host: string, name: string, password: string|null = null) {
        this.#repository.update({ id, label, host, name, password });
    }

    remove(id: string) {
        this.#repository.remove(id);
    }
}
