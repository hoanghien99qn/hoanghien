import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';


function Products(props) {
    const { genre } = props

    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1${genre ? "&with_genres=" + genre : ""}`;
    const IMG_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getList = async () => {
            try {
                const response = await fetch(API_URL)
                const responseJSON = await response.json()
                setList(responseJSON.results)
                setIsLoading(false)
            } catch (error) {
                console.log(error.massage)
            }
        }
        getList()
    }, [API_URL])
    // console.log(list)
    return (
        <div className="row list">
            {isLoading ? <Loading /> : list.map(movie => (
                <div key={movie.id} className="col l-2-4 m-4 c-6">
                    <Link to={`/movie/${movie.id}`}>
                        <div className="product">
                            <div className="product__head">
                                <img src={IMG_PATH + movie.poster_path} alt={movie.title} className="product__img" />
                                <div className="CircularProgressbar">
                                    <CircularProgressbar
                                        value={movie.vote_average}
                                        maxValue={10}
                                        text={movie.vote_average + '/10'}
                                        styles={{
                                            path: {
                                                stroke: `${movie.vote_average >= 7.5 ? '#21d07a' : movie.vote_average <= 5 ? '#ca2e2e' : '#c7ca2e'}`,
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#053752',
                                                strokeLinecap: 'round',
                                            },
                                            text: {
                                                fill: `${movie.vote_average >= 7.5 ? '#21d07a' : movie.vote_average <= 5 ? '#ca2e2e' : '#c7ca2e'}`,
                                                fontSize: '22px',
                                            },
                                            background: {
                                                fill: `${movie.vote_average >= 7.5 ? '#21d07a' : movie.vote_average <= 5 ? '#ca2e2e' : '#c7ca2e'}`
                                            }
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="product__title">
                                <p className="product__title-name">{movie.title}</p>
                                <p className="product__title-year">{movie.release_date}</p>
                            </div>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    )

}

export default Products;