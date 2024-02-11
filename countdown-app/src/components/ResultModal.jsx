import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal(props, ref) {
  const dialog = useRef();

  const userLost = props.remainingTime <= 0;
  const formatedRemainingTime = (props.remainingTime / 1000).toFixed(2);
  const score = Math.round(
    (1 - props.remainingTime / (props.targetTime * 1000)) * 100
  );

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className='result-modal'>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}!</h2>}
      <p>
        The target time was <strong>{props.targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formatedRemainingTime} seconds left.</strong>
      </p>
      <form method='dialog' onSubmit={props.onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
