import Loading from 'src/core/loading-construct'
import UrlParser from 'src/core/url-parser'
import './components/Detail'
import './components/ReviewItem'
import './components/Like'

const Detail = {
  async render () {
    return `
      <like-button></like-button>
    `
  },

  async afterRender () {
    Loading.toggle()
    let restaurantElement = document.querySelector('restaurant-detail')
    if (!restaurantElement) {
      restaurantElement = document.createElement('restaurant-detail')
    }
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const mainElement = document.querySelector('#root')
    const likeElement = document.querySelector('like-button')
    const { default: SERVICE } = await import('src/services/restaurant-api')
    const { error, response } = await SERVICE.detail(id)
    Loading.close()
    if (error) {
      restaurantElement.renderError('Ada Masalah')
      mainElement.appendChild(restaurantElement)
      console.error(error)
      return
    }
    restaurantElement.data = response
    restaurantElement.onClick = (request) => {
      this._handleSubmitReview(request)
    }
    likeElement.data = {
      id: response.id,
      name: response.name,
      description: response.description,
      pictureId: response.pictureId,
      city: response.city,
      rating: response.rating
    }
    mainElement.appendChild(restaurantElement)
  },

  async _handleSubmitReview (request) {
    Loading.toggle()
    const restaurantElement = document.createElement('restaurant-detail')
    const { default: SERVICE } = await import('src/services/restaurant-api')
    const { error } = await SERVICE.addReview(request)
    Loading.close()
    if (error) {
      restaurantElement.renderError('Ada Masalah')
      console.error(error)
      return
    }
    this.afterRender()
  }
}

export default Detail
