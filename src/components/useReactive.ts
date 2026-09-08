import { useCallback, useSyncExternalStore } from 'react';
import type { Reactive } from '../core/Reactive';

export default function useReactive<T>(reactive: Reactive<T>): T {
    const subscribe = useCallback((callback: () => void) => reactive.subscribe(callback), [reactive]);
    const getSnapshot = useCallback(() => reactive.value, [reactive]);

    return useSyncExternalStore(subscribe, getSnapshot);
}
