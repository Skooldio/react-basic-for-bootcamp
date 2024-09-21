import { useState, useEffect } from "react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const COUNTDOWN_INTERVAL = 1000;
function App() {
  const [initialSessionTimer, setInitialSessionTimer] = useState(2);
  const [initialBreakTimer, setInitialBreakTimer] = useState(1);
  const [sessionTimer, setSessionTimer] = useState(initialSessionTimer * 60);
  const [breakTimer, setBreakTimer] = useState(initialBreakTimer * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);

  useEffect(() => {
    setSessionTimer(initialSessionTimer * 60);
  }, [initialSessionTimer]);
  useEffect(() => {
    setBreakTimer(initialBreakTimer * 60);
  }, [initialBreakTimer]);

  useEffect(() => {
    let id = undefined;
    if (isOnBreak) {
      id = isCounting
        ? setInterval(() => {
            setBreakTimer((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else {
                setIsOnBreak(false);
                setSessionTimer(initialSessionTimer * 60);
                return 0;
              }
            });
          }, COUNTDOWN_INTERVAL)
        : undefined;
    } else {
      id = isCounting
        ? setInterval(() => {
            setSessionTimer((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else {
                setIsOnBreak(true);
                setBreakTimer(initialBreakTimer * 60);
                return 0;
              }
            });
          }, COUNTDOWN_INTERVAL)
        : undefined;
    }

    return () => {
      clearInterval(id);
    };
  }, [initialBreakTimer, initialSessionTimer, isCounting, isOnBreak]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-smoke">Pomodoro Timer</h1>

      <div className="bg-redwood flex flex-col justify-center items-center w-4/5">
        <div className=" w-1/3 flex flex-col justify-center items-center p-2">
          <h2>{isOnBreak ? "Break" : "Session"}</h2>
          <h2>{formatTime(isOnBreak ? breakTimer : sessionTimer)}</h2>
          <div className="flex justify-between w-full">
            <button className="btn" onClick={() => setIsCounting(!isCounting)}>
              {isCounting ? "pause" : "start"}
            </button>
            <button
              className="btn"
              onClick={() => {
                setIsCounting(false);
                setIsOnBreak(false);
                setSessionTimer(initialSessionTimer * 60);
                setBreakTimer(initialBreakTimer * 60);
              }}
            >
              reset
            </button>
          </div>
        </div>

        <div className="flex justify-between w-full ">
          <div className="setting-box">
            <p>Session timer</p>
            <p className="font-bold">{initialSessionTimer}</p>
            <div className="flex w-full justify-between">
              <button
                className="rounded-btn"
                onClick={() => setInitialSessionTimer((prev) => prev - 1)}
                disabled={isCounting || initialSessionTimer <= 0}
              >
                -
              </button>
              <button
                className="rounded-btn"
                onClick={() => setInitialSessionTimer((prev) => prev + 1)}
                disabled={isCounting}
              >
                +
              </button>
            </div>
          </div>

          <div className="setting-box">
            <p>Break timer</p>
            <p className="font-bold">{initialBreakTimer}</p>
            <div className="flex w-full justify-between">
              <button
                className="rounded-btn"
                onClick={() => setInitialBreakTimer((prev) => prev - 1)}
                disabled={isCounting || initialBreakTimer <= 0}
              >
                -
              </button>
              <button
                className="rounded-btn"
                onClick={() => setInitialBreakTimer((prev) => prev + 1)}
                disabled={isCounting}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
