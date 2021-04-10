import { LOCATION_SET, 
    WEATHER_GET, 
    WEATHER_FORECAST, 
    WEATHER_GET_SUCCESS, 
    WEATHER_FORECAST_SUCCESS, 
    WEATHER_GET_FAIL, 
    WEATHER_FORECAST_FAIL, 
    AUTOCOMPLETE_SUCCESS, 
    AUTOCOMPLETE_GET, 
    AUTOCOMPLETE_FAIL, 
    SCREEN_NAME_SET, 
    LOCATION_SUCCESS} from "../constants/utilsConstants";
import {savedData} from '../data';

let initialState = {
    locationDetails: savedData.locationDetails,
    currentWeather: savedData.currentWeather,
    forecast: savedData.forecast,
    autocomplete: savedData.autocomplete,
    weatherLoading: false,
    forecastLoading: false,
    weatherError: null,
    forecastError: null,
    autocompleteError: null,
    screenName: 'home',
}
function utilsReducer(state = {...initialState}, action) {
    switch (action.type) {
        case WEATHER_GET:
            return {...state, weatherLoading: true}
        case WEATHER_FORECAST:
            return {...state, forecastLoading: true}
        case WEATHER_GET_SUCCESS:
            return {...state, weatherLoading: false, weatherError: null, currentWeather: action.payload}
        case WEATHER_FORECAST_SUCCESS:
            return {...state, forecastLoading: false, forecastError: null, forecast: action.payload}
        case WEATHER_GET_FAIL:
            return {...state, weatherError: action.payload}
        case WEATHER_FORECAST_FAIL:
            return {...state, forecastError: action.payload}
        case LOCATION_SET:
            return {...state, locationDetails: action.payload}
        case AUTOCOMPLETE_SUCCESS:
            return {...state, autocomplete: action.payload}
        case AUTOCOMPLETE_GET:
            return {...state, autocomplete: []}
        case AUTOCOMPLETE_FAIL:
            return {...state, autocompleteError: action.payload}
        case SCREEN_NAME_SET:
            return {...state, screenName: action.payload}
        case LOCATION_SUCCESS:
            return {...state, locationDetails: action.payload}
        default:
            return state;
    }
}

export { utilsReducer }