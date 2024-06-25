import React, { useState } from 'react';
import './Image.css';

const ImageGallery = ({ projectId }) => {

  
  const projects = [
    {
      "id": 1,
      "title": "All Book Quotes",
      "description": "A Directory of all the books",
      "images": [
        "src/assets/img/Portfolio/Allbooksquotes Portfolio/home-page.png",
        "src/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page-related-page.png",
        "src/assets/img/Portfolio/Allbooksquotes Portfolio/home-page-books.png",
        "src/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page1.png",
        "src/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page2.png",
        "https://i.postimg.cc/Xq5q9hLv/home-page-books.png",
        "https://i.postimg.cc/ncvMzyMR/quotes-page1.png",
        "https://i.postimg.cc/KvXRmGc3/quotes-page2.png",
        "https://i.postimg.cc/ncvMzyMR/quotes-page1.png",
      ]
    },
    {
      "id": 2,
      "title": "AspectGaming",
      "description": "Your All in One Gaming Software",
      "images": [
        "src/assets/img/Portfolio/AspectGaming/home.png",
        "src/assets/img/Portfolio/AspectGaming/Cleanup.png",
        "src/assets/img/Portfolio/AspectGaming/Contact Us Page.png",
        "src/assets/img/Portfolio/AspectGaming/GPU page.png",
        "src/assets/img/Portfolio/AspectGaming/License Page.png",
        "src/assets/img/Portfolio/AspectGaming/Memory Tweaks.png",
        "src/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.png",       
      ]
    },
    {
      "id": 3,
      "title": "Instagnite",
      "description": "Instagram Tools at one place",
      "images": [
        "src/assets/img/Portfolio/Instagnite/account-details.PNG",
        "src/assets/img/Portfolio/Instagnite/actions.PNG",
        "src/assets/img/Portfolio/Instagnite/advance-options.PNG",
        "src/assets/img/Portfolio/Instagnite/bot-options.PNG",
        "src/assets/img/Portfolio/Instagnite/comments-page.PNG",
        "src/assets/img/Portfolio/Instagnite/story-options-page.PNG",
      ]
    },
    {
      "id": 4,
      "title": "Konnected Reverse Raffle",
      "description": "A fun to play Game with friends",
      "images": [
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/invalid-license-key.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-dashboard.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-license.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-admin-user-list.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-aqua-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-black-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-come-back.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-eliminated.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-final-10.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-flower-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-come-back.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-eliminated.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-final-10.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-industrial-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-pink-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-purple-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-come-back.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-eliminated.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-final-10.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-sunset-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/krr-home-yellow-grid.PNG",
        "src/assets/img/Portfolio/KonnectedReverseRaffle/Pics/valid-license-key.PNG",
      ]
    },
    {
      "id": 5,
      "title": "Vital AI",
      "description": "HealthCare Management System",
      "images": [
        "src/assets/img/Portfolio/Vital AI/home.png",
        "src/assets/img/Portfolio/Vital AI/appointments.png",
        "src/assets/img/Portfolio/Vital AI/diagnoses.png",
        "src/assets/img/Portfolio/Vital AI/patients-detail.png",
        "src/assets/img/Portfolio/Vital AI/patients.png",
        "src/assets/img/Portfolio/Vital AI/questionnaire.png",
        "src/assets/img/Portfolio/Vital AI/treatment-page.png",
      ]
    },
    {
      "id": 6,
      "title": "Jewel",
      "description": "A Jewelery Store Web App",
      "images": [
        "src/assets/img/Portfolio/JewelBox/login.png",
        "src/assets/img/Portfolio/JewelBox/add-customer.png",
        "src/assets/img/Portfolio/JewelBox/customers.png",
        "src/assets/img/Portfolio/JewelBox/invoice-detail.png",
        "src/assets/img/Portfolio/JewelBox/invoices.png",
        "src/assets/img/Portfolio/JewelBox/order-detail-1.png",
        "src/assets/img/Portfolio/JewelBox/order-detail-2.png",
        "src/assets/img/Portfolio/JewelBox/order-detail-3.png",
        "src/assets/img/Portfolio/JewelBox/orders.png",
      ]
    },
    {
      "id": 7,
      "title": "Starc Assistant",
      "description": "A Jewellery Store Web App",
      "images": [
        "src/assets/img/Portfolio/Starc Assistant/login.png",
        "src/assets/img/Portfolio/Starc Assistant/home.png",
        "src/assets/img/Portfolio/Starc Assistant/chatbot-interface.png",
        "src/assets/img/Portfolio/Starc Assistant/machines-detail.png",
        "src/assets/img/Portfolio/Starc Assistant/machines-list.png",
        "src/assets/img/Portfolio/Starc Assistant/previous-page-topics.png",
        "src/assets/img/Portfolio/Starc Assistant/topic-detail-page.png",
        "src/assets/img/Portfolio/Starc Assistant/tornitura-bot.png",
        "src/assets/img/Portfolio/Starc Assistant/training-list-admin.png",
        "src/assets/img/Portfolio/Starc Assistant/welcome.png",
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
