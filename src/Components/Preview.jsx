import {Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
      <h2>Full Name</h2>
      <p className='fs-5 lh-1'>Phone : </p>
      <p className='fs-5  lh-1'>Email : </p>
      <p className='fs-5 lh-1'>LinkedIn : </p>
      <p className='fs-5 lh-1'>Github : </p>
      <p className='fs-5 lh-1'>Location : </p>
      <Divider className='bg-dark my-3'/>
      <h3>Professional Summary</h3>
      <p>Summary</p>
       <Divider className='bg-dark my-3'/>
       <h3>Technical Skills</h3>
       <span><Button style={{ backgroundColor: '#a5a37d' }} variant='text' className='text-light rounded-3 p-2'>skills</Button></span>
       <Divider className='bg-dark my-3'/>
       <p>Bachelor's Degree in:</p>
       <p>University/College Name :</p>
       <p>Year of Graduation :</p>


    </div>
  )
}

export default Preview
