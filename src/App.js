import './assets/grid.css'
import './assets/style.css'
import './assets/responsive.css'

import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import Category from './components/Category';
import ScrollToTop from './ScrollToTop'
import FavoriteContextProvider from './context/FavoriteContext';
import Routes from './config/Routes'



function App() {
  return (
    <Router>
      <ScrollToTop />
      <FavoriteContextProvider>
        <div className="app">
          <Category />
          <Switch>
            <Redirect exact from="/movie-trailer" to="/home" />
            <Routes />
          </Switch>
        </div>
      </FavoriteContextProvider>


    </Router>
  );
}

export default App;
