import { useContext } from 'react';
import CardIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCardButton = props => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return <button className={styles.button} onClick={props.onClick}>
    <span className={styles.icon}>
      <CardIcon />
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
      {cartCtx.totalAmount}
    </span>
  </button>
};

export default HeaderCardButton;