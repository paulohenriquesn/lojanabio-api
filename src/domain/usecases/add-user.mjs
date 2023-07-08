import { Encrypter } from "../abstracts/encrypter.mjs";
import { AddUserRepository } from '../../data/repositories/add-user.mjs'
import { nanoid } from 'nanoid'

export class addUser  {

    encrypterAdapter
    addUserRepository

    constructor(
         encrypterAdapter,
         addUserRepository
    ) {
        this.encrypterAdapter = encrypterAdapter
        this.addUserRepository = addUserRepository
    }

    async handle(input) {
        const {email, password, firstName, lastName} = input;

        const userId = nanoid()
        const hashedPassword = await this.encrypterAdapter.encrypt(userId)

        await this.addUserRepository.handle({
            userId,
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    }
}