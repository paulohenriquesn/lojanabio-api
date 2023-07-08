import jwt from 'jsonwebtoken'
import { Encrypter } from '../../domain/abstracts/encrypter.mjs'

export class JwtAdapter extends Encrypter  {
    async encrypt(id) {
        return jwt.sign({id}, 'SECRET_LOJA_NA_BIO')
    }

    async decrypt(token) {
        return jwt.verify(token, 'SECRET_LOJA_NA_BIO')
    }
}