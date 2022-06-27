import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className='App'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
