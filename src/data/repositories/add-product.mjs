import arc from "@architect/functions";
import { nanoid } from "nanoid";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class AddProductRepository extends Repository {
  async handle(product) {
    const { products } = await arc.tables();

    await products.put({
      ...product,
      productID: nanoid(),
    });
  }
}
