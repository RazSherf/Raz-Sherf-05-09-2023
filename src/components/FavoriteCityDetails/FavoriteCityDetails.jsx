import axios from 'axios';
import React, { useEffect } from 'react';

const FavoriteCityDetails = ({ name, locationKey }) => {
    const apiKey = 'M1V6zLFuRR1OsStZJ6G3JXATeI7eXfjO';

    const getCurrentWeather = async () => {
        const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`;
        const response = await axios.get(apiUrl);
        const data = await response.data;
        console.log(data);
        // setFiveDayForecasts(data.DailyForecasts);
        // setFiveDayForecasts(forecasts);
    };

    useEffect(() => {
        getCurrentWeather();
    }, []);

    return (
        <div>
            {name}
            {locationKey}
        </div>
    )
}

export default FavoriteCityDetails;
