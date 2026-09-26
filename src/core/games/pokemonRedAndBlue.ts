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
            return locations.filter((location) => location.name.startsWith('Lavender Mr. Fuji\'s House - '));
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
            return locations.filter((location) => location.name.startsWith('Rocket Hideout B1F - ')
                || location.name.startsWith('Rocket Hideout B2F - ')
                || location.name.startsWith('Rocket Hideout B3F - ')
                || location.name.startsWith('Rocket Hideout B4F - '));
        }
    },
    'Saffron City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Saffron Copycat\'s House 2F - ')
                || location.name.startsWith('Saffron Fighting Dojo - ')
                || location.name.startsWith('Saffron Gym - ')
                || location.name.startsWith('Saffron Mr. Psychic\'s House - '));
        }
    },
    'Silph Co.': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Silph Co 2F - ')
                || location.name.startsWith('Silph Co 3F - ')
                || location.name.startsWith('Silph Co 4F - ')
                || location.name.startsWith('Silph Co 5F - ')
                || location.name.startsWith('Silph Co 6F - ')
                || location.name.startsWith('Silph Co 7F - ')
                || location.name.startsWith('Silph Co 8F - ')
                || location.name.startsWith('Silph Co 9F - ')
                || location.name.startsWith('Silph Co 10F - ')
                || location.name.startsWith('Silph Co 11F - '));
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
            return locations.filter((location) => location.name.startsWith('Route 13 - '));
        }
    },
    'Route 14': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 14 - '));
        }
    },
    'Route 15': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 15 - ')
                || location.name.startsWith('Route 15 Gate 2F - '));
        }
    },
    'Route 16': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 16 - ')
                || location.name.startsWith('Route 16 Fly House - '));
        }
    },
    'Route 17': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 17 - '));
        }
    },
    'Route 18': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 18 - '));
        }
    },
    'Fuchsia City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Fuchsia Good Rod House - ')
                || location.name.startsWith('Fuchsia Gym - ')
                || location.name.startsWith('Fuchsia Warden\'s House - '));
        }
    },
    'Safari Zone': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Safari Zone Center - ')
                || location.name.startsWith('Safari Zone East - ')
                || location.name.startsWith('Safari Zone North - ')
                || location.name === 'Safari Zone Secret House'
                || location.name.startsWith('Safari Zone West - '));
        }
    },
    'Sea Route 19': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 19 - '));
        }
    },
    'Seafoam Islands': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Sea Route 20': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 20 - '));
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
            return locations.filter((location) => location.name.startsWith('Pokemon Mansion 1F - ')
                || location.name.startsWith('Pokemon Mansion 2F - ')
                || location.name.startsWith('Pokemon Mansion 3F - ')
                || location.name.startsWith('Pokemon Mansion B1F - '));
        }
    },
    'Sea Route 21': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Route 21 - '));
        }
    },
    'Route 22': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Route 23': {
        getLocations(locations: TrackerLocation[]) {
            return [];
        }
    },
    'Victory Road': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Victory Road 1F - ')
                || location.name.startsWith('Victory Road 2F - ')
                || location.name.startsWith('Victory Road 3F - '));
        }
    },
    'Indigo Plateau': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Indigo Plateau Agatha\'s Room - ')
                || location.name.startsWith('Indigo Plateau Bruno\'s Room - ')
                || location.name.startsWith('Indigo Plateau Lance\'s Room - ')
                || location.name.startsWith('Indigo Plateau Lorelei\'s Room - '));
        }
    },
    'Power Plant': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Power Plant - '));
        }
    },
    'Pokedex': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pokedex - '));
        }
    },
};
