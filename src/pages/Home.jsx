import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Loading from '../components/Loading';


function Home(props) {
    const genre = props.location.id

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const API_URL =
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}${genre ? "&with_genres=" + genre : ""}`;

    useEffect(() => {
        const getList = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(API_URL)
                const responseJSON = await response.json()
                setList(responseJSON.results)
                setTotalPages(responseJSON.total_pages)
                setIsLoading(false)
            } catch (error) {
                console.log(error.massage)
            }
        }
        getList()
    }, [API_URL])

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    return (
        <div className="content">
            <div className="grid">
                {/* Header */}
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <Header />
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
