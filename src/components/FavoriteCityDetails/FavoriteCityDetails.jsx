import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCityFromFavorites } from '../../favoritesSlice';
import styles from './FavoriteCityDetails.module.css';
import getWeatherIconLink from '../../utils';
import axios from 'axios';
import toast from 'react-hot-toast';

const apiKey = 'VJ1P10PVafELdhJ0gQIlijAhoVBi2OAB';

const FavoriteCityDetails = ({ city }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const dispatch = useDispatch();

    const getCurrentWeather = async () => {
        try {
            const apiUrl = `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}`;
            const response = await axios.get(apiUrl);
            const data = await response.data;
            setCurrentWeather(data[0]);
        } catch (e) {
            toast.error("Oops, something went wrong");
        }
    };

    useEffect(() => {
        getCurrentWeather();
    }, []);

    const removeFromFavorites = (city) => {
        dispatch(removeCityFromFavorites(city));
        toast.success('Successfully removed!')
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
