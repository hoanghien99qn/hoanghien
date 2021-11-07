import React, { useState, createContext } from 'react'

export const FavoriteContext = createContext()

function FavoriteContextProvider({ children }) {
    const FAVORITE_KEY = "favoriteKey"
    const initFavorite = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || []

    const [favorites, setFavorites] = useState(initFavorite)

    const toggleFavorite = (id) => {
        let check = favorites.find(favorite => favorite === id)
        if (check !== undefined) {
            setFavorites(favorites.filter(favorite => favorite !== id))
        } else {
            setFavorites([...favorites, id])
        }
    }

    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites))
    const FavoriteContextData = {
        favorites,
        toggleFavorite
    }

    return (
        <FavoriteContext.Provider value={FavoriteContextData}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContextProvider