import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timeron, setTimeron] = useState(false);
  useEffect(() => {
    let id = null;
    if (timeron) {
      id = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [timeron]);

  return (
    <div>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timeron && time === 0 && (
          <button onClick={() => setTimeron(true)}>Start</button>
        )}
        {timeron && <button onClick={() => setTimeron(false)}>Stop</button>}
        {!timeron && time !== 0 && (
          <button onClick={() => setTimeron(true)}>Resume</button>
        )}
        {!timeron && time > 0 && (
          <button onClick={() => setTime(0)}>Reseat</button>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
