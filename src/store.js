import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {favoritesReducer} from './reducers/favoritesReducer';
import { utilsReducer } from './reducers/utilsReducer';

const initialState = {  };
const reducer = combineReducers({
    favorites: favoritesReducer,
    utils: utilsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;