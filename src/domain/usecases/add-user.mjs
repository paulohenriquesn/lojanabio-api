import { AlreadyExistsError } from "../../main/errors/already-exists.mjs";

export class addUser {
  bcryptAdapter;
  addUserRepository;
  getUserByEmailRepository;
  getStoreBySlugRepository;
  addStoreRepository;

  constructor(
    bcryptAdapter,
    addUserRepository,
    getUserByEmailRepository,
    getStoreBySlugRepository,
    addStoreRepository
  ) {
    this.bcryptAdapter = bcryptAdapter;
    this.addUserRepository = addUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.getStoreBySlugRepository = getStoreBySlugRepository;
    this.addStoreRepository = addStoreRepository;
  }

  async handle(input) {
    const { email, password, firstName, lastName, storeName, storeSlug } =
      input;

    const userExists = await this.getUserByEmailRepository.handle({ email });

    if (!!userExists) {
      throw new AlreadyExistsError("User");
    }

    const storeExists = await this.getStoreBySlugRepository.handle({
      storeSlug,
    });

    if (!!storeExists) {
      throw new AlreadyExistsError("Store");
    }

    const hashedPassword = await this.bcryptAdapter.encrypt(password);

    const { userId } = await this.addUserRepository.handle({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    await this.addStoreRepository.handle({
      storeName,
      storeSlug,
      userID: userId,
    });
  }
}
