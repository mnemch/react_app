import React from "react";
import FormattedDate from "./FormatteDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return  (
        <div className="[City, WeatherInfo]">
        <div className="text-inside-wrapper">
                <h1 id="city"> {props.data.city} </h1>
                <h2 id="currtime"> 
                <FormattedDate date={props.data.date}/></h2>  
                <br />
                <h3 id="description"> {props.data.description} </h3>
                <div className="row">
                    <div className="col-8">
                        <h2>
                            <div id="weather-big-fig">
                            <WeatherIcon code={props.data.icon}/>
                            </div>
                            <span className="number-of-degrees">
                            <WeatherTemperature celsius={props.data.temperature} /></span>
                        </h2>
                    </div>
                    <div className="col-8">
                        <div className="dayinfo">
                            <p>
                                Humidity: <span id="humidity">{props.data.humidity}</span> %
                                <br />
                                Wind: <span id="wind">{props.data.wind}</span> km/h
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