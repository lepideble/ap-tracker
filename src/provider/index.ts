import { type Core, createCore as baseCreateCore } from '#core';
import ArchipelagoJsClient from './ArchipelagoJsClient';
import SlotRepostitory from './StorageSlotRepository';

export function createCore(): Core {
    const slotRepository = new SlotRepostitory(localStorage, 'slots');
    const client = new ArchipelagoJsClient();

    return baseCreateCore({ client, slotRepository });
}
