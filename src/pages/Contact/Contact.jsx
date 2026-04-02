import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <section className='contact'>
        <div className='modern-header' style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          padding: '60px 20px',
          borderRadius: '20px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite'
        }}>
          <h1 style={{
            fontSize: '3em',
            fontWeight: '800',
            marginBottom: '15px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '1px'
          }}>Contact Us</h1>
          <p style={{
            fontSize: '1.1em',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Get in touch with us for any inquiries or support</p>
        </div>
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
    </section>
  )
}

export default Contact