export const WeatherIcon = ({ weather }) => {
  const iconURL = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return weather && <img src={iconURL} alt=""></img>
}
