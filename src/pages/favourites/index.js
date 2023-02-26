import PageView from './view'
import PagePresenter from './presenter'

const view = new PageView()

const Favourites = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    const { default: SERVICE } = await import('src/services/favourite-idb')
    new PagePresenter({ view, services: SERVICE })
  }
}

export default Favourites
