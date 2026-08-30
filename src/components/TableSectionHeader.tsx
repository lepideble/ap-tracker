import type { ReactNode } from 'react';
import { useToggleOpen } from './TableSection';
import { css } from '@linaria/core';

const className = css`
    cursor: pointer;

    & > th:first-child {
        padding-left: .2rem;
    }

    & > th:first-child::before {
        content: '▸';
        display: inline-block;
        width: 1rem;
        text-align: center;
    }

    .expanded > & > th:first-child::before {
        content: '▾';
    }
`

export interface TableSectionHeaderProps {
    children: ReactNode;
}

export default function TableSectionHeader({ children }: TableSectionHeaderProps) {
    const toggleOpen = useToggleOpen();

    return (
        <tr className={`${className} header`} onClick={toggleOpen}>
            {children}
        </tr>
    );
}
