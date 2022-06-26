import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostExcerpt = ({ post }: any) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className='postCredit'>
        <Link to={`post/${post.id}`}> View Post </Link>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  )
}

export default PostExcerpt
