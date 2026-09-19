import { css } from '@linaria/core';
import { useCallback, type ReactNode, type SubmitEvent } from 'react';
import { getHandler, type HandlerAction } from '#actions';

const className = css`
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export interface FormProps {
    children: ReactNode;
    action: (data: Record<string, any>) => void;
    onSuccess?: HandlerAction;
}

export default function Form({ action, children, onSuccess }: FormProps) {
    const onSubmit = useCallback((event: SubmitEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        action(Object.fromEntries(formData.entries()));

        if (onSuccess) {
            getHandler(onSuccess)(event);
        }
    }, [action, onSuccess]);

    return <form className={className} onSubmit={onSubmit}>{children}</form>
}
