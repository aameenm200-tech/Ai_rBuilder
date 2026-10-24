import {Button, Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div className='w-100'>
      <h2>{resumeDetails?.fullname}</h2>
      <p className='fs-5 lh-1'>Phone : {resumeDetails?.phone} </p>
      <p className='fs-5  lh-1'>Email : {resumeDetails?.email} </p>
      <p className='fs-5 lh-1'>LinkedIn : {resumeDetails?.linkedin} </p>
      <p className='fs-5 lh-1'>Github : {resumeDetails?.github} </p>
      <p className='fs-5 lh-1'>Location : {resumeDetails?.location} </p>
      <Divider className='bg-dark my-3'/>
      <h3>Professional Summary</h3>
      <p>{resumeDetails?.summary}</p>
       <Divider className='bg-dark my-3'/>
       <h3>Technical Skills</h3>
       {/* duplicate according to skill number */}
       {
        resumeDetails?.skills?.map(skill=>(
        <span><Button key={skill} style={{ backgroundColor: '#a5a37d' }} variant='text' className='text-light rounded-3 my-2 mx-2'>{skill}</Button></span>

        ))
       }
       
       <Divider className='bg-dark my-3'/>
       <p>Bachelor's Degree in: {resumeDetails?.degree}</p>
       <p>University/College Name : {resumeDetails?.college}</p>
       <p>Year of Graduation : {resumeDetails?.year}</p>


    </div>
  )
}

export default Preview
