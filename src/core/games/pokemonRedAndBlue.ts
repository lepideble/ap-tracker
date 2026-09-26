import type { TrackerLocation } from '../Tracker';

export const items = () => ({
    'Coin': {
        bundles: {
            '10 Coins': 10,
            '20 Coins': 20,
            '100 Coins': 100,
        },
    },
});

export const regions = {
    'Pallet Town': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Oak\'s Lab - ')
                || location.name.startsWith('Player\'s House 2F - ')
                || location.name.startsWith('Rival\'s House - '));
        }
    },
    'Route 1': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 1 - '));
        }
    },
    'Viridian City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Viridian City - ')
                || location.name.startsWith('Viridian Gym - ')
                || location.name.startsWith('Viridian Pokemart - '));
        }
    },
    'Route 2': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 2 - ')
                || location.name.startsWith('Route 2 Gate - '));
        }
    },
    'Viridian Forest': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Viridian Forest - '));
        }
    },
    'Diglett\'s Cave': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Pewter City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pewter Gym - ')
                || location.name.startsWith('Pewter Museum 1F - '));
        }
    },
    'Route 3': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 3 - '));
        }
    },
    'Mt. Moon': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Fossil - ')
                || location.name.startsWith('Mt Moon 1F - ')
                || location.name.startsWith('Mt Moon B2F - '));
        }
    },
    'Route 4': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 4 - '));
        }
    },
    'Cerulean City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Cerulean Bicycle Shop'
                || location.name.startsWith('Cerulean City - ')
                || location.name.startsWith('Cerulean Gym - '));
        }
    },
    'Cerulean Cave': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Cerulean Cave 1F - ')
                || location.name.startsWith('Cerulean Cave 2F - ')
                || location.name.startsWith('Cerulean Cave B1F - '));
        }
    },
    'Route 24': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 24 - '));
        }
    },
    'Route 25': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 25 - ')
                || location.name.startsWith('Bill\'s House - '));
        }
    },
    'Route 5': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Route 6': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 6 - '));
        }
    },
    'Vermilion City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Vermilion Gym - ')
                || location.name.startsWith('Vermilion Old Rod House - ')
                || location.name.startsWith('Vermilion Pokemon Fan Club - '));
        }
    },
    'S.S. Anne': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('S.S. Anne 1F Rooms - ')
                || location.name.startsWith('S.S. Anne 2F Rooms - ')
                || location.name.startsWith('S.S. Anne B1F Rooms - ')
                || location.name.startsWith('S.S. Anne Bow - ')
                || location.name.startsWith('S.S. Anne Captain\'s Room - '));
        }
    },
    'Route 9': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 9 - '));
        }
    },
    'Rock Tunnel': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Rock Tunnel 1F - ')
                || location.name.startsWith('Rock Tunnel B1F - '));
        }
    },
    'Route 10': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 10 - '));
        }
    },
    'Lavender Town': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Pokémon Tower': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pokemon Tower 3F - ')
                || location.name.startsWith('Pokemon Tower 4F - ')
                || location.name.startsWith('Pokemon Tower 5F - ')
                || location.name.startsWith('Pokemon Tower 6F - ')
                || location.name.startsWith('Pokemon Tower 7F - '));
        }
    },
    'Route 8': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 8 - '));
        }
    },
    'Route 7': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Celadon City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Celadon City - ')
                || location.name.startsWith('Celadon Department Store 3F - ')
                || location.name.startsWith('Celadon Department Store Roof - ')
                || location.name.startsWith('Celadon Diner - ')
                || location.name.startsWith('Celadon Game Corner - ')
                || location.name.startsWith('Celadon Gym - '));
        }
    },
    'Rocket HQ': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Saffron City': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Silph Co.': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 11': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 11 - ')
                || location.name.startsWith('Route 11 Gate 2F - '));
        }
    },
    'Route 12': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 12 - ')
                || location.name.startsWith('Route 12 Gate 2F - ')
                || location.name.startsWith('Route 12 Super Rod House - '))
        }
    },
    'Route 13': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 14': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 15': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 16': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 17': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 18': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Fuchsia City': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Safari Zone': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Sea Route 19': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Seafoam Islands': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Sea Route 20': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Cinnabar Island': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Cinnabar Gym - ')
                || location.name.startsWith('Cinnabar Lab R&D Room - '))
        }
    },
    'Pokémon Mansion': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Sea Route 21': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 22': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Route 23': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Victory Road': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Indigo Plateau': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Power Plant': {
        getLocations(locations: TrackerLocation[]) {
            return []; //TODO
        }
    },
    'Pokedex': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pokedex - '));
        }
    },
};
