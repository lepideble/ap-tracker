import { useCallback } from 'react';

import { closeModal } from '../actions';
import { Button } from '../components';
import Form from '../components/Form';
import Stack from '../components/Stack';
import type { SlotManager } from '../core';

export interface EditSlotModalProps {
    id: string;
    slots: SlotManager;
}

export default function EditSlotModal({ id, slots }: EditSlotModalProps) {
    const initialData = slots.value.find((slot) => slot.id === id);
    const action = useCallback(({ label, host, slot, password }: Record<string, any>) => {
        slots.update(id, label || null, host, slot, password || null)
    }, [id, slots]);

    return (
        <Form action={action} onSuccess={closeModal}>
            <Stack>
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
            </Stack>
        </Form>
    )
}
