import FavoriteIdb from 'src/services/favourite-idb'
import 'src/pages/detail/components/Like'

import * as TestFactories from './helpers/testFactories'

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteIdb.set({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteIdb.delete(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
    const { response } = await FavoriteIdb.getAll()
    expect(response).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
    // hapus dulu film dari daftar film yang disukai
    await FavoriteIdb.delete(1)
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))
    const { response } = await FavoriteIdb.getAll()
    expect(response).toEqual([])
  })
})
