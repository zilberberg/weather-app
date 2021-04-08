import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function FavoritesScreen (props) {
    const favorites = useSelector(state => state.favorites);
    const { items } = favorites;
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, [])

    return (
        <div>
            {
                Object.keys(items).map((key) => {
                    return (
                        <div key={key}>
                            {items[key].LocalizedName}
                        </div>
                    )
                })
            }

        </div>
    )
}
export default FavoritesScreen;