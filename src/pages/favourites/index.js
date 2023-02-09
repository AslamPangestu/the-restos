import 'src/components/Jumbotron'
import 'src/components/Restaurants/List'
import Loading from 'src/core/loading-construct'

const Favourites = {
  async render () {
    return `
      <restaurants-container page-title="Your Favourites" id="id" image="pictureId" title="name" description="description"></restaurants-container>
    `
  },

  async afterRender () {
    const restaurantsElement = document.querySelector('restaurants-container')
    Loading.toggle()
    const { default: SERVICE } = await import('src/services/favourites-idb')
    const { error, response } = await SERVICE.getAll()
    Loading.close()
    if (error) {
      restaurantsElement.renderError('Ada Masalah')
      console.error(error)
      return
    }
    if (response.length === 0) {
      restaurantsElement.renderError('Data tidak ditemukan!!!')
      return
    }
    restaurantsElement.data = response
    this.render()
  }
}

export default Favourites
