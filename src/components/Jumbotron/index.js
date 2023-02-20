import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

class Jumbotron extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'closed' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
        <style>
            .container {
                max-height: 300px;
                max-width: 1200px;
                position:relative;
                overflow: hidden;
            }

            .container img {
                width: 100%;
                object-fit: cover;
                filter: brightness(50%)
            }

            .container h1 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                font-weight: bolder;
            }
        </style>
        <div class="container">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <img src="./images/hero-image_2-large.jpg" alt="jumbotron" loading="lazy" />
          </picture>
          <h1>THE RESTOS</h1>
        </div>
      `
  }
}

customElements.define('content-jumbotron', Jumbotron)
