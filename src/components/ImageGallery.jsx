import React, { useState } from 'react';
import './Image.css';

const ImageGallery = ({ projectId }) => {

  
  const projects = [
    {
      "id": 1,
      "title": "All Book Quotes",
      "description": "A Directory of all the books",
      "images": [
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page.png",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page-related-page.png",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page-books.png",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page1.png",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page2.png",
      ]
    },
    {
      "id": 2,
      "title": "AspectGaming",
      "description": "Your All in One Gaming Software",
      "images": [
        "/assets/img/Portfolio/AspectGaming/home.png",
        "/assets/img/Portfolio/AspectGaming/Cleanup.png",
        "/assets/img/Portfolio/AspectGaming/Contact Us Page.png",
        "/assets/img/Portfolio/AspectGaming/GPU page.png",
        "/assets/img/Portfolio/AspectGaming/License Page.png",
        "/assets/img/Portfolio/AspectGaming/Memory Tweaks.png",
        "/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.png",       
      ]
    },
    {
      "id": 3,
      "title": "Instagnite",
      "description": "Instagram Tools at one place",
      "images": [
        "/assets/img/Portfolio/Instagnite/account-details.PNG",
        "/assets/img/Portfolio/Instagnite/actions.PNG",
        "/assets/img/Portfolio/Instagnite/advance-options.PNG",
        "/assets/img/Portfolio/Instagnite/bot-options.PNG",
        "/assets/img/Portfolio/Instagnite/comments-page.PNG",
        "/assets/img/Portfolio/Instagnite/story-options-page.PNG",
      ]
    },
    {
      "id": 4,
      "title": "Konnected Reverse Raffle",
      "description": "A fun to play Game with friends",
      "images": [
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-license.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-user-list.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-aqua-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-black-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-come-back.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-eliminated.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-final-10.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-come-back.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-eliminated.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-final-10.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-pink-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-purple-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-come-back.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-eliminated.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-final-10.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-yellow-grid.PNG",
        "/assets/img/Portfolio/KonnectedReverseRaffle/Pics/valid-license-key.PNG",
      ]
    },
    {
      "id": 5,
      "title": "Vital AI",
      "description": "HealthCare Management System",
      "images": [
        "/assets/img/Portfolio/Vital AI/home.png",
        "/assets/img/Portfolio/Vital AI/appointments.png",
        "/assets/img/Portfolio/Vital AI/diagnoses.png",
        "/assets/img/Portfolio/Vital AI/patients-detail.png",
        "/assets/img/Portfolio/Vital AI/patients.png",
        "/assets/img/Portfolio/Vital AI/questionnaire.png",
        "/assets/img/Portfolio/Vital AI/treatment-page.png",
      ]
    },
    {
      "id": 6,
      "title": "Jewel",
      "description": "A Jewelery Store Web App",
      "images": [
        "/assets/img/Portfolio/JewelBox/login.png",
        "/assets/img/Portfolio/JewelBox/add-customer.png",
        "/assets/img/Portfolio/JewelBox/customers.png",
        "/assets/img/Portfolio/JewelBox/invoice-detail.png",
        "/assets/img/Portfolio/JewelBox/invoices.png",
        "/assets/img/Portfolio/JewelBox/order-detail-1.png",
        "/assets/img/Portfolio/JewelBox/order-detail-2.png",
        "/assets/img/Portfolio/JewelBox/order-detail-3.png",
        "/assets/img/Portfolio/JewelBox/orders.png",
      ]
    },
    {
      "id": 7,
      "title": "Starc Assistant",
      "description": "A Jewellery Store Web App",
      "images": [
        "/assets/img/Portfolio/Starc Assistant/login.png",
        "/assets/img/Portfolio/Starc Assistant/home.png",
        "/assets/img/Portfolio/Starc Assistant/chatbot-interface.png",
        "/assets/img/Portfolio/Starc Assistant/machines-detail.png",
        "/assets/img/Portfolio/Starc Assistant/machines-list.png",
        "/assets/img/Portfolio/Starc Assistant/previous-page-topics.png",
        "/assets/img/Portfolio/Starc Assistant/topic-detail-page.png",
        "/assets/img/Portfolio/Starc Assistant/tornitura-bot.png",
        "/assets/img/Portfolio/Starc Assistant/training-list-admin.png",
        "/assets/img/Portfolio/Starc Assistant/welcome.png",
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
