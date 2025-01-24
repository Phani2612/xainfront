// import React from 'react'
// import './Footer.css'

// function Footer() {
//   return (
//     <div className='footer-con'>


//       <div className='footer-boxes'>
//         <div className='footer-box-1'>
//           <div className='footer-company-logo' >

//             <img src='/images/Screenshot1.svg' />

//           </div>


//           <p className='footer-p' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.</p>
//         </div>




//         <div className='footer-box-2'>

//           <div id='footer-box-2-text-con-1'>

//             <span id='footer-box-2-text-con-1-text-1' >Important Links</span><br />
//             <span id='footer-box-2-text-con-1-text-2' >Contact Us</span><br />
//             <span id='footer-box-2-text-con-1-text-3' >Privacy Policy</span><br />


//           </div>

//           <div id='footer-box-2-text-con-2'>

//             <span id='footer-box-2-text-con-2-text-1' >Terms & Conditions</span><br />
//             <span id='footer-box-2-text-con-2-text-2' >Contact Support</span><br />

//             <div id='footer-social-icon'>

//               <div id='footer-facebook' >
//                 <img src='/images/Facebook.svg' />
//               </div>
//               <div id='footer-instagram' >
//                 <img src='/images/Instagram.svg' />
//               </div>
//               <div id='footer-linkedin' >
//                 <img src='/images/Linkedin.svg' />
//               </div>
//               <div id='footer-skype' >
//                 <img src='/images/Skype.svg' />
//               </div>

//             </div>


//           </div>


//         </div>





//       </div>


//       <div className='thin-line'></div>

// <p className='footer-copyright' >Copyright © 2025. All rights reserved.</p>

//     </div>
//   )
// }

// export default Footer






import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-con'>


      <div className='footer-boxes'>
        <div className='footer-box-1'>
          <div className='footer-company-logo' >

            <img src='/images/Screenshot1.svg' />

          </div>


          <p className='footer-p' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.</p>
        </div>




        <div className='footer-box-2'>

          <div id='footer-box-2-text-con-1'>

           <Link style={{textDecoration:'none'}}> <span id='footer-box-2-text-con-1-text-1' >Important Links</span></Link><br />
            <Link style={{textDecoration:'none'}}><span id='footer-box-2-text-con-1-text-2' >Contact Us</span></Link><br />
            <Link style={{textDecoration:'none'}}><span id='footer-box-2-text-con-1-text-3' >Privacy Policy</span></Link><br />


          </div>

          <div id='footer-box-2-text-con-2'>

            <Link style={{textDecoration:'none'}}><span id='footer-box-2-text-con-2-text-1' >Terms & Conditions</span></Link><br />
         <Link style={{textDecoration:'none'}}>   <span id='footer-box-2-text-con-2-text-2' >Contact Support</span></Link><br />

            <div id='footer-social-icon'>

              <div id='footer-facebook' >
                <Link style={{textDecoration:'none'}} to='https://www.facebook.com' target='blank'><img src='/images/Facebook.svg' /></Link>
              </div>
              <div id='footer-instagram' >
                <Link style={{textDecoration:'none'}} to='https://www.instagram.com' target='blank' ><img src='/images/Instagram.svg' /></Link>
              </div>
              <div id='footer-linkedin' >
               <Link style={{textDecoration:'none'}} to='https://www.linkedin.com' target='blank' > <img src='/images/Linkedin.svg' /></Link>
              </div>
              <div id='footer-skype' >
              <Link  style={{textDecoration:'none'}} to='https://www.skype.com' target='blank' >  <img src='/images/Skype.svg' /></Link>
              </div>

            </div>


          </div>


        </div>





      </div>


      <div className='thin-line'></div>

<p className='footer-copyright' >Copyright © 2025. All rights reserved.</p>

    </div>
  )
}

export default Footer