import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
// import Moment from "react-moment";
import moment from "moment";
import PopUp from "./popup";

function App() {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  console.log(formatAMPM(new Date()));

  var alitime = new Date();
  console.log(
    alitime.toLocaleString("en-US", { hour: "numeric", hour12: true })
  );

  // var time = new Date();
  // console.log(
  //   time.toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   })
  // );
  // var today = new Date(),
  //   time = today.getHours() + ":" + today.getMinutes();

  // const [timeState, setImeState] = React.useState(time.toLocaleString());
  // this.state = {
  //   currentTime: time,
  // };
  // function formatHoursTo12(date) {
  //   return date.getHours() % 12 || 12;
  // }

  // const date3 = new Date();
  // console.log(formatHoursTo12(date3)); //

  const currentTime = () => {
    return new Date().toLocaleTimeString();
  };

  const [time, setTime] = React.useState(currentTime());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(currentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const vao = new Date();
  console.log(vao.toLocaleTimeString());
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
        {/* {timeState} */}
        <p>
          Edit <code>src/App.js</code>and save to reload...
        </p>{" "}
        <p>Time</p>
        {formatAMPM(new Date())}
        <PopUp idMessage="hi ali" />
        {/* {time} */}
        {/* <h2> {timee.toLocaleTimeString()}</h2> */}
        {/* <Moment date={dateToFormat} /> */}
        {/* <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
