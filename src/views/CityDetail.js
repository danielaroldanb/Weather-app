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
       <button onClick={() => navigate(-1)}>Go back</button>
      {city === undefined && <h2>Loading...</h2>}
      {city === null && <h2>City not found</h2>}
      {city && (
        <div className={styles.detail}>
          <div className={styles.info}>
            <label>City: </label>
            <span>{city.name}</span>
          </div>
          <div className={styles.info}>
            <label>temp_min: </label>
            <span>{city.min}</span>
          </div>
          <div className={styles.info}>
            <label>temp_max: </label>
            <span>{city.max}</span>
          </div>
          <div className={styles.info}>
            <label>wind: </label>
            <span>{city.wind}</span>
          </div>
          <div className={styles.info}>
            <label>clouds: </label>
            <span>{city.clouds}</span>
          </div>
          <div className={styles.info}>
            <label>weather: </label>
            <span>{city.weather}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
