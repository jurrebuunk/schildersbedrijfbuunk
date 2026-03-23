const fs = require('fs');

let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
content = content.replace(
/\{reviews\.map\(\(review\) => \([\s\S]*?\}\)\}/g,
`{reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">{'★'.repeat(review.stars)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-read-more">Read more</div>
              <div className="review-author">{review.author}</div>
            </div>
          ))}`
);
fs.writeFileSync('src/pages/HomePage.tsx', content);
