import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='h-full darken p-4 flex flex-col justify-center items-center'>
            <p className='mt-32 text-2xl text-center my-2'>Welcome to Computer Aluminium<span className='text-goldy text-4xl' >.</span></p>
            <h2 className='text-5xl md:text-6xl  text-center font-heading mb-3'>Your Trusted Partner in Quality <br /> <span className='text-goldy'> Construction</span></h2>
            <div className='my-4'>
              <button className='border-2 hover:bg-primary hover:border-white border-goldy rounded-xl px-5 py-2'><a href="#contact">Contact Us <i class="ri-arrow-right-line"></i> </a></button>
            </div>
        </div>
    </>
  )
}

export default Hero
