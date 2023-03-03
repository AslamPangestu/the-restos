/* eslint-disable no-undef */
Feature('Unliking Restaurant')

const emptyRestaurantCase = (I) => {
  I.seeElement('restaurants-container', '.error-container')
}

const likeRestaurantCase = async (I) => {
  I.amOnPage('/')

  I.waitForElement('restaurant-item', 10)

  I.seeElement('restaurant-item')
  const firstItem = locate('restaurant-item a').first()
  I.click(firstItem)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')
}

Before(({ I }) => {
  likeRestaurantCase(I)
})

Scenario('unlike one restaurant', async ({ I }) => {
  I.amOnPage('/#/favourites')
  I.seeElement('restaurant-item')

  const firstItem = locate('restaurant-item a').first()
  I.click(firstItem)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favourites')

  emptyRestaurantCase(I)
})
