import type { Reactive } from '#lib/reactive';

export interface Player {
    id: number;
    name: string;
}

export interface Location {
    id: number;
    name: string;
    checked: Reactive<boolean>;
}

export interface Item {
    id: number;
    name: string;
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
    status: typeof HINT_STATUSES[keyof typeof HINT_STATUSES];
}

export const HINT_STATUSES = {
    Unspecified: 0,
    NoPriority: 10,
    Avoid: 20,
    Priority: 30,
    Found: 40,
} as const;

export interface ConnectionOptions {
    id: string;
    host: string;
    name: string;
    password: string|null;
}

export interface Connection {
    game: string;
    player: Player;
    locations: Location[];
    items: Reactive<Item[]>;
    itemTypes: string[];
    hints: Reactive<Hint[]>;
    slotData: Record<string, any>;
}

export interface Client {
    connect(options: ConnectionOptions): Promise<Connection>
}

export class ConnectionManger {
    #client: Client;
    #connections: Record<string, Promise<Connection>>;

    constructor(client: Client) {
        this.#client = client;
        this.#connections = {};
    }

    async connect(options: ConnectionOptions): Promise<void> {
        if (options.id in this.#connections) {
            delete this.#connections[options.id];
        }

        await this.get(options);
    }

    get(options: ConnectionOptions): Promise<Connection> {
        if (!(options.id in this.#connections)) {
            this.#connections[options.id] = this.#client.connect(options);
        }

        return this.#connections[options.id];
    }
}
