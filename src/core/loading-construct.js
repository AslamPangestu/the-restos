import 'src/components/Layout/loading'

const LoadingConstruct = {
  toggle () {
    const bodyElement = document.querySelector('body')
    const loadingContainer = document.createElement('layout-loading')
    bodyElement.appendChild(loadingContainer)
  },

  close () {
    const loadingElement = document.querySelector('layout-loading')
    loadingElement.remove()
  }
}

export default LoadingConstruct
