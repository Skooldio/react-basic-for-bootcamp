function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-smoke">Pomodoro Timer</h1>

      <div className="bg-redwood flex flex-col justify-center items-center w-4/5">
        <div className=" w-1/3 flex flex-col justify-center items-center p-2">
          <h2>{"25:00"}</h2>
          <div className="flex justify-between w-full">
            <button className="btn">start</button>
            <button className="btn">reset</button>
          </div>
        </div>

        <div className="flex justify-between w-full ">
          <div className="setting-box">
            <p>Session timer</p>
            <p className="font-bold">{"25"}</p>
            <div className="flex w-full justify-between">
              <button className="rounded-btn">-</button>
              <button className="rounded-btn">+</button>
            </div>
          </div>

          <div className="setting-box">
            <p>Break timer</p>
            <p className="font-bold">{"5"}</p>
            <div className="flex w-full justify-between">
              <button className="rounded-btn">-</button>
              <button className="rounded-btn">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
