import React from "react";
import { Image } from "react-bootstrap";


export default function DayFour({dtDayFour, iconDayFour, minDayFour, maxDayFour }) {
    return (
        <>
            <div className="hourly-wrp">
                <p>day 4<br/>
                {dtDayFour}
                </p>
                <Image
                    src={`http://openweathermap.org/img/wn/${iconDayFour}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{minDayFour}°</span> {maxDayFour}°</p>
            </div>
        </>
    );
}
