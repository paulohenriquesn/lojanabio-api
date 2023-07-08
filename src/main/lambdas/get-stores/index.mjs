import { ok, unAuthorized } from "../../helpers/http.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";
import { makeGetStores } from "../../factories/get-stores.mjs"

export async function handler(req) {
  try {
    const {
      userID: id,
    } = await authMiddleware(req);

    const usecase = await makeGetStores()

    const stores = await usecase.handle({
        userID: id
    })

    return ok(stores);
  } catch (error) {
    return unAuthorized(error);
  }
}
