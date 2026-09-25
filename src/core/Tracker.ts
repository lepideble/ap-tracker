import { combine, compute, makeState, type Reactive } from '#lib/reactive';
import type { Connection, Hint, Player } from './Connection';
import games, { type GameData } from './games';

export class Tracker {
    #itemsData: ReturnType<NonNullable<GameData['items']>>;
    #regionsData: NonNullable<GameData['regions']>|null;
    #locations: TrackerLocation[];
    #items: TrackerItem[];

    constructor(connection: Connection, gameData: GameData|null) {
        this.#itemsData = gameData?.items ? gameData.items(connection) : {};
        this.#regionsData = gameData?.regions ?? null;

        // Create reactive hint for all locations
        const hints: Record<number, Reactive<Hint|null>> = {};
        const setHints: Record<number, (hint: Hint|null) => void> = {};

        for (const location of connection.locations) {
            const [hint, setHint] = makeState<Hint|null>(null);

            hints[location.id] = hint;
            setHints[location.id] = setHint;
        }

        const updateHints = () => {
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
        };

        updateHints();
        connection.hints.subscribe(updateHints);

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

        this.#items = this.#setUpItems(connection)
    }

    #setUpItems(connection: Connection): TrackerItem[] {
        const bundles: Record<string, [string, number]> = {}
        for (const [itemName, itemData] of Object.entries(this.#itemsData)) {
            for (const [bundleName, count] of Object.entries(itemData.bundles ?? {})) {
                bundles[bundleName] = [itemName, count];
            }
        }

        const itemNames = [
            ...Object.keys(this.#itemsData),
            ...connection.itemTypes.filter((itemName) => !(itemName in bundles))
        ].toSorted((a, b) => a.localeCompare(b, 'en', { numeric: true }));

        const counts: Record<string, Reactive<number>> = {};
        const setCounts: Record<string, (count: number) => void> = {};

        for (const itemType of itemNames) {
            const [count, setCount] = makeState<number>(0);

            counts[itemType] = count;
            setCounts[itemType] = setCount;
        }

        const updateCounts = () => {
            const counts: Record<string, number> = {};

            for (const [itemName, itemData] of Object.entries(this.#itemsData)) {
                counts[itemName] = itemData.start ?? 0;
            }

            for (const item of connection.items.value) {
                if (item.name in bundles) {
                    const [itemName, count] = bundles[item.name];
                    counts[itemName] = (counts[itemName] ?? 0) + count;
                } else {
                    counts[item.name] = (counts[item.name] ?? 0) + 1;
                }
            }

            for (const [name, count] of Object.entries(counts)) {
                setCounts[name](count);
            }
        };

        updateCounts();
        connection.items.subscribe(updateCounts);

        return itemNames.map((name) => ({
            name,
            count: counts[name],
            parts: this.#itemsData[name]?.parts ?? null,
        }));
    }

    get locations(): TrackerLocation[] {
        return this.#locations;
    }

    get regions(): TrackerRegion[]|null {
        if (!this.#regionsData) {
            return null;
        }

        const regions = Object.entries(this.#regionsData).map(([name, region]) => new TrackerRegion(
            name,
            region.getLocations(this.#locations),
        ));

        const remaining = this.#locations.filter((location) => regions.every((region) => !region.locations.includes(location)));

        if (remaining.length) {
            regions.push(new TrackerRegion('Unknown', remaining));
        }

        return regions;
    }

    get items(): TrackerItem[] {
        return this.#items;
    }
}

export const TRACKER_LOCATION_STATUSES = {
    NotFound: 0,
    NoPriority: 10,
    Avoid: 20,
    Priority: 30,
    Found: 40,
} as const;

const TRACKER_LOCATION_USEFUL_STATUSES: TrackerLocation.Status[] = [
    TRACKER_LOCATION_STATUSES.Found,
    TRACKER_LOCATION_STATUSES.Priority,
    TRACKER_LOCATION_STATUSES.NotFound,
];

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
    #useful: Reactive<number>;

    constructor(name: string, locations: TrackerLocation[]) {
        this.#name = name;
        this.#locations = locations;
        this.#checked = combine(locations.map((location) => location.checked), (checked) => checked.filter((checked) => checked).length);
        this.#useful = combine(locations.map((location) => location.status), (statuses) => statuses.filter((status) => TRACKER_LOCATION_USEFUL_STATUSES.includes(status)).length);
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

    get useful() {
        return this.#useful;
    }
}

export interface TrackerItem {
    name: string;
    count: Reactive<number>;
    parts: 2|4|10|null;
}

export class TrackerFactory {
    async create(connection: Connection): Promise<Tracker> {
        return new Tracker(
            connection,
            games[connection.game] ? await games[connection.game]() : null,
        );
    }
}
