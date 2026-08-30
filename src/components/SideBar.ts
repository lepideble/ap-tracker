import { styled } from '@linaria/react';

export default styled.div`
    width: 18rem;
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
`

export const SideBarContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

export const SideBarFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-top: 1px solid var(--color-border);
`
