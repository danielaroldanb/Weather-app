import React from "react";

export default function Card({ max, min, name, img, onClose }) {
  function handleOnclose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div>
      <button onClick={handleOnclose}>X</button>
      <span>{name} </span>
      <div>
        <label>Min:</label>
        <span>{min} </span>
      </div>
      <div>
        <label>Max:</label>
        <span>{max} </span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather icon" />
    </div>
  );
}
