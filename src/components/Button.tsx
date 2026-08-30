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
    text-align: center;
    height: 1.8rem;

    &:hover {
        background-color: var(--color-background);
    }
`;

interface ButtonProps {
    action: Action;
    children: ReactNode;
}

export default function Button({ action, children }: ButtonProps) {
    const [Component, props] = getProps(action);

    return <Component {...props} className={className}>{children}</Component>
}
