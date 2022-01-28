import React from "react";
import CardTemp from "./CardTemp";

export default function Card({ max, min, name, img, onClose }) {
  function handleOnclose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div>
      <button onClick={handleOnclose}>X</button>
      <span>{name} </span>
      <CardTemp label="Min:" value={min} />
      <CardTemp label="Max:" value={max} />
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
}
