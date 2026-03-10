import { FiArrowRight } from 'react-icons/fi';
import './CtaBanner.css';

export default function CtaBanner() {
    return (
        <section className="cta-banner">
            <div className="cta-banner__bg" />
            <div className="container cta-banner__inner">
                <span className="section-label">book your car</span>
                <h2 className="cta-banner__title">Drive The Journey You Deserve</h2>
                <p className="cta-banner__text">
                    Trusted cars, trusted drivers — because you deserve more than just a trip.
                </p>
                <a href="#cars" className="btn btn-primary btn-lg">
                    Book a Car <FiArrowRight />
                </a>
            </div>
        </section>
    );
}
