import { FiPhone, FiMail, FiMapPin, FiClock, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand & Contact */}
                    <div className="footer__col">
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-go">Go</span>
                            <span className="footer__logo-wheels">Wheels</span>
                        </a>
                        <p className="footer__desc">
                            Your trusted mobility partner in Kenya. Drive more, worry less.
                        </p>
                        <div className="footer__contact-list">
                            <a href="tel:+254793373705" className="footer__contact-item">
                                <FiPhone size={16} /> +254 793 373 705
                            </a>
                            <a href="mailto:info@gowheels.co.ke" className="footer__contact-item">
                                <FiMail size={16} /> info@gowheels.co.ke
                            </a>
                            <div className="footer__contact-item">
                                <FiMapPin size={16} /> Muthaiga N. Kahawa Sukari
                            </div>
                            <div className="footer__contact-item">
                                <FiClock size={16} /> 06:00 AM - 22:00 PM
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <div className="footer__links">
                            <a href="#home" className="footer__link">Home</a>
                            <a href="#about" className="footer__link">About Us</a>
                            <a href="#cars" className="footer__link">Hire a Car</a>
                            <a href="#blog" className="footer__link">Blog</a>
                            <a href="#footer" className="footer__link">Contact Us</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Services</h4>
                        <div className="footer__links">
                            <a href="#" className="footer__link">Small/Economy Cars</a>
                            <a href="#" className="footer__link">Economy Sedans</a>
                            <a href="#" className="footer__link">SUVs & Crossovers</a>
                            <a href="#" className="footer__link">Family & Group Vans</a>
                            <a href="#" className="footer__link">Luxury & Executive</a>
                            <a href="#" className="footer__link">Pickups & Utility</a>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Why Choose Us?</h4>
                        <ul className="footer__features">
                            <li>Wide range of cars</li>
                            <li>Flexible rental options</li>
                            <li>Self-drive or chauffeur-driven</li>
                            <li>Over 10k+ satisfied customers</li>
                            <li>No hidden costs</li>
                        </ul>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="Instagram"><FiInstagram size={18} /></a>
                            <a href="#" className="footer__social" aria-label="X Twitter"><FaXTwitter size={18} /></a>
                            <a href="#" className="footer__social" aria-label="TikTok"><FaTiktok size={18} /></a>
                            <a href="#" className="footer__social" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} GoWheels Kenya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
