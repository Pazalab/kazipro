import { IoCheckmarkOutline } from "react-icons/io5"
import { TiLeaf } from "react-icons/ti"
import { BsLightningCharge } from "react-icons/bs"
import { GiStarMedal } from "react-icons/gi"
import { HashLink } from 'react-router-hash-link'
import { useState } from "react"
import { MdOutlineStarRate } from "react-icons/md";

const Pricing = () => {
      const [basic, setBasic] = useState(3500)
      const [standard, setStandard] = useState(4500)
      const [premium, setPremium] = useState(6500)
      const [executive, setExecutive] = useState(8000)
      const checkBasicPricing = (param) => {
              if(param == '0-5'){
                     setBasic(3500)
              } else if(param == '6-10'){
                     setBasic(5500)
              }else{
                     setBasic(6500)
              }
      }
      const checkStandardPricing = (param) => {
              if(param == '0-5'){
                    setStandard(4500)
              }else if(param == '6-10'){
                    setStandard(6500)
              }else{
                   setStandard(7500)
              }
      }
      const checkPremiumPricing = (param) => {
              if(param == '0-5'){
                    setPremium(6500)
              }else if(param == '6-10'){
                    setPremium(8500)
              }else{
                    setPremium(9500)
              }
      }
      const checkExecutivePricing = (param) => {
              if(param == '0-5'){
                    setExecutive(8000)
              }else if(param == '6-10'){
                   setExecutive(10000)
              }else{
                    setExecutive(15000)
              }
      }
  return (
    <div id="pricing" className='pricing-section'>
             <div className="pricing-content">
                       <div className="top-intro">
                              <h1>Ready to Get Started?</h1>
                              <p>We understand that every person has unique needs. That&apos;s why we offer a range of service plans designed to perfectly match your goals and budget. Here&apos;s how we can help you achieve success:</p>
                       </div>

                       <div className="pricing-content-row">
                                 <div className="pricing-moja">
                                          <h4><span><TiLeaf /></span> Basic</h4>
                                          <h6>Perfect for starters</h6>
                                           <select onChange={(e) => checkBasicPricing(e.target.value)}>
                                                       <option value="0-5">0 to 5 years of Experience</option>
                                                       <option value="6-10">6 to 10 years of Experience</option>
                                                       <option value="11-20">11 to 20 years of Experience</option>
                                           </select>
                                          <div className="price">
                                                   <span className="pricing-icon">Kshs.</span>
                                                   <h5>{basic.toLocaleString()} /=</h5>
                                                   
                                          </div>

                                          <h4>Basic Includes :</h4>
                                          <ul>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Modern CV
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        ATS Formatting
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        LinkedIn Development
                                                  </li>
                                          </ul>

                                          <HashLink smooth to="/#contact">Get Started</HashLink>
                                 </div>

                                 <div className="pricing-moja">
                                          <h4><span><GiStarMedal /></span> Standard</h4>
                                          <h6>Perfect for Intermediates</h6>
                                          <select onChange={(e) => checkStandardPricing(e.target.value)}>
                                                       <option value="0-5">0 to 5 years of Experience</option>
                                                       <option value="6-10">6 to 10 years of Experience</option>
                                                       <option value="11-20">11 to 20 years of Experience</option>
                                           </select>
                                          <div className="price">
                                                   <span className="pricing-icon">Kshs.</span>
                                                   <h5>{standard.toLocaleString()} /=</h5>
                                                   
                                          </div>

                                          <h4>Standard Includes :</h4>
                                          <ul>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Modern CV
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        ATS Formatting
                                                  </li>
                                                  <li>
                                                         <span><IoCheckmarkOutline /></span>
                                                         Cover Letter
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        LinkedIn Development
                                                  </li>
                                          </ul>

                                          <HashLink smooth to="/#contact">Get Started</HashLink>
                                 </div>

                                 <div className="pricing-moja">
                                          <h4><span><BsLightningCharge /></span> Premium</h4>
                                          <h6>Best for Professionals</h6>
                                          <select onChange={(e) => checkPremiumPricing(e.target.value)}>
                                                       <option value="0-5">0 to 5 years of Experience</option>
                                                       <option value="6-10">6 to 10 years of Experience</option>
                                                       <option value="11-20">11 to 20 years of Experience</option>
                                           </select>
                                          <div className="price">
                                                   <span className="pricing-icon">Kshs.</span>
                                                   <h5>{premium.toLocaleString()} /=</h5>
                                                   
                                          </div>

                                          <h4>Premium Includes :</h4>
                                          <ul>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Modern CV
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        ATS Formatting
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Cover Letter
                                                  </li>
                                                  <li>
                                                         <span><IoCheckmarkOutline /></span>
                                                         Professional Bio
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        LinkedIn Development
                                                  </li>
                                          </ul>

                                          <HashLink smooth to="/#contact">Get Started</HashLink>
                                 </div>

                                 <div className="pricing-moja">
                                          <h4><span><MdOutlineStarRate /></span> Executive</h4>
                                          {/* <h6>Best for Professionals</h6> */}
                                          {/* <select onChange={(e) => checkExecutivePricing(e.target.value)}>
                                                       <option value="0-5">0 to 5 years of Experience</option>
                                                       <option value="6-10">6 to 10 years of Experience</option>
                                                       <option value="11-20">11 to 20 years of Experience</option>
                                           </select> */}
                                           <h2>Starting From</h2>
                                          <div className="price">
                                                   <span className="pricing-icon">Kshs.</span>
                                                   <h5>{executive.toLocaleString()} /=</h5>
                                                   
                                          </div>

                                          <h4>Premium Includes :</h4>
                                          <ul>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Modern CV
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        ATS Formatting
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        Cover Letter
                                                  </li>
                                                  <li>
                                                         <span><IoCheckmarkOutline /></span>
                                                         Professional Bio
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        LinkedIn Development
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        One-on-one Interview coaching session
                                                  </li>
                                                  <li>
                                                        <span><IoCheckmarkOutline /></span>
                                                        One-year exclusive access for a CV Rewrites/ Linkedin Optimization and Cover letters.
                                                  </li>
                                          </ul>

                                          <HashLink smooth to="/#contact">Get Started</HashLink>
                                 </div>
                       </div>

                       {/* <div className="extra-pricing-details">
                               <div className="pricing-moja-moto">
                                        <h3>Career coaching</h3>
                                        <p>KaziPro charges <span>Ksh. 5,000</span> per hour for their full career coaching
process which involves assessing the individual&apos;s current skills and experience, identifying areas
for improvement, setting goals, creating a plan to achieve those goals, and providing support and
guidance throughout the process.</p>
                               </div>
                               <div className="pricing-moja-moto">
                                        <h3>Interview Preparation</h3>
                                        <p>KaziPro charges <span>Ksh.
3,000 </span> per hour for their full interview coaching process which involves reviewing the individual&apos;s resume and cover letter, practicing answering
common interview questions, discussing strategies for answering behavioral and situational questions,
providing feedback on the individual&apos;s interviewing style and body language, and helping the individual
prepare for any specific questions or scenarios that may come up in the interview.</p>
                               </div>
                       </div> */}
             </div>
    </div>
  )
}

export default Pricing