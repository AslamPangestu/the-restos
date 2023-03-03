import './Item'

class RestaurantsContainer extends HTMLElement {
  connectedCallback () {
    this.pageTitle = this.getAttribute('page-title') || ''
    this.id = this.getAttribute('id') || null
    this.image = this.getAttribute('image') || null
    this.title = this.getAttribute('title') || ''
    this.description = this.getAttribute('description') || ''
    this._data = []
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set data (value) {
    this._data = value
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set onSelectItem (event) {
    this._onSelectItem = event
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        .restaurants-page-title{
          text-align: center;
        }
        .restaurants-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin: 16px auto;
        }

        @media (min-width: 640px) {
          .restaurants-container {
              grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
            .restaurants-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
      </style>
      <h1 class="restaurants-page-title">${this.pageTitle}</h1>
      <div class="restaurants-container"></div>
    `

    const containerElement = this.querySelector('.restaurants-container')

    if (!this._data || this._data.length === 0) {
      return
    }
    this._data.forEach(item => {
      const categoryElement = document.createElement('restaurant-item')
      categoryElement.data = item
      categoryElement.setAttribute('image', this.image)
      categoryElement.setAttribute('id', this.id)
      categoryElement.setAttribute('title', this.title)
      categoryElement.setAttribute('description', this.description)
      categoryElement.onClick = () => {
        this._onSelectItem(item)
      }
      containerElement.appendChild(categoryElement)
    })
  }

  renderError (message) {
    this.innerHTML = `
      <style>
        .error-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          border: 1px solid var(--primary);
          border-radius: 8px;
        }
      </style>
      <div class="error-container">
        <h2>${message}</h2>
      </div>
    `
  }
}

customElements.define('restaurants-container', RestaurantsContainer)
