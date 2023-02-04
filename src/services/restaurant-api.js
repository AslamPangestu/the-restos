import { BASE_URL } from 'src/core/config'

const RestaurantAPI = {
  all: async () => {
    const URL = `${BASE_URL}/list`
    const response = await fetch(URL)
    const responseJson = await response.json()
    if (responseJson.error) {
      return { response: null, error: responseJson.message }
    }
    return { response: responseJson.restaurants, error: null }
  },
  detail: async (id) => {
    const URL = `${BASE_URL}/detail/${id}`
    const response = await fetch(URL)
    const responseJson = await response.json()
    if (responseJson.error) {
      return { response: null, error: responseJson.message }
    }
    return { response: responseJson.restaurant, error: null }
  },
  search: async (query) => {
    const URL = `${BASE_URL}/search?q=${query}`
    const response = await fetch(URL)
    const responseJson = await response.json()
    if (responseJson.error) {
      return { response: null, error: responseJson.message }
    }
    return { response: responseJson.restaurants, error: null }
  },
  addReview: async (data) => {
    const body = JSON.stringify({ id: data.id, name: data.name, review: data.review })
    const URL = `${BASE_URL}/review`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const responseJson = await response.json()
    if (responseJson.error) {
      return { error: responseJson.message }
    }
    return { error: null }
  }
}

export default RestaurantAPI
