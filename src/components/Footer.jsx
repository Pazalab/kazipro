import React, { useState } from 'react'
import { MdCall } from 'react-icons/md'
import { HiOutlineEnvelopeOpen } from "react-icons/hi2"
import { SlLocationPin } from "react-icons/sl"
import { FiChevronRight } from 'react-icons/fi'
import { FaFacebookF } from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5"

const Footer = () => {
        const [cookie, setCookie]  = useState(false)
        const [policy, setPolicy] = useState(false)
        const openCookie = () =>{
                 setCookie(!cookie)
        }
        const openPolicy = () =>{
                setPolicy(!policy)
        }
  return (
    <footer>
            <div className="inner-row">
                  <div className="footer-content">
                            {/* <div className="newsletter-section">
                                     <h3>Subscribe to our Newsletter</h3>
                                     <form action="" method="post">
                                             <input type="email" placeholder="Your Email" className="form-control" />
                                             <input type="submit" value="Subscribe" className='form-btn' />
                                     </form>
                            </div> */}
                            <div className={ cookie ? 'cookie-box active' : 'cookie-box'}>
                                      <span onClick={openCookie}><IoCloseOutline /></span>
                                      <h4>Cookie Policy</h4>
                                     <p>KaziPro uses cookies and similar technologies to improve the user experience on our website. A cookie is a small text file that is stored on your device when you visit our website. We use cookies for analytics, to personalize content and ads, and to remember your preferences. By using our website, you consent to our use of cookies. You can manage your cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.</p>
                            </div>

                            <div className={ policy ? "privacy-policy active" : 'privacy-policy'}>
                                    <h2>Privacy Policy</h2>
                                    <span onClick={openPolicy} className="btn"><IoCloseOutline /></span>
                                    <div className="policy-description">
                                            <p>At KaziPro, we are committed to protecting the privacy and security of our users' personal information. This privacy policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
                                            <p><span>Information We Collect:</span> We collect personal information, such as your name, email address, and phone number, when you voluntarily provide it to us. We may also collect non-personal information such as your IP address, browser type, and operating system.</p>
                                            <p><span>How We Use Your Information:</span> We use your personal information to provide our services, process payments, and communicate with you. We may also use your information to improve our services, send you marketing communications, and comply with legal obligations.</p>
                                            <p><span>How We Share Your Information:</span> We do not sell or rent your personal information to third parties. We may share your information with our service providers, such as payment processors and customer support providers, who help us provide our services. We may also share your information with law enforcement or regulatory authorities as required by law.</p>
                                            <p><span>How We Protect Your Information:</span> We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
                                            <p><span>Your Choices: </span> You can choose not to provide us with certain information, but this may limit your ability to use our services. You can also opt-out of receiving marketing communications from us at any time.</p>
                                            <p><span>Updates to our Privacy Policy: </span>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
                                            <p><span>Contact Us: </span>If you have any questions or concerns about our privacy policy, please contact us at support@kazipro.co.ke</p>
                                            <p>By using our services, you agree to the terms of this privacy policy.</p>
                                    </div>
                            </div>
                            <div className="footer-section">
                                     <div className="footer-column">
                                              <div className="footer-title">
                                                        <h2>Reach Us</h2>
                                              </div>
                                              <ul>
                                                     <li>
                                                            <span><MdCall /></span>
                                                            <h3>+254 706 311 173 </h3>
                                                     </li>
                                                      <li>
                                                             <span><HiOutlineEnvelopeOpen /></span>
                                                             <h3>support@kazipro.co.ke</h3>
                                                      </li>
                                                      {/* <li>
                                                             <span><SlLocationPin /></span>
                                                             <h3>Worldwide</h3>
                                                      </li> */}
                                              </ul>
                                     </div>
                                     <div className="footer-column services">
                                             <div className="footer-title">
                                                      <h2>HR Services</h2>
                                             </div>
                                             <ul>
                                                    <li>
                                                          <span><FiChevronRight /></span>
                                                          <NavLink to={"/service/recruitment-for-companies"} >Recruitement</NavLink>
                                                    </li>
                                                    <li>
                                                          <span><FiChevronRight /></span>
                                                          <NavLink to={"/service/resume-revamping"}>Resume Revamping</NavLink>
                                                    </li>
                                                    <li>
                                                          <span><FiChevronRight /></span>
                                                          <NavLink to={"/service/career-coaching"}>Career Coaching</NavLink>
                                                    </li>
                                                    <li>
                                                          <span><FiChevronRight /></span>
                                                          <NavLink to={'/service/linkedin-profile-development'}>LinkedIn Development</NavLink>
                                                    </li>
                                             </ul>
                                     </div>
                                     <div className="footer-column">
                                              <div className="footer-title">
                                                      <h2>Connect with Us</h2>
                                              </div>
                                              <div className="footer-social-links">
                                                      <ul>
                                                                <li><a href="https://web.facebook.com/profile.php?id=100089086238772"><FaFacebookF /></a></li>
                                                                 <li><a href="https://www.linkedin.com/in/kazi-pro-706599257"><FaLinkedinIn /></a></li>
                                                                <li><a href="https://www.instagram.com/kazi_pro"><AiFillInstagram /></a></li>
                                                      </ul>
                                              </div>
                                              <p>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                                     </div>
                            </div>

                            
                  </div>
                  <div className="copyright-section">
                        <p> All rights reserved &copy; { new Date().getFullYear() } Kazipro. </p>
                                 <div className="policy-part">
                                        <p onClick={openPolicy}>Privacy Policy</p>
                                        <p onClick={openCookie}>Cookie Policy</p>
                                </div>
                    </div>
            </div>
    </footer>
  )
}

export default Footer