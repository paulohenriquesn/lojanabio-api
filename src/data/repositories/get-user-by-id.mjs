import arc from "@architect/functions";
import { Repository } from "../../domain/abstracts/repository.mjs";

export class GetUserByIdRepository extends Repository {
  async handle(user) {
    const { id } = user;
    const { users } = await arc.tables();

    const documents = await users.scan({
        FilterExpression : 'userID = :id',
        ExpressionAttributeValues : {':id' : id},
    })

    return documents.Items.at(0)
  }
}
