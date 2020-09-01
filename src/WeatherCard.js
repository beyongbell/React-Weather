import React from 'react';

const WeatherCard = () => {
    return (
        <div className="card">
            <div className="location">
                <h1 className="city">Sydney</h1>
                <h3 className="country">AU</h3>
            </div>
            <img className="icon" src="./images/cloud.png" alt="Weather Icon"/>
            <h1 className="temp">20 ℃</h1>
            <h3 className="condition">Clouds</h3>
        </div>
    )
}

export default WeatherCard