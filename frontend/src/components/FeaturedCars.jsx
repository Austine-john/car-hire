import { useRef } from 'react';
import { FiUsers, FiSettings, FiDroplet, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TbManualGearbox } from 'react-icons/tb';
import './FeaturedCars.css';

const cars = [
    {
        name: 'Honda Fit',
        seats: 5,
        engine: '1200cc',
        fuel: 'Petrol',
        transmission: 'Auto',
        price: '3,500',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=260&fit=crop',
    },
    {
        name: 'Subaru Legacy G4',
        seats: 5,
        engine: '2000cc',
        fuel: 'Petrol',
        transmission: 'Auto',
        price: '5,000',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=260&fit=crop',
    },
    {
        name: 'Mazda Atenza',
        seats: 5,
        engine: '2200cc',
        fuel: 'Diesel',
        transmission: 'Auto',
        price: '5,500',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=260&fit=crop',
    },
    {
        name: 'Toyota Harrier',
        seats: 5,
        engine: '2000cc',
        fuel: 'Petrol',
        transmission: 'Auto',
        price: '7,000',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=260&fit=crop',
    },
    {
        name: 'Prado TX',
        seats: 5,
        engine: '2700cc',
        fuel: 'Diesel',
        transmission: 'Auto',
        price: '12,000',
        image: 'https://images.unsplash.com/photo-1564694202883-46e7fa827764?w=400&h=260&fit=crop',
    },
    {
        name: 'Double Cabin',
        seats: 5,
        engine: '2700cc',
        fuel: 'Diesel',
        transmission: 'Manual',
        price: '10,000',
        image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=400&h=260&fit=crop',
    },
];

export default function FeaturedCars() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (!scrollRef.current) return;
        const amount = 340;
        scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    return (
        <section className="featured section" id="cars">
            <div className="container">
                <div className="featured__header">
                    <div>
                        <span className="section-label">our fleet</span>
                        <h2 className="section-title">Your Trusted Mobility Partner</h2>
                        <p className="section-subtitle">
                            Browse our wide range of well-maintained, insured vehicles — from economy to luxury.
                        </p>
                    </div>
                    <div className="featured__nav">
                        <button className="featured__nav-btn" onClick={() => scroll('left')} aria-label="Scroll left">
                            <FiChevronLeft size={20} />
                        </button>
                        <button className="featured__nav-btn" onClick={() => scroll('right')} aria-label="Scroll right">
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="featured__track" ref={scrollRef}>
                    {cars.map((car) => (
                        <div className="car-card" key={car.name}>
                            <div className="car-card__img-wrap">
                                <img src={car.image} alt={car.name} className="car-card__img" loading="lazy" />
                                <span className="car-card__price">Ksh {car.price}/day</span>
                            </div>
                            <div className="car-card__body">
                                <h3 className="car-card__name">{car.name}</h3>
                                <div className="car-card__specs">
                                    <div className="car-card__spec">
                                        <FiUsers size={14} />
                                        <span>{car.seats}</span>
                                    </div>
                                    <div className="car-card__spec">
                                        <FiSettings size={14} />
                                        <span>{car.engine}</span>
                                    </div>
                                    <div className="car-card__spec">
                                        <FiDroplet size={14} />
                                        <span>{car.fuel}</span>
                                    </div>
                                    <div className="car-card__spec">
                                        <TbManualGearbox size={14} />
                                        <span>{car.transmission}</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-outline-dark car-card__btn">Book Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
