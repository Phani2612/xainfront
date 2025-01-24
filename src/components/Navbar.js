import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-con' >

      <div className='screenshot' >

        <img src='/images/Screenshot.svg' />

      </div>


      <div className='button-con'>

        <div id='group1' >
         <Link  style={{textDecoration:'none'}} to='/login'> <span className='login-text' >Login</span></Link>
        </div>

        <div id='group2' >
     <Link style={{textDecoration:'none'}} to='/signup'>     <span className='Signup-text' >Sign Up</span></Link>
        </div>

      </div>



    </div>
  )
}

export default Navbar
