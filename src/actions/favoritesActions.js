import { FAVORITE_ADD, FAVORITE_DELETE, FAVORITES_RESET } from '../constants/favoritesConstants';

const addFavorite = (favoriteID) => (dispatch) => {
    dispatch({type: FAVORITE_ADD});
}

const removeFavorite = (favoriteID) => (dispatch) => {
    dispatch({type: FAVORITE_DELETE});
}

const resetFavorites = () => (dispatch) => {
    dispatch({type: FAVORITES_RESET});
}


export { addFavorite, removeFavorite, resetFavorites }