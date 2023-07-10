export class getProducts {
    getProductsRepository;
  
    constructor(getProductsRepository) {
      this.getProductsRepository = getProductsRepository;
    }
  
    async handle(input) {
        const products = await this.getProductsRepository.handle(input);
      return products.map((product) => {
        return {
            id: product.productID,
            name: product.name,
            description: product.description,
            imageUrl: product.imageURL,
            affiliateUrl: product.affiliateURL
        }
      })
    }
  }
  