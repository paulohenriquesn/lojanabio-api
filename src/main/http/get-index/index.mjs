import { ok } from "../../helpers/http.mjs";

export async function handler (req) {
  return ok({
    message: 'Hello World!'
  })
}