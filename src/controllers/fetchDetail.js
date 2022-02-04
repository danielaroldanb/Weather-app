const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchDetail(id, setData) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
  )
    .then((r) => r.json())
    .then((response) => {
      if (response.main !== undefined) {
        const city = {
          min: Math.round(response.main.temp_min),
          max: Math.round(response.main.temp_max),
          img: response.weather[0].icon,
          id: response.id,
          wind: response.wind.speed,
          temp: response.main.temp,
          name: response.name,
          weather: response.weather[0].main,
          clouds: response.clouds.all,
          latitude: response.coord.lat,
          longitude: response.coord.lon,
          termalSense: Math.round(response.main.feels_like),
          pressure: response.main.pressure,
          humidity: response.main.humidity,
        };
        if (city) setData(city);
      } else {
        setData(null);
      }
    });
}
