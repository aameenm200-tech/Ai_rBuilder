import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";



function Download() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className='fs-1'>Downloaded Resume History</h3>
        <Link to={'/resume-details'} className='text-decoration-none fs-5'><IoArrowBackOutline />Back</Link>
      </div>
      <div className="row my-5">
        {/* duplicate the row according to resume count */}
        <div className="col-lg-4">
          <div style={{height:'350px'}} className="rounded shadow p-3">
            <h6>Review At : time stamp</h6>
            <div className="mt-3 text-center">
            <Link to={'/resume/:id'}> <img className='w-50' src="https://template.canva.com/EAG0So5lBF0/1/0/1131w-oA_ZsX4MvMk.jpg" alt="resume image" /></Link> 
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Download
