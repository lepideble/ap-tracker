export type Callback = () => void;
export type Subscriber = () => void;
export type Subscribe = (callback: Callback) => Subscriber;

export interface Reactive<T> {
    value: T;
    subscribe: Subscribe;
}

export function makeState<T>(initial: T): [Reactive<T>, (value: T) => void] {
    const subscribers: Callback[] = [];

    const reactive = {
        value: initial,
        subscribe: (callback: Callback) => {
            subscribers.push(callback);

            return () => {
                const index = subscribers.indexOf(callback);
                if (index > -1) {
                    subscribers.splice(index, 1);
                }
            }
        },
    };

    const update = (value: T) => {
        reactive.value = value;

        for (const subscriber of subscribers) {
            subscriber();
        }
    }

    return [reactive, update];
}

export function makeLazy<T>(getValue: () => T, subscribe: Subscribe): Reactive<T> {
    const subscribers: Callback[] = [];

    let value: T;
    let stale = true;

    const trigger: Callback = () => {
        stale = true;
        for (const subscriber of subscribers) {
            subscriber();
        }
    }

    let subscriber: Subscriber|null = null;

    const reactive = {
        get value() {
            if (stale) {
                value = getValue();
                stale = false;
            }

            return value;
        },
        subscribe: (callback: Callback) => {
            subscribers.push(callback);

            if (!subscriber) {
                subscriber = subscribe(trigger)
            }

            return () => {
                const index = subscribers.indexOf(callback);
                if (index > -1) {
                    subscribers.splice(index, 1);
                }

                if (subscribers.length === 0 && subscriber) {
                    subscriber()
                    subscriber = null;
                }
            }
        },
    };

    return reactive;
}

export function compute<A1, R>(mapper: (arg1: A1) => R, values: [Reactive<A1>]): Reactive<R>;
export function compute<A1, A2, R>(mapper: (arg1: A1, arg2: A2) => R, values: [Reactive<A1>, Reactive<A2>]): Reactive<R>;
export function compute(mapper: (...values: any[]) => any, values: Reactive<any>[]): Reactive<any> {
    return {
        get value() {
            return mapper(...values.map((value) => value.value));
        },
        subscribe(callback: Callback) {
            const unsubscribes = values.map((value) => value.subscribe(callback));

            return () => {
                unsubscribes.forEach((unsubscribe) => {
                    unsubscribe();
                });
            };
        },
    }
}

export function combine<T, U>(values: Reactive<T>[], mapper: (values: T[]) => U): Reactive<U> {
    return {
        get value() {
            return mapper(values.map((value) => value.value));
        },
        subscribe(callback: Callback) {
            const unsubscribes = values.map((value) => value.subscribe(callback));

            return () => {
                unsubscribes.forEach((unsubscribe) => {
                    unsubscribe();
                });
            };
        },
    }
}
