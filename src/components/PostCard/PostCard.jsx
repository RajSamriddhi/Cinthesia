import './PostCard.css'

function PostCard({ author, initial, time, category, categoryColor, title, description, likes, comments, replies, replyAvatars }) {
  const colorMap = {
    'Acne': 'pink',
    'Dryness': 'pink',
    'Routine Help': 'purple',
    'Sensitive Skin': 'purple',
    'Anti-Aging': 'pink',
  }

  const tagClass = `tag-${colorMap[category] || 'purple'}`

  return (
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__author">
          <div className="avatar" style={{ background: categoryColor || 'var(--gradient-primary)' }}>
            {initial}
          </div>
          <div>
            <span className="post-card__name">{author}</span>
            <span className="post-card__time">{time}</span>
          </div>
        </div>
        <div className="post-card__header-right">
          <span className={`tag ${tagClass}`}>{category}</span>
          <button className="post-card__more" aria-label="More options">•••</button>
        </div>
      </div>

      <h3 className="post-card__title">{title}</h3>
      {description && <p className="post-card__desc">{description}</p>}

      <div className="post-card__footer">
        <div className="post-card__actions">
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
        <div className="post-card__replies">
          <div className="avatar-stack">
            {(replyAvatars || ['S', 'M', 'A']).slice(0, 3).map((a, i) => (
              <div key={i} className="avatar avatar-sm" style={{ background: `hsl(${i * 80 + 260}, 60%, 65%)` }}>{a}</div>
            ))}
          </div>
          <span className="post-card__reply-count">{replies} replies</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
