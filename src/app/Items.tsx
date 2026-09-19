import { use } from 'react';
import { Table } from '#components';
import { type Core, type Slot } from '#core';
import ItemRow from './ItemRow';

export interface ItemsProps {
    core: Core;
    slot: Slot;
}

export default function Items({ core, slot }: ItemsProps) {
    const tracker = use(core.trackers.get(slot));

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
