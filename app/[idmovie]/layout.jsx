'use client'

import Image from 'next/image'
import { useMovies } from '../hooks/useMovies'

export default async function Movie({ params }) {
  const { idmovie } = params

  const {
    movies: mappedMovies,
    getMovies,
    fetchSingleMovie
  } = useMovies({ idmovie })
  const movie = await fetchSingleMovie(idmovie)

  return (
    <div className='movie-content'>
      <div className='movie-title'>
        <h1>{movie.Title}</h1>
      </div>
      <div className='main-content'>
        <div className='image-movie-content'>
          <Image src={movie.Poster} alt='' width={300} height={400} />
        </div>
        <div className='details-movie-content'>
          <p>
            <span>Released:</span> {movie.Released}
          </p>
          <p>
            <span>Runtime:</span> {movie.Runtime}
          </p>
          <p>
            <span>Genre:</span> {movie.Genre}
          </p>
          <p>
            <span>Director:</span> {movie.Director}
          </p>
          <p>
            <span>Actors:</span> {movie.Actors}
          </p>
          <p>
            <span>Language:</span> {movie.Language}
          </p>
          <p>
            <span>Country:</span> {movie.Country}
          </p>
          <p>
            <span>Plot:</span> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  )
}
