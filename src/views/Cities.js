import React from "react";
import Card from "../components/Card";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import styles from "./Cities.module.css"

export default function Cities({data,onSearch,handleOnClose}) {
  return (
 <div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div
        className={
          data.length > 0 ? styles.citiesContainer : styles.emptyContainer
        }
      >
        {data.length > 0 && (
          <Card
            primary
            max={data[data.length - 1].max}
            min={data[data.length - 1].min}
            name={data[data.length - 1].name}
            img={data[data.length - 1].img}
            onClose={handleOnClose}
          />
        )}

        <Cards cities={data} onClose={handleOnClose} />
      </div>
      </div>
  );
}
