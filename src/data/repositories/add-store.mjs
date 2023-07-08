import { nanoid } from 'nanoid'
import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class AddStoreRepository extends Repository {
  async handle(store) {
    const { userID, storeName, storeSlug } = store;
    const { stores } = await arc.tables();

    await stores.put({
      storeID: nanoid(),
      userID,
      name: storeName,
      slug: storeSlug,
    });
  }
}
