import { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import './Testimonials.css';

const reviews = [
    {
        text: "Best car hire experience I've had in Kenya. I booked online and the car was delivered to the airport on time, spotless and ready to go. The whole process was smooth and stress-free. Highly recommend Go-Wheels.",
        author: 'Sarah M.',
        role: 'Tourist',
        rating: 5,
    },
    {
        text: 'They really made my trip easy. I needed a car for two weeks in Nanyuki and Go-Wheels handled everything. The driver was professional, the car was well-maintained, and the support team kept checking in. Great service!',
        author: 'David K.',
        role: 'Business Traveler',
        rating: 5,
    },
    {
        text: 'Earned income without the hassle. I listed my 2 cars with Go-Wheels last year and every month I receive my payouts on time. They take care of the cars. It\'s truly passive income for me.',
        author: 'Grace W.',
        role: 'Car Owner',
        rating: 5,
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const review = reviews[active];

    return (
        <section className="testimonials section section-dark" id="testimonials">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">testimonials</span>
                    <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
                        Our Customers' Reviews
                    </h2>
                </div>

                <div className="testimonials__card">
                    <RiDoubleQuotesL className="testimonials__quote-icon" size={48} />
                    <div className="testimonials__stars">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <FiStar key={i} size={18} fill="var(--color-star)" color="var(--color-star)" />
                        ))}
                    </div>
                    <p className="testimonials__text">{review.text}</p>
                    <div className="testimonials__author">
                        <strong>{review.author}</strong>
                        <span>{review.role}</span>
                    </div>
                </div>

                <div className="testimonials__dots">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Review ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
