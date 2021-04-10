import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { geoFindMe } from './actions/utilsActions';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import { setScreen } from './actions/utilsActions';
 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      backgroundColor: 'white',
      color: 'white',
    },
  },
  button: {
    font: '1.6rem Helvetica',
    backgroundColor: '#fff',
    padding: '0',
    '&:hover': {
      
    },
  },
  toggle: {
    color: 'red'
  }
}));

function App(props) {
  const utils = useSelector(state => state.utils);
  const { screenName } = utils;

  const classes = useStyles();

  const [theme, setTheme] = React.useState('dark');

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
        //
    };
  }, [])

  const handleChange = (event, value) => {
    dispatch(setScreen(value));
  };

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const foo = () => {
    dispatch(geoFindMe());
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <ToastContainer />
      <div className={"grid-container"}>
          <header className="header">
            <div className="brand">
              <Link to="/">Weather app</Link>
            </div>
            
            <div className="custom-button">
              <Button className={classes.button} onClick={foo}>Geo Location</Button>
            </div>

            <div className={"toggle"}>
              <FormControlLabel
                control={
                  <Switch
                    onChange={handleThemeChange}
                    checked={theme == "dark"}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={theme}
                className={classes.toggle}
              />
            </div>

            <div className="header-links">
              
              <div className={classes.root}>
                <ToggleButtonGroup
                  value={screenName}
                  exclusive
                  onChange={handleChange}
                  aria-label="text alignment"
                >
                  <ToggleButton className={classes.button} value="home"  aria-label="left aligned">
                    <Link to="/" >Home</Link>
                  </ToggleButton>
                  <ToggleButton className={classes.button} value="favorites"  aria-label="centered">
                    <Link to="/favorites">Favorites</Link>
                  </ToggleButton>

                </ToggleButtonGroup>
              </div>
            </div>
          </header>
          
          <main className="main">
              <div className={"content"}>

                <Route path="/" exact={true} component={HomeScreen}/>
                <Route path="/favorites" exact={true} component={FavoritesScreen}/>

              </div>              
          </main>
      </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
