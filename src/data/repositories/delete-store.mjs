import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class DeleteStoreRepository extends Repository {
  async handle(store) {
    const { userID, storeID } = store;
    const { stores } = await arc.tables();

    await stores.delete({
      storeID,
      userID,
    });
  }
}
