import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { type ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { navigate } from '#actions';
import { Button, Header, IconButton, Loader, Scrollable } from '#components';
import { type Core, type Slot } from '#core';
import EditSlot from './forms/EditSlot';
import Items from './Items';
import Locations from './Locations';

function Wrapper({ children }: { children: ReactNode }) {
    return (
        <ErrorBoundary fallback={<div>Error connecting to server</div>}>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export interface TrackerProps {
    core: Core;
    path: string;
    slot: Slot;
}

export default function Tracker({ core, path, slot }: TrackerProps) {
    return (
        <>
            <Header actions={<IconButton action={navigate(`${slot.id}/settings`)} icon={<Cog6ToothIcon strokeWidth={2} />} label="Settings" />}>
                <Button action={navigate(`${slot.id}/locations`)}>Locations</Button>
                <Button action={navigate(`${slot.id}/items`)}>Items</Button>
            </Header>
            <Scrollable>
                {path === '/locations' || !path? <Wrapper><Locations slot={slot} /></Wrapper> : null}
                {path === '/items' ? <Wrapper><Items slot={slot} /></Wrapper> : null}
                {path === '/settings' ? <EditSlot id={slot.id} slots={core.slots} /> : null}
            </Scrollable>
        </>
    );
}
