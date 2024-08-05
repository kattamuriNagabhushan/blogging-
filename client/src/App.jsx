import { BrowserRouter , Routes , Route } from 'react-router-dom'

import React from 'react'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    
      <Header/>

      <Routes>

        <Route path="/" element = {<Home/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/sign-in" element = {<SignIn/>} />
        <Route path="/sign-up" element = {<SignUp/>} />
        <Route path="/projects" element = {<Projects/>} />

        
      </Routes>
    
    </BrowserRouter>
  )
}
