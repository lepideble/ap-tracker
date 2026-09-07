import { css } from '@linaria/core';
import { type ReactNode } from 'react';
import getProps, { type Action } from './action/getProps';

const className = css`
    cursor: pointer;
    border: 1px var(--color-border) solid;
    border-radius: .5rem;
    font-size: .8rem;
    color: var(--text);
    text-decoration: none;
    background-color: var(--color-background-light);
    height: 1.8rem;
    width: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .25rem;

    &:hover {
        background-color: var(--color-background);
    }
`;

interface IconButtonProps {
    action: Action;
    label: string;
    children: ReactNode;
}

export default function IconButton({ action, label, children }: IconButtonProps) {
    const [Component, props] = getProps(action);

    return <Component {...props} aria-label={label} className={className} title={label}>{children}</Component>
}
