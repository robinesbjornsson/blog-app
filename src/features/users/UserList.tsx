import { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { getUsers } from './userSlice'

const UserList = () => {
  const users = useAppSelector(getUsers)
  const renderedUsers = users.map((user) => user.name)



  const sortedUsers = renderedUsers.sort(function (obj1, obj2) {
    let s1 = obj1.split(' ')[1][1],
      s2 = obj2.split(' ')[1][1]
    return (s1 || obj1).localeCompare(s2 || obj2)
  })

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
          </li>
          {sortedUsers.map((item, index) => {
            return (
              <li key={index} >
   
      
                  <span>{item}</span>
               
              </li>
            );
          })}
        </ul>
      </nav>
  </>
  )
}

export default UserList
