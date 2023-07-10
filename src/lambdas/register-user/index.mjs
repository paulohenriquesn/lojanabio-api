import { create, badRequest, serverError } from "@architect/shared/main/helpers/http.mjs";
import { MissingParamError } from "@architect/shared/main/errors/missing-param.mjs";
import { makeAddUser } from "@architect/shared/main/factories/add-user.mjs";

export async function handler(req) {
  const body = JSON.parse(req.body);

  const requiredFields = ["email", "password", "firstName", "lastName"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return badRequest(new MissingParamError(field));
    }
  }

  const { email, password, firstName, lastName } = body;

  const usecase = await makeAddUser();
  try {
    await usecase.handle({
      email,
      password,
      firstName,
      lastName,
    });

    return create({
      message: `User ${email} created with success`,
    });

  } catch (error) {
    return serverError(error)
  }
}
