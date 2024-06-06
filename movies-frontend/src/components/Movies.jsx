import React from 'react'
import { useAllMovies } from '../hooks/useAllMovies'

export const Movies = () => {
  const allMovies = useAllMovies()
  console.log(allMovies)
  return (
    <section className="allMovies-container">
      <h2 className="allMovies-title">All Movies</h2>
      {allMovies && <ul className="allMovies-list">
        {allMovies.movies.map((movie) => (
          <li key={movie.imdbId} className="allMovies-item">
            <img src={movie.poster} alt={movie.title} className="allMovies-image" />
            <h3 className="allMovies-name">{movie.title}</h3>
            <p className="allMovies-description">{movie.releaseDate}</p>
          </li>
        ))}
      </ul>}
    </section>
  )
}