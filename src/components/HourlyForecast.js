import React from "react";
import { Image } from "react-bootstrap";


export default function HourlyForecast({icon, mindayThree, maxDayThree}) {
    return (
        <>
            <div className="hourly-wrp">
                <p>day 3</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{mindayThree}°</span> {maxDayThree}°</p>
            </div>
        </>
    );
}
