import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper"
import { testimonials } from '../../data/testimonials'
import { RiDoubleQuotesL } from "react-icons/ri"
const Testimonials = () => {
  return (
    <div className="testimonial-section">
               <div className="inner-row">
                          <div className="testimonial-section-content">
                                     <div className="testimonial-intro">
                                                  <div className="intro-column">
                                                             <h3>Testimonials</h3>
                                                             <h1>See What Our Clients are saying?</h1>
                                                  </div>
                                                  <p>Don&apos;t just take our word for it. Read some of the success stories how we empower our clients and drive results.</p>
                                     </div>

                                     <div className="testimonials-row">
                                             <Swiper                                                
                                                    slidesPerView={1}               
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
                                                                           <h4>{item.name}</h4>
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

export default Testimonials