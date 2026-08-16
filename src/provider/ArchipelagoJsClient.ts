import { Client as ArchieplagoJs, type Hint as ArchiepalgoJsHint } from 'archipelago.js';

import type { Client, Hint, Location } from '../core/Connection';
import { makeState } from '../core/Reactive';
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
});

export default class ArchipelagoJsClient implements Client {
    async connect(slot: Slot) {
        const client = new ArchieplagoJs();

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

}
