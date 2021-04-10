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
    color: 'red',
    padding: '0',
    '&:hover': {
      
    },
  }
}));

function App(props) {
  const [currentScreen, setScreen] = React.useState('home');
  const classes = useStyles();

  const [theme, setTheme] = React.useState('Dark');

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
        //
    };
  }, [])

  const handleChange = (event, value) => {
    setScreen(value);

  };

  const handleThemeChange = () => {
    if (theme == "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  }

  const foo = () => {
    dispatch(geoFindMe());
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className={"grid-container " + (theme == "Dark" ? "darkTheme" : "lightTheme")}>
          <header className="header">
            <div className="brand">
              <Link to="/">Weather app</Link>
            </div>
            
            <div className="custom-button">
              <Button className={classes.button} onClick={foo}>Geo Location</Button>
            </div>

            <div>
              <FormControlLabel
                control={
                  <Switch
                    onChange={handleThemeChange}
                    checked={theme == "Dark"}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={theme}
              />
            </div>

            <div className="header-links">
              
              <div className={classes.root}>
                <ToggleButtonGroup
                  value={currentScreen}
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
      
    </BrowserRouter>
  );
}

export default App;
