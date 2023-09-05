import { useState } from 'react'
import '../pages/home.css'
import { TextField, InputAdornment, Container, Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';


const Home = () => {

  const [citySearch, setCitySearch] = useState('')
  const apiKey = 'eyvGn4yVUxjAxUUXRtMTp9UfmOxboAyt'
  // const locationKey ='New York'
  const apiUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${citySearch}?apikey=${apiKey}`

  const handleChange = (e) => {
    setCitySearch(e.target.value)
  }

  const fetchWeather = async () => {
    try{
      const response = await axios.get(apiUrl)
      const data = await response.data
      console.log(data);

    }catch(e){
      console.log(e);
    }
  }

  return (
    <Container maxWidth ="lg">
      <Box display={'flex'} justifyContent={'center'} alignContent={'center'} sx={{marginTop:5}}>
        <TextField
          id="search"
          type="search"
          label="Search City/Location"
          onChange={handleChange}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={fetchWeather} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>

  )
}

export default Home
