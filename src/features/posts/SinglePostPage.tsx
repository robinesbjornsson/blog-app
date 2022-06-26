import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import CommentCard from './CommentCard'
import PostAuthor from './PostAuthor'
import { getComments, getCommentsById, getPostById } from './postSlice'

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
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <p>
          <Link to={`/post/edit/${post.id}`}>Edit Post </Link>
          <PostAuthor userId={post.userId} />
        </p>
      </article>

      <article>{renderedComments}</article>
    </>
  )
}

export default SinglePostPage
