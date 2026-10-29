import React, { useEffect, useRef, useState } from 'react'
import { FiDownload } from "react-icons/fi";
import Edit from "../Components/Edit";
import { Link, useParams } from 'react-router-dom';
import Preview from '../Components/Preview';
import { IoDocument } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { GrLinkPrevious } from "react-icons/gr";
import { downloadResumesApi, viewResumeApi } from '../service/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function View() {



  const [resume, setResume] = useState()
  const previewRef = useRef()


  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    getResumeDetails()
  }, [])


  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      setResume(response.data)
    }

  }

  const downloadCv = async () => {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    canvas.toBlob(async (imgFile) => {
      // create form data to send file via API
      const formData = new FormData()
      formData.append("file", imgFile)
      formData.append("upload_preset", "MyResume")
      const result = await fetch("https://api.cloudinary.com/v1_1/zqkaduft/image/upload", {
        method: "POST",
        body: formData
      })

      const serverData = await result.json()
      const url = serverData.secure_url
      // console.log(url);
      generatePDF(url)



    })
  }




  const generatePDF = async (resumeImg) => {

    const pdf = new jsPDF()
    const imageHeight = pdf.internal.pageSize.getHeight()
    const imagewidth = pdf.internal.pageSize.getWidth()
    pdf.addImage(resumeImg, "PNG", 0, 0, imageHeight, imagewidth)

    const today = new Date()
    const timestamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    console.log(timestamp);


    const result = await downloadResumesApi({timestamp,resumeImg, resumeId: resume.id, jobRole: resume.job })
    if (result.status===201) {
      // download CV
      pdf.save(`${resume.fullname} CV.pdf`)
    }



  }


  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* Downloads */}
            <button onClick={downloadCv} style={{ backgroundColor: "#a5a37d" }} className='btn mx-2'><FiDownload className='fs-4' /> Download CV</button>
            {/* edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            {/* all resumes */}
            {/* <Link to={'/all-resumes'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><IoDocument className='fs-4' /> All Resumes</Link> */}
            {/* download history */}
            {/* <Link to={'/download'} style={{backgroundColor:"#a5a37d"}} className='btn mx-2'><GoHistory className='fs-4' /> Download History</Link> */}
            {/* back */}
            <Link to={'/resume-details'} style={{ backgroundColor: "#a5a37d" }} className='btn mx-2'><GrLinkPrevious className='fs-4' /> Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>

        </div>
        <div className="col-lg-2"></div>
      </div>

    </div>
  )
}

export default View
