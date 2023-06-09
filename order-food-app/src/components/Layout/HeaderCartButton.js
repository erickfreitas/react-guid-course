import { useContext, useEffect, useState } from 'react';
import CardIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCardButton = props => {
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(()=> {
    if(items.length ===0) {
      return;
    }

    setBtnIsHighLighted(true);

    const timer = setTimeout(()=> {
      setBtnIsHighLighted(false)
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [items]);

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={styles.icon}>
      <CardIcon />
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
      {numberOfCartItems}
    </span>
  </button>
};

export default HeaderCardButton;