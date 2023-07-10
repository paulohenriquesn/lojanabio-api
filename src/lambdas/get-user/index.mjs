import { ok, unAuthorized } from "@architect/shared/main/helpers/http.mjs";
import { authMiddleware } from "@architect/shared/main/middlewares/auth.mjs";

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
