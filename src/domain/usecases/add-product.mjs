import { NotFoundError } from "../../main/errors/not-found.mjs";

export class addProduct {
  addProductRepository;
  getStoreByIdRepository;

  constructor(addProductRepository, getStoreByIdRepository) {
    this.addProductRepository = addProductRepository;
    this.getStoreByIdRepository = getStoreByIdRepository;
  }

  async handle(input) {
    const { storeID, userID } = input;
    const storeExists = await this.getStoreByIdRepository.handle({
      storeID,
      userID
    });

    if (!storeExists) {
      throw new NotFoundError("Store");
    }

    await this.addProductRepository.handle(input);

  }
}
