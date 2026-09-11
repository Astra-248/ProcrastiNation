import './LandingPage.css'

function LandingPage({ onStart }) {
  return (
    <>
      <header className="landing-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">☹</span>
          <span className="brand-text">ProcrastiNation</span>
        </div>
        <div className="tagline">the to-do app that genuinely does not care</div>
      </header>

      <main className="landing">
        <section className="hero-block">
          <p className="landing-kicker">PRODUCTIVITY, BUT WORSE</p>
          <h1 className="hero-title">
            Your tasks,
            <br />
            my thoughts on them
          </h1>
          <p className="hero-sub">
            ProcrastiNation is a to-do list that actively works against you.
            Tasks rot on the page. Finishing one is a minor betrayal.
            The guilt meter is not a metaphor.
          </p>
          <div className="hero-cta">
            <button type="button" className="cta-primary" onClick={onStart}>
              Start sabotaging
            </button>
            <button type="button" className="cta-secondary" onClick={onStart}>
              I'll do it later
            </button>
          </div>
          <p className="hero-fineprint">
            Neither button actually starts anything. Choosing is the product.
          </p>
        </section>

        <section className="problem-block">
          <h2 className="section-heading">The problem, as we invented it</h2>
          <div className="three-col">
            <article className="card">
              <div className="card-icon" aria-hidden="true">🍃</div>
              <h3>Rotting lists</h3>
              <p>
                Your tasks visually decay the longer you ignore them. Not as a
                cute color shift. As mold. As text that gives up.
              </p>
              <span className="card-tag">decay engine</span>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">⚠</div>
              <h3>The wall of petty questions</h3>
              <p>
                Mark a task done and the app will ask if you are sure. Then it
                will ask again. Then it will mention your mother.
              </p>
              <span className="card-tag">confirmation theater</span>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">📝</div>
              <h3>The excuse generator that turns on you</h3>
              <p>
                Overdue task? Ask for an excuse instead of deleting it. The
                first one is mild. The next one is a jewel-heist confession.
              </p>
              <span className="card-tag">escalating absurdity</span>
            </article>
          </div>
        </section>

        <section className="guilt-block">
          <div className="guilt-card">
            <div className="guilt-visual">
              <div className="guilt-face" aria-hidden="true">😔</div>
              <div className="guilt-score">
                <span className="guilt-number">472</span>
                <span className="guilt-label">productivity shame score</span>
                <span className="guilt-sub">down only. always.</span>
              </div>
            </div>
            <p className="guilt-copy">
              A dashboard that trends downward the more you try to use it.
              Accomplish something and it drops. Open the app and it drops.
              Exist, really, and it probably drops.
            </p>
            <button type="button" className="guilt-peek" onClick={onStart}>
              Peek at your shame
            </button>
          </div>
        </section>

        <section className="demo-block">
          <h2 className="section-heading">A demo that wastes your time on purpose</h2>
          <p className="demo-copy">
            We built this with a zero budget and a competitive commitment to
            getting nothing done. The only integration is an excuse generator
            that may or may not threaten to contact your academic advisor.
          </p>
          <div className="demo-reasons">
            <div className="reason">free tier only</div>
            <div className="reason">no business model</div>
            <div className="reason">no roadmap</div>
            <div className="reason">no future</div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">☹</span>
            <span className="brand-text">ProcrastiNation</span>
          </div>
          <div className="footer-meta">
            <span>made with no budget</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>zero features you wanted</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>probably broken by design</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LandingPage
