import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import feed from "@/content/master-feed.json";
import coverage from "@/content/coverage.json";
const map = [
  {
    course: "AM 205",
    title: "Make the computation trustworthy.",
    topics:
      "Floating-point arithmetic → matrix geometry → pivoting → low-rank approximation → least squares",
    scope: "Problem sets 1–2. No AM 205 lecture slides were present.",
    next: "Deepen with fresh numeric variants and multi-step QR practice where recall needs work.",
  },
  {
    course: "AM 207",
    title: "Learn to think in distributions.",
    topics:
      "Inverse transforms → Monte Carlo → MCMC → Markov processes → SSA → Bayesian updating",
    scope:
      "Lectures 01–06, with homework 1–2 practice: probability, sampling, Markov dynamics, stochastic simulation, and uncertainty.",
    next: "Deepen with worked simulation traces, full derivation drills, and new sampling examples.",
  },
  {
    course: "STAT 244",
    title: "See the geometry behind the statistics.",
    topics:
      "Subspaces → estimability → projections → contrast coding → variance → Gauss–Markov",
    scope:
      "All three uploaded note sets: linear algebra, least-squares theory, and inference through regression diagnostics, plus homework 1–2.",
    next: "Deepen with new estimability problems, proof reconstruction, and inference calculations.",
  },
  {
    course: "AM 209a",
    title: "Turn data into sound predictions.",
    topics:
      "Data preparation → EDA → kNN → regression → cross-validation → ridge and lasso → bootstrap inference",
    scope:
      "Lectures 1–8 from your supplied Ed course, labeled COMPSCI 1090A on the site. Includes all 17 core slide decks.",
    next: "Practice implementing the methods on new datasets and interpreting results without looking at the answers.",
  },
];
export default function Guide() {
  return (
    <main className="guide">
      <Link className="back-link" href="/">
        <ArrowLeft size={16} /> Back to your feed
      </Link>
      <div className="eyebrow">YOUR MATERIAL, INTERPRETED</div>
      <h1>
        A semester of ideas.
        <br />
        One place to connect them.
      </h1>
      <p className="guide-intro">
        {feed.cards.length} short question-and-answer flashcards, grounded in your own courses. Try each question, then reveal a direct answer and one intuition. The
        scope is your current lectures and assignments, with supporting textbook
        sections. There is no card quota; the material and your recall gaps
        determine how this grows.
      </p>
      <div className="guide-callout">
        <Layers3 size={25} />
        <p>
          <strong>The master file is the feed.</strong>Edit{" "}
          <code>content/master-feed.json</code> to change cards. The app reads
          it directly. Run <code>npm run feed:build</code> to regenerate the
          readable <code>content/MASTER_FEED.md</code>.
        </p>
      </div>
      <div className="guide-grid">
        {map.map((c) => (
          <section key={c.course}>
            <span className="eyebrow">{c.course}</span>
            <h2>{c.title}</h2>
            <p>{c.topics}</p>
            <hr />
            <p>
              <strong>Current coverage</strong>
              {c.scope}
            </p>
            <p>
              <strong>Still to develop</strong>
              {c.next}
            </p>
          </section>
        ))}
      </div>
      <section className="guide-method">
        <h2>Coverage by learning objective</h2>
        <p>
          These groups have authored prompts. Coverage means there is study
          material here; it does not mean you have mastered the topic.
        </p>
        <div className="coverage-list">
          {coverage.units.map((unit) => (
            <details key={unit.course + unit.title}>
              <summary>
                <span>{unit.course}</span>
                {unit.title}
                <small>{unit.cardIds.length} cards</small>
              </summary>
              {unit.objectives.map((objective) => (
                <div key={objective.concept}>
                  <strong>{objective.concept}</strong>
                  <span>
                    {objective.cardIds.length} prompt
                    {objective.cardIds.length === 1 ? "" : "s"}
                  </span>
                </div>
              ))}
            </details>
          ))}
        </div>
        <h2>A feed that brings ideas back</h2>
        <p>
          Attempt an answer before revealing, then compare it with the
          explanation. Again means you could not recall it; Hard means you
          needed help; Good means correct unaided; Easy means correct and
          effortless. Swiping alone never counts as learning.
        </p>
        <p>
          First reviews return in 10 minutes, 6 hours, 1 day, or 4 days
          respectively. Successful delayed recall grows the interval; a missed
          answer brings it back sooner. These are practical scheduling rules,
          not a measured guarantee of retention.
        </p>
        <p>
          Due reviews come first, mixed with new ideas. New material follows
          prerequisite order where possible and varies topics. The card you are
          reading stays stable; due reviews are inserted next as time passes.
          Use Courses → Browse all material to explore without changing review
          dates. Progress stays on this device.
        </p>
        <h2>How this feed should grow</h2>
        <p>
          New material goes into the course folders. A curation pass identifies
          the learning objectives, writes short questions with explanations, and
          adds precise source references. Keep stable card IDs so bookmarks
          survive updates.
        </p>
        <p>
          Each scroll should ask for a prediction, a small calculation, or an
          explanation before showing the answer. Cross-course cards connect
          shared ideas. Save the ones that need another attempt.
        </p>
        <p>
          The folder-import button remains an extraction prototype: it creates
          literal gap-fill cards. It does not automatically produce the
          interpreted content in this master feed. There is no live AI service
          or cloud account. Your review schedule is stored in this browser.
        </p>
        <Link className="primary" href="/">
          Start exploring <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
