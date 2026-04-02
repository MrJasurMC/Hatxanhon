import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>About Us</h1>
                <p className="subtitle">Building amazing solutions for a better tomorrow</p>
            </section>

            <section className="about-mission">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>
                        We are committed to delivering innovative solutions that transform ideas into reality.
                        Our team works tirelessly to create products and services that make a meaningful impact.
                    </p>
                </div>
            </section>

            <section className="about-values">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>🚀 Innovation</h3>
                        <p>Constantly pushing boundaries and exploring new possibilities</p>
                    </div>
                    <div className="value-card">
                        <h3>👥 Collaboration</h3>
                        <p>Working together to achieve greater results</p>
                    </div>
                    <div className="value-card">
                        <h3>✨ Quality</h3>
                        <p>Delivering excellence in everything we do</p>
                    </div>
                    <div className="value-card">
                        <h3>🎯 Integrity</h3>
                        <p>Building trust through transparency and accountability</p>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <h2>Why Choose Us</h2>
                <ul className="features-list">
                    <li>Expert team with years of experience</li>
                    <li>24/7 customer support</li>
                    <li>Cutting-edge technology</li>
                    <li>Proven track record of success</li>
                    <li>Customized solutions for your needs</li>
                </ul>
            </section>

            <section className="about-contact">
                <h2>Get in Touch</h2>
                <p>Have questions? We'd love to hear from you.</p>
                <button className="contact-btn">Contact Us</button>
            </section>
        </div>
    )
}

export default About