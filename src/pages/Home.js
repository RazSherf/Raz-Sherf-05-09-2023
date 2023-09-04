import React from 'react'
import style from '../index.css'
import { TextField } from '@mui/material';

const Home = () => {
  return (
    <div className={style.container}>
        <TextField id="outlined-basic" label="Search City" variant="outlined"/>
    </div>
  )
}

export default Home
