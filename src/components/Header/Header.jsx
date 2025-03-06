import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className='bg-pink-950 flex flex-wrap justify-around m-1 mt-0 p-1 rounded-lg'>
            <div className='text-slate-300'>
            <NavLink to="/">Home</NavLink>
            </div>
            <div>
            <NavLink to="/Register">Create Account</NavLink>
            </div>
            <div>
            <NavLink to="/Signin">Login</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Header