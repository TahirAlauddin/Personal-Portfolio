import React, { useState } from 'react';
import './Image.css';
import { Link } from "react-router-dom";

const ImageGallery = ({ projectId }) => {
  const projects = [
    {
      id: 1,
      title: "All Book Quotes",
      subtitle: "A Directory of all the books",
      descripttion:
        "AllBooksQuotes is a Web application made with Django which works with Amazon Affiliate Program and Google Adsense. It is a community for enthusiast Book Readers to read over 50,000 quotes from over 11,000 books from different categories.",
      images: [
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page-related-page.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/home-page-books.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page1.webp",
        "/assets/img/Portfolio/Allbooksquotes Portfolio/quotes-page2.webp",
      ],
    },
    {
      id: 2,
      title: "AspectGaming",
      subtitle: "Your All in One Gaming Software",
      tags: ["Django", "NGINX", "Docker", "Python", "DigitalOcean"],
      description:
        "Aspect Gaming Tweaks is a software I made for a Saudi Community, made of gaming enthusiast. The job of the software is to make the windows delete any restricting features that come in the way of gaming.The software run a bunch of bat files and sets reg for enhancing the user experience on their gaming PCs. The idea is to make the PC efficient for specific users. It also implements Licensing through AWS.",
      images: [
        "/assets/img/Portfolio/AspectGaming/home.webp",
        "/assets/img/Portfolio/AspectGaming/Cleanup.webp",
        "/assets/img/Portfolio/AspectGaming/Contact Us Page.webp",
        "/assets/img/Portfolio/AspectGaming/GPU page.webp",
        "/assets/img/Portfolio/AspectGaming/License Page.webp",
        "/assets/img/Portfolio/AspectGaming/Memory Tweaks.webp",
        "/assets/img/Portfolio/AspectGaming/Mouse Keyboard Tweaks.webp",
      ],
    },
    {
      id: 3,
      title: "Recipito",
      subtitle: "All your Recipes at one place",
      tags: ["Django", "NGINX", "Docker", "Python", "DigitalOcean"],
      description:
        "Recipito is a robust recipe website designed to cater to food enthusiasts just like marmiton.org. Developed using Python, Django, HTML, CSS and JavaScript, this platform empowers users to create and share their culinary masterpieces, complete with detailed ingredients and utensil models.",
      images: [
        "/assets/img/Portfolio/Recipe/home.webp",
        "/assets/img/Portfolio/Recipe/admin-page.webp",
        "/assets/img/Portfolio/Recipe/admin-recipe-model-page.webp",
        "/assets/img/Portfolio/Recipe/cake-recipe.webp",
        "/assets/img/Portfolio/Recipe/categories.webp",
        "/assets/img/Portfolio/Recipe/profile.webp",
        "/assets/img/Portfolio/Recipe/recipe.webp",
      ],
    },
    {
      id: 4,
      title: "Konnected Reverse Raffle",
      subtitle: "A fun way to do fund-raising",
      tags: [
        "CSS",
        "Django",
        "Python",
        "Git",
        "HTML",
        "PyQt",
        "Flask",
        "Web Application",
        "Desktop Application",
      ],
      description: "A fun to play Game with friends",
      images: [
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
      ],
    },
    {
      id: 5,
      title: "Vital AI",
      subtitle: "HealthCare Management System",
      tags: ["Python", "PyQt", "ChatGPT", "API", "Desktop Application", "Git"],
      description:
        "An AI powered Medical Software for managing patients, appointments and doctors along with the option to diagnose the symptoms of the patient using OpenAI model GPT3. It's developed with Python and PyQt5.",
      images: [
        "/assets/img/Portfolio/Vital AI/home.webp",
        "/assets/img/Portfolio/Vital AI/appointments.webp",
        "/assets/img/Portfolio/Vital AI/diagnoses.webp",
        "/assets/img/Portfolio/Vital AI/patients-detail.webp",
        "/assets/img/Portfolio/Vital AI/patients.webp",
        "/assets/img/Portfolio/Vital AI/questionnaire.webp",
        "/assets/img/Portfolio/Vital AI/treatment-page.webp",
      ],
    },
    {
      id: 6,
      title: "Jewel Box",
      tags: ["Django", "CSS", "Python", "HTML", "JavaScript"],
      description: "A Jewelery Store Web App",
      images: [
        "/assets/img/Portfolio/JewelBox/login.webp",
        "/assets/img/Portfolio/JewelBox/add-customer.webp",
        "/assets/img/Portfolio/JewelBox/customers.webp",
        "/assets/img/Portfolio/JewelBox/invoice-detail.webp",
        "/assets/img/Portfolio/JewelBox/invoices.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-1.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-2.webp",
        "/assets/img/Portfolio/JewelBox/order-detail-3.webp",
        "/assets/img/Portfolio/JewelBox/orders.webp",
      ],
    },
    {
      id: 7,
      title: "Starc Assistant",
      subtitle: "Chatbot for manufacturing industries",
      tags: ["Django", "CSS", "Python", "HTML", "JavaScript"],
      description:
        "Starc Assistant is a robust desktop server application designed to augment the support mechanism for Gentilini Power-Train's employees.",
      images: [
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
      ],
    },
    {
      id: 8,
      title: "Loote",
      subtitle: "Mass Email Sending App",
      tags: [
        "Web Development",
        "Django",
        "Git",
        "Desktop Application",
        "Web Application",
        "API",
        "Microsoft Azure",
        "Python",
      ],
      description:
        " Loote Mass Email Sender is a desktop application that sends bulk emails to clients using Microsoft Azure Graph API. A user can also choose from templates saved locally. It gets the analytics like click, open and bounce rate from the API hosted on cloud made with Django Server.",
      images: [
        "/assets/img/Portfolio/Loote/Home.webp",
        "/assets/img/Portfolio/Loote/Send Emails.webp",
        "/assets/img/Portfolio/Loote/Import List Page.webp",
        "/assets/img/Portfolio/Loote/Scheduled Page.webp",
        "/assets/img/Portfolio/Loote/Templates Page.webp",
      ],
    },
    {
      id: 9,
      title: "Moop Bot",
      subtitle: "A personalized AI Powered Assistant like Siri",
      tags: ["Chatbot", "PyQt", "Python", "ElevenLabs", "OpenAI API"],
      description:
        "Moop Bot is an AI powered assistant designed to respond to queries and assist the user. It is integrated with ElevenLabs TTS API and OpenAI GPT-3.5-turbo.",
      images: [
        "/assets/img/Portfolio/MoopBot/home.webp",
        "/assets/img/Portfolio/MoopBot/upload.webp",
      ],
    },
    {
      id: 10,
      title: "Instagnite",
      subtitle: "Instagram Tools at one place",
      description:
        "Instangite is a dynamic desktop application crafted using Python and PyQt5, designed specifically for efficient data scraping and automated interactions on Instagram. This versatile tool expertly navigates through Instagram's platform, extracting valuable data with precision, while also functioning as an intelligent bot for seamless user engagement.",
      images: [
        "/assets/img/Portfolio/Instagnite/account-details.webp",
        "/assets/img/Portfolio/Instagnite/actions.webp",
        "/assets/img/Portfolio/Instagnite/advance-options.webp",
        "/assets/img/Portfolio/Instagnite/bot-options.webp",
        "/assets/img/Portfolio/Instagnite/story-options.webp",
        "/assets/img/Portfolio/Instagnite/comments-page.webp",
      ],
    },
  ];

  const [largeImage, setLargeImage] = useState(null);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  let portfoliosection = document.getElementById("portfolio");
  portfoliosection.style.backgroundColor = "#cbcbcb";

  return (
    <div className="image-gallery-parent">
      <div className="image-gallery">
        <div className="sm:flex">
          {/* <div className="large-image">
            <img src={largeImage || project.images[0]} alt="Large" />
          </div> */}
          <div className="basis-1/2 project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link
              to={`/portfolio/?id=${project?.id}`}
              className="text-left block"
            >
              Learn More
            </Link>
          </div>
          <div className="basis-1/1 small-images-container">
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
    </div>
  );
};

export default ImageGallery;
