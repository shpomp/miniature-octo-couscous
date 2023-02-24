import React, { useState } from "react";

import "./App.css";

const Pad = [
  {
    key: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1",
  },
  {
    key: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2",
  },
  {
    key: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater-3",
  },
  {
    key: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater-4_1",
  },
  {
    key: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Heater-6",
  },
  {
    key: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Dsc_Oh",
  },
  {
    key: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick_n_Hat",
  },
  {
    key: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "RP4_KICH_1",
  },
  {
    key: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "CEV_H2",
  },
];

const keysRegex = /[QWEASDZXC]/;

export const App = () => {
  const [soundName, setSoundName] = useState("");

  document.addEventListener("keyup", (e) => {
    let key = e.key.toUpperCase();
    if (e.key.toUpperCase().match(keysRegex)) {
      const sound = document.getElementById(key);
      setSoundName(sound.className.split(" ")[0]);
      sound.play();
    }
  });

  const playSound = (key, name) => () => {
    setSoundName(name);
    const sound = document.getElementById(key);
    sound.play();
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="keys">
          {Pad.map((button) => (
            <div
              className="drum-pad key-on"
              id={button.name}
              key={button.key}
              onClick={playSound(button.key, button.name)}
            >
              <audio
                className={`${button.name} clip`}
                id={button.key}
                src={button.url}
              />
              {button.key}
            </div>
          ))}
        </div>
        <div id="display">{soundName.toLowerCase()}</div>
      </div>
    </div>
  );
};
