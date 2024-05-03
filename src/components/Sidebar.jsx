import React from 'react'
import logo from "../assets/logo.png"
import { IoCloseOutline } from "react-icons/io5"
import { HashLink } from 'react-router-hash-link'
import { NavLink, useLocation } from 'react-router-dom'
const Sidebar = ( { data, func }) => {
   const locator = useLocation()
   const exactLocation = locator.pathname.slice(1,8)
  return (
    <div className={ data ? 'sidebar active' : 'sidebar'}>
             <div className="inner-row">
                      <div className="sidebar-content">
                               <div className="sidebar-top">
                                       <div className="logo">
                                                <a href="s">
                                                      <img src={logo} alt="" />
                                                </a>
                                        </div>
                                        <div className="sidebar-close" onClick={func}>
                                                 <span><IoCloseOutline /></span>
                                        </div>
                               </div>
                               <div className="sidebar-nav">
                                       <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li> <HashLink smooth to="/#about">About Us</HashLink></li>
                                                <li><HashLink smooth to="/#services" className={exactLocation === 'service' ? "active" : null}>Services</HashLink></li>
                                                 <li> <HashLink smooth to="/#contact">Contact Us</HashLink></li>
                                       </ul>
                                       <div className="call-to-action">
                                                  <HashLink smooth to="/#contact">Make an Appointment</HashLink>
                                       </div>
                               </div>
                      </div>
             </div>
    </div>
  )
}

export default Sidebar