import React from "react";
import { Image } from "react-bootstrap";


export default function DayFive({dtDayFive, iconDayFive, minDayFive, maxDayFive }) {
    return (
        <>
            <div className="hourly-wrp">
                <p>day 5<br/>
                {dtDayFive}</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${iconDayFive}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{minDayFive}°</span> {maxDayFive}°</p>
            </div>
        </>
    );
}
