// import React, { useEffect, useState } from 'react'
// import './UserList.css'
// import axios from 'axios'
// import {SERVER_URL} from '../URL'

// function UserList() {

//     const users = [
//         { name: "Pavithri", email: "shimnaseedaran@gmail.com", phone: "9605854176", status: "Active" },
//         { name: "Shimna", email: "kkousaly73@gmail.com", phone: "7034124557", status: "Active" },
//         { name: "Saranya", email: "kkousaly73@gmail.com", phone: "9037580097", status: "Active" },
//         { name: "Nidheesh Kumar", email: "kkousaly73@gmail.com", phone: "9037580097", status: "Active" },
//         { name: "Trust", email: "kkousaly73@gmail.com", phone: "9037580097", status: "Active" },
//         { name: "Lorem", email: "kkousaly73@gmail.com", phone: "9037580097", status: "Active" },
//       ];


//   const [Userdata , setUserdata] = useState([])

//   const FetchAllUsers = async()=>{

//       try{
         
//           const response = await axios.get(`${SERVER_URL}/all`)

//           setUserdata(response.data)
//       }

//       catch(error){
//         console.error(error)
//       }
//   }


//   useEffect(()=>{

//          FetchAllUsers()     

//   },[])


//   return (
//     <div className='user-list-container'>
//           <div className='user-list-heading' >User list</div>
//           <div className="search-bar">
//             <input type="text" placeholder="Search..." />
//             <div className='search-bar-button'>
//                  <img src='/images/Search.svg' id='search-icon'/>
//             </div>
//           </div>

//         <section className="user-list-section">
        
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Status</th>
//                 <th>View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.status}</td>
//                   <td><button>View</button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//     </div>
//   )
// }

// export default UserList



import React, { useEffect, useState } from 'react';
import './UserList.css';
import axios from 'axios';
import { SERVER_URL } from '../URL';
import Viewedit from './Viewedit';

function UserList() {
  const [Userdata, setUserdata] = useState([]);

  const [showPopup , setshowpopup] = useState(false)

  const [Particular , setparticular] = useState({})

  const OpenModal = (user)=>{
    
    setparticular(user)
 

    setshowpopup(true)
  }

  const CloseModal = ()=>{
     setshowpopup(false)
  }

  const FetchAllUsers = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/all`);
      setUserdata(response.data); // Assuming the API returns an array of user objects
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchAllUsers();
  }, []);

  return (
    <div className="user-list-container">
      <div className="user-list-heading">User List</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <div className="search-bar-button">
          <img src="/images/Search.svg" id="search-icon" alt="Search Icon" />
        </div>
      </div>

      {showPopup && <Viewedit isOpen={showPopup} data = {Particular} onClose={CloseModal}/>}

      <section className="user-list-section">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {Userdata.length > 0 ? (
              Userdata.map((user, index) => (
                <tr key={index}>
                  <td>{user.UT_First_Name} {user.UT_Last_Name}</td>
                  <td>{user.UT_Email}</td>
                  <td>{user.UT_Contact_Number}</td>
                  <td>{user.status || 'Active'}</td>
                  <td onClick={()=>OpenModal(user)}><button>View</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Users Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default UserList;
