import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import { useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/fav' element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
