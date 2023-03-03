/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurant')

const emptyRestaurantCase = (I) => {
  I.seeElement('restaurants-container', '.error-container')
}

const likeRestaurantCase = async (I) => {
  I.amOnPage('/')

  I.waitForElement('restaurant-item', 10)

  I.seeElement('restaurant-item')
  const firstItemTitleComponent = locate('restaurant-item h4').first()
  const firstItemTitle = await I.grabTextFrom(firstItemTitleComponent)

  const firstItem = locate('restaurant-item a').first()
  I.click(firstItem)

  I.waitForElement('#likeButton', 10)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  return firstItemTitle
}

Before(({ I }) => {
  I.amOnPage('/#/favourites')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  emptyRestaurantCase(I)
})

Scenario('liking one restaurant', async ({ I }) => {
  emptyRestaurantCase(I)
  const firstLikeTitle = await likeRestaurantCase(I)

  I.amOnPage('/#/favourites')
  I.seeElement('restaurant-item')

  const firstLikedItemTitleComponent = locate('restaurant-item h4').first()
  const firstLikedTitle = await I.grabTextFrom(firstLikedItemTitleComponent)
  assert.strictEqual(firstLikeTitle, firstLikedTitle)
})
