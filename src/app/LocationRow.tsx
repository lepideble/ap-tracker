import { useReactive } from '#components';
import { TRACKER_LOCATION_STATUSES, type TrackerLocation } from '#core';

const Item = ({ location }: { location: TrackerLocation }) => {
    const item = useReactive(location.item);

    if (!item) {
        return null;
    }

    const classification = [];

    if (item.advancement) {
        classification.push('Advancement');
    }

    if (item.useful) {
        classification.push('Useful');
    }

    if (item.trap) {
        classification.push('Trap');
    }

    const title = classification.length ? classification.join(', ') : 'Filler';

    return <span title={title}>{item.name}</span>
}

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

export interface LocationRowProps {
    location: TrackerLocation;
}

export default function LocationRow({ location }: LocationRowProps) {
    const item = useReactive(location.item);

    return (
        <tr key={location.id}>
            <td>{location.name}</td>
            <td><Item location={location} /></td>
            <td>{item?.player?.name}</td>
            <td><Status location={location} /></td>
        </tr>
    );
}
