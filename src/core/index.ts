import type { SlotRepository } from './Slot';
import type { TrackerManager } from './Tracker';

export interface Core {
    trackers: TrackerManager;
    slots: SlotRepository;
}
