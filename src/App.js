import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";
import MetroMap from "./components/MetroMap";

function App() {
  return (
    <div className="App">
      <div className="dcms-heading">
        <h1 className="dcms-name">🚇 dc metro satire 🚇</h1>
        <div className="dcms-icons">
          <a
            href="https://github.com/pink-hat-hacker/dc-metro-satire"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/zoe-yoyo-valladares/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <MetroMap></MetroMap>
      <div className="dcms-footer">
        <a href="https://developer.wmata.com/" target="_blank" rel="noreferrer">
          <h3>Powered by: WMATA API</h3>
        </a>
      </div>
    </div>
  );
}

export default App;
