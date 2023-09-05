import { useState,useEffect } from 'react'
import '../pages/home.css'
import { TextField, InputAdornment, Container, Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { Autocomplete } from '@mui/material';

// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';


const Home = () => {

  const [citySearch, setCitySearch] = useState('')
  const [forcast, setForcast] = useState([])
  const[localized,setLocalized] = useState([])
  const apiKey = 'M1V6zLFuRR1OsStZJ6G3JXATeI7eXfjO'

  const handleChange = (event, newValue) => {
    setCitySearch(newValue)
  }
  const handleAutoCompleteChange = (event,newValue) =>{
    console.log(newValue);
    setCitySearch(newValue)
  }

  useEffect(() => {
  
    if (!citySearch || citySearch?.length < 3) return;
    fetchWithAutoComplete(citySearch)

  }, [citySearch])



  useEffect(() => {
    if (!forcast) return;
    console.log(forcast)
  }, [forcast])


  const fetchLocation = async () => {
    try {
      const locationKeyUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${citySearch}`
      const response = await axios.get(locationKeyUrl)
      const data = await response.data
      const LocationKey = data[0].Key;
      await fetchWeather(LocationKey)

    } catch (e) {
      console.log(e);
    }
  }

  const fetchWeather = async (locationKey) => {
    try {
      const apiUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
      const response = await axios.get(apiUrl)
      const data = await response.data
      setForcast(data.DailyForecasts)
    } catch (e) {
      console.log(e);
    }
  }

  const fetchWithAutoComplete = async (citySearch) => {
    try {
      const apiUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=eyvGn4yVUxjAxUUXRtMTp9UfmOxboAyt&q=${citySearch}`
      const response = await axios.get(apiUrl)
      const data = await response.data
      const LocalizedOptions = data.map((autoCompleteCity) => {
        return autoCompleteCity.LocalizedName
      })
      setLocalized(LocalizedOptions)
      // console.log(data[]);
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={"100%"} height={"100%"} alignContent={'center'}>
      <Box display={'flex'} justifyContent={'center'} sx={{ marginTop: 5 }}>
        <Autocomplete
          disablePortal
          value={citySearch}
          onInputChange={handleChange}
          onChange={handleAutoCompleteChange}
          id="combo-box-demo"
          options={localized}
          sx={{ width: 300 }}
          //renderInput={(params) => <TextField {...params} label="Search City/Location" />}
          renderInput={(params) => <TextField {...params} label="Search City/Location" />}
        />
        <button onClick={fetchLocation} > Search for forecast</button>
      </Box>
    </Box>


  )
}

export default Home
