import { useRef, type ReactNode } from 'react';
import { OpenModal } from './Modal';

function OpenButton({ modal, children }: { modal: ReactNode, children: ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button onClick={() => dialogRef.current?.showModal()} type="button">{children}</button>
            <dialog closedby="any" ref={dialogRef}>{modal}</dialog>
        </>
    );
}

interface ButtonProps {
    action: OpenModal|'submit'|(() => void);
    children: ReactNode;
}

export default function Button({ action, children }: ButtonProps) {
    if (action instanceof OpenModal) {
        return <OpenButton modal={action.modal}>{children}</OpenButton>
    }

    if (action === 'submit') {
        return <button type="submit">{children}</button>
    }

    return (
        <button onClick={action} type="button">{children}</button>
    )
}
