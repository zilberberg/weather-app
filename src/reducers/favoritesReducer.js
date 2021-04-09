import { FAVORITES_RESET, FAVORITE_ADD, FAVORITE_DELETE } from "../constants/favoritesConstants";

let initialState = {
    items: {}
}
function favoritesReducer(state = {...initialState}, action) {
    let newItems = {...state.items};
    switch (action.type) {
        case FAVORITE_ADD:
            newItems[action.payload.locationID] = action.payload.locationDetails;
            newItems[action.payload.locationID]["currentWeather"] = action.payload.currentWeather;
            return {...state, items: newItems}
        case FAVORITE_DELETE:
            delete newItems[action.payload];
            return {...state, items: newItems}
        case FAVORITES_RESET:
            return {...state, items: []}
        default:
            return state;
    }
}

export { favoritesReducer }