import React, { useState } from 'react';
import './Image.css';

const ImageGallery = ({ projectId }) => {

  
  const projects = [
    {
      "id": 1,
      "title": "All Book Quotes",
      "description": "A Directory of all the books",
      "images": [
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page-related-page.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page-books.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page1.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page2.webp",
      ]
    },
    {
      "id": 2,
      "title": "AspectGaming",
      "description": "Your All in One Gaming Software",
      "images": [
        "/assets/img/Portfolio/AspectGaming/home.webp",
        "/assets/img/Portfolio/AspectGaming/Cleanup.webp",
        "/assets/img/Portfolio/AspectGaming/Contact Us Page.webp",
        "/assets/img/Portfolio/AspectGaming/GPU page.webp",
        "/assets/img/Portfolio/AspectGaming/License Page.webp",
        "/assets/img/Portfolio/AspectGaming/Memory Tweaks.webp",
        "/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.webp",       
      ]
    },
    {
      "id": 3,
      "title": "Instagnite",
      "description": "Instagram Tools at one place",
      "images": [
        "/assets/img/Portfolio/Instagnite/account-details.webp",
        "/assets/img/Portfolio/Instagnite/actions.webp",
        "/assets/img/Portfolio/Instagnite/advance-options.webp",
        "/assets/img/Portfolio/Instagnite/bot-options.webp",
        "/assets/img/Portfolio/Instagnite/comments-page.webp",
        "/assets/img/Portfolio/Instagnite/story-options-page.webp",
      ]
    },
    {
      "id": 4,
      "title": "Konnected Reverse Raffle",
      "description": "A fun to play Game with friends",
      "images": [
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-license.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-user-list.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-aqua-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-black-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-come-back.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-eliminated.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-final-10.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-come-back.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-eliminated.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-final-10.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-pink-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-purple-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-come-back.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-eliminated.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-final-10.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-yellow-grid.webp",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/valid-license-key.webp",
      ]
    },
    {
      "id": 5,
      "title": "Vital AI",
      "description": "HealthCare Management System",
      "images": [
        "/assets/img/Portfolio/Vital AI/home.webp",
        "/assets/img/Portfolio/Vital AI/appointments.webp",
        "/assets/img/Portfolio/Vital AI/diagnoses.webp",
        "/assets/img/Portfolio/Vital AI/patients-detail.webp",
        "/assets/img/Portfolio/Vital AI/patients.webp",
        "/assets/img/Portfolio/Vital AI/questionnaire.webp",
        "/assets/img/Portfolio/Vital AI/treatment-page.webp",
      ]
    },
    {
      "id": 6,
      "title": "Jewel",
      "description": "A Jewelery Store Web App",
      "images": [
        "/assets/img/Portfolio/JewelBox/login.webp",
        "/assets/img/Portfolio/JewelBox/add-customer.webp",
        "/assets/img/Portfolio/JewelBox/customers.webp",
        "/assets/img/Portfolio/JewelBox/invoice-detail.webp",
        "/assets/img/Portfolio/JewelBox/invoices.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-1.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-2.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-3.webp",
        "/assets/img/Portfolio/JewelBox/orders.webp",
      ]
    },
    {
      "id": 7,
      "title": "Starc Assistant",
      "description": "A Jewellery Store Web App",
      "images": [
        "/assets/img/Portfolio/Starc Assistant/login.webp",
        "/assets/img/Portfolio/Starc Assistant/home.webp",
        "/assets/img/Portfolio/Starc Assistant/chatbot-interface.webp",
        "/assets/img/Portfolio/Starc Assistant/machines-detail.webp",
        "/assets/img/Portfolio/Starc Assistant/machines-list.webp",
        "/assets/img/Portfolio/Starc Assistant/previous-page-topics.webp",
        "/assets/img/Portfolio/Starc Assistant/topic-detail-page.webp",
        "/assets/img/Portfolio/Starc Assistant/tornitura-bot.webp",
        "/assets/img/Portfolio/Starc Assistant/training-list-admin.webp",
        "/assets/img/Portfolio/Starc Assistant/welcome.webp",
      ]
    }
   
  ];


  const [largeImage, setLargeImage] = useState(null);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  let portfoliosection = document.getElementById('portfolio')
  portfoliosection.style.backgroundColor = '#cbcbcb'

  return (
    <div className='image-gallery-parent'>
    <div className="image-gallery">
      <div className="large-image">
        <img src={largeImage || project.images[0]} alt="Large" />
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="small-images-container">
        <div className="small-images">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small ${index + 1}`}
              onClick={() => setLargeImage(image)}
              />
            ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageGallery;
