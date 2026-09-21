import { useRef, type ButtonHTMLAttributes, type ComponentClass, type FunctionComponent, type MouseEventHandler, type ReactNode } from 'react';
import { Submit } from './form';
import getHandler, { type Action as HandlerAction } from './getHandler';
import { OpenModal } from './modal';
import { Navigate } from './navigate';

export type Action = Navigate|OpenModal|'submit'|HandlerAction;

export interface Options {
    onSuccess?: HandlerAction;
}

interface OpenModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    modal: ReactNode
}

function OpenModalButton({ modal, ...props }: OpenModalButtonProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button {...props} onClick={() => dialogRef.current?.showModal()} type="button" />
            <dialog closedby="any" ref={dialogRef}>{modal}</dialog>
        </>
    );
}

export default function getProps(action: Action, { onSuccess }: Options = {}): [FunctionComponent<any> | ComponentClass<any> | string, { [key: string]: any}] {
    if (action instanceof Navigate) {
        return ['a', { href: `#${action.to}` }];
    }

    if (action instanceof OpenModal) {
        return [OpenModalButton, { modal: action.modal }];
    }

    if (action === 'submit') {
        return [Submit, {}];
    }

    const onClick: MouseEventHandler = (event) => {
        getHandler(action)(event);
        if (onSuccess) {
            getHandler(onSuccess)(event);
        }
    }

    return ['button', { onClick, type: 'button' }];
}
