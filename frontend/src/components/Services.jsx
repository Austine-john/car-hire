import { FiTruck, FiNavigation, FiClock, FiCalendar } from 'react-icons/fi';
import './Services.css';

const services = [
    {
        icon: <FiTruck size={28} />,
        title: 'Car Hire Services',
        desc: 'Affordable and reliable car hire in Nairobi, Mombasa, Nanyuki, and Naivasha — from economy cars to luxury SUVs.',
    },
    {
        icon: <FiNavigation size={28} />,
        title: 'Airport Transfers',
        desc: 'Reliable airport transfers in Nairobi & Mombasa. Comfortable, on-time pickups and drop-offs with executive cars.',
    },
    {
        icon: <FiClock size={28} />,
        title: 'Short-Term Rentals',
        desc: 'Flexible daily and weekend car hire. Perfect for business, weddings, road trips, or errands.',
    },
    {
        icon: <FiCalendar size={28} />,
        title: 'Long-Term Rentals',
        desc: 'Affordable monthly car hire in Kenya. Ideal for corporates, expats, and projects. Includes servicing and insurance.',
    },
];

export default function Services() {
    return (
        <section className="services section section-dark" id="services">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">our services</span>
                    <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
                        Amazing Car Hire Services
                    </h2>
                    <p className="section-subtitle section-subtitle-light mx-auto">
                        Whether you need a car for a day, a year, or forever — Go-Wheels offers a seamless end-to-end solution.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((s) => (
                        <div className="service-card" key={s.title}>
                            <div className="service-card__icon">{s.icon}</div>
                            <h3 className="service-card__title">{s.title}</h3>
                            <p className="service-card__desc">{s.desc}</p>
                            <a href="#" className="service-card__link">
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
