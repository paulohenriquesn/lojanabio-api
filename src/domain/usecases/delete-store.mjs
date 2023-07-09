export class deleteStore {
  deleteStoreRepository;

  constructor(deleteStoreRepository) {
    this.deleteStoreRepository = deleteStoreRepository;
  }

  async handle(input) {
    const { storeID, userID } = input;

    await this.deleteStoreRepository.handle({
      storeID,
      userID,
    });
  }
}
