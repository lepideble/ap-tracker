import { Suspense, useMemo } from 'react';

import Button from '../components/Button';
import Main from '../components/Main';
import Root from '../components/Root';
import SideBar from '../components/SideBar';
import { openModal } from '../components/Modal';
import useReactive from '../components/useReactive';
import type { Core } from '../core';
import Tracker from './Tracker';
import AddSlotModal from './AddSlotModal';
import { navigate, useLocation } from '../components';

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
                <Button action={openModal(<AddSlotModal slots={core.slots} />)}>Add slot</Button>
                {slots.map((slot) => (
                    <Button key={slot.id} action={navigate(slot.id)}>{slot.label}</Button>
                ))}
            </SideBar>
            <Main>
                <Suspense fallback="Loading">
                    {currentSlot ? <Tracker core={core} slot={currentSlot} /> : null}
                </Suspense>
            </Main>
        </Root>
    );    
}
