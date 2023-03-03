class FooterLayout extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        footer {
          text-align: center;
          padding: 10px 0;
          margin: 16px 10px;
        }

        footer a {
          color: var(--text-dark);
          font-weight: bold;
          text-decoration: none;
          padding: 14px 0;
        }
      </style>
      <footer>
          <a href="https://aslampangestu.vercel.app/">©2023 Muhammad Aslam Pangestu Idham</a>
      </footer>
    `
  }
}

customElements.define('layout-footer', FooterLayout)
