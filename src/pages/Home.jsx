import { Link } from 'react-router-dom'
import { FaStar, FaGlobe, FaUsers, FaAward } from 'react-icons/fa'
import logo from '../assets/Logo.jpeg'
import screenshot from '../assets/Screen.png'

function Home() {
  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section - Full Screen */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        backgroundImage: 'url(https://gumlet.assettype.com/downtoearth/2025-03-14/gd6d1lyb/Tobacco.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(139, 69, 19, 0.5))'
        }}></div>
        
        <div className="hero-content" style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          padding: '2rem 1rem',
          maxWidth: '900px',
          width: '100%'
        }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            color: '#FFD700'
          }}>Pammi Tobacco</h1>
          
          <h2 className="hero-subtitle" style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#d4af37',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}>Global Excellence</h2>
          
          <p className="hero-description" style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
            lineHeight: '1.8',
            marginBottom: '2.5rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            padding: '0 1rem'
          }}>
            Leading manufacturer and exporter of high-quality flue cured Virginia tobacco and burley tobacco. Your trusted partner for premium tobacco products worldwide.
          </p>
          
          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            padding: '0 1rem'
          }}>
            <Link to="/contact" style={{
              background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
              color: '#000',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '30px',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: '700',
              boxShadow: '0 6px 25px rgba(212, 175, 55, 0.5)',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}>Get Quote Now</Link>
            
            <Link to="/products" style={{
              background: 'rgba(255, 215, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              color: '#FFD700',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '30px',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              fontWeight: '700',
              border: '2px solid #FFD700',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}>View Products</Link>
          </div>
          
          <div className="hero-stats" style={{
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 3rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '0 1rem'
          }}>
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '100+', label: 'Happy Clients' },
              { value: '100%', label: 'Quality Assured' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(139, 69, 19, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.2rem, 3vw, 2rem)',
                borderRadius: '15px',
                border: '1px solid rgba(139, 69, 19, 0.3)',
                minWidth: 'clamp(120px, 20vw, 150px)'
              }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  color: '#d4af37',
                  marginBottom: '0.5rem'
                }}>{stat.value}</div>
                <div style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-arrow" style={{
          position: 'absolute',
          bottom: '2rem',
          zIndex: 1,
          animation: 'bounce 2s infinite',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#d4af37',
          cursor: 'pointer'
        }}>↓</div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #8B4513 0%, #d4af37 50%, #f4d03f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>About Pammi Tobacco Company</h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#654321', marginBottom: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', fontWeight: '500' }}>
            Your trusted partner in premium tobacco trading with a legacy of excellence spanning over two decades
          </p>
          
          {/* Logo and Description */}
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center', marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            {/* Logo - Left Side */}
            <div style={{
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 5vw, 3rem)',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <img src={logo} alt="Pammi Tobacco Company" style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                border: '3px solid rgba(212, 175, 55, 0.5)',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)'
              }} />
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '800', marginBottom: '0.5rem', color: '#8B4513' }}>Pammi Tobacco</h3>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#d4af37', fontWeight: '700', fontStyle: 'italic' }}>Premium Excellence Since 1998</p>
            </div>

            {/* Description - Right Side */}
            <div style={{
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 5vw, 3rem)',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)'
            }}>
              <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', lineHeight: '1.8', color: '#654321', fontWeight: '400' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Pammi Tobacco Company (PTC) is a trusted dealer, supplier, and exporter of high-quality leaf tobacco. With years of expertise in the tobacco industry, we specialize in sourcing, processing, and delivering premium-grade tobacco to global markets.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Our commitment to excellence, integrity, and customer satisfaction has positioned us as a reliable partner for tobacco importers, manufacturers, and distributors worldwide.
                </p>
                <p>
                  At PTC, we take pride in offering a wide range of unmanufactured Virginia Flue-Cured Tobacco, meticulously graded to meet the diverse needs of our international clientele.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div style={{
            background: 'rgba(139, 69, 19, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            border: '1px solid rgba(139, 69, 19, 0.2)',
            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)'
          }}>
            <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: '800', marginBottom: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', background: 'linear-gradient(135deg, #8B4513, #d4af37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Why Choose PTC?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://venkatasaitobacco.com/assets/images/leaf/02.jpg" alt="Quality" style={{ width: '200px', height: '200px', borderRadius: '20px', marginBottom: '1rem', border: '3px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)', objectFit: 'cover' }} />
                <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', color: '#8B4513', marginBottom: '0.5rem' }}>Premium Quality</h4>
                <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#654321', lineHeight: '1.6', fontWeight: '400' }}>High-grade tobacco meeting international standards</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://venkatasaitobacco.com/assets/images/leaf/01.jpg" alt="Global" style={{ width: '200px', height: '200px', borderRadius: '20px', marginBottom: '1rem', border: '3px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)', objectFit: 'cover' }} />
                <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', color: '#8B4513', marginBottom: '0.5rem' }}>Global Reach</h4>
                <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#654321', lineHeight: '1.6', fontWeight: '400' }}>Export to 50+ countries with seamless logistics</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://venkatasaitobacco.com/assets/images/leaf/03.jpg" alt="Customer" style={{ width: '200px', height: '200px', borderRadius: '20px', marginBottom: '1rem', border: '3px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)', objectFit: 'cover' }} />
                <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', color: '#8B4513', marginBottom: '0.5rem' }}>Customer-Centric</h4>
                <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#654321', lineHeight: '1.6', fontWeight: '400' }}>Tailored solutions for specific requirements</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <img src="https://venkatasaitobacco.com/assets/images/leaf/04.jpg" alt="Expert" style={{ width: '200px', height: '200px', borderRadius: '20px', marginBottom: '1rem', border: '3px solid rgba(212, 175, 55, 0.5)', boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)', objectFit: 'cover' }} />
                <h4 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: '800', color: '#8B4513', marginBottom: '0.5rem' }}>Experienced Leadership</h4>
                <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#654321', lineHeight: '1.6', fontWeight: '400' }}>Decades of expertise under Sankaraiah Nadendla</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #8B4513 0%, #d4af37 50%, #f4d03f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>Premium Tobacco Products</h2>
          <p style={{ textAlign: 'center', color: '#654321', marginBottom: 'clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '500' }}>
            Discover our superior quality tobacco products
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Flue Cured Virginia (NLS)', category: 'Flue Cured Virginia', desc: 'The Flue Cured Virginia (NLS) has a lemon or orange color. It is a ripe tobacco that has an enticing flavor with good aroma and excellent aging properties.', nicotine: '1.5 to 3.5%', marketing: 'Feb to Jul', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' },
              { name: 'Flue Cured Virginia (SLS)', category: 'Flue Cured Virginia', desc: 'The Flue Cured Virginia (SLS) offered by the company is good filler. The Flue Cured Virginia (SLS) is a lemon or orange colored tobacco with low nicotine...', nicotine: '1.50 to 1.0%', marketing: 'Feb to Jun', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' },
              { name: 'Flue Cured Virginia (SBS)', category: 'Flue Cured Virginia', desc: 'We offer FCV SBS that is grown in black soils, which are present in Prakasam and Nellore districts nearer to the coast. This crop is cultivated in about 30,000...', nicotine: '1.5 to 2.5%', marketing: 'Feb to Jun', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' },
              { name: 'Flue Cured Virginia (Karnataka)', category: 'Flue Cured Virginia', desc: 'Low nicotine tobacco & Good neutral filler.', nicotine: '1.2 to 2.0%', marketing: 'Sep to Mar', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' },
              { name: 'Traditional Burley Tobacco', category: 'Burley Tobacco', desc: 'We provide premium Traditional Burley Tobacco that is widely used in blending cigarettes. Due to its enticing aroma, this Traditional Burley Tobacco is used...', nicotine: '1.50 to 3.30%', marketing: 'Feb to Jun', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' },
              { name: 'Monsoon Burley Tobacco', category: 'Burley Tobacco', desc: 'The Monsoon Burley Tobacco supplied and exported by the company is highly acclaimed by the clients due to its optimum quality.', nicotine: '1.20 to 2.0%', marketing: 'Nov to Feb', image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg' }
            ].map((product, i) => (
              <div key={i} style={{
                background: 'rgba(139, 69, 19, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(139, 69, 19, 0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                cursor: 'pointer',
                height: '550px',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4), 0 0 40px rgba(212, 175, 55, 0.4), inset 0 0 30px rgba(212, 175, 55, 0.2)'
                e.currentTarget.style.border = '1px solid rgba(212, 175, 55, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)'
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img src={product.image} alt={product.name} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(101, 67, 33, 0.3))'
                  }}></div>
                </div>
                
                <div style={{ 
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1.3rem',
                    background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(212, 175, 55, 0.15))',
                    color: '#8B4513',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    alignSelf: 'flex-start',
                    border: '1px solid rgba(139, 69, 19, 0.3)'
                  }}>
                    {product.category}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '800', 
                    marginBottom: '0.8rem',
                    background: 'linear-gradient(135deg, #8B4513 0%, #d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.5px'
                  }}>
                    {product.name}
                  </h3>
                  
                  <p style={{ 
                    color: '#654321', 
                    marginBottom: 'auto',
                    lineHeight: '1.7',
                    fontSize: '0.95rem',
                    fontWeight: '400',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {product.desc}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{ fontSize: '0.85rem', color: '#8B4513' }}>
                      <strong style={{ color: '#654321', fontWeight: '700' }}>💊 Nicotine:</strong><br/>{product.nicotine}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#8B4513', textAlign: 'right' }}>
                      <strong style={{ color: '#654321', fontWeight: '700' }}>📅 Marketing:</strong><br/>{product.marketing}
                    </div>
                  </div>
                  
                  <Link to="/products" style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '30px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    marginTop: '1rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'block'
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Our Expert Team</h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: 'clamp(3rem, 5vw, 4rem)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            Meet the professionals behind our success
          </p>
          
          {[
            { name: 'Sankaraiah Nadendla', role: 'CEO & Founder', image: 'https://filmfare.wwmindia.com/content/2025/may/jrntrbirthdaystory21747721171.jpg', desc: 'With over 25 years of experience in the tobacco industry, Sankaraiah leads our company with vision and expertise. His deep understanding of global tobacco markets has positioned Pammi Tobacco as a trusted name worldwide.' },
            { name: 'John Doe', role: 'Co-Founder & COO', image: 'https://filmfare.wwmindia.com/content/2025/may/jrntrbirthdaystory21747721171.jpg', desc: 'John brings extensive operational expertise to our organization. With a background in international trade and logistics, he ensures seamless operations and maintains our high standards of quality control.' },
            { name: 'Jane Smith', role: 'Head of Quality Assurance', image: 'https://filmfare.wwmindia.com/content/2025/may/jrntrbirthdaystory21747721171.jpg', desc: 'Jane oversees our quality assurance processes, ensuring every batch meets international standards. Her meticulous attention to detail guarantees that our clients receive only the finest tobacco products.' }
          ].map((member, index) => (
            <div key={index} style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
              gap: 'clamp(2rem, 4vw, 3rem)',
              alignItems: 'center',
              marginBottom: 'clamp(3rem, 5vw, 4rem)',
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(212, 175, 55, 0.4)'
              e.currentTarget.style.border = '1px solid rgba(212, 175, 55, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {/* Image */}
              <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 2 : 1 }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    border: '3px solid rgba(212, 175, 55, 0.5)',
                    boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Description */}
              <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 1 : 2 }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>{member.name}</h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#f4d03f',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>{member.role}</p>
                <p style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  lineHeight: '1.8',
                  color: '#333'
                }}>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Client Testimonials</h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: 'clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            What our clients say about us
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {[
              { name: 'David Wilson', company: 'Global Tobacco Inc.', text: 'Exceptional quality and reliable service. Pammi Tobacco has been our trusted partner for over 5 years.', rating: 5 },
              { name: 'Maria Garcia', company: 'Euro Leaf Trading', text: 'Outstanding product quality and timely deliveries. Highly recommend their Virginia tobacco range.', rating: 5 },
              { name: 'Ahmed Hassan', company: 'Middle East Tobacco', text: 'Professional team and premium grade tobacco. Their expertise in the industry is unmatched.', rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} style={{
                background: 'rgba(139, 69, 19, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                border: '1px solid rgba(139, 69, 19, 0.2)',
                boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} style={{ color: '#d4af37', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>★</span>
                  ))}
                </div>
                <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
                <h4 style={{ color: '#d4af37', fontWeight: 'bold', marginBottom: '0.3rem', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>{testimonial.name}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)' }}>{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Get In Touch</h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: 'clamp(2rem, 5vw, 3rem)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            Ready to start your order? Contact us today
          </p>
          <div style={{
            background: 'rgba(139, 69, 19, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            border: '1px solid rgba(139, 69, 19, 0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <div style={{ textAlign: 'center', padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>📧</div>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', marginBottom: '0.5rem', color: '#d4af37' }}>Email</h3>
                <p style={{ color: '#555', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>info@pammitobacco.com</p>
              </div>
              <div style={{ textAlign: 'center', padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>📞</div>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', marginBottom: '0.5rem', color: '#d4af37' }}>Phone</h3>
                <p style={{ color: '#555', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>+1 (555) 123-4567</p>
              </div>
              <div style={{ textAlign: 'center', padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '0.5rem' }}>📍</div>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', marginBottom: '0.5rem', color: '#d4af37' }}>Location</h3>
                <p style={{ color: '#555', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Andhra Pradesh, India</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#000',
                padding: 'clamp(0.9rem, 2vw, 1.2rem) clamp(2rem, 5vw, 3rem)',
                borderRadius: '30px',
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 6px 25px rgba(212, 175, 55, 0.4)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >Send Message →</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
            padding: 2rem 0 !important;
          }
          .hero-content {
            padding: 1rem 0.5rem !important;
          }
          .hero-stats {
            gap: 0.8rem !important;
          }
          .hero-stats > div {
            min-width: 100px !important;
          }
          .hero-buttons {
            gap: 0.8rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-stats {
            gap: 0.5rem !important;
          }
          .hero-stats > div {
            min-width: 90px !important;
            padding: 0.8rem 1rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
