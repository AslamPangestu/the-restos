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
                position:relative;
                overflow: hidden;
            }

            .container>img {
                max-width: 1200px;
                object-fit: cover;
                filter: brightness(50%)
            }

            .container>h1 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                font-weight: bolder;
            }
        </style>
        <div class="container">
          <img src="./images/hero-image_2.jpg" alt="jumbotron" loading="lazy" />
          <h1>THE RESTOS</h1>
        </div>
      `
  }
}

customElements.define('content-jumbotron', Jumbotron)
