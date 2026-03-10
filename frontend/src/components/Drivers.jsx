import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import './Drivers.css';

const drivers = [
    {
        name: 'Shantel Shanny',
        role: 'Airport Transfer Specialist',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face',
    },
    {
        name: 'James Olekare',
        role: 'Safari & Game Drive Expert',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
    {
        name: 'Peter Njoroge',
        role: 'Long Journey & Explorative Trips',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    },
];

export default function Drivers() {
    return (
        <section className="drivers section section-light" id="drivers">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">meet drivers</span>
                    <h2 className="section-title">Meet Our Top Drivers</h2>
                    <p className="section-subtitle mx-auto">
                        Our drivers are more than chauffeurs — they are trusted travel partners, carefully
                        selected for professionalism, safety, and local expertise.
                    </p>
                </div>

                <div className="drivers__grid">
                    {drivers.map((d) => (
                        <div className="driver-card" key={d.name}>
                            <div className="driver-card__img-wrap">
                                <img src={d.image} alt={d.name} className="driver-card__img" loading="lazy" />
                            </div>
                            <div className="driver-card__info">
                                <h3 className="driver-card__name">{d.name}</h3>
                                <p className="driver-card__role">{d.role}</p>
                                <div className="driver-card__socials">
                                    <a href="#" className="driver-card__social" aria-label="Facebook">
                                        <FiFacebook size={16} />
                                    </a>
                                    <a href="#" className="driver-card__social" aria-label="Twitter">
                                        <FiTwitter size={16} />
                                    </a>
                                    <a href="#" className="driver-card__social" aria-label="YouTube">
                                        <FiYoutube size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
