import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../components/Footer'
import Videos from './Videos'
import { Link } from 'react-router-dom'

function UserDashboard() {

  const User_Email = localStorage.getItem('User_Email')

  if(!User_Email){
    return <h1>Please Login to continue <Link to='/login'>Login</Link></h1>
  }


  return (
    <div>

<UserNavbar/>

<Videos/>


<Footer/>
    </div>
  )
}

export default UserDashboard