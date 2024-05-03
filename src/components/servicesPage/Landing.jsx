import React from 'react'
import Navbar from '../Navbar'
import { RxPinRight } from 'react-icons/rx'
import { useParams } from 'react-router-dom'
const Landing = () => {
  const param = useParams()
  const cleansed = param.id.replaceAll('-', ' ').trim()
  return (
    <div className='landing'>
              <Navbar />
              <div className='landing-content'>
                        <div className="inner-row">
                               <h1>Service <span><RxPinRight className='landing-icon' /> { cleansed }</span></h1>
                        </div>
              </div>
    </div>
  )
}

export default Landing