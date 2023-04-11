import React from 'react'

function NavBar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Nutri Diary</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='bg-secondary text-secondary-content rounded-lg mr-5'><a>Login</a></li>
          <li className='bg-secondary text-secondary-content rounded-lg mr-3'><a>Sign Up</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar