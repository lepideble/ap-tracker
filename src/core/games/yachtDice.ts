import { type Connection } from '../Connection';

export const items = (connection: Connection) => ({
    'Dice': {
        bundles: {
            'Dice': connection.slotData['number_of_dice_fragments_per_dice'] ?? 4,
            'Dice Fragment': 1,
        },
        parts: connection.slotData['number_of_dice_fragments_per_dice'] ?? 4,
    },
    'Extra points': {
        bundles: {
            '1 Point': 1,
            '10 Points': 10,
            '100 Points': 100,
        },
    },
    'Roll': {
        bundles: {
            'Roll': connection.slotData['number_of_roll_fragments_per_roll'] ?? 4,
            'Roll Fragment': 1,
        },
        parts: connection.slotData['number_of_roll_fragments_per_roll'] ?? 4,
    },
    'Fixed Score Multiplier': {
        bundles: {
            'Fixed Score Multiplier': 1,
        },
        parts: 10,
    }
});
