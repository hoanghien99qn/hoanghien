import React from 'react';

import Loading from '../components/Loading'
import { Route, Switch } from 'react-router-dom';
const DetailMovie = React.lazy(() => import('../pages/DetailMovie'))
const Home = React.lazy(() => import('../pages/Home'))
const Favorite = React.lazy(() => import('../pages/Favorite'))

const Routes = () => {
    return (
        <Switch>
            {/* Home */}
            <Route
                path="/home"
                render={props => (
                    <React.Suspense fallback={<Loading />}>
                        <Home {...props} />
                    </React.Suspense>
                )}
            />
            {/* search */}
            <Route
                path="/search/:query"
                render={props => (
                    <React.Suspense fallback={<Loading />}>
                        <Home {...props} />
                    </React.Suspense>
                )}
            />
            {/* Detail */}
            <Route
                path="/detail/:id"
                exact
                render={props => (
                    <React.Suspense fallback={<Loading />}>
                        <DetailMovie {...props} />
                    </React.Suspense>
                )}
            />
            {/* Favorites */}
            <Route
                path="/favorites"
                exact
                render={props => (
                    <React.Suspense fallback={<Loading />}>
                        <Favorite {...props} />
                    </React.Suspense>
                )}
            />
        </Switch>
    );
}

export default Routes;