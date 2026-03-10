import { useEffect, useRef, useState } from 'react';
import { FiUsers, FiHeadphones, FiTruck, FiMapPin } from 'react-icons/fi';
import './About.css';

const stats = [
    { icon: <FiUsers size={24} />, end: 10000, suffix: '+', label: 'Happy Customers' },
    { icon: <FiHeadphones size={24} />, end: 24, suffix: '/7', label: 'Support' },
    { icon: <FiTruck size={24} />, end: 50, suffix: '+', label: 'Cars Available' },
    { icon: <FiMapPin size={24} />, end: 4, suffix: '', label: 'Locations' },
];

function Counter({ end, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const step = Math.max(1, Math.ceil(end / 60));
                    const interval = setInterval(() => {
                        start += step;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(interval);
                        } else {
                            setCount(start);
                        }
                    }, 30);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref} className="about__stat-number">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__text">
                        <span className="section-label">about us</span>
                        <h2 className="section-title">High Quality Car Rental in Kenya</h2>
                        <p className="about__desc">
                            At Go-Wheels, we are your trusted mobility partner in Kenya, offering car hire
                            in Nairobi, Mombasa, Nanyuki, and Naivasha. Whether you need a car for airport
                            transfers, short-term hire, long-term rental, or 4×4 safari adventures, we
                            provide affordable, reliable, and well-maintained vehicles to match your lifestyle.
                        </p>
                        <p className="about__desc">
                            With a diverse fleet including saloon cars, SUVs, 7-seaters, and luxury rides,
                            we guarantee comfort, safety, and convenience for both business and leisure travel.
                        </p>
                        <a href="#cars" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                            Book Now
                        </a>
                    </div>
                    <div className="about__stats">
                        {stats.map((s) => (
                            <div className="about__stat-card" key={s.label}>
                                <div className="about__stat-icon">{s.icon}</div>
                                <Counter end={s.end} suffix={s.suffix} />
                                <span className="about__stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
