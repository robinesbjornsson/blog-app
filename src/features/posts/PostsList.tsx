import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
//import { selectAllposts } from './postsSlice'

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.post.value)


  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
