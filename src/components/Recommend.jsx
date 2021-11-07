import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Recommend.propTypes = {
    recommends: PropTypes.array,
};

Recommend.defaultProps = {
    recommends: [],
}

function Recommend(props) {
    const { recommends } = props
    const IMG_PATH = "https://www.themoviedb.org/t/p/w250_and_h141_face";
    // console.log(recommends)
    return (
        <div>
            <h3 className="recommend__title">Recommendations</h3>
            <div className="recommend scroll">
                {recommends && recommends.map(recommend => (
                    <div key={recommend.id} className="recommend__movie">
                        <div className="recommend__movie-banner">
                            <Link to={`/detail/${recommend.id}`}>
                                <img src={IMG_PATH + recommend.backdrop_path} alt={recommend.title} />
                            </Link>
                        </div>
                        <div className="recommend__movie-title">{recommend.title}</div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Recommend;