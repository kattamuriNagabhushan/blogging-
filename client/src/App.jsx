import { BrowserRouter , Routes , Route } from 'react-router-dom'

import React from 'react'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import PostPage from './pages/PostPage'
import UpdatePost from './pages/UpdatePost'
import Search from './pages/Search'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header/>

      <Routes>

        <Route path="/" element = {<Home/>} />
        
        <Route path="/about" element = {<About/>} />
        <Route path="/sign-in" element = {<SignIn/>} />
        <Route path='/search' element={<Search />} />
        <Route element = {<PrivateRoute />}>
          <Route path="/dashboard" element = {<Dashboard/>} />
        </Route>
        <Route path="/sign-up" element = {<SignUp/>} />
        
        <Route element = {<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element = {<CreatePost/>} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
          
        </Route>
        
        <Route path="/projects" element = {<Projects/>} />
        <Route path='/post/:postSlug' element={<PostPage />} />

        
      </Routes>

      <Footer/>
    
    </BrowserRouter>
  )
}
