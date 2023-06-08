import styles from './MealItem.module.css';

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={styles.meal}>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  )
};

export default MealItem;
