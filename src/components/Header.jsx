import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.jpeg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
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
    setMenuOpen(false)
  }

  return (
    <nav style={{
      background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.95) 0%, rgba(101, 67, 33, 0.95) 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '1rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 8px 32px rgba(139, 69, 19, 0.3)',
      border: '1px solid rgba(218, 165, 32, 0.2)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer'
        }} onClick={() => {
          if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            navigate('/')
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
          }
        }}>
          <img src={logo} alt="Pammi Tobacco" style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '3px solid rgba(218, 165, 32, 0.5)',
            boxShadow: '0 4px 15px rgba(218, 165, 32, 0.3)',
            objectFit: 'cover'
          }} />
          <h1 style={{
            fontSize: '1.4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #DAA520 0%, #F5DEB3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>Pammi Tobacco</h1>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{
            display: window.innerWidth > 768 ? 'flex' : 'none',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link to="/" style={{
              color: '#f1eeec',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              position: 'relative',
              padding: '0.5rem 0'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#8B4513'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#333'
              e.target.querySelector('.underline').style.width = '0%'
            }}>
              Home
              <span className="underline" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(135deg, #8B4513, #654321)',
                transition: 'width 0.3s ease'
              }}></span>
            </Link>
            <a href="#about" onClick={(e) => {
              e.preventDefault()
              handleNavigation('/#about')
            }} style={{
              color: '#e7e3e0',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#DAA520'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#F5DEB3'
              e.target.querySelector('.underline').style.width = '0%'
            }}>
              About
              <span className="underline" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(135deg, #DAA520, #8B4513)',
                transition: 'width 0.3s ease'
              }}></span>
            </a>
            <a href="#products" onClick={(e) => {
              e.preventDefault()
              handleNavigation('/#products')
            }} style={{
              color: '#f4f0ed',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#DAA520'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#F5DEB3'
              e.target.querySelector('.underline').style.width = '0%'
            }}>
              Products
              <span className="underline" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(135deg, #DAA520, #8B4513)',
                transition: 'width 0.3s ease'
              }}></span>
            </a>
            <a href="#team" onClick={(e) => {
              e.preventDefault()
              handleNavigation('/#team')
            }} style={{
              color: '#eae6e3',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#DAA520'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#F5DEB3'
              e.target.querySelector('.underline').style.width = '0%'
            }}>
              Team
              <span className="underline" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(135deg, #DAA520, #8B4513)',
                transition: 'width 0.3s ease'
              }}></span>
            </a>
            <a href="#testimonials" onClick={(e) => {
              e.preventDefault()
              handleNavigation('/#testimonials')
            }} style={{
              color: '#f1eae5',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 0'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#DAA520'
              e.target.querySelector('.underline').style.width = '100%'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#F5DEB3'
              e.target.querySelector('.underline').style.width = '0%'
            }}>
              Testimonials
              <span className="underline" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '2px',
                background: 'linear-gradient(135deg, #8B4513, #654321)',
                transition: 'width 0.3s ease'
              }}></span>
            </a>
          </div>

            <a href="#contact" onClick={(e) => {
              e.preventDefault()
              handleNavigation('/#contact')
            }} style={{
              display: window.innerWidth > 768 ? 'block' : 'none',
              background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
              color: '#000',
              fontSize: '1rem',
              fontWeight: '700',
              padding: '0.7rem 1.5rem',
              borderRadius: '25px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
              transition: 'all 0.3s',
              textDecoration: 'none',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.6)'
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.4)'
            }}>Contact ⚡</a>

          <button style={{
            background: 'transparent',
            border: 'none',
            color: '#f8f4f1',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '0.5rem',
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            alignItems: 'center',
            transition: 'transform 0.3s ease',
            transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
          }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '⋯'}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: '2rem',
            marginTop: '0.5rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(250, 250, 250, 0.98))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139, 69, 19, 0.3)',
            borderRadius: '15px',
            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)',
            minWidth: '200px',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#8B4513',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                  navigate('/')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }
                setMenuOpen(false)
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Home
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#f9f1ed',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => handleNavigation('/#about')}
              onMouseEnter={(e) => e.target.style.background = 'rgba(205, 40, 40, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                About
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#8B4513',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => handleNavigation('/#products')}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Products
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#8B4513',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => handleNavigation('/#team')}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Team
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#8B4513',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => handleNavigation('/#testimonials')}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Testimonials
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                color: '#8B4513',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '0.95rem'
              }} onClick={() => handleNavigation('/#contact')}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                Contact ᥫ᭡
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
