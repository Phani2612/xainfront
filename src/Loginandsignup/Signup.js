import React, { useState } from 'react'
import Layout from '../components/Layout'
import './Signup.css'
import axios from 'axios';
import { SERVER_URL } from '../URL';
import swal from 'sweetalert2'

function Signup() {

   const [Userdata , setUserdata] = useState({

       firstname : '',
       lastname : '',
       contact : '',
       whatsapp : '',
       email : '',
       state : '',
       referral : '',
       password : '',
       confirm : ''

   })

   const [isChecked, setIsChecked] = useState(false);
   const [errors, setErrors] = useState({});

  const [toggle , settoggle] = useState(false)


   const handleCheckboxChange = (event) => {
   
    console.log(event.target.checked)
    setIsChecked(event.target.checked);
  };


  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!Userdata.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!Userdata.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!Userdata.contact.trim()) newErrors.contact = "Contact number is required.";
    if (!Userdata.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required.";
    if (!Userdata.email.trim()) newErrors.email = "Email address is required.";
    if (!Userdata.state.trim()) newErrors.state = "State is required.";
    if (!Userdata.password.trim()) newErrors.password = "Password is required.";
    if (!Userdata.confirm.trim()) newErrors.confirm = "Confirm password is required.";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Userdata.email && !emailRegex.test(Userdata.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Validate contact number (example: must be 10 digits)
    if (Userdata.contact && !/^\d{10}$/.test(Userdata.contact)) {
      newErrors.contact = "Contact number must be 10 digits.";
    }

    // Validate WhatsApp number (example: must be 10 digits)
    if (Userdata.whatsapp && !/^\d{10}$/.test(Userdata.whatsapp)) {
      newErrors.whatsapp = "WhatsApp number must be 10 digits.";
    }

    // Validate password length and match
    if (Userdata.password && Userdata.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (Userdata.password !== Userdata.confirm) {
      newErrors.confirm = "Passwords do not match.";
    }

    // Validate terms and conditions checkbox
    if (!isChecked) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };



  const HandleSubmit = async()=>{
    if (validateForm()) {
        console.log("Form submitted successfully!");
        console.log(Userdata);
        // Proceed with form submission (e.g., API call)
       
        try{

            const response = await axios.post(`${SERVER_URL}/signup` , Userdata)

            // console.log(response)

            const {message , redirect} = response.data

            await swal.fire({
                title : 'Success!',
                text : message,
                icon:'success'
            })

              window.location.pathname = `${redirect}`

        }
        catch(error){

            console.error(error)
            await swal.fire({
                title : 'Error!',
                text:error.response.data.message,
                icon:'error'
            })
        }





      } else {
        console.log("Form validation failed.");
      }
  }

const check = ()=>{
      
    settoggle(!toggle)
}





    return (
        <Layout>
            <div className='signup-container'>

                <div className='signup-wallpaper'>

                    <img src='/images/Rectangle 9.svg' />

                </div>


                <div className='signup-form-container'>


                    <div className='signup-form' >

                        <div id='signup-text'>Sign up</div>

                        <p id='signup-p' >Fill in your credentials and click on the the Sign up button</p>


                        <div id='signup-input-group-name'>

                            <div id='first-name' >

                                <span id='first-name-text' >First Name</span>
                                <div class="input-with-icon">
                                    <input id="first-name-input" placeholder="Enter your first name" name='firstname'  onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})} />
                                    <div className='user-profile-icon'>
                                        <img src='/images/profilecircle.svg' id='profile-circle' />
                                        <img src='/images/profileoval.svg' id='profile-oval' />



                                    </div>
                                </div>
                                {errors.firstname && <p className="error-text">{errors.firstname}</p>}
                            </div>



                            <div id='last-name'>
                                <span id='last-name-text' >Last Name</span>
                                <div class="input-with-icon">
                                    <input id="last-name-input" placeholder="Enter your last name" name='lastname' onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})} />
                                    <div className='user-profile-icon'>
                                        <img src='/images/profilecircle.svg' id='profile-circle' />
                                        <img src='/images/profileoval.svg' id='profile-oval' />



                                    </div>
                                </div>

                                {errors.lastname && <p className="error-text">{errors.lastname}</p>}
                            </div>

                        </div>


                        <div id='signup-input-group-contact'>

                            <span id='last-name-text' >Contact No</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your phone number" name='contact' onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})} />
                                <img src='/images/phone.svg' id='contact-logo' />
                            </div>
                            {errors.contact && <p className="error-text">{errors.contact}</p>}
                        </div>

                        <div id='signup-input-group-whatsapp'>
                            <span id='last-name-text' >Whatsapp No</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your Whatsapp number" name='whatsapp' onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})} />
                                <img src='/images/Whatsapp.svg' id='contact-logo' />
                            </div>

                            {errors.whatsapp && <p className="error-text">{errors.whatsapp}</p>}
                        </div>



                        <div id='signup-input-group-email'>
                            <span id='last-name-text' >Email address</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your email address" name='email'  onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})}/>
                                <img src='/images/sms-tracking.svg' id='contact-logo' />
                            </div>

                            {errors.email && <p className="error-text">{errors.email}</p>}

                        </div>


                        <div id='signup-input-group-state'>
                            <span id='last-name-text' >State</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your state" name='state' onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})}/>
                                {/* <img src='/images/Whatsapp.svg' id='contact-logo' /> */}
                            </div>
{errors.state && <p className="error-text">{errors.state}</p>}
                        </div>

                        <div id='signup-input-group-referral'>
                            <span id='last-name-text' >Referral Code</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your Referral"  name='referral' onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})}/>
                                {/* <img src='/images/Whatsapp.svg' id='contact-logo' /> */}
                            </div>

                        </div>

                        <div id='signup-input-group-password'>
                            <span id='last-name-text' >Password</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your password" name='password'  type={`${!toggle ? "password" : ""}`} onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})}/>
                                <div className="user-profile-icon"  onClick={check}>
                                    <div className="password-icon-container">
                                        <img src="/images/eyeoval.svg" id="password-oval" />
                                        <img src="/images/eyecircle.svg" id="password-circle" />
                                    </div>
                                </div>

                            </div>

                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        <div id='signup-input-group-confirm'>
                            <span id='last-name-text' >Confirm Password</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Confirm your password" name='confirm' type={`${!toggle ? "password" : ""}`} onChange={(e)=>setUserdata({...Userdata , [e.target.name]: e.target.value})}/>
                                <div className="user-profile-icon"  onClick={check}>
                                    <div className="password-icon-container">
                                        <img src="/images/eyeoval.svg" id="password-oval" />
                                        <img src="/images/eyecircle.svg" id="password-circle" />
                                    </div>
                                </div>
                               
                            </div>
                            {errors.confirm && <p className="error-text">{errors.confirm}</p>}
                            
                        </div>
                        


                        <div class="checkbox-container">
                            <input type="checkbox" id="terms-checkbox" checked={isChecked}
          onChange={handleCheckboxChange}/>
                            <label for="terms-checkbox" class="checkbox-label">
                                I agree to the <span id='checkbox-span' >Terms and Conditions</span> and <span id='checkbox-span' >Privacy Policy</span>.
                            </label>
                           
                        </div>

                        {errors.terms && <p className="error-text">{errors.terms}</p>}
                    </div>



                   <div className='signup-buttons-con' >

                          <div id='signup-register-button' onClick={HandleSubmit} >
                               <span id='signup-register-text' >Register</span>
                          </div>

                          <div id='signup-login-button' >
                               <span id='signup-login-text' >Login</span>
                          </div>

                   </div>






                </div>

            </div>
        </Layout>
    )
}

export default Signup