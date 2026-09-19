import { use } from 'react';
import { Table, TableSection } from '#components';
import { type Core, type Slot } from '#core';
import LocationRegionHeader from './LocationRegionHeader';
import LocationRow from './LocationRow';

export interface LocationsProps {
    core: Core;
    slot: Slot;
}

export default function Locations({ core, slot }: LocationsProps) {
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
                        <TableSection key={region.name} defaultOpen={region.checked.value < region.useful.value}>
                            <LocationRegionHeader region={region} />
                            {region.locations.map((location) => <LocationRow key={location.id} location={location} />)}
                        </TableSection>
                    ))}
                </>
            ) : (
                <tbody>
                    {tracker.locations.map((location) => <LocationRow key={location.id} location={location} />)}
                </tbody>
            )}
        </Table>
    );
}
