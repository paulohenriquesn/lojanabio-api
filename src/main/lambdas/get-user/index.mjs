import { ok, unAuthorized } from "../../helpers/http.mjs";
import { authMiddleware } from "../../middlewares/auth.mjs";

export async function handler(req) {
  try {
    const {
      userID: id,
      firstName,
      lastName,
      email,
    } = await authMiddleware(req);
    return ok({
      id,
      firstName,
      lastName,
      email,
    });
  } catch (error) {
    return unAuthorized(error);
  }
}
