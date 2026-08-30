import { useRef, type ButtonHTMLAttributes, type ComponentClass, type FunctionComponent, type ReactNode } from 'react';
import { Navigate } from '../location/navigate';
import { OpenModal } from '../Modal';

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

export type Action = Navigate|OpenModal|'submit'|(() => void);

export default function getProps(action: Action): [FunctionComponent<any> | ComponentClass<any> | string, { [key: string]: any}] {
    if (action instanceof Navigate) {
        return ['a', { href: `#${action.to}` }];
    }

    if (action instanceof OpenModal) {
        return [OpenModalButton, { modal: action.modal }];
    }

    if (action === 'submit') {
        return ['button', { type: 'submit' }];
    }

    return ['button', { onClick: action, type: 'button' }];
}
