import React from "react";

export default function City() {
  return (
    <div classNameName="City">
        <div className="text-inside-wrapper">
                <h1 id="city">Groningen</h1>
                <h2 id="currtime">Monday 00:00</h2>
                <br />
                <h3 id="description">overcast clouds</h3>
                <div className="row">
                    <div className="col-8">
                        <h2>
                            <div id="weather-big-fig">
                              <img
                                    src="http://openweathermap.org/img/wn/10d@2x.png" alt=""
                                    className="float-left" id="icon" />
                            </div>
                            <span className="number-of-degrees" id="degreesnumber">10 </span><span
                                className="celsius-and-farenheit"><a href="#" id="celsius">°C </a> |
                                <a href="#" id="fahrenheit">°F</a>
                            </span>
                        </h2>
                    </div>
                    <div className="col-8">
                        <div className="dayinfo">
                            <p>
                                Humidity: <span id="humidity">81</span> %
                                <br />
                                Wind: <span id="wind">8</span> km/h
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div> 
            </div> 
      </div>
  );
}