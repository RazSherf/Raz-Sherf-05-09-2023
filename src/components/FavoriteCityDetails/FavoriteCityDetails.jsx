import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCityFromFavorites } from '../../favoritesSlice';
import styles from './FavoriteCityDetails.module.css';
import getWeatherIconLink from '../../utils';
import axios from 'axios';

const currentWeatherDefault = {
    LocalObservationDateTime: '2023-09-06T12:13:00+03:00',
    EpochTime: 1693991580,
    WeatherText: 'Sunny',
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
        Metric: { Value: 32.6, Unit: 'C', UnitType: 17 },
        Imperial: { Value: 91, Unit: 'F', UnitType: 18 }
    },
    MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
};

const apiKey = 'M1V6zLFuRR1OsStZJ6G3JXATeI7eXfjO';

const FavoriteCityDetails = ({ city }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    console.log(currentWeather);
    const dispatch = useDispatch();

    const getCurrentWeather = async () => {
        // const apiUrl = `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}`;
        // const response = await axios.get(apiUrl);
        // const data = await response.data;
        // setCurrentWeather(data[0]);
        setCurrentWeather(currentWeatherDefault);
    };

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const removeFromFavorites = (city) => {
        dispatch(removeCityFromFavorites(city));
    };

    return (
        <div className={styles.container}>
            <div className={styles.cityName}>{city.LocalizedName}</div>
            <img src={getWeatherIconLink(currentWeather?.WeatherIcon)} alt={currentWeather?.WeatherText} />
            <div className={styles.subWeatherInfo}>
                <div className={styles.temperature}>{currentWeather?.Temperature?.Metric?.Value}{currentWeather?.Temperature?.Metric?.Unit}</div>
                <div>{currentWeather?.WeatherText}</div>
            </div>
            <Fab color="primary" aria-label="add" size="small" sx={{
                backgroundColor: 'red', ":hover": {
                    backgroundColor: 'red',
                }
            }} onClick={() => removeFromFavorites(city)}>
                <FavoriteOutlinedIcon />
            </Fab>
        </div>
    )
}

export default FavoriteCityDetails;
