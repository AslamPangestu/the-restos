class Jumbotron extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <style>
            .jumbotron-container {
                max-height: 300px;
                max-width: 1200px;
                position:relative;
                overflow: hidden;
            }

            .jumbotron-container img {
                width: 100%;
                object-fit: cover;
                filter: brightness(50%)
            }

            .jumbotron-container h1 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                font-weight: bolder;
            }
        </style>
        <div class="jumbotron-container">
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
