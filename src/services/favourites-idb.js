import { open, stores } from 'src/core/indexed-db'

const OBJECT_STORE_NAME = stores.favourites.name

const FavoriteIDB = {
  get: async (id) => (await open).get(OBJECT_STORE_NAME, id),
  getAll: async () => (await open).getAll(OBJECT_STORE_NAME),
  set: async (data) => (await open).put(OBJECT_STORE_NAME, data),
  delete: async (id) =>
    (await open).delete(OBJECT_STORE_NAME, id)

}

export default FavoriteIDB
