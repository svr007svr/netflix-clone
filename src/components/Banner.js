import React, {useState, useEffect} from 'react';

import axios from '../axios';
import request from '../request';
import './banner.css';

function Banner () {
  const [movie, setMovie] = useState ([]);

  const banner = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  useEffect (() => {
    async function fetchData () {
      const req = await axios.get (request.fetchNetflixOriginals);

      setMovie (
        req.data.results[Math.floor (Math.random () * req.data.results.length)]
      );
    }
    fetchData ();
  }, []);

  //   function truncate (str, n) {
  //     return str.length > n ? str.substr (0, n - 1) + '...' : str;
  //   }

  return (
    <header className="banner" style={banner}>

      <div className="banner_content">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_des">
          {movie.overview}
        </h1>

      </div>
      <div className='button--fadeButtom'></div>
    </header>
  );
}

export default Banner;
