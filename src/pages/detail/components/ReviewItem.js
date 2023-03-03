class ReviewItem extends HTMLElement {
  connectedCallback () {
    this.name = this.getAttribute('name') || null
    this.date = this.getAttribute('date') || ''
    this.review = this.getAttribute('review') || ''
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set data (value) {
    this._data = value
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
      
      .review-container > div{
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .date{
        font-size: 12px;
        margin-top: 6px;
      }

      .review-container > p{
        margin: 0;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--text);
      }
      </style>
      <article class="review-container">
        <div>
          <h4>${this.name}</h4>
          <span class="date">, ${this.date}</span>
        </div>
        <p class="description">${this.review}</p>
      </article>
    `
  }
}

customElements.define('review-item', ReviewItem)
