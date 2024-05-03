import React from 'react'
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2"
import { HashLink } from 'react-router-hash-link'

const HeroSection = () => {
  return (
    <div className='hero-section'>
            <div className="inner-row">
                     <div className="hero-section-content">
                               <div className="words-column">
                                        <div className="words-column-inner">
                                               <div className="hr-pop">
                                                        <p>HR consultancy firm</p>
                                               </div>
                                               <h1>Helping individuals and businesses reach their career goals.</h1>
                                               <p className='tag'>We specialize in resume writing and revamping, career coaching, interview preparation, and LinkedIn profile development.</p>

                                               <div className="btn-section">
                                                          <HashLink smooth to={"/#contact"}>Get in Touch</HashLink>
                                                          <div className="contact-number">
                                                                   <span><HiOutlinePhoneArrowDownLeft /></span>
                                                                   <div className="number-text">
                                                                            <p>Phone Number</p>
                                                                            <h3>+254 706 311 173 </h3>
                                                                   </div>
                                                          </div>
                                               </div>
                                        </div>
                               </div>
                               <div className="picture-column">
                                        <div className="hero-image">
                                              <div className="hero-image-container">
                                                      <div className="hero-image-picture"></div>     
                                              </div>   
                                               <div className="ripple-borders">
                                                         <div className="ripple-border"></div>
                                                         <div className="ripple-border"></div>
                                                         <div className="ripple-border"></div>
                                                         <div className="ripple-border"></div>
                                               </div>
                                       </div>
                               </div>
                     </div>
            </div>
    </div>
  )
}

export default HeroSection