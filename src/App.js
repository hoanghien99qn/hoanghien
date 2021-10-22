import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Category from './components/Category';
import Loading from '../src/components/Loading'
import ScrollToTop from './ScrollToTop'

import './assets/grid.css'
import './assets/style.css'
import './assets/responsive.css'
import FavoriteContextProvider from './context/FavoriteContext';
const DetailMovie = React.lazy(() => import('./pages/DetailMovie'))
const Home = React.lazy(() => import('./pages/Home'))


function App() {
  return (
    <Router>
      <ScrollToTop />
      <FavoriteContextProvider>
        <div className="app">
          <Category />
          <Switch>
            <Redirect exact from="/movie-trailer" to="/" />
            <Route
              path="/"
              exact
              render={props => (
                <React.Suspense fallback={<Loading />}>
                  <Home {...props} />
                </React.Suspense>
              )}
            />
            <Route
              path="/movie/:id"
              exact
              render={props => (
                <React.Suspense fallback={<Loading />}>
                  <DetailMovie {...props} />
                </React.Suspense>
              )}
            />
          </Switch>
        </div>
      </FavoriteContextProvider>


    </Router>
  );
}

export default App;
