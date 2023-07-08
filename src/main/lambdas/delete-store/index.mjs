import { badRequest, deleted, unAuthorized } from "../../helpers/http.mjs";
import { MissingParamError } from "../../errors/missing-param.mjs";
import { makeDeleteStore } from "../../factories/delete-store.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";

export async function handler(req) {
  try {
    const { userID } = await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = ["id"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { id: storeID } = body;

    const usecase = await makeDeleteStore();
    await usecase.handle({
      storeID,
      userID,
    });

    return deleted();
  } catch (error) {
    return unAuthorized(error);
  }
}
