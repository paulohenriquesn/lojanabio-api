import { badRequest, deleted, unAuthorized } from "@architect/shared/main/helpers/http.mjs";
import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";
import { makeDeleteProduct } from "@architect/shared/main/factories/delete-product.mjs";
import { authMiddleware } from "@architect/shared/main/middlewares/auth.mjs";

export async function handler(req) {
  try {
    await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = ["id"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { id: productID, storeID } = body;

    const usecase = await makeDeleteProduct();
    await usecase.handle({
      productID,
      storeID,
    });

    return deleted();
  } catch (error) {
    return unAuthorized(error);
  }
}
