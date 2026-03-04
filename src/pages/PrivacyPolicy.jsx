function PrivacyPolicy() {
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
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Privacy Policy</h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            maxWidth: '900px',
            margin: '0 auto 1rem',
            color: '#333'
          }}>
            Pammi Tobacco Traders (PTT) - Protecting Your Privacy
          </p>
          <p style={{ color: '#666', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
            Last Updated: March , 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(139, 69, 19, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            border: '1px solid rgba(139, 69, 19, 0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)'
          }}>
            {/* Introduction */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>1. Introduction</h2>
              <p style={{ color: '#333', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                Pammi Tobacco Traders ("PTT," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pammitobbaco.com and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>2. Information We Collect</h2>
              <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 'bold', marginBottom: '0.8rem', color: '#f4d03f' }}>2.1 Personal Information</h3>
              <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                We may collect the following personal information when you fill out our contact form, request product information, or communicate with us:
              </p>
              <ul style={{ color: '#555', lineHeight: '1.8', paddingLeft: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Country/Location</li>
                <li>Business inquiry details</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>3. How We Use Your Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {[
                  { title: 'Business Operations', items: ['Process inquiries', 'Provide product info', 'Generate quotes', 'Manage relationships'] },
                  { title: 'Communication', items: ['Respond to inquiries', 'Send updates', 'Customer support', 'Business communications'] },
                  { title: 'Analytics', items: ['Website usage', 'User experience', 'Functionality', 'Business insights'] }
                ].map((section, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(139, 69, 19, 0.2)'
                  }}>
                    <h4 style={{ color: '#f4d03f', marginBottom: '0.8rem', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{section.title}</h4>
                    <ul style={{ color: '#555', paddingLeft: '1.2rem', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                      {section.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Security */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>4. Data Security</h2>
              <p style={{ color: '#333', lineHeight: '1.8', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                We implement appropriate security measures to protect your personal information:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['🔒 SSL/TLS Encryption', '🔐 Access Control', '👁️ Regular Monitoring', '🛡️ Security Audits'].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    color: '#d4af37',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    fontWeight: '600'
                  }}>{item}</div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>5. Your Rights and Choices</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {['✓ Access', '✓ Correction', '✓ Deletion', '✓ Portability', '✓ Objection', '✓ Restriction'].map((right, i) => (
                  <div key={i} style={{
                    background: 'rgba(139, 69, 19, 0.05)',
                    padding: '1rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: '#333',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    fontWeight: '600'
                  }}>{right}</div>
                ))}
              </div>
            </div>

            {/* Cookies */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>6. Cookies and Tracking Technologies</h2>
              <p style={{ color: '#333', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                Our website may use cookies for essential functionality, analytics, and enhanced user experience.
              </p>
            </div>

            {/* Contact Information */}
            <div style={{
              background: 'rgba(212, 175, 55, 0.1)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              borderRadius: '15px',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#d4af37'
              }}>7. Contact Information</h2>
              <p style={{ color: '#333', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                If you have any questions regarding this Privacy Policy, please contact us:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#f4d03f', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>📧 Email:</p>
                  <p style={{ color: '#333', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>pammibatobaccocompany@gmail.com</p>
                </div>
                <div>
                  <p style={{ color: '#f4d03f', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>📞 Phone:</p>
                  <p style={{ color: '#333', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+91 9440522573</p>
                  <p style={{ color: '#333', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>+1 774 525 4591</p>
                </div>
                <div>
                  <p style={{ color: '#f4d03f', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>📍 Address:</p>
                  <p style={{ color: '#333', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>Guntur - 522001</p>
                  <p style={{ color: '#333', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>Andhra Pradesh, INDIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
