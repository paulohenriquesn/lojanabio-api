import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class DeleteProductRepository extends Repository {
  async handle(store) {
    const { storeID, productID } = store;
    const { products } = await arc.tables();
    await products.delete({
      storeID,
      productID,
    });
  }
}
