import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'


function RootLayout() {
    return (
        <div style={{ margin: '0 auto' }}>
            <Outlet />
        </div>
    )
}

export default RootLayout