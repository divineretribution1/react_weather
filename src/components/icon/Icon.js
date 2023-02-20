export const Icon = ({ weather }) => {
  const iconURL = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  if (weather != null) {
    return <img src={iconURL} alt=""></img>
  }
}
