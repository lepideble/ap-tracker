import type { TrackerLocation } from '../Tracker';

export const regions = {
    'The Woods of Light': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Woods of Light')
                || location.name === 'Hall of Doors - Completing the Woods of Light');
        }
    },
    'The Fairy Glade': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Fairy Glade')
                || location.name.startsWith('The Fairly Glade')
                || location.name === 'Hall of Doors - Completing the Fairy Glade');
        }
    },
    'The Marshes of Awakening': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Marshes of Awakening')
                && location.name !== 'The Marshes of Awakening #1 - Elixir of Life'
                || location.name === 'Hall of Doors - Completing the Marshes of Awakening');
        }
    },
    'The Cave of Bad Dreams': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Cave of Bad Dreams')
                || location.name === 'The Marshes of Awakening #1 - Elixir of Life'
                || location.name === 'Hall of Doors - Completing the Cave of Bad Dreams');
        }
    },
    'The Bayou': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Bayou')
                || location.name === 'Hall of Doors - Completing the Bayou');
        }
    },
    'The Walk of Life': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Walk of Life')
                || location.name === 'Hall of Doors - Completing the Walk of Life');
        }
    },
    'The Sanctuary of Water and Ice': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Sanctuary of Water and Ice')
                || location.name === 'Hall of Doors - Completing the Sanctuary of Water and Ice');
        }
    },
    'The Menhir Hills': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Menhir Hills')
                || location.name === 'Hall of Doors - Completing the Menhir Hills');
        }
    },
    'The Canopy': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Canopy')
                || location.name === 'Hall of Doors - Completing the Canopy');
        }
    },
    'Whale Bay': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Whale Bay')
                || location.name === 'Hall of Doors - Completing Whale Bay');
        }
    },
    'The Sanctuary of Stone and Fire': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Sanctuary of Stone and Fire')
                || location.name === 'Hall of Doors - Completing the Sanctuary of Stone and Fire');
        }
    },
    'The Echoing Caves': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Echoing Caves')
                || location.name === 'Hall of Doors - Completing the Echoing Caves');
        }
    },
    'The Precipice': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Precipice')
                || location.name === 'Hall of Doors - Completing the Precipice');
        }
    },
    'The Top of the World': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Top of the World')
                || location.name === 'Hall of Doors - Completing the Top of the World');
        }
    },
    'The Sanctuary of Rock and Lava': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Sanctuary of Rock and Lava')
                || location.name === 'Hall of Doors - Completing the Sanctuary of Rock and Lava');
        }
    },
    'The Walk of Power': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Walk of Power')
                || location.name === 'Hall of Doors - Completing the Walk of Power');
        }
    },
    'Beneath the Sanctuary of Rock and Lava': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Beneath the Sanctuary of Rock and Lava')
                || location.name === 'Hall of Doors - Completing Beneath the Sanctuary of Rock and Lava');
        }
    },
    'Tomb of the Ancients': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Tomb of the Ancients')
                || location.name === 'Hall of Doors - Completing the Tomb of Ancients');
        }
    },
    'The Iron Mountains': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Iron Mountains')
                || location.name === 'Hall of Doors - Completing the Iron Mountains');
        }
    },
    'The Prison Ship': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Prison Ship')
                || location.name === 'Hall of Doors - Completing the Prison Ship');
        }
    },
}
