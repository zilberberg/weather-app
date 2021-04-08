import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather } from '../actions/utilsActions';
import { TLV_KEY } from '../config';

function HomeScreen (props) {
    const utils = useSelector(state => state.utils);
    const { currentWeather, forecast } = utils;
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCurrentWeather(TLV_KEY));
        return () => {
            //
        };
    }, [])

    return (
        <>
            <div>
                {
                    currentWeather && 
                    <div>
                        {currentWeather.LocalObservationDateTime}
                    </div>
                }

                {
                    forecast.length > 0 &&
                    <div className="forecast">
                        {forecast.map((cast, index) => {
                            return (
                                <li key={index}>
                                    <div className="cast">
                                        <div className="product-date">{cast.Date}</div>
                                        <div className="product-temperature">{cast.Temperature.Minimum.Value}</div>
                                        <div className="product-iconphrase">{cast.Day.IconPhrase}</div>
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