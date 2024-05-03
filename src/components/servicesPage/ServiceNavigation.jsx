
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const ServiceNavigation = () => {
   const params = useParams()

  return (
    <div className='service-navigation'>
            <ul>
                   <li><NavLink to={"/service/recruitment-for-companies"} className={params.id === 'recruitment-for-companies' ? 'active-link' : ''}>Recruitment for Companies</NavLink></li>
                   <li><NavLink to={"/service/resume-revamping"} className={params.id === 'resume-revamping' ? 'active-link': ''}>Resume Revamping</NavLink></li>
                   <li><NavLink to={'/service/linkedin-profile-development'} className={params.id === 'linkedin-profile-development' ? 'active-link' : ''}>LinkedIn Profile Development</NavLink></li>
                   <li><NavLink to={'/service/career-coaching'} className={params.id === 'career-coaching' ? 'active-link' : ''}>Career Coaching</NavLink></li>
                   <li><NavLink to={'/service/interview-preparation'} className={params.id === 'interview-preparation' ? 'active-link' : ''}>Interview Preparation</NavLink></li>
            </ul>
    </div>
  )
}

export default ServiceNavigation