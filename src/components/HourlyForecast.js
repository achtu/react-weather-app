import React from "react";
import { Image } from "react-bootstrap";


export default function HourlyForecast({icon}) {
    return (
        <>
            <div>
                <p>Day</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="forecast icon"
                    className="umbrella-i"
                />
                <p>min | max</p>
            </div>
        </>
    );
}
