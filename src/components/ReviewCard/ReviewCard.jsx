import StarRating from '../StarRating/StarRating'
import './ReviewCard.css'

function ReviewCard({ author, initial, time, verified, title, description, rating, images, products, likes, comments, large }) {
  return (
    <div className={`review-card card ${large ? 'review-card--large' : ''}`}>
      <div className="review-card__header">
        <div className="review-card__author">
          <div className="avatar" style={{ background: `hsl(${(author || '').charCodeAt(0) * 7 % 360}, 55%, 65%)` }}>
            {initial}
          </div>
          <div>
            <div className="review-card__name-row">
              <span className="review-card__name">{author}</span>
              <span className="review-card__time">{time}</span>
            </div>
            {verified && (
              <span className="review-card__verified">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-success)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Verified Purchase
              </span>
            )}
          </div>
        </div>
      </div>

      <h3 className="review-card__title">{title}</h3>
      <p className="review-card__desc">{description}</p>

      <div className="review-card__rating">
        <span className="review-card__score">{rating}</span>
        <StarRating rating={rating} />
      </div>

      {images && images.length > 0 && (
        <div className="review-card__images">
          {images.map((img, i) => (
            <div key={i} className="review-card__img-wrap">
              <img src={img} alt="Review" className="review-card__img" />
              {i === 0 && images.length === 2 && <span className="review-card__img-label">Before</span>}
              {i === 1 && images.length === 2 && <span className="review-card__img-label">After</span>}
            </div>
          ))}
        </div>
      )}

      {products && products.length > 0 && (
        <div className="review-card__products">
          {products.map((p, i) => (
            <span key={i} className="tag tag-purple">{p}</span>
          ))}
        </div>
      )}

      <div className="review-card__footer">
        <button className="post-card__action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span>{likes}</span>
        </button>
        <button className="post-card__action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span>{comments}</span>
        </button>
        <button className="post-card__action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}

export default ReviewCard
