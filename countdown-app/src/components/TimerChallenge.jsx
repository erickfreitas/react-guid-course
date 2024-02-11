import { useState, useRef } from 'react';

import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timeIsActive ? 'active' : undefined}>
          {timeIsActive ? 'Time is running' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
