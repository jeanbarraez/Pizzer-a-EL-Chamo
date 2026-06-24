import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import PizzaDetail from './pages/PizzaDetail.jsx';
import Cart from './pages/Cart.jsx';
import Confirmacion from './pages/Confirmacion.jsx';
import NotFound from './pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/pizza/:id',
        element: <PizzaDetail />,
      },
      {
        path: '/carrito',
        element: <Cart />,
      },
      {
        path: '/confirmacion',
        element: <Confirmacion />,
      },
    ],
  },
]);
