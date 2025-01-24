import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './Loginandsignup/Body';
import Login from './Loginandsignup/Login';
import Signup from './Loginandsignup/Signup';


import Atransaction from './Admin/Atransaction';
import Adashboard from './Admin/Adashboard';
import UserList from './Admin/UserList';
import UserDashboard from './User/UserDashboard';



function App() {
  return (
    <Router>
 
      <Routes>
        <Route path="/login" element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}></Route>
        <Route path='/' element = {<Body/>} ></Route>
        <Route path="/admin" element={<Adashboard/>}>
        
        <Route path="user-list" element={<UserList/>} />
        <Route path='transaction' element = {<Atransaction/>} ></Route>
        </Route>

        <Route path='/user' element = {<UserDashboard/>} ></Route>
        
        {/* Other routes */}
      </Routes>
  
    </Router>
  );
}

export default App;
