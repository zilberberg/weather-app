import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { removeFavorite } from '../actions/favoritesActions';
import { initFromFavorite } from '../actions/utilsActions';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        borderRadius: 90,
      '& > *': {
        margin: theme.spacing(0),
        padding: 0,
        minWidth: '3rem',
        height: '3rem',
        position: 'absolute',
        right: '2rem',
        borderRadius: 90,
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'inherit',
        '&:hover': {
            
        }
      },
    },
}));

function FavoritesScreen (props) {
    const favorites = useSelector(state => state.favorites);
    const { items } = favorites;
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        return () => {
            //
        };
    }, [])

    const deleteFavorite = (favoriteKey) => {
        dispatch(removeFavorite(favoriteKey));
    }

    const selectFavorite = (item) => {
        let itemDetails = {...item};
        delete itemDetails.currentWeather;
        delete itemDetails.forecast;
        dispatch(initFromFavorite(itemDetails, item.currentWeather, item.forecast));
    }

    return (
        <div className={"favorites-root"}>
            <div className="tiles">
                {Object.keys(items).map((key, index) => {
                    return (
                        
                        <li key={index}> 
                            <Link key={index} style={{textDecoration: 'none'}} to="/" onClick={() => {selectFavorite(items[key])}}>          
                                <div className={classes.root}>
                                    <Button variant="contained" onClick={() => deleteFavorite(key)}>
                                        X
                                    </Button>
                                </div>                  
                                <div className="cast">
                                    {items[key].LocalizedName}
                                    <div>{items[key].currentWeather.WeatherText}</div>
                                    <div>{items[key].currentWeather.Temperature.Metric.Value} C</div>
                                </div>
                            </Link>   
                        </li>
                    )
                })}
            </div>

        </div>
    )
}
export default FavoritesScreen;