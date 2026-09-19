import { css } from '@linaria/core';
import type { ReactNode } from 'react';

const root = css`
    position: relative;
`;

const wrapper = css`
    position: absolute;
    top: 0;
    right: 0;
`;

export interface ToolbarProps {
    children: ReactNode;
}

export default function Toolbar({ children }: ToolbarProps) {
    return (
        <div className={root}>
            <div className={wrapper}>
                {children}
            </div>
        </div>
    );
}
