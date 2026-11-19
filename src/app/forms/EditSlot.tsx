import { TrashIcon } from '@heroicons/react/24/outline'
import { useCallback } from 'react';
import { navigate } from '#actions';
import { Button, Collapse, Form, IconButton, Toolbar } from '#components';
import { type SlotManager } from '#core';

export interface EditSlotProps {
    id: string;
    slots: SlotManager;
}

export default function EditSlot({ id, slots }: EditSlotProps) {
    const initialData = slots.value.find((slot) => slot.id === id)?.settings;
    const action = useCallback(async ({ label, host, slot, password, guessHintStatus }: Record<string, any>) => {
        await slots.update(id, label || null, host, slot, password || null, { guessHintStatus: !!guessHintStatus })
    }, [id, slots]);

    return (
        <Form action={action} onSuccess={navigate(id)}>
            <Toolbar>
                <IconButton action={() => slots.remove(id)} icon={<TrashIcon />} label="Delete slot" onSuccess={navigate('')} />
            </Toolbar>
            <Collapse label="Display">
                <label>
                    Name (only for display)
                    <input defaultValue={initialData?.label ?? ''} name="label" />
                </label>
            </Collapse>
            <Collapse label="Connection">
                <label>
                    Host and Port
                    <input defaultValue={initialData?.host ?? ''} name="host" />
                </label>
                <label>
                    Slot Name
                    <input defaultValue={initialData?.name ?? ''} name="slot" />
                </label>
                <label>
                    Password (leave empty for no password)
                    <input defaultValue={initialData?.password ?? ''} name="password" type="password" />
                </label>
            </Collapse>
            <Collapse label="Settings">
                <label>
                    Guess hint status
                    <input defaultChecked={initialData?.options?.guessHintStatus} name="guessHintStatus" type="checkbox" />
                </label>
            </Collapse>
            <Button action="submit">Save</Button>
        </Form>
    )
}
