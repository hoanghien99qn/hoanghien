import axiosClient from './axiosClient'

export const movieType = {
    popular: 'popular',
    top_rated: 'top_rated',
    upcoming: 'upcoming'
}


const tmdbApi = {
    getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type]
        return axiosClient.get(url, params)
    },
    getVideos: (id) => {
        const url = 'movie/' + id + '/videos'
        return axiosClient.get(url, { params: {} })
    },
    getRecommendations: (id) => {
        const url = 'movie/' + id + '/recommendations'
        return axiosClient.get(url, { params: {} })
    },
    detail: (id, params) => {
        const url = 'movie/' + id
        return axiosClient.get(url, params)
    },
    search: (params) => {
        const url = 'search/movie/'
        return axiosClient.get(url, params)
    }
}

export default tmdbApi