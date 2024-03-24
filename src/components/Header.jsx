import React from 'react'

import logo1 from "../assets/2nd.png"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className='header bg-white h-[60px]'>
        
            <nav className="nav  flex justify-between ">
            <img src={logo1} alt=""  className='w-[10rem] h-[3rem] mt-[4px] ml-4'/>
            <Navbar />
            </nav>
    </header>
  )
}

export default Header
