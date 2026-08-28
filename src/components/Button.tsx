import { css } from '@linaria/core';
import { useRef, type ReactNode } from 'react';
import { OpenModal } from './Modal';
import { Navigate } from './location/navigate';

const className = css`
    border: 1px var(--border) solid;
    border-radius: .5rem;
    font-size: .8rem;
    color: var(--text);
    text-decoration: none;
    background-color: rgb(43, 42, 51);
    text-align: center;
    height: 1.5rem;

    &:hover {
        background-color: rgb(82, 82, 94);
    }
`;

function OpenButton({ modal, children }: { modal: ReactNode, children: ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button className={className} onClick={() => dialogRef.current?.showModal()} type="button">{children}</button>
            <dialog closedby="any" ref={dialogRef}>{modal}</dialog>
        </>
    );
}

interface ButtonProps {
    action: Navigate|OpenModal|'submit'|(() => void);
    children: ReactNode;
}

export default function Button({ action, children }: ButtonProps) {
    if (action instanceof Navigate) {
        return <a className={className} href={`#${action.to}`}>{children}</a>
    }

    if (action instanceof OpenModal) {
        return <OpenButton modal={action.modal}>{children}</OpenButton>
    }

    if (action === 'submit') {
        return <button className={className} type="submit">{children}</button>
    }

    return (
        <button className={className} onClick={action} type="button">{children}</button>
    )
}
