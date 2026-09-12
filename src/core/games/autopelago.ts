import type { TrackerLocation } from '../Tracker';

function isRelated(location: TrackerLocation, name: string, prefix: string = name): boolean {
    return location.name === name || location.name.startsWith(`Before ${prefix}`) || location.name.startsWith(`After ${prefix}`);
}

export const regions = {
    'Sewer': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => isRelated(location, 'Basketball')
                || isRelated(location, 'Prawn Stars')
                || isRelated(location, 'Pirate Bake Sale')
                || isRelated(location, 'Angry Turtles')
                || isRelated(location, 'Restaurant')
                || isRelated(location, 'Bowling Ball Door')
                || isRelated(location, 'Captured Goldfish', 'Goldfish'));
        }
    },
    'Cool World': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => isRelated(location, 'Computer Interface')
                || isRelated(location, 'Kart Races')
                || isRelated(location, 'Broken-Down Bus', 'Broken Down Bus')
                || isRelated(location, 'Copyright Mouse')
                || isRelated(location, 'Room Full of Typewriters')
                || isRelated(location, 'Binary Tree')
                || isRelated(location, 'Rat Rap Battle')
                || isRelated(location, 'Daring Adventurer')
                || isRelated(location, 'Overweight Boulder')
                || isRelated(location, 'Blue-Colored Screen Interface')
                || isRelated(location, 'Trapeze')
                || isRelated(location, 'Computer Ram')
                || isRelated(location, 'Stack of Crates')
                || isRelated(location, 'Secret Cache'));
        }
    },
    'Space': {
        getLocations(locations: TrackerLocation[]) {
            return locations.filter((location) => isRelated(location, 'Makeshift Rocket Ship')
                || isRelated(location, 'Robo-Clop: The Robot War Horse')
                || isRelated(location, 'Stalled Rocket')
                || isRelated(location, 'Homeless Mummy')
                || isRelated(location, 'Frozen Assets')
                || isRelated(location, 'Alien Vending Machine')
                || isRelated(location, 'Seal of Fortune')
                || isRelated(location, 'Space Opera')
                || isRelated(location, 'Minotaur Labyrinth')
                || isRelated(location, 'Asteroid with Pants')
                || isRelated(location, 'Snakes on a Planet'));
        }
    },
};
