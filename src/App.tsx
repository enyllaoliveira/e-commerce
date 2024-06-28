import Home from "./pages/home";
import Cart from "./pages/cart";
import Layout from "./layout";
import { createBrowserRouter} from 'react-router-dom'
import CartDetails from "./pages/cartDetails";
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/cartDetails/:id',
        element: <CartDetails/>
      }
    ]
  }
])

export default router