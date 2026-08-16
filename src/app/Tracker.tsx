import { use } from 'react';

import Table from '../components/Table';
import TableSection from '../components/TableSection';
import type { Core } from '../core';
import type { Slot } from '../core/Slot';
import TrackerRegionHeader from './TrackerRegionHeader';
import TrackerRow from './TrackerRow';

export interface TrackerProps {
    core: Core;
    slot: Slot;
}

export default function Tracker({ core, slot }: TrackerProps) {
    const tracker = use(core.trackers.get(slot));

    return (
        <Table>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>Item</th>
                    <th>Receiver</th>
                    <th>Status</th>
                </tr>
            </thead>
            {tracker.regions ? (
                <>
                    {tracker.regions.map((region) => (
                        <TableSection key={region.name} defaultOpen={region.locations.some((location) => !location.checked.value)}>
                            <TrackerRegionHeader region={region} />
                            {region.locations.map((location) => <TrackerRow key={location.id} location={location} />)}
                        </TableSection>
                    ))}
                </>
            ) : (
                <tbody>
                    {tracker.locations.map((location) => <TrackerRow key={location.id} location={location} />)}
                </tbody>
            )}
        </Table>
    );
}
