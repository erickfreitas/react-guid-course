import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://movies-react-app-ebf33-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
