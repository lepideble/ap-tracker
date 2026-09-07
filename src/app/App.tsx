import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Suspense, useMemo } from 'react';
import Button from '../components/Button';
import Main from '../components/Main';
import Root from '../components/Root';
import { openModal } from '../components/Modal';
import useReactive from '../components/useReactive';
import { IconButton, Loader, Menu, MenuItem, navigate, SideBar, SideBarContent, SideBarHeader, useLocation } from '../components';
import type { Core } from '../core';
import Tracker from './Tracker';
import AddSlotModal from './AddSlotModal';
import Settings from './Settings';

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
                <SideBarHeader>
                    Slots <IconButton action={navigate('settings')} label="Manage slots"><Cog6ToothIcon /></IconButton>
                </SideBarHeader>
                <SideBarContent>
                    {slots.length ? (
                        <Menu>
                            {slots.map((slot) => (
                                <MenuItem
                                    key={slot.id}
                                    action={navigate(slot.id)}
                                    active={currentSlot === slot}
                                >{slot.label}</MenuItem>
                            ))}
                        </Menu>
                    ): (
                        <Button action={openModal(<AddSlotModal slots={core.slots} />)}>Add slot</Button>
                    )}
                </SideBarContent>
            </SideBar>
            <Main>
                <Suspense fallback={<Loader />}>
                    {location.startsWith('settings') ? <Settings core={core} /> : null}
                    {currentSlot ? <Tracker core={core} slot={currentSlot} /> : null}
                </Suspense>
            </Main>
        </Root>
    );    
}
