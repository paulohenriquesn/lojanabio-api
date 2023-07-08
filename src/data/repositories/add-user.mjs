import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class AddUserRepository extends Repository {
  async handle(user) {
    const { userId, email, password, firstName, lastName } = user;
    const { users } = await arc.tables();

    await users.put({
      userID: userId,
      email,
      password,
      firstName,
      lastName,
    });
  }
}
