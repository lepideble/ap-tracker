import type { TrackerLocation } from '../Tracker';

export const regions = {
    'Kokiri Forest': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('KF ')
                || location.name === 'Link\'s Pocket');
        }
    },
    'Lost Woods': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('LW '));
        }
    },
    'Sacred Forest Meadow': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('SFM ')
                || location.name === 'Sheik in Forest'
                || location.name === 'Song from Saria');
        }
    },
    'Hyrule Field': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('HF ')
                || location.name === 'Song from Ocarina of Time');
        }
    },
    'Lake Hylia': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('LH '));
        }
    },
    'Gerudo Valley': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('GV '));
        }
    },
    'Gerudo Fortress': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('GF '));
        }
    },
    'Haunted Wasteland': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Wasteland '));
        }
    },
    'Desert Colossus': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Colossus ')
                || location.name === 'Sheik at Colossus');
        }
    },
    'Hyrule Market': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Market ')
                || location.name === 'Gift from Rauru'
                || location.name === 'Sheik at Temple');
        }
    },
    'Hyrule Castle': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('HC ')
                || location.name === 'OGC Great Fairy Reward'
                || location.name === 'Song from Impa');
        }
    },
    'Kakariko Village': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Kak ')
                || location.name === 'Sheik in Kakariko'
                || location.name === 'Song from Windmill');
        }
    },
    'Graveyard': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Graveyard ')
                || location.name === 'Song from Royal Family\'s Tomb');
        }
    },
    'Death Mountain Trail': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('DMT '));
        }
    },
    'Goron City': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('GC '));
        }
    },
    'Death Mountain Crater': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('DMC ')
                || location.name === 'Sheik in Crater');
        }
    },
    'Zora\'s River': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('ZR '));
        }
    },
    'Zora\'s Domain': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('ZD '));
        }
    },
    'Zora\'s Fountain': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('ZF '));
        }
    },
    'Lon Lon Ranch': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('LLR ')
                || location.name === 'Song from Malon');
        }
    },
    'Deku Tree': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Deku Tree ')
                || location.name === 'Queen Gohma');
        }
    },
    'Dodongo\'s Cavern': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Dodongos Cavern ')
                || location.name === 'King Dodongo');
        }
    },
    'Jabu Jabu\'s Belly': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Jabu Jabus Belly ')
                || location.name === 'Barinade');
        }
    },
    'Forest Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Forest Temple ')
                || location.name === 'Phantom Ganon');
        }
    },
    'Fire Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Fire Temple ')
                || location.name === 'Volvagia');
        }
    },
    'Water Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Water Temple ')
                || location.name === 'Morpha');
        }
    },
    'Spirit Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Spirit Temple ')
                || location.name === 'Twinrova');
        }
    },
    'Shadow Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Shadow Temple ')
                || location.name === 'Bongo Bongo');
        }
    },
    'Bottom of the Well': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Bottom of the Well '));
        }
    },
    'Ice Cavern': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ice Cavern ')
                || location.name === 'Sheik in Ice Cavern');
        }
    },
    'Gerudo Training Ground': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Gerudo Training Ground '));
        }
    },
    'Ganon\'s Castle': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ganon\'s Castle '));
        }
    },
};
