import React from "react";
import { Image } from "react-bootstrap";


export default function DayThree({dtDayThree, iconDayThree, minDayThree, maxDayThree}) {
    return (
        <>
            <div className="hourly-wrp">
                <p>
                {dtDayThree}</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${iconDayThree}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{minDayThree}°</span> {maxDayThree}°</p>
            </div>
        </>
    );
}
