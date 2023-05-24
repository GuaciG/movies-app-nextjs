import Image from 'next/image'
import Link from 'next/link'

const fetchSinglePost = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`, {
    cache: 'no-store'
  }).then(res => res.json())
}

export default async function Post({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article className='user-post'>
      <Link href={'/blog'} className='arrow'>
        <p>&larr; Go back</p>
      </Link>
      <div className='user-post-image'>
        <Image
          src='https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/newsletter/002.jpg?1490369108'
          alt=''
          fill
        />
      </div>
      <h2>{post.body}</h2>
      <Link href={`/blog/${id}/comments`}>See comments about post {id}</Link>
      {children}
    </article>
  )
}
