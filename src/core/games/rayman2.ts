import type { TrackerLocation } from '../Tracker';

export const items = () => ({
    'Lum': {
        bundles: {
            'Lum': 1,
            'Super Lum': 5,
        },
    },
});

export const regions = {
    'The Woods of Light': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Woods of Light')
                || location.name === 'Hall of Doors - Completing the Woods of Light'
                || location.name === 'Hall of Doors - Unlocked Fairy Glade Portal');
        }
    },
    'The Fairy Glade': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Fairy Glade')
                || location.name.startsWith('The Fairly Glade')
                || location.name === 'Hall of Doors - Completing the Fairy Glade'
                || location.name === 'Hall of Doors - Unlocked Marshes of Awakening Portal');
        }
    },
    'The Marshes of Awakening': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Marshes of Awakening')
                    && location.name !== 'The Marshes of Awakening #1 - Elixir of Life'
                || location.name === 'Hall of Doors - Completing the Marshes of Awakening'
                || location.name === 'Hall of Doors - Unlocked Bayou Portal');
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
                || location.name === 'Hall of Doors - Completing the Bayou'
                || location.name === 'Hall of Doors - Unlocked Sanctuary of Water and Ice Portal');
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
                || location.name === 'Hall of Doors - Completing the Sanctuary of Water and Ice'
                || location.name === 'Hall of Doors - Unlocked Menhir Hills Portal');
        }
    },
    'The Menhir Hills': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Menhir Hills')
                || location.name === 'Hall of Doors - Completing the Menhir Hills'
                || location.name === 'Hall of Doors - Unlocked Canopy Portal');
        }
    },
    'The Canopy': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Canopy')
                || location.name === 'Hall of Doors - Completing the Canopy'
                || location.name === 'Hall of Doors - Unlocked Whale Bay Portal');
        }
    },
    'Whale Bay': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Whale Bay')
                || location.name === 'Hall of Doors - Completing Whale Bay'
                || location.name === 'Hall of Doors - Unlocked Sanctuary of Stone and Fire Portal');
        }
    },
    'The Sanctuary of Stone and Fire': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Sanctuary of Stone and Fire')
                || location.name === 'Hall of Doors - Completing the Sanctuary of Stone and Fire'
                || location.name === 'Hall of Doors - Unlocked Echoing Caves Portal');
        }
    },
    'The Echoing Caves': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Echoing Caves')
                || location.name === 'Hall of Doors - Completing the Echoing Caves'
                || location.name === 'Hall of Doors - Unlocked Precipice Portal');
        }
    },
    'The Precipice': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Precipice')
                || location.name === 'Hall of Doors - Completing the Precipice'
                || location.name === 'Hall of Doors - Unlocked Top of the World Portal');
        }
    },
    'The Top of the World': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Top of the World')
                || location.name === 'Hall of Doors - Completing the Top of the World'
                || location.name === 'Hall of Doors - Unlocked Sanctuary of Rock and Lava Portal');
        }
    },
    'The Sanctuary of Rock and Lava': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Sanctuary of Rock and Lava')
                || location.name === 'Hall of Doors - Completing the Sanctuary of Rock and Lava'
                || location.name === 'Hall of Doors - Unlocked Beneath the Sanctuary of Rock and Lava Portal');
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
                || location.name === 'Hall of Doors - Completing Beneath the Sanctuary of Rock and Lava'
                || location.name === 'Hall of Doors - Unlocked Tomb of the Ancients Portal');
        }
    },
    'Tomb of the Ancients': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Tomb of the Ancients')
                || location.name === 'Hall of Doors - Completing the Tomb of Ancients'
                || location.name === 'Hall of Doors - Unlocked Iron Mountains Portal');
        }
    },
    'The Iron Mountains': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Iron Mountains')
                || location.name === 'Hall of Doors - Completing the Iron Mountains'
                || location.name === 'Hall of Doors - Unlocked Prison Ship Portal');
        }
    },
    'The Prison Ship': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('The Prison Ship')
                || location.name === 'Hall of Doors - Completing the Prison Ship'
                || location.name === 'Hall of Doors - Unlocked Crow\'s Nest Portal');
        }
    },
}
