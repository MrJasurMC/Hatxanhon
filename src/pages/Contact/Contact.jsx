import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section className='contact'>
        <header className='header'>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch with us today!</p>
            <div className='contact-info'>
                <div className='info-item'>
                    <span className='icon'>📧</span>
                    <p>info@example.com</p>
                </div>
                <div className='info-item'>
                    <span className='icon'>📞</span>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className='info-item'>
                    <span className='icon'>📍</span>
                    <p>123 Main Street, City, Country</p>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Contact