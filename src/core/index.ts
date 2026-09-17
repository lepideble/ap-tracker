import { type Client, ConnectionManger, type Location, type Hint } from './Connection';
import { type Slot, type SlotData, SlotManager, type SlotRepository } from './Slot';
import { type TrackerLocation, TRACKER_LOCATION_STATUSES, TrackerManager, type TrackerRegion } from './Tracker';

export { TRACKER_LOCATION_STATUSES };
export type { Client, Location, Hint, Slot, SlotData, SlotManager, SlotRepository, TrackerLocation, TrackerManager, TrackerRegion };

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
