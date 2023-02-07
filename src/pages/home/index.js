import 'src/components/Jumbotron'
import 'src/components/Restaurants/List'
import Loading from 'src/core/loading-construct'

const Home = {
  async render () {
    // return `
    //   <content-jumbotron></content-jumbotron>
    //   <restaurants-container id="id" image="pictureId" title="name" description="description"></restaurants-container>
    // `
    return `
      <content-jumbotron></content-jumbotron>
    `
  },

  async afterRender () {
    const restaurantsElement = document.querySelector('restaurants-container')
    Loading.toggle()
    const { default: API } = await import('src/services/restaurant-api')
    const { error, response } = await API.all()
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

export default Home
