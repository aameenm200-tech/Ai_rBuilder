import React from 'react'
import { FiDownload } from "react-icons/fi";
import  Edit  from "../Components/Edit";
import { Link } from 'react-router-dom';
import Preview from '../Components/Preview';
import { IoDocument } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { GrLinkPrevious } from "react-icons/gr";



function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* Downloads */}
            <button style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><FiDownload  className='fs-4' /> Download CV</button>
            {/* edit */}
            <Edit/>
            {/* all resumes */}
            <Link to={'/all-resumes'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><IoDocument className='fs-4' /> All Resumes</Link>
            {/* download history */}
             <Link to={'/download'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><GoHistory className='fs-4' /> Download History</Link>
            {/* back */}
             <Link to={'/resume-details'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><GrLinkPrevious className='fs-4' /> Previous</Link>
          </div>
          <div className='p-5'>
            <Preview/>
          </div>

        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
