import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetStoreByIdRepository extends Repository {
  async handle(store) {
    const { storeID, userID } = store;
    const { stores } = await arc.tables();

    const documents = await stores.scan({
      FilterExpression: "storeID = :storeID and userID = :userID",
      ExpressionAttributeValues: { ":storeID": storeID, ":userID": userID },
    });

    return documents.Items.at(0);
  }
}
