import Landing from "../components/servicesPage/Landing"
import ServiceNavigation from '../components/servicesPage/ServiceNavigation'
import Footer from '../components/Footer'
import { services } from '../data/services'
import { useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { MdArrowRightAlt } from "react-icons/md";
import { TbCircleDot } from "react-icons/tb"

const Services = () => {
  const param = useParams()
  const specific_service = services.filter(item => item.service_id === param.id)
  return (
    <>
         <Landing />
         <div className="simple-service">
                 <div className="inner-row">
                         <div className="simple-service-content">
                                 <div className="navigation-part">
                                          <ServiceNavigation />

                                          <div className="service-call-to-action">
                                                 <h2>How can we help you?</h2>
                                                 <p>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication</p>
                                                <HashLink smooth to="/#contact">Get Service</HashLink>
                                       </div>
                                 </div>
                                 <div className="overview-part">
                                          <h2>Overview</h2>

                                          
                                          { specific_service[0].service_description.length > 1 ? 
                                                <div className="description-box">
                                                          <p>{specific_service[0].service_description[0]}</p>
                                                          <p>{specific_service[0].service_description[1]}</p>
                                                          <p>{specific_service[0].service_description[2]}</p>

                                                          <div className="description-images">
                                                               <img src={`../${specific_service[0].service_images[0]}`} alt="" />
                                                               <img src={`../${specific_service[0].service_images[1]}`} alt="" />
                                                        </div>

                                                        <p>{specific_service[0].service_description[3]}</p>
                                                        <p>{specific_service[0].service_description[4]}</p>
                                                </div>
                                              : 
                                                 <div className="description-box">
                                                        <p>{specific_service[0].service_description[0]}</p>
                                                        { specific_service[0].level_options && specific_service[0].level_options.length > 0 ? 
                                                                <div className="level-option-row">
                                                                            { specific_service[0].level_options.map(item => 
                                                                                     <div className="level-option-moja" key={item.id}>
                                                                                                  <h3>{item.title}: <span>ksh.</span>{item.price.toLocaleString()}</h3>
                                                                                                  <ul>
                                                                                                            { item.option_list.map(item => <li key={item}><span><TbCircleDot /></span> {item}</li>)}
                                                                                                  </ul>
                                                                                     </div>
                                                                              )}
                                                                </div>
                                                         : ''}
                                                        {specific_service[0].service_options && specific_service[0].service_options.length > 0 ? 
                                                                  specific_service[0].service_options.map(item => 
                                                                           <div className="service-option-box" key={item.id}>
                                                                                     <h3> <span><MdArrowRightAlt /></span>{item.name} - <span className="price">ksh.</span>{item.price.toLocaleString()}</h3>
                                                                           </div>
                                                                  )
                                                             : ''}
                                                        {/* <div className="description-images">
                                                               <img src={`../${specific_service[0].service_images[0]}`} alt="" />
                                                               <img src={`../${specific_service[0].service_images[1]}`} alt="" />
                                                        </div> */}
                                                        {specific_service[0].more_description && specific_service[0].more_description.length > 0 ? 
                                                                specific_service[0].more_description.map(item => <p key={item}>{item}</p>)
                                                           : ''}
                                                        {specific_service[0].specifities &&  specific_service[0].specifities.length > 0 ? 
                                                               <ul className="specificity">
                                                                         { specific_service[0].specifities.map(item => 
                                                                             <li key={item.id}>
                                                                                       <span>{item.id + 1}. {item.title}</span>
                                                                                       <p>{item.description}</p>
                                                                             </li>
                                                                        )}
                                                               </ul>
                                                          : ''}
                                                        <p>{specific_service[0].service_description_extra}</p>
                                                 </div>

                                        }
                                 </div>
                         </div>
                 </div>
         </div>
         <Footer />
    </>
  )
}

export default Services