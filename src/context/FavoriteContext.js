import React, { useState, createContext } from 'react'

export const FavoriteContext = createContext()

function FavoriteContextProvider({ children }) {

    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (id) => {
        let check = favorites.find(favorite => favorite === id)
        if (check !== undefined) {
            setFavorites(favorites.filter(favorite => favorite !== id))
        } else {
            setFavorites([...favorites, id])
        }
        // console.log(favorites)
    }

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