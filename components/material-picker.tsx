"use client";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Search,
  Shuffle,
  Sparkles,
  X,
} from "lucide-react";
import type { Card } from "@/lib/cards";
import type { Reviews } from "@/lib/learning";
import type { QuizResults } from "@/lib/quiz";
import type { StudyGroup } from "@/lib/study-groups";
import type { StudyOrder } from "@/lib/study-session";
export function MaterialPicker({
  cards,
  groups,
  selected,
  setSelected,
  mode,
  setMode,
  order,
  setOrder,
  reviews,
  results,
  onStart,
  onQuiz,
  onSaved,
  savedCount,
}: {
  cards: Card[];
  groups: StudyGroup[];
  selected: string[];
  setSelected: (ids: string[]) => void;
  mode: "topics" | "lectures";
  setMode: (mode: "topics" | "lectures") => void;
  order: StudyOrder;
  setOrder: (order: StudyOrder) => void;
  reviews: Reviews;
  results: QuizResults;
  onStart: () => void;
  onQuiz: () => void;
  onSaved: () => void;
  savedCount: number;
}) {
  const [search, setSearch] = useState(""),
    [activity, setActivity] = useState<"cards" | "quiz">("cards");
  const selectedGroups = groups.filter((g) => selected.includes(g.id));
  const ids = new Set(selectedGroups.flatMap((g) => g.cardIds));
  const query = search.trim().toLowerCase();
  const courses = useMemo(
    () => Array.from(new Set(cards.map((c) => c.course))),
    [cards],
  );
  const visible = (c: string) =>
    groups.filter(
      (g) =>
        g.course === c &&
        g.mode === mode &&
        (!query || `${g.course} ${g.label}`.toLowerCase().includes(query)),
    );
  const toggle = (id: string) =>
    setSelected(
      selected.includes(id)
        ? selected.filter((x) => x !== id)
        : [...selected, id],
    );
  return (
    <section className="study-picker" aria-label="Choose study material">
      <div className="study-activity" aria-label="Study activity">
        <button
          aria-pressed={activity === "cards"}
          onClick={() => setActivity("cards")}
        >
          <BookOpen size={19} />
          <span>
            Flashcards<small>Recall, reveal, repeat</small>
          </span>
        </button>
        <button
          aria-pressed={activity === "quiz"}
          onClick={() => setActivity("quiz")}
        >
          <Sparkles size={19} />
          <span>
            Practice quiz<small>Test your intuition</small>
          </span>
        </button>
      </div>
      <div className="material-search">
        <Search size={18} />
        <input
          aria-label="Search study material"
          placeholder="Find a course, lecture, or topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button aria-label="Clear search" onClick={() => setSearch("")}>
            <X size={16} />
          </button>
        )}
      </div>
      <div className="study-picker-toolbar">
        <div className="study-modes" aria-label="Group material by">
          {(["lectures", "topics"] as const).map((m) => (
            <button
              key={m}
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
            >
              {m === "lectures" ? "Lectures / chapters" : "Topics"}
            </button>
          ))}
        </div>
        <button onClick={onSaved}>Saved cards ({savedCount})</button>
      </div>
      <p className="study-help">
        Choose your material. Mix sets freely; shared cards appear once.
      </p>
      {selectedGroups.length > 0 && (
        <div className="selected-material" aria-label="Selected material">
          {selectedGroups.map((g) => (
            <button
              key={g.id}
              aria-label={`Remove ${g.course} ${g.label}`}
              onClick={() => toggle(g.id)}
            >
              {g.course} · {g.label}
              <X size={12} />
            </button>
          ))}
        </div>
      )}
      {courses
        .filter((c) => visible(c).length)
        .map((c) => (
          <details
            className="study-course"
            key={`${c}:${Boolean(query)}`}
            open={courses.length === 1 || Boolean(query)}
          >
            <summary>
              {c}
              <span>
                {visible(c).length} sets ·{" "}
                {
                  groups.filter(
                    (g) => g.course === c && selected.includes(g.id),
                  ).length
                }{" "}
                selected
              </span>
            </summary>
            <label className="study-group study-whole-course">
              <input
                type="checkbox"
                checked={groups
                  .filter((g) => g.course === c && g.mode === mode)
                  .every((g) => selected.includes(g.id))}
                onChange={(e) =>
                  setSelected(
                    e.target.checked
                      ? [
                          ...new Set([
                            ...selected,
                            ...groups
                              .filter((g) => g.course === c && g.mode === mode)
                              .map((g) => g.id),
                          ]),
                        ]
                      : selected.filter(
                          (id) =>
                            !groups.some((g) => g.course === c && g.id === id),
                        ),
                  )
                }
              />
              <span>
                Entire {c}
                <small>
                  {cards.filter((x) => x.course === c).length} cards
                </small>
              </span>
            </label>
            <div className="study-group-list">
              {visible(c).map((g) => {
                const reviewed = g.cardIds.filter((id) => reviews[id]).length,
                  missed = g.cardIds.filter(
                    (id) => results[id]?.lastCorrect === false,
                  ).length;
                return (
                  <label key={g.id} className="study-group">
                    <input
                      type="checkbox"
                      checked={selected.includes(g.id)}
                      onChange={() => toggle(g.id)}
                    />
                    <span>
                      {g.label}
                      <small>
                        {g.cardIds.length} cards · {reviewed} reviewed
                        {missed > 0 ? ` · ${missed} to revisit` : ""}
                      </small>
                      <span className="material-progress" aria-hidden="true">
                        <i
                          style={{
                            width: `${(reviewed / g.cardIds.length) * 100}%`,
                          }}
                        />
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </details>
        ))}
      {!courses.some((c) => visible(c).length) && (
        <p className="material-empty">
          No material matches. Try another course or switch between lectures and
          topics.
        </p>
      )}
      <div className="study-settings">
        {activity === "cards" ? (
          <>
            <label htmlFor="study-order">
              <Shuffle size={16} /> Card order
            </label>
            <select
              id="study-order"
              value={order}
              onChange={(e) => setOrder(e.target.value as StudyOrder)}
            >
              <option value="adaptive">Smart review</option>
              <option value="chronological">Chronological</option>
              <option value="shuffle">Shuffle</option>
            </select>
            <p>
              {order === "adaptive"
                ? "Due reviews and new ideas, balanced for practice."
                : order === "chronological"
                  ? "Follow lecture and page order, then the authored sequence."
                  : "Mix every selected card into a fresh random order."}
            </p>
          </>
        ) : (
          <p>
            <strong>Understanding over calculation.</strong> Short
            multiple-choice and true/false rounds focus on missed quiz answers,
            difficult cards, then new ideas. Results stay saved on this device.
          </p>
        )}
      </div>
      <div className="study-start">
        <span aria-live="polite">
          {ids.size} cards · {selectedGroups.length} groups
        </span>
        <button onClick={() => setSelected([])} disabled={!selected.length}>
          Clear selection
        </button>
        <button
          className="primary"
          disabled={!ids.size}
          onClick={activity === "cards" ? onStart : onQuiz}
        >
          {activity === "cards" ? "Start studying" : "Build practice quiz"}{" "}
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
