import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const title ="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#564e3b'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'40px'} src="https://www.thegreatapps.com/application/upload/Apps/2019/07/resume-maker-app-147.png" alt="ni image" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/'} className='text-light text-decoration-none '>AI rBuilder</Link> 
          </Typography>
          <Tooltip title={title}>
            <Button color="inherit">About Us</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
