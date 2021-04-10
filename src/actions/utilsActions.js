import { AUTOCOMPLETE_GET, 
    AUTOCOMPLETE_SUCCESS, 
    AUTOCOMPLETE_FAIL, 
    WEATHER_FORECAST, 
    WEATHER_GET, 
    WEATHER_GET_SUCCESS, 
    WEATHER_GET_FAIL, 
    WEATHER_FORECAST_SUCCESS, 
    WEATHER_FORECAST_FAIL, 
    LOCATION_SET, 
    SCREEN_NAME_SET, 
    LOCATION_GET, 
    LOCATION_SUCCESS, 
    LOCATION_FAIL } from '../constants/utilsConstants';
import { ACCUWEATHER_BASE_URL, API_KEY } from '../config';
import { toast } from 'react-toastify';

const headers = {

}

const getAutoComplete = (value) => async (dispatch) => {
    dispatch({type: AUTOCOMPLETE_GET});

    fetch(ACCUWEATHER_BASE_URL + '/locations/v1/cities/autocomplete?apikey=' + API_KEY + '&q=' + value, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: AUTOCOMPLETE_SUCCESS, payload: myJson});
    })
    .catch((error) => {
        dispatch({type: AUTOCOMPLETE_FAIL, payload: error.message});
        toast(error.message);
    })
}

const getCurrentWeather = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_GET});

    fetch(ACCUWEATHER_BASE_URL + '/currentconditions/v1/' + locationKey + "?apikey=" + API_KEY, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: WEATHER_GET_SUCCESS, payload: myJson[0]});
    })
    .catch((error) => {
        dispatch({type: WEATHER_GET_FAIL, payload: error.message});
        toast(error.message);
    })
}

const getForecast = (locationKey) => async (dispatch) => {
    dispatch({type: WEATHER_FORECAST});

    fetch(ACCUWEATHER_BASE_URL + '/forecasts/v1/daily/5day/' + locationKey + "?apikey=" + API_KEY + '&metric=true', {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: WEATHER_FORECAST_SUCCESS, payload: myJson.DailyForecasts});
    })
    .catch((error) => {
        dispatch({type: WEATHER_FORECAST_FAIL, payload: error.message});
        toast(error.message);
    })
}

const getLocationViaKey = (locationKey) => async (dispatch) => {
    dispatch({type: LOCATION_GET});

    fetch(ACCUWEATHER_BASE_URL + '/locations/v1/' + locationKey + "?apikey=" + API_KEY, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch({type: LOCATION_SUCCESS, payload: myJson});
    })
    .catch((error) => {
        dispatch({type: LOCATION_FAIL, payload: error.message});
        toast(error.message);
    })
}

const setLocation = (locationDetails) => (dispatch) => {
    dispatch({type: LOCATION_SET, payload: locationDetails})
}

const getLocation = (lon, lat) => async (dispatch) => {

    fetch(ACCUWEATHER_BASE_URL + '/locations/v1/cities/geoposition/search' + "?apikey=" + API_KEY + '&q=' + lon + '%2C' + lat, {  
        method: 'GET',  
        headers: headers,
    }).then(function(response){
        return response.json();
      })
    .then(function(myJson) {
        dispatch(setLocation(myJson));
        dispatch(getCurrentWeather(myJson.Key));
        dispatch(getForecast(myJson.Key));

    })
    .catch((error) => {
        toast(error.message);
    })
}


const geoFindMe = () => (dispatch) => {
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        dispatch(getLocation(latitude, longitude));
    }
  
    function error() {
      toast('Unable to retrieve your location');
    }
  
    if(!navigator.geolocation) {
        toast('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}

const initFromFavorite = (location, weather, forecast) => (dispatch) => {
    dispatch({type: LOCATION_SET, payload: location});
    dispatch({type: WEATHER_GET_SUCCESS, payload: weather});
    dispatch({type: WEATHER_FORECAST_SUCCESS, payload: forecast});
}

const setScreen = (screenName) => (dispatch) => {
    dispatch({type: SCREEN_NAME_SET, payload: screenName})
}

export { getAutoComplete, getCurrentWeather, getForecast, setLocation, geoFindMe, initFromFavorite, setScreen, getLocationViaKey }