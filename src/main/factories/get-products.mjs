import { GetProductsRepository } from '../../data/repositories/get-products.mjs';
import { getProducts } from '../../domain/usecases/get-products.mjs';

export async function makeGetProducts() {
    return new getProducts(new GetProductsRepository())
}