export class deleteProduct {
    deleteProductRepository;
  
    constructor(deleteProductRepository) {
      this.deleteProductRepository = deleteProductRepository;
    }
  
    async handle(input) {
      const { productID, storeID } = input;
      
      await this.deleteProductRepository.handle({
        storeID,
        productID,
      });
    }
  }
  