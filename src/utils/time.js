import axios from "axios";

export class Time {
  constructor() {
    this.curUTCTime = new Date().toUTCString();
    this.curLocalTime = new Date().toString();
  }

  // 서버에 저장된 시간 정보를 불러온다.
  async getTime() {
    try {
      const { data } = await axios.get("http://localhost:4000/time");

      this.curUTCTime = new Date(
        `${data[data.length - 1].data.time}Z`
      ).toUTCString();
      this.curLocalTime = new Date(
        `${data[data.length - 1].data.time}Z`
      ).toString();

      alert(`
      마지막으로 서버에 저장한 시간
      UTC: ${this.curUTCTime}
      Local: ${this.curLocalTime}`);
    } catch (e) {
      console.error(e);
    }
  }

  // 현재 시간을 서버로 전송한다.
  async saveCurrentTime() {
    const { data } = await axios.post("http://localhost:4000/time", {
      data: {
        time: new Date().toISOString().replace(/Z$/, ""),
      },
    });

    this.curUTCTime = new Date(`${data.data.time}Z`).toUTCString();
    this.curLocalTime = new Date(`${data.data.time}Z`).toString();

    alert(`
      서버에 저장한 시간
      UTC: ${this.curUTCTime}
      Local: ${this.curLocalTime}`);
  }

  // 사용자로부터 입력받은 시간을 서버로 전송한다.
  async saveTime(time) {
    if (time.length) {
      const today = new Date();

      try {
        const [hour, minute] = time.split(":");
        const year = today.getFullYear();
        const monthIndex = today.getMonth();
        const date = today.getDate();

        const { data } = await axios.post("http://localhost:4000/time", {
          data: {
            time: new Date(year, monthIndex, date, Number(hour), Number(minute))
              .toISOString()
              .replace(/Z$/, ""),
          },
        });

        console.log(data);
        this.curUTCTime = new Date(`${data.data.time}Z`).toUTCString();
        this.curLocalTime = new Date(`${data.data.time}Z`).toString();

        alert(`
        서버에 저장한 시간
        UTC: ${this.curUTCTime}
        Local: ${this.curLocalTime}`);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("시간을 입력해 주세요.");
    }
  }

  // 사용자로부터 입력받은 날짜와 시간을 서버로 전송한다.
  async saveTimeWithDate(dateTime) {
    if (dateTime.length) {
      try {
        const { data } = await axios.post("http://localhost:4000/time", {
          data: {
            time: new Date(dateTime).toISOString().replace(/Z$/, ""),
          },
        });

        console.log(data);
        this.curUTCTime = new Date(`${data.data.time}Z`).toUTCString();
        this.curLocalTime = new Date(`${data.data.time}Z`).toString();

        alert(`
        서버에 저장한 시간
        UTC: ${this.curUTCTime}
        Local: ${this.curLocalTime}`);
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("날짜와 시간을 입력해 주세요.");
    }
  }
}
