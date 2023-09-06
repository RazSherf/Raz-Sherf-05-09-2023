import React, { useEffect } from 'react'
import '../pages/favorite.css'
import { useSelector, useDispatch } from 'react-redux';
import FavoriteCityDetails from '../components/FavoriteCityDetails/FavoriteCityDetails';
import { setFavorites } from '../favoritesSlice';

let firstTime = true;

const Favorite = () => {
  const favoriteCities = useSelector((state) => state.favorites.favoriteCities);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteCitiesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCities'));
    dispatch(setFavorites(favoriteCitiesFromLocalStorage));
  }, []);

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    const favoriteCitiesString = JSON.stringify(favoriteCities);
    localStorage.setItem('favoriteCities', favoriteCitiesString);
  }, [favoriteCities]);

  return (
    <div className='favoritesContainer'>
      {favoriteCities.map((city) => (
        <FavoriteCityDetails key={city.Key} city={city} />
      ))}
      {favoriteCities.length === 0 && <div className='emptyFavorites'>You don't have any favorites. <a href="/" className='homeRef'>Get your favorite now</a></div>}
    </div>
  )
}

export default Favorite
