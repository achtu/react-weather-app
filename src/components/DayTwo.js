import React from "react";
import { Image } from "react-bootstrap";


export default function DayTwo({dtDayTwo, iconDayTwo, minDayTwo, maxDayTwo }) {
    return (
        <>
            <div className="hourly-wrp">
                <p>
                {dtDayTwo}</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${iconDayTwo}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{minDayTwo}°</span> {maxDayTwo}°</p>
            </div>
        </>
    );
}
