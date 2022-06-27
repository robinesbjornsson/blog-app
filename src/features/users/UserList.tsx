import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { getUsers } from './userSlice'

const UserList = () => {
  const users = useAppSelector(getUsers)
  const renderedUsers = users.map((user) => user.name)

  const sortedUsers = renderedUsers.sort(function (obj1, obj2) {
    var s1 = obj1.split(' ')[1][1],
      s2 = obj2.split(' ')[1][1]
    return (s1 || obj1).localeCompare(s2 || obj2)
  })
  //   <li key={user.id}>
   //  <Link to={`/user/${user.id}`}>{user.name}</Link>
  // </li>

  return (
    <section>
      <h2>Users</h2>
      {sortedUsers}
    </section>
  )
}

export default UserList
