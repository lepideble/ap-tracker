import type { ReactNode } from 'react';

export class OpenModal {
    modal: ReactNode;

    constructor(modal: ReactNode) {
        this.modal = modal;
    }
}

export function openModal(modal: ReactNode) {
    return new OpenModal(modal)
}

export const closeModal = Symbol();
