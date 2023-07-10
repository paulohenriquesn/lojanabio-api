import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetProductsRepository extends Repository {
  async handle(store) {
    const { storeID, limit, next } = store;
    const { products } = await arc.tables();

    const params = {
      FilterExpression: "storeID = :storeID",
      ExpressionAttributeValues: { ":storeID": storeID },
      Limit: limit ? limit : 8,
    };

    if (next) {
      params.ExclusiveStartKey = {
        productID: next,
        storeID: storeID,
      };
    }

    const documents = await products.scan(params);

    return documents.Items;
  }
}
