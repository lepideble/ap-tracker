import type { Reactive } from './Reactive';
import type { Slot } from './Slot';

export interface Player {
    id: number;
    name: string;
}

export interface Location {
    id: number;
    name: string;
    checked: Reactive<boolean>;
}

export interface Hint {
    location: {
        id: number;
        name: string;
        player: Player;
    };
    item: {
        id: number;
        name: string;
        advancement: boolean;
        useful: boolean;
        trap: boolean;
        player: Player;
    };
}

export interface Connection {
    game: string;
    player: Player;
    locations: Location[];
    hints: Reactive<Hint[]>;
}

export interface Client {
    connect(slot: Slot): Promise<Connection>
}

export class ConnectionManger {
    #client: Client;
    #connections: Record<string, Promise<Connection>>;

    constructor(client: Client) {
        this.#client = client;
        this.#connections = {};
    }

    get(slot: Slot): Promise<Connection> {
        if (!(slot.id in this.#connections)) {
            this.#connections[slot.id] = this.#client.connect(slot);
        }

        return this.#connections[slot.id];
    }
}
