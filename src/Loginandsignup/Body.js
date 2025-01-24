import React from 'react'
import Layout from '../components/Layout'
import './Body.css'
import {Link} from 'react-router-dom'

function Body() {
  return (
    <Layout>

      <div className='body-con' >


             <div  className='body-box-1'>

                   <div id='body-box-1-1' >

                           <div id='body-box-1-1-1' >
                           Power and <span class="orange-text">Success</span> <br />
                           <span class="orange-text">Inspired</span> Life

                           </div>

                           <p id='body-box-1-1-p1' >Knowledge is the greatest wealth. Financial security is the foundation of a peaceful life. Along with this, when there is mutual cooperation and mutual trust, our life becomes very beautiful.</p>

                           <p id='body-box-1-1-p2' >Thank you for choosing us as your gateway to a secure life. </p>

                           <p  id='body-box-1-1-p3'>Let's travel together, have a better tomorrow.</p>
                   </div>


                   <div className='body-buttons-con' >

                        <div id='body-videos' >
                          <span className='body-videos-text' >Videos</span>
                        </div>

                        <div id='body-login'>
                         <Link style={{textDecoration:'none'}}> <span className='body-login-text' >Login</span></Link>
                        </div>

                   </div>

             </div>


            
               
                  <div className='body-box-2'>
                  <img src='/images/Rectangle 7.svg'  />
                  </div>
             

      </div>
     
    </Layout>
  )
}

export default Body