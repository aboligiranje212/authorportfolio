import React, { useState } from 'react';
import './Blog.css';

// 1. ADD "fullContent" TO YOUR DATA
const BLOG_POSTS = [
  {
    id: 1,
    date: "Dec 24, 2025",
    title: "It's Done. The Sequel is Finished.",
    content: "After six months of sleepless nights...",
    isNew: true,
    fullContent: "After six months of sleepless nights and way too much coffee, the first draft of the sequel is finally done. It’s messy, it’s dark, and I think I cried writing the ending. \n\n The journey began in a small cabin in Norway, where I isolated myself to understand the protagonist's loneliness. The result is something I never expected. It breaks all the rules I established in the first book. I can't wait for you to read it."
  },
  {
    id: 2,
    date: "Nov 15, 2025",
    title: "My Obsession with Black Holes",
    content: "People ask where I get my ideas...",
    isNew: false,
    fullContent: "People ask where I get my ideas. Honestly? I spent three weeks watching astrophysics documentaries instead of writing. The real science of the void is actually scarier than anything I could invent. \n\n Did you know that time technically stops at the event horizon? Imagine being trapped in a single second for eternity. That concept became the core engine of my new plot."
  },
  {
    id: 3,
    date: "Oct 02, 2025",
    title: "Thank You for the Support!",
    content: "The recent book signing event was incredible...",
    isNew: false,
    fullContent: "The recent book signing event was incredible. It was amazing to meet so many readers in person. Your support means everything to me. \n\n Writing is a solitary profession. We sit in rooms and talk to imaginary people. Seeing real faces, hearing how the stories touched you... that is the fuel that keeps me going."
  }
];

const Blog = () => {
  // STATE: Which blog is currently open? (null = none)
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="blog-section" id="blog">
      <div className="section-header">
        <span className="subtitle">Author's Journal</span>
        <h2>{selectedPost ? 'Reading Article' : 'Recent Updates'}</h2>
      </div>

      {/* CONDITIONAL RENDERING: The "Switch" */}
      {selectedPost ? (
        /* MODE 2: FULL ARTICLE VIEW */
        <div className="blog-detail-view">
          <button className="back-btn" onClick={() => setSelectedPost(null)}>
            ← Back to All Posts
          </button>
          
          <article className="full-article">
            <span className="blog-date">{selectedPost.date}</span>
            <h3>{selectedPost.title}</h3>
            {/* Creates paragraphs from new lines */}
            {selectedPost.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>

      ) : (
        /* MODE 1: GRID VIEW (Your original code) */
        <div className="blog-grid">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="blog-card">
              <div className="card-header">
                <span className="blog-date">{post.date}</span>
                {post.isNew && <span className="new-badge">NEW</span>}
              </div>

              <h3>{post.title}</h3>
              <p>{post.content}</p>
              
              {/* BUTTON: Sets the state to this post */}
              <div 
                className="read-more-link" 
                onClick={() => setSelectedPost(post)}
              >
                Read Full Post →
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;