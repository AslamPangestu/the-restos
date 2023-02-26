import FavouriteIDB from 'src/services/favourite-idb'
import FavouritesView from 'src/pages/favourites/view'
import FavouritesPresenter from 'src/pages/favourites/presenter'

describe('Showing all favorite restaurant', () => {
  let view

  const renderTemplate = () => {
    view = new FavouritesView()
    document.body.innerHTML = view.getTemplate()
  }

  beforeEach(async () => {
    renderTemplate()
  })

  describe('When no restaurant have been liked', () => {
    it('should ask for the favorite restaurant', () => {
      const services = spyOnAllFunctions(FavouriteIDB)
      new FavouritesPresenter({
        view,
        services
      })
      expect(services.getAll).toHaveBeenCalledTimes(1)
    })

    it('should show the information that no restaurant have been liked', (done) => {
      const restaurantsElement = document.querySelector('restaurants-container')
      restaurantsElement.addEventListener('restaurant:updated', () => {
        expect(restaurantsElement.shadowDOM.querySelectorAll('.error-container').length).toEqual(1)
        done()
      })

      const services = spyOnAllFunctions(FavouriteIDB)
      services.getAll.and.returnValues({ response: [], error: null })

      new FavouritesPresenter({
        view,
        services
      })
    })
  })

  describe('When favorite restaurant exist', () => {
    it('should show the restaurant', (done) => {
      const restaurantsElement = document.querySelector('restaurants-container')
      restaurantsElement.addEventListener('restaurant:updated', () => {
        expect(restaurantsElement.shadowDOM.querySelectorAll('restaurant-item').length).toEqual(2)
        done()
      })
      const services = spyOnAllFunctions(FavouriteIDB, false)
      services.getAll.and.returnValues({
        response: [
          {
            id: 11,
            title: 'Restoran A',
            rating: 3,
            description: 'Deskripsi Restoran A'
          },
          {
            id: 22,
            title: 'Restoran A',
            rating: 4,
            description: 'Deskripsi Restoran B'
          }
        ],
        error: null
      })

      new FavouritesPresenter({
        view,
        services
      })
    })
  })
})
