import axios from '../axios'
import React, { useEffect, useState } from 'react'

function Row({title, fetshUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(()=> {
        async function fetshData(){
            const request = await axios.get(fetshUrl);
            setMovies(request.data.results)
            return request
        }

        fetshData()
    }, [fetshUrl])

  return (
    <div>
        <h2> {title} </h2>
        <ul>
            {movies.map((movie,key) => (
                <li key={key} className={isLargeRow ? "large" : ""} >
                    <img alt={movie.poster_path} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Row