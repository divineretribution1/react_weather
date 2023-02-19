import axios from 'axios'
import { useQuery } from 'react-query'
const querySettings = {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
}

export const useGetWeather = (location) => {
    return useQuery(
        ['useGetWeather', location],
        async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location.trim()}&units=metric&appid=5a479825e496bcd57cf42fa26e396864`)
            return response?.data
        },
        {
            ...querySettings,
            enabled: location.length > 0
        }
    )
}