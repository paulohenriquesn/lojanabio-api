import { deleteProduct } from "../../domain/usecases/delete-product.mjs";
import { DeleteProductRepository } from "../../data/repositories/delete-product.mjs";

export async function makeDeleteProduct() {
  return new deleteProduct(new DeleteProductRepository());
}
