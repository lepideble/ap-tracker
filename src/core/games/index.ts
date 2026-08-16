import type { TrackerLocation } from '../Tracker';
import * as rayman2 from './rayman2';

interface GameData {
    regions?: Record<string, {
        getLocations(locations: TrackerLocation[]): TrackerLocation[];
    }>;
}

export default {
    'Rayman 2': rayman2,
} as Record<string, GameData>;
