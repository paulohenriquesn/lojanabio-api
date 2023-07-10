import { getStores } from '../../domain/usecases/get-stores.mjs';
import { GetStoresByUserIdRepository } from '../../data/repositories/get-stores-by-user-id.mjs';

export async function makeGetStores() {
    return new getStores(new GetStoresByUserIdRepository())
}