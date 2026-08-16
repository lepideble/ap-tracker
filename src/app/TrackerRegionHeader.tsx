import { TableSectionHeader } from '../components';
import useReactive from '../components/useReactive';
import type { TrackerRegion } from '../core/Tracker';

export interface TrackerRegionHeaderProps {
    region: TrackerRegion;
}

export default function TrackerRegionHeader({ region }: TrackerRegionHeaderProps) {
    const checked = useReactive(region.checked)

    return (
        <TableSectionHeader>
            <th colSpan={3}>{region.name}</th>
            <th>{checked} / {region.locations.length}</th>
        </TableSectionHeader>
    );
}
