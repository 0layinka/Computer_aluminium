import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOPen ] = useState(false)

  const toggleFunc = () => {
    setIsOPen(!isOpen)
  }
  return (
    <header className='fixed pt-2 md:pt-8 px-2 z-10' style={{ width: '100%' }}>
        <header className='bg-fixed rounded-full container justify-around items-center text-lightGray flex mx-auto p-3' style={{background: "#00000058"}} >
        {/* LOGO */}
        <div className="flex cursor-pointer animate-fadeIn duration-300 ">
          <img src="/mini-light.png" className='h-10' alt="" />
          <span className='text-white ps-2 hover:text-primary'>COMPUTER ALUMINIUM AND <br /> BUILDING SERVICES</span>
        </div>
        {/* Content */}
        <ul className={`text-white ${isOpen? "block": "hidden"} bg-dark text-md lg:text-xl  right-2 p-3 md:p-0 sm:bg-transparent rounded-xl  top-28  absolute md:static md:flex align-middle`} >
          <li className=' hover:text-primary cursor-pointer md:mx-3 my-2'><a href="#">Home</a></li>
          <li className=' hover:text-primary cursor-pointer md:mx-3 my-2'><a href="#services">Services</a></li>
          <li className=' hover:text-primary cursor-pointer md:mx-3 my-2'><a href="#about_us">About Us</a></li>
          <li className=' hover:text-primary cursor-pointer md:mx-3 my-2'><a href="#projects">Projects</a></li>
          <li className=' hover:text-primary cursor-pointer md:mx-3 my-2'><a href="#contact">Contact Us</a></li>
        </ul>
        <span className='text-2xl md:hidden hover:text-primary'><i class="ri-align-right" onClick={toggleFunc}></i></span>
      </header>
    </header>
  )
}

export default Header
