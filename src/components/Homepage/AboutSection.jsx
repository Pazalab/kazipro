import React from 'react'
import { reasons } from '../../data/reasons'
import Toggler from './Toggler'

const AboutSection = () => {
  return (
    <div className='about-section'>
               <div className="inner-row">
                       <div className="about-section-content">
                                <div className="about-text-row">
                                        <div className="about-text-column texty">
                                                  <h2>KaziPro is well-organized, allowing us to handle multiple projects and clients at the same time.
                                                 </h2>
                                        </div>    
                                        { reasons.map(reason => 
                                                 <div className='about-text-column' key={reason.reason_no}> 
                                                            <div className="icon-section">
                                                                     <img src={reason.reason_icon} alt="" />
                                                            </div>
                                                            <div className="reason-text">
                                                                     <h2>{reason.reason_title}</h2>
                                                                     <p>{reason.reason_description}</p>
                                                            </div>
                                                 </div>
                                            )}
                                </div>
                       </div>

                       <Toggler />
               </div>
    </div>
  )
}

export default AboutSection