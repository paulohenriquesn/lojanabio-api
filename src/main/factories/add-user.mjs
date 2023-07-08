import {addUser} from '../../domain/usecases/add-user.mjs';
import { JwtAdapter } from '../../infra/crypto/jwt-adapter.mjs';
import { AddUserRepository } from '../../data/repositories/add-user.mjs'
import { GetUserByEmailRepository } from '../../data/repositories/get-user-by-email.mjs';

export async function makeAddUser() {
    return new addUser(new JwtAdapter(), new AddUserRepository(), new GetUserByEmailRepository())
}