import { useCallback } from 'react';
import { closeModal } from '#actions';
import { Button, Form, Stack } from '#components';
import { type SlotManager } from '#core';

export interface AddSlotModalProps {
    slots: SlotManager;
}

export default function AddSlotModal({ slots }: AddSlotModalProps) {
    const action = useCallback(({ label, host, slot, password }: Record<string, any>) => {
        slots.add(label || null, host, slot, password || null)
    }, [slots]);

    return (
        <Form action={action} onSuccess={closeModal}>
            <Stack>
                <label>
                    Name (only for display)
                    <input name="label" />
                </label>
                <label>
                    Host and Port
                    <input name="host" />
                </label>
                <label>
                    Slot Name
                    <input name="slot" />
                </label>
                <label>
                    Password (leave empty for no password)
                    <input name="password" type="password" />
                </label>
                <Button action="submit">Add</Button>
            </Stack>
        </Form>
    )
}
