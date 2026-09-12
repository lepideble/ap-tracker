import type { TrackerLocation } from '../Tracker';
import * as twoShipTwoHarkinian from './2Ship2Harkinian';
import * as autopelago from './autopelago';
import * as rayman2 from './rayman2';
import * as shipOfHarkinian from './shipOfHarkinian';

interface GameData {
    regions?: Record<string, {
        getLocations(locations: TrackerLocation[]): TrackerLocation[];
    }>;
}

export default {
    '2 Ship 2 Harkinian (MM)': twoShipTwoHarkinian,
    'Autopelago': autopelago,
    'Rayman 2': rayman2,
    'Ship of Harkinian': shipOfHarkinian,
} as Record<string, GameData>;
