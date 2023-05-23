import Image from 'next/image'
import styles from '../../styles/ListOfMovies.module.css'

export function ListOfMovies({ movies }) {
  return (
    <ul className={styles.movies}>
      {movies?.map(movie => (
        <li className={styles.movie} key={movie.id}>
          <div className={styles.heading}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <Image
            src={movie.poster}
            alt={movie.title}
            width={220}
            height={310}
          />
        </li>
      ))}
    </ul>
  )
}

export function NoMoviesResults() {
  return <p>No results found</p>
}

export function ResultMovies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
