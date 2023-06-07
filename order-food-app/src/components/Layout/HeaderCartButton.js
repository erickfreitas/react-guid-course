import CardIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCardButton = props => {
  return <button className={styles.button}>
    <span className={styles.icon}>
      <CardIcon />
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
      3
    </span>
  </button>
};

export default HeaderCardButton;