import React, { useEffect } from 'react'
import '../pages/favorite.css'
import { useSelector, useDispatch } from 'react-redux';
import FavoriteCityDetails from '../components/FavoriteCityDetails/FavoriteCityDetails';
import { setFavorites } from '../favoritesSlice';

const Favorite = () => {
  const favoriteCities = useSelector((state) => state.favorites.favoriteCities);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteCitiesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCities'));
    dispatch(setFavorites(favoriteCitiesFromLocalStorage));
  }, []);

  return (
    <div>
      {favoriteCities.map((city) => (
        <FavoriteCityDetails key={city.Key} name={city.LocalizedName} locationKey={city.Key} />
      ))}
    </div>
  )
}

export default Favorite
