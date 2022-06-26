import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { getPosts } from '../posts/postSlice'
import { getUserById } from './userSlice'

const UserPage = () => {
  const { userId } = useParams()

  const user = useAppSelector((state) => getUserById(state, Number(userId)))

  const postsForUser = useAppSelector((state) => {
    const allPosts = getPosts(state)
    return allPosts.filter((post) => post.userId === Number(userId))
  })
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ))
  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage
