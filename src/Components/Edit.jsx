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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
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
      <button style={{ backgroundColor: '#a5a37d', color: '' }} className='btn mx-2' onClick={handleOpen}><FaRegEdit /> Edit CV</button>
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
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
