import { TrashIcon } from '@heroicons/react/24/outline'
import { useCallback } from 'react';
import { navigate } from '#actions';
import { Button, Form, IconButton, Toolbar } from '#components';
import { type SlotManager } from '#core';

export interface EditSlotProps {
    id: string;
    slots: SlotManager;
}

export default function EditSlot({ id, slots }: EditSlotProps) {
    const initialData = slots.value.find((slot) => slot.id === id);
    const action = useCallback(({ label, host, slot, password }: Record<string, any>) => {
        slots.update(id, label || null, host, slot, password || null)
    }, [id, slots]);

    return (
        <Form action={action}>
            <Toolbar>
                <IconButton action={() => slots.remove(id)} label="Delete slot" onSuccess={navigate('')}>
                    <TrashIcon />
                </IconButton>
            </Toolbar>
            <label>
                Name (only for display)
                <input defaultValue={initialData?.label ?? ''} name="label" />
            </label>
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
            <Button action="submit">Save</Button>
        </Form>
    )
}
