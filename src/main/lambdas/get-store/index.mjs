import { ok, unAuthorized } from "../../helpers/http.mjs";
import { makeGetStore } from "../../factories/get-store.mjs";

export async function handler(req) {
  try {
    const usecase = await makeGetStore();

    const store = await usecase.handle({
      slug: req.pathParameters.slug,
    });

    return ok(store);
  } catch (error) {
    return unAuthorized(error);
  }
}
