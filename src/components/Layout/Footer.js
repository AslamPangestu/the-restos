class FooterLayout extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <footer>
            <a href="https://aslampangestu.vercel.app/">©2023 Muhammad Aslam Pangestu Idham</a>
        </footer>
    `
  }
}

customElements.define('layout-footer', FooterLayout)
