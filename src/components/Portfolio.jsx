import React from 'react'

const Portfolio = () => {
  return (
    <div className=' mt-4' id='projects'>
        <div className=' container mx-auto mt-4 pt-2' id='portfolio'>
            <p className='text-center text-yellow-500 my-3 md:my-8 text-xl font-body font-semibold'>Portfolio</p>
            <h2 className='md:text-5xl text-3xl text-center mb-6 font-heading font-semibold'>PROJECTS</h2>
            <div className="md:flex gap-2 ">
                <div className="flex-1 m-2 p-3 border-4 rounded-md border-yellow-300"><img src="/services.jpg"  style={{ height: "100%" }}  alt="" /></div>
                <div className="flex-1 m-2 p-3 border-4 rounded-md border-yellow-300"><img src="/services2.jpg"  style={{ height: "100%" }}  alt="" /></div>
                <div className="flex-1 m-2 p-3 border-4 rounded-md border-yellow-300"><img src="/services3.jpg"  style={{ height: "100%" }}  alt="" /></div>
            </div>
          <br /><br />
        </div>
    </div>
  )
}

export default Portfolio
