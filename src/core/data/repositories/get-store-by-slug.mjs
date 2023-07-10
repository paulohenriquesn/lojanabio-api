import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetStoreBySlugRepository extends Repository {
  async handle(store) {
    const { storeSlug } = store;
    const { stores } = await arc.tables();

    const documents = await stores.scan({
        FilterExpression : 'slug = :slug',
        ExpressionAttributeValues : {':slug' : storeSlug},
    })

    return documents.Items.at(0)
  }
}
