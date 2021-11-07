import React, { useState } from 'react'
import { useHistory } from 'react-router'

function Header(props) {
    const { onSearch } = props
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        let a = ""
        if (searchTerm.trim().length > 0) {
            a = searchTerm.replace(/\s/g, '+')
            history.push(`/search/query=${searchTerm}`);
            // console.log(history)
        }
        onSearch(a)
    }

    // const goToSearch = useCallback(
    //     () => {
    //         if (searchTerm.trim().length > 0) {
    //             history.push(`/search/${searchTerm}`);
    //         }
    //     },
    //     [searchTerm, history]
    // );

    // useEffect(() => {
    //     const enterEvent = (e) => {
    //         e.preventDefault();
    //         onSearch(searchTerm)
    //         if (e.keyCode === 13) {
    //             goToSearch();
    //         }
    //     }
    //     document.addEventListener('keyup', enterEvent);
    //     return () => {
    //         document.removeEventListener('keyup', enterEvent);
    //     };
    // }, [searchTerm, goToSearch]);

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