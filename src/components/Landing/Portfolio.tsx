// Image Imports
import next from "/assets/img/next.png";
import prev from "/assets/img/prev.png";
import React, { useState, useRef } from 'react';
import PortfolioModalGallery from './PortfolioModal.jsx';
import './Portfolio.css'; 


const IMAGE_URLS = [
  {
    id: 4,
    url: '/assets/img/Portfolio/PortfolioCover/KonnectedReverseRaffle.webp',
    alt: "slide_image",
  },
  {
    id: 8,
    url: '/assets/img/Portfolio/PortfolioCover/LooteEmailMarketing.webp',
    alt: "slide_image2",
  },
  {
    id: 5,
    url: '/assets/img/Portfolio/PortfolioCover/VITALAI.webp',
    alt: "slide_image3",
  },
  {
    id: 2,
    url: '/assets/img/Portfolio/PortfolioCover/AspectGaming.webp',
    alt: "slide_image4",
  },
  {
    id: 3,
    url: '/assets/img/Portfolio/PortfolioCover/RecipeMermiton.webp',
    alt: "slide_image5",
  },
  {
    id: 7,
    url: '/assets/img/Portfolio/PortfolioCover/StarcAssistant.webp',
    alt: "slide_image6",
  },
  {
    id: 9,
    url: '/assets/img/Portfolio/PortfolioCover/MoopBot.webp',
    alt: "slide_image7",
  },
  {
    id: 6,
    url: '/assets/img/Portfolio/PortfolioCover/JewelBox.webp',
    alt: "slide_image8",
  },
  {
    id: 10,
    url: '/assets/img/Portfolio/PortfolioCover/Instagnite.webp',
    alt: "slide_image9",
  },
  {
    id: 1,
    url: '/assets/img/Portfolio/PortfolioCover/AllBooksQuotes.webp',
    alt: "slide_image10",
  },
];

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}


function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button">
          <img src="/assets/img/cross.png" alt="Close" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedProject(id);
    setShowModal(true);
    console.log("Image clicked:", id);
    document.body.style.overflow = "hidden";
  };

  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const dragStart = (
    e: React.MouseEvent<HTMLImageElement> & React.TouchEvent<HTMLImageElement>
  ) => {
    if (isMoving) return;

    setIsDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const dragging = (
    e: React.MouseEvent<HTMLImageElement> & React.TouchEvent<HTMLImageElement>
  ) => {
    if (!isDragStart || isMoving) return;

    setIsDragging(true);

    const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;

    carouselRef.current?.scrollTo({
      left: prevScrollLeft - positionDiff,
    });

    setPositionDiff(positionDiff);
  };

  const dragEnd = () => {
    if (isMoving) return;

    setIsDragStart(false);
    setIsDragging(false);

    autoSlide();
  };

  const autoSlide = () => {
    if (!carouselRef.current) return;

    if (
      carouselRef.current.scrollLeft -
        (carouselRef.current.scrollWidth - carouselRef.current.clientWidth) >
        -1 ||
      carouselRef.current.scrollLeft <= 0
    )
      return;

    setIsMoving(true);

    const absPositionDiff = Math.abs(positionDiff);

    const firstImageWidth =
      carouselRef.current.firstElementChild?.clientWidth! + 14;

    let skip = 0;
    const valDifference = firstImageWidth - absPositionDiff;

    if (valDifference < 0) {
      const absVal = Math.abs(valDifference);
      const quotient = Math.floor(absVal / firstImageWidth) + 1;
      skip = firstImageWidth * quotient;
    }

    if (carouselRef.current.scrollLeft > prevScrollLeft) {
      carouselRef.current.scrollTo({
        left:
          absPositionDiff > firstImageWidth / 3
            ? carouselRef.current.scrollLeft + skip + valDifference
            : carouselRef.current.scrollLeft - absPositionDiff,
        behavior: "smooth",
      });
    } else {
      carouselRef.current.scrollTo({
        left:
          absPositionDiff > firstImageWidth / 3
            ? carouselRef.current.scrollLeft - skip - valDifference
            : carouselRef.current.scrollLeft + absPositionDiff,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      setIsMoving(false);
    }, 500);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!carouselRef.current) return;

    const firstImageWidth =
      carouselRef.current.firstElementChild?.clientWidth! + 14;

    if (e.currentTarget.id === "btn-left") {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - firstImageWidth,
        behavior: "smooth",
      });
    } else if (e.currentTarget.id === "btn-right") {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + firstImageWidth,
        behavior: "smooth",
      });
    }
  };

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    e.preventDefault();

    const scrollAmount = e.deltaY;

    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMoving) return;

    setPrevPageX(e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMoving) return;

    const touchDiff = e.touches[0].pageX - prevPageX;

    carouselRef.current?.scrollTo({
      left: prevScrollLeft - touchDiff,
    });
  };

  const handleTouchEnd = () => {
    if (isMoving) return;

    autoSlide();
  };

  return (
    <div id="portfolio">
      <h1 className="portfolio-heading" style={{ paddingTop: "20px" }}>My Portfolio</h1>
      <h3>Get to know about my latest projects here</h3>
      <div className="slider-parent">
        <div
          className="carousel-container"
          onWheel={handleWheelScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-wrapper">
            <button
              className="carousel-button carousel-button-left"
              aria-label="Left button"
              id="btn-left"
              onClick={handleButtonClick}
            >
              <img
                src={prev}
                style={{ height: "3rem", width: "auto" }}
                alt="Previous"
              />
            </button>

            <div
              className={`carousel-container ${isDragging ? "dragging" : ""}`}
              ref={carouselRef}
              onMouseDown={dragStart}
              onMouseMove={dragging}
              onMouseLeave={dragEnd}
              onMouseUp={dragEnd}
            >
              {IMAGE_URLS.map((image, index) => (
                <img
                  key={image.id}
                  src={image.url}
                  alt={`carousel_image_${index}`}
                  className="carousel-image"
                  draggable={false}
                  loading="lazy"
                  onClick={() => handleImageClick(image.id)}
                  style={{ cursor: "grab", width: "562px", height: "238px" }}
                />
              ))}
            </div>

            <button
              className="carousel-button carousel-button-right"
              aria-label="Right button"
              id="btn-right"
              onClick={handleButtonClick}
            >
              <img
                src={next}
                style={{ height: "3rem", width: "auto" }}
                alt="Next"
              />
            </button>
          </div>
        </div>

        {showModal && (
          <Modal
            onClose={() => {
              let portfoliosection = document.getElementById("portfolio");
              portfoliosection!.style.backgroundColor = "#fff";
              console.log("CLOSE MODAL");
              setShowModal(false);
              document.body.style.overflow = "inherit";
            }}
          >
            <PortfolioModalGallery projectId={selectedProject} />
          </Modal>
        )}
      </div>
    </div>
  );
}
