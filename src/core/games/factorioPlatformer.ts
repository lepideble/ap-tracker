import { type TrackerLocation } from '../Tracker';

export const regions = {
    'Craftsanity': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Craft '));
        }
    },
    'Automation science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-1-'));
        }
    },
    'Logistic science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-2-'));
        }
    },
    'Military science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-3-'));
        }
    },
    'Chemical science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-4-'));
        }
    },
    'Production science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-5-'));
        }
    },
    'Utility science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-6-'));
        }
    },
    'Space science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-7-'));
        }
    },
    'Metallurgic science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-8-'));
        }
    },
    'Agricultural science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-9-'));
        }
    },
    'Electromagnetic science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-10-'));
        }
    },
    'Cryogenic science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-11-'));
        }
    },
    'Promethium science': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('AP-12-'));
        }
    },
};
