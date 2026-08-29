import type { TrackerLocation } from '../Tracker';
import * as rayman2 from './rayman2';
import * as shipOfHarkinian from './shipOfHarkinian';

interface GameData {
    regions?: Record<string, {
        getLocations(locations: TrackerLocation[]): TrackerLocation[];
    }>;
}

export default {
    'Rayman 2': rayman2,
    'Ship of Harkinian': shipOfHarkinian,
} as Record<string, GameData>;
