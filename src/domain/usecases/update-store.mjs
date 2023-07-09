export class updateStore {
    updateStoreRepository;
  
    constructor(updateStoreRepository) {
      this.updateStoreRepository = updateStoreRepository;
    }
  
    async handle(input) {
      const { storeID, userID, name } = input;
  
      await this.updateStoreRepository.handle({
        storeID,
        userID,
        name
      });
    }
  }
  