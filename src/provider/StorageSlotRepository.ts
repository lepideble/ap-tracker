import { type Callback } from '../core/Reactive';
import type { Slot, SlotRepository } from '../core/Slot';

export default class StorageSlotRepository implements SlotRepository {
    #storage: Storage;
    #key: string

    #value: Slot[];
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

    add(host: string, name: string, password: string|null = null) {
        const slots = this.#getData();

        slots.push({
            id: crypto.randomUUID(),
            label: `${name}@${host}`,
            host,
            name,
            password,
        });

        this.#setData(slots);
        this.#setValue(slots);
    }

    #getData() {
        const data = this.#storage.getItem(this.#key);

        if (!data) {
            return [];
        }

        return JSON.parse(data);
    }

    #setData(Slots: Slot[]) {
        this.#storage.setItem(this.#key, JSON.stringify(Slots));
    }

    #setValue(value: Slot[]) {
        this.#value = value;

        for (const subscriber of this.#subscribers) {
            subscriber();
        }
    }
}
