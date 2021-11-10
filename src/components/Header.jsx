import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

function Header(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()

    useEffect(() => {
        setSearchTerm(props.query ? props.query : '')
    }, [props.query])

    const handleSubmit = e => {
        e.preventDefault()
        let a = ""
        if (searchTerm.trim().length > 0) {
            a = searchTerm.replace(/\s/g, '+')
            history.push(`/search/${a}`)
        }
    }

    return (
        <div className="header">
            <form className="search" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="search__input" className="search__label">
                    <i className="fas fa-search" />
                </label>
                <input
                    type="text"
                    className="search__input"
                    id="search__input"
                    placeholder="Search movies, hit album"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </form>
            <div className="account">
                <i className="far fa-user account__icon" />
                <div className="account__option">
                    <ul className="account__option-list">
                        <li className="account__option-item">
                            <a href="/home" className="account__option-link">
                                User
                            </a>
                        </li>
                        <li className="account__option-item">
                            <a href="/home" className="account__option-link">
                                Option
                            </a>
                        </li>
                        <li className="account__option-item">
                            <a href="/home" className="account__option-link">
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