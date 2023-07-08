import {addStore} from '../../domain/usecases/add-store.mjs';
import { GetStoreBySlugRepository } from '../../data/repositories/get-store-by-slug.mjs';
import { AddStoreRepository } from '../../data/repositories/add-store.mjs';

export async function makeAddStore() {
    return new addStore(new GetStoreBySlugRepository(), new AddStoreRepository())
}