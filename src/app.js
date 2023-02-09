import DrawerInitiator from 'src/core/drawer-initiator'
import UrlParser from 'src/core/url-parser'
import routes from 'src/routes'

class App {
  constructor ({ drawerButton, drawer, root }) {
    this._drawerButton = drawerButton
    this._drawer = drawer
    this._root = root
    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      drawerButton: this._drawerButton,
      drawer: this._drawer,
      root: this._root
    })
    const skiplinkElement = document.querySelector('#skiplink')
    skiplinkElement.addEventListener('click', () => {
      this._root.scrollIntoView()
      skiplinkElement.blur()
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._root.innerHTML = await page.render()
    await page.afterRender()
  }
};

export default App
