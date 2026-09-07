import { type Callback } from '../core/Reactive';
import type { SlotData, SlotRepository } from '../core/Slot';

export default class StorageSlotRepository implements SlotRepository {
    #storage: Storage;
    #key: string

    #value: SlotData[];
    #subscribers: Callback[];

    #listener: (event: StorageEvent) => void;

    constructor(storage: Storage, key: string) {
        this.#storage = storage;
        this.#key = key;

        this.#value = this.#getData();
        this.#subscribers = [];

        this.#listener = (event: StorageEvent) => {
            if (event.storageArea !== this.#storage || event.key !== this.#key) {
                return;
            }

            this.#setValue(this.#getData());
        }
    }

    get value() {
        return this.#value;
    }

    subscribe(callback: Callback) {
        if (this.#subscribers.length === 0) {
            window.addEventListener('storage', this.#listener);
        }

        this.#subscribers.push(callback);

        return () => {
            const index = this.#subscribers.indexOf(callback);
            if (index > -1) {
                this.#subscribers.splice(index, 1);
            }

            if (this.#subscribers.length === 0) {
                window.removeEventListener('storage', this.#listener);
            }
        }
    }

    add(slot: SlotData) {
        const slots = this.#getData();

        slots.push(slot);

        this.#setData(slots);
        this.#setValue(slots);
    }

    update(slot: SlotData) {
        const slots = this.#getData();

        const index = slots.findIndex(({ id }) => id === slot.id);

        if (index === -1) {
            throw new Error('Invalid id');
        }

        slots[index] = slot;

        this.#setData(slots);
        this.#setValue(slots);
    }

    remove(id: string) {
        const slots = this.#getData();

        const index = slots.findIndex((slot) => slot.id === id);

        if (index === -1) {
            return;
        }

        slots.splice(index, 1);

        this.#setData(slots);
        this.#setValue(slots);
    }

    #getData(): SlotData[] {
        const data = this.#storage.getItem(this.#key);

        if (!data) {
            return [];
        }

        return JSON.parse(data);
    }

    #setData(Slots: SlotData[]) {
        this.#storage.setItem(this.#key, JSON.stringify(Slots));
    }

    #setValue(value: SlotData[]) {
        this.#value = value;

        for (const subscriber of this.#subscribers) {
            subscriber();
        }
    }
}
