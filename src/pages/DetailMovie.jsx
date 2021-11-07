import React from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading'
// import SingleMovie from '../components/SingleMovie';
import { Link, useParams } from 'react-router-dom';

const SingleMovie = React.lazy(() => import('../components/SingleMovie'))



function DetailMovie(props) {
    let { id } = useParams()

    return (
        <div className="content">
            <div className="grid">
                <Link to="/home" className="setLink-width">
                    <div className="backBtn">
                        <i className="fas fa-arrow-circle-left" />
                    </div>
                </Link>
                {/* Detail Movie */}
                <React.Suspense fallback={<Loading />}>
                    <SingleMovie id={id} />
                </React.Suspense>
                <Footer />
            </div>
        </div>

    );
}

export default DetailMovie;