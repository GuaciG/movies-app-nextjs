import { useState } from 'react'
import withResults from '../../mocks/with-results.json'
import withoutResults from '../../mocks/without-results.json'

export function useMovies({ search, idmovie }) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const [API_KEY] = useState(process.env.NEXT_PUBLIC_API_KEY_MOVIES)

  const getMovies = () => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(withoutResults)
    }
  }

  const fetchSingleMovie = idmovie => {
    return fetch(`https://omdbapi.com/?apikey=${API_KEY}&i=${idmovie}`, {
      cache: 'no-store'
    }).then(res => res.json())
  }

  return { movies: mappedMovies, getMovies, fetchSingleMovie }
}
