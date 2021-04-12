import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios'
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import AddIcon from '@material-ui/icons/Add';
//import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
//import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
//import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <div key={movie.id} className="row__posterContainer">
                            <img
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                                src={`${base_url}${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`} 
                                alt={movie.name} 
                            />
                            {
                                !isLargeRow && 

                                <div className="row__posterTitle">
                                    <p>{movie.title ? movie.title : movie.name}</p>
                                </div>
                            }
                        </div>
                    ) 
                ))}
            </div>
        </div>
    )
}

export default Row
