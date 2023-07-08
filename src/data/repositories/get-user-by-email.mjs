import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetUserByEmailRepository extends Repository {
  async handle(user) {
    const { email } = user;
    const { users } = await arc.tables();

    const documents = await users.scan({
        FilterExpression : 'email = :email',
        ExpressionAttributeValues : {':email' : email},
    })

    return documents.Items.at(0)
  }
}
