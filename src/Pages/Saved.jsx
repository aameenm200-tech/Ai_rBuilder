import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteResumeApi, getAllResumesApi } from '../service/apiService';
import { FaSearch } from 'react-icons/fa';

function Saved() {



  const [allResumes,setAllResumes] = useState([])
  const [searchKey,setSearchKey] = useState("")
  console.log(searchKey);

  useEffect(()=>{
    searchKey=="" ? getAllResumes() : searchCandidate()
  },[searchKey])
  
const searchCandidate =() => {
  setAllResumes(allResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLocaleLowerCase())))
}

  const getAllResumes = async() => {
    const response = await getAllResumesApi()
    if(response.status===200){
      setAllResumes(response.data)
    }
  }

  const removeResume = async (id) => {
    if(confirm("are you sure , do you want to delete this resume ?")){
      const response = await deleteResumeApi(id)
      if(response.status===200){
        getAllResumes()
      }
    }
  }



  return (
    <div className='container d-flex align-items-center justify-content-center my-5 flex-column'>
      <h1>All Saved Resumes</h1>
      <div className="d-flex justify-content-center align-items-center w-50 mt-3">
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='Search Candidate by their job name ' className='form-control'/>
      <FaSearch style={{marginLeft:"-30px"}}/>
      </div>
      <table className="table table-hover table-bordered table-stripped my-5 text-center">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>

          {
            allResumes?.length>0?
            allResumes?.map((resume,index)=>(
              <tr key={resume?.id}>
            <td>{index+1}</td>
            <td><Link to={`/resume/${resume?.id}`}>{resume?.fullname.toUpperCase()}</Link></td>
            <td>{resume?.job.toUpperCase()}</td>
            <td>
              <button onClick={()=>{removeResume(resume?.id)}} className='btn btn-danger'><MdDelete className='fs-4' /></button>
            </td>
          </tr>
            ))

            :

            <p>No Resume Added Yet ....</p>


          }
          
        </tbody>
      </table>
    </div>
  )
}

export default Saved
