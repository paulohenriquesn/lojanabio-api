import { AlreadyExistsError } from "../../main/errors/already-exists.mjs";

export class addStore {
  getStoreBySlugRepository;
  addStoreRepository;

  constructor(getStoreBySlugRepository, addStoreRepository) {
    this.getStoreBySlugRepository = getStoreBySlugRepository;
    this.addStoreRepository = addStoreRepository;
  }

  async handle(input) {
    const { name, slug, userID } = input;

    const storeExists = await this.getStoreBySlugRepository.handle({
      storeSlug: slug,
    });

    if (!!storeExists) {
      throw new AlreadyExistsError("Store");
    }

    await this.addStoreRepository.handle({
      storeName: name,
      storeSlug: slug,
      userID,
    });
  }
}
