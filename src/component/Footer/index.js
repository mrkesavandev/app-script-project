import React from 'react';
import './index.css'; 
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
               
               <div className="row">
               
                    <div className="col-md-4">
                        <h5>Subscribe</h5>
                        <form className="subscribe-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    
                    <div className="subSections">

                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="contact-info">
                            <li><i className="fas fa-phone"></i> +1-123-456-7890</li>
                            <li><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Currency</h5>
                        <select className="currency-selector">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                        </select>
                    </div>
                    </div>
                    </div>
         <hr/>

                    <div className="row">

                    <div className="col-md-4">
                        <h5>metta muse</h5>
                        <ul className="quick-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#stories">Stories</a></li>
                            <li><a href="#astisans">Astisans</a></li>
                            <li><a href="#Boutiques">Boutiques</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#eu">EU compliance Docs</a></li>
                            
                        </ul>
                    </div>
                    
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="quick-links">
                            <li><a href="#orders">Orders & Shipping</a></li>
                            <li><a href="#payments">Payment & Pricing</a></li>
                            <li><a href="#join">join/Login as a seller</a></li>
                            <li><a href="#return">Return and Refunds</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#privacy">Privacy policy</a></li>
                            <li><a href="#terms">Terms and Condition</a></li>
                        </ul>
                    </div>
                    
                    <div className="subSections">
                    <div className="col-md-4 ">
                        <h5>Follow Us</h5>
                        <div className="payment-icons">
                            <FaYoutube/>
                            <FaInstagramSquare/>
                        </div>
                    </div>
               
                
                    <div className="col-md-4">
                        <h5>Payments Accepted</h5>
                        <div className="payment-icons">
                            <FaGooglePay className='pay-icon' />
                            <FaCcMastercard className='pay-icon'/>
                            <FaApplePay className='pay-icon'/>
                            <SiAmericanexpress className='pay-icon' />
                            <FaCcMastercard className='pay-icon'/>
                        </div>
                   </div>
                   </div>
                   </div>
                    
                    
                
           
        </footer>
    );
}

export default Footer;