import {InvalidAuthError} from '../../main/errors/invalid-auth.mjs'
import {NotFoundError} from '../../main/errors/not-found.mjs'

export class authUser  {

    bcryptAdapter
    jwtAdapter
    getUserByEmailRepository

    constructor(
        bcryptAdapter,
        jwtAdapter,
        getUserByEmailRepository
    ) {
        this.bcryptAdapter = bcryptAdapter
        this.jwtAdapter = jwtAdapter
        this.getUserByEmailRepository = getUserByEmailRepository
    }

    async handle(input) {
        const {email, password} = input;

        const user = await this.getUserByEmailRepository.handle({email})
        
        if(!user) {
            throw new NotFoundError('User')
        }

        const validatePassword = await this.bcryptAdapter.decrypt(password, user.password)

        if(!validatePassword) {
            throw new InvalidAuthError()
        }
        

        return await this.jwtAdapter.encrypt(user.userID)
    }
}