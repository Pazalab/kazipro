import React from 'react'
import { minorServices } from '../../data/minor-services'
import { CgArrowLongRight } from "react-icons/cg"
import { NavLink } from 'react-router-dom'
import Pricing from './Pricing'
const Services = () => {
  return (
    <div id="services" className='services-section'>
             <div className="inner-row">
                       <div className="services-section-content">
                                <h2>What we do</h2>
                                <h1>Our Exclusive Services</h1>

                                <div className="services-section-row">
                                          { minorServices.map((ms, i) => 
                                                <div className="service-moja" key={i}>
                                                      <div className="service-icon">
                                                                <img src={ms.service_icon} alt="" />
                                                      </div>
                                                      <h3>{ms.service_title}</h3>
                                                      <p>{ms.service_description}</p>
                                               </div>
                                            )}
                                            <div className="service-btn">
                                                      <NavLink to="/service/recruitment-for-companies">
                                                              <div className="service-b">
                                                                       <div className="service-b-container">
                                                                               <span><CgArrowLongRight /></span>
                                                                       </div>
                                                                       <h4>View All Services</h4>
                                                              </div>
                                                      </NavLink>
                                            </div>
                                </div>

                                
                       </div>
             </div>
    </div>
  )
}

export default Services