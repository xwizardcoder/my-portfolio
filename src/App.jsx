import React from 'react'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import  Projects from './components/Projects'
import Resume from './components/Resume'
import Aboutme from './components/Aboutme'

const App = () => {
  return (
    
    <>

    <Navbar></Navbar>
       
    <Experience/>
    <Projects/>
     <Aboutme/>
    <Resume/>

 


    </>
  )
}

export default App