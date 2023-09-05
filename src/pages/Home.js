import { useState } from 'react'
import '../pages/home.css'
import { TextField } from '@mui/material';

const Home = () => {
  const [citySearch, setCitySearch] = useState('')

  const handleChange = (e) => {
    setCitySearch(e.target.value)

  }

  return (
    <div className="container">
      <TextField id="outlined-basic" label="Search City" variant="outlined" onChange={handleChange} />
      {citySearch}
    </div>
  )
}

export default Home
