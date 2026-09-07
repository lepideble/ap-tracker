import { styled } from '@linaria/react';

export default styled.ul`
    margin: 0;
    padding: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const ListItem = styled.li`
    display: flex;
    gap: .5rem;

    & > span {
        flex: 1;
    }
`
