import { TableSectionHeader, useReactive } from '#components';
import { type TrackerRegion } from '#core';

export interface LocationRegionHeaderProps {
    region: TrackerRegion;
}

export default function LocationRegionHeader({ region }: LocationRegionHeaderProps) {
    const checked = useReactive(region.checked)
    const useful = useReactive(region.useful)

    return (
        <TableSectionHeader>
            <th colSpan={3}>{region.name}</th>
            <th>{checked} / {useful === region.locations.length ? useful : `${useful} / ${region.locations.length}`}</th>
        </TableSectionHeader>
    );
}
