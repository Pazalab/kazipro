import  { useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { initialFormState,formReducer } from '../../utils/form'
import { useReducer } from 'react'
import { useRef } from 'react'

const Contact = () => {
  const [response, setResponse] = useState('')
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const captchaRef = useRef()

  const sendEmail = (e) => {
        e.preventDefault();
        
        const token = captchaRef.current.getValue()
        const template_params = {
                ...formState,
                'g-recaptcha-response':  token
        }
        
        emailjs.send(
                import.meta.env.VITE_REACT_APP_SERVICE_ID,
                import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
                template_params,
                import.meta.env.VITE_REACT_APP_EMAIL_KEY,
        ).then((result) =>{
                setResponse("Your Email has been sent successfully. Thank you.")
                e.target.reset()
                captchaRef.current.reset();
        }, (err) =>{
                setResponse("Sorry. Your email  was not sent. Please try again.")
        })
  }

  setTimeout(()=>{
          setResponse("")
  }, 4000)
  return (
    <div id="contact" className='contact-section'>
              <div className="inner-row">
                       <div className="contact-section-content">
                                 <div className="contact-description">
                                           <h3>Get in Touch</h3>
                                           <h1>Send us a message</h1>
                                           <p>Feel free to contact us whenever you have any questions or would like clarifications about our services. We are open to serve you.</p>

                                           <form onSubmit={sendEmail} >
                                                    <div className="form-row">
                                                              <div className="form-column">
                                                                       <input type="text" name="user_name" className="form-control" placeholder='Full Name'
                                                                       
                                                                       onChange={(e) => dispatch({ type: 'name', value: e.target.value })} required
                                                                       />
                                                                       
                                                              </div>
                                                              <div className="form-column">
                                                                       <input type="email" name="user_email" className="form-control" placeholder='Email Address'
                                                                       
                                                                       onChange={(e) => dispatch({ type: 'email' , value: e.target.value })}
                                                                       />
                                                              </div>
                                                    </div>
                                                    <div className="form-row">
                                                                <div className="form-column">
                                                                          <input type="number" name="user_phone" className="form-control"  placeholder='Phone Number'
                                                                        
                                                                          onChange={(e) => dispatch({ type: 'phone', value: e.target.value})} required
                                                                          />
                                                                </div>
                                                                <div className="form-column">
                                                                          <select name="user_query" className="form-control" 
                                                                           
                                                                          onChange={(e) => dispatch({ type: 'query' , value: e.target.value})} required>
                                                                                  <option value="">Select Service</option>
                                                                                  <option value="General Inquiry">General Inquiry</option>
                                                                                  <option value="Subscription">Subscription</option>
                                                                                  <option value="Recruitment">Recruitment</option>
                                                                                  <option value="LInkedIn Development">LinkedIn Development</option>
                                                                                  <option value="Career Coaching">Career Coaching</option>
                                                                                  <option value="Interview Preparation">Interview Preparation</option>
                                                                          </select>
                                                                </div>
                                                    </div>
                                                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message'  onChange={(e) => dispatch({ type: 'message', value: e.target.value})}></textarea>
                                                    <ReCAPTCHA  sitekey={import.meta.env.VITE_REACT_APP_CAPTCHA_KEY} ref={captchaRef} />
                                                    <button type="submit">Submit now</button>
                                                    
                                           </form>
                                          
                                           <p className='response'>{response}</p>
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

export default Contact