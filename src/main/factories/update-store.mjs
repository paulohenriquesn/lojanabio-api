import { updateStore } from "../../domain/usecases/update-store.mjs";
import { UpdateStoreRepository } from "../../data/repositories/update-store.mjs";

export async function makeUpdateStore() {
  return new updateStore(new UpdateStoreRepository());
}
