import { GetUserByIdRepository } from '../../data/repositories/get-user-by-id.mjs'
import { JwtAdapter } from '../../infra/crypto/jwt-adapter.mjs'
import { InvalidTokenError } from '../errors/invalid-token.mjs'
import { MissingTokenError } from '../errors/missing-token.mjs'

export const authMiddleware = async (req) => {
    const { authorization } = req.headers;
    if(!authorization) throw new MissingTokenError()
    
    const jwtAdapter = new JwtAdapter()

    const user = await jwtAdapter.decrypt(authorization)

    if(!user) throw new InvalidTokenError()

    const findUserByIdRepository = new GetUserByIdRepository()

    const { userID, email, firstName, lastName } = await findUserByIdRepository.handle({
        id: user.id
    })

   return { userID, email, firstName, lastName }
}