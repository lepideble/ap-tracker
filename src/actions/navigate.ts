export class Navigate {
    #to: string;

    constructor(to: string) {
        this.#to = to;
    }

    get to() {
        return this.#to
    }
}

export default function navigate(to: string) {
    return new Navigate(to);
}
