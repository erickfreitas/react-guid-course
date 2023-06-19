import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name input is valid!');
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false); 
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;

    console.log(enteredValue);

    //nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${nameInputIsInvalid && 'invalid'}`}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Please enter a valid name!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
