import { type Client, ConnectionManger, type Hint, type Item, type Location } from './Connection';
import { type Slot, type SlotData, SlotManager, type SlotRepository } from './Slot';
import { type TrackerItem, type TrackerLocation, TRACKER_LOCATION_STATUSES, TrackerManager, type TrackerRegion } from './Tracker';

export { TRACKER_LOCATION_STATUSES };
export type { Client, Hint, Item, Location, Slot, SlotData, SlotManager, SlotRepository, TrackerItem, TrackerLocation, TrackerManager, TrackerRegion };

export interface Core {
    trackers: TrackerManager;
    slots: SlotManager;
}

export function createCore({ client, slotRepository }: { client: Client, slotRepository: SlotRepository }): Core {
    const slotManager = new SlotManager(slotRepository);
    const connectionManager = new ConnectionManger(client);
    const trackerManager = new TrackerManager(connectionManager);

    return {
        trackers: trackerManager,
        slots: slotManager,
    };
}
