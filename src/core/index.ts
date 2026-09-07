import type { SlotManager } from './Slot';
import type { TrackerManager } from './Tracker';

export type { SlotManager, TrackerManager };

export interface Core {
    trackers: TrackerManager;
    slots: SlotManager;
}
