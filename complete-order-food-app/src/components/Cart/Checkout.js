import styles from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput(isPostalCode);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);


  const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if  (!formIsValid) {
      return;
    }

    //Submit cart Data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    });

  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${nameHasError ? styles.invalid : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={styles["message-error"]}>Please enter a valid name!</p>
        )}
      </div>
      <div className={`${styles.control} ${streetHasError ? styles.invalid : ""}`}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={styles["message-error"]}>
            Please enter a valid street!
          </p>
        )}
      </div>
      <div className={`${styles.control} ${postalHasError ? styles.invalid : ""}`}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && (
          <p className={styles["message-error"]}>
            Please enter a valid postal code!
          </p>
        )}
      </div>
      <div className={`${styles.control} ${cityHasError ? styles.invalid : ""}`}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={styles["message-error"]}>Please enter a valid city!</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit} disabled={!formIsValid} onClick={confirmHandler}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
