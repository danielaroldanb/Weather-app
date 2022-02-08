import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { useState } from "react";
import fetchCity from "./controllers/fetch.js";
import fetchCoords from "./controllers/fetchLocation.js";
import Cities from "./views/Cities";
import CityDetail from "./views/CityDetail";
import About from "./views/About";

function App() {
  const [data, setData] = useState([]);

  function onSearch(city) {

      var mediaqueryList = window.matchMedia("(max-width: 576px)");
  if(mediaqueryList.matches) {
    if (data.length > 1) {
      alert("You can see maximum 2 cities");
    } else {
      fetchCity(city, setData);
    }
  }
  else{    if (data.length > 3) {
    alert("You can see maximum 4 cities");
  } else {
    fetchCity(city, setData);
  }}

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

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Cities
                data={data}
                onSearch={onSearch}
                handleOnClose={handleOnClose}
              />
            }
          />

          <Route path="/city/:id" element={<CityDetail />} />
          <Route path="/about"  element={<About />} />
        </Routes>
        
      </div>
    
    </div>
  );
}

export default App;
