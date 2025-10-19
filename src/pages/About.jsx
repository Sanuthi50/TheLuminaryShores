// About.jsx
import { Waves, Sparkles, Sun, Award, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/About.css';

function About() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxOffset = scrollY * 0.3;

    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay" />

                <div 
                    className="about-hero-content"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                >
                    <div className="about-hero-icons">
                        <Sun size={28} className="about-hero-sun" />
                        <Sparkles size={24} />
                    </div>
                    
                    <h1 className="about-hero-title">
                        The Luminary Shores
                    </h1>
                    
                    <p className="about-hero-subtitle">
                        About Luminary Shores
                    </p>
                </div>

                 {/* Decorative Wave SVG */}
                <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                    d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    fill="#FCFDFC"
                />
                </svg>
            </section>

            {/* Introduction Section */}
            <section className="about-intro-section">
                <p className="about-intro-text">
                    Welcome to a sanctuary where luminescence and tranquility converge. The Luminary Shores is not merely a destination—it is an experience of seamless elegance, where every moment is bathed in the golden radiance of coastal luxury.
                </p>
                <p className="about-intro-subtext">
                    Here, the boundary between earth and sky dissolves into an endless horizon, and your journey unfolds as naturally as light dancing across water.
                </p>

                <div className="about-divider" />
            </section>

            {/* Feature Cards Section */}
            <section className="about-features-section">
                <div className="about-features-grid">
                    {/* Card 1 */}
                    <div className="about-feature-card">
                        <div className="about-feature-icon ocean">
                            <Waves size={28} color="#FCFDFC" />
                        </div>
                        <h3 className="about-feature-title">
                            Coastal Serenity
                        </h3>
                        <p className="about-feature-text">
                            Immerse yourself in panoramic ocean vistas from every angle, where floor-to-ceiling glass walls frame the endless blue.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="about-feature-card">
                        <div className="about-feature-icon luxury">
                            <Sparkles size={28} color="#1A2E3A" />
                        </div>
                        <h3 className="about-feature-title">
                            Luminous Luxury
                        </h3>
                        <p className="about-feature-text">
                            Experience world-class amenities bathed in natural light, from our spa sanctuaries to our Michelin-starred dining pavilions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="about-feature-card">
                        <div className="about-feature-icon service">
                            <Heart size={28} color="#1A2E3A" />
                        </div>
                        <h3 className="about-feature-title">
                            Seamless Service
                        </h3>
                        <p className="about-feature-text">
                            Our dedicated team ensures your every need is anticipated, creating a fluid journey from arrival to departure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="about-philosophy-section">
                <div className="about-philosophy-box">
                    <div className="about-philosophy-header">
                        <Award size={32} color="#D4C19C" />
                        <h2 className="about-philosophy-title">
                            Our Philosophy
                        </h2>
                    </div>
                    
                    <p className="about-philosophy-text">
                        At The Luminary Shores, we believe luxury is found in the seamless flow of experiences. Like light refracting through crystal-clear waters, every element of your stay is designed to blend harmoniously—from the moment you step onto our sunlit terraces to the tranquil evenings spent beneath star-scattered skies.
                    </p>
                    
                    <p className="about-philosophy-subtext">
                        We are curators of luminescent moments, architects of memories that shimmer long after you depart our shores.
                    </p>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="about-closing-section">
                <p className="about-closing-quote">
                    "Where every sunset is a promise, and every dawn is a revelation."
                </p>
                <div className="about-closing-divider" />
            </section>
        </div>
    );
}

export default About;