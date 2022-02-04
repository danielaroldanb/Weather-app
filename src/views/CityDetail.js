import React from "react";
import fetchDetail from "../controllers/fetchDetail";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CityDetail.module.css";

function CityDetail() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [city, setCity] = React.useState();

  React.useEffect(() => {
    fetchDetail(id, setCity);
  }, [id, setCity]);

  return (
    <div className={styles.city}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        Go back
      </button>
      {city === undefined && <h2>Loading...</h2>}
      {city === null && <h2>City not found</h2>}
      {city && (
        <div className={styles.detail}>
          <div className={styles.title}>
            <span>{city.name}</span>
          </div>
          <div className={styles.info}>
            <label>Weather: </label>
            <span>{city.weather}</span>
          </div>
          <div className={styles.info}>
            <label>Minimum temperature: </label>
            <span>{city.min} °C</span>
          </div>
          <div className={styles.info}>
            <label>Maximum temperature: </label>
            <span>{city.max} °C</span>
          </div>
          <div className={styles.info}>
            <label>Thermal sensation: </label>
            <span>{city.termalSense} °C</span>
          </div>
          <div className={styles.info}>
            <label>Humidity: </label>
            <span>{city.humidity}%</span>
          </div>
          <div className={styles.info}>
            <label>Wind: </label>
            <span>{city.wind} m/s</span>
          </div>
          <div className={styles.info}>
            <label>Clouds: </label>
            <span>{city.clouds}%</span>
          </div>

          <div className={styles.info}>
            <label>Pressure: </label>
            <span>{city.pressure} hPa</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
