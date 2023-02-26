import { itActsAsFavoriteMovieModel } from './contract/favouriteIdbContract'
import FavouriteIDB from 'src/services/favourite-idb'

describe('Favorite Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteIDB.getAll()).response.forEach(async (item) => {
      await FavouriteIDB.delete(item.id)
    })
  })

  itActsAsFavoriteMovieModel(FavouriteIDB)
})
