import { useState, useRef, useEffect } from "react";
import styles from "./Stopwatch.module.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };

  const start = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    if (!intervalRef.current) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.stopwatch}>
      <h1 className={styles.title}>Stopwatch</h1>

      <div className={styles.display}>{formatTime(time)}</div>

      <div className={styles.controls}>
        <button
          onClick={start}
          disabled={isRunning}
          className={`${styles.button} ${styles.startButton}`}
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!isRunning}
          className={`${styles.button} ${styles.stopButton}`}
        >
          Stop
        </button>
        <button
          onClick={reset}
          className={`${styles.button} ${styles.resetButton}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
