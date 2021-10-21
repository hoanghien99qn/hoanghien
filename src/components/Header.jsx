import React from 'react'

function Header() {

    return (
        <div className="header">
            <div className="search">
                <label htmlFor="search__input" className="search__label">
                    <i className="fas fa-search" />
                </label>
                <input
                    type="text"
                    className="search__input"
                    id="search__input"
                    placeholder="Search movies, hit album"
                />
            </div>
            <div className="account">
                <i className="far fa-user account__icon" />
                <div className="account__option">
                    <ul className="account__option-list">
                        <li className="account__option-item">
                            <a href="true" className="account__option-link">
                                User
                            </a>
                        </li>
                        <li className="account__option-item">
                            <a href="true" className="account__option-link">
                                Option
                            </a>
                        </li>
                        <li className="account__option-item">
                            <a href="true" className="account__option-link">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header;