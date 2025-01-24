import React from "react";
import { NavLink } from "react-router-dom";
import "./Asidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="virtox-logo">
          <img src="/images/virtox.svg"/>
      </div>
      <div className="sidebar-nav">
        <ul>
          

          <li>
            <NavLink to="user-list" activeClassName="active-link">
              <span id='nav-link-text-1' >User List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="transaction-list" activeClassName="active-link">
             <span id='nav-link-text-2'> Transaction List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="video-management" activeClassName="active-link">
             <span id='nav-link-text-3' > Video Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="top-receivers-list" activeClassName="active-link">
              <span id='nav-link-text-4' >Top Receivers List</span>
            </NavLink>
          </li>

          <li>
          <NavLink to="/" activeClassName="active-link">
              <span id='nav-link-text-4' >SIgn out</span>
            </NavLink>


            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
