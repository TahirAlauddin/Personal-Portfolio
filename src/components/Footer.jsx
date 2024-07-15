import "./Footer.css";
import aboutImage from  "../../public/assets/img/about.jpg";
import fb from "../../public/assets/img/logo-facebook.png";
import insta from "../../public/assets/img/logo-instagram.png";
import linkedin from "../../public/assets/img/logo-linkedin.png";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import instagramIcon from "../../public/assets/img/logo-instagram.png"; // Update with the path to your Instagram icon
import facebookIcon from "../../public/assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "../../public/assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon

const Footer2 = () => {
return (
    <div id="contact" className="footer-parent">
        <div id="about" className="about-container">
            <div className="footer-content">
                <div className="footer-text">
                    <h2 className="footer-title text-white">Stay in Touch</h2>
                    <h3 className="footer-heading text-white Lexend-bold">
                        Your Invitation to get connected
                    </h3>

                    <div className="social-icons">
                        
                        <a href="https://www.facebook.com">
                            <img src={facebookIcon} alt="Facebook" className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/tahiralauddin">
                            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                        </a>
                    </div>
                </div>
                <div className="formclass">
                    <h3 className="about-title mt-4">Contact Me</h3>
                    <p className="text-gray">Your email will not be published</p>
                    <Form className="m-5">
                        <Form.Group
                            className="mb-4"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="name" placeholder="Name" className="mb-4" />
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className="mb-4"
                            />
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="message"
                                placeholder="Message"
                                className="mb-4"
                            />
                        </Form.Group>
                        <button className="footer-button">Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Footer2;
