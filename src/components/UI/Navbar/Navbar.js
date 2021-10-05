import { useContext } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/myButton';

const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const Exit = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

    return <div className='navbar'>
    <div className='navbar__links'>
      <button onClick={Exit}>Exit</button>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/posts'>posts</NavLink>
    </div>
  </div>

}


export default Navbar;