import { open, stores } from 'src/core/indexed-db'

const OBJECT_STORE_NAME = stores.favourites.name

const FavoriteIDB = {
  get: async (id) => {
    try {
      const data = await (await open).get(OBJECT_STORE_NAME, id)
      return { response: data, error: null }
    } catch (error) {
      return { response: null, error }
    }
  },
  getAll: async () => {
    try {
      const data = await (await open).getAll(OBJECT_STORE_NAME)
      return { response: data, error: null }
    } catch (error) {
      return { response: null, error }
    }
  },
  set: async (data) => {
    try {
      await (await open).put(OBJECT_STORE_NAME, data)
      return { error: null }
    } catch (error) {
      return { error }
    }
  },
  delete: async (id) => {
    try {
      await (await open).delete(OBJECT_STORE_NAME, id)
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

}

export default FavoriteIDB
