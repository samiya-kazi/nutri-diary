import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link to="/login" className="btn btn-ghost normal-case text-xl">Nutri Diary</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='bg-secondary text-secondary-content rounded-lg mr-5'>
            <Link to="/login">Login</Link>
          </li>
          <li className='bg-secondary text-secondary-content rounded-lg mr-3'>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar