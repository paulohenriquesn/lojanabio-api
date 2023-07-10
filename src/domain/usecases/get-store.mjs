export class getStore {
    getStoreBySlugRepository;
  
    constructor(getStoreBySlugRepository) {
      this.getStoreBySlugRepository = getStoreBySlugRepository;
    }
  
    async handle(input) {
      const { slug } = input;
      const store = await this.getStoreBySlugRepository.handle({ storeSlug: slug })
      return {
          id: store.storeID,
          name: store.name,
          slug
        }
    }
  }
    