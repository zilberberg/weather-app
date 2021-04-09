import { AUTOCOMPLETE_GET, 
    AUTOCOMPLETE_SUCCESS, 
    AUTOCOMPLETE_FAIL, 
    WEATHER_FORECAST, 
    WEATHER_GET, 
    WEATHER_GET_SUCCESS, 
    WEATHER_GET_FAIL, 
    WEATHER_FORECAST_SUCCESS, 
    WEATHER_FORECAST_FAIL, 
    LOCATION_SET } from '../constants/utilsConstants';
import { ACCUWEATHER_BASE_URL, API_KEY, HEROKU_CORS_PROXY } from '../config';

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

    fetch(HEROKU_CORS_PROXY + ACCUWEATHER_BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + value, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: AUTOCOMPLETE_SUCCESS, payload: myJson});
    })
    .catch((error) => dispatch({type: AUTOCOMPLETE_FAIL, payload: error.message}))
}

const getCurrentWeather = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_GET});

    fetch(HEROKU_CORS_PROXY + ACCUWEATHER_BASE_URL + '/currentconditions/v1/' + locationKey + "?apikey=" + API_KEY, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: WEATHER_GET_SUCCESS, payload: myJson[0]});
    })
    .catch((error) => dispatch({type: WEATHER_GET_FAIL, payload: error.message}))
}

const getForecast = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_FORECAST});

    fetch(HEROKU_CORS_PROXY + ACCUWEATHER_BASE_URL + '/forecasts/v1/daily/5day/' + locationKey + "?apikey=" + API_KEY + '&metric=true', {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: WEATHER_FORECAST_SUCCESS, payload: myJson.DailyForecasts});
    })
    .catch((error) => dispatch({type: WEATHER_FORECAST_FAIL, payload: error.message}))
}

const setLocation = (locationDetails) => (dispatch) => {
    dispatch({type: LOCATION_SET, payload: locationDetails})
}


export { getAutoComplete, getCurrentWeather, getForecast, setLocation }