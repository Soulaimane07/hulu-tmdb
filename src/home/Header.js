import axios from "../axios"
import { useEffect, useState } from "react"
import requests from "../Requests"

function Header() {

    const [movie, setMovie] = useState([])

    useEffect(()=> {
      async function fetshData(){
        const request = await axios.get(requests.fetchTrending)
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length -1)
          ]
        )
        return request
      }

      fetshData()
    }, [])


    function truncate(string, n){
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

  return (
    <>
    <div className="header" style={{backgroundImage:(`url('https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}')`)}} >
        <div className="bg">
          
        </div>
        <div className="content">
            <div>
              <h1> {movie?.title || movie?.name || movie?.original_name} </h1>
              <p> {truncate(movie?.overview, 150)} </p>
            </div>
        </div>
    </div>
    <div className="gradirent" />
    </>
  )
}

export default Header