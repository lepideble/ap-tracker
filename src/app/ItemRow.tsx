import { useReactive } from '#components';
import { type TrackerItem } from '#core';

const fraction = (numerator: number, denominator: number) => {
    const quotient = Math.floor(numerator / denominator);
    const remainder = numerator % denominator;

    if (remainder === 0) {
        return quotient
    }

    if (denominator === 2) {
        if (remainder === 1) {
            return `${quotient} ½`;
        }
    }

    if (denominator === 4) {
        if (remainder === 1) {
            return `${quotient} ¼`;
        }
        if (remainder === 2) {
            return `${quotient} ½`;
        }
        if (remainder === 3) {
            return `${quotient} ¾`;
        }
    }

    if (denominator === 10) {
        return `${quotient}.${remainder}`;
    }

    throw new Error(`Unsupported fraction: ${numerator}/${denominator}`);
}

export interface ItemRowProps {
    item: TrackerItem;
}

export default function ItemRow({ item }: ItemRowProps) {
    const count = useReactive(item.count);

    if (count === 0) {
        return null;
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.parts ? fraction(count, item.parts) : count}</td>
        </tr>
    );
}
