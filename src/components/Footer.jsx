import { Link, useNavigate } from 'react-router-dom'

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
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: 'white',
    padding: '4rem 2rem 1.5rem',
    borderTop: '2px solid rgba(102, 126, 234, 0.3)',
    boxShadow: '0 -8px 32px rgba(102, 126, 234, 0.15)',
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
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const headingStyle = {
    fontSize: '1.6rem',
    marginBottom: '0.8rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  }

  const taglineStyle = {
    fontStyle: 'italic',
    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
    fontSize: '1rem',
    fontWeight: '600'
  }

  const subHeadingStyle = {
    fontSize: '1.3rem',
    marginBottom: '1.2rem',
    background: 'linear-gradient(90deg, #fa709a 0%, #fee140 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '700'
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
    color: '#e0e0e0',
    textDecoration: 'none',
    transition: 'all 0.3s',
    display: 'inline-block',
    fontSize: '0.95rem',
    fontWeight: '500',
    position: 'relative',
    paddingBottom: '0.3rem'
  }

  const bottomStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(102, 126, 234, 0.3)',
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
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(102, 126, 234, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '1.2rem',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)'
  }

  const contactInfoStyle = {
    marginTop: '1rem',
    fontSize: '0.95rem',
    lineHeight: '2',
    color: '#b8b8d1'
  }

  const decorStyle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)',
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
          <h3 style={headingStyle}>Pammi Tobacco Company</h3>
          <p style={taglineStyle}>Premium Tobacco Excellence</p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#c5c5d8' }}>
            Leading manufacturer and exporter of high-quality tobacco products with over 25 years of experience in serving global markets.
          </p>
          <div style={socialStyle}>
            <div style={socialIconStyle}>📘</div>
            <div style={socialIconStyle}>🐦</div>
            <div style={socialIconStyle}>📷</div>
            <div style={socialIconStyle}>💼</div>
          </div>
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
            }}>→ Home<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#about')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ About<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#products')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Products<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#team')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Team<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#testimonials')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Testimonials<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
            <li style={listItemStyle}><a onClick={() => handleNavigation('/#contact')} style={{...linkStyle, cursor: 'pointer'}} onMouseEnter={(e) => {
              e.target.style.color = '#d4af37'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#e0e0e0'
              e.target.querySelector('.underline').style.width = '0%'
            }}>→ Contact<span className="underline" style={{position: 'absolute', bottom: 0, left: 0, width: '0%', height: '2px', background: '#000', transition: 'width 0.3s ease'}}></span></a></li>
          </ul>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={subHeadingStyle}>Our Products</h4>
          <ul style={listStyle}>
            <li style={{ ...listItemStyle, color: '#a8dadc' }}>🍃 Flue Cured Virginia</li>
            <li style={{ ...listItemStyle, color: '#a8dadc' }}>🍃 Burley Tobacco</li>
            <li style={{ ...listItemStyle, color: '#a8dadc' }}>🍃 Traditional Tobacco</li>
            <li style={{ ...listItemStyle, color: '#a8dadc' }}>🍃 Monsoon Tobacco</li>
            <li style={{ ...listItemStyle, color: '#a8dadc' }}>🍃 Oriental Blend</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={subHeadingStyle}>Contact Info</h4>
          <div style={contactInfoStyle}>
            <p style={{ color: '#ffd166' }}>📍 Guntur - 522001, Andhra Pradesh, INDIA</p>
            <p style={{ color: '#06ffa5' }}>📞 +91 9440522573</p>
            <p style={{ color: '#06ffa5' }}>📞 +1 774 525 4591</p>
            <p style={{ color: '#4facfe' }}>✉️ pemmitobacco@gmail.com</p>
            <p style={{ color: '#f093fb' }}>🕒 Mon-Fri: 9AM-6PM IST</p>
          </div>
        </div>
      </div>
      
      <div style={bottomStyle}>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#b8b8d1' }}>© 2025 Pammi Tobacco Company. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} style={{ ...linkStyle, fontSize: '0.9rem', color: '#4facfe' }}>Privacy Policy</Link>
          <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} style={{ ...linkStyle, fontSize: '0.9rem', color: '#4facfe' }}>Terms & Conditions</Link>
          <a href="#" style={{ ...linkStyle, fontSize: '0.9rem', color: '#4facfe' }}>Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
