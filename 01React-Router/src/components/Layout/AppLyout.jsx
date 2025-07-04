import React from 'react'
import { Header } from './Header'
import { Footer } from './footer'
import { Outlet } from 'react-router'
export default function AppLyout() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
