import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom'
import apiConfig from '../api/apiConfig'


function Products(props) {
    const { list } = props

    return (
        <div className="row list">
            {list && list.map(movie => {
                if (movie.poster_path || movie.backdrop_path) {
                    return (<div key={movie.id} className="col l-2-4 m-4 c-6">
                        <Link to={`/detail/${movie.id}`}>
                            <div className="product">
                                <div className="product__head">
                                    <img src={apiConfig.w220Image(movie.poster_path || movie.backdrop_path)} alt={movie.title} className="product__img" />
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

                    </div>)
                } else {
                    return undefined
                }
            })}
        </div>
    )

}

export default Products;