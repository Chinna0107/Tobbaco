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
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95))',
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
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)',
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
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Have questions about our products? Ready to place an order? We're here to help you with all your tobacco needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 1), rgba(22, 33, 62, 1))',
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
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
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
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#fff',
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
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#fff',
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
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
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
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#fff',
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
                    color: '#fff',
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
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
                { icon: '📧', title: 'Email', info: ['info@pammitobacco.com', 'sales@pammitobacco.com'] },
                { icon: '📞', title: 'Phone', info: ['+1 (555) 123-4567', '+1 (555) 987-6543'] },
                { icon: '📍', title: 'Address', info: ['Andhra Pradesh', 'India'] },
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
                        color: 'rgba(255, 255, 255, 0.9)',
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

      {/* FAQ Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 1), rgba(22, 33, 62, 1))'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: 'What types of tobacco do you supply?', a: 'We specialize in Flue Cured Virginia tobacco and Burley tobacco, offering various grades to meet international standards.' },
              { q: 'Do you ship internationally?', a: 'Yes, we export to clients worldwide. Contact us for specific shipping details and requirements for your region.' },
              { q: 'What is your minimum order quantity?', a: 'Minimum order quantities vary by product type. Please contact our sales team for detailed information.' },
              { q: 'How can I request a quote?', a: 'Fill out the contact form above with your requirements, or email us directly at sales@pammitobacco.com.' },
              { q: 'What certifications do you have?', a: 'We maintain all necessary quality certifications and comply with international tobacco trading standards.' }
            ].map((faq, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: '15px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.border = '1px solid rgba(212, 175, 55, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: 'bold',
                  marginBottom: '0.8rem',
                  color: '#d4af37'
                }}>❓ {faq.q}</h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Map Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 1), rgba(22, 33, 62, 1))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Connect With Us</h2>
          
          {/* Social Media Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'LinkedIn', icon: '👥', color: '#0077B5' },
              { name: 'WhatsApp', icon: '📱', color: '#25D366' },
              { name: 'Email', icon: '✉️', color: '#d4af37' },
              { name: 'Phone', icon: '📞', color: '#4CAF50' }
            ].map((social, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                textAlign: 'center',
                minWidth: 'clamp(120px, 20vw, 150px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = `0 10px 30px ${social.color}40`
                e.currentTarget.style.border = `1px solid ${social.color}80`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>{social.icon}</div>
                <div style={{ color: '#fff', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '600' }}>{social.name}</div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              background: 'rgba(212, 175, 55, 0.1)',
              borderRadius: '15px',
              padding: 'clamp(3rem, 6vw, 5rem)',
              border: '2px dashed rgba(212, 175, 55, 0.3)'
            }}>
              <div style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: '1rem' }}>🗺️</div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#d4af37'
              }}>Our Location</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                Guntur - 522001, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
