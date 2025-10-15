import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Menu/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout