import 'src/components/Restaurants/List'

class FavoriteView {
  getTemplate () {
    return `
        <restaurants-container page-title="Your Favourites" id="id" image="pictureId" title="name" description="description"></restaurants-container>
    `
  }

  showFavorite (data = [], error) {
    const restaurantsElement = document.querySelector('restaurants-container')

    if (error) {
      restaurantsElement.renderError('Ada Masalah')
      restaurantsElement.dispatchEvent(new Event('restaurant:updated'))
      console.error(data.error)
      return
    }
    if (data.length === 0) {
      restaurantsElement.renderError('Data tidak ditemukan!!!')
      restaurantsElement.dispatchEvent(new Event('restaurant:updated'))
      return
    }
    restaurantsElement.data = data
    this.getTemplate()
    restaurantsElement.dispatchEvent(new Event('restaurant:updated'))
  }
}

export default FavoriteView
