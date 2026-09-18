import type { TrackerLocation } from '../Tracker';

export interface GameData {
    regions?: Record<string, {
        getLocations(locations: TrackerLocation[]): TrackerLocation[];
    }>;
}

export default {
    '2 Ship 2 Harkinian (MM)': () => import('./2Ship2Harkinian'),
    'Autopelago': () => import('./autopelago'),
    'Rayman 2': () => import('./rayman2'),
    'Ship of Harkinian': () => import('./shipOfHarkinian'),
} as Record<string, () => Promise<GameData>>;
