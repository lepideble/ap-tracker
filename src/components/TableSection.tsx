import { css } from '@linaria/core';
import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

const ToggleOpenContext = createContext<(() => void)|null>(null);

export function useToggleOpen(): () => void {
    const toggleOpen = useContext(ToggleOpenContext);

    if (!toggleOpen) {
        throw new Error('useToggleOpen can only be used inside a ToggleOpenContext');
    }

    return toggleOpen;
}

const className = css`
    th:first-child {
        text-align: left;
    }

    td:first-child {
        padding-left: 2rem;
    }

    tr {
        display: none;
    }

    &.expanded tr,
    tr.header {
        display: table-row;
    }
`

export interface TableSectionProps {
    children: ReactNode
    defaultOpen?: boolean;
}

export default function TableSection({ children, defaultOpen = false }: TableSectionProps) {
    const [open, setOpen] = useState(defaultOpen);
    const toggleOpen = useCallback(() => setOpen((current) => !current), [setOpen]);

    return (
        <tbody className={`${className}${open ? ' expanded' : ''}`}>
            <ToggleOpenContext.Provider value={toggleOpen}>
                {children}
            </ToggleOpenContext.Provider>
        </tbody>
    );
}
