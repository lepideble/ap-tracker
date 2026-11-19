import { css } from '@linaria/core';
import { type ReactNode } from 'react';

const className = css`
    &[open]::details-content {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
`;

export interface CollapseProps {
    children: ReactNode;
    label: ReactNode;
}

export default function Collapse({ children, label }: CollapseProps) {
    return (
        <details className={className}>
            <summary>{label}</summary>
            {children}
        </details>
    )
}
