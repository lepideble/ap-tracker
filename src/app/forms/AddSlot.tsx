import { useCallback } from 'react';
import { Button, Form } from '#components';
import { type SlotManager } from '#core';

export interface AddSlotProps {
    slots: SlotManager;
}

export default function AddSlot({ slots }: AddSlotProps) {
    const action = useCallback(async ({ label, host, slot, password }: Record<string, any>) => {
        await slots.add(label || null, host, slot, password || null)
    }, [slots]);

    return (
        <Form action={action}>
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
        </Form>
    )
}
