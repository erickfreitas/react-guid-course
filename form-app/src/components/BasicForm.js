import useBasicInput from "../hooks/use-basicInput";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameValueIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useBasicInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameValueIsValid,
    hasError: lastNameInputHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useBasicInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useBasicInput(isEmail);

  let formIsValid = false;

  if (nameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(nameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={`form-control ${nameInputHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameInputHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={`form-control ${lastNameInputHasError && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameInputHasError && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailInputHasError && (
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
