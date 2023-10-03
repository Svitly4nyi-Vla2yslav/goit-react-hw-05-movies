import HomeNav from 'components/HomeNav/HomeNav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <HomeNav/>
            <Outlet />

        </>


    )
}

export default Layout