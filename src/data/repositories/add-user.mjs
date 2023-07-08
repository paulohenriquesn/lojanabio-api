import { nanoid } from 'nanoid'
import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class AddUserRepository extends Repository {
  async handle(user) {
    const { email, password, firstName, lastName } = user;
    const { users } = await arc.tables();

    const userId = nanoid();

    await users.put({
      userID: nanoid(),
      email,
      password,
      firstName,
      lastName,
    });

    return {userId}
  }
}
