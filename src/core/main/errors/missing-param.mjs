export class MissingParamError extends Error {
    constructor(param) {
        super(`Param: ${param} is missing`);
        this.name = 'MissingParamError';
    }
}