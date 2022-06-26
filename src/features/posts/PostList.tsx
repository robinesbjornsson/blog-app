import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import PostExcerpt from './PostExcerpt'
import {
  fetchPosts,
  getPosts,
  getPostsStatus,
  getPostsError,
} from './postSlice'

const PostList = () => {
  const dispatch = useDispatch<AppDispatch>()

  const posts = useSelector(getPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

 

  let content; 
  if (postsStatus === 'loading') {
    content = <p> "Loading..." </p>
  } else if (postsStatus === 'succeeded') {
    content = posts.map((post, index) => <PostExcerpt key={index} post={post} />).reverse()
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>
  }



  return (
    <section>
      {content}
    </section>
  )
}
export default PostList
