import {
  badRequest,
  ok,
  unAuthorized,
} from "../../core/main/helpers/http.mjs";
import { MissingParamError } from "../../core/main/errors/missing-param.mjs";
import { makeLoginUser } from "../../core/main/factories/login-user.mjs"

export async function handler(req) {
  const body = JSON.parse(req.body);

  const requiredFields = ["email", "password"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return badRequest(new MissingParamError(field));
    }
  }

  const { email, password } = body;

  const usecase = await makeLoginUser();
  try {
    const token = await usecase.handle({
      email,
      password,
    });

    return ok({
      token,
    });
  } catch (error) {
    return unAuthorized(error);
  }
}
