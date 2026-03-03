import { useEffect } from 'react'

function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ marginTop: '100px', background: '#ffffff', minHeight: '100vh', padding: '3rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Client Testimonials</h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '3rem', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
          What our clients say about us
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { name: 'David Wilson', company: 'Global Tobacco Inc.', text: 'Exceptional quality and reliable service. Pammi Tobacco has been our trusted partner for over 5 years.', rating: 5 },
            { name: 'Maria Garcia', company: 'Euro Leaf Trading', text: 'Outstanding product quality and timely deliveries. Highly recommend their Virginia tobacco range.', rating: 5 },
            { name: 'Ahmed Hassan', company: 'Middle East Tobacco', text: 'Professional team and premium grade tobacco. Their expertise in the industry is unmatched.', rating: 5 }
          ].map((testimonial, i) => (
            <div key={i} style={{
              background: 'rgba(139, 69, 19, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(139, 69, 19, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#d4af37', fontSize: '1.2rem' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#333', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <h4 style={{ color: '#d4af37', fontWeight: 'bold', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{testimonial.name}</h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
