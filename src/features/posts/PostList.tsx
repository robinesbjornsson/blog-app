import { useSelector } from 'react-redux'
import { AppDispatch } from '../../app/store'
import PostExcerpt from './PostExcerpt'
import CommentCard from './CommentCard'
import { getPosts, getPostsStatus, getPostsError, getComments } from './postSlice'
const PostList = () => {
  const posts = useSelector(getPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  let content
  if (postsStatus === 'loading') {
    content = <p> "Loading..." </p>
  } else if (postsStatus === 'succeeded') {
   content = posts
      .map((post, index) => <PostExcerpt key={index} post={post} />)
      .reverse()
     
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>
  }

  return <section>{content}</section>
}
export default PostList
