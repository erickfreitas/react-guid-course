
import HeaderCardButton from './HeaderCartButton';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!"/>
      </div>
    </>
  );
};

export default Header;