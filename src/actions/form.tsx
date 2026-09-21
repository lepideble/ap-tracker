import { type ButtonHTMLAttributes, createContext, type FormHTMLAttributes, type SubmitEvent, use, useCallback, useState } from 'react';
import { default as getHandler, type Action as HandlerAction } from './getHandler';

const SubmittingContext = createContext(false);

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'action'|'onError'|'onSuccess'> {
    action: (data: Record<string, any>) => void;
    onError?: HandlerAction;
    onSuccess?: HandlerAction;
}

export function Form({ action, children, onError, onSuccess, ...props }: FormProps) {
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = useCallback(async (event: SubmitEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        setSubmitting(true);

        try {
            await Promise.try(action, Object.fromEntries(formData.entries()));

            setSubmitting(false);

            if (onSuccess) {
                getHandler(onSuccess)(event);
            }
        } catch {
            setSubmitting(false);

            if (onError) {
                getHandler(onError)(event);
            }
        }
    }, [action, onSuccess]);

    return (
        <form {...props} onSubmit={onSubmit}>
            <SubmittingContext.Provider value={submitting}>
                {children}
            </SubmittingContext.Provider>
        </form>
    );
}

export function Submit(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const submitting = use(SubmittingContext);

    return <button disabled={submitting} type="submit" {...props}/>;
}
