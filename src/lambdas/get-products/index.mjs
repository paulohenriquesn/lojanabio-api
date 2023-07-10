import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";
import { makeGetProducts } from "@architect/shared/main/factories/get-products.mjs";
import { badRequest, ok, serverError } from "@architect/shared/main/helpers/http.mjs";

export async function handler(req) {
  try {
    const requiredFields = ["storeid"];

    const { pathParameters } = req;

    for (const field of requiredFields) {
      if (!pathParameters[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { storeid } = pathParameters;

    const usecase = await makeGetProducts();
    const products = await usecase.handle({
      storeID: storeid,
      limit: +req.queryStringParameters.limit,
      next: req.queryStringParameters.next,
    });

    return ok(products);
  } catch (error) {
    return serverError(error);
  }
}
