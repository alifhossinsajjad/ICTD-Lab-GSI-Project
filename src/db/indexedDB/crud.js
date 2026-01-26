import { withStore } from "./transaction.js";

/* CREATE or UPDATE */
export async function putItem(storeName, value) {
  return withStore(storeName, "readwrite", async (store) => {
    store.put(value);
  });
}

/* READ by primary key */
export async function getItem(storeName, key) {
  return withStore(storeName, "readonly", async (store) => {
    return await requestToPromise(store.get(key));
  });
}

/* READ all */
export async function getAllItems(storeName) {
  return withStore(storeName, "readonly", async (store) => {
    return await requestToPromise(store.getAll());
  });
}

/* DELETE */
export async function deleteItem(storeName, key) {
  return withStore(storeName, "readwrite", async (store) => {
    store.delete(key);
  });
}

/* CLEAR store */
export async function clearStore(storeName) {
  return withStore(storeName, "readwrite", async (store) => {
    store.clear();
  });
}

/* Utility */
function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
