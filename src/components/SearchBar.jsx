import React from "react";

export default function SearchBar({ onSearch }) {
  function handleOnSearch() {
    if (typeof onSearch === "function") {
      const input = document.getElementById("search");
      onSearch(input.value);
    }
  }
  return (
    <div>
      <input id="search" placeholder="Search"/>
      <button onClick={handleOnSearch}>Add city</button>
    </div>
  );
}
