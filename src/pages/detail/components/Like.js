import Loading from 'src/core/loading-construct'
import FavoriteIdb from 'src/services/favourites-idb'

const templateStyle = `
  <style>
    .like {
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #db0000;

      position: fixed;
      bottom: 16px;
      right: 16px;
      border-radius: 50%;
      border: 0;

      font-size: 18px;
      color: white;
      cursor: pointer;
    }
  </style>
`

class LikeButton extends HTMLElement {
  // constructor () {
  //   super()
  //   this.shadowDOM = this.attachShadow({ mode: 'closed' })
  // }

  connectedCallback () {
    this.data = null
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set data (value) {
    this._data = value
    this.render()
  }

  async render () {
    if (!this._data) {
      return
    }
    const { id } = this._data

    if (await this._isDataExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  }

  async _isDataExist (id) {
    Loading.toggle()
    const { response, error } = await FavoriteIdb.get(id)
    Loading.close()
    if (error) {
      return false
    }
    return !!response
  }

  _renderLiked () {
    this.innerHTML = `
      ${templateStyle}
      <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>
    `
    const likeButton = this.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      Loading.toggle()
      const { error } = await FavoriteIdb.delete(this._data.id)
      if (error) {
        return
      }
      this.render()
    })
  }

  _renderLike () {
    this.innerHTML = `
      ${templateStyle}
      <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
      </button>
    `
    const likeButton = this.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      Loading.toggle()
      const { error } = await FavoriteIdb.set(this._data)
      if (error) {
        return
      }
      this.render()
    })
  }
}

customElements.define('like-button', LikeButton)
