import { ok, unAuthorized, badRequest } from "../../helpers/http.mjs";
import { makeUpdateProduct } from "../../factories/update-product.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";
import { MissingParamError } from "../../errors/missing-param.mjs";


export async function handler(req) {
  try {
    const { userID } = await authMiddleware(req);

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
      ...body
    });

    return ok();
  } catch (error) {
    return unAuthorized(error);
  }
}
