import { AUTOCOMPLETE_GET, 
    AUTOCOMPLETE_SUCCESS, 
    AUTOCOMPLETE_FAIL, 
    WEATHER_FORECAST, 
    WEATHER_GET, 
    WEATHER_GET_SUCCESS, 
    WEATHER_GET_FAIL, 
    WEATHER_FORECAST_SUCCESS, 
    WEATHER_FORECAST_FAIL } from '../constants/utilsConstants';
import { ACCUWEATHER_BASE_URL, API_KEY } from '../config';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000/',
    "Access-Control-Allow-Methods": "POST, GET",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    'Access-Control-Allow-Credentials': 'true'
}

const getAutoComplete = (value) => async (dispatch) => {
    dispatch({type: AUTOCOMPLETE_GET});
    try {
        let response = await fetch(ACCUWEATHER_BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + value, {  
            method: 'GET',  
            headers: headers,
        });

        if (response.status !== 200) {
            throw Error(response.status);
        }
        dispatch({type: AUTOCOMPLETE_SUCCESS, payload: response});
    } catch (error) {
        dispatch({type: AUTOCOMPLETE_FAIL, payload: error.message});
    }
}

const getCurrentWeather = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_GET});

    try {
        let response = await fetch(ACCUWEATHER_BASE_URL + '/currentconditions/v1/' + locationKey + "?apikey=" + API_KEY, {  
            method: 'GET',  
            headers: headers,
        });

        if (response.status !== 200) {
            throw Error(response.status);
        }
        dispatch({type: WEATHER_GET_SUCCESS, payload: response});
    } catch (error) {
        dispatch({type: WEATHER_GET_FAIL, payload: error.message});
    }
}

const getForecast = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_FORECAST});

    try {
        let response = await fetch(ACCUWEATHER_BASE_URL + '/forecasts/v1/daily/5day/' + locationKey + "?apikey=" + API_KEY + '&metric=true', {  
            method: 'GET',  
            headers: headers,
        });

        if (response.status !== 200) {
            throw Error(response.status);
        }
        dispatch({type: WEATHER_FORECAST_SUCCESS, payload: response});
    } catch (error) {
        dispatch({type: WEATHER_FORECAST_FAIL, payload: error.message});
    }
}


export { getAutoComplete, getCurrentWeather, getForecast }