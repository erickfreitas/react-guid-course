import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState("");
  const [inputLastNameIsTouched, setInputLastNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

  const nameInputIsValid = enteredName.trim() !== "";
  const inputNameHasError = !nameInputIsValid && inputNameIsTouched;

  const lastNameInputIsValid = enteredLastName.trim() !== "";
  const inputLastNameHasError = !lastNameInputIsValid && inputLastNameIsTouched;

  const emailInputIsValid = enteredEmail.includes("@");
  const inputEmailHasError = !emailInputIsValid && inputEmailIsTouched;

  let formIsValid = false;

  if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setInputNameIsTouched(true);
  };

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameInputBlurHandler = (event) => {
    setInputLastNameIsTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setInputEmailIsTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    setEnteredName("");
    setInputNameIsTouched(false);

    setEnteredLastName("");
    setInputLastNameIsTouched(false);

    setEnteredEmail("");
    setInputEmailIsTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${inputNameHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {inputNameHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={`form-control ${inputLastNameHasError && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {inputLastNameHasError && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${inputEmailHasError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input 
          type="text" 
          id="email" 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          />
          {inputEmailHasError && (
            <p className="error-text">Please enter a valid e-mail.</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
