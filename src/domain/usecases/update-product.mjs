export class updateProduct {
  updateProductRepository;

  constructor(updateProductRepository) {
    this.updateProductRepository = updateProductRepository;
  }

  async handle(input) {
    await this.updateProductRepository.handle(input);
  }
}
