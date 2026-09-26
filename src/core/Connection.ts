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
    close(): void;
}

export interface Client {
    connect(options: ConnectionOptions): Promise<Connection>
}

export class ConnectionManger {
    #client: Client;
    #urls: Record<string, string>;
    #connections: Record<string, Promise<Connection>>;

    constructor(client: Client) {
        this.#client = client;
        this.#urls = {};
        this.#connections = {};
    }

    get(id: string, options: ConnectionOptions): Promise<Connection> {
        const url = this.#url(options);

        if (id in this.#urls && this.#urls[id] !== url) {
            this.#connections[id]
                .then((connection) => connection.close())
                .catch((error) => console.error(error));

            delete this.#connections[id];
        }

        if (!(id in this.#connections)) {
            this.#urls[id] = url;
            this.#connections[id] = this.#client.connect(options);
        }

        return this.#connections[id];
    }

    #url({ host, name, password }: ConnectionOptions): string {
        return `${name}${password ? `:${password}` : ''}@${host}`;
    }
}
