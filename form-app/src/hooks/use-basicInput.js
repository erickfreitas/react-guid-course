import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case 'BLUR':
      return {
        value: state.value,
        isTouched: true,
      };
    case 'RESET':
      return {
        value: '',
        isTouched: false,
      };
  }
  return inputStateReducer;
};

const useBasicInput = (validationFunc) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validationFunc(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({
      type: 'INPUT',
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: 'BLUR',
    });
  };

  const reset = () => {
    dispatch({
      type: 'RESET',
      value: '',
      isTouched: false,
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useBasicInput;