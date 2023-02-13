import { BASE_URL_IMAGE } from 'src/core/config'

class RestaurantDetail extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'closed' })
  }

  connectedCallback () {
    this._data = null
    // this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set data (value) {
    this._data = value
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set onClick (event) {
    this._onClick = event
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        .page-title{
          text-align: center;
        }

        .poster-container{
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
      
        .label{
          width: 80px;
          font-weight: bold;
        }

        .menu-container{
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .menu-container > div{
          flex: 1;
        }
        
        @media (min-width: 640px) {
          .menu-container {
              flex-direction: row;
          }
        }
        input[type=text], textarea {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          font-size: 16px;
          box-sizing: border-box;
        }
        button {
          background-color: var(--text-dark);
          border: none;
          color: var(--secondary);
          padding: 14px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        
      </style>
      <h1 class="page-title">${this._data.name}</h1>
      <div class="poster-container">
        <picture>
          <source media="(min-width:650px)" srcset="${BASE_URL_IMAGE}/large/${this._data.pictureId}">
          <source media="(min-width:465px)" srcset="${BASE_URL_IMAGE}/medium/${this._data.pictureId}">
          <img src="${BASE_URL_IMAGE}/small/${this._data.pictureId}" alt=${this._data.name} loading="lazy">
        </picture>
      </div>
      <table>
          <tr>
              <td class="label">Alamat</td>
              <td>:</td>
              <td>${this._data.address}, ${this._data.city}</td>
          </tr>
          <tr>
              <td class="label">Deskirpsi</td>
              <td>:</td>
          </tr>
          <tr>
              <td colspan="3">${this._data.description}</td>
          </tr>
      </table>
      <div>
          <h3 class="page-title">Foods & Drinks</h3>
          <div class="menu-container">
              <div>
                  <h4>Foods</h4>
                  <ul id="foods-container"></ul>
              </div>
              <div>
                  <h4>Drinks</h4>
                  <ul id="drinks-container"></ul>
              </div>
          </div>
      </div>
      <div>
          <h3>Reviews</h3>
          <form>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="review">Review:</label><br>
            <textarea id="review" name="review"></textarea><br>
            <button type="submit">Submit</button>
          </form>
          <div class="reviews-container"></div>
      </div>
    `

    this._generateMenuItem('#foods-container', this._data.menus.foods)
    this._generateMenuItem('#drinks-container', this._data.menus.drinks)
    this._generateReviewItem(this._data.customerReviews)
    this._handleSubmitReview(this._data.id)
  }

  _generateMenuItem (query, data) {
    const containerElement = this.shadowDOM.querySelector(query)
    if (!data || data.length === 0) {
      return
    }
    data.forEach(item => {
      const itemElement = document.createElement('li')
      itemElement.innerHTML = item.name
      containerElement.appendChild(itemElement)
    })
  }

  _generateReviewItem (data) {
    const containerElement = this.shadowDOM.querySelector('.reviews-container')
    if (!data || data.length === 0) {
      return
    }
    data.forEach(item => {
      const itemElement = document.createElement('review-item')
      itemElement.setAttribute('name', item.name)
      itemElement.setAttribute('date', item.date)
      itemElement.setAttribute('review', item.review)
      containerElement.appendChild(itemElement)
    })
  }

  _handleSubmitReview (id) {
    const formElement = this.shadowDOM.querySelector('form')
    formElement.addEventListener('submit', async (event) => {
      event.preventDefault()
      const name = formElement.elements[0].value
      const review = formElement.elements[1].value
      const request = { id, name, review }
      this._onClick(request)
    })
  }

  renderError (message) {
    this.shadowDOM.innerHTML = `
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
    `

    this.shadowDOM.innerHTML += `
      <div class="error-container">
        <h2>${message}</h2>
      </div>
    `
  }
}

customElements.define('restaurant-detail', RestaurantDetail)
