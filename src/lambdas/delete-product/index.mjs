import { badRequest, deleted, unAuthorized } from "../../core/main/helpers/http.mjs";
import { MissingParamError } from "../../core/main/errors/missing-param.mjs";
import { makeDeleteProduct } from "../../core/main/factories/delete-product.mjs";
import { authMiddleware } from "../../core/main/middlewares/auth.mjs";

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
