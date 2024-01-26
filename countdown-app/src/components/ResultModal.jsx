import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(props, ref) {
  return (
    <dialog ref={ref} className='result-modal'>
      <h2>You {props.result}</h2>
      <p>
        The target time was <strong>{props.targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
