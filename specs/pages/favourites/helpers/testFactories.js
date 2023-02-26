const createLikeButtonPresenterWithRestaurant = async (data) => {
  const likeElement = document.querySelector('like-button')
  likeElement.data = {
    id: data.id
  }
  return new Promise(resolve => likeElement.addEventListener('onAfterRender', () => {
    resolve()
  }))
}

export { createLikeButtonPresenterWithRestaurant }
