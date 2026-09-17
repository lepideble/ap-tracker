import { TableSectionHeader, useReactive } from '#components';
import { type TrackerRegion } from '#core';

export interface TrackerRegionHeaderProps {
    region: TrackerRegion;
}

export default function TrackerRegionHeader({ region }: TrackerRegionHeaderProps) {
    const checked = useReactive(region.checked)
    const useful = useReactive(region.useful)

    return (
        <TableSectionHeader>
            <th colSpan={3}>{region.name}</th>
            <th>{checked} / {useful === region.locations.length ? useful : `${useful} / ${region.locations.length}`}</th>
        </TableSectionHeader>
    );
}
