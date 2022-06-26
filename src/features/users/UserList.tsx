import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { getUsers } from './userSlice'

const UserList = () => {
  const users = useAppSelector(getUsers)
  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2>Users</h2>
      <ol>{renderedUsers}</ol>
    </section>
  )
}

export default UserList
