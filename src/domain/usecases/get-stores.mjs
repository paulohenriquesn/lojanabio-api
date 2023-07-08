export class getStores {
  getStoresByUserIdRepository;

  constructor(getStoresByUserIdRepository) {
    this.getStoresByUserIdRepository = getStoresByUserIdRepository;
  }

  async handle(input) {
    const { userID } = input;
    const stores = await this.getStoresByUserIdRepository.handle({ userID });
    return stores.map((store) => {
      return {
        id: store.storeID,
        name: store.name,
        slug: store.slug,
      };
    });
  }
}
