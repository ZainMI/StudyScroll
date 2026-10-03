import { readFile, writeFile, access } from "node:fs/promises";
import katex from "katex";
const feed = JSON.parse(await readFile("content/master-feed.json", "utf8"));
const ids = new Set();
const missingSources = new Set();
const allowMissingSources = process.argv.includes("--allow-missing-sources");
for (const card of feed.cards) {
  if (ids.has(card.id)) throw new Error(`Duplicate card: ${card.id}`);
  ids.add(card.id);
  for (const key of [
    "id",
    "course",
    "topic",
    "kind",
    "title",
    "answer",
    "takeaway",
  ]) {
    if (typeof card[key] !== "string" || !card[key].trim())
      throw new Error(`Missing ${key}: ${card.id}`);
  }
  if (typeof card.body !== "string" || (!card.body.trim() && card.format !== "flashcard"))
    throw new Error(`Missing body: ${card.id}`);
  if (card.format === "flashcard" && (!card.title.endsWith("?") || card.answer.split(/\s+/).length > 65))
    throw new Error(`Flashcard must have a question and a concise answer: ${card.id}`);
  const mathFields = [
    card.title,
    card.body,
    card.answer,
    card.takeaway,
    ...(card.visual
      ? [
          card.visual.label,
          ...card.visual.items.flatMap((item) => [item.label, item.value]),
        ]
      : []),
  ];
  for (const text of mathFields) {
    const remaining = text.replace(
      /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g,
      (_, inline, display) => {
        try {
          katex.renderToString(inline ?? display, {
            throwOnError: true,
            strict: "error",
            trust: false,
            maxExpand: 500,
          });
        } catch (error) {
          throw new Error(`Invalid math in ${card.id}: ${error.message}`);
        }
        return "";
      },
    );
    if (/\\[()[\]]/.test(remaining))
      throw new Error(`Unbalanced math delimiters: ${card.id}`);
  }
  if (card.visual) {
    const v = card.visual;
    if (!["equation", "compare", "flow", "mistake"].includes(v.type) ||
        typeof v.label !== "string" || !v.label.trim() ||
        !Array.isArray(v.items) || v.items.length < 1 || v.items.length > 4 ||
        v.items.some((item) => typeof item.label !== "string" || !item.label.trim() || typeof item.value !== "string" || !item.value.trim()))
      throw new Error(`Invalid visual: ${card.id}`);
  }
  if (!card.sources?.length) throw new Error(`No sources: ${card.id}`);
  for (const source of card.sources) {
    if (!source.path.startsWith("courses/") || source.path.includes(".."))
      throw new Error(`Invalid source: ${source.path}`);
    try {
      await access(source.path);
    } catch (error) {
      if (!allowMissingSources || error.code !== "ENOENT") throw error;
      missingSources.add(source.path);
    }
    if (
      source.page !== undefined &&
      (!Number.isInteger(source.page) || source.page < 1)
    )
      throw new Error(`Invalid page: ${card.id}`);
  }
}
const coverage = JSON.parse(await readFile("content/coverage.json", "utf8"));
for (const unit of coverage.units) {
  for (const objective of unit.objectives) {
    if (!objective.cardIds.length)
      throw new Error(`Empty learning objective: ${objective.concept}`);
    for (const id of objective.cardIds)
      if (!ids.has(id)) throw new Error(`Unknown coverage card: ${id}`);
  }
}
for (const card of feed.cards) {
  for (const id of card.prerequisiteIds ?? [])
    if (!ids.has(id)) throw new Error(`Unknown prerequisite: ${id}`);
}
const covered = new Set([
  ...coverage.units.flatMap((u) => u.objectives.flatMap((o) => o.cardIds)),
  ...coverage.crossCourseCardIds,
]);
for (const id of ids)
  if (!covered.has(id)) throw new Error(`Unmapped card: ${id}`);
const header = `# StudyScroll: master feed\n\nUpdated ${feed.updated}. ${feed.cards.length} curated cards.\n\n${feed.scope}\n\nThe editable source of truth is [master-feed.json](master-feed.json). This readable document is generated with \`npm run feed:build\`. Edit the JSON, then regenerate; the Next app imports that same JSON directly.\n\nThese are authored learning prompts derived from the listed materials, not quotations or official answer keys. Companion examples and cross-course explanations add interpretation. Reveal the explanation only after attempting the prompt.\n\n## Course map\n\n- **UBuffalo — International Finance:** Chapters 1–5 and Chapter 2–4 homework: national accounts, balance of payments, currency returns, money markets, PPP, and real exchange rates. See [INTERNATIONAL_FINANCE_COVERAGE.md](INTERNATIONAL_FINANCE_COVERAGE.md).\n- **AM 205:** floating-point spacing, rounding, matrix operations, linear-map geometry, pivoting, low-rank approximation, algebraic least squares, and Quiz 1 review/practice (2023–2025). See [AM205_QUIZ1_COVERAGE.md](AM205_QUIZ1_COVERAGE.md).\n- **AM 207:** probability foundations, inverse transforms, Monte Carlo, Metropolis–Hastings, Markov dynamics, jump processes, SSA, tau leaping, and Bayesian uncertainty.\n- **STAT 244:** linear algebra, estimability, projections, contrast coding, least squares and GLS, inference, multicollinearity, PCR/PLS, and regression diagnostics.\n- **AM 209a:** lectures 1–8 from the supplied COMPSCI 1090A course: data preparation, visualization, kNN, regression, cross-validation, ridge/lasso, and bootstrap inference. See [AM209A_COVERAGE.md](AM209A_COVERAGE.md).\nSee [LECTURE_COVERAGE.md](LECTURE_COVERAGE.md) for the lecture-note map, [coverage.json](coverage.json) for learning-objective mappings and [CURATION.md](CURATION.md) for the uncapped content workflow. Scope is current lectures and assignments with supporting textbook sections. No fixed total, per-course quota, or daily card limit applies.\n\n## Feed\n\n`;
const sections = feed.cards.map(
  (c, i) =>
    `### ${String(i + 1).padStart(2, "0")}. ${c.title}\n\n**${c.course} · ${c.topic} · ${c.kind}**\n\n${c.body ? `${c.body}\n\n` : ""}${c.visual ? `**${c.visual.label}** (${c.visual.type})\n\n${c.visual.items.map((item) => `- ${item.label}: ${item.value}`).join("\n")}\n\n` : ""}<details>\n<summary>Reveal explanation</summary>\n\n${c.answer}\n\n**Intuition:** ${c.takeaway}\n\n</details>\n\nSources: ${c.sources.map((s) => `[${s.locator}](../${encodeURI(s.path)}${s.page ? `#page=${s.page}` : ""})`).join("; ")}\n\nCard ID: \`${c.id}\`\n`,
);
const output = header + sections.join("\n---\n\n");
if (process.argv.includes("--check")) {
  if ((await readFile("content/MASTER_FEED.md", "utf8")) !== output)
    throw new Error("MASTER_FEED.md is stale. Run npm run feed:build.");
} else await writeFile("content/MASTER_FEED.md", output);
if (missingSources.size) {
  console.warn(`Missing local source files (${missingSources.size}):\n${[...missingSources].join("\n")}`);
}
console.log(`Validated ${feed.cards.length} unique cards${missingSources.size ? "; missing local files reported above" : " and all local source paths"}.`);
