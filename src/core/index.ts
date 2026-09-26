import { type Client, ConnectionManger, type Hint, type Item, type Location } from './Connection';
import { type Slot, type SlotData, SlotManager, type SlotRepository } from './Slot';
import { type TrackerItem, type TrackerLocation, TRACKER_LOCATION_STATUSES, TrackerFactory, type TrackerRegion } from './Tracker';

export { TRACKER_LOCATION_STATUSES };
export type { Client, Hint, Item, Location, Slot, SlotData, SlotManager, SlotRepository, TrackerItem, TrackerLocation, TrackerRegion };

export interface Core {
    slots: SlotManager;
}

export function createCore({ client, slotRepository }: { client: Client, slotRepository: SlotRepository }): Core {
    const connectionManager = new ConnectionManger(client);
    const trackerFactory = new TrackerFactory();
    const slotManager = new SlotManager(slotRepository, connectionManager, trackerFactory);

    return {
        slots: slotManager,
    };
}
