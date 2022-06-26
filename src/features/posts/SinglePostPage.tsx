import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import PostAuthor from './PostAuthor'
import { getPostById } from './postSlice'

type Props = {}

const SinglePostPage = (props: Props) => {
  const { postId } = useParams()

  const post = useAppSelector((state) => getPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Posts not found!</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <p>
          <Link to={`/post/edit/${post.id}`}>Edit Post </Link>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  )
}

export default SinglePostPage
