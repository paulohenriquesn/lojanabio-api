import { ok, unAuthorized } from "../../core/main/helpers/http.mjs";
import { authMiddleware } from "../../core/main/middlewares/auth.mjs";

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
