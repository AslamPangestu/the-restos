class HeaderLayout extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <header>Header</header>
      `
  }
}

customElements.define('layout-header', HeaderLayout)
