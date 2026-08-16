import type { Connection, ConnectionManger, Player } from './Connection';
import { combine, makeState, type Reactive } from './Reactive';
import type { Slot } from './Slot';
import games from './games';

export class Tracker {
    #game: string;
    #locations: TrackerLocation[];

    constructor(connection: Connection) {
        const updateItem: Record<number, (item: TrackerLocation.Item) => void> = {};

        this.#locations = connection.locations.map((location) => {
            const [item, setItem] = makeState<TrackerLocation.Item|null>(null);

            updateItem[location.id] = setItem;

            return {
                id: location.id,
                name: location.name,
                item,
                checked: location.checked,
            };
        });

        connection.hints.subscribe(() => {
            for (const hint of connection.hints.value) {
                if (hint.location.player.id !== connection.player.id) {
                    continue;
                }

                const setItem = updateItem[hint.location.id];

                if (!setItem) {
                    console.error('Received hint for an unknown location', hint);

                    continue;
                }

                setItem(hint.item);
            }
        });

        this.#game = connection.game;
    }

    get locations(): TrackerLocation[] {
        return this.#locations;
    }

    get regions(): TrackerRegion[]|null {
        const regions = games[this.#game]?.regions;

        if (!regions) {
            return null;
        }

        return Object.entries(regions).map(([name, region]) => {
            const locations = region.getLocations(this.#locations);
            const checked = combine(locations.map((location) => location.checked), (checked) => checked.filter((checked) => checked).length);

            return {
                name,
                locations,
                checked,
            }
        });
    }
}

export interface TrackerLocation {
    id: number;
    name: string;
    item: Reactive<TrackerLocation.Item|null>;
    checked: Reactive<boolean>;
}

namespace TrackerLocation {
    export interface Item {
        id: number;
        name: string;
        player: Player;
    }
}

export interface TrackerRegion {
    name: string;
    locations: TrackerLocation[];
    checked: Reactive<number>;
}

export class TrackerManager {
    #connections: ConnectionManger;
    #trackers: Record<string, Promise<Tracker>>;

    constructor(connections: ConnectionManger) {
        this.#connections = connections;
        this.#trackers = {};
    }

    get(slot: Slot): Promise<Tracker> {
        if (!(slot.id in this.#trackers)) {
            this.#trackers[slot.id] = this.#connections.get(slot).then((connection) => new Tracker(connection));
        }

        return this.#trackers[slot.id];
    }
}
