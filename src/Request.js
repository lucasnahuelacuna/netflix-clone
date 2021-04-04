const API_KEY = '130e10a86c18fd7834aa49c401ba95cf'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchCommedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests

/* genres list */
//https://api.themoviedb.org/3/genre/movie/list?api_key=130e10a86c18fd7834aa49c401ba95cf&language=en-US
