
import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor:'#564e3b',height:'100%',}} className='container-fluid text-light p-5'>
     <div className="row">
      <div className="col-lg-4">
        <h4 className='mb-4'>AI rBuilder</h4>
        <p style={{textAlign:"justify"}}>An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
      </div>
      <div className="col-lg-4"></div>
      <div className="col-lg-4 ">
        <h4 className='mb-4'>Contact Us</h4>
        <p> <MdEmail className='fs-3'/> airbuilder@gmail.com</p>
        <p> <FaPhoneAlt className='fs-3'/> 0123456789</p>
        <h4>Connect With Us</h4>
        <div className='fs-2'>
          <FaInstagram  />
          <FaFacebook className='mx-3'/>
          <FaXTwitter />
        </div>
      </div>
     </div>
    <h4 className='text-center mt-3'> Designed & built with ❤️ using React</h4>
    </div>
  )
}

export default Footer
