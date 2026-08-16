import { useSyncExternalStore } from 'react';
import type { Reactive } from '../core/Reactive';

export default function useReactive<T>(reactive: Reactive<T>): T {
    return useSyncExternalStore((callback) => reactive.subscribe(callback), () => reactive.value);
}
