import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { Button, type ButtonProps } from '#actions';

export default styled.menu`
    margin: 0;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const liClassName = css`
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

const buttonClassName = css`
    color: var(--text);
    text-decoration: none;
    flex: 1;
    padding: 0.1rem;
`;

interface MenuItemProps extends ButtonProps {
    active?: boolean;
    children: ReactNode;
}

export function MenuItem({ active = false, children, ...props }: MenuItemProps) {
    return (
        <li className={`${liClassName} ${active ? 'active' : ''}`}>
            <Button {...props} className={buttonClassName}>{children}</Button>
        </li>
    );
}
