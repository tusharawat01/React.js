import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null); // State to store the start time
  const [now, setNow] = useState(null); // State to store the current time
  const intervalRef = useRef(null); // Ref to store the interval ID

  function handleStart() {
    setStartTime(Date.now()); // Set the start time to the current time
    setNow(Date.now()); // Set the current time to now

    clearInterval(intervalRef.current); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setNow(Date.now()); // Update the current time every 10 milliseconds
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current); // Clear the interval to stop the updates
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000; // Calculate the seconds passed
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1> {/* Display the elapsed time */}
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
