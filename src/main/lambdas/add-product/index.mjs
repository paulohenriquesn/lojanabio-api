import { MissingParamError } from "../../errors/missing-param.mjs";
import { makeAddProduct } from "../../factories/add-product.mjs";
import { badRequest, create, unAuthorized } from "../../helpers/http.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";

export async function handler(req) {
  try {
    const { userID } = await authMiddleware(req);

    const body = JSON.parse(req.body);

    const requiredFields = [
      "name",
      "description",
      "affiliateURL",
      "imageURL",
      "storeID",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const usecase = await makeAddProduct();
    await usecase.handle({ ...body, userID });

    return create();
  } catch (error) {
    return unAuthorized(error);
  }
}
