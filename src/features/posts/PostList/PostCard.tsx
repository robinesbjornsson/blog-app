import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostExcerpt = ({ post }: any) => {
  return (
    <Link to={`post/${post.id}`} className='post-card-action-area' >
    <div className='post-card'>
      <h2>{post.title.replace(/^./, (str: string) => str.toUpperCase())}</h2>
      <p className='post-credit'>

        <PostAuthor userId={post.userId} />
      </p>
    </div>
    </Link>
  )
}

export default PostExcerpt
