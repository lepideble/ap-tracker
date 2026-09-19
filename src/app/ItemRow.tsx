import { useReactive } from '#components';
import type { TrackerItem } from '#core';

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
            <td>{count}</td>
        </tr>
    );
}
