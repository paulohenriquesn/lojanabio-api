export class NotFoundError extends Error {
    constructor(entity) {
        super(`${entity} not found`);
        this.name = 'NotFoundError';
    }
}