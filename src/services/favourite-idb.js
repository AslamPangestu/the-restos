import { stores, openDatabase } from 'src/core/indexed-db'

const OBJECT_STORE_NAME = stores.favourites.name

const FavoriteIDB = {
  get: async (id) => {
    try {
      const data = await (await openDatabase).get(OBJECT_STORE_NAME, id)
      return { response: data, error: null }
    } catch (error) {
      console.error('GET Favourite', error)
      return { response: null, error }
    }
  },
  getAll: async () => {
    try {
      const data = await (await openDatabase).getAll(OBJECT_STORE_NAME)
      return { response: data, error: null }
    } catch (error) {
      console.error('GET ALL Favourite', error)
      return { response: null, error }
    }
  },
  set: async (data) => {
    try {
      await (await openDatabase).put(OBJECT_STORE_NAME, data)
      return { error: null }
    } catch (error) {
      console.error('SET Favourite', error)
      return { error }
    }
  },
  delete: async (id) => {
    try {
      await (await openDatabase).delete(OBJECT_STORE_NAME, id)
      return { error: null }
    } catch (error) {
      console.error('DELETE Favourite', error)
      return { error }
    }
  }

}

export default FavoriteIDB
