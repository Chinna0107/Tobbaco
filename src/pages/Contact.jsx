import { useState, useEffect } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send via WhatsApp
    const phone = '918179860935' // WhatsApp number with country code
    const text = `Hello! I'm ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0ACompany: ${formData.company || 'Not provided'}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
    
    // Show success message and reset form
    setFormStatus('success')
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    setTimeout(() => setFormStatus(''), 3000)
  }

  return (
    <div style={{ marginTop: '100px', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.95))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(139, 69, 19, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #fff, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
          }}>Get In Touch</h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.8',
            color: '#333'
          }}>
            Have questions about our products? Ready to place an order? We're here to help you with all your tobacco needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'stretch'
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  style={{
                    padding: 'clamp(0.8rem, 2vw, 1rem)',
                    borderRadius: '15px',
                    border: '1px solid rgba(139, 69, 19, 0.3)',
                    background: 'rgba(139, 69, 19, 0.05)',
                    color: '#8B4513',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  style={{
                    padding: 'clamp(0.8rem, 2vw, 1rem)',
                    borderRadius: '15px',
                    border: '1px solid rgba(139, 69, 19, 0.3)',
                    background: 'rgba(139, 69, 19, 0.05)',
                    color: '#8B4513',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{
                      padding: 'clamp(0.8rem, 2vw, 1rem)',
                      borderRadius: '15px',
                      border: '1px solid rgba(139, 69, 19, 0.3)',
                      background: 'rgba(139, 69, 19, 0.05)',
                      color: '#8B4513',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                    onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    style={{
                      padding: 'clamp(0.8rem, 2vw, 1rem)',
                      borderRadius: '15px',
                      border: '1px solid rgba(139, 69, 19, 0.3)',
                      background: 'rgba(139, 69, 19, 0.05)',
                      color: '#8B4513',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                    onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                  />
                </div>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  style={{
                    padding: 'clamp(0.8rem, 2vw, 1rem)',
                    borderRadius: '15px',
                    border: '1px solid rgba(139, 69, 19, 0.3)',
                    background: 'rgba(139, 69, 19, 0.05)',
                    color: formData.subject ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                >
                  <option value="">Select Subject *</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quote-request">Quote Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows="5"
                  style={{
                    padding: 'clamp(0.8rem, 2vw, 1rem)',
                    borderRadius: '15px',
                    border: '1px solid rgba(139, 69, 19, 0.3)',
                    background: 'rgba(139, 69, 19, 0.05)',
                    color: '#8B4513',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid rgba(212, 175, 55, 0.5)'}
                  onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)'}
                />
                {formStatus === 'success' && (
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(37, 211, 102, 0.2)',
                    border: '1px solid rgba(37, 211, 102, 0.5)',
                    borderRadius: '10px',
                    color: '#25D366',
                    textAlign: 'center',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}>
                    ✓ Opening WhatsApp... Form submitted successfully!
                  </div>
                )}
                <button
                  type="submit"
                  style={{
                    padding: 'clamp(0.9rem, 2vw, 1.2rem)',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#8B4513',
                    border: 'none',
                    borderRadius: '30px',
                    fontWeight: '700',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    cursor: 'pointer',
                    boxShadow: '0 6px 25px rgba(37, 211, 102, 0.4)',
                    transition: 'transform 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <span>📱</span> Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div style={{
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1.2rem, 2.5vw, 1.5rem)'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
                fontWeight: 'bold',
                marginBottom: '0',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Contact Information</h2>
              
              {[
                { icon: '📧', title: 'Email', info: ['info@pammitobacco.com'] },
                { icon: '📞', title: 'Phone', info: ['+91 8499934357', '+1 972-388-1934'] },
                { icon: '📍', title: 'Address', info: ['2-131, Near Community Hall', 'Konijedu Village, Prakasam District'] },
                { icon: '🕒', title: 'Business Hours', info: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'] }
              ].map((item, i) => (
                <div key={i} style={{
                  paddingBottom: i < 3 ? 'clamp(1rem, 2vw, 1.2rem)' : '0',
                  borderBottom: i < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)' }}>{item.icon}</div>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                      fontWeight: 'bold',
                      margin: 0,
                      color: '#d4af37'
                    }}>{item.title}</h3>
                  </div>
                  <div style={{ paddingLeft: 'clamp(2.3rem, 5vw, 2.6rem)' }}>
                    {item.info.map((line, j) => (
                      <p key={j} style={{
                        color: '#333',
                        fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                        margin: '0.2rem 0',
                        lineHeight: '1.5'
                      }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(250, 250, 250, 1), rgba(255, 255, 255, 1))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Find Us Here</h2>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.2)',
            border: '2px solid rgba(212, 175, 55, 0.3)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8!2d79.8!3d15.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQyJzAwLjAiTiA3OcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pammi Tobacco Traders Location"
            ></iframe>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              href="https://maps.app.goo.gl/62T5Lhem8LyuXNzPA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              🗺️ Open in Google Maps
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Contact
