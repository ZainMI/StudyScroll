"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  FileText,
  FolderPlus,
  Layers3,
  Plus,
  Sparkles,
  Sprout,
  X,
} from "lucide-react";
import { Card, curated, retiredCardIds } from "@/lib/cards";
import {
  learningQueue,
  schedule,
  readReviews,
  intervalLabel,
  type Reviews,
  type Rating,
} from "@/lib/learning";
type Progress = { saved: string[]; learned: string[] };
export default function Home() {
  const [cards, setCards] = useState<Card[]>(curated);
  const [progress, setProgress] = useState<Progress>({
    saved: [],
    learned: [],
  });
  const [reviews, setReviews] = useState<Reviews>({});
  const reviewsRef = useRef<Reviews>({});
  const [queue, setQueue] = useState<{ card: Card; key: string }[]>([]);
  const [rated, setRated] = useState<Record<string, string>>({});
  const ratedRef = useRef(new Set<string>());
  const [session, setSession] = useState(0);
  const [practice, setPractice] = useState(false);
  const [clock, setClock] = useState(Date.now());
  const [ready, setReady] = useState(false);
  const [view, setView] = useState("feed");
  const [course, setCourse] = useState("All courses");
  const [revealed, setRevealed] = useState<string[]>([]);
  const [upload, setUpload] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const moveCard = (direction: number) => {
    const element = reel.current;
    if (!element) return;
    const index = Math.round(element.scrollTop / element.clientHeight);
    element.scrollTo({
      top: (index + direction) * element.clientHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    reel.current?.scrollTo({ top: 0, behavior: "instant" });
    setActiveCard(0);
  }, [view, course]);
  useEffect(() => {
    if (!upload) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !busy) setUpload(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [upload, busy]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("studyscroll-v1");
      if (saved) {
        const data = JSON.parse(saved);
        if (
          Array.isArray(data.cards) &&
          Array.isArray(data.progress?.saved) &&
          Array.isArray(data.progress?.learned)
        ) {
          const restored = [
            ...curated,
            ...data.cards.filter(
              (c: Card) =>
                c &&
                typeof c.id === "string" &&
                typeof c.course === "string" &&
                c.course !== "CS 209a" &&
                typeof c.body === "string" &&
                typeof c.answer === "string" &&
                typeof c.title === "string" &&
                !c.id.startsWith("demo-") &&
                !retiredCardIds.has(c.id) &&
                !curated.some((x) => x.id === c.id),
            ),
          ];
          setCards(restored);
          const restoredReviews = readReviews(
            data.reviews,
            new Set(restored.map((c: Card) => c.id)),
          );
          reviewsRef.current = restoredReviews;
          setReviews(restoredReviews);
          const activeIds = new Set(restored.map((c: Card) => c.id));
          setProgress({
            saved: data.progress.saved.filter((id: string) =>
              activeIds.has(id),
            ),
            learned: data.progress.learned.filter((id: string) =>
              activeIds.has(id),
            ),
          });
        }
      }
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem(
          "studyscroll-v1",
          JSON.stringify({ cards, progress, reviews, learningVersion: 1 }),
        );
      } catch {
        setMessage("Browser storage is full. This session will not be saved.");
      }
  }, [cards, progress, reviews, ready]);
  const courses = Array.from(new Set(cards.map((c) => c.course)));
  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 30000);
    const refresh = () => setClock(Date.now());
    window.addEventListener("focus", refresh);
    return () => {
      clearInterval(timer);
      window.removeEventListener("focus", refresh);
    };
  }, []);
  useEffect(() => {
    if (!ready) return;
    const filtered = cards.filter(
      (c) =>
        (course === "All courses" ||
          c.course === course ||
          c.relatedCourses?.includes(course)) &&
        (view !== "saved" || progress.saved.includes(c.id)),
    );
    const selection =
      view === "saved" || practice
        ? filtered
        : learningQueue(filtered, reviewsRef.current, Date.now());
    setQueue(
      selection.map((card) => ({ card, key: `${card.id}:${Date.now()}` })),
    );
    setRevealed([]);
    reel.current?.scrollTo({ top: 0, behavior: "instant" });
    setActiveCard(0);
    // Ratings deliberately do not reorder the card being read.
  }, [cards, course, view, ready, practice, session]);
  useEffect(() => {
    if (!ready || practice || view !== "feed") return;
    setQueue((current) => {
      const due = cards.filter(
        (c) =>
          (course === "All courses" ||
            c.course === course ||
            c.relatedCourses?.includes(course)) &&
          reviewsRef.current[c.id]?.due <= clock,
      );
      const additions = due.filter(
        (c) =>
          !current.some(
            (entry) =>
              entry.card.id === c.id && !ratedRef.current.has(entry.key),
          ),
      );
      if (!additions.length) return current;
      const insertAt = Math.min(current.length, activeCard + 1);
      return [
        ...current.slice(0, insertAt),
        ...additions.map((card) => ({ card, key: `${card.id}:${clock}` })),
        ...current.slice(insertAt),
      ];
    });
  }, [clock, ready, practice, view, cards, course, activeCard]);
  const visible = queue.filter(
    (entry) => view !== "saved" || progress.saved.includes(entry.card.id),
  );
  const rateCard = (card: Card, key: string, rating: Rating) => {
    if (ratedRef.current.has(key) || practice || view === "saved") return;
    ratedRef.current.add(key);
    const now = Date.now();
    const next = schedule(reviewsRef.current[card.id], rating, now);
    const updated = { ...reviewsRef.current, [card.id]: next };
    reviewsRef.current = updated;
    setReviews(updated);
    setRated((r) => ({
      ...r,
      [key]: `Next review in ${intervalLabel(next.due - now)}`,
    }));
    setProgress((p) => ({
      ...p,
      learned: p.learned.includes(card.id)
        ? p.learned
        : [...p.learned, card.id],
    }));
  };
  const resetProgress = () => {
    if (
      !window.confirm(
        "Reset all learning progress on this device? This clears recall ratings and review dates. Your course material and saved cards will stay.",
      )
    )
      return;
    reviewsRef.current = {};
    ratedRef.current.clear();
    setReviews({});
    setRated({});
    setRevealed([]);
    setProgress((p) => ({ ...p, learned: [] }));
    setPractice(false);
    setClock(Date.now());
    setSession((s) => s + 1);
    setMessage(
      "Learning progress reset. Your material and saved cards are still here.",
    );
  };
  const toggleSave = (id: string) =>
    setProgress((p) => ({
      ...p,
      saved: p.saved.includes(id)
        ? p.saved.filter((x) => x !== id)
        : [...p.saved, id],
    }));
  async function importFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    setMessage("");
    try {
      if (
        files.length > 60 ||
        Array.from(files).reduce((s, f) => s + f.size, 0) > 30 * 1024 * 1024
      )
        throw new Error("Choose up to 60 files and 30 MB at a time.");
      const form = new FormData();
      Array.from(files).forEach((f) =>
        form.append("files", f, f.webkitRelativePath || f.name),
      );
      const response = await fetch("/api/import", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (data.cards.length) {
        setCards((c) => [...data.cards, ...c]);
        setCourse("All courses");
        setView("feed");
        setUpload(false);
      }
      setMessage(
        `${data.cards.length} study cards created.${data.skipped.length ? ` ${data.skipped.length} files could not produce cards (unsupported, scanned, or too little text).` : ""}`,
      );
    } catch (e) {
      setMessage(
        e instanceof Error ? e.message : "Import failed. Please try again.",
      );
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  }
  return (
    <div
      className={`shell ${view !== "courses" ? "reels-mode" : "library-mode"}`}
    >
      <aside className="sidebar">
        <a className="logo" href="/">
          <span className="logo-mark">
            <Layers3 size={23} />
          </span>
          study<span>scroll</span>
          <i />
        </a>
        <div className="workspace">
          <span className="avatar small">S</span>
          <div>
            My workspace<small>Fall 2026 · Your courses</small>
          </div>
          <ChevronDown size={14} />
        </div>
        <div className="nav-label">YOUR SPACE</div>
        <nav>
          <button
            aria-current={view === "feed" ? "page" : undefined}
            className={view === "feed" ? "active" : ""}
            onClick={() => {
              setCourse("All courses");
              setPractice(false);
              setSession((s) => s + 1);
              setView("feed");
            }}
          >
            <Layers3 size={19} />
            For you
            <span className="nav-dot" />
          </button>
          <button
            aria-current={view === "saved" ? "page" : undefined}
            className={view === "saved" ? "active" : ""}
            onClick={() => setView("saved")}
          >
            <Bookmark size={19} />
            Saved cards<span className="count">{progress.saved.length}</span>
          </button>
          <button
            aria-current={view === "courses" ? "page" : undefined}
            className={view === "courses" ? "active" : ""}
            onClick={() => {
              setCourse("All courses");
              setView("courses");
            }}
          >
            <BookOpen size={19} />
            My courses<span className="count">{courses.length}</span>
          </button>
        </nav>
        <div className="nav-label course-label">
          YOUR COURSES
          <button aria-label="Add a course" onClick={() => setUpload(true)}>
            <Plus size={16} />
          </button>
        </div>
        <div className="course-nav">
          {courses.map((c, i) => (
            <button
              key={c}
              onClick={() => {
                setCourse(c);
                setView("feed");
              }}
            >
              <span className={`dot dot-${i % 3}`} />
              {c}
              <span className="course-number">
                {cards.filter((x) => x.course === c).length}
              </span>
            </button>
          ))}
        </div>
        <button className="add-course" onClick={() => setUpload(true)}>
          <Plus size={16} /> Add course material
        </button>
        <div className="sidebar-bottom">
          <div className="plant-icon">
            <Sprout size={26} />
          </div>
          <h3>Small scrolls. Big growth.</h3>
          <p>
            A little more curious.
            <br />A little less doomscrolling.
          </p>
          <span>That’s a good trade.</span>
        </div>
        <div className="profile">
          <span className="avatar">Y</span>
          <div>
            Your learning space<small>Stored on this device</small>
          </div>
          <span className="online" />
        </div>
      </aside>
      <main>
        <header>
          <div>
            <span className="breadcrumb">Your space</span>
            <span className="slash">/</span>
            {view === "saved"
              ? "Saved cards"
              : view === "courses"
                ? "My courses"
                : "For you"}
          </div>
          <span className="header-note">
            <span className="online" /> A better kind of screen time
          </span>
        </header>
        <div className="page-content">
          <section className="heading">
            <div>
              <div className="eyebrow">LESS SCROLLING. MORE KNOWING.</div>
              <h1>
                {view === "saved"
                  ? "Keep the good stuff."
                  : view === "courses"
                    ? "Your semester, connected."
                    : "Meet your new rabbit hole."}
              </h1>
              <p>
                {view === "saved"
                  ? "The ideas you want to come back to."
                  : view === "courses"
                    ? "Your material. A whole new way to learn it."
                    : "One idea. A little curiosity. Swipe to the next."}
              </p>
            </div>
            <button
              className="primary import-top"
              onClick={() => setUpload(true)}
            >
              <Plus size={17} /> Add material
            </button>
          </section>
          {message && (
            <div className="notice" role="status">
              {message}
              <button
                aria-label="Dismiss message"
                onClick={() => setMessage("")}
              >
                <X size={16} />
              </button>
            </div>
          )}
          <div className="content-grid">
            <div className="feed-column">
              <div className="filters">
                {["All courses", ...courses].map((c) => (
                  <button
                    className={course === c ? "selected" : ""}
                    key={c}
                    onClick={() => setCourse(c)}
                  >
                    {c === "All courses" && <Sparkles size={14} />} {c}
                  </button>
                ))}
              </div>
              <div className="feed-label">
                <a href="/feed-guide" aria-label="Explore the course map">
                  Course map <ArrowUpRight size={12} />
                </a>
                <span>
                  {view === "saved"
                    ? "YOUR COLLECTION"
                    : view === "courses"
                      ? "COURSE LIBRARY"
                      : "A LITTLE LEARNING, JUST FOR YOU"}
                </span>
                <span>
                  Curated from your courses <span className="tiny-dot" />
                </span>
              </div>
              {view === "courses" && (
                <section className="learning-summary">
                  <strong>
                    {
                      Object.values(reviews).filter((r) => r.due <= clock)
                        .length
                    }{" "}
                    reviews due
                  </strong>
                  <p>
                    {Object.keys(reviews).length} cards practiced ·{" "}
                    {cards.length - Object.keys(reviews).length} new. Scrolling
                    and revealing do not count as recall.
                  </p>
                  <button
                    className="primary"
                    onClick={() => {
                      setPractice(true);
                      setCourse("All courses");
                      setView("feed");
                    }}
                  >
                    Browse all material
                  </button>
                  <a href="/feed-guide">How your learning feed works</a>
                  <p className="storage-note">
                    Progress is saved in this browser on this device. It does
                    not sync between devices.
                  </p>
                  <button className="reset-progress" onClick={resetProgress}>
                    Reset learning progress
                  </button>
                </section>
              )}
              {view === "courses" ? (
                <div className="course-grid">
                  {courses
                    .filter((c) => course === "All courses" || course === c)
                    .map((c, i) => (
                      <button
                        className="course-tile"
                        key={c}
                        onClick={() => {
                          setCourse(c);
                          setPractice(false);
                          setView("feed");
                        }}
                      >
                        <span
                          className={`course-icon ${["purple", "green", "orange"][i % 3]}`}
                        >
                          <BookOpen size={24} />
                        </span>
                        <h2>{c}</h2>
                        <p>
                          {cards.filter((x) => x.course === c).length} study
                          cards
                        </p>
                        <span>
                          Open feed <ArrowRight size={16} />
                        </span>
                      </button>
                    ))}
                </div>
              ) : (
                <div
                  className="reel-viewport"
                  ref={reel}
                  tabIndex={0}
                  role="region"
                  aria-label="Study reels. Swipe or use arrow keys to move between cards."
                  onScroll={(event) => {
                    const element = event.currentTarget;
                    setActiveCard(
                      Math.round(element.scrollTop / element.clientHeight),
                    );
                  }}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (
                      ["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(
                        event.key,
                      )
                    ) {
                      event.preventDefault();
                      moveCard(
                        ["ArrowDown", "PageDown"].includes(event.key) ? 1 : -1,
                      );
                    }
                  }}
                >
                  {visible.map(({ card, key }, index) => {
                    const open = revealed.includes(key);
                    const learned = progress.learned.includes(card.id);
                    return (
                      <article
                        className={`study-card reel-card tone-${card.color}`}
                        key={key}
                        aria-label={`Card ${index + 1} of ${visible.length}`}
                      >
                        <div className="card-top">
                          <div className={`course-icon ${card.color}`}>
                            <BookOpen size={18} />
                          </div>
                          <div>
                            <strong>{card.course}</strong>
                            <span>{card.topic}</span>
                          </div>
                          <span className="card-time">
                            {Math.ceil((card.seconds ?? 60) / 60)} min
                          </span>
                          <button
                            className={
                              progress.saved.includes(card.id)
                                ? "save saved"
                                : "save"
                            }
                            aria-label={
                              progress.saved.includes(card.id)
                                ? "Unsave card"
                                : "Save card"
                            }
                            onClick={() => toggleSave(card.id)}
                          >
                            <Bookmark
                              size={20}
                              fill={
                                progress.saved.includes(card.id)
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>
                        <div
                          className="card-reading"
                          tabIndex={0}
                          aria-label="Card content"
                        >
                          <div className="reel-kicker">
                            <span className={`dot ${card.color}`} />
                            {practice || view === "saved"
                              ? "BROWSE"
                              : reviews[card.id]
                                ? "RETRIEVAL PRACTICE"
                                : "NEW IDEA"}{" "}
                            · {card.kind}
                          </div>
                          <div className="card-body">
                            <h2>{card.title}</h2>
                            {card.body && <p>{card.body}</p>}
                            {open && (
                              <div className="answer">
                                <div>
                                  <Sparkles size={16} /> THE IDEA
                                </div>
                                <p>{card.answer}</p>
                                {card.takeaway && (
                                  <strong className="takeaway">
                                    {card.takeaway}
                                  </strong>
                                )}
                              </div>
                            )}
                            <button
                              className={open ? "reveal revealed" : "reveal"}
                              onClick={() =>
                                setRevealed((r) =>
                                  open
                                    ? r.filter((x) => x !== key)
                                    : [...r, key],
                                )
                              }
                            >
                              {open
                                ? "Hide explanation"
                                : "Recall your answer, then reveal."}
                              {open ? (
                                <ChevronDown size={17} />
                              ) : (
                                <ArrowRight size={17} />
                              )}
                            </button>
                            {open &&
                              (practice || view === "saved" ? (
                                <p className="review-status">
                                  Browse mode · your review schedule stays
                                  unchanged.
                                </p>
                              ) : rated[key] ? (
                                <p className="review-status" role="status">
                                  {rated[key]} · swipe for the next idea.
                                </p>
                              ) : (
                                <div className="rating recall-rating">
                                  <span>
                                    How much did you recall before revealing?
                                  </span>
                                  {(
                                    [
                                      "again",
                                      "hard",
                                      "good",
                                      "easy",
                                    ] as Rating[]
                                  ).map((rating) => (
                                    <button
                                      key={rating}
                                      onClick={() =>
                                        rateCard(card, key, rating)
                                      }
                                      title={
                                        {
                                          again: "Could not recall it",
                                          hard: "Partial answer or needed a hint",
                                          good: "Correct without a hint",
                                          easy: "Correct and effortless",
                                        }[rating]
                                      }
                                    >
                                      <strong>
                                        {rating[0].toUpperCase() +
                                          rating.slice(1)}
                                      </strong>
                                      <span className="rating-meaning">
                                        {
                                          {
                                            again: "Forgot",
                                            hard: "With help",
                                            good: "Unaided",
                                            easy: "Effortless",
                                          }[rating]
                                        }
                                      </span>
                                      <small>
                                        {intervalLabel(
                                          schedule(
                                            reviews[card.id],
                                            rating,
                                            clock,
                                          ).due - clock,
                                        )}
                                      </small>
                                    </button>
                                  ))}
                                </div>
                              ))}
                          </div>
                          <footer className="card-footer">
                            <FileText size={14} />
                            <span>{card.source}</span>
                            {learned ? (
                              <span className="learned-label">
                                <Check size={13} /> Reviewed
                              </span>
                            ) : (
                              <span className="source-label">
                                {card.sources
                                  ? "Curated card"
                                  : "Source excerpt"}
                              </span>
                            )}
                          </footer>
                          {card.sources && (
                            <details className="sources">
                              <summary>
                                Open source material · {card.sources.length}{" "}
                                reference{card.sources.length > 1 ? "s" : ""}
                              </summary>
                              {card.sources.map((source) => (
                                <a
                                  key={source.path + source.locator}
                                  href={`/api/source?path=${encodeURIComponent(source.path)}${source.page ? `#page=${source.page}` : ""}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {source.locator}
                                  <span>
                                    {source.path.split("/").at(-1)}{" "}
                                    <ArrowUpRight size={12} />
                                  </span>
                                </a>
                              ))}
                            </details>
                          )}
                        </div>
                      </article>
                    );
                  })}
                  {visible.length > 0 && (
                    <section className="session-end">
                      <Sprout size={30} />
                      <h2>You’re through this session.</h2>
                      <p>
                        Unrated cards remain new. Rated cards will return when
                        due. Take a break, or try a full problem on paper.
                      </p>
                      <button
                        className="primary"
                        onClick={() => {
                          setPractice(false);
                          setSession((s) => s + 1);
                        }}
                      >
                        Refresh learning feed
                      </button>
                    </section>
                  )}
                </div>
              )}
              {ready && view !== "courses" && !visible.length && (
                <div className="empty">
                  <Bookmark size={32} />
                  <h2>You’re caught up for now.</h2>
                  <p>
                    {view === "saved"
                      ? "Tap the bookmark on any card to keep it here."
                      : "Your next reviews will appear when they’re due. You can also browse all your material."}
                  </p>
                  <button
                    className="primary"
                    onClick={() => {
                      setPractice(true);
                      setView("feed");
                      setCourse("All courses");
                    }}
                  >
                    Browse all material
                  </button>
                </div>
              )}
              {visible.length > 0 && view !== "courses" && (
                <div className="reel-controls">
                  <span className="reel-hint">Swipe or scroll to explore</span>
                  <span className="reel-position" aria-live="polite">
                    {Math.min(activeCard + 1, visible.length)}{" "}
                    <span>/ {visible.length}</span>
                  </span>
                  <button
                    aria-label="Previous card"
                    disabled={activeCard === 0}
                    onClick={() => moveCard(-1)}
                  >
                    <ArrowUp size={18} />
                  </button>
                  <button
                    aria-label="Next card"
                    disabled={activeCard >= visible.length - 1}
                    onClick={() => moveCard(1)}
                  >
                    <ArrowDown size={18} />
                  </button>
                </div>
              )}
            </div>
            <aside className="right-rail">
              <section className="daily">
                <div className="rail-heading">
                  <span className="sun">✳</span> A LITTLE BETTER, EVERY DAY
                </div>
                <h2>Build a learning habit.</h2>
                <p>
                  Follow the material.
                  <br />
                  Review at your own pace.
                </p>
                <div className="goal-line">
                  <strong>
                    {
                      cards.filter((c) => progress.learned.includes(c.id))
                        .length
                    }{" "}
                    <span>/ {cards.length} reviewed</span>
                  </strong>
                  <span>Current library</span>
                </div>
                <div className="progress-track">
                  <div
                    style={{
                      width: `${(cards.length ? cards.filter((c) => progress.learned.includes(c.id)).length / cards.length : 0) * 100}%`,
                    }}
                  />
                </div>
                <div className="goal-foot">
                  <Sprout size={15} />
                  No card limit. Room to keep learning.
                </div>
              </section>
              <section className="material-promo">
                <span className="folder-art">
                  <FolderPlus size={32} strokeWidth={1.4} />
                </span>
                <h3>
                  Your semester.
                  <br />
                  Connected.
                </h3>
                <p>
                  {curated.length} curated cards connect the ideas in your
                  problem sets, lectures, and notebooks.
                </p>
                <a className="master-link" href="/feed-guide">
                  Explore the course map <ArrowUpRight size={17} />
                </a>
              </section>
              <section className="how-it-works">
                <div className="rail-heading">A FEED THAT GIVES BACK</div>
                <div>
                  <span>01</span>
                  <p>
                    <strong>Bring your classes</strong>Add a folder of course
                    material.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Follow your curiosity</strong>One bite-sized idea at
                    a time.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Make it yours</strong>Recall, reflect, and revisit.
                  </p>
                </div>
              </section>
              <p className="rail-footer">
                Made for your mind, not your attention span.
                <br />
                <span>Stay curious. Scroll intentionally.</span>
              </p>
            </aside>
          </div>
        </div>
      </main>
      {upload && (
        <div
          className="modal-backdrop"
          onClick={() => !busy && setUpload(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-title"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              aria-label="Close import"
              disabled={busy}
              onClick={() => setUpload(false)}
            >
              <X size={21} />
            </button>
            <div className="upload-icon">
              <FolderPlus size={32} />
            </div>
            <h2 id="upload-title">A folder full of possibilities.</h2>
            <p>
              Choose a folder of classes. Subfolders become courses, and
              passages become recall cards.
            </p>
            <div className="folder-example">
              My semester /<br />
              <span>↳ MATH 201 / lecture-notes.pdf</span>
              <br />
              <span>↳ CS 101 / homework.docx</span>
            </div>
            <button
              className="primary upload-button"
              disabled={busy}
              onClick={() => input.current?.click()}
            >
              {busy ? "Reading your material…" : "Choose a course folder"}
              <ArrowRight size={18} />
            </button>
            <input
              ref={input}
              type="file"
              multiple
              {...{ webkitdirectory: "" }}
              hidden
              onChange={(e) => importFiles(e.target.files)}
            />
            <small>PDF, DOCX, TXT & Markdown · Up to 60 files / 30 MB</small>
            <p className="privacy">
              Text is extracted on your local app server. Cards stay in this
              browser. This prototype uses source passages and fill-in-the-gap
              prompts; no AI service is connected. Scanned PDFs need OCR first.
            </p>
            {message && (
              <div className="modal-message" role="status">
                {message}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
