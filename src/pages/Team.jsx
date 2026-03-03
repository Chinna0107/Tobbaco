import { useEffect } from 'react'

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamMembers = [
    {
      name: 'Sankaraiah Nadendla',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/400x400/667eea/ffffff?text=CEO',
      description: 'With over 25 years of experience in the tobacco industry, Sankaraiah leads our company with vision and expertise. His deep understanding of global tobacco markets and commitment to quality has positioned Pammi Tobacco as a trusted name in the industry.'
    },
    {
      name: 'John Doe',
      role: 'Co-Founder & COO',
      image: 'https://via.placeholder.com/400x400/d4af37/ffffff?text=COO',
      description: 'John brings extensive operational expertise to our organization. With a background in international trade and logistics, he ensures seamless operations and maintains our high standards of quality control across all product lines.'
    },
    {
      name: 'Jane Smith',
      role: 'Head of Quality Assurance',
      image: 'https://via.placeholder.com/400x400/764ba2/ffffff?text=QA',
      description: 'Jane oversees our quality assurance processes, ensuring every batch meets international standards. Her meticulous attention to detail and commitment to excellence guarantees that our clients receive only the finest tobacco products.'
    },
    {
      name: 'Michael Brown',
      role: 'Export Manager',
      image: 'https://via.placeholder.com/400x400/f4d03f/333333?text=Export',
      description: 'Michael manages our global export operations, coordinating with clients across 50+ countries. His expertise in international regulations and customer relations ensures smooth transactions and satisfied clients worldwide.'
    }
  ]

  return (
    <div style={{ marginTop: '100px', background: '#ffffff', minHeight: '100vh', padding: '3rem 1rem' }}>
      {/* Header Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Meet Our Expert Team</h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
          Dedicated professionals with decades of combined experience in the tobacco industry
        </p>
      </div>

      {/* Team Members */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'center',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            background: 'rgba(139, 69, 19, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            border: '1px solid rgba(139, 69, 19, 0.2)',
            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.15)'
          }}>
            {/* Image - Left side for even index, right side for odd */}
            <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 2 : 1 }}>
              <img 
                src={member.image} 
                alt={member.name}
                style={{
                  width: '100%',
                  maxWidth: '400px',
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

            {/* Description - Right side for even index, left side for odd */}
            <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 1 : 2 }}>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{member.name}</h2>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#f4d03f',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>{member.role}</p>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.8',
                color: '#333'
              }}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
