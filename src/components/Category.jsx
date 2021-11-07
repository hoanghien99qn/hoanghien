import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Genres from '../config/Genres'
import { movieType } from '../api/tmdbApi'

function Category() {

    const [isGenres, setIsGenres] = useState(false)

    const toggleGenres = () => {
        setIsGenres(!isGenres)
    }

    return (
        <section className="category scroll ltr">
            <NavLink to="/home" className="link no-active">
                <div className="logo box">
                    <i className="fas fa-film logo__icon" />
                    <p className="logo__text">Hoang Hien</p>
                </div>
            </NavLink>

            <div className="control box">
                <ul className="control__list">
                    <li className="control__item">
                        <NavLink activeClassName="active" to="/favorites" className="control__link">
                            <i className="far fa-clock" />
                            Favorite Movies
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="user box">
                <ul className="user__list">
                    <li className="user__item">
                        <NavLink activeClassName="active" to={`/home/${movieType.popular}`} className="user__link"><i className="fas fa-tv"></i>Popular</NavLink>
                    </li>
                    <li className="user__item">
                        <NavLink activeClassName="active" to={`/home/${movieType.top_rated}`} className="user__link"><i className="far fa-clock"></i>Top Rated</NavLink>
                    </li>
                    <li className="user__item">
                        <NavLink activeClassName="active" to={`/home/${movieType.upcoming}`} className="user__link"><i className="far fa-clock"></i>Upcoming</NavLink>
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
                            <NavLink activeClassName="active" to={Genre} className="control__link">
                                <i className="far fa-clock" />
                                {Genre.name}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )

}

export default Category;