import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import { navigate } from '#actions';
import { Button, Header, IconButton, Loader, Scrollable } from '#components';
import { type Core, type Slot } from '#core';
import EditSlot from './forms/EditSlot';
import Items from './Items';
import Locations from './Locations';

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
                <Suspense fallback={<Loader />}>
                    {path === '/locations' || !path? <Locations slot={slot} /> : null}
                    {path === '/items' ? <Items slot={slot} /> : null}
                    {path === '/settings' ? <EditSlot id={slot.id} slots={core.slots} /> : null}
                </Suspense>
            </Scrollable>
        </>
    );
}
