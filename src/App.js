import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

function App(props) {
  const [currentScreen, setScreen] = React.useState('home');

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
        //
    };
  }, [])

  const handleChange = (value) => {
    setScreen(value.split(currentScreen).pop());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="header">
            <div className="brand">
              <Link to="/" >Weather app</Link>
            </div>

            <div className="header-links">
            <ToggleButtonGroup value={currentScreen} onChange={(_, newValue) => handleChange(newValue)} aria-label="text formatting">
                <ToggleButton value="home" style={{backgroundColor: 'gray'}}>
                  Home
                </ToggleButton>
                <ToggleButton value="favorites" style={{backgroundColor: 'white'}}>
                  Favorites
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </header>

          <main className="main">
              <div className="content">

                <Route path="/" exact={true} component={HomeScreen}/>
                <Route path="/favorites" exact={true} component={FavoritesScreen}/>

              </div>              
          </main>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
