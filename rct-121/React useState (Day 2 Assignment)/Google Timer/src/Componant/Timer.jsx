import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timeron, setTimeron] = useState(false);
  const [sec, setSec] = useState(0);
  const [minut, setMinut] = useState(0);
  useEffect(() => {
    let interval = null;
    if (timeron) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev == 10) {
            clearInterval(interval);
          }
          return prev - 10;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeron]);

  const handelSubmite = (e) => {
    e.preventDefault();
    let a = sec * 1000;
    let b = minut * 60000;
    console.log(a + b);
    setTime(a + b);
    setSec(0);
    setMinut(0);
  };

  return (
    <div>
      <form onSubmit={handelSubmite}>
        <input
          type="number"
          Placeholder="Enter Minuts"
          min="0"
          max="59"
          value={minut}
          onChange={(e) => setMinut(e.target.value)}
        ></input>
        <input
          type="number"
          Placeholder="Enter Seconds"
          min="0"
          max="59"
          value={sec}
          onChange={(e) => setSec(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timeron && time !== 0 && (
          <button onClick={() => setTimeron(true)}>Start</button>
        )}
        {timeron && <button onClick={() => setTimeron(false)}>Stop</button>}

        {!timeron && time > 0 && (
          <button onClick={() => setTime(0)}>Reseat</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
