import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  let users = useSelector(state => state.users.value)

  return (
    <>

      <header className="header__big">
        <div className="container">
          <div className="header">
            <nav className='header__navbar'>
              <Link to={"/"}><h2 className='header__navbar__logo'>Redux Toolkit</h2></Link>
              <ul className='header__navbar__content'>
                <li className='header__navbar__content__item'><NavLink className='header__navbar__content__item' to={"/"}><span>Home</span></NavLink></li>
                <li className='header__navbar__content__item'><NavLink className='header__navbar__content__item' to={"/userregister"}><span>Create User</span></NavLink></li>
                <div className='header__navbar__content__item__gr'>
                  <li className='header__navbar__content__item'><NavLink className='header__navbar__content__item' to={"/allregister"}><span>All User</span></NavLink></li>
                  <p className='header__navbar__content__item__count'>{users.length}</p>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header