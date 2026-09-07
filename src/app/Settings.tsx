import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { openModal } from '../actions';
import { Button, IconButton, List, ListItem } from '../components';
import useReactive from '../components/useReactive';
import type { Core } from '../core';
import AddSlotModal from './AddSlotModal';
import EditSlotModal from './EditSlotModal';

export interface SettingsProps {
    core: Core;
}

export default function Settings({ core }: SettingsProps) {
    const slots = useReactive(core.slots);

    return (
        <List>
            {slots.map((slot) => (
                <ListItem key={slot.id}>
                    <span>{slot.label}</span>
                    <IconButton action={openModal(<EditSlotModal id={slot.id} slots={core.slots} />)} label="Edit slot"><PencilIcon /></IconButton>
                    <IconButton action={() => core.slots.remove(slot.id)} label="Delete slot"><TrashIcon /></IconButton>
                </ListItem>
            ))}
            <ListItem><Button action={openModal(<AddSlotModal slots={core.slots} />)}>Add Slot</Button></ListItem>
        </List>
    )
}
