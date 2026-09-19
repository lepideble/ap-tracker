import { type MouseEventHandler, type SubmitEventHandler } from 'react';
import { closeModal } from './modal';
import { Navigate } from './navigate';

export type Action = typeof closeModal|Navigate|(() => void);

export default function getHandler(action: Action): SubmitEventHandler&MouseEventHandler {
    if (action instanceof Navigate) {
        return () => {
            window.location.hash = `#${action.to}`;
        };
    }

    if (action === closeModal) {
        return (event) => {
            (event.target as HTMLElement).closest('dialog')?.close()
        }
    }

    return action;
}
