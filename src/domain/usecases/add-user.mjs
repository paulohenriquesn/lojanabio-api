import { AlreadyExistsError } from '../../main/errors/alredy-exists.mjs'
import { nanoid } from 'nanoid'

export class addUser  {

    bcryptAdapter
    addUserRepository
    getUserByEmailRepository

    constructor(
         bcryptAdapter,
         addUserRepository, 
         getUserByEmailRepository
    ) {
        this.bcryptAdapter = bcryptAdapter
        this.addUserRepository = addUserRepository
        this.getUserByEmailRepository = getUserByEmailRepository
    }

    async handle(input) {
        const {email, password, firstName, lastName} = input;

        const userExists = await this.getUserByEmailRepository.handle({email})

        if(!!userExists) {
            throw new AlreadyExistsError('User')
        }

        const userId = nanoid()
        const hashedPassword = await this.bcryptAdapter.encrypt(password)

        
        await this.addUserRepository.handle({
            userId,
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    }
}