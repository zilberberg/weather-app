import { FAVORITE_ADD, FAVORITE_DELETE, FAVORITES_RESET } from '../constants/favoritesConstants';

const addFavorite = (locationID, locationDetails, currentWeather, forecast) => (dispatch) => {
    dispatch({type: FAVORITE_ADD, payload: {locationID, locationDetails, currentWeather, forecast}});
}

const removeFavorite = (favoriteID) => (dispatch) => {
    dispatch({type: FAVORITE_DELETE, payload: favoriteID});
}

const resetFavorites = () => (dispatch) => {
    dispatch({type: FAVORITES_RESET});
}

export { addFavorite, removeFavorite, resetFavorites }