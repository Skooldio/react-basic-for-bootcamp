import usePomodoro from "./utils/usePomodoro";
import { Button, RoundedButton } from "./components";

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
    allowChangeSetting,
  } = usePomodoro();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-smoke">Pomodoro Timer</h1>

      <div className="bg-redwood flex flex-col justify-center items-center w-4/5">
        <div className=" w-1/3 flex flex-col justify-center items-center p-2">
          <h2>{isOnBreak ? "Break" : "Session"}</h2>
          <h2>{displayedTimer}</h2>
          <div className="flex justify-between w-full">
            <Button
              onClick={() => setIsCounting(!isCounting)}
              buttonText={isCounting ? "pause" : "start"}
            />
            <Button onClick={() => resetTimer()} buttonText={"reset"} />
          </div>
        </div>

        <div className="flex justify-between w-full ">
          <div className="setting-box">
            <p>Session timer</p>
            <p className="font-bold">{initialSessionTimer}</p>
            <div className="flex w-full justify-between">
              <RoundedButton
                onClick={() => setInitialSessionTimer((prev) => prev - 1)}
                disableButton={
                  !allowChangeSetting || isCounting || initialSessionTimer <= 0
                }
                buttonText={"-"}
              />
              <RoundedButton
                onClick={() => setInitialSessionTimer((prev) => prev + 1)}
                buttonText={"+"}
                disableButton={!allowChangeSetting || isCounting}
              />
            </div>
          </div>

          <div className="setting-box">
            <p>Break timer</p>
            <p className="font-bold">{initialBreakTimer}</p>
            <div className="flex w-full justify-between">
              <RoundedButton
                onClick={() => setInitialBreakTimer((prev) => prev - 1)}
                disableButton={
                  !allowChangeSetting || isCounting || initialBreakTimer <= 0
                }
                buttonText={"-"}
              />
              <RoundedButton
                onClick={() => setInitialBreakTimer((prev) => prev + 1)}
                disableButton={!allowChangeSetting || isCounting}
                buttonText={"+"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
