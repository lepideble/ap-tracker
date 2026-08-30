import { styled } from '@linaria/react';

export default styled.table`
    width: 100%;

    border-collapse: collapse;

    thead th {
        padding-top: .5rem;
        padding-bottom: .5rem;

        position: sticky;
        top: 0;

        background: var(--color-background-main);
        border: none;
    }

    td, th {
        border-bottom: 1px solid var(--color-border);
        border-top: 1px solid var(--color-border);

        padding-left: .2rem;
        padding-right: .2rem;
    }

    td:first-child,
    th:first-child {
        padding-left: .7rem;
    }

    td:last-child,
    th:last-child {
        padding-right: .7rem;
    }
`
