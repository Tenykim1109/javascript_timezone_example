import { useState } from "react";
import { Time } from "./utils/time";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState("");
  const [time, setTime] = useState("");
  const timeUtil = new Time();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label htmlFor="inputDateTime">날짜 및 시간</label>
          <input
            type="datetime-local"
            id="inputDateTime"
            placeholder="시간 및 날짜"
            onChange={(e) => setDateTime(e.target.value)}
          />
          <button onClick={() => timeUtil.saveTimeWithDate(dateTime)}>
            날짜와 시간 제출
          </button>
        </div>
        <div>
          <label htmlFor="inputTime">시간</label>
          <input
            type="time"
            id="inputTime"
            placeholder="시간 선택"
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            onClick={() => {
              timeUtil.saveTime(time);
            }}
          >
            시간 제출
          </button>
        </div>
        <button onClick={() => timeUtil.saveCurrentTime()}>
          현재 시간 제출
        </button>
        <button onClick={() => timeUtil.getTime()}>서버 시간 받아오기</button>
      </header>
    </div>
  );
}

export default App;
