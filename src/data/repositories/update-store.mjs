import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class UpdateStoreRepository extends Repository {
  async handle(store) {
    const { name, storeID, userID } = store;
    const { stores } = await arc.tables();
    await stores.update({
      Key: {
        storeID: storeID,
        userID: userID,
      },
      UpdateExpression: "set #nm = :name",
      ExpressionAttributeNames: {
        "#nm": "name"
      },
      ExpressionAttributeValues: {
        ":name": name,
      },
    });
  } 
}
