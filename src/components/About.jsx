import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100 pb-10' id='about_us'>
      <br /><br />
      <h2 className='md:text-4xl font-extralight text-3xl text-secondary text-center mb-3 font-heading '>About Us</h2>
      <div className="container p-6 lg:flex gap-5 justify-around mx-auto">
          <div className="flex-1 bg-secondary">
              <img src="/About1.png" style={{width: '100%', height: '100%'}} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left  p-1">
              <p className='text-md my-2'>Welcome to Computer Aluminium<span className='text-gold text-4xl' >.</span></p>
              <h2 className='text-2xl md:text-6xl text-amber-400 font-heading mb-3'>Quality and Affordable Constructor</h2>
              <p className='text-lg text-dark'>With over <b>35 years of experience</b>, we have built a reputation for delivering exceptional craftsmanship and reliable services. Specializing in aluminium fabrication, building construction, and repairs, our team is dedicated to providing innovative and durable solutions tailored to your needs. Trust us to bring expertise, quality, and professionalism to every project.</p>
              <p className='text-xl md:text-2xl text-center md:text-left my-6 font-body'>We Can Help You</p>
              <div className="md:flex md:w-[90%] gap-3 ">
                <div className="md:flex-1 my-2  flex gap-2 hover:bg-slate-400 rounded-md p-3 shadow-md bg-white">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-28' viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Building-Skyscraper--Streamline-Tabler"><desc>Building Skyscraper Streamline Icon: https://streamlinehq.com</desc><path d="m1.875 13.125 11.25 0" stroke-width="1"></path><path d="M3.125 13.125V4.375l5 -2.5v11.25" stroke-width="1"></path><path d="M11.875 13.125V6.875l-3.75 -2.5" stroke-width="1"></path><path d="m5.625 5.625 0 0.00625" stroke-width="1"></path><path d="m5.625 7.5 0 0.00625" stroke-width="1"></path><path d="m5.625 9.375 0 0.00625" stroke-width="1"></path><path d="m5.625 11.25 0 0.00625" stroke-width="1"></path></svg>
                  </div>
                  <div className="">
                    <h2 className='text-2xl  my-3 text-dark'>Construction</h2>
                    <p>Delivering quality and precision in every construction project.</p>
                  </div>
                
                </div>
                <div className="md:flex-1 my-2 mx-auto flex gap-2 hover:bg-slate-400  rounded-md p-3 shadow-md bg-white">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-28' viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Pentagon-Minus--Streamline-Tabler" ><desc>Pentagon Minus Streamline Icon: https://streamlinehq.com</desc><path d="M7.8125 13.125q-1.1375 0 -3.41125 0.003125a1.2375 1.2375 0 0 1 -1.175625 -0.854375l-1.915 -5.89375a1.2375 1.2375 0 0 1 0.44937499999999997 -1.3825l5.0131250000000005 -3.6425a1.2375 1.2375 0 0 1 1.45375 0l5.0131250000000005 3.6425c0.43374999999999997 0.315 0.615 0.873125 0.44937499999999997 1.3825L12.715 9.375" stroke-width="1"></path><path d="M10 11.875h3.75" stroke-width="1"></path></svg>
                  </div>
                  <div className="">
                    <h2 className='text-2xl font-semibold my-3 text-dark'>Architecture</h2>
                    <p>Creating innovative and timeless architectural designs.</p>
                  </div>
                
                </div>
              </div>
          </div>
      </div>
      <h2 className='md:text-4xl text-3xl text-center my-3 text-secondary font-heading font-extralight'>STATS</h2>
      <div className="container px-3 md:flex gap-4 mx-auto">
        <div className="md:flex-1 my-4  flex gap-2 hover:bg-slate-400 rounded-md p-3 shadow-md bg-white">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Mood-Dollar--Streamline-Tabler" height="16" className='h-28'><desc>Mood Dollar Streamline Icon: https://streamlinehq.com</desc><path d="M13.043750000000001 6.550000000000001a5.625 5.625 0 1 0 -4.9225 6.540625" stroke-width="1"></path><path d="M5.625 6.25h0.00625" stroke-width="1"></path><path d="M9.375 6.25h0.00625" stroke-width="1"></path><path d="M5.9375 9.375c0.41125 0.4 0.9750000000000001 0.625 1.5625 0.625 0.223125 0 0.443125 -0.0325 0.651875 -0.094375" stroke-width="1"></path><path d="M13.125 9.375h-1.5625a0.9375 0.9375 0 0 0 0 1.875h0.625a0.9375 0.9375 0 0 1 0 1.875H10.625" stroke-width="1"></path><path d="M11.875 13.125v0.625m0 -5v0.625" stroke-width="1"></path></svg>
          </div>
          <div className="">
            <h2 className='text-4xl font-semibold my-3 text-dark'>200+</h2>
            <p className='text-2xl text-secondary font-body'>Happy Client</p>
          </div>
        
        </div>
        <div className="md:flex-1 my-4  flex gap-2 hover:bg-slate-400 rounded-md p-3 shadow-md bg-white">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" className='h-28' stroke-linejoin="round" id="Home-Signal--Streamline-Tabler" ><desc>Home Signal Streamline Icon: https://streamlinehq.com</desc><path d="M9.375 13.75v-1.25" stroke-width="1"></path><path d="M11.25 13.75v-2.5" stroke-width="1"></path><path d="M13.125 13.75v-3.75" stroke-width="1"></path><path d="M11.875 7.80875V7.5h1.25l-5.625 -5.625 -5.625 5.625h1.25v4.375a1.25 1.25 0 0 0 1.25 1.25h2.5" stroke-width="1"></path><path d="M5.625 13.125v-3.75a1.25 1.25 0 0 1 1.25 -1.25h1.25a1.25 1.25 0 0 1 1.25 1.25v0.3125" stroke-width="1"></path></svg>
          </div>
          <div className="">
            <h2 className='text-4xl font-semibold my-3 text-dark'>800+</h2>
            <p className='text-2xl text-dark font-body'>Projects</p>
          </div>
        
        </div>
        <div className="md:flex-1 my-4  flex gap-2 hover:bg-slate-400 rounded-md p-3 shadow-md bg-white">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" className='h-28' stroke-linecap="round" stroke-linejoin="round" id="Headset--Streamline-Tabler"><desc>Headset Streamline Icon: https://streamlinehq.com</desc><path d="M2.5 8.75v-1.875a5 5 0 1 1 10 0v1.875" stroke-width="1"></path><path d="M11.25 11.875c0 1.035625 -1.67875 1.875 -3.75 1.875" stroke-width="1"></path><path d="M2.5 8.75a1.25 1.25 0 0 1 1.25 -1.25h0.625a1.25 1.25 0 0 1 1.25 1.25v1.875a1.25 1.25 0 0 1 -1.25 1.25H3.75a1.25 1.25 0 0 1 -1.25 -1.25v-1.875z" stroke-width="1"></path><path d="M9.375 8.75a1.25 1.25 0 0 1 1.25 -1.25h0.625a1.25 1.25 0 0 1 1.25 1.25v1.875a1.25 1.25 0 0 1 -1.25 1.25h-0.625a1.25 1.25 0 0 1 -1.25 -1.25v-1.875z" stroke-width="1"></path></svg>
          </div>
          <div className="">
            <h2 className='text-4xl my-3 text-dark'>1000hrs+</h2>
            <p className='text-2xl my-3 text-dark font-body'>Hours Of Support</p>
          </div>
        
        </div>
        <div className="md:flex-1 my-4  flex gap-2 hover:bg-slate-400 rounded-md p-3 shadow-md bg-white">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-28' viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Building-Skyscraper--Streamline-Tabler"><desc>Building Skyscraper Streamline Icon: https://streamlinehq.com</desc><path d="m1.875 13.125 11.25 0" stroke-width="1"></path><path d="M3.125 13.125V4.375l5 -2.5v11.25" stroke-width="1"></path><path d="M11.875 13.125V6.875l-3.75 -2.5" stroke-width="1"></path><path d="m5.625 5.625 0 0.00625" stroke-width="1"></path><path d="m5.625 7.5 0 0.00625" stroke-width="1"></path><path d="m5.625 9.375 0 0.00625" stroke-width="1"></path><path d="m5.625 11.25 0 0.00625" stroke-width="1"></path></svg>
          </div>
          <div className="">
            <h2 className='text-4xl my-3 text-dark'>10+</h2>
            <p className='text-2xl my-3 text-dark font-body'>Workers</p>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default About
