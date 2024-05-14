import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper"
import { testimonials } from '../../data/testimonials'
import { RiDoubleQuotesL } from "react-icons/ri"

const Testimonials2 = () => {
  return (
    <div className="testimonial-section-v2">
               <div className="inner-row">
                          <div className="testimonial-section-content">
                                     <div className="testimonial-intro">
                                                  <div className="intro-column">
                                                             <h3>Success Stories</h3>
        
                                                  </div>
                                                  <p>Don&apos;t just take our word for it. Read client success stories and get a glimpse of what we can achieve together.</p>
                                     </div>

                                     <div className="testimonials-row">
                                             <Swiper                                                
                                                    slidesPerView={1}           
                                                    spaceBetween={0}    
                                                    loop={true}
                                                    autoplay={{
                                                          delay: 8000,
                                                          disableOnInteraction: false
                                                     }}
                                                    modules={[Autoplay]}
                                                    breakpoints={{
                                                         1090: {
                                                                 slidesPerView: 3,
                                                                 spaceBetween: 20
                                                           },
                                                          600: {
                                                                 slidesPerView: 2,
                                                                 spaceBetween: 20
                                                          }
                                                      }}
                                             >
                                        { testimonials.map(item => 
                                                        <SwiperSlide key={item.id}>
                                                                 <div className="testimonial-moja">
                                                                           <span><RiDoubleQuotesL /></span>
                                                                           <p>{item.text}</p>
                                                                           
                                                                           <div className="profile">
                                                                                    <h4>{item.name}</h4>
                                                                                    <h5>{item.position}</h5>
                                                                           </div>
                                                                 </div>
                                                        </SwiperSlide>
                                                  )}
                                             </Swiper>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default Testimonials2