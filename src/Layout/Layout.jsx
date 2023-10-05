
import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css';
const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-nav">
                    <NavLink className="title-nav" to='/'>Home</NavLink>
                    <NavLink className="title-nav" to='movies'>Search  🔎</NavLink>
                </div>
            </nav>
            <Suspense fallback={<div> Loading...⏳</div>} >
                <Outlet />
            </Suspense>
        </>
    )
}

export default Layout