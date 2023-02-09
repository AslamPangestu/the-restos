import 'src/components/Jumbotron'
import 'src/components/Restaurants/List'
import Loading from 'src/core/loading-construct'

const Home = {
  async render () {
    return `
      <content-jumbotron></content-jumbotron>
      <restaurants-container page-title="Our Restos" id="id" image="pictureId" title="name" description="description"></restaurants-container>
    `
  },

  async afterRender () {
    Loading.toggle()
    const restaurantsElement = document.querySelector('restaurants-container')
    const { default: SERVICE } = await import('src/services/restaurant-api')
    const { error, response } = await SERVICE.all()
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
  }
}

export default Home
