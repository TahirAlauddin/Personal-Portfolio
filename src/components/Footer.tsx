import "./Footer.css";
import {useState} from 'react';
import React from "react";
import Form from "react-bootstrap/Form";
import facebookIcon from "/assets/img/logo-facebook.png"; // Update with the path to your Facebook icon
import linkedinIcon from "/assets/img/logo-linkedin.png"; // Update with the path to your LinkedIn icon
import emailjs from "emailjs-com";

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_d7iwr0e', // Replace with your service ID
            'template_1enn6xb', // Replace with your template ID
            formData,
            '7j5BeckQGdy5Mi7IA'      // Replace with your user ID
        ).then((result) => {
            console.log('Email successfully sent!', result.text);
        }, (error) => {
            console.error('There was an error sending the email:', error.text);
        });
    };

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
                        <Form className="m-5" onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    className="mb-4"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="mb-4"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    placeholder="Message"
                                    className="mb-4"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <button className="footer-button" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
