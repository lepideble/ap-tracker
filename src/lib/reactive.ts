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

        subscribers.forEach((subscriber) => subscriber());
    }

    return [reactive, update];
}

export function compute<A1, R>(mapper: (arg1: A1) => R, values: [Reactive<A1>]): Reactive<R>;
export function compute<A1, A2, R>(mapper: (arg1: A1, arg2: A2) => R, values: [Reactive<A1>, Reactive<A2>]): Reactive<R>;
export function compute(mapper: (...values: any[]) => any, values: Reactive<any>[]): Reactive<any> {
    let value: any;
    let stale = true;

    let subscribers: Callback[] = [];
    let subscriptions: Subscriber[]|null = null;

    const trigger: Callback = () => {
        stale = true;

        subscribers.forEach((subscriber) => subscriber());
    };

    return {
        get value() {
            if (stale) {
                value = mapper(...values.map((value) => value.value));
                stale = false;
            }

            return value;
        },
        subscribe(callback: Callback) {
            subscribers.push(callback);

            if (subscriptions === null) {
                subscriptions = values.map((value) => value.subscribe(trigger));
                stale = true;
            }

            return () => {
                const index = subscribers.indexOf(callback);
                if (index > -1) {
                    subscribers.splice(index, 1);
                }

                if (subscribers.length === 0 && subscriptions !== null) {
                    subscriptions.forEach((subscription) => subscription());
                    subscriptions = null;
                }
            }
        },
    }
}

export function combine<T, U>(values: Reactive<T>[], mapper: (values: T[]) => U): Reactive<U> {
    return {
        get value() {
            return mapper(values.map((value) => value.value));
        },
        subscribe(callback: Callback) {
            const subscriptions = values.map((value) => value.subscribe(callback));

            return () => {
                subscriptions.forEach((subscription) => subscription());
            };
        },
    }
}
