import React,{useState} from 'react'
import Layout from '../components/Layout'
import './Login.css'
import { SERVER_URL } from '../URL';
import axios from 'axios'
import swal from 'sweetalert2'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const [toggle , settoggle] = useState(false)

    const validateForm = () => {
        const validationErrors = {};
    
        // Email Validation
        if (!email) {
          validationErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          validationErrors.email = 'Please enter a valid email address.';
        }
    
        // Password Validation
        if (!password) {
          validationErrors.password = 'Password is required.';
        } else if (password.length < 6) {
          validationErrors.password = 'Password must be at least 6 characters.';
        }
    
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
      };


      const handleLogin = async() => {
        if (validateForm()) {
          console.log('Form submitted:', { email, password });
          // Add your login API call or logic here
          try{

              const response = await axios.post(`${SERVER_URL}/login`,{email , password})

              console.log(response)
                      const {message , redirect, Admin , User_Email} = response.data

                          if(Admin){
                            localStorage.setItem('Admin_Email' , Admin)
                          }

                          if(User_Email){
                            localStorage.setItem('User_Email' , User_Email)
                          }

              
                          await swal.fire({
                              title : 'Success!',
                              text : message,
                              icon:'success'
                          })

                          window.location.pathname = `${redirect}`
          }
          catch(error){
            console.error("Error during login:", error.message);
            // Handle error (e.g., display error message to the user)
            await swal.fire({
                            title : 'Error!',
                            text:error.response.data.message,
                            icon:'error'
                        })
          }

        }
      };


const check = ()=>{
      
    settoggle(!toggle)
}


  return (
    <Layout>

 <div  className='login-container'>


              <div className='login-wallpaper' >

                  <img src='/images/loginrect.svg' />

              </div>

              <div  className='login-form-container' >

                   <div id='login-form'>

                   <div id='signup-text'>Login</div>

                   <p id='signup-p' >Fill in your credentials and click on the the Sign up button</p>


                   <div id='signup-input-group-email'>
                            <span id='last-name-text' >Email address</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your email address"  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                                <img src='/images/sms-tracking.svg' id='contact-logo' />
                            </div>
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>


                        <div id='signup-input-group-password'>
                            <span id='last-name-text' >Password</span>
                            <div class="input-with-icon">
                                <input id="contact-input" placeholder="Enter your password"  value={password}
                  onChange={(e) => setPassword(e.target.value)}  type={`${!toggle ? "password" : ""}`} />
                                <div className="user-profile-icon"  onClick={check}>
                                    <div className="password-icon-container"  >
                                        <img src="/images/eyeoval.svg" id="password-oval" />
                                        <img src="/images/eyecircle.svg" id="password-circle" />
                                    </div>
                                </div>

                            </div>

                            {errors.password && <p className="error-text">{errors.password}</p>}

                        </div>


                        <a id='forgot-password'>Forgot Password?</a>

                   </div>



                   <div className='login-button'  onClick={handleLogin}>
                    <span id='login-button-text'>Login</span>
                   </div>


                   <p id='login-para' >Don’t have an account? <span id='login-a-p' ><a>Sign Up</a></span></p>

              </div>

 </div>
      
    </Layout>
    
  )
}

export default Login