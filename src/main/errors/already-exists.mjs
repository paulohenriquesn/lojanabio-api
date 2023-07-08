export class AlreadyExistsError extends Error {
    constructor(entity) {
        super(`${entity} already exists`);
        this.name = 'AlreadyExistsError';
    }
}