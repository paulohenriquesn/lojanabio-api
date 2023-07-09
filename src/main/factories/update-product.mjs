import { updateProduct } from "../../domain/usecases/update-product.mjs";
import { UpdateProductRepository } from "../../data/repositories/update-product.mjs";

export async function makeUpdateProduct() {
  return new updateProduct(new UpdateProductRepository());
}
