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
            alt="Pammi Tobacco Traders"
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
            Pammi Tobacco Traders
          </h3>

          <p
            style={{
              marginTop: '1rem',
              fontSize: '0.95rem',
              color: '#D4C5A9',
              lineHeight: '1.7'
            }}
          >
             Best exporter of high-quality tobacco
            products serving global markets with excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={{ color: '#d4af37', marginBottom: '1rem' }}>
            Quick Links
          </h4>

          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/products', label: 'Products' },
            // { path: '/team', label: 'Team' },
            { path: '/our-journey', label: 'Our Journey' },
            { path: '/contact', label: 'Contact' }
          ].map((item, i) => (
            <p
              key={i}
              onClick={() => handleNavigation(item.path)}
              style={{
                cursor: 'pointer',
                marginBottom: '0.5rem',
                color: '#E8D4B0',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f4d03f'
                e.target.style.paddingLeft = '0.5rem'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#E8D4B0'
                e.target.style.paddingLeft = '0'
              }}
            >
              → {item.label}
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
            <p key={i} style={{ marginBottom: '0.5rem', color: '#E8D4B0' }}>
              🍃 {item}
            </p>
          ))}
        </div>

        {/* CONTACT */}
        <div>
          <h4 style={{ color: '#d4af37', marginBottom: '1rem' }}>
            Contact Info
          </h4>

          <p style={{ marginBottom: '0.5rem', color: '#E8D4B0', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#E8D4B0'}>
            📍 2-131, Near Community Hall, Konijedu Village, Prakasam District
          </p>
          {/* <p style={{ marginBottom: '0.5rem', color: '#E8D4B0', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#E8D4B0'}>
            📍 2-131, Near Community Hall, Konijedu Village, Prakasam District
          </p> */}
          <p style={{ marginBottom: '0.5rem', color: '#E8D4B0', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#E8D4B0'}>
            📍 1 Overlook Point , STE 653 , Lincolnshire , Illinois , 60069
          </p>

          <p style={{ marginBottom: '0.5rem', color: '#DAA520', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#DAA520'}>
            📞 <a href="tel:+918499934357" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8499934357</a>
          </p>

          <p style={{ marginBottom: '0.5rem', color: '#DAA520', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#DAA520'}>
            📞 <a href="tel:+19723881934" style={{ color: 'inherit', textDecoration: 'none' }}>+1 972-388-1934</a>
          </p>

          <p style={{ marginBottom: '0.5rem', color: '#d4af37', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#d4af37'}>
            ✉️ <a href="mailto:info@pammitobacco.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@pammitobacco.com</a>
          </p>

          <p style={{ color: '#F5DEB3', fontSize: '0.9rem', marginBottom: '1rem' }}>
            🕒 Mon-Fri: 9AM-6PM IST & CST
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://www.linkedin.com/company/pammi-tobacco-traders" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s', filter: 'brightness(1)' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.2) rotate(5deg)'; e.target.style.filter = 'brightness(1.2)' }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1) rotate(0deg)'; e.target.style.filter = 'brightness(1)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#0077B5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://youtube.com/@PammiTobaccoTraders" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s', filter: 'brightness(1)' }} onMouseEnter={(e) => { e.target.style.transform = 'scale(1.2) rotate(-5deg)'; e.target.style.filter = 'brightness(1.2)' }} onMouseLeave={(e) => { e.target.style.transform = 'scale(1) rotate(0deg)'; e.target.style.filter = 'brightness(1)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#FF0000"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
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
        <p style={{ marginBottom: '1rem', color: '#D4C5A9', fontSize: '0.95rem' }}>
          © 2026 Pammi Tobacco Traders. All rights reserved.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '1rem'
          }}
        >
          <Link to="/privacy-policy" style={{ color: '#d4af37', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#d4af37'}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" style={{ color: '#d4af37', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#f4d03f'} onMouseLeave={(e) => e.target.style.color = '#d4af37'}>
            Terms & Conditions
          </Link>
        </div>

        <p style={{ color: 'rgba(212,175,55,0.6)', fontSize: '0.85rem', marginTop: '1rem' }}>
          Developed with ❤️ by <a href="https://staffarc.in" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none', fontWeight: '600' }}><b>StaffArc</b></a>
        </p>
      </div>
    </footer>
  )
}

export default Footer