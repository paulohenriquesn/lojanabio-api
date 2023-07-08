import {addUser} from '../../domain/usecases/add-user.mjs';
import { BcryptAdapter } from '../../infra/crypto/bcrypt-adapter.mjs';
import { AddUserRepository } from '../../data/repositories/add-user.mjs'
import { GetUserByEmailRepository } from '../../data/repositories/get-user-by-email.mjs';
import { GetStoreBySlugRepository } from '../../data/repositories/get-store-by-slug.mjs';
import { AddStoreRepository } from '../../data/repositories/add-store.mjs';

export async function makeAddUser() {
    return new addUser(new BcryptAdapter(), new AddUserRepository(), new GetUserByEmailRepository(), new GetStoreBySlugRepository(), new AddStoreRepository())
}