import { type Client, ConnectionManger, type ConnectionOptions, type Hint, type Item, type Location } from './Connection';
import { type Slot, SlotManager, type SlotRepository, type SlotSettings } from './Slot';
import { type TrackerItem, type TrackerLocation, TRACKER_LOCATION_STATUSES, TrackerFactory, type TrackerRegion } from './Tracker';

export { TRACKER_LOCATION_STATUSES };
export type { Client, ConnectionOptions, Hint, Item, Location, Slot, SlotManager, SlotRepository, SlotSettings, TrackerItem, TrackerLocation, TrackerRegion };

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
