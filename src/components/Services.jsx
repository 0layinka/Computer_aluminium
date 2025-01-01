import React from 'react'

const Services = () => {
  return (
    <div className='container mx-auto' id='services'>
      <p className='text-center text-yellow-500 my-3 md:my-8 text-xl font-body font-semibold'>What We Do</p>
      <h2 className='md:text-4xl text-3xl text-center mb-3 text-secondary font-heading font-extralight'>SERVICES</h2>
      <div className='lg:flex gap-4 w-[85%] mx-auto justify-aroud'>
        <div className="card flex rounded-md shadow-md bg-slate-100 p-3 w-[90%] mx-auto my-3 flex-col items-center flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" id="Home--Streamline-Tabler" className='h-10 my-2'><desc>Home Streamline Icon: https://streamlinehq.com</desc><path d="m3.125 7.5 -1.25 0 5.625 -5.625 5.625 5.625 -1.25 0" stroke-width="1"></path><path d="M3.125 7.5v4.375a1.25 1.25 0 0 0 1.25 1.25h6.25a1.25 1.25 0 0 0 1.25 -1.25v-4.375" stroke-width="1"></path><path d="M5.625 13.125v-3.75a1.25 1.25 0 0 1 1.25 -1.25h1.25a1.25 1.25 0 0 1 1.25 1.25v3.75" stroke-width="1"></path></svg>
          <p className='text-yellow-400 text-xl my-2 md:text-2xl text-center font-heading'>Aluminium Fabrication And Installation</p>
          <p className='text-gray-500 font-body text-center'>Our aluminium fabrication and installation services offer the perfect blend of durability and modern design. From sleek windows and doors to innovative architectural structures, we provide solutions crafted with precision to meet both functional and aesthetic demands. Whether it's for residential, commercial, or industrial projects, our expert team ensures flawless execution tailored to your specifications, combining lightweight materials with unmatched strength for lasting results.</p>
        </div>
        <div className="card flex rounded-md shadow-md flex-col p-3 w-[90%] mx-auto my-3 bg-slate-100 items-center flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" className='h-10 my-2' stroke="#000000" stroke-linecap="round" stroke-linejoin="round" id="Window--Streamline-Tabler"><desc>Window Streamline Icon: https://streamlinehq.com</desc><path d="M7.5 1.875c-2.4162500000000002 0 -4.375 2.045 -4.375 4.375v6.25a0.625 0.625 0 0 0 0.625 0.625h7.5a0.625 0.625 0 0 0 0.625 -0.625V6.25c0 -2.33 -1.95875 -4.375 -4.375 -4.375z" stroke-width="1"></path><path d="m3.125 8.125 8.75 0" stroke-width="1"></path><path d="m7.5 1.875 0 11.25" stroke-width="1"></path></svg>
          <p className='text-yellow-400 text-xl my-2 md:text-2xl text-center font-heading'>Windows Installation</p>
          <p className='text-gray-500 font-body text-center'>Our window installation services combine elegance and functionality to enhance your spaces. We specialize in installing a wide variety of windows, from energy-efficient designs to sleek, modern styles that maximize natural light. Whether you’re upgrading your home, office, or commercial building, our team ensures precise installation for a flawless finish that complements your architecture and improves overall comfort</p>
        </div>
        <div className="card rounded-md shadow-md flex flex-col p-3 w-[90%] mx-auto my-3 bg-slate-100 items-center flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" id="Tool--Streamline-Tabler" className='h-10 my-2'><desc>Tool Streamline Icon: https://streamlinehq.com</desc><path d="M4.375 6.25h1.875V4.375L4.0625 2.1875a3.75 3.75 0 0 1 5 5l3.75 3.75a1.25 1.25 0 0 1 -1.875 1.875l-3.75 -3.75a3.75 3.75 0 0 1 -5 -5L4.375 6.25" stroke-width="1"></path></svg>
          <p className='text-yellow-400 text-xl my-2 md:text-2xl text-center font-heading'>Maintenance and Repairs</p>
          <p className='text-gray-500 font-body text-center'>Regular upkeep and timely repairs are crucial to maintaining the value and safety of your property. Our maintenance and repair services cover everything from structural fixes to system overhauls. Whether it’s restoring your aluminium installations, fixing cracks, or addressing wear and tear, our expert team ensures your property remains in prime condition. No job is too big or too small—we handle it all with professionalism and efficiency.</p>
        </div>
      </div>
      <br /><br />
    </div>
  )

}

export default Services
