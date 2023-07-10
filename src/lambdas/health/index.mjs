import { ok } from "@architect/shared/main/helpers/http.mjs";

export async function handler (req) {
  return ok({
    message: 'Hello World!'
  })
}