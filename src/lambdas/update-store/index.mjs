import { badRequest, ok, unAuthorized } from "@architect/shared/main/helpers/http.mjs";
import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";
import { makeUpdateStore } from "@architect/shared/main/factories/update-store.mjs";
import { authMiddleware } from "@architect/shared/main/middlewares/auth.mjs";

export async function handler(req) {
  try {
    const { userID } = await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = ["id","name"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { id: storeID, name } = body;

    const usecase = await makeUpdateStore();
    await usecase.handle({
      storeID,
      userID,
      name
    });

    return ok();
  } catch (error) {
    return unAuthorized(error);
  }
}
