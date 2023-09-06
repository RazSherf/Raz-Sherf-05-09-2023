import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';
import { useEffect } from 'react';
// import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
// import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const currentThemeFromLocalStorage = localStorage.getItem('currentTheme');
    if (currentThemeFromLocalStorage === 'dark') {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/fav' element={<Favorite />}></Route>
      </Routes>
      <Toaster
        position="top-center"
      />
    </div>
  );
}

export default App;
