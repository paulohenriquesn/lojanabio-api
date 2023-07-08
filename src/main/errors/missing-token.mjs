export class MissingTokenError extends Error {
    constructor() {
        super(`Token is missing`);
        this.name = 'MissingTokenError';
    }
}