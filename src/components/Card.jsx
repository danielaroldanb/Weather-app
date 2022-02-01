import React from "react";
import CardTemp from "./CardTemp";
import styles from "./Card.module.css";

export default function Card({ max, min, name, img, onClose, primary }) {
  function handleOnclose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <span className={styles.name}>
        {name} {!primary && <button className={styles.btn} onClick={handleOnclose}>X</button>}
      </span>

      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="weather icon"
      />

      <div className={styles.temps}>
        <CardTemp label="Min:" value={min} />
        <CardTemp label="Max:" value={max} />
      </div>
    </div>
  );
}
