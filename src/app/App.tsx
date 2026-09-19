import { PlusIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react';
import { navigate } from '#actions';
import { Header, IconButton, Main, Menu, MenuItem, Root, Scrollable, SideBar, useLocation, useReactive } from '#components';
import { type Core } from '#core';
import AddSlot from './forms/AddSlot';
import Tracker from './Tracker';

export interface AppProps {
    core: Core;
}

export default function App({ core }: AppProps) {
    const slots = useReactive(core.slots);

    const location = useLocation();

    const currentSlot = useMemo(() => slots.find(({ id }) => location.startsWith(id)), [slots, location]);

    return (
        <Root>
            <SideBar>
                <Header actions={<IconButton action={navigate('add')} label="Add slot"><PlusIcon strokeWidth={2} /></IconButton>}>
                    Slots
                </Header>
                <Scrollable>
                    <Menu>
                        {slots.map((slot) => (
                            <MenuItem key={slot.id} action={navigate(slot.id)} active={currentSlot === slot}>
                                {slot.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Scrollable>
            </SideBar>
            <Main>
                {location === 'add' || slots.length === 0 ? (
                    <>
                        <Header />
                        <Scrollable>
                            <AddSlot slots={core.slots} />
                        </Scrollable>
                    </>
                ) : null}
                {currentSlot ? <Tracker core={core} path={location.slice(currentSlot.id.length)} slot={currentSlot} /> : null}
            </Main>
        </Root>
    );    
}
