import React from 'react';
import Row from './components/Row';
import './App.css';
import request from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top-Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Documantaries" fetchUrl={request.fetchDocumentaries} />

    </div>
  );
}

export default App;
