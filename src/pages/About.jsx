import { useEffect } from 'react'
import { FaStar, FaGlobe, FaUsers, FaAward } from 'react-icons/fa'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const generations = [
    {
      period: '1930–1950',
      title: 'First Generation',
      subtitle: 'The Foundation',
      name: 'Pammi Badri Reddy',
      role: 'Tobacco Grower',
      image: 'https://via.placeholder.com/400x400/8B4513/ffffff?text=1930-1950',
      description:
        'The journey began with Pammi Badri Reddy, who worked as a tobacco grower during the early years of the industry in Prakasam district. His deep involvement at the field level laid the foundation of practical knowledge, discipline, and respect for the crop.'
    },
    {
      period: '1950–2000',
      title: 'Second Generation',
      subtitle: 'Leadership & Community Development',
      name: 'Pammi Chakra Reddy',
      role: 'President – Tobacco Growers Society',
      image: 'https://via.placeholder.com/400x400/d4af37/ffffff?text=1950-2000',
      description:
        'Led by Pammi Chakra Reddy, this phase marked structured growth and leadership. Serving as President of the Tobacco Growers Society, he strengthened cooperative efforts and expanded market understanding.'
    },
    {
      period: '2000–Present',
      title: 'Third Generation',
      subtitle: 'Modern Trade & Global Outlook',
      name: 'Pammi Badri Reddy',
      role: 'Vice President – Indian Tobacco Board (2008–2014)',
      image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=2000-Present',
      description:
        'Since 2000, the third generation focused on aligning legacy with global standards. The business evolved into a professionally managed organization emphasizing compliance, quality, and structured export processes.'
    }
  ]

  return (
    <div style={{ marginTop: '90px', background: '#151515', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{
        padding: 'clamp(2rem,6vw,5rem) 1rem',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem,6vw,3.5rem)',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg,#d4af37,#f4d03f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About Us
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem,4vw,2rem)',
          color: '#d4af37',
          marginTop: '1rem'
        }}>
          A Legacy Rooted in Indian Tobacco Since 1930
        </h2>

        <p style={{
          marginTop: '1.5rem',
          fontSize: 'clamp(0.95rem,2.5vw,1.1rem)',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.85)'
        }}>
          Pammi Traders Pvt Ltd is a family-led tobacco trading and export enterprise
          with a legacy that began in Prakasam District, Andhra Pradesh.
          For nearly a century, our family has remained closely connected to
          cultivation, farmer communities, and trade.
        </p>
      </section>


      {/* GENERATIONS */}
      <section style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        {generations.map((gen, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginBottom: '3rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >

            {/* IMAGE */}
            <div style={{ textAlign: 'center' }}>
              <img
                src={gen.image}
                alt={gen.name}
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  border: '3px solid rgba(212,175,55,0.5)'
                }}
              />
            </div>

            {/* CONTENT */}
            <div>
              <p style={{ color: '#f4d03f', fontWeight: '600' }}>{gen.period}</p>

              <h3 style={{
                fontSize: 'clamp(1.4rem,4vw,2rem)',
                background: 'linear-gradient(135deg,#d4af37,#f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {gen.title}
              </h3>

              <p style={{ color: '#d4af37', marginBottom: '0.5rem' }}>
                {gen.subtitle}
              </p>

              <h4 style={{ color: '#fff', fontWeight: 'bold' }}>
                {gen.name}
              </h4>

              <p style={{ color: '#f4d03f', fontStyle: 'italic' }}>
                {gen.role}
              </p>

              <p style={{
                marginTop: '1rem',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.85)'
              }}>
                {gen.description}
              </p>
            </div>
          </div>
        ))}
      </section>


      {/* WHY CHOOSE US */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem,5vw,2.5rem)',
            background: 'linear-gradient(135deg,#d4af37,#f4d03f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Why Choose Us
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {[
              { icon: <FaStar />, title: 'Generational Experience' },
              { icon: <FaUsers />, title: 'Strong Field Relationships' },
              { icon: <FaGlobe />, title: 'Transparent Operations' },
              { icon: <FaAward />, title: 'Long-Term Partnerships' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ fontSize: '2rem', color: '#d4af37' }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#d4af37', marginTop: '1rem' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* VISION & MISSION */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '2rem',
            borderRadius: '20px'
          }}>
            <h2 style={{ color: '#d4af37' }}>Vision</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
              To responsibly connect Indian tobacco from field to global markets
              while preserving trust and quality.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '2rem',
            borderRadius: '20px'
          }}>
            <h2 style={{ color: '#d4af37' }}>Mission</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
              Deliver reliable sourcing solutions through generational experience
              and modern operational practices.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About