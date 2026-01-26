import { putItem, getItem, getAllItems, deleteItem } from "./crud.js";

const STORE = "users";

export const UserOperations = {
  async create(user) {
    await putItem(STORE, user);
  },

  async findById(id) {
    return await getItem(STORE, id);
  },

  async findAll() {
    return await getAllItems(STORE);
  },

  async remove(id) {
    await deleteItem(STORE, id);
  },
};
