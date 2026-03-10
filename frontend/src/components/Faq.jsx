import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './Faq.css';

const faqs = [
    {
        q: 'What documents do I need to hire a car?',
        a: "You only need a valid Driver's License, National ID/Passport, and rental details. Everything is submitted online for a quick, paperless process.",
    },
    {
        q: 'Do you deliver cars to my location?',
        a: 'Yes ✅ We deliver directly to your airport, home, or workplace in Nairobi, Mombasa, Nanyuki, and Naivasha.',
    },
    {
        q: 'How does Earn with My Car work?',
        a: "Absolutely. We manage and maintain your car, handle clients, and ensure monthly payouts even when the car isn't hired.",
    },
    {
        q: 'What is Rent-to-Own?',
        a: 'Our Rent-to-Own program lets you drive a car while paying affordable monthly installments. Once the payments are complete, ownership is fully transferred to you.',
    },
    {
        q: 'Are long-term rentals available?',
        a: 'Yes. We provide daily, weekly, monthly, and yearly car rental options to suit your travel, corporate, or personal needs.',
    },
];

export default function Faq() {
    const [openIdx, setOpenIdx] = useState(null);

    const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

    return (
        <section className="faq section" id="faq">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">faqs</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle mx-auto">
                        At Go-Wheels, we make mobility simple, flexible, and reliable — whatever your journey.
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((item, i) => (
                        <div className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`} key={i}>
                            <button className="faq__question" onClick={() => toggle(i)}>
                                <span>{item.q}</span>
                                {openIdx === i ? <FiMinus size={20} /> : <FiPlus size={20} />}
                            </button>
                            <div className="faq__answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
