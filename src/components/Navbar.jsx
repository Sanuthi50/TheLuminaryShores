// Navbar.jsx
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const scrollToContact = (e) => {
        e.preventDefault();
        const footer = document.getElementById('contact');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If we're not on the page with the footer, go to home and then scroll
            window.location.href = '/#contact';
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="brand">The Luminary Shores</div>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><a href="#contact" className="nav-link" onClick={scrollToContact}>Contact Us</a></li>
                    <li><Link to="/booking" className="nav-link cta">Booking</Link></li>
                </ul>
            </div>
            <div className="nav-accent"></div>
        </nav>
    );
}

export default Navbar;