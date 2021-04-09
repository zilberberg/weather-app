import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../actions/favoritesActions';
import { getAutoComplete, setLocation, getCurrentWeather, getForecast } from '../actions/utilsActions';
import { TLV_KEY } from '../config';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Icon from '@material-ui/core/Icon';
import Moment from 'react-moment';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CircularProgress from '@material-ui/core/CircularProgress';

function HomeScreen (props) {
    const utils = useSelector(state => state.utils);
    const { locationDetails, currentWeather, forecast, autocomplete, weatherLoading, forecastLoading, weatherError, forecastError } = utils;
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    useEffect(() => {
        // dispatch(getCurrentWeather(TLV_KEY));
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
      
        prevOpen.current = open;
    }, [open])

    const addFavoriteHandler = () => {
        dispatch(addFavorite(locationDetails.Key, locationDetails));
    }

    const searchLocations = (value) => {
        if (value.length > 0) {
            dispatch(getAutoComplete(value));
        }
        handleToggle(value.length > 0);
    }

    const handleClose = (event) => {
        // if (anchorRef.current && anchorRef.current.contains(event.target)) {
        //   return;
        // }
    
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    const handleToggle = (bool) => {
        setOpen(bool);
    };

    const selectLocation = (location) => {
        dispatch(getCurrentWeather(location.Key));
        dispatch(getForecast(location.Key));
        dispatch(setLocation(location));
        handleClose();
    }
      
    return (
        <div className="home-root">
            <div className="searchHeader">
                <input ref={anchorRef} className="searchBox" type="text" placeholder="Search location" onChange={(e) => searchLocations(e.target.value)}/>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                {
                                    autocomplete.map((location, index) => {
                                        return (
                                            <MenuItem key={index} onClick={() => selectLocation(location)}>{location.LocalizedName}</MenuItem>
                                        )
                                    })
                                }
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>

            {
                weatherLoading ? <div className="spinner"><CircularProgress /></div> :                
                currentWeather && 
                <div className="currentWeather">
                    <div className="location-container">
                        <img className="cast-image" src={'/images/1.png'}/>

                        <div className="locationDetails">
                            <div className="cast-date">{locationDetails.LocalizedName}</div>
                            <div className="cast-temperature">{currentWeather.WeatherText}</div>
                            <div className="cast-iconphrase">{currentWeather.Temperature.Metric.Value}{currentWeather.Temperature.Metric.Unit}</div>
                        </div>
                    </div>
                    

                    <div className="clickable" onClick={addFavoriteHandler}>
                        <Icon><FavoriteBorder style={{color: 'red', fontSize: '6rem'}}/></Icon>
                    </div>
                </div>
            }

            {
                forecastLoading ? <div className="spinner"><CircularProgress /></div> :    
                forecast.length > 0 &&
                <div className="forecast">
                    {forecast.map((cast, index) => {
                        return (
                            <li key={index}>
                                <div className="cast">
                                    <Moment format="DD/MM" date={cast.Date} />
                                    <div className="cast-weather">
                                        <div>
                                        {cast.Temperature.Minimum.Value} - {cast.Temperature.Maximum.Value}
                                        </div>
                                        <div>
                                            Day
                                            <div className="cast-iconphrase">{cast.Day.IconPhrase}</div>
                                        </div>
                                        <div>
                                            Night
                                            <div className="cast-iconphrase">{cast.Night.IconPhrase}</div>
                                        </div>
                                    </div>                                        
                                    
                                </div>
                            </li>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default HomeScreen;