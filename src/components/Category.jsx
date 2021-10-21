import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Genres from '../config/Genres'

function Category() {

    const [isGenres, setIsGenres] = useState(false)

    const toggleGenres = () => {
        setIsGenres(!isGenres)
    }

    return (
        <section className="category scroll ltr">
            <Link to="/" className="link">
                <div className="logo box">
                    <i className="fas fa-film logo__icon" />
                    <p className="logo__text">Hoang Hien</p>
                </div>
            </Link>

            <div className="control box">
                <ul className="control__list">
                    <li className="control__item">
                        <a href="true" className="control__link">
                            <i className="far fa-clock" />
                            Favorite Movies
                        </a>
                    </li>
                </ul>
            </div>
            <div className="user box">
                <ul className="user__list">
                    <li className="user__item">
                        <a href="true" className="user__link active"><i className="fas fa-tv"></i>Popular</a>
                    </li>
                    <li className="user__item">
                        <a href="true" className="user__link"><i className="far fa-clock"></i>Top Rated</a>
                    </li>
                    <li className="user__item">
                        <a href="true" className="user__link"><i className="far fa-clock"></i>Upcoming</a>
                    </li>
                </ul>
            </div>
            <div className="setting box">
                <div className="dropdown">
                    <p className="dropdown-para" onClick={toggleGenres}>Genres <i className="fas fa-caret-down"></i></p>
                </div>
                <ul className={`setting__list ${isGenres ? "activeGenres" : ""}`}>
                    {Genres.map(Genre => (
                        <li className="control__item" key={Genre.name}>
                            <Link to={Genre} className="control__link">
                                <i className="far fa-clock" />
                                {Genre.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )

}

export default Category;