import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__bg" />
            <div className="hero__overlay" />
            <div className="hero__content container">
                <div className="hero__badge animate-fade-in">
                    <span className="hero__badge-dot" />
                    welcome to GoWheels
                </div>
                <h1 className="hero__title">
                    Hire a Car, List your car
                    <br />
                    and earn, or <span className="hero__title-accent">Rent a Car to Own</span>
                </h1>
                <p className="hero__subtitle">
                    Go-Wheels is your trusted mobility partner in Kenya. We offer car hire,
                    earn with your car, rent-to-own, 4×4 game drive experiences, and car import
                    services. Serving Nairobi, Mombasa, Nanyuki and Naivasha.
                </p>
                <div className="hero__actions">
                    <a href="#cars" className="btn btn-primary btn-lg">
                        View All Cars <FiArrowRight />
                    </a>
                    <a href="#contact" className="btn btn-outline btn-lg">
                        Book Now
                    </a>
                </div>
                <div className="hero__stats">
                    <div className="hero__stat">
                        <strong>10,000+</strong>
                        <span>Happy Customers</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <strong>50+</strong>
                        <span>Cars Available</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <strong>4</strong>
                        <span>Locations</span>
                    </div>
                </div>
            </div>
            <div className="hero__scroll-indicator">
                <FiChevronDown size={20} />
            </div>
        </section>
    );
}
