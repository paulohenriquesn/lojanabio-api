import { ok, unAuthorized, badRequest } from "@architect/shared/main/helpers/http.mjs";
import { makeUpdateProduct } from "@architect/shared/main/factories/update-product.mjs";
import { authMiddleware } from "@architect/shared/main/middlewares/auth.mjs";
import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";

export async function handler(req) {
  try {
    await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = ["storeID"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const usecase = await makeUpdateProduct();
    await usecase.handle({
      productID: req.pathParameters.productid,
      ...body,
    });

    return ok();
  } catch (error) {
    return unAuthorized(error);
  }
}
