import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../actions/utilsActions';
import { addFavorite } from '../actions/favoritesActions';
import { TLV_KEY } from '../config';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Icon from '@material-ui/core/Icon';
import Moment from 'react-moment';

function HomeScreen (props) {
    const utils = useSelector(state => state.utils);
    const { locationDetails, currentWeather, forecast } = utils;
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCurrentWeather(TLV_KEY));
        return () => {
            //
        };
    }, [])

    const addFavoriteHandler = () => {
        dispatch(addFavorite(locationDetails.Key, locationDetails));
    }
    return (
        <>
            <div>
                {
                    currentWeather && 
                    <div className="currentWeather">
                        <div className="locationDetails">
                            <div className="cast-date">{locationDetails.LocalizedName}</div>
                            <div className="cast-temperature">{currentWeather.WeatherText}</div>
                            <div className="cast-iconphrase">{currentWeather.Temperature.Metric.Value}{currentWeather.Temperature.Metric.Unit}</div>
                        </div>

                        <div className="clickable" onClick={addFavoriteHandler}>
                            <Icon><FavoriteBorder style={{color: 'red', fontSize: '10rem'}}/></Icon>
                        </div>
                    </div>
                }

                {
                    forecast.length > 0 &&
                    <div className="forecast">
                        {forecast.map((cast, index) => {
                            return (
                                <li key={index}>
                                    <div className="cast">
                                        {/* <div className="cast-date">{cast.Date}</div> */}
                                        <Moment format="DD" date={cast.Date} />
                                        <div className="cast-weather">
                                            <div>
                                                Day
                                                <div className="cast-temperature">{cast.Temperature.Minimum.Value}</div>
                                                <div className="cast-iconphrase">{cast.Day.IconPhrase}</div>
                                            </div>
                                            <div>
                                                Night
                                                <div className="cast-temperature">{cast.Temperature.Minimum.Value}</div>
                                                <div className="cast-iconphrase">{cast.Day.IconPhrase}</div>
                                            </div>
                                        </div>                                        
                                        
                                    </div>
                                </li>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}
export default HomeScreen;