import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Loading from '../components/Loading';

import tmdbApi, { movieType } from '../api/tmdbApi';


function Home(props) {
    const genre = props.location.id

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [query, setQuery] = useState(undefined)

    // let API_URL = query !== "" ? `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&query=${query}` :
    //     `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}${genre ? "&with_genres=" + genre : ""}`;

    useEffect(() => {
        const getList = async () => {
            try {
                let response = null
                setIsLoading(true)
                if (query === undefined) {
                    const params = {
                        page: page,
                        with_genres: genre
                    }
                    response = await tmdbApi.getMovieList(movieType.popular, { params })
                } else {
                    const params = {
                        page: page,
                        with_genres: genre,
                        query: query,
                    }
                    response = await tmdbApi.search({ params })
                }
                setList(response.results)
                setTotalPages(response.total_pages)
                setIsLoading(false)
            } catch (error) {
                console.log(error.massage)
            }
        }
        getList()
    }, [genre, query, page])

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    const handleSearch = searchTerm => {
        if (searchTerm === '') return setQuery(undefined)
        setQuery(searchTerm)
    }

    return (
        <div className="content">
            <div className="grid">
                {/* Header */}
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <Header onSearch={handleSearch} />
                    </div>
                </div>
                {/* Product */}
                {isLoading ? <Loading /> : <Products list={list} />}
                {/* Pagination */}
                <Pagination page={page} onPageChange={handlePageChange} totalPages={totalPages} />
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;
