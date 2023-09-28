import React from "react";
import { Image } from "react-bootstrap";


export default function HourlyForecast({icon}) {
    return (
        <>
            <div className="hourly-wrp">
                <p>Day</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p>min | max</p>
            </div>
        </>
    );
}
