import Loading from 'src/core/loading-construct'

class FavoritePresenter {
  constructor ({ view, services }) {
    this._view = view
    this._services = services

    this._showFavorites()
  }

  async _showFavorites () {
    Loading.toggle()
    const { error, response } = await this._services.getAll()
    Loading.close()
    this._display(response, error)
  }

  _display (data, error) {
    this._view.showFavorite(data, error)
  }
}

export default FavoritePresenter
