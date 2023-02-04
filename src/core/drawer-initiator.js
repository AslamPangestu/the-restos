const DrawerInitiator = {
  init ({ drawerButton, drawer, root }) {
    drawerButton?.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    root.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  }
}

export default DrawerInitiator
