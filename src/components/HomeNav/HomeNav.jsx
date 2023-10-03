import React from 'react'
import './HomeNav.css'
import { NavLink } from 'react-router-dom'
const HomeNav = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="container-nav">
                <NavLink className="title-nav" to='/home'>Home</NavLink>
                <NavLink className="title-nav" to='search'>Search🔍</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default HomeNav