import { getStore } from '../../domain/usecases/get-store.mjs';
import { GetStoreBySlugRepository } from '../../data/repositories/get-store-by-slug.mjs';

export async function makeGetStore() {
    return new getStore(new GetStoreBySlugRepository())
}