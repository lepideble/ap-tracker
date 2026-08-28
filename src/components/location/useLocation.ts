import { useSyncExternalStore } from 'react';

export default function() {
    return useSyncExternalStore(
        (callback) => {
            window.addEventListener('hashchange', callback);

            return () => {
                window.removeEventListener('hashchange', callback);
            };
        },
        () => window.location.hash.substring(1),
    );
}
