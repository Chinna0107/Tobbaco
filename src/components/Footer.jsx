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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      navigate(path)
    }
  }

  const footerStyle = {
    background: 'linear-gradient(135deg, #2C1810 0%, #3D2415 50%, #4A2C1A 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: 'white',
    padding: '4rem 2rem 1.5rem',
    borderTop: '2px solid rgba(212, 175, 55, 0.4)',
    boxShadow: '0 -8px 32px rgba(212, 175, 55, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  }

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? '2fr 1fr 1fr 1fr' : '1fr',
    gap: '2rem',
    marginBottom: '3rem',
    position: 'relative',
    zIndex: 1
  }

  const sectionStyle = {
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(139, 69, 19, 0.12))',
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid rgba(212, 175, 55, 0.25)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const headingStyle = {
    fontSize: '1.6rem',
    marginBottom: '0.8rem',
    background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #FFE55C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800',
    letterSpacing: '0.5px'
  }

  const taglineStyle = {
    fontStyle: 'italic',
    background: 'linear-gradient(90deg, #DAA520 0%, #F5DEB3 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    fontSize: '1rem',
    fontWeight: '700'
  }

  const subHeadingStyle = {
    fontSize: '1.3rem',
    marginBottom: '1.2rem',
    background: 'linear-gradient(90deg, #d4af37 0%, #f4d03f 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800'
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const listItemStyle = {
    marginBottom: '0.8rem',
    transition: 'all 0.3s',
    padding: '0.3rem 0'
  }

  const linkStyle = {
    color: '#E8D4B0',
    textDecoration: 'none',
    transition: 'all 0.3s',
    display: 'inline-block',
    fontSize: '0.95rem',
    fontWeight: '600',
    position: 'relative',
    paddingBottom: '0.3rem'
  }

  const bottomStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(212, 175, 55, 0.3)',
    display: 'flex',
    flexDirection: window.innerWidth > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: window.innerWidth > 768 ? 'left' : 'center',
    gap: '1rem'
  }

  const socialStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem'
  }

  const socialIconStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 208, 63, 0.2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(212, 175, 55, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
  }

  const contactInfoStyle = {
    marginTop: '1rem',
    fontSize: '0.95rem',
    lineHeight: '2',
    color: '#D4C5A9'
  }

  const decorStyle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(139, 69, 19, 0.15), transparent)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none'
  }

  return (
    <footer style={footerStyle}>
      <div style={{ ...decorStyle, top: '-100px', left: '-100px' }}></div>
      <div style={{ ...decorStyle, bottom: '-100px', right: '-100px' }}></div>
      
      <div style={contentStyle}>
        <div style={sectionStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={logo} alt="Pammi Tobacco Company" style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              marginBottom: '1rem',
              border: '3px solid rgba(212, 175, 55, 0.5)',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
              objectFit: 'cover'
            }} />
            <h3 style={headingStyle}>Pammi Tobacco Company</h3>
            <p style={taglineStyle}>Premium Tobacco Excellence</p>
          </div>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#D4C5A9', fontWeight: '500', marginTop: '1rem' }}>
            Leading manufacturer and exporter of high-quality tobacco products with over 25 years of experience in serving global markets.
          </p>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={subHeadingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Home<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#about')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ About<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#products')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Products<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#team')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Team<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#testimonials')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Testimonials<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#contact')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Contact<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: 'linear-gradient(90deg, #d4af37, #f4d03f)', transition: 'width 0.3s ease'}}></span></a></li>
          </ul>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={subHeadingStyle}>Our Products</h4>
          <ul style={listStyle}>
            <li style={{ ...listItemStyle, color: '#E8D4B0', fontWeight: '500' }}>🍃 Flue Cured Virginia</li>
            <li style={{ ...listItemStyle, color: '#E8D4B0', fontWeight: '500' }}>🍃 Burley Tobacco</li>
            <li style={{ ...listItemStyle, color: '#E8D4B0', fontWeight: '500' }}>🍃 Traditional Tobacco</li>
            <li style={{ ...listItemStyle, color: '#E8D4B0', fontWeight: '500' }}>🍃 Monsoon Tobacco</li>
            <li style={{ ...listItemStyle, color: '#E8D4B0', fontWeight: '500' }}>🍃 Oriental Blend</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={subHeadingStyle}>Contact Info</h4>
          <div style={contactInfoStyle}>
            <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📍</span>
              <div>
                <strong style={{ color: '#d4af37', fontSize: '1rem', fontWeight: '700' }}>Location</strong>
                <p style={{ color: '#F5DEB3', fontWeight: '600', margin: '0.3rem 0 0 0' }}>Guntur - 522001, Andhra Pradesh, INDIA</p>
              </div>
            </div>
            <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📞</span>
              <div>
                <strong style={{ color: '#d4af37', fontSize: '1rem', fontWeight: '700' }}>Phone</strong>
                <p style={{ color: '#DAA520', fontWeight: '600', margin: '0.3rem 0 0 0' }}>+91 9440522573</p>
                <p style={{ color: '#DAA520', fontWeight: '600', margin: '0.3rem 0 0 0' }}>+1 774 525 4591</p>
              </div>
            </div>
            <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>✉️</span>
              <div>
                <strong style={{ color: '#d4af37', fontSize: '1rem', fontWeight: '700' }}>Email</strong>
                <p style={{ color: '#d4af37', fontWeight: '600', margin: '0.3rem 0 0 0' }}>pemmitobacco@gmail.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🕒</span>
              <div>
                <strong style={{ color: '#d4af37', fontSize: '1rem', fontWeight: '700' }}>Working Hours</strong>
                <p style={{ color: '#F5DEB3', fontWeight: '600', margin: '0.3rem 0 0 0' }}>Mon-Fri: 9AM-6PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={bottomStyle}>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#D4C5A9', fontWeight: '500' }}>© 2025 Pammi Tobacco Company. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} style={{ ...linkStyle, fontSize: '0.9rem', color: '#d4af37', fontWeight: '600' }}>Privacy Policy</Link>
          <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} style={{ ...linkStyle, fontSize: '0.9rem', color: '#d4af37', fontWeight: '600' }}>Terms & Conditions</Link>
          <a href="#" style={{ ...linkStyle, fontSize: '0.9rem', color: '#d4af37', fontWeight: '600' }}>Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
