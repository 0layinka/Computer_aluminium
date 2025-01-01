import React from 'react'

const Footer = () => {
  return (
    <div className="h-full darken-2 flex flex-col justify-center items-center p-6">
      <div className="container mx-auto md:flex justify-around">
        <div className="flex-1">
            <div className="flex cursor-pointer ">
            <img src="/mini-light.png" className='h-10' alt="" />
            <span className='text-white ps-2 hover:text-primary'>COMPUTER ALUMINIUM AND <br /> <span className='text-goldy'>BUILDING SERVICES</span></span>
            <br />
            </div><br />
            <p className="text-white">"Building trust with exceptional craftsmanship."</p>
        </div>
        <div className="flex-1 text-white">
            <h1 className='text-xl'>USEFUL <span className="text-goldy">LINKS</span></h1>
            <br />
            <ul className='font-thin '>
                <li><a href="#"><i class="ri-arrow-right-line text-goldy"></i> Home </a></li>
                <li><a href="#services"><i class="ri-arrow-right-line text-goldy"></i>Services </a></li>
                <li><a href="#about_us"><i class="ri-arrow-right-line text-goldy"></i>About Us </a></li>
                <li><a href="#project"><i class="ri-arrow-right-line text-goldy"></i>Project </a></li>
                <li><a href="#contact"><i class="ri-arrow-right-line text-goldy"></i>Contact Us </a></li>
            </ul>
        </div>
        <div className="flex-1 text-white">
            <h1>Contact <span className='text-goldy'>Us</span></h1>
            <br />
            <p>Phone: +234 902 722 0288 </p> 
            <p>Email: contact@yourcompany.com </p>
            <br />
            <div className="flex">
                <i class="ri-facebook-circle-line text-3xl mx-1 border-3  border-goldy px-2"></i>
                <i class="ri-instagram-line text-3xl mx-1 border-3  border-goldy px-2"></i>
                <i class="ri-twitter-x-fill text-3xl mx-1 border-3  border-goldy px-2"></i>
                <i class="ri-linkedin-box-line text-3xl mx-1 border-3  border-goldy px-2"></i>
            </div>
        </div>
      </div>
      <hr  className='text-white w-11/12 mx-auto my-6'/>
      <p className="text-white text-center">© 2024 Computer Aluminium. All Rights Reserved. | Privacy Policy | Terms of Service</p>
    </div>
  )
}

export default Footer
