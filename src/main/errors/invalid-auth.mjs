export class InvalidAuthError extends Error {
    constructor() {
        super(`Credentials incorrect`);
        this.name = 'InvalidAuthError';
    }
}