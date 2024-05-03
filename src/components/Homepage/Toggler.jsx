import React, { useState } from 'react'
import image1 from "../../assets/about-img-1.jpg"
import image2 from "../../assets/about-img-2.jpg"
import image3 from "../../assets/about-img-3.jpg"
import image4 from "../../assets/about-img-4.jpg"
import image5 from "../../assets/about-img-5.jpg"
import image6 from "../../assets/about-img-6.jpg"
import image7 from "../../assets/about-img-7.jpg"
import image8 from "../../assets/about-img-8.jpg"
import image9 from "../../assets/about-img-9.jpg"

const Toggler = () => {
    const [active, setActive] = useState(0)

    const switchActive = (param) =>{
           setActive(param)
    }
  return (
    <div className='toggle-section'>
            <div className="toggle-btns">
                       <ul>
                              <li className={active === 0 ? 'active' : null} onClick={()=> switchActive(0)}>Our Approach</li>
                              <li className={active === 1 ? 'active' : null} onClick={()=> switchActive(1)}>Our Mission</li>
                              <li className={active === 2 ? 'active' : null} onClick={()=> switchActive(2)}>Our Vision</li>
                       </ul>
            </div>
            <div className="switch-container-row">
                       <div className={active === 0 ? "switch-container-moja active" : "switch-container-moja"}>
                                  <div className="image-side">
                                            <div className="image-one">
                                                    <img src={image1} alt="" />
                                            </div>
                                            <div className="image-two">
                                                     <img src={image2} alt="" />
                                            </div>
                                            <div className="image-three">
                                                     <img src={image3} alt="" />
                                            </div>
                                  </div>
                                  <div className="texty-side">
                                            <div className="texty-inner">
                                                    <h3>Our Expertise</h3>
                                                    <h1>Get the right solution for your needs</h1>

                                                    <p>Aside from resume writing and revamping, career coaching, interview preparation, and LinkedIn profile development that we offer individuals, our team of experts also assists companies in recruiting top talent. </p>
                                                    <p>Whether you are looking to improve your job search efforts or build a strong team, Kazipro has the resources and expertise to support you. Let us help you succeed in today's competitive job market.</p>
                                                    <p>We are a team of proficient experts who have comprehensive knowledge and proficiency in Kenyan Labor Laws. Our team is composed of individuals who possess prestigious certifications such as the Certified Human Resources Professional (CHRP), Project Management Professional (PMP), among others. Furthermore, we are adept at utilizing various methodologies such as Capability Maturity Model Integration (CMMI) and AGILE, indicating our unwavering dedication to excellence in diverse areas. With our team's extensive experience, we are fully equipped to offer exceptional services to our clients.</p>
                                            </div>
                                  </div>
                       </div>
                       <div className={active === 1 ? "switch-container-moja active" : "switch-container-moja"}>
                                  <div className="image-side">
                                            <div className="image-one">
                                                    <img src={image7} alt="" />
                                            </div>
                                            <div className="image-two">
                                                     <img src={image5} alt="" />
                                            </div>
                                            <div className="image-three">
                                                     <img src={image9} alt="" />
                                            </div>
                                  </div>
                                  <div className="texty-side">
                                            <div className="texty-inner">
                                                    <h3>Our Mission</h3>
                                                    <h1>Fast Growing HR Consultancy Firm</h1>

                                                    <p>Helping organizations optimize their human capital by providing expert advice and solutions.</p>
                                                    <p>We strive to deliver the highest quality service to our clients and to be a trusted partner in their HR endeavors.</p>
                                            </div>
                                  </div>
                       </div>
                       <div className={active === 2 ? "switch-container-moja active" : "switch-container-moja"}>
                                  <div className="image-side">
                                            <div className="image-one">
                                                    <img src={image8} alt="" />
                                            </div>
                                            <div className="image-two">
                                                     <img src={image6} alt="" />
                                            </div>
                                            <div className="image-three">
                                                     <img src={image4} alt="" />
                                            </div>
                                  </div>
                                  <div className="texty-side">
                                            <div className="texty-inner">
                                                    <h3>Our Vision</h3>
                                                    <h1>Premier provider of HR solutions</h1>

                                                    <p>Our vision is to be the premier provider of HR solutions for companies of all sizes, empowering them to build strong, productive, and engaged teams that drive business success</p>
                                                    <p>We aim to be a catalyst for positive change in the HR industry and to make a lasting impact on the organizations and the people we serve..</p>
                                            </div>
                                  </div>
                       </div>
            </div>
    </div>
  )
}

export default Toggler