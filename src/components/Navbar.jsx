import { useState } from 'react'
import { SlEnvolopeLetter } from "react-icons/sl"
import { SlLocationPin } from "react-icons/sl"
import { FaFacebookF } from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import  { HiOutlineMenuAlt1 } from "react-icons/hi"
import { HashLink } from 'react-router-hash-link'
import logo from "../assets/logo.png"
import Sidebar from './Sidebar'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
   const [active, setActive] = useState(false)

   const handleClick = () =>{
            setActive(!active)
   }

   const locator = useLocation()
   const exactLocation = locator.pathname.slice(1,8)

  return (
    <div className={exactLocation === 'service' ? 'header special' : 'header'}>
             <div className="inner-row">
                     <div className="topbar">
                             <div className="quick-contact">
                                      <div className="quick-email">
                                              <span><SlEnvolopeLetter /></span>
                                              <p>support@kazipro.co.ke</p>
                                      </div>
                                      <div className="quick-location">
                                              <span><SlLocationPin /></span>
                                              <p>Nairobi CBD / Westlands</p>
                                      </div>
                             </div>
                             <div className="quick-socials">
                                        <p>Get in Touch: </p>
                                        <ul>
                                               <li><a href="https://web.facebook.com/profile.php?id=100089086238772"><span><FaFacebookF /></span></a></li>
                                               <li><a href="https://www.linkedin.com/in/kazi-pro-706599257"><span><FaLinkedinIn /></span></a></li>
                                               <li><a href="https://www.instagram.com/kazi_pro"><span><AiFillInstagram /></span></a></li>
                                        </ul>
                             </div>
                     </div>
                     <header>
                             <div className="inner-row">
                                     <div className="header-content">
                                             <div className="logo">
                                                    <a href="/">
                                                           <img src={logo} alt="" />
                                                    </a>
                                            </div>
                                            <nav>
                                                    <ul>
                                                           <li><NavLink to="/">Home</NavLink></li>
                                                           <li> <HashLink smooth to="/#about">About Us</HashLink></li>
                                                           <li><HashLink smooth to="/#services" className={exactLocation === 'service' ? "active" : null}>Services</HashLink></li>
                                                           <li> <HashLink smooth to="/#contact">Contact Us</HashLink></li>
                                                    </ul>
                                            </nav>

                                             <div className="nav-contacts">
                                                       <div className="call-to-action-btn">
                                                                 <HashLink smooth to="/#contact">Make an Appointment</HashLink>
                                                       </div>
                                             </div>

                                             <div className="navTrigger" onClick={handleClick}>
                                                      <span><HiOutlineMenuAlt1 /></span>
                                             </div>
                                     </div>
                             </div>
                     </header>
             </div>

             <Sidebar data={active} func={handleClick} />
    </div>

  )
}

export default Navbar