import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* landing */}
      <div style={{ height: '100vh', background: "url(./landing.png)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: 'rgba(30, 32, 30,0.6)' }} className='text-center rounded p-5 w-50 text-light'>
          <h1>Designed To get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/resume'} style={{ backgroundColor: '#a5a37d' }} className='btn text-light p-3 fs-5'>Make Your Resume With AI</Link>
        </div>

      </div>
      {/* about */}

      <div style={{ backgroundColor: '#a5a37d' }} className="container my-5 p-3">
        <h1 className='text-center my-4'>What's AI Builder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 fs-5">
            <p style={{ textAlign: 'justify' }}> An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{ textAlign: 'justify' }}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

            <p style={{ textAlign: 'justify' }}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{ textAlign: 'justify' }}> This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img style={{ height: '75%', width: '75%' }} src="/About.jpg" alt="About" />
          </div>
        </div>
      </div>



      {/* image */}

      <div style={{ height: '100vh', background: "url(./meeting.jpg)", backgroundAttachment: 'fixed', backgroundSize: 'cover' }} className='d-flex justify-content-center align-items-center'></div>
      {/* textimony */}

      <div style={{}} className="container my-5 p-3">
        <h1 className='text-center my-4'>Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 fs-5">
            <h1>Trusted By Professionals Worldwide</h1>
            <p style={{ textAlign: 'justify' }}> An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{ textAlign: 'justify' }}>The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.</p>

            <p style={{ textAlign: 'justify' }}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{ textAlign: 'justify' }}> This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
              <div className="col-md-3 p-5">
                <img style={{}} src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
