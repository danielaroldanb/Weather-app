import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { WiDayCloudyGusts } from "react-icons/wi";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [search, setsearch] = useState("");

  function handleOnSearch() {
    if (typeof onSearch === "function") {
      onSearch(search);
      setsearch("");
    }
  }

  return (
    <div className={styles.search}>
      <input
        placeholder="Add cities"
        autoComplete="off"
        className={styles.input}
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button onClick={handleOnSearch} className={styles.btn}>
        <WiDayCloudyGusts />
      </button>
      <Link to="/about">
        <button className={styles.btn1}>About</button>
      </Link>
    </div>
  );
}
