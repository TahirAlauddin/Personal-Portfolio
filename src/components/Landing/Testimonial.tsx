import "./Testimonial.css";
import Testimonials from "../../utils/Testimonials";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [position, setPosition] = useState(1);
  const maxPosition = Testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) =>
        prevPosition < maxPosition ? prevPosition + 1 : 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = document.getElementById("carousel") as HTMLElement;
    if (carousel) {
      carousel.style.setProperty("--position", position.toString());
    }
  }, [position]);

  return (
    <div id="testimonials" className="testimonial-container">
      <div className="testimonials-heading">
        <h2>What My Clients Say</h2>
      </div>
      <div className="mt-5 mb-[20px] flex justify-center">
        <video 
          controlsList="nodownload"
          className="rounded-xl w-2/4"
          width="100%"
          controls
          src="/assets/video/testimonial.mp4"
        ></video>
      </div>
      <div className="carousel-container-testimonial mb-[120px]">
        {[...Array(maxPosition).keys()].map((i) => {
          const nthplace = i + 1;
          return (
            <input
              key={nthplace}
              style={
                { "--nthplace": nthplace.toString() } as React.CSSProperties
              }
              type="radio"
              name="position"
              checked={position === nthplace}
              onClick={() => setPosition(nthplace)}
            />
          );
        })}
        <div id="carousel">
          {Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="item testemonial-item"
              style={
                {
                  "--offset": (index + 1).toString(),
                } as React.CSSProperties
              }
            >
              <img src={testimonial.imgSrc} alt={testimonial.clientName} />
              <h3 className="client-name">{testimonial.clientName}</h3>
              <p className="client-country">{testimonial.clientLocation}</p>
              <p className="testimonial">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
