import { openDatabase } from "./db.js";

export async function withStore(storeName, mode, operation) {
  const db = await openDatabase();

  const tx = db.transaction(storeName, mode);
  const store = tx.objectStore(storeName);

  const result = await operation(store);

  await new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });

  return result;
}
