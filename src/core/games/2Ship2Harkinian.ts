import type { TrackerLocation } from '../Tracker';

function isEnemyDrop(location: TrackerLocation, enemies: string[]): boolean {
    return enemies.some((enemy) => location.name === `Enemy Drop ${enemy}`);
}

export const regions = {
    'South Clock Town': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Clock Town Postbox'
                || location.name === 'Clock Town Scrub Deed'
                || location.name.startsWith('Clock Town South')
                || location.name.startsWith('Starting Item'));
        }
    },
    'East Clock Town': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Clock Town Bombers Notebook'
                || location.name.startsWith('Clock Town East')
                || location.name === 'Clock Town Postbox'
                || location.name === 'Clock Town Stray Fairy'
                || location.name.startsWith('Mayors Office')
                || location.name.startsWith('Milk Bar')
                || location.name.startsWith('Stock Pot Inn'));
        }
    },
    'West Clock Town': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Bomb Shop')
                || location.name.startsWith('Clock Town West')
                || location.name.startsWith('Curiosity Shop')
                || location.name.startsWith('Swordsman School')
                || location.name.startsWith('Trading Post'));
        }
    },
    'North Clock Town': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Clock Town Bombers Notebook'
                || location.name === 'Clock Town Great Fairy'
                || location.name === 'Clock Town Great Fairy Alt'
                || location.name.startsWith('Clock Town North')
                || location.name === 'Clock Town Postbox'
                || location.name === 'Keaton Quiz');
        }
    },
    'Laundry Pool': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Clock Town Laundry')
                || location.name === 'Clock Town Stray Fairy'
                || location.name.startsWith('Kafeis Hideout'));
        }
    },
    'Astral Observatory': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Astral Observatory Passage')
                || location.name.startsWith('Astral Observatory Pot')
                || location.name === 'Enemy Drop Skulltula')
        }
    },
    'Clock Tower Rooftop': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Clock Tower Roof'));
        }
    },
    'Termina Field': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Astral Observatory Moon Tear'
                || location.name.startsWith('Termina Field')
                || location.name === 'Enemy Drop Bad Bat'
                || location.name === 'Enemy Drop Bio Deku Baba'
                || location.name === 'Enemy Drop Blue Bubble'
                || location.name === 'Enemy Drop Chuchu'
                || location.name === 'Enemy Drop Deku Baba'
                || location.name === 'Enemy Drop Dodongo'
                || location.name === 'Enemy Drop Eeno'
                || location.name === 'Enemy Drop Giant Bee'
                || location.name === 'Enemy Drop Leever'
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Peahat'
                || location.name === 'Enemy Drop Real Bombchu'
                || location.name === 'Enemy Drop Skulltula'
                || location.name === 'Enemy Drop Skullwalltula'
                || location.name === 'Enemy Drop Takkuri');
        }
    },
    'Milk Road': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Keaton Quiz'
                || location.name.startsWith('Milk Road'));
        }
    },
    'Gorman Track': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Gorman Milk Purchase'
                || location.name.startsWith('Gorman Track'));
        }
    },
    'Romani Ranch': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Cremia Escort'
                || location.name.startsWith('Cucco Shack')
                || location.name.startsWith('Doggy Racetrack')
                || location.name === 'Enemy Drop Alien'
                || location.name.startsWith('Romani Ranch'));
        }
    },
    'Road to Southern Swamp': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Road to Southern Swamp')
                || location.name.startsWith('Swamp Shooting Gallery')
                || location.name === 'Enemy Drop Bad Bat'
                || location.name === 'Enemy Drop Chuchu'
                || location.name === 'Enemy Drop Deku Baba'
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Wolfos');
        }
    },
    'Southern Swamp': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Hags Potion Shop')
                || location.name.startsWith('Southern Swamp')
                || location.name.startsWith('Tourist Information')
                || location.name === 'Enemy Drop Deku Baba'
                || location.name === 'Enemy Drop Dragonfly'
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Octorok');
        }
    },
    'Swamp Spider House': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Swamp Skulltula')
                || location.name.startsWith('Swamp Spider House')
                || location.name === 'Enemy Drop Giant Bee');
        }
    },
    'Deku Palace': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Deku Palace')
                || location.name === 'Enemy Drop Mad Scrub'
                || location.name === 'Enemy Drop Mini Baba');
        }
    },
    'Deku Shrine': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Deku Shrine'));
        }
    },
    'Deku King\'s Chamber': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Deku Kings Chamber Monkey'));
        }
    },
    'Woods of Mystery': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Woods of Mystery')
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Snapper');
        }
    },
    'Woodfall': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Woodfall') && !location.name.startsWith('Woodfall Temple')
                || location.name === 'Enemy Drop Dragonfly'
                || location.name === 'Enemy Drop Hiploop'
                || location.name === 'Enemy Drop Mad Scrub');
        }
    },
    'Woodfall Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Woodfall Temple') && !location.name.startsWith('Woodfall Temple Boss')
                || location.name === 'Woodfall Temple Boss Key Chest'
                || location.name === 'Enemy Drop Boe'
                || location.name === 'Enemy Drop Deku Baba'
                || location.name === 'Enemy Drop Dinolfos'
                || location.name === 'Enemy Drop Dragonfly'
                || location.name === 'Enemy Drop Gekko'
                || location.name === 'Enemy Drop Giant Bee'
                || location.name === 'Enemy Drop Skulltula'
                || location.name === 'Enemy Drop Snapper');
        }
    },
    'Odolwa\'s Lair': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Woodfall Temple Boss') && location.name !== 'Woodfall Temple Boss Key Chest'
                || location.name === 'Giants Chamber Oath to Order');
        }
    },
    'Path to Mountain Village': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Path to Mountain Village')
                || location.name === 'Enemy Drop Boe'
                || location.name === 'Enemy Drop Snapper'
                || location.name === 'Enemy Drop Tektite'
                || location.name === 'Enemy Drop Wolfos');
        }
    },
    'Mountain Village': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Keaton Quiz'
                || location.name.startsWith('Mountain Village')
                || location.name === 'Enemy Drop Boe'
                || location.name === 'Enemy Drop Giant Bee'
                || location.name === 'Enemy Drop Guay'
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Tektite'
                || location.name === 'Enemy Drop Wolfos');
        }
    },
    'Goron Graveyard': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Goron Graveyard'));
        }
    },
    'Path to Goron Village': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Path to Goron Village')
                || location.name.startsWith('Twin Islands')
                || location.name === 'Enemy Drop Guay'
                || location.name === 'Enemy Drop Mini Baba'
                || location.name === 'Enemy Drop Snapper'
                || location.name === 'Enemy Drop Tektite'
                || location.name === 'Enemy Drop Wolfos');
        }
    },
    'Goron Racetrack': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Goron Racetrack'));
        }
    },
    'Goron Village': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Goron Village')
                || location.name === 'Enemy Drop Tektite');
        }
    },
    'Goron Shrine': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Goron Shop')
                || location.name.startsWith('Goron Shrine'));
        }
    },
    'Path to Snowhead': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Path to Snowhead')
                || location.name === 'Enemy Drop Keese'
                || location.name === 'Enemy Drop Mini Baba');
        }
    },
    'Snowhead': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Snowhead') && !location.name.startsWith('Snowhead Temple')
                || location.name === 'Enemy Drop Boe'
                || location.name === 'Enemy Drop Keese'
                || location.name === 'Enemy Drop Wolfos');
        }
    },
    'Snowhead Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Snowhead Temple') && !location.name.startsWith('Snowhead Temple Boss')
                || location.name === 'Snowhead Temple Boss Key'
                || isEnemyDrop(location, ['Boe', 'Dinolfos', 'Eeno', 'Flying Pot', 'Freezard', 'Red Bubble', 'Wizrobe', 'Wolfos']));
        }
    },
    'Goht\'s Lair': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Giants Chamber Oath to Order'
                || location.name.startsWith('Snowhead Temple Boss') && location.name !== 'Snowhead Temple Boss Key');
        }
    },
    'Great Bay Coast': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Great Bay Coast')
                || isEnemyDrop(location, ['Giant Bee', 'Leever', 'Like Like', 'Mini Baba']));
        }
    },
    'Oceanside Spider House': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ocean Skulltula')
                || location.name.startsWith('Ocean Spider House')
                || isEnemyDrop(location, ['Boe', 'Skulltula']));
        }
    },
    'Zora Cape': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Great Bay Great Fairy'
                || location.name.startsWith('Zora Cape')
                || isEnemyDrop(location, ['Guay', 'Leever', 'Like Like', 'Mini Baba']));
        }
    },
    'Zora Hall': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Zora Hall')
                || location.name.startsWith('Zora Shop'));
        }
    },
    'Pinnacle Rock': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pinnacle Rock')
                || isEnemyDrop(location, ['Deep Python']));
        }
    },
    'Waterfall Rapids': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Waterfall Rapids'));
        }
    },
    'Pirates\' Fortress Moat': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pirate Fortress Entrance'));
        }
    },
    'Pirates\' Fortress': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pirate Fortress Plaza'));
        }
    },
    'Pirates\' Fortress Interior': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Pirate Fortress Interior')
                || location.name.startsWith('Pirate Fortress Captain Room')
                || location.name.startsWith('Pirate Fortress Sewers')
                || isEnemyDrop(location, ['Desbreko', 'Pirate', 'Shellblade']));
        }
    },
    'Great Bay Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Great Bay Temple') && !location.name.startsWith('Great Bay Temple Boss')
                || location.name === 'Great Bay Temple Boss Key'
                || isEnemyDrop(location, ['Bio Deku Baba', 'Chuchu', 'Desbreko', 'Dexihand', 'Gekko', 'Octorok', 'Shellblade', 'Skullfish', 'Skulltula', 'Tektite', 'Wart']));
        }
    },
    'Gyorg\'s Lair': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Giants Chamber Oath to Order'
                || location.name.startsWith('Great Bay Temple Boss') && location.name !== 'Great Bay Temple Boss Key');
        }
    },
    'Road to Ikana': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Road to Ikana')
                || isEnemyDrop(location, ['Blue Bubble', 'Mini Baba', 'Nejiron', 'Real Bombchu']));
        }
    },
    'Ikana Graveyard': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ikana Graveyard')
                || isEnemyDrop(location, ['Bad Bat', 'Captain Keeta', 'Mini Baba', 'Stalchild']));
        }
    },
    'Beneath the Graveyard': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Beneath the Graveyard') && !location.name.startsWith('Beneath the Graveyard Dampe')
                || isEnemyDrop(location, ['Bad Bat', 'Iron Knuckle', 'Keese', 'Skulltula']));
        }
    },
    'Beneath the Graveyard and Dampe\'s House': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Beneath the Graveyard Dampe')
                || isEnemyDrop(location, ['Wallmaster']));
        }
    },
    'Ikana Canyon': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ikana Canyon')
                || location.name === 'Ikana Great Fairy'
                || location.name.startsWith('Music Box House')
                || isEnemyDrop(location, ['Garo', 'Guay', 'Mini Baba', 'Octorok', 'Poe Sister']));
        }
    },
    'Sakon\'s Hideout': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Sakon Hideout')
                || isEnemyDrop(location, ['Deku Baba', 'Wolfos']));
        }
    },
    'Beneath the Well': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Beneath the Well')
                || isEnemyDrop(location, ['Deku Baba', 'Dexihand', 'Freezard', 'Keese', 'Mini Baba', 'Skulltula', 'Wallmaster']));
        }
    },
    'Secret Shrine': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Secret Shrine')
                || isEnemyDrop(location, ['Dinolfos', 'Garo Master', 'Wart', 'Wizrobe']));
        }
    },
    'Ancient Castle of Ikana': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ancient Castle of Ikana') && !location.name.startsWith('Ancient Castle of Ikana Boss')
                || isEnemyDrop(location, ['Blue Bubble', 'Floormaster', 'Garo', 'Guay', 'Redead', 'Skulltula', 'Wizrobe']));
        }
    },
    'Igos du Ikana\'s Lair': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Ancient Castle of Ikana Boss')
                || isEnemyDrop(location, ['Igos Du Ikana']));
        }
    },
    'Stone Tower': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Stone Tower') && !location.name.startsWith('Stone Tower Temple')
                || isEnemyDrop(location, ['Beamos', 'Keese', 'Redead']));
        }
    },
    'Stone Tower Temple': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Stone Tower Temple') && !location.name.startsWith('Stone Tower Temple Inverted Boss')
                || location.name === 'Stone Tower Temple Inverted Boss Key'
                || isEnemyDrop(location, ['Armos', 'Beamos', 'Bio Deku Baba', 'Blue Bubble', 'Boe', 'Chuchu', 'Death Armos', 'Dexihand', 'Dragonfly', 'Eyegore', 'Flying Pot', 'Garo Master', 'Gomess', 'Guay', 'Hiploop', 'Nejiron']));
        }
    },
    'Twinmold\'s Lair': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Giants Chamber Oath to Order'
                || location.name.startsWith('Stone Tower Temple Inverted Boss') && location.name !== 'Stone Tower Temple Inverted Boss Key')
        }
    },
    'The Moon': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name === 'Moon Fierce Deity Mask')
        }
    },
    'Moon Deku Trial': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Moon Trial Deku'))
        }
    },
    'Moon Goron Trial': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Moon Trial Goron'))
        }
    },
    'Moon Zora Trial': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Moon Trial Zora'))
        }
    },
    'Moon Link Trial': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Moon Trial Link')
                || isEnemyDrop(location, ['Dinolfos', 'Garo Master', 'Iron Knuckle']))
        }
    },
    'Deku Playground': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Deku Playground'))
        }
    },
    'Lone Peak Shrine': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => location.name.startsWith('Lone Peak Shrine')
                || isEnemyDrop(location, ['Skulltula']))
        }
    },
};
