import type { Connection, ConnectionManger, Hint, Player } from './Connection';
import { combine, compute, makeState, type Reactive } from './Reactive';
import type { Slot } from './Slot';
import games from './games';

export class Tracker {
    #game: string;
    #locations: TrackerLocation[];

    constructor(connection: Connection) {
        // Create reactive hint for all locations
        const hints: Record<number, Reactive<Hint|null>> = {};
        const setHints: Record<number, (hint: Hint|null) => void> = {};

        for (const location of connection.locations) {
            const [hint, setHint] = makeState<Hint|null>(null);

            hints[location.id] = hint;
            setHints[location.id] = setHint;
        }

        connection.hints.subscribe(() => {
            for (const hint of connection.hints.value) {
                if (hint.location.player.id !== connection.player.id) {
                    continue;
                }

                const setHint = setHints[hint.location.id];

                if (!setHint) {
                    console.error('Received hint for an unknown location', hint);

                    continue;
                }

                setHint(hint);
            }
        });

        this.#locations = connection.locations.map((location) => ({
            id: location.id,
            name: location.name,
            item: compute((hint) => hint?.item ?? null, [hints[location.id]]),
            checked: location.checked,
            status: compute((hint, checked) => {
                if (checked) {
                    return TRACKER_LOCATION_STATUSES.Found;
                }

                if (hint) {
                    return hint.status;
                }

                return TRACKER_LOCATION_STATUSES.NotFound;
            }, [hints[location.id], location.checked]),
        }));

        this.#game = connection.game;
    }

    get locations(): TrackerLocation[] {
        return this.#locations;
    }

    get regions(): TrackerRegion[]|null {
        const game = games[this.#game];

        if (!game?.regions) {
            return null;
        }

        const regions = Object.entries(game?.regions).map(([name, region]) => new TrackerRegion(
            name,
            region.getLocations(this.#locations),
        ));

        const remaining = this.#locations.filter((location) => regions.every((region) => !region.locations.includes(location)));

        if (remaining.length) {
            regions.push(new TrackerRegion('Unknown', remaining));
        }

        return regions;
    }
}

export const TRACKER_LOCATION_STATUSES = {
    NotFound: 0,
    NoPriority: 10,
    Avoid: 20,
    Priority: 30,
    Found: 40,
} as const;

export interface TrackerLocation {
    id: number;
    name: string;
    item: Reactive<TrackerLocation.Item|null>;
    checked: Reactive<boolean>;
    status: Reactive<TrackerLocation.Status>;
}

export namespace TrackerLocation {
    export interface Item {
        id: number;
        name: string;
        player: Player;
    }

    export type Status = typeof TRACKER_LOCATION_STATUSES[keyof typeof TRACKER_LOCATION_STATUSES];
}

export class TrackerRegion {
    #name: string;
    #locations: TrackerLocation[];
    #checked: Reactive<number>;

    constructor(name: string, locations: TrackerLocation[]) {
        this.#name = name;
        this.#locations = locations;
        this.#checked = combine(locations.map((location) => location.checked), (checked) => checked.filter((checked) => checked).length);
    }

    get name() {
        return this.#name;
    }

    get locations() {
        return this.#locations;
    }

    get checked() {
        return this.#checked;
    }
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
