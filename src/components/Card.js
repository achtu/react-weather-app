import React, { useEffect, useState } from "react";
import SearchForm from "./Form";
import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: undefined,
    description: undefined,
    city: undefined,
    date: undefined,
    icon: undefined,
  });
  const API_KEY = "f1cb380c1c026f0fa6c4898675e1a3ca";
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };



  const fetchCurrentWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      setWeather({
        temperature: Math.round(data.main?.temp),
        description: data.weather[0]?.description,
        city: data.name,
        date: Date(data.dt).slice(0, -47),
        icon: data.weather[0]?.icon,
      });
    } catch (err) {
      alert("failed to get your geo position");
    }
  };
  const getCurrentLocation = (event) => {
    event.preventDefault();
    fetchCurrentWeather();
    console.log(weather)
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      setWeather({
        temperature: Math.round(data.main?.temp),
        description: data.weather[0]?.description,
        city: data.name,
        date: Date(data.dt).slice(0, -47),
        icon: data.weather[0]?.icon,
      });
    } catch (err) {
      alert("please check if the data entered is correct and try again");
    }
    console.log(weather);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <>
      <SearchForm
        city={city}
        handleSubmit={handleSubmit}
        setCity={setCity}
        getCurrentLocation={getCurrentLocation}
      />
      <div className="card-wrap">
        <Card style={{ width: "18rem" }}>
          <Card.Body className="card-body">
            {weather.city ? (
              <div>
                <Image
                  src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="img"
                  className="umbrella-i"
                />
                <div className="card-inside">
                  <Card.Title style={{ fontSize: "2rem" }}>
                    {weather.temperature}° {weather.city}
                  </Card.Title>
                  <Card.Text>
                    <p className="card-descr"> {weather.description}</p>
                    <p className="card-date"> {weather.date} </p>
                  </Card.Text>
                </div>
              </div>
            ) : (
              <div className="enter-city-p">
                <p>Please enter your city</p>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default WeatherCard;
