import { useSyncExternalStore } from 'react';

const subscribe = (callback: () => void): () => void => {
    window.addEventListener('hashchange', callback);

    return () => {
        window.removeEventListener('hashchange', callback);
    };
};
const getSnapshot = () => window.location.hash.substring(1);

export default function() {
    return useSyncExternalStore(subscribe, getSnapshot);
}
