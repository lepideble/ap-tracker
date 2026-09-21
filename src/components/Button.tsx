import { styled } from '@linaria/react';
import { Button } from '#actions';

export default styled(Button)`
    cursor: pointer;
    border: 1px var(--color-border) solid;
    border-radius: .5rem;
    font-size: .8rem;
    color: var(--text);
    text-decoration: none;
    background-color: var(--color-background-light);
    text-align: center;
    height: 1.8rem;
    padding-left: .5rem;
    padding-right: .5rem;

    &:hover {
        background-color: var(--color-background);
    }
`;
