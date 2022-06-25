import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { selectAllposts, PostState } from './postsSlice'


const PostsList = () => {
  //const posts = useSelector((state: RootState) => state.posts.posts)
  const posts = useSelector(selectAllposts)
  console.log(posts)
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
