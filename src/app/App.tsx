import { Suspense, useMemo } from 'react';

import Button from '../components/Button';
import Main from '../components/Main';
import Root from '../components/Root';
import { openModal } from '../components/Modal';
import useReactive from '../components/useReactive';
import type { Core } from '../core';
import Tracker from './Tracker';
import AddSlotModal from './AddSlotModal';
import { Menu, MenuItem, navigate, SideBar, SideBarContent, SideBarFooter, useLocation } from '../components';

export interface AppProps {
    core: Core;
}

export default function App({ core }: AppProps) {
    const slots = useReactive(core.slots);

    const location = useLocation();

    const currentSlot = useMemo(() => slots.find(({ id }) => id === location), [slots, location])

    return (
        <Root>
            <SideBar>
                <SideBarContent>
                    <Menu>
                        {slots.map((slot) => (
                            <MenuItem
                                key={slot.id}
                                action={navigate(slot.id)}
                                active={currentSlot === slot}
                            >{slot.label}</MenuItem>
                        ))}
                    </Menu>
                </SideBarContent>
                <SideBarFooter>
                    <Button action={openModal(<AddSlotModal slots={core.slots} />)}>Add slot</Button>
                </SideBarFooter>
            </SideBar>
            <Main>
                <Suspense fallback="Loading">
                    {currentSlot ? <Tracker core={core} slot={currentSlot} /> : null}
                </Suspense>
            </Main>
        </Root>
    );    
}
