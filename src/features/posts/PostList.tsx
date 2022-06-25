import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postSlice'


const CustomerList = () => {

  const posts = useSelector(selectAllPosts)

  //const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = posts.map(post => (
      <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className="postCredit">
              <PostAuthor userId={post.userId} />
             
          </p>
      </article>
  ))

  return (
      <section>
          <h2>Posts</h2>
          {renderedPosts}
      </section>
  )
}
export default CustomerList
