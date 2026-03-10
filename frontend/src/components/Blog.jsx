import { FiArrowRight } from 'react-icons/fi';
import './Blog.css';

const posts = [
    {
        title: 'The Future of Car Hire, Leasing and Mobility in Kenya',
        excerpt: 'The way Kenyans hire, lease and own cars is rapidly evolving. Discover the trends shaping the future of mobility...',
        image: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=400&h=250&fit=crop',
        date: 'Mar 5, 2026',
    },
    {
        title: 'Why Diaspora and Long-Stay Visitors Choose Go-Wheels',
        excerpt: 'Every year, thousands of Kenyans living abroad and international visitors come back and need reliable wheels...',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop',
        date: 'Feb 28, 2026',
    },
    {
        title: 'Road Trip and Upcountry Car Hire in Kenya',
        excerpt: 'Road trips in Kenya have become extremely popular as more people explore the country by self-drive...',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
        date: 'Feb 20, 2026',
    },
];

export default function Blog() {
    return (
        <section className="blog section section-light" id="blog">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">our blog</span>
                    <h2 className="section-title">Latest News and Insights</h2>
                </div>

                <div className="blog__grid">
                    {posts.map((post) => (
                        <a href="#" className="blog-card" key={post.title}>
                            <div className="blog-card__img-wrap">
                                <img src={post.image} alt={post.title} className="blog-card__img" loading="lazy" />
                            </div>
                            <div className="blog-card__body">
                                <span className="blog-card__date">{post.date}</span>
                                <h3 className="blog-card__title">{post.title}</h3>
                                <p className="blog-card__excerpt">{post.excerpt}</p>
                                <span className="blog-card__link">
                                    Learn more <FiArrowRight size={14} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
