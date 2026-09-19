import { type Connection } from '../Connection';
import { type TrackerLocation } from '../Tracker';

export interface GameData {
    items?: (connection: Connection) => Record<string, {
        bundles?: Record<string, number>;
        parts?: 2|4|10;
        start?: number;
    }>,
    regions?: Record<string, {
        getLocations(locations: TrackerLocation[]): TrackerLocation[];
    }>;
}

export default {
    '2 Ship 2 Harkinian (MM)': () => import('./2Ship2Harkinian'),
    'Autopelago': () => import('./autopelago'),
    'Rayman 2': () => import('./rayman2'),
    'Ship of Harkinian': () => import('./shipOfHarkinian'),
    'Yacht Dice': () => import('./yachtDice'),
} as Record<string, () => Promise<GameData>>;
