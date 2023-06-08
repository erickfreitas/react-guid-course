import CartContext from "./cart-context";

const CartProvider = props => {

  const addItemToCartHandler = item => {

  };

  const removeItemFromCartHandlre = id => {

  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandlre
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;