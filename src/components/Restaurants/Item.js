import { BASE_URL_IMAGE } from 'src/core/config'

class RestaurantItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'closed' })
  }

  connectedCallback () {
    this.id = this.getAttribute('id') || null
    this.image = this.getAttribute('image') || null
    this.title = this.getAttribute('title') || ''
    this.description = this.getAttribute('description') || ''
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set data (value) {
    this._data = value
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          transition: 0.3s;
          background-color: white;
          max-width: 300px;
          margin: 0 auto;
        }
        
        .card a {
          text-decoration: none;
          color: var(--text);
        }

        .img-hover-zoom {
          width: 100%;
          height: 175px; 
          overflow: hidden; 
          border-radius: 8px 8px 0 0;
        }

        .img-hover-zoom img {
          transition: transform .5s ease;
          width: 100%;
        }

        .img-hover-zoom:hover img {
          transform: scale(1.5);
        }

        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .container {
          padding: 2px 16px;
        }
        
        .description{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <article class="card">
        <a href="/#/detail/${this._data[this.id]}">
            <div class="img-hover-zoom">
                <picture>
                  <source media="(min-width:650px)" srcset="${BASE_URL_IMAGE}/large/${this._data[this.image]}">
                  <source media="(min-width:465px)" srcset="${BASE_URL_IMAGE}/medium/${this._data[this.image]}">
                  <img src="${BASE_URL_IMAGE}/small/${this._data[this.image]}" alt=${this._data[this.title]} loading="lazy">
                </picture>
            </div>
            <div class="container">
              <h4>${this._data[this.title]}</h4>
              <p class="description">${this._data[this.description]}</p>
            </div>
        </a>
      </article>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
