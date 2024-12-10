import React from 'react'
import { ScrollProvider } from './ScrollContext'
import TopBar from './TopBar'
import NavBar from './NavBar'
import CollapseNavbar from './CollapseNavbar'
import HeaderCarousel from './HeaderCarousel'
import { CssBaseline } from '@mui/material'

const Header = () => {
    return (
        <>
            <ScrollProvider>
                <TopBar />
                <NavBar />

                <CollapseNavbar />
                <HeaderCarousel />
            </ScrollProvider>
        </>
    )
}

export default Header