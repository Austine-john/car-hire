import { FiSearch, FiCalendar, FiFileText, FiTruck } from 'react-icons/fi';
import './HowItWorks.css';

const steps = [
    {
        num: '01',
        icon: <FiSearch size={24} />,
        title: 'Choose Your Car',
        desc: 'Browse our wide fleet of saloon cars, SUVs, 7-seaters, luxury rides, and 4x4s.',
    },
    {
        num: '02',
        icon: <FiCalendar size={24} />,
        title: 'Book Easily',
        desc: 'Reserve online, via website, email, WhatsApp, or by calling our team.',
    },
    {
        num: '03',
        icon: <FiFileText size={24} />,
        title: 'Finalize Paperwork',
        desc: "Quickly upload your Driver's License, ID, and rental details through our secure platform.",
    },
    {
        num: '04',
        icon: <FiTruck size={24} />,
        title: 'Car Delivery',
        desc: 'We deliver your car directly to the airport, your home, or workplace, ready to drive.',
    },
];

export default function HowItWorks() {
    return (
        <section className="how section" id="how">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">how it works</span>
                    <h2 className="section-title">Car Rental Process</h2>
                    <p className="section-subtitle mx-auto">
                        Hiring a car with Go-Wheels is fast, simple, and stress-free. In just four steps
                        you can book online and have a car delivered to you.
                    </p>
                </div>

                <div className="how__grid">
                    {steps.map((s, i) => (
                        <div className="how-step" key={s.num}>
                            <div className="how-step__num">{s.num}</div>
                            <div className="how-step__icon">{s.icon}</div>
                            <h3 className="how-step__title">{s.title}</h3>
                            <p className="how-step__desc">{s.desc}</p>
                            {i < steps.length - 1 && <div className="how-step__connector" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
