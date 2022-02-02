import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import styles from "./App.module.css";
import { useState } from "react";
import fetchCity from "./controllers/fetch.js";
import fetchCoords from "./controllers/fetchLocation.js";

function App() {
  const [data, setData] = useState([]);

  function onSearch(city) {
    if (data.length > 4) {
      alert("You can see maximum 5 cities");
    } else {
      fetchCity(city, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
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
    </div>
  );
}

export default App;
