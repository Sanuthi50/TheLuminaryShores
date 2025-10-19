// Footer.jsx
import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-section footer-brand">
                    <h3 className="footer-logo">The Luminary Shores</h3>
                    <p className="footer-tagline">Where the horizon meets tranquility</p>
                    <div className="footer-social">
                        <a href="#" className="social-link" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="footer-heading">Explore</h4>
                    <ul className="footer-links">
                        <li><a href="#accommodations">Accommodations</a></li>
                        <li><a href="#dining">Dining</a></li>
                        <li><a href="#spa">Spa & Wellness</a></li>
                        <li><a href="#experiences">Experiences</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div className="footer-section">
                    <h4 className="footer-heading">Information</h4>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        <li><a href="/#gallery">Gallery</a></li>
                        <li><a href="/rooms">Events</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-contact">
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>123 Ocean Drive, Paradise Bay</span>
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>info@luminaryshores.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Decorative Wave */}
            <svg className="footer-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                    d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    fill="#F5F2E8"
                />
            </svg>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; 2025 The Luminary Shores. All rights reserved.
                </p>
                <div className="footer-legal">
                    <a href="#privacy">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="#terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;