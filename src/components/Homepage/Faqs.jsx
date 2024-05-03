import React, { useState } from 'react'
import faqsImage  from "../../assets/faqs-image.jpg"
import SimpleFaq from './SimpleFaq'
import { faqs } from "../../data/faqs"
const Faqs = () => {
  const [selected, setSelected] = useState(0)

  const toggleAccordion = (i) =>{
    if(selected === i){
          setSelected(null)
    }
    setSelected(i)
}

  return (
    <div id="faqs" className='faqs-section'>
            <div className="inner-row">
                    <div className="faqs-section-content">
                             <div className="image-column">
                                      <div className="image-column-inner">
                                               <img src={faqsImage} alt="" />
                                      </div>
                             </div>
                             <div className="description-column">
                                        <h3>Find out more</h3>
                                        <h1>Frequently Asked Questions</h1>
                                        <p>
                                        Equipped with a diverse and promising skill set, conducive to providing optimal support to HR business partners, organizations, and hiring managers.
                                        </p>


                                        <div className="faqs-container">
                                                 { faqs.map(item => 
                                                      <SimpleFaq  key={item.id} 
                                                      id={item.id} data={item} toggle={toggleAccordion} persistedState={selected} />    
                                                 )}
                                        </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default Faqs