import { useEffect, useState } from 'react'
import { FaStar, FaGlobe, FaUsers, FaAward } from 'react-icons/fa'

function About() {
  const [selectedGen, setSelectedGen] = useState(null)
  
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
    <div style={{ marginTop: '90px', background: '#000000', minHeight: '100vh' }}>

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
          color: '#FFD700'
        }}>
          Our Journey
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem,4vw,2rem)',
          color: '#FFD700',
          marginTop: '1rem',
          fontWeight: '600'
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

      {/* 3rd Generation Showcase */}
      <section style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(212, 175, 55, 0.1))',
          borderRadius: '30px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          border: '2px solid #FFD700',
          boxShadow: '0 15px 50px rgba(255, 215, 0, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #d4af37)',
              color: '#000',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>CURRENT GENERATION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FFD700', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Third Generation
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#f4d03f', marginBottom: '1rem', fontWeight: '600' }}>
            2000 – Present
          </p>
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Modern Trade & Global Outlook - Leading the business with professional management, international compliance, and structured export processes.
          </p>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section style={{ padding: '3rem 1rem', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '4px', background: 'linear-gradient(90deg, #FFD700, #d4af37, #FFD700)', transform: 'translateY(-50%)', zIndex: 0, borderRadius: '10px' }}></div>
          
          {generations.map((gen, index) => (
            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFD700, #d4af37)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(255, 215, 0, 0.5)',
                  transition: 'all 0.3s',
                  border: '4px solid #000',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.7)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.5)'
                }}
                onClick={() => {
                  setSelectedGen(index)
                  setTimeout(() => {
                    document.getElementById(`gen-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }, 100)
                }}
              >
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#000' }}>{index + 1}</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{gen.period}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{gen.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GENERATIONS */}
      <section style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', minHeight: '400px' }}>
        {selectedGen !== null && generations[selectedGen] && (
          <div
            id={`gen-${selectedGen}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src={generations[selectedGen].image}
                alt={generations[selectedGen].name}
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
            <div>
              <p style={{ color: '#f4d03f', fontWeight: '600' }}>{generations[selectedGen].period}</p>
              <h3 style={{ fontSize: 'clamp(1.4rem,4vw,2rem)', color: '#FFD700', fontWeight: 'bold' }}>{generations[selectedGen].title}</h3>
              <p style={{ color: '#FFD700', marginBottom: '0.5rem', fontWeight: '600' }}>{generations[selectedGen].subtitle}</p>
              <h4 style={{ color: '#fff', fontWeight: 'bold' }}>{generations[selectedGen].name}</h4>
              <p style={{ color: '#f4d03f', fontStyle: 'italic' }}>{generations[selectedGen].role}</p>
              <p style={{ marginTop: '1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>{generations[selectedGen].description}</p>
            </div>
          </div>
        )}
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
            color: '#FFD700',
            fontWeight: 'bold'
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
                <div style={{ fontSize: '2rem', color: '#FFD700' }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#FFD700', marginTop: '1rem', fontWeight: 'bold' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* GALLERY */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,5vw,2.5rem)', color: '#FFD700', fontWeight: 'bold', marginBottom: '2rem' }}>
            Our Journey in Pictures
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
              'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
              'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
              'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400',
              'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400',
              'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400'
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', borderRadius: '15px', border: '2px solid rgba(255,215,0,0.3)' }}>
                <img src={img} alt={`Journey ${i + 1}`} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
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
            <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.5rem' }}>Vision</h2>
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
            <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.5rem' }}>Mission</h2>
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