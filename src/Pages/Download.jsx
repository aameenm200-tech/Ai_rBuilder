import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { getdownloadResumesApi } from '../service/apiService';
import { resume } from 'react-dom/server';



function Download() {

  const [downloadList, setdownloadList] = useState([])
  console.log(downloadList);


  useEffect(() => {
    getAlldownloads()
  }, [])

  const getAlldownloads = async () => {
    const result = await getdownloadResumesApi()
    setdownloadList(result.data)
  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className='fs-1'>Downloaded Resume History</h3>
        <Link to={'/resume-details'} className='text-decoration-none fs-5'><IoArrowBackOutline />Back</Link>
      </div>
      <div className="row my-5">
        {/* duplicate the row according to resume count */}

        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div className="col-lg-4">
                <div style={{ height: '350px' }} className="rounded shadow p-3">
                  <h6>Review At : {resume?.timestamp} </h6>
                  <div className="mt-3 text-center">
                    <Link to={`/resume/${resume?.resumeId}`}> <img className='w-100' style={{height:'280px'}} src={resume?.resumeImg} alt="resume image" /></Link>
                  </div>
                </div>
              </div>
            ))

            :

            <div className='text-center'>no resumes downloaded yet</div>
        }

      </div>

    </div>
  )
}

export default Download
