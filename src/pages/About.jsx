import { useEffect } from 'react'
import { FaStar, FaGlobe, FaUsers, FaAward, FaLeaf, FaTruck, FaHandshake, FaCertificate } from 'react-icons/fa'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          color: '#FFD700',
          marginBottom: '2rem'
        }}>
          About Us
        </h1>

        <div style={{
          marginTop: '2rem',
          fontSize: 'clamp(0.95rem,2.5vw,1.1rem)',
          lineHeight: '1.8',
          color: 'rgba(255,255,255,0.85)',
          textAlign: 'left',
          background: 'rgba(255,255,255,0.05)',
          padding: 'clamp(1.5rem,4vw,2.5rem)',
          borderRadius: '20px',
          border: '1px solid rgba(255,215,0,0.2)'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Pammi Traders Pvt Ltd is a tobacco trading and export company based in Konijedu Village, Tangutur Mandal, Prakasam District, Andhra Pradesh, India, one of the well-known regions for tobacco cultivation.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Our roots come directly from tobacco farming. For over 100 years, our family has been involved in tobacco cultivation, particularly Flue Cured Virginia (FCV) tobacco, working closely with farmers, curing barns, and local markets. We come from a grower background, with owned farmlands and tobacco curing barns, giving us deep practical knowledge of the crop from seed to leaf.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Over the years, this strong agricultural foundation naturally evolved into tobacco trading and exports, allowing us to connect Indian tobacco with buyers across international markets.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Because we come from the farming side of the industry, we understand the importance of quality, moisture control, grading, and proper leaf handling. Our experience across generations helps us maintain consistent supply and reliable sourcing directly from tobacco-growing regions.
          </p>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Today, Pammi Traders focuses on unmanufactured tobacco trade, supplying tobacco leaf and tobacco scrap to domestic and global buyers while maintaining long-term relationships within the tobacco ecosystem.
          </p>
          
          <p>
            With deep roots in cultivation and decades of field experience, we aim to build trusted partnerships in the global tobacco trade.
          </p>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,5vw,2.5rem)', color: '#FFD700', fontWeight: 'bold', marginBottom: '2rem' }}>
            Our Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '2rem' }}>
            {[
              { icon: <FaLeaf />, title: '100+ Years', desc: 'Family legacy in tobacco cultivation' },
              { icon: <FaTruck />, title: 'Global Export', desc: 'Connecting Indian tobacco worldwide' },
              { icon: <FaHandshake />, title: 'Direct Sourcing', desc: 'From tobacco-growing regions' },
              { icon: <FaCertificate />, title: 'Quality Control', desc: 'Expert grading and handling' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,215,0,0.2)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,5vw,2.5rem)', color: '#FFD700', fontWeight: 'bold', marginBottom: '2rem' }}>
            Why Choose Us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '2rem' }}>
            {[
              { icon: <FaStar />, title: 'Generational Experience', desc: 'Deep-rooted knowledge passed through generations' },
              { icon: <FaUsers />, title: 'Strong Field Relationships', desc: 'Direct connections with farmers and markets' },
              { icon: <FaGlobe />, title: 'Transparent Operations', desc: 'Honest and reliable business practices' },
              { icon: <FaAward />, title: 'Long-Term Partnerships', desc: 'Building trust in global tobacco trade' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,215,0,0.2)' }}>
                <div style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#FFD700', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '20px', border: '2px solid rgba(255,215,0,0.3)' }}>
            <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '1rem' }}>Vision</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              To responsibly connect Indian tobacco from field to global markets while preserving trust and quality.
            </p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '20px', border: '2px solid rgba(255,215,0,0.3)' }}>
            <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.8rem', marginBottom: '1rem' }}>Mission</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Deliver reliable sourcing solutions through generational experience and modern operational practices.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About