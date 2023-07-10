import { deleteStore } from "../../domain/usecases/delete-store.mjs";
import { DeleteStoreRepository } from "../../data/repositories/delete-store.mjs";

export async function makeDeleteStore() {
  return new deleteStore(new DeleteStoreRepository());
}
