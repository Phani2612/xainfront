import React from 'react'
import './UserNavbar.css'


function UserNavbar() {
  return (
    <div className='nav-container'>

   
            <div className='pasil-logo' ><img src='/images/Mask group.svg' /></div>


            <div className='usernav-button-con'>

            <div id='group1' >
          <span className='login-text' >Videos</span>
        </div>

        <div id='group2' >
          <span className='Signup-text' >Logout</span>
        </div>


            </div>
      


    </div>
  )
}

export default UserNavbar