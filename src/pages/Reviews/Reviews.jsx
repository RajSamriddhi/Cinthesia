import { useState } from 'react'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import StarRating from '../../components/StarRating/StarRating'
import './Reviews.css'

function Reviews() {
  const [activeTab, setActiveTab] = useState('All Reviews')
  const tabs = ['All Reviews', 'Before & After', 'Product Reviews', 'Routine Results', 'Tips & Hacks']

  const reviews = [
    { author: 'Ishita Sharma', initial: 'I', time: '2 days ago', verified: true, title: 'My acne journey 💜', description: 'These products changed my skin completely. Super grateful!', rating: 4.9, images: ['/images/glow-serum.png', '/images/hero-products.png'], products: ['Niacinamide 10% Serum', 'Radiance Moisturizer'], likes: 23, comments: 5 },
    { author: 'Riya Mehta', initial: 'R', time: '3 days ago', verified: true, title: 'Finally saw results!', description: 'Consistency + right products = magic ✨', rating: 4.8, images: ['/images/blog-routine.png', '/images/blog-gentle.png'], products: ['Vitamin C Serum', 'Sunscreen SPF 50+'], likes: 18, comments: 3 },
    { author: 'Pooja Patel', initial: 'P', time: '1 week ago', verified: true, title: 'My holy grail routine ✨', description: 'Simple, effective and my skin loves it!', rating: 4.8, images: ['/images/skincare-routine.png'], products: ['Cleanser', 'Serum', 'Moisturizer'], likes: 21, comments: 6 },
    { author: 'Ananya Verma', initial: 'A', time: '1 week ago', verified: false, title: 'Best sunscreen ever!', description: 'No white cast, super light and perfect for daily use.', rating: 4.7, images: ['/images/blog-selfcare.png'], products: ['Sunscreen SPF 50+'], likes: 17, comments: 4 },
  ]

  return (
    <div className="reviews-page">
      <section className="rev-hero">
        <div className="rev-hero__inner container">
          <div className="rev-hero__content">
            <span className="badge">✦ REAL STORIES</span>
            <h1 className="rev-hero__heading">Real stories.<br/>Real <em>results.</em></h1>
            <p className="rev-hero__subtext">Honest reviews from our beautiful community ✨</p>
            <button className="btn btn-primary">Share Your Story →</button>
            <div className="rev-hero__social-proof">
              <div className="avatar-stack">
                {['I','R','P','A'].map((a,i) => <div key={i} className="avatar avatar-sm" style={{background:`hsl(${i*60+260},55%,65%)`}}>{a}</div>)}
              </div>
              <span>Loved by 100K+ glow-getters</span>
            </div>
          </div>
          <div className="rev-hero__visual">
            <img src="/images/glow-serum.png" alt="Products" className="rev-hero__image"/>
          </div>
          <div className="rev-hero__rating-card card">
            <div className="rev-hero__rating-header">
              <span className="rev-hero__rating-label">Overall Community Rating</span>
              <div className="rev-hero__rating-big"><span className="rev-hero__star">⭐</span> <strong>4.9</strong>/5</div>
            </div>
            <div className="rev-hero__rating-rows">
              {[{l:'Effectiveness',v:4.9},{l:'Quality',v:4.8},{l:'Value for money',v:4.8},{l:'Would recommend',v:4.9}].map((r,i) => (
                <div key={i} className="rev-hero__rating-row">
                  <span>{r.l}</span><StarRating rating={r.v} size={12}/><span>{r.v}</span>
                </div>
              ))}
            </div>
            <p className="rev-hero__rating-based">Based on 10,238 verified reviews</p>
          </div>
        </div>
      </section>

      <section className="rev-tabs">
        <div className="container">
          <div className="rev-tabs__inner">
            <div className="rev-tabs__list">
              {tabs.map(t => (
                <button key={t} className={`tag ${activeTab === t ? 'tag-active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
              ))}
            </div>
            <div className="rev-tabs__controls">
              <button className="comm-main__filter-btn">Filter ⚙</button>
              <select className="rev-tabs__sort"><option>Most Recent</option><option>Highest Rated</option></select>
            </div>
          </div>
        </div>
      </section>

      <section className="rev-grid section">
        <div className="container">
          <div className="rev-grid__inner">
            {reviews.map((r,i) => <ReviewCard key={i} {...r}/>)}
          </div>
        </div>
      </section>

      <section className="rev-share">
        <div className="rev-share__inner container">
          <div>
            <h3>Share your glow story ✨</h3>
            <p>Your experience can inspire someone today.</p>
          </div>
          <button className="btn btn-pink">Write Your Review →</button>
        </div>
      </section>

      <section className="rev-stats section-sm">
        <div className="container">
          <div className="rev-stats__grid">
            <div className="rev-stats__card card">
              <h3>What our community loves</h3>
              <div className="rev-stats__bars">
                {[{l:'Results',v:4.9,w:'98%'},{l:'Gentle on skin',v:4.8,w:'96%'},{l:'Quality',v:4.8,w:'96%'},{l:'Value for money',v:4.7,w:'94%'},{l:'Packaging',v:4.6,w:'92%'}].map((b,i) => (
                  <div key={i} className="rev-stats__bar-row">
                    <span>{b.l}</span>
                    <div className="rev-stats__bar"><div className="rev-stats__bar-fill" style={{width:b.w}}></div></div>
                    <span>{b.v}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="link-arrow">View all reviews →</a>
            </div>
            <div className="rev-stats__card card">
              <h3>Top Reviewed Products</h3>
              <div className="rev-stats__products">
                {[{n:'Niacinamide 10% Serum',r:4.9,c:'2,345'},{n:'Radiance Moisturizer',r:4.8,c:'1,892'},{n:'Vitamin C Serum',r:4.8,c:'1,432'}].map((p,i) => (
                  <div key={i} className="rev-stats__product">
                    <span className="rev-stats__product-icon">🧴</span>
                    <div>
                      <strong>{p.n}</strong>
                      <div className="rev-stats__product-rating"><span>{p.r}</span> <StarRating rating={p.r} size={11}/> <span className="rev-stats__product-count">({p.c} reviews)</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="link-arrow">See all products →</a>
            </div>
            <div className="rev-stats__card card rev-stats__card--quote">
              <h3>From our community</h3>
              <blockquote className="rev-stats__quote">
                <span className="rev-stats__quote-mark">"</span>
                Cinthesia is more than just skincare, it's a community that truly cares. I feel heard, supported and confident in my skin every day.
              </blockquote>
              <div className="rev-stats__quote-author">
                <div className="avatar avatar-sm" style={{background:'hsl(320,55%,65%)'}}>M</div>
                <div><strong>Mehak S.</strong><p>Glow-getter</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rev-newsletter">
        <div className="rev-newsletter__inner container">
          <h3>Stay in the glow</h3>
          <p>Get tips, updates and exclusive perks.</p>
          <div className="rev-newsletter__form">
            <input type="email" placeholder="Enter your email" className="footer__input"/>
            <button className="btn btn-pink">Subscribe →</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews
