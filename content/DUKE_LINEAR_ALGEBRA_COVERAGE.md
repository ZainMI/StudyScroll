# Duke — MATH 218D: Introduction to Linear Algebra

Reviewed October 4, 2026. 174 new cards, with stable `duke-218d-` IDs and school `Duke`. Existing schools' cards and IDs were preserved. All four supplied PDFs were text-extracted and visually inspected, including handwritten equations. Page numbers below are 1-based PDF pages.

## Source inventory and coverage

| Source under `courses/duke/linear-algebra/` | Pages | Cards | Learning objectives represented |
| --- | --- | --- | --- |
| `F25-L1.pdf` | 1–7 | 24 | Linear equations and unknowns; simultaneous constraints; local/global traffic conservation, redundancy, circulation and nonnegative flows; fitting a conic via linear coefficients and design rows; inconsistent noisy measurements and approximate fitting; rabbit birth/survival updates, state, matrix rule and stable proportions |
| `F25-L1.pdf` | 8–11 | 11 | Lines, planes, higher-dimensional coordinates; unique/infinite/empty intersections; dependent constraints; substitution checks; pairwise versus simultaneous compatibility; why exactly two solutions is impossible |
| `F25-R1.pdf` | 1–6 | 15 | Ordered coordinates and size; coordinate vectors; compatible addition/scaling; dot-product output, cancellation, positivity, bilinearity; linear combinations and coordinate expansion |
| `F25-R1.pdf` | 7–20 | 32 | Shapes and indices; diagonal/identity/zero matrices; row and column interpretations of products; multiplication dimensions; inner/outer products and outer-product decomposition; transpose, symmetry and Gram matrices; associativity, distributivity, powers, noncommutativity and failed cancellation |
| `F25-L3.pdf` | 1–10 | 23 | Augmented-column contradiction; unique versus infinite solutions; free parameters and consistency; implicit/parametric representations; particular solutions and direction vectors; differences solve the homogeneous system; dimension equals unknowns minus pivots for consistent systems |
| `F25-L3.pdf` | 11–15 | 12 | Two-sided inverse; 2×2 formula; nonzero versus invertible; inverse order; augmented algorithm and its success condition; dependent rows; solving every right-hand side; singular systems can still be consistent |
| `F25-L3.pdf` | 16–20 | 9 | Flop model and limits; matrix-vector and classical matrix-product counts; row-swap caveat; cubic elimination versus quadratic substitution; size scaling; inversion cost and avoiding unnecessary inversion |
| `F25-L9.pdf` | 1–5 | 19 | Reachable outputs, closest point and perpendicular residual; Pythagorean justification; length, distance, normalization and unit directions; cosine identity, dot sign, Cauchy–Schwarz check, zero-vector caveat |
| `F25-L9.pdf` | 6–15 | 29 | Perpendicularity as homogeneous equations; checking spanning vectors; orthogonal complement independence, closure, dimensions and double complement; orthogonal versus complementary subspaces; the four fundamental spaces with ambient dimensions; converting span descriptions to equations and checking membership |

The exact question-to-card mapping is in `coverage.json`. Each card has a page-specific source reference in `master-feed.json`; these references are authoring metadata, not public PDF links. Examples are authored conceptual practice, not official solutions. Six cards use compact visual givens; the rest use plain question fronts. All mathematical expressions use KaTeX-compatible LaTeX. Answers contain at most 65 words.

## Source corrections and conventions

- L1 p. 4: substituting `(-3,1)` into the displayed conic gives `9+B−3C−3D+E+F=0`; the handwritten coefficient assignment is inconsistent. Cards teach the general feature row and use the unambiguous `(0,2)` example. A fitted conic is not automatically a real, nondegenerate ellipse. Algebraic equation residuals are not automatically geometric point-to-curve distances.
- L3 p. 8: with free variables `x₂=1`, `x₄=2`, the displayed formulas give `(-1,1,-1,2)`, not the printed `(-5,1,-1,2)`. The corrected point satisfies both original equations.
- R1 p. 12: the prose labels the output of an `m×n` times `n×p` product as `n×p`; the dimensional diagram correctly gives `m×p`. Cards use `m×p`.
- R1 permits rectangular diagonal matrices (off-diagonal entries zero); cards explicitly identify this course convention rather than imposing a square-only definition.
- L3's quadratic substitution count applies to its specialized one-right-hand-side stage after triangular reduction, not to arbitrary full Gauss–Jordan elimination. Inversion constants depend on the method counted. The historical matrix-multiplication exponent mentioned on p. 17 is not taught as a current record.
- L9's complement statements concern subspaces of real finite-dimensional Euclidean space. The zero vector is algebraically orthogonal to all vectors but has no defined angle. Orthogonal subspaces need not be full orthogonal complements.

## Scope and exclusions

`R1` is **recorded lecture 1**, not a review sheet. It is selectable separately. Chronological mode orders live lecture 1, recorded lecture 1, lecture 3, then lecture 9; adaptive mode can use prerequisites and prior recall.

L1 pp. 12–14 contain administrative/course logistics and are excluded. Roadmap references to PageRank, diagonalization, SVD and PCA do not provide full lessons and are not expanded into unassigned topics. No missing lecture files (2, 4–8, or later lectures) were inferred or reconstructed. Standard null-space/column-space relationships needed to understand L9 are explained locally on cards. The lecture's three-plane arrangement exercise is represented through intersection outcomes and compatibility reasoning rather than memorizing a diagram count.

The supplied substantive concepts, identities, algorithm decisions and examples are represented through short retrieval prompts. These cards do not replace longer elimination calculations or prove mastery. There is no card quota; add cards when new sources or recall gaps warrant them.
