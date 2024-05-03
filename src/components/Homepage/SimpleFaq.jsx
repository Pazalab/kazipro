import React from 'react'
import { HiChevronDown } from "react-icons/hi"
const SimpleFaq = ({ id, toggle, data, persistedState }) => {
  return (
    <div className='faq-box'>
               <div className={ persistedState === id ? "faq-header active" : "faq-header"} onClick={() => toggle(id)}>
                        <h2>{data.faq_question}</h2>
                        <span><HiChevronDown /></span>
               </div>
               <div className={persistedState === id ? "faq-answer active": "faq-answer"}>
                        <div className="faq-answer-inner">
                                 <p>{data.faq_answer}</p>
                        </div>
               </div>
    </div>
  )
}

export default SimpleFaq