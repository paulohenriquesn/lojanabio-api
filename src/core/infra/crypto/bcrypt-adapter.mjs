import bcryptjs from 'bcryptjs'
import { Encrypter } from '../../domain/abstracts/encrypter.mjs'

export class BcryptAdapter extends Encrypter  {
    async encrypt(password) {
        return bcryptjs.hashSync(password, 8)
    }

    async decrypt(password, hash) {
        return bcryptjs.compareSync(password, hash)
    }
}