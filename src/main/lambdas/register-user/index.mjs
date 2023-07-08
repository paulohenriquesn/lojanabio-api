import { create, badRequest, serverError } from "../../helpers/http.mjs";
import { MissingParamError } from "../../errors/missing-param.mjs";
import { makeAddUser } from "../../factories/add-user.mjs";

export async function handler(req) {
  const body = JSON.parse(req.body);

  const requiredFields = ["email", "password", "firstName", "lastName", "storeName", "storeSlug"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return badRequest(new MissingParamError(field));
    }
  }

  const { email, password, firstName, lastName, storeName, storeSlug } = body;

  const usecase = await makeAddUser();
  try {
    await usecase.handle({
      email,
      password,
      firstName,
      lastName,
      storeName,
      storeSlug
    });

    return create({
      message: `User ${email} created with success`,
    });

  } catch (error) {
    return serverError(error)
  }
}
