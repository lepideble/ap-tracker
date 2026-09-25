import { use } from 'react';
import { Table } from '#components';
import { type Slot } from '#core';
import ItemRow from './ItemRow';

export interface ItemsProps {
    slot: Slot;
}

export default function Items({ slot }: ItemsProps) {
    const tracker = use(slot.tracker);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                {tracker.items.map((item) => <ItemRow key={item.name} item={item} />)}
            </tbody>
        </Table>
    );
}
