import React, { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
import Products from '../components/Products'
import tmdbApi from '../api/tmdbApi'
import Footer from '../components/Footer';

function Favorite() {
    const { favorites } = useContext(FavoriteContext)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    console.log(favorites)

    useEffect(() => {
        const getFavoriteList = async () => {
            const params = {}
            Promise.all(favorites.map(id => tmdbApi.detail(id, { params })))
                .then(results => {
                    setList(results)
                })
            setIsLoading(false)
        }
        getFavoriteList()
    }, [favorites])

    return (
        <div className="content">
            <div className="grid">
                <h2 className={`favorite-title ${favorites.length === 0 ? "no" : ""}`}>
                    {favorites.length === 0 ? "You dont have any favorite movies" : "Favorites List"}
                </h2>
                {isLoading ? undefined : <Products list={list} />}

                <Footer />

            </div>
        </div>
    );
}

export default Favorite;