import { useCallback, type ReactNode, type SubmitEvent } from 'react';
import { closeModal } from './Modal';

export interface FormProps {
    children: ReactNode;
    action: (data: Record<string, any>) => void;
    onSuccess?: typeof closeModal;
}

export default function Form({ action, children, onSuccess }: FormProps) {
    const onSubmit = useCallback((event: SubmitEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        action(Object.fromEntries(formData.entries()));

        if (onSuccess === closeModal) {
            event.target.closest('dialog')?.close()
        }
    }, [action, onSuccess]);

    return <form onSubmit={onSubmit}>{children}</form>
}
