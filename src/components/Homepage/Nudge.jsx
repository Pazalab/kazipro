import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Nudge = () => {
  return (
    <div className='nudge-section'>
             <div className="inner-row">
                       <div className="nudge-section-content">
                                 <p>Get solutions fast!</p>
                                 <h1><span>Need First-class </span> HR Consultants?</h1>
                                 <HashLink smooth to={"/#pricing"}>Get a quote now</HashLink>
                       </div>
             </div>
    </div>
  )
}

export default Nudge