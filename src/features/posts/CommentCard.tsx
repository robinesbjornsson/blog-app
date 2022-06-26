import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const CommentCard = ({ comment }: any) => {
  return (
    <article>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      <p className='postCredit'>
      </p>
    </article>
  )
}

export default CommentCard
