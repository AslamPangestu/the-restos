import 'regenerator-runtime'

import 'src/components/Layout/header'
import 'src/components/Layout/footer'
import 'src/components/Layout/loading'

import App from 'src/app'
import swRegister from 'src/core/sw-register'

import 'src/styles/index.css'
// import 'src/styles/responsive.css'

const app = new App({
  drawerButton: document.querySelector('#drawer-button'),
  drawer: document.querySelector('#drawer'),
  root: document.querySelector('#root')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', async () => {
  app.renderPage()
  swRegister()
})
