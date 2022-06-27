import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleOn, toggleOff } from '../features/users/SidebarSlice'
import '../index.css'
const Header = () => {
  const dispatch = useAppDispatch()
  const sideBarActive = useAppSelector((state) => state.sideBarActive.active)

  function toggleSwitchHandler() {
    if (sideBarActive == true) {
      dispatch(toggleOff())
    } else {
      dispatch(toggleOn())
    }
  }
  return (
    <header className='header'>
      <h1> Redux Blog </h1>
      <nav>
        <ul>
          <li>
            <button onClick={toggleSwitchHandler} className='show-users-button'>
              Show Users
            </button>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='post'>Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
