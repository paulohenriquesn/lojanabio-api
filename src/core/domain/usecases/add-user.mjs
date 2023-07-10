import { AlreadyExistsError } from "../../main/errors/already-exists.mjs";

export class addUser {
  bcryptAdapter;
  addUserRepository;
  getUserByEmailRepository;

  constructor(bcryptAdapter, addUserRepository, getUserByEmailRepository) {
    this.bcryptAdapter = bcryptAdapter;
    this.addUserRepository = addUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
  }

  async handle(input) {
    const { email, password, firstName, lastName, storeName, storeSlug } =
      input;

    const userExists = await this.getUserByEmailRepository.handle({ email });

    if (!!userExists) {
      throw new AlreadyExistsError("User");
    }

    const hashedPassword = await this.bcryptAdapter.encrypt(password);

    const { userId } = await this.addUserRepository.handle({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
  }
}
