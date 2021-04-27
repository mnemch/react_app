import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
//eb1733f56daae1f8c299ea8db424ea64 

//move it to LOGO via Navbar + add logo Papaplu 
export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed ,
            city: response.data.name,
        });    
    }

    function search() {
        const apiKey = "eb1733f56daae1f8c299ea8db424ea64";
        const unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
    
    function calculateURLWithCurrentPosition(position) {
    let currentLat = position.coords.latitude;
    let currentLon = position.coords.longitude;
    const apiKey = "eb1733f56daae1f8c299ea8db424ea64";
    const unit = "metric";
    let currenturl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${apiKey}&units=${unit}`;
    axios.get(currenturl).then(handleResponse);
  }

    function getCurrentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(calculateURLWithCurrentPosition);
  }

    if (weatherData.ready) {
        return (
    <div className="LOGO">
      <div>
      <div className="row">
        <div className="col-2">
      <div className="[col-1 currentLocColumn, CurrLocBtn]">
      <button className="btn btn-outline-success" onClick={getCurrentCity}>
        <span role="img" aria-label="here">🏴‍☠️ Find me</span>
      </button>
      </div>
      </div>

<div className="col-10" >
      <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="🔍 ..."
              className="form-control"
              id="city-input"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-success"
            />
          </div>
        </div>
      </form>
      </div>
      </div>
      <br/>
      <div className="container">
      <div className="[Wrapper">
      <div className = "weatherCard">
      {/* fix position change color make it pretty  */}
      <WeatherInfo data={weatherData}/>
      <br/>
      <WeatherForecast city={weatherData.city}/>
      </div>
      </div>
      </div>
       </div>
    </div>
  );
    } else {
        search();
        return "Loading...";

    }
  }

  