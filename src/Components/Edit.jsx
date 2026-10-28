import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoIosCloseCircle } from "react-icons/io";
import jobRole from '../assets/jobRole.json'
import { toast } from 'react-toastify';
import { editAllResumesApi } from '../service/apiService';
import { jsPDF } from "jspdf";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeDetails, setResumeDetails }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = React.useRef()

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, skills: resumeDetails.skills.filter(item => item != skill) })
  }


  const addSkill = (skill) => {
    if (skill) {
      if (resumeDetails?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        toast.info("given skill is already added , please add another skill")
      } else {
        setResumeDetails({ ...resumeDetails, skills: [...resumeDetails?.skills, skill] })
      }
      skillRef.current.value = ""
    } else {
      toast.warning("please enter a valid input")
    }
  }


  const handleEditResume = async () => {
    // make api call to update resume whenever the update button click
    const { fullname, location, job, phone, email, github, linkedin, degree, college, year, skills, summary } = resumeDetails

    if (fullname && location && job && phone && email && phone && email && github && linkedin && degree && college && year && skills.length > 0 && summary) {
      // make api call
      const response = await editAllResumesApi(resumeDetails.id, resumeDetails)
      // console.log(response);
      if (response.status === 200) {
        toast.success("Resume Updated Successfully")
        setTimeout(() => {
          handleClose()
        }, 2500)


      }

    } else {
      toast.error("Please Fill the Form Completely !!!")
    }
  }


  return (
    <div>
      <button style={{ backgroundColor: '#a5a37d' }} className='btn mx-2' onClick={handleOpen}><FaRegEdit className='fs-4' /> Edit CV</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal Details */}
            <div>
              <h3>Personal details</h3>
              <div className='row p-3'>
                <TextField value={resumeDetails?.fullname} onChange={e => setResumeDetails({ ...resumeDetails, fullname: e.target.value })} id="standard-basic-fullname" label="Full Name" variant="standard" />
                <TextField id="standard-basic-loc" value={resumeDetails?.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} label="Location" variant="standard" />

                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select defaultValue={resumeDetails?.job} onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="job"
                  >
                    {

                      jobRole.jobRoles.map(job => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }



                  </Select>
                </FormControl>
              </div>
            </div>
            {/* contact Details */}
            <div>
              <h3>Contact Details</h3>
              <div className="row p-3">
                <TextField value={resumeDetails?.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} className='' id="standard-basic-email" label="Email" variant="standard" />
                <TextField value={resumeDetails?.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} className='mb-2' id="standard-basic-contact" label="Contact Number" variant="standard" />
                <TextField value={resumeDetails?.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} className='' id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                <TextField value={resumeDetails?.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} className='mb-2' id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>
            {/* education details */}
            <div>
              <h3>Educational Details</h3>
              <div className="row p-3">
                <TextField value={resumeDetails?.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} className='mb-2' id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                <TextField value={resumeDetails?.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} className='' id="standard-basic-college" label="University/College Name" variant="standard" />
                <TextField value={resumeDetails?.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} className='mb-2' id="standard-basic-year" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            {/* skills */}
            <div>
              <h3>Skills</h3>
              <div className='d-flex'>
                <input ref={skillRef} type="text" placeholder='Add Skills' className='form-control' />
                <button onClick={() => { addSkill(skillRef.current.value) }} className=' btn w-25 mx-2 text-primary '>ADD</button>
              </div>
              <h5 className='my-3'>Added Skills </h5>
              <div className="d-flex justify-content-between flex-wrap">
                {
                  resumeDetails?.skills?.map(skill => (
                    <Button onClick={() => { removeSkill(skill) }} className='mb-3' style={{ backgroundColor: '#a5a37d' }} variant='contained'>{skill} <IoIosCloseCircle className='ms-2 fs-4' /></Button>
                  ))
                }

              </div>
            </div>
            {/* summary */}
            <div>
              <h3 className='mt-2'>Summary</h3>
              <div className='row p-3'>
                <TextField value={resumeDetails?.summary} onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id='summary' multiline variant='standard' label='summary'></TextField>
              </div>
            </div>
            {/* update button */}
            <button onClick={handleEditResume} className='btn btn-success mt-3'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
