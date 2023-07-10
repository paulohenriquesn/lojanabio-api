import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";
import { makeAddStore } from "@architect/shared/main/factories/add-store.mjs";
import { badRequest, create, unAuthorized } from "@architect/shared/main/helpers/http.mjs";
import { authMiddleware } from "@architect/shared/main/middlewares/auth.mjs";

export async function handler(req) {
  try {
    const { userID } = await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = ["name", "slug"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { name, slug } = body;

    const usecase = await makeAddStore();

    await usecase.handle({
      name,
      slug,
      userID,
    });

    return create();
  } catch (error) {
    return unAuthorized(error);
  }
}
