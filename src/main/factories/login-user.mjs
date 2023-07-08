import { authUser } from '../../domain/usecases/login-user.mjs';
import { BcryptAdapter } from '../../infra/crypto/bcrypt-adapter.mjs';
import { JwtAdapter } from '../../infra/crypto/jwt-adapter.mjs';
import { GetUserByEmailRepository } from '../../data/repositories/get-user-by-email.mjs';

export async function makeLoginUser() {
    return new authUser(new BcryptAdapter(), new JwtAdapter(), new GetUserByEmailRepository())
}