'use client'
import styles from '../../styles/LikeButton.module.css'
import { useState } from 'react'

export function LikeButton({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <button className={styles.button} onClick={() => setLiked(!liked)}>
      {liked ? '🧡' : '🤍'}
    </button>
  )
}
