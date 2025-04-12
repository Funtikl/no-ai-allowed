import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h2 className="typewriter">
            <span>Human Creativity is Unscripted</span>
          </h2>
          <p className="hero-desc">
            Where emotions trump algorithms and every work breathes
            authenticity.
          </p>

          <div className="top-stories">
            <article className="top-story">
              <h3 className="story-title">Late Night Tales</h3>
              <p>
                When the city sleeps, the mind wanders: dreams, confessions, and
                midnight coffees.
              </p>
            </article>
            <article className="top-story">
              <h3 className="story-title">Haiku of Dawn</h3>
              <p>
                A short poem rising with the sun, one line at a time, purely
                from the heart.
              </p>
            </article>
            <article className="top-story">
              <h3 className="story-title">Capturing Raindrops</h3>
              <p>
                A photo journey through stormy nights and water-kissed
                windowsills.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (CARDS) */}
      <main>
        <section className="cards-container">
          <Link href="/stories" className="card-link">
            <article className="card" id="stories">
              <h3>📚 Stories</h3>
              <p>
                Fiction, diaries, and everything brimming with unpredictable
                human thought.
              </p>
            </article>
          </Link>

          <Link href="/poetry" className="card-link">
            <article className="card" id="poetry">
              <h3>✒️ Poetry</h3>
              <p>Haikus, sonnets, or free verse – let the pen roam free.</p>
            </article>
          </Link>

          <Link href="/photos" className="card-link">
            <article className="card" id="photos">
              <h3>📸 Photography</h3>
              <p>Fleeting moments that only a real eye can capture.</p>
            </article>
          </Link>

          <Link href="/humor" className="card-link">
            <article className="card" id="humor">
              <h3>🤣 Humor</h3>
              <p>
                Jokes, satire, and the occasional pun. No AI dad jokes here.
              </p>
            </article>
          </Link>
        </section>
        <section className="footer-extra">
          <div className="social-feedback">
            <h2>Stay Connected</h2>
            <p>Follow us online or leave your feedback.</p>
            <div className="social-icons">
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                Facebook
              </a>
            </div>
            <h3>Leave Your Feedback</h3>
            <form className="feedback-form">
              <textarea
                rows={4}
                placeholder="Share your thoughts..."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="recent-posts">
            <h2>What to Read Next?</h2>
            <div className="posts-grid">
              <article className="post-item">
                <h4>Rooftop Reflections</h4>
                <p>
                  A short story about stargazing on the highest building in
                  town.
                </p>
              </article>
              <article className="post-item">
                <h4>Poem for Rainy Days</h4>
                <p>A moody verse capturing the lullaby of droplets.</p>
              </article>
              <article className="post-item">
                <h4>Sunset Shots</h4>
                <p>Photo series of luminous evenings across the globe.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
