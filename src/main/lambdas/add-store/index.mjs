import { badRequest, create, unAuthorized } from "../../helpers/http.mjs";
import { MissingParamError } from "../../errors/missing-param.mjs";
import { makeAddStore } from "../../factories/add-store.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";

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

    return created();
  } catch (error) {
    return unAuthorized(error);
  }
}
