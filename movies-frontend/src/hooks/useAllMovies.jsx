import { useState, useEffect } from 'react';

function useAllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/movies')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  return { movies, loading };
}

export { useAllMovies };