import Link from 'next/link'
import { LikeButton } from './LikeButton'
import styles from '../../styles/ListOfPost.module.css'
import Image from 'next/image'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  }).then(res => res.json())
}

export default async function ListOfPosts() {
  const blogPosts = await fetchPosts()

  return (
    <section className={styles.section}>
      {blogPosts?.slice(0, 8).map(post => (
        <article className={styles.article} key={post.id}>
          <Link
            className={styles.link}
            href='/blog/[id]'
            as={`/blog/${post.id}`}
          >
            <div className={styles.container}>
              <Image
                src='https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/newsletter/002.jpg?1490369108'
                alt=''
                fill
              />
            </div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}
