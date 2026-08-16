import { useCallback } from 'react';

import Button from '../components/Button';
import Form from '../components/Form';
import { closeModal } from '../components/Modal';
import Stack from '../components/Stack';
import type { SlotRepository } from '../core/Slot';

export interface AddSlotModalProps {
    slots: SlotRepository;
}

export default function AddSlotModal({ slots }: AddSlotModalProps) {
    const action = useCallback(({ host, slot, password }: Record<string, any>) => {
        slots.add(host, slot, password || null)
    }, [slots]);

    return (
        <Form action={action} onSuccess={closeModal}>
            <Stack>
                <label>
                    Host and Port
                    <input name="host" />
                </label>
                <label>
                    Slot Name
                    <input name="slot" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <Button action="submit">Add</Button>
            </Stack>
        </Form>
    )
}
