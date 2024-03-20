import { useState } from "react";
import "./App.css";

import fusee from "./assets/fusee.svg";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <div>
          <img src={fusee} alt="" />
          <h1>Ready To Go</h1>
        </div>
      </header>
      <main className="container">
        <div className="buttons">
          <button
            className={switch1 === true ? "purple" : "white"}
            onClick={() => {
              setSwitch1(true);
            }}
          >
            ON
          </button>
          <button
            className={switch2 === true ? "purple" : "white"}
            onClick={() => {
              setSwitch2(true);
            }}
          >
            ON
          </button>
          <button
            className={switch3 === true ? "purple" : "white"}
            onClick={() => {
              setSwitch3(true);
            }}
          >
            ON
          </button>
          <button
            className={switch1 === false ? "purple" : "white"}
            onClick={() => {
              setSwitch1(!switch1);
            }}
          >
            OFF
          </button>
          <button
            className={switch2 === false ? "purple" : "white"}
            onClick={() => {
              setSwitch2(!switch2);
            }}
          >
            OFF
          </button>
          <button
            className={switch3 === false ? "purple" : "white"}
            onClick={() => {
              setSwitch3(!switch3);
            }}
          >
            OFF
          </button>
          <div
            className={
              switch1 === true && switch2 === true && switch3 === true
                ? "green"
                : "red"
            }
          >
            <p>
              {switch1 === true && switch2 === true && switch3 === true
                ? "GO"
                : "NO WAY"}
            </p>
          </div>
        </div>
        <div className="reset">
          <button
            className="resetbis"
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            RESET
          </button>
        </div>
      </main>
      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Chloé</span>
      </footer>
    </>
  );
}

export default App;
