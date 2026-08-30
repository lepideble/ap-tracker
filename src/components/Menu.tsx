import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import getProps, { type Action } from './action/getProps';

export default styled.menu`
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const ulClassName = css`
    border: 1px var(--color-border) solid;
    border-radius: .5rem;
    font-size: .8rem;
    background: none;
    text-align: center;
    height: 1.8rem;
    padding: 0;
    display: flex;

    &:hover {
        background-color: var(--color-background-light);
    }

    &.active {
        background-color: var(--color-background);
    }
`;

const componentClassName = css`
    color: var(--text);
    text-decoration: none;
    flex: 1;
    padding: 0.1rem;
`;

interface MenuItemProps {
    action: Action;
    active?: boolean;
    children: ReactNode;
}

export function MenuItem({ action, active = false, children }: MenuItemProps) {
    const [Component, props] = getProps(action);

    return (
        <ul className={`${ulClassName} ${active ? 'active' : ''}`}>
            <Component {...props} className={componentClassName}>{children}</Component>
        </ul>
    );
}
