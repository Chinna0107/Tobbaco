import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const navigate = useNavigate()

  const products = [
    { 
      name: 'Flue Cured Virginia (NLS)', 
      category: 'Flue Cured Virginia', 
      desc: 'The Flue Cured Virginia (NLS) has a lemon or orange color. It is a ripe tobacco that has an enticing flavor with good aroma and excellent aging properties.', 
      fullDesc: 'The Flue Cured Virginia (NLS) has a lemon or orange color. It is a ripe tobacco that has an enticing flavor with good aroma and excellent aging properties. This premium grade tobacco is carefully processed and cured to maintain its distinctive characteristics. Perfect for blending and manufacturing high-quality tobacco products.',
      nicotine: '1.5 to 3.5%', 
      marketing: 'Feb to Jul',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    },
    { 
      name: 'Flue Cured Virginia (SLS)', 
      category: 'Flue Cured Virginia', 
      desc: 'The Flue Cured Virginia (SLS) offered by the company is good filler. The Flue Cured Virginia (SLS) is a lemon or orange colored tobacco with low nicotine...', 
      fullDesc: 'The Flue Cured Virginia (SLS) offered by the company is good filler. The Flue Cured Virginia (SLS) is a lemon or orange colored tobacco with low nicotine. The Flue Cured Virginia (SLS) blends well with any tobacco and is highly sought after in international markets.',
      nicotine: '1.50 to 1.0%', 
      marketing: 'Feb to Jun',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    },
    { 
      name: 'Flue Cured Virginia (SBS)', 
      category: 'Flue Cured Virginia', 
      desc: 'We offer FCV SBS that is grown in black soils, which are present in Prakasam and Nellore districts nearer to the coast. This crop is cultivated in about 30,000...', 
      fullDesc: 'We offer FCV SBS that is grown in black soils, which are present in Prakasam and Nellore districts nearer to the coast. This crop is cultivated in about 30,000 hectares. Acclaimed with a better quality rating than the NBS/CBS tobaccos, this tobacco is highly amenable for blending with other styles of tobacco in Cigarette manufacturing and hence preferred for export to West Asia, North African countries (Egypt and Libya), Nepal and to CIS countries.',
      nicotine: '1.5 to 2.5%', 
      marketing: 'Feb to Jun',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    },
    { 
      name: 'Flue Cured Virginia (Karnataka)', 
      category: 'Flue Cured Virginia', 
      desc: 'Low nicotine tobacco & Good neutral filler.', 
      fullDesc: 'Low nicotine tobacco & Good neutral filler. Karnataka tobacco is known for its mild characteristics and excellent blending properties. It is widely used in the tobacco industry for its consistent quality and neutral flavor profile.',
      nicotine: '1.2 to 2.0%', 
      marketing: 'Sep to Mar',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    },
    { 
      name: 'Traditional Burley Tobacco', 
      category: 'Burley Tobacco', 
      desc: 'We provide premium Traditional Burley Tobacco that is widely used in blending cigarettes. Due to its enticing aroma, this Traditional Burley Tobacco is used...', 
      fullDesc: 'We provide premium Traditional Burley Tobacco that is widely used in blending cigarettes. Due to its enticing aroma, this Traditional Burley Tobacco is used for pipe mixtures, chewing plugs and hookah tobacco paste. It has excellent absorption properties and is highly valued in the tobacco industry.',
      nicotine: '1.50 to 3.30%', 
      marketing: 'Feb to Jun',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    },
    { 
      name: 'Monsoon Burley Tobacco', 
      category: 'Burley Tobacco', 
      desc: 'The Monsoon Burley Tobacco supplied and exported by the company is highly acclaimed by the clients due to its optimum quality.', 
      fullDesc: 'The Monsoon Burley Tobacco supplied and exported by the company is highly acclaimed by the clients due to its optimum quality. This variety is cultivated during the monsoon season and has unique characteristics that make it ideal for various tobacco applications.',
      nicotine: '1.20 to 2.0%', 
      marketing: 'Nov to Feb',
      image: 'https://www.sopariwala.com/wp-content/uploads/2024/12/BLACK-CHOPADIA-TOBACCO-THUMBNAIL-new-copy.jpg'
    }
  ]

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ marginTop: '120px', minHeight: '100vh' }}>
      {/* Hero Section
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.95))',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '5rem 2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(139, 69, 19, 0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
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
            fontSize: '3.5rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #8B4513 0%, #d4af37 50%, #f4d03f 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 20px rgba(212, 175, 55, 0.5)',
            letterSpacing: '-1px'
          }}>Premium Tobacco Products</h1>
          <p style={{
            fontSize: '1.4rem',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.9',
            color: '#654321',
            fontWeight: '500'
          }}>
            Discover our superior quality tobacco products, including Flue Cured Virginia Tobacco, Traditional Burley Tobacco, and specialty tobacco varieties.
          </p>
        </div>
      </section> */}

      {/* Products Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(250, 250, 250, 1))',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '2rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}>
            {['All', 'Flue Cured Virginia', 'Burley Tobacco'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)} 
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '30px',
                  border: 'none',
                  background: selectedCategory === cat 
                    ? 'linear-gradient(135deg, #d4af37, #f4d03f)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: selectedCategory === cat ? '#000' : '#8B4513',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(139, 69, 19, 0.3)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s',
                  fontSize: '1rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="🔍 Search products..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '1rem 1.5rem',
              margin: '0 auto 3rem',
              display: 'block',
              borderRadius: '30px',
              background: 'rgba(139, 69, 19, 0.08)',
              backdropFilter: 'blur(10px)',
              color: '#8B4513',
              border: '1px solid rgba(139, 69, 19, 0.3)',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }} 
          />
          
          {/* Products Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product, i) => (
              <div key={i} style={{
                background: 'rgba(139, 69, 19, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(139, 69, 19, 0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                cursor: 'pointer',
                height: '550px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
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
                  <img src={product.image} alt={product.name} className="product-image" style={{
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
                    borderTop: '1px solid #eee'
                  }}>
                    <div style={{ fontSize: '0.85rem', color: '#8B4513' }}>
                      <strong style={{ color: '#654321', fontWeight: '700' }}>💊 Nicotine:</strong><br/>{product.nicotine}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#8B4513', textAlign: 'right' }}>
                      <strong style={{ color: '#654321', fontWeight: '700' }}>📅 Marketing:</strong><br/>{product.marketing}
                    </div>
                  </div>
                  
                  <button onClick={() => setSelectedProduct(product)} className="learn-more-btn" style={{
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
                    marginTop: '1rem'
                  }}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#666'
            }}>
              <p style={{ fontSize: '1.2rem' }}>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '2rem'
        }} onClick={() => setSelectedProduct(null)}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover'
            }} />
            <div style={{ padding: '2rem' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.6rem 1.6rem',
                background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(212, 175, 55, 0.15))',
                color: '#8B4513',
                borderRadius: '20px',
                fontSize: '0.95rem',
                fontWeight: '700',
                marginBottom: '1rem',
                border: '1px solid rgba(139, 69, 19, 0.3)'
              }}>
                {selectedProduct.category}
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem', color: '#8B4513', letterSpacing: '-0.5px' }}>
                {selectedProduct.name}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#654321', marginBottom: '1.5rem', fontWeight: '400' }}>
                {selectedProduct.fullDesc}
              </p>
              <div style={{
                background: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <strong style={{ color: '#8B4513', fontWeight: '700', fontSize: '1rem' }}>💊 Nicotine Content:</strong>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#654321', fontWeight: '500' }}>{selectedProduct.nicotine}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ color: '#8B4513', fontWeight: '700', fontSize: '1rem' }}>📅 Marketing Period:</strong>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#654321', fontWeight: '500' }}>{selectedProduct.marketing}</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setSelectedProduct(null)} style={{
                  flex: 1,
                  padding: '1rem',
                  background: '#fff',
                  color: '#8B4513',
                  border: '2px solid #ddd',
                  borderRadius: '30px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  Close
                </button>
                <button onClick={() => navigate('/contact')} style={{
                  flex: 1,
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '30px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
