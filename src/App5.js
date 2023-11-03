import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

const App5 = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App5