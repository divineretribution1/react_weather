import { WeatherIcon } from "../weatherIcon/WeatherIcon"

export const Main = ({ data }) => {
    const { name, main, weather, wind, sys } = data || {}


    return (
    <div className="container">
            {data && 
            <div className="top">
            <div className="location">
                <p>{`${name},`} {sys && <span>{sys.country}</span>}</p>
            </div>
            <div className="temp">
                {main && <h1>{main.temp.toFixed()}°C</h1>}
            </div>
            <div className="description">
                {weather && <p>{weather[0]?.main}</p>}
            </div>
            
        </div>    
            }

            {data && 
            <div className="bottom">
                <WeatherIcon weather={weather} />
                <div className="feels">
                    {main && <p className="bold">{main.feels_like.toFixed()}°C</p>}
                    <p>Feels like</p>
                </div>
                <div className="humidity">
                    {main && <p className="bold">{main.humidity}%</p>}
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {wind && <p className="bold">{wind.speed.toFixed()}KPH</p>}
                    <p>Wind speed</p>
                </div>
            </div>
            }
    </div>
    )
}