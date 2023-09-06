import { Autocomplete, Box, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DailyWeatherInfo from '../components/DailyWeatherInfo/DailyWeatherInfo';
import '../pages/home.css';


const locationsArray = [
  {
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: { ID: 'IL', LocalizedName: 'Israel' },
    AdministrativeArea: { ID: 'TA', LocalizedName: 'Tel Aviv' }
  },
  {
    Version: 1,
    Key: '3431644',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Telanaipura',
    Country: { ID: 'ID', LocalizedName: 'Indonesia' },
    AdministrativeArea: { ID: 'JA', LocalizedName: 'Jambi' }
  },
  {
    Version: 1,
    Key: '300558',
    Type: 'City',
    Rank: 45,
    LocalizedName: 'Telok Blangah New Town',
    Country: { ID: 'SG', LocalizedName: 'Singapore' },
    AdministrativeArea: { ID: '05', LocalizedName: 'South West' }
  },
  {
    Version: 1,
    Key: '325876',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telford',
    Country: { ID: 'GB', LocalizedName: 'United Kingdom' },
    AdministrativeArea: { ID: 'TFW', LocalizedName: 'Telford and Wrekin' }
  },
  {
    Version: 1,
    Key: '169072',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telavi',
    Country: { ID: 'GE', LocalizedName: 'Georgia' },
    AdministrativeArea: { ID: 'KA', LocalizedName: 'Kakheti' }
  },
  {
    Version: 1,
    Key: '230611',
    Type: 'City',
    Rank: 51,
    LocalizedName: 'Telsiai',
    Country: { ID: 'LT', LocalizedName: 'Lithuania' },
    AdministrativeArea: { ID: 'TE', LocalizedName: 'Telšiai' }
  },
  {
    Version: 1,
    Key: '2723742',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telégrafo',
    Country: { ID: 'BR', LocalizedName: 'Brazil' },
    AdministrativeArea: { ID: 'PA', LocalizedName: 'Pará' }
  },
  {
    Version: 1,
    Key: '186933',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Tela',
    Country: { ID: 'HN', LocalizedName: 'Honduras' },
    AdministrativeArea: { ID: 'AT', LocalizedName: 'Atlántida' }
  },
  {
    Version: 1,
    Key: '3453754',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telaga Asih',
    Country: { ID: 'ID', LocalizedName: 'Indonesia' },
    AdministrativeArea: { ID: 'JB', LocalizedName: 'West Java' }
  },
  {
    Version: 1,
    Key: '3453755',
    Type: 'City',
    Rank: 55,
    LocalizedName: 'Telagamurni',
    Country: { ID: 'ID', LocalizedName: 'Indonesia' },
    AdministrativeArea: { ID: 'JB', LocalizedName: 'West Java' }
  }
];

const forecasts = [
    {
      Date: '2023-09-06T07:00:00+03:00',
      EpochDate: 1693972800,
      Temperature: {
        Minimum: { Value: 27.4, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 33.9, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us'
    },
    {
      Date: '2023-09-07T07:00:00+03:00',
      EpochDate: 1694059200,
      Temperature: {
        Minimum: { Value: 27.3, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 33.1, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us'
    },
    {
      Date: '2023-09-08T07:00:00+03:00',
      EpochDate: 1694145600,
      Temperature: {
        Minimum: { Value: 28.9, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 33.7, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us'
    },
    {
      Date: '2023-09-09T07:00:00+03:00',
      EpochDate: 1694232000,
      Temperature: {
        Minimum: { Value: 27, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 33.8, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false
      },
      Night: {
        Icon: 38,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us'
    },
    {
      Date: '2023-09-10T07:00:00+03:00',
      EpochDate: 1694318400,
      Temperature: {
        Minimum: { Value: 26, Unit: 'C', UnitType: 17 },
        Maximum: { Value: 30.7, Unit: 'C', UnitType: 17 }
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us'
    }
  ];

const Home = () => {

  const [citySearch, setCitySearch] = useState('')
  const [selectedCity, setSelectedCity] = useState(null);
  const [fiveDayForecasts, setFiveDayForecasts] = useState([])
  const [localized, setLocalized] = useState([])
  const apiKey = 'M1V6zLFuRR1OsStZJ6G3JXATeI7eXfjO'

  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    setCitySearch(newValue);
  }
  const handleAutoCompleteChange = (event, newValue) => {
    console.log(newValue);
    // setCitySearch(newValue)
    setSelectedCity(newValue);
  }

  useEffect(() => {

    // if (!citySearch || citySearch?.length < 3) return;
    fetchWithAutoComplete(citySearch)

  }, [citySearch])

  useEffect(() => {
    if (selectedCity) {
      fetchWeather(selectedCity.Key);
    }
  }, [selectedCity]);

  const fetchWeather = async (locationKey) => {
    try {
      // const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`;
      // const response = await axios.get(apiUrl);
      // const data = await response.data;
      // console.log('data', data);
      // setFiveDayForecasts(data.DailyForecasts);
      setFiveDayForecasts(forecasts);
    } catch (e) {
      console.log(e);
    }
  }

  const fetchWithAutoComplete = async (citySearch) => {
    try {
      // const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=eyvGn4yVUxjAxUUXRtMTp9UfmOxboAyt&q=${citySearch}`
      // const response = await axios.get(apiUrl);
      // const data = await response.data;
      // console.log(data);
      // const LocalizedOptions = data.map((autoCompleteCity) => {
      //   return autoCompleteCity.LocalizedName
      // })
      const localizedOptions = locationsArray;
      setLocalized(localizedOptions)
      // console.log(data[]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={"100%"} height={"100%"} alignContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} sx={{ marginTop: 5 }}>
          <Autocomplete
            disablePortal
            value={citySearch}
            onInputChange={handleChange}
            onChange={handleAutoCompleteChange}
            id="combo-box-demo"
            options={localized}
            getOptionLabel={(option) => option?.LocalizedName || ''}
            sx={{ width: 300 }}
            //renderInput={(params) => <TextField {...params} label="Search City/Location" />}
            renderInput={(params) => <TextField {...params} label="Search City/Location" />}
          />
          {/* <button onClick={fetchLocation} > Search for forecast</button> */}
        </Box>
      </Box>
      {selectedCity && (
        <div className='forecastsContainer'>
          {fiveDayForecasts.map((dayForecast) => (
            <DailyWeatherInfo
              key={dayForecast.Date}
              day={dayForecast.Date}
              temperature={dayForecast.Temperature.Maximum.Value}
              unit={dayForecast.Temperature.Maximum.Unit}
              weatherCondition={dayForecast.Day.IconPhrase} />
          ))}
        </div>
      )}
    </div>


  )
}

export default Home
