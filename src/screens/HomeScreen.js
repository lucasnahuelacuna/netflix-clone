import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'
import Banner from '../Banner'

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Commedy Movies" fetchUrl={requests.fetchCommedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen
