import './StarRating.css'

function StarRating({ rating = 5, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <span className="star-rating" style={{ fontSize: size }}>
      {'★'.repeat(fullStars)}
      {hasHalf && <span className="star-rating__half">★</span>}
      {'☆'.repeat(emptyStars)}
    </span>
  )
}

export default StarRating
