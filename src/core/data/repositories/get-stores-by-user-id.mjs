import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetStoresByUserIdRepository extends Repository {
  async handle(store) {
    const { userID } = store;
    const { stores } = await arc.tables();

    const documents = await stores.scan({
      FilterExpression: "userID = :userID",
      ExpressionAttributeValues: { ":userID": userID },
    });

    return documents.Items;
  }
}
