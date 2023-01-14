import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import "./Dashboard.css";

const Dashboard = ({children}) => {
    const [toggle, setToggle]= useState(false);
    
    


  return (
    <div>
      <header>
        <div onClick={()=> setToggle(!toggle)} className="logosec">
          
          <img
            src="https://i.ibb.co/0YMpbT0/Untitled-design-30.png"
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
          />
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img
              src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
              className="icn srchicn"
              alt="search-icon"
            />
          </div>
        </div>

        <div className="message">
          <div className="circle"></div>
          <img
            src="https://i.ibb.co/qs4QtHf/8.png"
            className="icn"
            alt=""
          />
          <div className="dp">
            <img
              src="https://i.ibb.co/9rcGLKG/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>

      <div className="main-container">
        <div className={toggle ? "navcontainer navclose":"navcontainer "}>
          <nav className="nav">
            <div className="nav-upper-options">
            <Link to="/">
              <div className="nav-option option1">
              <MdDashboard className="text-3xl"></MdDashboard>
                
                <h3> Dashboard</h3>
                
              </div>
              </Link>
              <Link to='/attendance'>
              <div className="option2 nav-option">
                
                <img
                  src="https://i.ibb.co/w6TmPMM/9.png"
                  className="nav-img"
                  alt="articles"
                />
                <h3 className="text-white hover:text-gray-800"> Attendance</h3>
                
              </div>
              </Link>

              <div className="nav-option option3">
                <img
                  src="https://i.ibb.co/1ZNpvYK/5.png"
                  className="nav-img"
                  alt="report"
                />
                <h3 className="text-white hover:text-gray-800">Employees</h3>
              </div>

              <div className="nav-option option4">
                <img
                  src="https://i.ibb.co/Cs2bvXv/6.png"
                  className="nav-img"
                  alt="institution"
                />
                <h3 className="text-white hover:text-gray-800">Leaves</h3>
              </div>

              <div className="nav-option option5">
                <img
                  src="https://i.ibb.co/ZNQzLfC/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3 className="text-white hover:text-gray-800"> Expense</h3>
              </div>
              <div className="nav-option option5">
                <img
                  src="https://i.ibb.co/ZNQzLfC/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3 className="text-white hover:text-gray-800"> Notice</h3>
              </div>
              <div className="nav-option option5">
                <img
                  src="https://i.ibb.co/ZNQzLfC/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3 className="text-white hover:text-gray-800"> Departments</h3>
              </div>
             
              <div className="nav-option option6">
                <img
                  src="https://i.ibb.co/nC91Ty6/4.png"
                  className="nav-img"
                  alt="settings"
                />
                <h3 className="text-white hover:text-gray-800"> 
                <div className="flex items-center gap-5">
                  <p>Settings</p>
                  
                  </div>  </h3>
               
              
              

              </div>
              
              
              

              <div className="nav-option logout">
                <img
                  src="https://i.ibb.co/NK4pb43/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3 className="text-white hover:text-gray-800">Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="searchbar2">
            <input type="text" name="" id="" placeholder="Search" />
            <div className="searchbtn">
              <img
                src="https://i.ibb.co/1mvyLPD/Untitled-design-28.png"
                className="icn srchicn"
                alt="search-button"
              />
            </div>
          </div>
        <Outlet>

        </Outlet>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
