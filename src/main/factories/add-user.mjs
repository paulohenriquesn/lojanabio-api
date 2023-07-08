import {addUser} from '../../domain/usecases/add-user.mjs';
import { BcryptAdapter } from '../../infra/crypto/bcrypt-adapter.mjs';
import { AddUserRepository } from '../../data/repositories/add-user.mjs'
import { GetUserByEmailRepository } from '../../data/repositories/get-user-by-email.mjs';

export async function makeAddUser() {
    return new addUser(new BcryptAdapter(), new AddUserRepository(), new GetUserByEmailRepository())
}