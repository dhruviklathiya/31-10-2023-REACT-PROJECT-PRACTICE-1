import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import data from './Data'
import Card from './Card'
import App6result from './App6result'

const App6 = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/:cardtitle' exact element={<App6result/>}/>
    </Routes>
    </>
  )
}

export default App6