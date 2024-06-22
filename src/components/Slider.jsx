import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import ImageGallery from './ImageGallery';


// CSS Imports
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'; // Your custom Slider CSS

// Image Imports
import next from '../assets/img/next.png';
import prev from '../assets/img/prev.png';
// Modal Component
function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="modal-close-button">
       <p className='tex-white'>Close</p>
        </button>
      </div>
    </div>
  );
}

function Slider() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project ID

  const handleImageClick = (projectId) => { 
    setSelectedProject(projectId);
    setShowModal(true);
  };

  return (
    <div className='parent-slider'>
      <h1 id="portfolio" className="slider_heading">
        My Portfolio
      </h1>
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="https://i.postimg.cc/mgfMp31q/large.png" alt="slide_image" onClick={() => handleImageClick(1)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/vm50SHm7/Cleanup.png" alt="slide_image2" onClick={() => handleImageClick(2)} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/sghmvD5F/account-details.png" alt="slide_image3" onClick={() => handleImageClick(3)} /> 
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/MZgdxQj0/krr-admin-license.png" alt="slide_image4" onClick={() => handleImageClick(4)} /> 
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/dtBknMv7/home.png" alt="slide_image5" onClick={() => handleImageClick(5)} /> 
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/tTpGBc9T/invoice-detail.png" alt="slide_image5" onClick={() => handleImageClick(6)} /> 
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <img src={prev} alt="" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src={next} alt="" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageGallery projectId={selectedProject} /> 
        </Modal>
      )}
    </div>
  );
}

export default Slider;
