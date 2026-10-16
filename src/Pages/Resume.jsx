import React from 'react'
import { IoDocument } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Resume() {
  return (
    <div>
      <div style={{ height: '100vh' }} className="">
        <h1 className="text-center mt-5">Create An ATS Friendly Resume in Minutes With AI</h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 rounded-5 shadow p-5 text-center">
              <IoDocument style={{ fontSize: '40px' }} className='text-primary mb-3' />
              <h4>Add Your Details </h4>
              <p>Our AI wil generate Skills & summary</p>
              <h5>step 1</h5>

            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 rounded-5 shadow p-5 text-center">
              <FaFileDownload style={{ fontSize: '40px' }} className=' text-danger mb-3' />
              <h4>Download Your Resume </h4>
              <p>Download PDF and start applying</p>
              <h5>step 2</h5>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to={'/resume-details'} className='btn text-light p-3 fs-6'  style={{ backgroundColor: '#a5a37d' }}>Let's Start</Link>
        </div>

      </div>
    </div>
  )
}

export default Resume
