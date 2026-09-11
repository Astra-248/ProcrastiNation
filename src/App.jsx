import './App.css'

function App() {
  return (
    <>
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">&#9781;</span>
          <span className="brand-text">ProcrastiNation</span>
        </div>
        <div className="tagline">the to-do app that genuinely does not care</div>
      </header>

      <main className="landing">
        <section className="hero-block">
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
            <button
              type="button"
              className="cta-primary"
              onClick={() => {
                const audio = new Audio('/taunt.mp3')
                audio.play().catch(() => {})
              }}
            >
              Start sabotaging
            </button>
            <button
              type="button"
              className="cta-secondary"
              onClick={() => {
                const audio = new Audio('/sigh.mp3')
                audio.play().catch(() => {})
              }}
            >
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
            <div className="card card-rot">
              <div className="card-icon" aria-hidden="true">&#127807;</div>
              <h3>Rotting lists</h3>
              <p>
                Your tasks visually decay the longer you ignore them.
                Not as a cute color shift. As mold. As text that gives up.
                As timestamps that stop telling the time and start telling
                the story of your decline.
              </p>
              <span className="card-tag">decay engine</span>
            </div>
            <div className="card card-wall">
              <div className="card-icon" aria-hidden="true">&#9888;</div>
              <h3>The wall of petty questions</h3>
              <p>
                Mark a task done and the app will ask you if you are sure.
                Then it will ask again. Then it will mention your mother.
                Then it will imply the United Nations has been notified.
                Eventually it will let you through, but badly.
              </p>
              <span className="card-tag">confirmation theater</span>
            </div>
            <div className="card card-excuse">
              <div className="card-icon" aria-hidden="true">&#128221;</div>
              <h3>The excuse generator that turns on you</h3>
              <p>
                Overdue task? Ask for an excuse instead of deleting it.
                The first one is mild. The next one is a jewel-heist
                confession. Sometimes it offers to email your professor.
                Sometimes it drafts a 400-word affidavit no one asked for.
              </p>
              <span className="card-tag">escalating absurdity</span>
            </div>
          </div>
        </section>

        <section className="guilt-block">
          <div className="guilt-card">
            <div className="guilt-visual">
              <div className="guilt-face" aria-hidden="true">&#128532;</div>
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
            <button
              type="button"
              className="guilt-peek"
              onClick={() => {
                const audio = new Audio('/violin-crash.mp3')
                audio.play().catch(() => {})
              }}
            >
              Peek at your shame
            </button>
          </div>
        </section>

        <section className="demo-block">
          <h2 className="section-heading">A demo that wastes your time on purpose</h2>
          <p className="demo-copy">
            We built this for an 18-hour hackathon with a zero budget and a
            competitive commitment to getting nothing done. The app is soft-
            ware only. The only integration is an AI excuse generator that
            may or may not threaten to contact your academic advisor.
          </p>
          <div className="demo-reasons">
            <div className="reason"><span>free tier only</span></div>
            <div className="reason"><span>no business model</span></div>
            <div className="reason"><span>no roadmap</span></div>
            <div className="reason"><span>no future</span></div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">&#9781;</span>
            <span className="brand-text">ProcrastiNation</span>
          </div>
          <div className="footer-meta">
            <span>made with no budget</span>
            <span className="dot" aria-hidden="true">&bull;</span>
            <span>zero features you wanted</span>
            <span className="dot" aria-hidden="true">&bull;</span>
            <span>probably broken by design</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
