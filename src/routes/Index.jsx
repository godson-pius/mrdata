import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Reset from '../pages/Reset'
import NotFound from '../components/NotFound'
import Register from '../pages/Register'
import ResetSuccess from '../pages/ResetSuccess'

const Index = () => {
  return (
    <div className='routes'>
        <Router basename='/'>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/sign-in' element={ <Login /> } />
                <Route path='/get-started' element={ <Register /> } />
                <Route path='/reset-password' element={ <Reset /> } />
                <Route path='/reset-password-successful' element={ <ResetSuccess /> } />
                <Route path='*' element={ <NotFound /> } />
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}

export default Index