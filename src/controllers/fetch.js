const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(city,setData){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
            };
            setData((oldCities) => [...oldCities, city]);
          } else {
            alert("City not found");
          }
        });
}

