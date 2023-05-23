import Image from 'next/image'

const fetchComments = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: 'no-store'
  }).then(res => res.json())
}

export default async function Post({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul className='user-comments'>
      {comments.map(comment => (
        <li className='user-comment' key={comment.id}>
          <Image
            src={`https://i.pravatar.cc/150?u=${comment.id}`}
            alt={comment.name}
            style={{ marginTop: '10', borderRadius: '50%' }}
            width={60}
            height={60}
          />
          <div>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
