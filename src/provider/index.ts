import { type Core } from '../core';
import { ConnectionManger } from '../core/Connection';
import { TrackerManager } from '../core/Tracker';
import ArchipelagoJsClient from './ArchipelagoJsClient';
import SlotRepostitory from './StorageSlotRepository';

export function createCore(): Core {
    const slots = new SlotRepostitory(localStorage, 'slots');
    const client = new ArchipelagoJsClient();
    const connections = new ConnectionManger(client);
    const trackers = new TrackerManager(connections);

    return {
        trackers,
        slots,
    };
}
