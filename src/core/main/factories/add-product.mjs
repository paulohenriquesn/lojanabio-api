import { AddProductRepository } from '../../data/repositories/add-product.mjs';
import { GetStoreByIdRepository } from '../../data/repositories/get-store-by-id.mjs';
import { addProduct } from '../../domain/usecases/add-product.mjs';

export async function makeAddProduct() {
    return new addProduct(new AddProductRepository(), new GetStoreByIdRepository())
}