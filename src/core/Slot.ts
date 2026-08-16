import type { Reactive } from './Reactive';

export interface Slot {
    id: string;
    label: string;
    host: string;
    name: string;
    password: string|null;
}

export interface SlotRepository extends Reactive<Slot[]> {
    add(host: string, name: string, password: string|null): void;
}
