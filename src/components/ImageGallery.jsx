import React, { useState } from 'react';
import './Image.css';

const ImageGallery = ({ projectId }) => {
  
  const projects = [
    {
      "id": 1,
      "title": "All Book Quotes",
      "description": "A Directory of all the books",
      "images": [
        "https://i.postimg.cc/NjBFrdHg/large.png",
        "https://i.postimg.cc/Xq5q9hLv/home-page-books.png",
        "https://i.postimg.cc/ncvMzyMR/quotes-page1.png",
        "https://i.postimg.cc/KvXRmGc3/quotes-page2.png"
      ]
    },
    {
      "id": 2,
      "title": "AspectGaming",
      "description": "Your All in One Gaming Software",
      "images": [
        "https://i.postimg.cc/vm50SHm7/Cleanup.png",
        "https://i.postimg.cc/V6RDmGnd/Contact-Us-Page.png",
        "https://i.postimg.cc/k49Tr3V0/home.png",
        "https://i.postimg.cc/7ht9T5B4/License-Page.png"
      ]
    },
    {
      "id": 3,
      "title": "Instagnite",
      "description": "Instagram Tools at one place",
      "images": [
        "https://i.postimg.cc/sghmvD5F/account-details.png",
        "https://i.postimg.cc/R0xRf5TW/actions.png",
        "https://i.postimg.cc/s2PJ46nw/advance-options.png",
        "https://i.postimg.cc/LXH3CtwR/bot-options.png"
      ]
    },
    {
      "id": 4,
      "title": "Konnected Reverse Raffle",
      "description": "A fun to play Game with friends",
      "images": [
        "https://i.postimg.cc/h4XpHrhP/invalid-license-key.png",
        "https://i.postimg.cc/MZgdxQj0/krr-admin-license.png",
        "https://i.postimg.cc/02mZNypT/krr-admin-user-list.png",
        "https://i.postimg.cc/qvTw6Hwz/krr-home-industrial-final-10.png"
      ]
    },
    {
      "id": 5,
      "title": "Vital AI",
      "description": "HealthCare Management System",
      "images": [
        "https://i.postimg.cc/qqct9S35/appointments.png",
        "https://i.postimg.cc/c1f8ggbB/diagnoses.png",
        "https://i.postimg.cc/dtBknMv7/home.png",
        "https://i.postimg.cc/WbjqMpRL/patients.png"
      ]
    },
    {
      "id": 6,
      "title": "Jewel",
      "description": "A Jewelery Store Web App",
      "images": [
        "https://i.postimg.cc/tTpGBc9T/invoice-detail.png",
        "https://i.postimg.cc/MT52NYGY/invoices.png",
        "https://i.postimg.cc/NFPhffm9/login.png",
        "https://i.postimg.cc/fybnN0tQ/orders.png"
      ]
    },

   
  ];

  const [largeImage, setLargeImage] = useState(null);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="image-gallery">
      <div className="large-image">
        <img src={largeImage || project.images[0]} alt="Large" /> {/* Default to the first image */}
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
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
  );
};

export default ImageGallery;
