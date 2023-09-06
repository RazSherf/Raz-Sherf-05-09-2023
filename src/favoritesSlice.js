import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteCities: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addCityToFavorites: (state, action) => {
            state.favoriteCities.push(action.payload);
        },
        removeCityFromFavorites: (state, action) => {
            state.favoriteCities = state.favoriteCities.filter((city) => city.Key !== action.payload.Key);
        }
    }
});


export const { addCityToFavorites, removeCityFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;