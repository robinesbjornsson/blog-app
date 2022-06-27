import './SinglePostPage.css'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import CommentCard from './CommentCard'
import PostAuthor from '../PostList/PostAuthor'
import { getCommentsById, getPostById } from '../postSlice'

const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useAppSelector((state) => getPostById(state, Number(postId)))

  const comments = useAppSelector((state) =>
    getCommentsById(state, Number(postId))
  )

  if (comments) {
    console.log(comments)
  }
  if (!post) {
    return (
      <section>
        <h2>Posts not found!</h2>
      </section>
    )
  }

  let renderedComments
  if (comments) {
    renderedComments = comments.map((comment, index) => (
      <CommentCard key={index} comment={comment} />
    ))
  }
  return (
    <>
      <div className='single-post-container'>
        <div className='single-post'>
          <h2>
            {post.title.replace(/^./, (str: string) => str.toUpperCase())}
          </h2>
          <p>{post.body}</p>
          <p>
            <PostAuthor userId={post.userId} />
          </p>
          <Link to={`/post/edit/${post.id}`}>
            {' '}
            <button> Edit Post</button>{' '}
          </Link>
        </div>

        <div className='comments-container'>{renderedComments}</div>
      </div>
    </>
  )
}

export default SinglePostPage
