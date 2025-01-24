import React, { useState } from 'react';
import './Viewedit.css';
import axios from 'axios';
import { SERVER_URL } from '../URL';
import Swal from 'sweetalert2'

function Viewedit({ isOpen, onClose ,data , onUpdate}) {

  
  
  const [Userdata , setuserdata] = useState({
        
         name : data.UT_First_Name,
         email : data.UT_Email,
         phone : data.UT_Contact_Number,
         ID : data._id
  })


  const UpdateDetails = async()=>{

         

         try{

                const response = await axios.put(`${SERVER_URL}/update` , Userdata)
                 
                const {message} = response.data

                Swal.fire({
                      title : 'Success',
                      text : message,
                      icon : 'success'  
                })

           onUpdate()

         }

         catch(error){

                Swal.fire({
                        title : 'error',
                        text : error.response.data.message,
                        icon : 'error'  
                  })
                  

         }

  }







  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
      
        <div className='modal-nav' >
 
               <span id='modal-nav-text' >View & Edit List</span>

               
        </div>

     


        <div  className='modal-form-con' >

               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Name</span>
                       <input id='first-input' name='name' value={Userdata.name}  onChange={(e)=>setuserdata({...Userdata , [e.target.name] : e.target.value})} />
               </div>


               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Email</span>
                       <input id='first-input' name='email' value={Userdata.email}  onChange={(e)=>setuserdata({...Userdata , [e.target.name] : e.target.value})}/>
               </div>

               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Phone</span>
                       <input id='first-input' name='phone'  value={Userdata.phone}  onChange={(e)=>setuserdata({...Userdata , [e.target.name] : e.target.value})}/>
               </div>


               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Referred By</span>
                       <input id='first-input' disabled={true} />
               </div>


               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Business Promoters</span>
                       <input id='first-input' disabled={true} />
               </div>


               <div id='modal-first-input-con'>
                       <span id='modal-first-input-text'>Business Income</span>
                       <input id='first-input' disabled={true} />
               </div>

        </div>


        <div className='viewedit-button-con'>

        <div className='view-button'  onClick={onClose}>

<span id='view-button-text'  >Close</span>
</div>


<div className='view-button'  onClick={UpdateDetails}>

            <span id='view-button-text'  >Save Changes</span>
        </div>


        </div>


      </div>
    </div>
  );
}

export default Viewedit;
