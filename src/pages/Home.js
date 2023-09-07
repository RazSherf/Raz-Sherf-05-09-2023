import { Autocomplete, Box, Button, Fab, TextField, ThemeProvider, createTheme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DailyWeatherInfo from '../components/DailyWeatherInfo/DailyWeatherInfo';
import '../pages/home.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { addCityToFavorites, removeCityFromFavorites, setFavorites } from '../favoritesSlice';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import toast from 'react-hot-toast';
import { debounce } from 'lodash';

let firstTime = true;

const Home = () => {
  const [citySearch, setCitySearch] = useState(null);
  const [selectedCityOption, setSelectedCityOption] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [fiveDayForecasts, setFiveDayForecasts] = useState([]);
  const [localized, setLocalized] = useState([]);
  const favoriteCities = useSelector((state) => state.favorites.favoriteCities);
  const dispatch = useDispatch();
  const isFavorite = favoriteCities.find((city) => city.Key === selectedCity?.Key);
  const [unit, setUnit] = useState('C');
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: localStorage.getItem('currentTheme') === 'dark' ? "dark" : "light"
    }
  }));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme((prevValue) => {
        if (prevValue.palette.mode === localStorage.getItem('currentTheme')) {
          return prevValue;
        }
        let newTheme = 'dark';
        if (prevValue.palette.mode === 'dark') {
          newTheme = 'light';
        }
        return createTheme({
          palette: {
            mode: newTheme,
          }
        });
      });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      observer.disconnect();
    }
  }, []);

  const handleAutoCompleteChange = (event, newValue) => {
    setSelectedCityOption(newValue);
  }

  const fetchWithAutoComplete = debounce(async (citySearch) => {
    try {
      const apiUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${citySearch}`
      const response = await axios.get(apiUrl);
      const data = await response.data;
      const localizedOptions = data.map((autoCompleteCity) => {
        return autoCompleteCity.LocalizedName
      });
      setLocalized(localizedOptions)
    } catch (e) {
      toast.error("Oops, something went wrong");
    }
  }, 1000);

  const fetchDefaultLocation = async () => {
    try {
      const locationKeyUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=TelAviv`;
      const response = await axios.get(locationKeyUrl);
      const data = await response.data;
      setSelectedCity(data[0]);
      fetchWeather('', data[0].Key);
    } catch (e) {
      toast.error("Oops, something went wrong");
    }
  }

  useEffect(() => {
    fetchDefaultLocation();
  }, []);

  useEffect(() => {
    const favoriteCitiesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCities'));
    dispatch(setFavorites(favoriteCitiesFromLocalStorage || []));
  }, []);

  useEffect(() => {
    if (citySearch && citySearch.length > 2) {
      fetchWithAutoComplete(citySearch)
    }
  }, [citySearch]);

  const fetchLocation = async (location) => {
    try {
      const locationKeyUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${location}`;
      const response = await axios.get(locationKeyUrl);
      const data = await response.data;
      setSelectedCity(data[0]);
      return data[0];
    } catch (e) {
      toast.error("Oops, something went wrong");
    }
  }

  const fetchWeather = async (location, locationKey = null) => {
    try {
      let locationKeyValue = locationKey;
      if (!locationKey) {
        const city = await fetchLocation(location);
        setSelectedCity(city);
        locationKeyValue = city.Key;
      }
      const apiUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKeyValue}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`;
      const response = await axios.get(apiUrl);
      const data = await response.data;
      setFiveDayForecasts(data.DailyForecasts);
    } catch (e) {
      toast.error("Oops, something went wrong");
    }
  }

  useEffect(() => {
    if (selectedCityOption) {
      fetchWeather(selectedCityOption);
    }
  }, [selectedCityOption]);

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    const favoriteCitiesString = JSON.stringify(favoriteCities);
    localStorage.setItem('favoriteCities', favoriteCitiesString);
  }, [favoriteCities]);

  const onLike = (city) => {
    const favoriteIndex = favoriteCities.findIndex((c) => c.Key === city.Key);
    if (favoriteIndex !== -1) {
      dispatch(removeCityFromFavorites(city));
      toast.success('Successfully removed!')
    }
    else {
      dispatch(addCityToFavorites(city));
      toast.success('Successfully Added!')
    }
  };

  const changeUnits = () => {
    setUnit((prevValue) => {
      if (prevValue === 'C') {
        return 'F';
      }
      return 'C';
    });
  }

  const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }

  return (
    <div>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={"100%"} height={"100%"} alignContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} sx={{ marginTop: 5 }}>
         
        </Box>
      </Box>
      {selectedCity && (
        <div>
          <div className='selectedCityHeader'>
            {selectedCity.LocalizedName}

            <Fab color="primary" aria-label="add" size="small" sx={{
              backgroundColor: 'red', ":hover": {
                backgroundColor: 'red',
              }
            }} className='likeButton' onClick={() => onLike(selectedCity)}>
              {isFavorite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            </Fab>
          </div>
          <div className='unitsButton'>
            <Button
              component="label"
              variant="contained"
              startIcon={<DeviceThermostatIcon />}
              onClick={changeUnits}
            >
              Change Units
            </Button>
          </div>
          <div className='forecastsContainer'>
            {fiveDayForecasts.map((dayForecast) => (
              <DailyWeatherInfo
                key={dayForecast.Date}
                day={dayForecast.Date}
                temperature={unit === 'C' ? dayForecast.Temperature.Maximum.Value : celsiusToFahrenheit(dayForecast.Temperature.Maximum.Value).toFixed(2)}
                unit={unit}
                weatherCondition={dayForecast.Day.IconPhrase}
                weatherIconNumber={dayForecast.Day.Icon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
