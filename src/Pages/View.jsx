import React, { useEffect, useRef, useState } from 'react'
import { FiDownload } from "react-icons/fi";
import  Edit  from "../Components/Edit";
import { Link, useParams } from 'react-router-dom';
import Preview from '../Components/Preview';
import { IoDocument } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { GrLinkPrevious } from "react-icons/gr";
import { viewResumeApi } from '../service/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function View() {



  const [resume,setResume] = useState()
  const previewRef = useRef()


  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
getResumeDetails()
  },[])
  

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status===200){
      setResume(response.data)
    }
    
  }

  
  const generatePDF = async () =>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    const pdf = new jsPDF()
    const imageHeight = pdf.internal.pageSize.getHeight()
    const imagewidth = pdf.internal.pageSize.getWidth()
  pdf.addImage(canvas,"PNG",0,0,imageHeight,imagewidth)
  pdf.save("resume.pdf")
    
  }


  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* Downloads */}
            <button onClick={generatePDF} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><FiDownload  className='fs-4' /> Download CV</button>
            {/* edit */}
            <Edit resumeDetails={resume}  setResumeDetails={setResume} />
            {/* all resumes */}
            {/* <Link to={'/all-resumes'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><IoDocument className='fs-4' /> All Resumes</Link> */}
            {/* download history */}
             {/* <Link to={'/download'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><GoHistory className='fs-4' /> Download History</Link> */}
            {/* back */}
             <Link to={'/resume-details'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><GrLinkPrevious className='fs-4' /> Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume}/>
          </div>

        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
