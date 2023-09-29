import React from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Project from './pages/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
