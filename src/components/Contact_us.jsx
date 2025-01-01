import React from 'react';

const Contact_us = () => {
  return (
    <div className="bg-slate-100" id='contact'>
        <div className="container mx-auto py-8">
            <div className="lg:flex gap-4">
                <div className="flex-1">
                    <div className="md:my-3 px-3 md:flex-1 md:w-100% w-[93%]  md:flex gap-2 rounded-md p-3 shadow-xl bg-white md:flex-col mx-auto my-5">
                        <div className="mx-auto w-[100%]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round"  id="Map-Pin--Streamline-Tabler" style={{borderColor: '#ffd900bb'}} className='h-16 p-2 mx-auto border-4 border-primary rounded-full border-dotted'><desc>Map Pin Streamline Icon: https://streamlinehq.com</desc><path d="M5.625 6.875a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 0 0 -3.75 0" stroke-width="1"></path><path d="M11.035625 10.410625 8.38375 13.0625a1.25 1.25 0 0 1 -1.766875 0l-2.6525 -2.6518750000000004a5 5 0 1 1 7.07125 0z" stroke-width="1"></path></svg>
                            </div>
                            <p className='text-2xl text-dark font-heading my-2'><center>Address</center></p>
                        </div>
                        <p className='text-secondary text-md font-body text-center mb-3'>3 Adeyinka Street, Ifo, Ogun State</p>
                    </div>
                    <br /> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126779.6598894331!2d3.1102355585805883!3d6.786354565128419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103ba3932b47d1e1%3A0x43723e3e664954ba!2sIfo%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1734583906733!5m2!1sen!2sng"
                        className='w-[100%]'
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex-1">
                    <div className="md:flex md:w-100% w-[93%] mx-auto gap-3">
                        <div className="md:my-3 px-3 md:flex-1 md:flex gap-2 rounded-md p-3 shadow-xl bg-white md:flex-col mx-auto my-5">
                            <a href="tel:8023329485">
                            <div className="mx-auto">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Phone--Streamline-Tabler" style={{borderColor: '#ffd900bb'}} className='h-16 p-2 mx-auto border-4 border-primary rounded-full border-dotted'><desc>Phone Streamline Icon: https://streamlinehq.com</desc><path d="M3.125 2.5h2.5l1.25 3.125 -1.5625 0.9375a6.875 6.875 0 0 0 3.125 3.125L9.375 8.125l3.125 1.25v2.5a1.25 1.25 0 0 1 -1.25 1.25A10 10 0 0 1 1.875 3.75a1.25 1.25 0 0 1 1.25 -1.25" stroke-width="1"></path></svg>
                                </div>
                                <p className='text-2xl text-dark font-heading mt-2'><center>Call Us</center></p>
                                <center><small>(Click on me)</small></center>
                            </div>
                            </a>
                            <p className='text-secondary text-md font-body text-center mb-3'>+234 0802 3329 485</ p>
                        </div>
                        <div className="md:my-3 px-3 md:flex-1 md:flex gap-2 rounded-md p-3 shadow-xl bg-white md:flex-col mx-auto my-5">
                            <div className="mx-auto">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffd900bb" stroke-linecap="round" stroke-linejoin="round" id="Mail--Streamline-Tabler" style={{borderColor: '#ffd900bb'}} className='h-16 p-2 mx-auto border-4 border-primary rounded-full border-dotted'><desc>Mail Streamline Icon: https://streamlinehq.com</desc><path d="M1.875 4.375a1.25 1.25 0 0 1 1.25 -1.25h8.75a1.25 1.25 0 0 1 1.25 1.25v6.25a1.25 1.25 0 0 1 -1.25 1.25H3.125a1.25 1.25 0 0 1 -1.25 -1.25V4.375z" stroke-width="1"></path><path d="m1.875 4.375 5.625 3.75 5.625 -3.75" stroke-width="1"></path></svg>
                                </div>
                                <p className='text-2xl text-dark font-heading my-2'><center>Email Us</center></p>
                            </div>
                            <p className='text-secondary text-md font-body text-center mb-3'>olayinkaadeyinka@gmail.com</p>
                        </div>
                    </div>
                    <br />
                    <form  action="https://formspree.io/f/xrbbzjgj" method="POST">
                        <div className="shadow-2xl p-3 h-[450px]">
                            <div className='mx-auto mt-2 flex gap-4 font-extralight justify-center w-[90%]'>
                                <input type="text" name='email' placeholder='  Your Email' className='outline-none p-2 w-full active:outline-1 outline-goldy' />
                            </div>
                            <br />
                            <div>
                                <textarea name="Message" className='outline-none p-2  active:outline-1 outline-goldy mx-auto flex gap-4 font-extralight justify-center w-[90%] h-[300px]' placeholder='  Your Message' id=""></textarea>
                            </div>
                            <center> <button type='submit' className='border-2 active:bg-dark bg-primary hover:border-white border-gold rounded-xl my-3 text-white px-5 py-2'>Contact Us <i class="ri-arrow-right-line"></i> </button></center>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact_us;
