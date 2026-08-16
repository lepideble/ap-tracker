import type { TrackerLocation } from '../core/Tracker';
import useReactive from '../components/useReactive';

export interface TrackerRowProps {
    location: TrackerLocation;
}

export default function TrackerRow({  location }: TrackerRowProps) {
    const checked = useReactive(location.checked);
    const item = useReactive(location.item);

    return (
        <tr key={location.id}>
            <td>{location.name}</td>
            <td>{item?.name}</td>
            <td>{item?.player?.name}</td>
            <td>{checked ? '✓' : ''}</td>
        </tr>
    );
}
