import Home from 'src/pages/home'
import Detail from 'src/pages/detail'
import Favourites from 'src/pages/favourites'

const routes = {
  '/': Home,
  '/favourites': Favourites,
  '/detail/:id': Detail
}

export default routes
