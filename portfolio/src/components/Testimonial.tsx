import './Testimonial.css'
import Testimonials from '../utils/Testimonials';
import TestimonialCarousel from '../utils/TestimonialCarousel'
import { useEffect } from 'react';

function Testimonial() {

  useEffect(TestimonialCarousel, []); // Run this effect only once, on mount

    
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonial-container">
        <div className="testimonials-heading">
          <h2>What My Clients Say</h2>
        </div>

        <div className="testimonials-carousel">
          {Testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className='testimonial-header'>
                <img src={testimonial.imgSrc} alt="Client Image" />
                <div className='client-information'>
                  <span className="client-name">{testimonial.clientName}</span>
                  <span className="client-location">{testimonial.clientLocation}</span>
                </div>
              </div>
              <p>{testimonial.comment}</p>
              <div className="horizontal-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default Testimonial
