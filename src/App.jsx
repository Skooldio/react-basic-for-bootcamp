import usePomodoro from "./utils/usePomodoro";

function App() {
  const {
    initialBreakTimer,
    initialSessionTimer,
    setInitialBreakTimer,
    setInitialSessionTimer,
    displayedTimer,
    isOnBreak,
    isCounting,
    resetTimer,
    setIsCounting,
  } = usePomodoro();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-smoke">Pomodoro Timer</h1>

      <div className="bg-redwood flex flex-col justify-center items-center w-4/5">
        <div className=" w-1/3 flex flex-col justify-center items-center p-2">
          <h2>{isOnBreak ? "Break" : "Session"}</h2>
          <h2>{displayedTimer}</h2>
          <div className="flex justify-between w-full">
            <button className="btn" onClick={() => setIsCounting(!isCounting)}>
              {isCounting ? "pause" : "start"}
            </button>
            <button
              className="btn"
              onClick={() => {
                resetTimer();
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
