// UserList.js
import React from "react";
import "./Adashboard.css";
import Sidebar from "./Asidebar";
import { Outlet } from "react-router-dom";

const Adashboard = () => {
    

     const AdminExists = localStorage.getItem('Admin_Email')


     if(!AdminExists){

           return <h1>You don't have proper access to view the content</h1>
     }







    return (
        <div className="dashboard-con">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="user-list-con">

                <div className="main-content">

                    <div id='main-content-text-con'>

                        <div id='main-content-text-1' >Dashboard</div>
                        <p id='main-content-text-2'  >01 - 25 March, 2020</p>
                    </div>



                    <div className="stats-con" >
                        <img src="/images/Stats.svg" />
                    </div>
                </div>




                <div className="dynamic-content" >
                <Outlet /> 
                </div>






            </div>
        </div>
    );
};

export default Adashboard;
