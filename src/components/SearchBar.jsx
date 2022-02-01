import React from "react";
import styles from "./SearchBar.module.css";
import { WiDayCloudyGusts } from "react-icons/wi";

export default function SearchBar({ onSearch }) {
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search");
      onSearch(input.value);
    }
  }
  return (
    <div className={styles.search} >
      <input id="search" placeholder="Add city" className={styles.input} />
      <button onClick={handleOnSearch} className={styles.btn} >
        <WiDayCloudyGusts />
      </button>
    </div>
  );
}
