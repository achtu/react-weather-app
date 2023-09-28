import React, { useState } from "react";
import SearchForm from "./Form";
import Card from "react-bootstrap/Card";

import { Image, Row, Col } from "react-bootstrap";
import HourlyForecast from "./HourlyForecast";

function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: undefined,
    description: undefined,
    city: undefined,
    humidity: undefined,
    wind: undefined,
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

      );
      const data = await res.json();

      setWeather({
        temperature: Math.round(data.list[0].main?.temp),
        humidity: data.list[0].main?.humidity,
        city: data.city.name,
        wind: data.list[0].wind.speed,
        date: Date(data.list.dt).slice(0, -47),
        description: data.list[0].weather[0]?.description,
        icon: data.list[0].weather[0]?.icon

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
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      setWeather({
        temperature: Math.round(data.list[0].main?.temp),
        humidity: data.list[0].main?.humidity,
        city: data.city.name,
        wind: data.list[0].wind.speed,
        date: Date(data.list.dt).slice(0, -47),
        description: data.list[0].weather[0]?.description,
        icon: data.list[0].weather[0]?.icon
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
        <Card style={{ width: "25rem" }}>
          <Card.Body className="card-body">
            {weather.city ? (
              <div>
                <Row>
                  <Col>
                  <Card.Title style={{ fontSize: "2rem" }}>
                      {weather.temperature}° {weather.city}
                    </Card.Title>
                  </Col>
                  <Col>
                   
                    <Image
                      src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      alt="img"
                      className="umbrella-i"
                    />
                  </Col>
                </Row>



                <Card.Text>
                  <Row>
                    <Col>
                      <p><span className="card-descr"> {weather.description} </span>
                        <br />
                        {weather.date} </p>

                    </Col>
                    <Col>
                      <p className="card-humidity-wind">Humidity: {weather.humidity} %
                        <br />
                        Wind: {weather.wind} km/h</p>

                    </Col>
                  </Row>


                </Card.Text>

                <HourlyForecast icon={weather.icon} />
              </div>
            ) : (
              <div className="enter-city-p">
                <p>Please enter your city</p>
              </div>
            )}
          </Card.Body>
        </Card>

      </div>
      <p style={{ textAlign: "center" }}>This project was coded by <a style={{ textDecoration: "none" }} href="https://github.com/achtu/react-weather-app" target="_blank" rel="noopener noreferrer" >achtu</a> and hosted on <a style={{ textDecoration: "none" }} href="https://app.netlify.com/teams/achtu/overview" target="_blank" rel="noopener noreferrer">Netify</a></p>
    </>
  );
}
export default WeatherCard;
