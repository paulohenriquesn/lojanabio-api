import { Encrypter } from "../abstracts/encrypter.mjs";
import { AddUserRepository } from '../../data/repositories/add-user.mjs'
import { GetUserByEmailRepository } from '../../data/repositories/get-user-by-email.mjs'
import { nanoid } from 'nanoid'

export class addUser  {

    encrypterAdapter
    addUserRepository
    getUserByEmailRepository

    constructor(
         encrypterAdapter,
         addUserRepository, 
         getUserByEmailRepository
    ) {
        this.encrypterAdapter = encrypterAdapter
        this.addUserRepository = addUserRepository
        this.getUserByEmailRepository = getUserByEmailRepository
    }

    async handle(input) {
        const {email, password, firstName, lastName} = input;

        const userExists = await this.getUserByEmailRepository.handle({email})

        if(!!userExists) {
            throw new Error('User already exists')
        }

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