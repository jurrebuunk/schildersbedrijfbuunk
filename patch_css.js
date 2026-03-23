const fs = require('fs');

let content = fs.readFileSync('src/index.css', 'utf8');
content = content.replace(
/\.review-card \{[\s\S]*?transition: box-shadow \.2s, transform \.2s;\n\}/g,
`.review-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.8rem;
  transition: box-shadow .2s, transform .2s;
  min-height: 250px;
}

.review-stars {
  color: #fbbf24;
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
}

.review-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.review-read-more {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--brand-navy);
  cursor: pointer;
  margin-bottom: auto;
}

.review-author {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--brand-navy);
  margin-top: 1rem;
}`
);
fs.writeFileSync('src/index.css', content);
