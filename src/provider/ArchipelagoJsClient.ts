import { Client as ArchieplagoJs, type Hint as ArchiepalgoJsHint } from 'archipelago.js';

import type { Client, Hint, Location } from '../core/Connection';
import { makeState, type Reactive } from '../core/Reactive';
import type { Slot } from '../core/Slot';

const formatHint = (hint: ArchiepalgoJsHint) => ({
    location: {
        id: hint.item.locationId,
        name: hint.item.locationName,
        player: {
            id: hint.item.sender.slot,
            name: hint.item.sender.name,
        },
    },
    item: {
        id: hint.item.id,
        name: hint.item.name,
        advancement: hint.item.progression,
        useful: hint.item.useful,
        trap: hint.item.trap,
        player: {
            id: hint.item.receiver.slot,
            name: hint.item.receiver.name,
        },
    },
    status: hint.status,
});

export default class ArchipelagoJsClient implements Client {
    async connect(slot: Slot) {
        const client = new ArchieplagoJs();

        await this.#setUpCache(client);

        const hints = await this.#setUpHints(client);

        await client.login(slot.host, slot.name, undefined, slot.password ? { password: slot.password } : {});

        const locations: Location[] = [];

        const setLocationChecked: Record<number, (checked: boolean) => void> = {};

        const makeLocation = (id: number, isChecked: boolean) => {
            const [checked, setChecked] = makeState(isChecked);

            locations.push({ id, name: client.package.lookupLocationName(client.game, id), checked });

            setLocationChecked[id] = setChecked;
        }

        for (const locationId of client.room.checkedLocations) {
            makeLocation(locationId, true);
        }

        for (const locationId of client.room.missingLocations) {
            makeLocation(locationId, false);
        }

        locations.sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }));

        client.room.on('locationsChecked', (locations: number[]) => {
            for (const locationId of locations) {
                setLocationChecked[locationId](true);
            }
        });

        return {
            game: client.game,
            player: {
                id: client.players.self.slot,
                name: client.players.self.name,
            },
            locations,
            hints,
        };
    }

    async #setUpCache(client: ArchieplagoJs): Promise<void> {
        try {
            const cache = await window.caches.open('datapackage');

            client.package.setCache({
                async getPackage(game, checksum) {
                    try {
                        const response = await cache.match(`/${game}/${checksum}`);

                        if (response) {
                            return response.json();
                        }
                    } catch (error) {
                        console.warn('Error retrieving datapackage from cache', error)
                    }

                    return null;
                },
            });

            client.socket.on('dataPackage', (packet) => {
                Object.entries(packet.data.games).forEach(async ([game, data]) => {
                    cache
                        .put(`/${game}/${data.checksum}`, new Response(JSON.stringify(data)))
                        .catch((error) => {
                            console.warn('Error saving datapackage in cache', error)
                        });
                });
            });
        } catch (error) {
            console.warn('Failed to setup datapackage cache', error);
        }
    }

    async #setUpHints(client: ArchieplagoJs): Promise<Reactive<Hint[]>> {
        const [hints, setHints] = makeState<Hint[]>([]);

        client.items.on('hintsInitialized', (received) => {
            setHints(received.map(formatHint));
        });

        client.items.on('hintReceived', (received) => {
            setHints([
                ...hints.value,
                formatHint(received),
            ]);
        });

        // TODO: Handle hint status change

        return hints;
    }
}
