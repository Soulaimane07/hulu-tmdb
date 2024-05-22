import requests from "../Requests"
import Row from "./Row"

function Body() {
  return (
    <div className="body">
        
        <Row title="Trending Now" fetshUrl={requests.fetchTrending} isLargeRow />
        <Row title="Top Rated" fetshUrl={requests.fetchTopRated} />
        <Row title="Netflix Originals" fetshUrl={requests.fetchNetflixOriginals} />
        <Row title="Action Movies" fetshUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetshUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetshUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetshUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetshUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default Body