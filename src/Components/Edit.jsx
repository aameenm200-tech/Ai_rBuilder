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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                <TextField id="standard-basic-fullname" label="Full Name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />

                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="job"
                  >
                    <MenuItem value={'job'}>job</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* contact Details */}
            <div>
              <h3>Contact Details</h3>
              <div className="row p-3">
                <TextField className='' id="standard-basic-email" label="Email" variant="standard" />
                <TextField className='mb-2' id="standard-basic-contact" label="Contact Number" variant="standard" />
                <TextField className='' id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                <TextField className='mb-2' id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>
            {/* education details */}
            <div>
              <h3>Educational Details</h3>
              <div className="row p-3">
                <TextField className='mb-2' id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                <TextField className='' id="standard-basic-college" label="University/College Name" variant="standard" />
                <TextField className='mb-2' id="standard-basic-year" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            {/* skills */}
            <div>
              <h3>Skills</h3>
              <div className='d-flex'>
                <input type="text" placeholder='Add Skills' className='form-control' />
                <button className=' btn w-25 mx-2 text-primary '>ADD</button>
              </div>
              <h5 className='my-3'>Added Skills </h5>
              <div className="d-flex justify-content-between flex-wrap">
                <Button style={{ backgroundColor: '#a5a37d' }}  variant='contained'>Skills <IoIosCloseCircle className='ms-2 fs-4' /></Button>
              </div>
            </div>
            {/* summary */}
            <div>
              <h3 className='mt-2'>Summary</h3>
              <div className='row p-3'>
                <TextField id='summary' variant='standard' label='summary'></TextField>
              </div>
            </div>
            {/* update button */}
            <button className='btn btn-success mt-3'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
