import { TRACKER_LOCATION_STATUSES, type TrackerLocation } from '../core/Tracker';
import useReactive from '../components/useReactive';

const Status = ({ location }: { location: TrackerLocation }) => {
    const value = useReactive(location.status);

    if (value === TRACKER_LOCATION_STATUSES.Found) {
        return 'Found';
    }

    if (value === TRACKER_LOCATION_STATUSES.Priority) {
        return 'Priority';
    }

    if (value === TRACKER_LOCATION_STATUSES.Avoid) {
        return 'Avoid';
    }

    if (value === TRACKER_LOCATION_STATUSES.NoPriority) {
        return 'No priority'
    }

    return null;
}

export interface TrackerRowProps {
    location: TrackerLocation;
}

export default function TrackerRow({  location }: TrackerRowProps) {
    const item = useReactive(location.item);

    return (
        <tr key={location.id}>
            <td>{location.name}</td>
            <td>{item?.name}</td>
            <td>{item?.player?.name}</td>
            <td><Status location={location} /></td>
        </tr>
    );
}
