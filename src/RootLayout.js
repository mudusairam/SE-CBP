import React from 'react'
import NavigationBar from './components/navbar/NavigationBar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <NavigationBar/>
        <div style={{minHeight:"85vH"}}>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout