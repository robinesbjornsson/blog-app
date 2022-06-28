import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleOff, toggleOn } from '../features/users/SidebarSlice'
import { getUsers } from '../features/users/userSlice'

const Sidebar = () => {
  const users = useAppSelector(getUsers)
  const sideBarActive = useAppSelector((state) => state.sideBarActive.active)
  const renderedUsers = users.map((user) => user.name)
  const dispatch = useAppDispatch()

  function toggleSwitchHandler() {
    if (sideBarActive == true) {
       dispatch(toggleOff());
    } else {
       dispatch(toggleOn());
    }
 }

  const sortedUsers = renderedUsers.sort(function (name1, name2) {
    let string1 = name1.split(' ')[1][1],
      string2 = name2.split(' ')[1][1]
    return (string1 || name1).localeCompare(string2 || name2)
  })

  return (
    <div className={sideBarActive ? 'sidebar active' : 'sidebar'}>
       <div className='exit-button-container'>
            <button onClick={toggleSwitchHandler} className="exit-button"> X </button>
          </div> 
      <ul className='sidebar-user-names'>
     
        {sortedUsers.map((item, index) => {
          return (
            <li key={index}>
              <p className='user-name'> {item}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
