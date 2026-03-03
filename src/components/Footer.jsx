import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.jpeg'

function Footer() {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2)
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      navigate(path)
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #2C1810, #3D2415, #4A2C1A)',
        color: 'white',
        padding: '3rem 1rem 1.5rem',
        borderTop: '2px solid rgba(212,175,55,0.4)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem'
        }}
      >
        {/* COMPANY INFO */}
        <div style={{ textAlign: 'center' }}>
          <img
            src={logo}
            alt="Pammi Tobacco Company"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              marginBottom: '1rem',
              objectFit: 'cover',
              border: '3px solid rgba(212,175,55,0.5)'
            }}
          />

          <h3
            style={{
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg,#d4af37,#f4d03f)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Pammi Tobacco Company
          </h3>

          <p
            style={{
              marginTop: '1rem',
              fontSize: '0.95rem',
              color: '#D4C5A9',
              lineHeight: '1.7'
            }}
          >
            Leading manufacturer and exporter of high-quality tobacco
            products serving global markets with excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={{ color: '#d4af37', marginBottom: '1rem' }}>
            Quick Links
          </h4>

          {['/', '/#about', '/#products', '/#team', '/#testimonials', '/#contact'].map((path, i) => (
            <p
              key={i}
              onClick={() => handleNavigation(path)}
              style={{
                cursor: 'pointer',
                marginBottom: '0.7rem',
                color: '#E8D4B0'
              }}
            >
              → {path === '/' ? 'Home' : path.replace('/#', '').replace('-', ' ')}
            </p>
          ))}
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 style={{ color: '#d4af37', marginBottom: '1rem' }}>
            Our Products
          </h4>

          {[
            'Flue Cured Virginia',
            'Burley Tobacco',
            'Traditional Tobacco',
            'Monsoon Tobacco',
            'Oriental Blend'
          ].map((item, i) => (
            <p key={i} style={{ marginBottom: '0.7rem', color: '#E8D4B0' }}>
              🍃 {item}
            </p>
          ))}
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ color: '#d4af37', marginBottom: '1rem' }}>
            Contact Info
          </h4>

          <p style={{ marginBottom: '0.7rem', color: '#E8D4B0' }}>
            📍 Guntur - 522001, Andhra Pradesh, INDIA
          </p>

          <p style={{ marginBottom: '0.7rem', color: '#DAA520' }}>
            📞 +91 9440522573
          </p>

          <p style={{ marginBottom: '0.7rem', color: '#DAA520' }}>
            📞 +1 774 525 4591
          </p>

          <p style={{ marginBottom: '0.7rem', color: '#d4af37' }}>
            ✉️ vengamambatobaccocompany@gmail.com
          </p>

          <p style={{ color: '#F5DEB3' }}>
            🕒 Mon-Fri: 9AM-6PM IST
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div
        style={{
          marginTop: '3rem',
          borderTop: '1px solid rgba(212,175,55,0.3)',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        <p style={{ marginBottom: '1rem', color: '#D4C5A9' }}>
          © 2025 Pammi Tobacco Company. All rights reserved.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <Link to="/privacy-policy" style={{ color: '#d4af37' }}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" style={{ color: '#d4af37' }}>
            Terms & Conditions
          </Link>
          <a href="#" style={{ color: '#d4af37' }}>
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer