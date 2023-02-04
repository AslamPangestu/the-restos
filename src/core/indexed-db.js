import { openDB } from 'idb'
import { IDB_NAME, IDB_VERSION } from './config'

export const stores = {
  favourites: {
    key: 'id',
    name: 'favourites'
  }
}

export const open = openDB(IDB_NAME, IDB_VERSION, {
  upgrade (database) {
    database.createObjectStore(stores.favourites.name, { keyPath: stores.favourites.key })
  }
})
