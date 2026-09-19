import { css } from '@linaria/core';
import type { ReactNode } from 'react';

const root = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: 1px solid var(--color-border);
    flex: none;
`;

const content = css`
    display: flex;
    gap: 1rem;
`

export interface HeaderProps {
    actions?: ReactNode;
    children?: ReactNode;
}

export default function Header({ actions, children }: HeaderProps) {
    return (
        <div className={root}>
            <div className={content}>{children}</div>
            {actions ? <div>{actions}</div> : null}
        </div>
    )
}
