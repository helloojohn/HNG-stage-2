import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_APP_TMDB_API_KEY; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(apiUrl)
      .then(response => {
        setMovies(response.data.results);
        // console.log(movies)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [movies]);

  // console.log(movies)

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;





