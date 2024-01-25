import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const timer = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running' : 'Timer inactive'}
      </p>
    </section>
  );
}
