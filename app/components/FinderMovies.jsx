'use client'

import styles from '../../styles/FinderMovies.module.css'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import { ListOfMovies } from './ListOfMovies'

export default function FinderMovies() {
  const { search, updateSearch, error } = useSearch()
  const { movies: mappedMovies, getMovies } = useMovies({ search })

  const handleSubmit = event => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = event => {
    updateSearch(event.target.value)
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Finder Movies App Next 13</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Search your movie here...'
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main className={styles.main}>
        <ListOfMovies movies={mappedMovies} />
      </main>
    </div>
  )
}
