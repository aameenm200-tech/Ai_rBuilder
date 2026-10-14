
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Download from './Pages/Download'
import Info from './Pages/Info'
import Pnf from './Pages/Pnf'
import Saved from './Pages/Saved'
import View from './Pages/View'
import Header from './Components/Header'
import Footer from './Components/Footer'


// pages : Homepage , Resume , Userinfo, Viewresume, All saved Resume , Download resume, Page Not Found
// Components : Header , Footer , userinput , resume preview, edit resume

function App() {


  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
         <Route path='/download' element={<Download/>}/>
          <Route path='/resume-details' element={<Info/>}/>
           <Route path='/*' element={<Pnf/>}/>
            <Route path='/all-resumes' element={<Saved/>}/>
             <Route path='/resume/:id' element={<View/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
