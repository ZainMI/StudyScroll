# StudyScroll: master feed

Updated 2026-09-29. 661 curated cards.

Short question-and-answer flashcards covering the core concepts in AM 207 lectures 00–06 and all three uploaded STAT 244 lecture-note sets, with assignment practice and supporting textbook concepts. AM 205 covers PS1–2 and supporting material. No card quota applies; coverage does not imply mastery. Historical and administrative slides are excluded.

The editable source of truth is [master-feed.json](master-feed.json). This readable document is generated with `npm run feed:build`. Edit the JSON, then regenerate; the Next app imports that same JSON directly.

These are authored learning prompts derived from the listed materials, not quotations or official answer keys. Companion examples and cross-course explanations add interpretation. Reveal the explanation only after attempting the prompt.

## Course map

- **AM 205:** floating-point spacing, rounding, matrix operations, linear-map geometry, pivoting, low-rank approximation, algebraic least squares.
- **AM 207:** probability foundations, inverse transforms, Monte Carlo, Metropolis–Hastings, Markov dynamics, jump processes, SSA, tau leaping, and Bayesian uncertainty.
- **STAT 244:** linear algebra, estimability, projections, contrast coding, least squares and GLS, inference, multicollinearity, PCR/PLS, and regression diagnostics.
See [LECTURE_COVERAGE.md](LECTURE_COVERAGE.md) for the lecture-note map, [coverage.json](coverage.json) for learning-objective mappings and [CURATION.md](CURATION.md) for the uncapped content workflow. Scope is current lectures and assignments with supporting textbook sections. No fixed total, per-course quota, or daily card limit applies.

## Feed

### 01. In binary64, what comes immediately after 99?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

99 + 2⁻⁴⁶. Since 99 is between 2⁶ and 2⁷, the gap is 2⁶ × 2⁻⁵².

**Intuition:** Machine-number gaps grow with magnitude.

</details>

Sources: [PS1 · Q1(a)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing`

---

### 02. Is the machine-number gap the same on both sides of 2?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In binary64, the gap below 2 is 2⁻⁵²; above it, 2⁻⁵¹. Crossing a power of two doubles the gap.

**Intuition:** The grid gets coarser as numbers grow.

</details>

Sources: [PS1 · Q1(a)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-binade-boundary`

---

### 03. Is unit roundoff the gap after 1?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. For binary64 round-to-nearest, the gap is 2⁻⁵² but unit roundoff is 2⁻⁵³: half a gap. Check which quantity a text calls “epsilon.”

**Intuition:** Nearest rounding loses at most about half a step.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-roundoff-versus-epsilon`

---

### 04. With three significant binary bits, which numbers fit in [1,2)?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1, 1.25, 1.5, and 1.75. The two bits after the leading 1 give four equally spaced choices.

**Intuition:** More bits create a finer grid.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-toy-binary`

---

### 05. Why does binary64 round 2⁵³ + 1 back to 2⁵³?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The gap there is 2, so the exact answer is halfway between neighbors. Ties-to-even chooses 2⁵³.

**Intuition:** Adding one can leave a large machine number unchanged.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-largest-consecutive-integers`

---

### 06. What do subnormal numbers buy us?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A gradual approach to zero instead of an abrupt cutoff. Their absolute gap stays fixed, so relative precision gets worse near zero.

**Intuition:** Tiny values survive, but with fewer useful relative digits.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-subnormal-role`

---

### 07. How many binary64 numbers lie in [1.5,2]?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

2⁵¹ + 1. Divide the interval length, 0.5, by the gap, 2⁻⁵², then add one for the extra endpoint.

**Intuition:** Count gaps, then include both ends.

</details>

Sources: [PS1 · Q1(b)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-count`

---

### 08. How many grid points a+kδ lie in [a,b]?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

⌊(b−a)/δ⌋ + 1, for integers k≥0 and δ>0. Round down because a point beyond b does not count.

**Intuition:** A partial gap does not contain another point.

</details>

Sources: [PS1 · Q1(b)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-non-grid-endpoint`

---

### 09. Can two different machine numbers have the same computed reciprocal?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Different exact reciprocals can round to the same output. Rounding squeezes continuous answers onto a finite grid.

**Intuition:** A one-to-one real operation can lose information on a computer.

</details>

Sources: [PS1 · Q1(c–e)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-reciprocal`

---

### 10. Does a reciprocal collision proof identify which inputs collide?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Counting more inputs than possible outputs proves some collision exists. Finding a specific pair requires more analysis or a search.

**Intuition:** Existence is not the same as location.

</details>

Sources: [PS1 · Q1(c–e)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-pigeonhole-not-all`

---

### 11. Why is 4 × (1/4) exact in binary arithmetic?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both 4 and 1/4 are powers of two, so they are exactly representable. Their product is exactly 1.

**Intuition:** Powers of two fit binary arithmetic naturally.

</details>

Sources: [PS1 · Q2](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-roundtrip`

---

### 12. Which fractions terminate in binary?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Reduced fractions whose denominators are powers of two. For example, 1/8 terminates; 1/10 does not because its denominator contains a factor of 5.

**Intuition:** Binary place values are halves, quarters, eighths, and so on.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-finite-binary`

---

### 13. Do row operations multiply a matrix on the left or right?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

On the left. Column operations multiply on the right: LB changes rows; BC changes columns.

**Intuition:** Left acts on rows; right acts on columns.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-operations`

---

### 14. Does “scale row 1, then swap rows” equal the reverse order?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Usually not. In the first order, the scaled row moves. In the reverse order, a different original row gets scaled.

**Intuition:** Matrix operations remember their order.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-column-order`

---

### 15. Which right multiplier makes column 1 become column 1 + 3 column 2?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

C = [[1,0],[3,1]]. The first column of BC is B times (1,3)ᵀ, giving the required combination.

**Intuition:** A multiplier’s column gives one output column’s recipe.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-column-add-index`

---

### 16. What does an invertible 2D linear map do to a unit disk?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It produces an ellipse. The map’s singular values are its semiaxis lengths; its left singular vectors give the axis directions.

**Intuition:** A linear map rotates and stretches space.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-disk`

---

### 17. Singular values are 3 and 1/2. How does area change?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Area is multiplied by 3 × 1/2 = 3/2. A unit disk becomes an ellipse of area 3π/2.

**Intuition:** Multiply the stretches to get the area scale.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-singular-values-area`

---

### 18. What does diag(2,0) do to a unit disk?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It flattens it onto the horizontal segment from −2 to 2. The second direction disappears, so the image has zero area.

**Intuition:** A zero singular value erases a direction.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-rank-collapse`

---

### 19. Why can’t an orthogonal matrix stretch a vector?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

QᵀQ=I, so ‖Qx‖²=xᵀQᵀQx=xᵀx. A square Q can rotate or reflect, but preserves lengths.

**Intuition:** Orthogonal transformations change direction without changing size.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-orthogonal-map`

---

### 20. Why avoid dividing by a tiny pivot?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It creates huge elimination multipliers. Large intermediate values can magnify rounding errors when later subtracted.

**Intuition:** A legal division can still be numerically dangerous.

</details>

Sources: [PS2 · Q1](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot`

---

### 21. Does a zero first pivot mean the matrix is singular?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. [[0,1],[1,0]] is invertible. Swapping rows makes elimination possible.

**Intuition:** Sometimes the equations need reordering, not replacing.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-zero-pivot-nonsingular`

---

### 22. Do elimination multipliers below 1 prevent all growth?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Subtracting rows with opposite signs can increase entries. For example, subtract [1,−1] from [1,1] to get [0,2].

**Intuition:** Small multipliers do not guarantee small intermediate entries.

</details>

Sources: [Heath · Ch. 2 review Q2.27, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-multiplier-growth`

---

### 23. How do you get det(A) from PA=LU?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply U’s diagonal entries and multiply by (−1) for each row swap. This assumes L has ones on its diagonal.

**Intuition:** Triangular factors make determinants easy.

</details>

Sources: [PS2 · Q1(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-det`

---

### 24. Why might a flat flag need fewer rank-one pieces than a waving flag?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Repeated stripes create repeated patterns. Folds and shadows introduce extra independent variation.

**Intuition:** Low approximate rank means a few patterns explain most variation.

</details>

Sources: [PS2 · Q2](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rank`

---

### 25. How is image RMS error related to the Frobenius norm?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For an m×n residual R, RMS=‖R‖F/√(mn). It is the typical error per pixel rather than the total error size.

**Intuition:** Normalize by pixel count to compare typical errors.

</details>

Sources: [PS2 · Q2](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rms-frobenius`

---

### 26. Does greedy elimination always improve a low-rank image approximation?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Removing the largest residual entry need not reduce total squared error. Truncated SVD, unlike this greedy rule, is optimal for each rank in Frobenius norm.

**Intuition:** Fixing the worst pixel can worsen others.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-greedy`

---

### 27. Why subtract R[:,j]R[i,:]/Rᵢⱼ from a residual?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For a nonzero pivot, this rank-one term exactly matches pivot row i and column j. Both become zero in exact arithmetic.

**Intuition:** One outer product removes a whole row-and-column pattern.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-elimination-update`

---

### 28. What if the largest residual entry is zero?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Then every residual entry is zero. Stop: dividing by that pivot would only introduce an error.

**Intuition:** An exact fit needs no further update.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-zero-residual-pivot`

---

### 29. Why is bx²+cxy+dy²≈1 a linear least-squares model?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The unknowns b,c,d appear linearly. Treat x²,xy,y² as known features.

**Intuition:** “Linear” refers to the unknown coefficients, not the features.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse`

---

### 30. For (x,y)=(2,−3), what is the ellipse-fit design row?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[4,−6,9], because the features are x², xy, and y². The target is 1.

**Intuition:** The cross-product feature keeps its sign.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-design-row`

---

### 31. Does ellipse fitting by equation residual minimize distance to the curve?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It minimizes how far bx²+cxy+dy² is from 1, not the shortest geometric distance to the ellipse.

**Intuition:** An easy-to-compute loss can measure a different kind of error.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-algebraic-distance`

---

### 32. When does bx²+cxy+dy²=1 form a real, nondegenerate ellipse?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When Q=[[b,c/2],[c/2,d]] is positive definite. Equivalently, b>0 and bd−c²/4>0.

**Intuition:** The quadratic must curve upward in every direction.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-check`

---

### 33. Why does cxy put c/2 in each off-diagonal entry of Q?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In xᵀQx, both off-diagonal entries contribute to xy. Two copies of c/2 add up to c.

**Intuition:** The cross term gets counted twice.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-quadratic-cross-term`

---

### 34. Q has eigenvalues 4 and 1/9. What are the axes of xᵀQx=1?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The semiaxis lengths are 1/√4=1/2 and 1/√(1/9)=3.

**Intuition:** A larger quadratic penalty permits a shorter axis.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-axes`

---

### 35. Why use r=√U to sample uniformly inside a unit disk?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fraction of area inside radius r is r². Setting r²=U gives r=√U, with an independent uniform angle.

**Intuition:** Outer rings need more samples because they contain more area.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `bridge-disk`

---

### 36. What makes a problem well-posed?

**AM 205 · Foundations of computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A solution exists, is unique, and changes continuously with the input.

**Intuition:** You need an answer that exists and behaves sensibly.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-wellposed`

---

### 37. Can extra arithmetic precision fix every numerical error?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It reduces rounding error, but does not fix a wrong model, an inadequate discretization, or inaccurate measurements.

**Intuition:** More digits cannot repair the wrong problem.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-errors`

---

### 38. Why can a smaller finite-difference step make a derivative worse?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Truncation error shrinks with h, but rounding in f(x+h)−f(x) gets amplified by division by h. Eventually rounding wins.

**Intuition:** A smaller step trades approximation error for arithmetic error.

</details>

Sources: [Heath · Ch. 1 review Q1.50, printed p. 41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-discretization-tradeoff`

---

### 39. Why is subtracting nearly equal approximate numbers risky?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their true difference is small, but the errors already in the inputs need not be. Those errors can dominate the result.

**Intuition:** Cancellation exposes errors that large leading digits concealed.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-cancellation`

---

### 40. How can you compute √(1+x)−1 reliably for small positive x?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use x/(√(1+x)+1). It is algebraically equal but avoids subtracting almost equal numbers.

**Intuition:** Rewrite the expression before increasing precision.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-rationalize-small-difference`

---

### 41. How can √(a²+b²) overflow when its answer fits?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The intermediate squares may be too large. With m=max(abs(a),abs(b))>0, compute m√((a/m)²+(b/m)²) instead.

**Intuition:** Keep intermediate values on a safe scale.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-overflow-rewrite`

---

### 42. Why doesn’t x==NaN detect NaN?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

NaN compares unequal to everything, including itself. Use an isnan check.

**Intuition:** “Not a number” follows special comparison rules.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-exceptional-values`

---

### 43. An estimate is 0.002 instead of 0.001. What is its relative error?

**AM 205 · Error measures · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100%: the absolute error, 0.001, equals the true value’s magnitude.

**Intuition:** A small absolute error can be a huge relative error.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-relative`

---

### 44. Why is 1.4 a backward-accurate approximation to √2?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is exactly √1.96. Backward error asks how much the input must change: here, 2 changes by 0.04.

**Intuition:** Explain the computed answer by a nearby input.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-backward`

---

### 45. If r=b−Ax̂, which right-hand side makes x̂ exact?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

b−r, because Ax̂=b−r. The residual measures the needed change in b when A stays fixed.

**Intuition:** A solve’s residual is a backward-error clue.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-linear-backward-data`

---

### 46. Can a stable algorithm give an inaccurate answer?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. It solves a nearby problem accurately, but an ill-conditioned problem can turn a tiny input change into a big answer change.

**Intuition:** Stability cannot remove the problem’s sensitivity.

</details>

Sources: [Heath · §1.2.6, printed p. 13](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-conditioning`

---

### 47. With 12-digit input accuracy and condition number 10⁴, how many digits might survive?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Roughly 8 in a first-order worst-case estimate: 10⁴×10⁻¹²=10⁻⁸. The actual error depends on its direction.

**Intuition:** Conditioning can consume accurate digits.

</details>

Sources: [Heath · Ch. 2 review Q2.64–65, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-digits-lost`

---

### 48. What does abs(xf′(x)/f(x)) measure?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Local relative sensitivity: the approximate output percentage change per input percentage change. It requires nonzero x and f(x).

**Intuition:** It compares relative changes, not raw slopes.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-scalar-condition`

---

### 49. Does taking a square root amplify small relative errors?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For x>0, it approximately halves them: abs(xf′(x)/f(x))=1/2.

**Intuition:** Square roots compress relative changes.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-sqrt-condition`

---

### 50. Can regrouping a floating-point sum change its answer?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. In binary64, (10¹⁶−10¹⁶)+1 gives 1, while 10¹⁶+(−10¹⁶+1) gives 0.

**Intuition:** An intermediate rounding decision can change the final result.

</details>

Sources: [Heath · Ch. 1 review · floating-point properties](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-associative`

---

### 51. Why can adding small positive terms first help?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each might vanish when added alone to a huge sum. Together they can form a contribution large enough to survive rounding.

**Intuition:** Let small contributions accumulate before mixing scales.

</details>

Sources: [Heath · Ch. 1 review Q1.45–49, printed p. 41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-positive-sum-order`

---

### 52. Does printing more digits make an answer more accurate?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Precision is how many digits the arithmetic can represent; accuracy is how close the result is to the truth.

**Intuition:** Displayed digits are not guaranteed knowledge.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-precision`

---

### 53. Can a tiny determinant belong to a well-conditioned matrix?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. For A=10⁻¹⁰I, det(A) is tiny but κ₂(A)=1. All directions shrink equally.

**Intuition:** Conditioning measures unequal sensitivity, not overall size.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-condition-scale`

---

### 54. For [[1,−2],[3,4]], what are the induced 1- and infinity-norms?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The 1-norm is 6, the largest absolute column sum. The infinity-norm is 7, the largest absolute row sum.

**Intuition:** Columns for the 1-norm; rows for the infinity-norm.

</details>

Sources: [Heath · Ch. 2 review · matrix norms](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-matrix-norms`

---

### 55. What is κ₂(diag(4,−6,2))?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

6/2=3. Use the largest and smallest absolute diagonal entries.

**Intuition:** Signs change orientation, not stretch magnitudes.

</details>

Sources: [Heath · Ch. 2 review Q2.57, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-diagonal-condition`

---

### 56. Why doesn’t a small residual guarantee a small solution error?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The error is −A⁻¹r. A large inverse can amplify a tiny residual.

**Intuition:** A system can hide large errors along weak directions.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-residual`

---

### 57. A=diag(1,10⁻⁸), b=(1,10⁻⁸). Can x̂=(1,0) look accurate?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its residual is only (0,10⁻⁸), but the true solution is (1,1). The second component is completely wrong.

**Intuition:** A weakly measured direction can conceal a large error.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-small-residual-counterexample`

---

### 58. Can a real linear system have exactly two solutions?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Every point on the line through two distinct solutions is also a solution.

**Intuition:** Two solutions imply an entire family.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-two-solutions`

---

### 59. If a matrix is singular, must Ax=b have no solution?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It may have none or infinitely many, depending on whether b lies in its column space.

**Intuition:** Singularity concerns uniqueness; consistency concerns existence.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-consistency`

---

### 60. Do fewer equations than unknowns guarantee a solution?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The equations can conflict. If a solution exists, however, the nontrivial null space makes it nonunique.

**Intuition:** Too few constraints imply freedom, not consistency.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-underdetermined`

---

### 61. How do partial and complete pivoting differ?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Partial pivoting searches the active column. Complete pivoting searches the remaining submatrix and can swap columns too.

**Intuition:** Swapping columns also reorders the unknowns.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-pivot-scope`

---

### 62. First column: (1,4,−7). Which entry does partial pivoting choose?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(−7), because it has the largest magnitude. The sign is irrelevant to avoiding a small divisor.

**Intuition:** Choose the largest absolute pivot, not the most positive.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-pivot-choice`

---

### 63. Why keep LU factors when solving for many right-hand sides?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Dense factorization costs O(n³). Once it is done, each pair of triangular solves costs O(n²).

**Intuition:** Pay for the expensive structure once.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-lu-reuse`

---

### 64. With PA=LU, how do you solve Ax=b?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Solve Ly=Pb, then Ux=y. Apply the row permutation to b as well as A.

**Intuition:** Reordering equations also reorders their right-hand sides.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-solve-with-permutation`

---

### 65. Why can you solve a lower-triangular system from top to bottom?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The first row gives the first unknown. Each later row uses values already found.

**Intuition:** Triangular structure turns one large problem into small steps.

</details>

Sources: [Heath · Ch. 2 exercises · triangular solves](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=117)

Card ID: `am205-triangular-step`

---

### 66. If A=LU, which factor comes first when solving Aᵀx=b?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

First solve Uᵀy=b, then Lᵀx=y, because Aᵀ=UᵀLᵀ.

**Intuition:** Transposing reverses the product order.

</details>

Sources: [Heath · Ch. 2 review Q2.48, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-transpose-solve`

---

### 67. To compute A⁻¹Bc, should you build A⁻¹?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Compute v=Bc, then solve Ax=v. This avoids an unnecessary inverse and matrix–matrix product.

**Intuition:** Apply an inverse by solving, not by constructing it.

</details>

Sources: [Heath · Ch. 2 review Q2.44–46, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-inverse-product-cost`

---

### 68. What does Cholesky need beyond symmetry?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Positive definiteness. A real symmetric positive-definite matrix has A=LLᵀ with positive diagonal entries in L.

**Intuition:** The quadratic energy must be positive in every nonzero direction.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-cholesky`

---

### 69. Do positive diagonal entries make a symmetric matrix positive definite?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. [[1,2],[2,1]] has eigenvalue −1. The direction (1,−1) gives a negative quadratic form.

**Intuition:** Checking coordinate directions alone misses tilted directions.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-positive-definite-test`

---

### 70. How do you multiply uvᵀ by x without building a matrix?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Compute the scalar vᵀx, then scale u by it. The work is O(n), rather than O(n²), for length-n vectors.

**Intuition:** A rank-one map measures one direction and outputs another.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-rank-one`

---

### 71. Why is uvᵀ rank one when u and v are nonzero?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every column is a multiple of u, and at least one is nonzero.

**Intuition:** All output columns share one direction.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-outer-product-rank`

---

### 72. Why can normal equations make least squares numerically harder?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For full-column-rank X, κ₂(XᵀX)=κ₂(X)². Forming XᵀX magnifies the condition number.

**Intuition:** Squaring the matrix’s stretch ratios magnifies sensitivity.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-normal-squared`

---

### 73. With X=QR, which system gives the least-squares coefficients?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Rβ=Qᵀy, for reduced QR with full column rank. Project y onto Q’s directions, then solve the triangular system.

**Intuition:** Separate geometry from the coefficient solve.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-qr-reduction`

---

### 74. What makes X⁺y special among rank-deficient least-squares solutions?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It has the smallest Euclidean coefficient norm. Adding a null-space vector keeps the same fit but increases the norm.

**Intuition:** The pseudoinverse chooses the shortest coefficient explanation.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-svd-minimum-norm`

---

### 75. Is the binary64 gap at 100 different from the gap at 99?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Both lie in [64,128), so both have gap 2⁻⁴⁶.

**Intuition:** One power-of-two interval shares one spacing.

</details>

Sources: [PS1 · Q1(a) · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing-at-100`

---

### 76. What happens to binary64 spacing when you cross 128?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles from 2⁻⁴⁶ to 2⁻⁴⁵.

**Intuition:** The exponent increases; the number of significant bits does not.

</details>

Sources: [PS1 · Q1(a) · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing-at-128`

---

### 77. Why does nearest rounding involve half a gap?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Any point between neighbors is at most half their distance from the closer neighbor.

**Intuition:** Rounding chooses the nearer endpoint.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-half-gap`

---

### 78. On the grid 1, 1.25, 1.5, 1.75, where does 1.4 round?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To 1.5: it is 0.1 away, versus 0.15 from 1.25.

**Intuition:** Representable values are a grid, not every decimal.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-toy-round`

---

### 79. Are all integers above 2⁵³ impossible in binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In [2⁵³,2⁵⁴), every even integer is representable. The odd integers fall between grid points.

**Intuition:** Losing consecutive integers does not mean losing all integers.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-even-large`

---

### 80. Why isn’t decimal 0.1 exact in binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.1=1/10, whose reduced denominator includes 5. Its binary expansion repeats and must be rounded.

**Intuition:** A short decimal need not be a short binary fraction.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-decimal-point-one`

---

### 81. Does a terminating binary expansion guarantee a value fits binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not by itself. It must also fit the format’s exponent range and precision.

**Intuition:** An exact expansion can still need too many bits.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-fraction-range`

---

### 82. How many points are there in two adjacent grid gaps?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three: one at each end and one in the middle.

**Intuition:** Endpoints are like fenceposts, not fence panels.

</details>

Sources: [PS1 · Q1(b) · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-three-fenceposts`

---

### 83. Why can reciprocal rounding lose distinctions between nearby large inputs?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The reciprocal curve gets flatter as inputs grow. Their outputs can differ by less than the output grid spacing.

**Intuition:** A flat transformation can squeeze differences below resolution.

</details>

Sources: [PS1 · Q1(c–e) · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-reciprocal-compression`

---

### 84. Can 5 × (1/5) still equal 1 on a computer?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Although 1/5 is rounded, the product may round back to exactly 1.

**Intuition:** A rounded intermediate does not force a wrong final value.

</details>

Sources: [PS1 · Q2 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-rounded-product`

---

### 85. Can deleting a row be written as matrix multiplication?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Multiply on the left by a rectangular matrix that selects the rows you keep.

**Intuition:** Matrix operators need not be square.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-delete`

---

### 86. Is replacing row 1 by row 3 reversible?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The original row 1 is lost. The corresponding row-operation matrix is singular.

**Intuition:** Copying is different from swapping.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-copy`

---

### 87. If row operation L₁ happens before L₂, what is the final product?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

L₂L₁B. The operator nearest B acts first.

**Intuition:** Left operations accumulate outward to the left.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-left-compose`

---

### 88. If column operation C₁ happens before C₂, what is the final product?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

BC₁C₂.

**Intuition:** Right operations accumulate outward to the right.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-right-compose`

---

### 89. What do the right singular vectors tell you about a linear map?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are the input directions that become the ellipse’s principal axes after transformation.

**Intuition:** Right vectors describe input directions; left vectors describe outputs.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-right-vectors`

---

### 90. Why plot transformed disks with equal axis scales?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Unequal plot scales can make a circle look like an ellipse or distort the true stretch ratio.

**Intuition:** The display can manufacture apparent geometry.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-equal-plot-scales`

---

### 91. Does a negative determinant mean negative area?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Absolute determinant gives area scale. A negative sign indicates an orientation reversal.

**Intuition:** Magnitude measures size; sign measures orientation.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-determinant-sign`

---

### 92. Why is an orthogonal matrix easy to invert?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For square Q, QᵀQ=I, so Q⁻¹=Qᵀ.

**Intuition:** Undo a rotation or reflection by transposing.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-orthogonal-inverse`

---

### 93. A pivot is 10⁻¹² and the entry below is 5. What multiplier eliminates it?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

5/10⁻¹²=5×10¹². That huge multiplier is the numerical warning.

**Intuition:** The pivot is a divisor, so its scale matters.

</details>

Sources: [PS2 · Q1 · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot-multiplier`

---

### 94. Does pivoting make an ill-conditioned problem well-conditioned?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It improves the elimination procedure but does not remove sensitivity in the original problem.

**Intuition:** A safer algorithm cannot improve the information in the data.

</details>

Sources: [PS2 · Q1 · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot-does-not-fix`

---

### 95. What does one row swap do to a determinant?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It flips the sign without changing the magnitude.

**Intuition:** Swapping reverses orientation.

</details>

Sources: [PS2 · Q1(a) · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-swap-det`

---

### 96. Why is a triangular matrix’s determinant the diagonal product?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its triangular structure eliminates the competing determinant terms.

**Intuition:** Only the diagonal route contributes.

</details>

Sources: [PS2 · Q1(a) · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-triangular-det`

---

### 97. Can a nearly simple image have full exact rank?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Tiny noise can make every singular value nonzero, even if only a few are large.

**Intuition:** Exact rank and useful approximate rank answer different questions.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-noisy-full-rank`

---

### 98. If every image row is a multiple of one row, what is its rank?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One, unless the image is entirely zero.

**Intuition:** One horizontal pattern plus row weights is enough.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-one-pattern-image`

---

### 99. If every pixel error doubles, what happens to RMS error?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles. Squaring gives a factor of four, then the square root removes half that power.

**Intuition:** RMS has the same units as the pixels.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rms-scale`

---

### 100. What is the squared Frobenius error of a rank-k truncated SVD?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum of squares of the discarded singular values: Σ_{i>k} σᵢ².

**Intuition:** Discarded stretches account for the remaining squared error.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-svd-tail`

---

### 101. A column has m entries and a row has n. What shape is their outer product?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

m×n. Every column entry multiplies every row entry.

**Intuition:** An outer product builds a matrix from two patterns.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-outer-shape`

---

### 102. Can a sum of k rank-one matrices have rank larger than k?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its column space fits inside the span of at most k column vectors.

**Intuition:** Each rank-one term adds at most one direction.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rank-sum`

---

### 103. How many coefficients does a centered ellipse fit use?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three: b,c,d for x²,xy,y². “Centered” removes linear x and y terms from this model.

**Intuition:** Model assumptions determine the number of unknowns.

</details>

Sources: [PS2 · Q3(a) · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-three-features`

---

### 104. Do three ellipse-fit points guarantee unique coefficients?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Their feature rows must also be linearly independent.

**Intuition:** Three equations can repeat the same constraint.

</details>

Sources: [PS2 · Q3(a) · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-points-not-enough`

---

### 105. If c=0 in bx²+cxy+dy²=1, how are valid ellipse axes oriented?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Along the coordinate axes, provided b and d are positive.

**Intuition:** The cross term is what couples the coordinates.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-axis-aligned`

---

### 106. If Q has one positive and one negative eigenvalue, is xᵀQx=1 an ellipse?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In its eigenbasis, one squared term is subtracted: the curve is a hyperbola.

**Intuition:** An indefinite quadratic opens in opposing directions.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-indefinite-curve`

---

### 107. What gives the axis directions of xᵀQx=1 for positive-definite Q?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Q’s orthonormal eigenvectors.

**Intuition:** Diagonalizing Q uncouples the coordinate directions.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-eigenvector-axes`

---

### 108. For a point uniform in a unit disk, what is P(r≤1/2)?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/4, because area scales as radius squared.

**Intuition:** Half the radius encloses only a quarter of the area.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations · companion concept check](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am205-half-radius`

---

### 109. What fraction of uniform points in [−1,1]² land inside the unit disk?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

π/4: disk area divided by square area.

**Intuition:** Rejection sampling turns area ratios into acceptance rates.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations · companion concept check](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am205-square-rejection`

---

### 110. Can a well-posed problem be ill-conditioned?

**AM 205 · Foundations of computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Its answer can depend continuously but very steeply on the input.

**Intuition:** Continuous does not mean insensitive.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-wellposed-not-wellconditioned`

---

### 111. A perfect solver predicts motion with no air resistance. Why can it miss reality?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The model omits a relevant force. That is modeling error, even if the equations are solved exactly.

**Intuition:** Computational correctness is not model correctness.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-model-error`

---

### 112. Approximating a curve with straight segments introduces which error?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Discretization error: a continuous object is replaced by a finite approximation.

**Intuition:** The approximation exists before floating-point rounding begins.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-discretization-example`

---

### 113. Can higher precision recover digits a sensor never measured?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It can preserve available information, not create missing information.

**Intuition:** Input uncertainty survives a perfect calculation.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-input-noise`

---

### 114. If derivative error is roughly h+u/h, where is the best scale for h?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Near √u, where the two error terms balance.

**Intuition:** Do not improve one error source while ignoring the other.

</details>

Sources: [Heath · Ch. 1 review Q1.50, printed p. 41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-balance-step`

---

### 115. Can cancellation be harmful even if subtraction itself is exact?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. It can reveal errors already present in the two operands.

**Intuition:** The dangerous error may enter before the subtraction.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-exact-subtraction`

---

### 116. In a scaled norm calculation, what if max(abs(a),abs(b))=0?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Return zero. Both inputs are zero, so no division is needed.

**Intuition:** Handle the zero case before dividing by the scale.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-zero-scale`

---

### 117. Under IEEE arithmetic, why is 0/0 NaN rather than infinity?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No unique quotient is determined. Any finite number multiplied by zero gives zero.

**Intuition:** Undefined information is different from an unbounded result.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-zero-over-zero`

---

### 118. Why is relative error awkward when the true answer is zero?

**AM 205 · Error measures · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The usual formula divides by the true magnitude. Use absolute error or another meaningful reference scale instead.

**Intuition:** Choose an error measure with a meaningful denominator.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-relative-zero`

---

### 119. If √2 is approximated by 1.4, what is the forward error?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About 0.0142: abs(√2−1.4).

**Intuition:** Forward error measures the answer, not the input.

</details>

Sources: [Heath · §1.2.5, printed p. 12 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-forward-sqrt`

---

### 120. Why is the perturbation to b equal to −r when r=b−Ax̂?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Rearrange the definition: Ax̂=b−r.

**Intuition:** Residual sign conventions matter.

</details>

Sources: [Heath · §1.2.5, printed p. 12 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-residual-sign`

---

### 121. Which belongs to the problem: conditioning or stability?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Conditioning. Stability describes how an algorithm handles rounding and perturbations.

**Intuition:** Separate a sensitive question from a fragile computation.

</details>

Sources: [Heath · §1.2.6, printed p. 13 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-problem-vs-solver`

---

### 122. Can a function have a large slope but small relative sensitivity?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. For √x near zero, the slope is large but relative condition number is 1/2.

**Intuition:** Raw units and percentage changes tell different stories.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-absolute-vs-relative`

---

### 123. Why can parallel sums differ slightly from serial sums?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They group additions differently. Floating-point rounding makes grouping matter.

**Intuition:** Different reduction trees can produce different last digits.

</details>

Sources: [Heath · Ch. 1 review · floating-point properties · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-parallel-sums`

---

### 124. What is the idea behind compensated summation?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Track small rounding losses in a correction term so later additions can recover part of them.

**Intuition:** Do not silently discard every tiny contribution.

</details>

Sources: [Heath · Ch. 1 review Q1.45–49, printed p. 41 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-compensation`

---

### 125. Does multiplying an invertible matrix by a nonzero scalar change its condition number?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, for the same induced norm: ‖αA‖‖(αA)⁻¹‖=‖A‖‖A⁻¹‖.

**Intuition:** Uniform scaling cancels out of the sensitivity ratio.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-condition-scaling`

---

### 126. What does ‖Ax‖≤‖A‖‖x‖ tell you?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The induced matrix norm bounds how much A can amplify a vector’s size.

**Intuition:** A matrix norm is a worst-direction stretch bound.

</details>

Sources: [Heath · Ch. 2 review · matrix norms · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-norm-bound`

---

### 127. What is the smallest possible 2-norm condition number of an invertible matrix?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. Its largest singular value cannot be smaller than its smallest.

**Intuition:** Equal stretch in every direction is best conditioned.

</details>

Sources: [Heath · Ch. 2 review Q2.57, printed p. 94 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-condition-one`

---

### 128. Why normalize a linear-system residual?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiplying A and b by a tiny scalar makes the raw residual tiny without improving x̂. Normalization accounts for the problem’s scale.

**Intuition:** Small needs a reference scale.

</details>

Sources: [Heath · §2.3.5, printed p. 61 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-scaled-residual`

---

### 129. If Ax=Ay, where does x−y live?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In the null space, because A(x−y)=0.

**Intuition:** Nonuniqueness lives in invisible directions.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-null-difference`

---

### 130. When does an m×n matrix map onto every b in ℝᵐ?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When it has full row rank m.

**Intuition:** Every output direction must be reachable.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-full-row-rank`

---

### 131. Why must complete pivoting track column swaps?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They reorder the variables. Without undoing them, the solution entries can be assigned to the wrong unknowns.

**Intuition:** A correct value in the wrong position is still wrong.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-column-permutation`

---

### 132. After dense LU factorization, does doubling n roughly double solve cost?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A triangular solve costs O(n²), so doubling n roughly quadruples that work.

**Intuition:** Reusing factors is cheaper, but not free.

</details>

Sources: [Heath · Ch. 2 review · repeated systems · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-many-b-cost`

---

### 133. Which triangular solve runs backward from the last row?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The upper-triangular solve. The last equation isolates the last unknown.

**Intuition:** Start where only one unknown remains.

</details>

Sources: [Heath · Ch. 2 review · repeated systems · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-forward-backward`

---

### 134. What is LLᵀ for L=[[2,0],[1,1]]?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[[4,2],[2,2]]. This supplies a concrete positive-definite example.

**Intuition:** A factorization can certify positive definiteness.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-cholesky-check`

---

### 135. Can a positive-definite matrix be badly conditioned?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. diag(1,10⁻¹²) is positive definite but has condition number 10¹².

**Intuition:** Positive eigenvalues need not have similar magnitudes.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-spd-sensitive`

---

### 136. Where must the output of uvᵀx lie?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In span(u), whatever x is.

**Intuition:** A rank-one map funnels every input into one output direction.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-rank-one-output`

---

### 137. If κ₂(X)=10, what is κ₂(XᵀX) for full-column-rank X?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100.

**Intuition:** Normal equations square the stretch ratio.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-condition-ten`

---

### 138. Which part of y can a least-squares fit in C(X) never match?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its orthogonal component (I−QQᵀ)y.

**Intuition:** Least squares cannot fit a direction outside the model space.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-qr-leftover`

---

### 139. Why can inverting a tiny singular value amplify noise?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its reciprocal is huge, so a small data component becomes a large coefficient component.

**Intuition:** Weakly observed directions are expensive to reconstruct.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-tiny-singular-inverse`

---

### 140. Why does a numerical pseudoinverse need a tolerance?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It must decide which small singular values count as zero. That decision changes the effective rank.

**Intuition:** Numerical rank depends on scale and resolution.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-pseudoinverse-threshold`

---

### 141. How is a model different from a system?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The system is what you study. A model is a simplified mathematical description of it.

**Intuition:** A useful model keeps the features relevant to the question.

</details>

Sources: [Lecture 00 · p. 29](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=29)

Card ID: `am207-system-model`

---

### 142. What does a simulation do?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It generates outcomes from a model using specified inputs and rules.

**Intuition:** Simulation explores the model; observations test its connection to reality.

</details>

Sources: [Lecture 00 · p. 29](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=29)

Card ID: `am207-simulation-model`

---

### 143. What is uncertainty propagation?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Following uncertain inputs through a model to obtain uncertainty in its outputs.

**Intuition:** Uncertain inputs produce a distribution of predictions.

</details>

Sources: [Lecture 00 · p. 33](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=33)

Card ID: `am207-input-output-uncertainty`

---

### 144. What does verification check?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Whether the code and numerical method solve the chosen mathematical model correctly.

**Intuition:** Verification checks the implementation.

</details>

Sources: [Lecture 00 · p. 35](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=35)

Card ID: `am207-verification-question`

---

### 145. What does validation check?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Whether a model describes relevant observations well enough for its intended use.

**Intuition:** A correctly solved model can still describe reality poorly.

</details>

Sources: [Lecture 00 · p. 35](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=35)

Card ID: `am207-validation-question`

---

### 146. Why report a predictive distribution instead of only a best prediction?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It expresses which outcomes are plausible and how uncertain the prediction is.

**Intuition:** Decisions often depend on the tails as well as the center.

</details>

Sources: [Lecture 00 · p. 41](../courses/am207/lecnotes/Lecture_00_Introduction.pdf#page=41)

Card ID: `am207-prediction-distribution`

---

### 147. How does uncertainty differ from error?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Error is a discrepancy from a true or reference value. Uncertainty describes the range of plausible values when knowledge is incomplete.

**Intuition:** A narrow uncertainty estimate can still miss the truth.

</details>

Sources: [Lecture 01 · p. 8](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=8)

Card ID: `am207-uncertainty-error`

---

### 148. What is an event in probability?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A subset of the sample space: all outcomes that satisfy a condition.

**Intuition:** An event can contain many elementary outcomes.

</details>

Sources: [Lecture 01 · p. 11](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=11)

Card ID: `am207-event-set`

---

### 149. What three rules define a probability measure?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Probabilities are nonnegative, the whole sample space has probability 1, and probabilities add over countably many disjoint events.

**Intuition:** Disjoint alternatives can be added directly.

</details>

Sources: [Lecture 01 · p. 12](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-probability-axioms`

---

### 150. How do you find the probability that A does not happen?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

P(Aᶜ)=1−P(A).

**Intuition:** A and its complement exhaust all possibilities.

</details>

Sources: [Lecture 01 · p. 12](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-complement-event`

---

### 151. Why subtract P(A∩B) when finding P(A∪B)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Adding P(A)+P(B) counts the overlap twice. Subtract it once.

**Intuition:** An outcome in both events is still only one outcome.

</details>

Sources: [Lecture 01 · p. 12](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-union-overlap`

---

### 152. Why divide by P(B) in P(A given B)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Conditioning restricts attention to B. Dividing P(A∩B) by P(B) renormalizes that restricted space.

**Intuition:** Within the new universe B, total probability must be 1.

</details>

Sources: [Lecture 01 · p. 18](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-conditional-denominator`

---

### 153. How do mutually exclusive cases Bᵢ help compute P(A)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

If the cases cover the sample space, P(A)=ΣᵢP(A given Bᵢ)P(Bᵢ).

**Intuition:** Average the conditional chances using the chances of each case.

</details>

Sources: [Lecture 01 · p. 18](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-total-probability`

---

### 154. What does independence of A and B mean?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

P(A∩B)=P(A)P(B). When P(B)>0, knowing B does not change the probability of A.

**Intuition:** Independence concerns information, not whether events look unrelated.

</details>

Sources: [Lecture 01 · p. 18](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-independence-meaning`

---

### 155. What is an ensemble?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A collection of possible system descriptions or realizations, with probability weights.

**Intuition:** It represents alternatives, not necessarily particles in one physical system.

</details>

Sources: [Lecture 01 · p. 29](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=29)

Card ID: `am207-ensemble-meaning`

---

### 156. Do different members of an ensemble interact?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. They are alternative realizations. Particles within a single realization may interact.

**Intuition:** Separate possible worlds from components of one world.

</details>

Sources: [Lecture 01 · p. 30](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=30)

Card ID: `am207-ensemble-members`

---

### 157. Can the expected number of molecules be noninteger?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Every realization has an integer count, but a weighted average of those counts need not be integer.

**Intuition:** A mean need not be a possible individual outcome.

</details>

Sources: [Lecture 01 · p. 31](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=31)

Card ID: `am207-ensemble-fraction`

---

### 158. Why is the mean of an event indicator its probability?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The indicator is 1 on the event and 0 otherwise, so its expectation is 1·P(A)+0·P(Aᶜ)=P(A).

**Intuition:** Counting event occurrences estimates a probability.

</details>

Sources: [Lecture 01 · p. 33](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=33)

Card ID: `am207-indicator-probability`

---

### 159. What is a random variable?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A numerical function of the random outcome.

**Intuition:** It turns outcomes into quantities you can analyze.

</details>

Sources: [Lecture 01 · p. 35](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=35)

Card ID: `am207-random-variable-map`

---

### 160. Can a probability density exceed 1?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Probabilities are areas under the density, and the total area must be 1.

**Intuition:** Height is not probability.

</details>

Sources: [Lecture 01 · p. 36](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-density-not-probability`

---

### 161. What does F(x) tell you?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

F(x)=P(X≤x), the probability accumulated up to x.

**Intuition:** A CDF never decreases and runs from 0 to 1.

</details>

Sources: [Lecture 01 · p. 36](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-cdf-definition`

---

### 162. How do you obtain P(a<X≤b) from a CDF?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract F(a) from F(b).

**Intuition:** The difference removes probability accumulated before the interval.

</details>

Sources: [Lecture 01 · p. 36](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-interval-cdf`

---

### 163. How is variance related to the first two moments?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Var(X)=E[X²]−E[X]², when these moments are finite.

**Intuition:** Spread is the second moment after removing the squared center.

</details>

Sources: [Lecture 01 · p. 37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=37)

Card ID: `am207-variance-second-moment`

---

### 164. Is E[g(X)] always equal to g(E[X])?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. For g(x)=x², their difference is Var(X).

**Intuition:** Nonlinear transformations and averaging usually do not commute.

</details>

Sources: [Lecture 01 · p. 37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=37)

Card ID: `am207-nonlinear-average`

---

### 165. What makes a stochastic process more than one random variable?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is a collection of random variables indexed by time or another parameter, with a joint probability structure.

**Intuition:** Knowing each time's marginal distribution does not specify temporal dependence.

</details>

Sources: [Lecture 01 · p. 38](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=38)

Card ID: `am207-stochastic-process`

---

### 166. If X is normal and Y=eˣ, what values can Y take?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only positive values. Exponentiation maps the real line to (0,∞).

**Intuition:** Check the transformed support before writing a density.

</details>

Sources: [Lecture 01 · p. 41](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=41)

Card ID: `am207-lognormal-support`

---

### 167. Why does a lognormal density contain a factor 1/y?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The inverse transformation is x=log y, whose derivative is 1/y. Thus fY(y)=fX(log y)/y for y>0.

**Intuition:** Density stretches inversely with the coordinate scale.

</details>

Sources: [Lecture 01 · p. 41](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=41)

Card ID: `am207-lognormal-jacobian`

---

### 168. How can inverse-CDF sampling handle a discrete distribution?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use the smallest x for which F(x)≥U. Each jump of the CDF receives a uniform interval equal to its probability mass.

**Intuition:** Flat and jumping CDFs need a generalized inverse.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-generalized-inverse`

---

### 169. What does a PRNG seed control?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It fixes the initial state of a deterministic generator and therefore its subsequent sequence.

**Intuition:** A seed makes a random-looking computation reproducible.

</details>

Sources: [Lecture 02 · p. 5](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=5)

Card ID: `am207-seed-determinism`

---

### 170. Why must a finite-state PRNG eventually repeat?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After enough steps, a state repeats. Deterministic updates then repeat the same future sequence.

**Intuition:** A long period matters when drawing many samples.

</details>

Sources: [Lecture 02 · p. 6](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=6)

Card ID: `am207-finite-state-period`

---

### 171. How does a linear congruential generator update its state?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

xₙ₊₁=(axₙ+c) mod m.

**Intuition:** Simple arithmetic can generate long sequences, but parameter choices affect quality.

</details>

Sources: [Lecture 02 · p. 6](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=6)

Card ID: `am207-lcg-rule`

---

### 172. Can passing randomness tests prove that PRNG outputs are independent?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Tests can detect certain patterns, but cannot certify every property of a deterministic sequence.

**Intuition:** Passing a diagnostic is evidence, not a universal guarantee.

</details>

Sources: [Lecture 02 · p. 8](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=8)

Card ID: `am207-random-tests-limit`

---

### 173. Why should you avoid resetting the same seed inside a sampling loop?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each reset restarts the sequence, often producing the same draw repeatedly.

**Intuition:** Seed once, then let the generator advance.

</details>

Sources: [Lecture 02 · p. 11](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=11)

Card ID: `am207-reseed-loop`

---

### 174. How does uniform sampling on a region D estimate an integral?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply the sample average of f(X) by the volume of D.

**Intuition:** Uniform density equals one divided by the region's volume.

</details>

Sources: [Lecture 02 · p. 12](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=12)

Card ID: `am207-uniform-volume-general`

---

### 175. What changes when several x values map to the same y?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add the density contribution from every inverse branch, each divided by the absolute forward derivative.

**Intuition:** All routes to the same output contribute probability.

</details>

Sources: [Lecture 02 · p. 19](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-transform-branches`

---

### 176. For X uniform on (0,1), what is the density of Y=4(X−1/2)²?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

fY(y)=1/(2√y) for 0<y<1. The two inverse branches contribute equally.

**Intuition:** A symmetric fold combines probability from both sides.

</details>

Sources: [Lecture 02 · p. 20](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=20)

Card ID: `am207-squared-uniform-density`

---

### 177. When does F(X) have a uniform distribution?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When X has a continuous CDF F. Discrete CDFs generally produce discrete probability levels instead.

**Intuition:** Continuity matters for the probability integral transform.

</details>

Sources: [Lecture 02 · p. 21](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=21)

Card ID: `am207-probability-integral-condition`

---

### 178. Where must a rejection-sampling envelope dominate the target?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Everywhere the target has positive density, up to sets of zero probability.

**Intuition:** A missed peak can bias the accepted sample.

</details>

Sources: [Lecture 02 · p. 32](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection-global-bound`

---

### 179. For normalized p and proposal q with p≤Mq, what fraction of proposals is accepted on average?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/M.

**Intuition:** A loose envelope wastes more proposals.

</details>

Sources: [Lecture 02 · p. 34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=34)

Card ID: `am207-rejection-acceptance-fraction`

---

### 180. Can a proposal with zero density in part of the target's support work?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It can never propose outcomes from that missing region.

**Intuition:** Coverage of the target support comes before efficiency.

</details>

Sources: [Lecture 02 · p. 32](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection-support`

---

### 181. How does MCMC reverse the usual stochastic-modeling problem?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Instead of starting with dynamics and finding their distribution, you start with a target distribution and design dynamics that preserve it.

**Intuition:** The chain is a tool for sampling the target.

</details>

Sources: [Lecture 02 · p. 41](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=41)

Card ID: `am207-mcmc-reverse-design`

---

### 182. Is rejection in Metropolis–Hastings an absence of a transition?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It is a transition back to the current state, contributing to the kernel's diagonal probability.

**Intuition:** Staying put is part of the Markov chain.

</details>

Sources: [Lecture 02 · p. 42](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=42)

Card ID: `am207-mh-holding`

---

### 183. Why can Metropolis–Hastings use an unnormalized target?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The common normalization constant cancels in the target-density ratio.

**Intuition:** Relative density is enough to decide acceptance.

</details>

Sources: [Lecture 02 · p. 38](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=38)

Card ID: `am207-mh-normalizer`

---

### 184. Does an invariant target alone guarantee convergence from any starting point?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The chain also needs suitable accessibility and convergence conditions; a chain trapped in one region can preserve the target without exploring it.

**Intuition:** Preserving a distribution and reaching it are different questions.

</details>

Sources: [Lecture 02 · p. 47](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=47)

Card ID: `am207-stationarity-convergence`

---

### 185. Does the Markov property make consecutive states independent?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The next state can depend strongly on the current state; the earlier past adds no information once the present is known.

**Intuition:** One-step memory still creates correlation.

</details>

Sources: [Lecture 03 · p. 10](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=10)

Card ID: `am207-markov-not-iid`

---

### 186. Why can a very high acceptance rate signal inefficient sampling?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Proposals may be so small that the chain barely moves, producing highly correlated draws.

**Intuition:** Accepted steps must also cover useful distance.

</details>

Sources: [Lecture 03 · p. 22](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=22)

Card ID: `am207-acceptance-too-high`

---

### 187. Why can very large proposals slow exploration?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Many proposals land in low-density regions and are rejected, leaving repeated states.

**Intuition:** Big attempted moves do not guarantee big actual moves.

</details>

Sources: [Lecture 03 · p. 22](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=22)

Card ID: `am207-acceptance-too-low`

---

### 188. Is one acceptance-rate target optimal for every MCMC problem?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Useful rates depend on the proposal, dimension, and target geometry.

**Intuition:** Judge mixing and effective information, not a single percentage alone.

</details>

Sources: [Lecture 03 · p. 23](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=23)

Card ID: `am207-acceptance-target-universal`

---

### 189. What is the variance of an average of N IID draws with variance σ²?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²/N.

**Intuition:** Independent averaging reduces variance linearly with sample count.

</details>

Sources: [Lecture 03 · p. 27](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=27)

Card ID: `am207-iid-mean-variance`

---

### 190. What assumption supports the usual 1/√N Monte Carlo error scale?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Finite variance, together with suitable sampling assumptions such as IID draws.

**Intuition:** Heavy tails can break familiar error estimates.

</details>

Sources: [Lecture 03 · p. 28](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=28)

Card ID: `am207-mc-finite-variance`

---

### 191. Does a dimension-independent 1/√N rate mean high-dimensional integration is easy?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The variance and cost per draw can grow dramatically with dimension.

**Intuition:** The rate hides a problem-dependent constant.

</details>

Sources: [Lecture 03 · p. 30](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=30)

Card ID: `am207-mc-dimension-constant`

---

### 192. Which expectation equals ∫₀∞cos(2x)e⁻ˣdx?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

E[cos(2X)] for X∼Exponential(1). The integral equals 1/5.

**Intuition:** Recognizing a density turns an integral into a sampling problem.

</details>

Sources: [Lecture 03 · p. 29](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=29)

Card ID: `am207-exponential-integral-example`

---

### 193. Where must an importance proposal q be positive?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Where the integrand times the target density is nonzero.

**Intuition:** Weights cannot recover a region you never sample.

</details>

Sources: [Lecture 03 · p. 33](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=33)

Card ID: `am207-importance-support`

---

### 194. What determines importance-sampling variance?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The variability of f(X)p(X)/q(X) under draws from q.

**Intuition:** A good proposal makes weighted contributions similar.

</details>

Sources: [Lecture 03 · p. 34](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance-variance`

---

### 195. What proposal shape minimizes variance for estimating Eₚ[f(X)]?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under standard integrability conditions, q should be proportional to abs(f)p.

**Intuition:** Sample where contributions are large, not merely where p is large.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-importance-optimal-shape`

---

### 196. Why is the ideal proposal often unavailable in practice?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its normalizing constant may be the very integral you want to estimate.

**Intuition:** The theoretical optimum explains the goal without automatically solving the problem.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-importance-zero-variance-catch`

---

### 197. For X∼N(0,σ²I) in d dimensions, where is its typical radius for large d?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Near σ√d, because E[‖X‖²]=dσ² and the squared radius concentrates relatively.

**Intuition:** Most Gaussian mass is far from its density peak at the origin.

</details>

Sources: [Lecture 03 · p. 39](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=39)

Card ID: `am207-normal-typical-radius`

---

### 198. How variable is the squared radius of a d-dimensional isotropic normal?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Var(‖X‖²)=2dσ⁴.

**Intuition:** Relative fluctuations shrink as dimension grows.

</details>

Sources: [Lecture 03 · p. 39](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=39)

Card ID: `am207-normal-radius-variance`

---

### 199. Why can the highest-density point lie far from most probability mass?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Probability depends on both density and available volume. High-dimensional shells contain enormous volume.

**Intuition:** Peak density is not the same as a typical location.

</details>

Sources: [Lecture 03 · p. 38](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=38)

Card ID: `am207-density-mode-mass`

---

### 200. What is the state of an Ising model?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A configuration of spins, each taking the value +1 or −1.

**Intuition:** The random object is the whole configuration.

</details>

Sources: [Lecture 03 · p. 41](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=41)

Card ID: `am207-ising-state`

---

### 201. For energy −JΣsᵢsⱼ with J>0, which neighbors are favored?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Aligned neighbors have lower energy than opposite neighbors.

**Intuition:** Positive coupling encourages local agreement.

</details>

Sources: [Lecture 03 · p. 41](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=41)

Card ID: `am207-ising-ferromagnetic`

---

### 202. How does temperature affect Boltzmann probabilities?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The weight is exp(−E/(kBT)). Higher temperature reduces the penalty for higher energy.

**Intuition:** Heat makes energetic differences less decisive.

</details>

Sources: [Lecture 03 · p. 42](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=42)

Card ID: `am207-boltzmann-temperature`

---

### 203. What is the energy change from flipping one Ising spin sᵢ?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

ΔE=2JsᵢΣⱼsⱼ, summing over its neighbors with each bond counted once in the energy.

**Intuition:** Only bonds touching the flipped spin change.

</details>

Sources: [Lecture 03 · p. 44](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=44)

Card ID: `am207-ising-flip-cost`

---

### 204. What goes wrong if an energy sum counts each neighboring pair twice?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles the interaction energy. Count each bond once or divide that sum by two.

**Intuition:** Implementation conventions must match the acceptance formula.

</details>

Sources: [Lecture 03 · p. 44](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=44)

Card ID: `am207-ising-double-count`

---

### 205. Why allow uphill energy moves in Metropolis sampling?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are needed to sample a finite-temperature distribution and can help escape local minima.

**Intuition:** Sampling a distribution is different from minimizing energy.

</details>

Sources: [Lecture 03 · p. 43](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=43)

Card ID: `am207-energy-uphill`

---

### 206. Where are the minima of (x²−1/2)²?

**AM 207 · Multimodal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

At x=±1/√2, where the squared quantity is zero.

**Intuition:** Two separated minima create two attractive regions.

</details>

Sources: [Lecture 03 · p. 49](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=49)

Card ID: `am207-double-well-minima`

---

### 207. Why can a chain appear stable while missing half a target distribution?

**AM 207 · Multimodal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It may explore one mode well but rarely cross the low-probability barrier to another.

**Intuition:** Within-mode stability does not establish global mixing.

</details>

Sources: [Lecture 03 · p. 50](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=50)

Card ID: `am207-mode-trapping`

---

### 208. What units does a transition rate have?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Inverse time. Rate times a small time interval approximates a jump probability.

**Intuition:** A rate itself can exceed 1.

</details>

Sources: [Lecture 04 · p. 4](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=4)

Card ID: `am207-master-rate-units`

---

### 209. Why evaluate a gain term at n−ν for a jump of size ν?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A trajectory arriving at n after that jump must have started at n−ν.

**Intuition:** Trace arrivals backward to their source state.

</details>

Sources: [Lecture 04 · p. 18](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=18)

Card ID: `am207-master-arrival-state`

---

### 210. Why might mRNA count alone fail to be a Markov state?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its future production rate can depend on an unobserved promoter state. Include that state to capture the relevant memory.

**Intuition:** A useful state stores what predicts the next transition.

</details>

Sources: [Lecture 04 · p. 16](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=16)

Card ID: `am207-hidden-promoter-state`

---

### 211. How can promoter switching create bursts of gene expression?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An active interval allows repeated transcription before the promoter switches off.

**Intuition:** Random switching can create clustered events.

</details>

Sources: [Lecture 04 · p. 16](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=16)

Card ID: `am207-gene-burst`

---

### 212. What is the state change for one SIR infection?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Susceptible decreases by 1 and infected increases by 1; recovered stays unchanged.

**Intuition:** A reaction vector records bookkeeping for one event.

</details>

Sources: [Lecture 04 · p. 20](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-sir-infection-jump`

---

### 213. What is the state change for one SIR recovery?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Infected decreases by 1 and recovered increases by 1.

**Intuition:** Transitions move people between compartments.

</details>

Sources: [Lecture 04 · p. 20](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-sir-recovery-jump`

---

### 214. Why can a small stochastic outbreak die out even if deterministic dynamics predict growth?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Early recoveries may occur before enough new infections. Discrete chance matters when counts are small.

**Intuition:** Average growth does not guarantee survival of each realization.

</details>

Sources: [Lecture 04 · p. 20](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-small-outbreak-extinction`

---

### 215. Why is a queue's departure rate zero when it is empty?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There is no customer to serve. The boundary must prevent negative queue length.

**Intuition:** Physical constraints change transition rules at boundaries.

</details>

Sources: [Lecture 04 · p. 27](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=27)

Card ID: `am207-queue-boundary`

---

### 216. When does a basic M/M/1 queue have a stationary queue-length distribution?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When arrival rate λ is smaller than service rate μ. Then P(N=n)=(1−ρ)ρⁿ with ρ=λ/μ.

**Intuition:** Average service capacity must exceed incoming demand.

</details>

Sources: [Lecture 04 · p. 27](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=27)

Card ID: `am207-queue-stability`

---

### 217. What remains conserved when two clusters merge without losing material?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Total mass, even though the number of clusters decreases.

**Intuition:** A changing count can coexist with a conserved weighted sum.

</details>

Sources: [Lecture 04 · p. 28](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=28)

Card ID: `am207-coagulation-conservation`

---

### 218. What makes a Hawkes process self-exciting?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An event temporarily increases the rate of future events.

**Intuition:** Past events affect current risk through the intensity.

</details>

Sources: [Lecture 04 · p. 34](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=34)

Card ID: `am207-hawkes-memory`

---

### 219. What happens between jumps in a piecewise-deterministic Markov process?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The state follows deterministic dynamics; random events change its evolution.

**Intuition:** Randomness need not act continuously in time.

</details>

Sources: [Lecture 04 · p. 38](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=38)

Card ID: `am207-pdmp-meaning`

---

### 220. When can a diffusion approximation miss important behavior?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When discrete boundaries, rare large jumps, or heavy tails matter.

**Intuition:** Matching typical small fluctuations may miss rare outcomes.

</details>

Sources: [Lecture 04 · p. 41](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=41)

Card ID: `am207-diffusion-limit-caution`

---

### 221. What does the Chapman–Kolmogorov equation sum over?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All possible intermediate states, multiplying the two transition probabilities for each route.

**Intuition:** Break a transition into two time segments and add the routes.

</details>

Sources: [Lecture 04 · p. 43](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-ck-intermediate`

---

### 222. What does the generator L do to an observable f?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It gives the instantaneous expected rate of change of f, conditional on the current state.

**Intuition:** The generator describes local dynamics through test functions.

</details>

Sources: [Lecture 04 · p. 49](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator-observable`

---

### 223. How does the generator determine the evolution of E[f(Xₜ)]?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under appropriate regularity, dE[f(Xₜ)]/dt=E[Lf(Xₜ)].

**Intuition:** Local expected changes produce equations for moments.

</details>

Sources: [Lecture 04 · p. 49](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-expectation-generator`

---

### 224. Why does a Markov generator send the constant function 1 to zero?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The value 1 never changes along any trajectory.

**Intuition:** This is the observable-side counterpart of conserving total probability.

</details>

Sources: [Lecture 04 · p. 50](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=50)

Card ID: `am207-generator-constant-intuition`

---

### 225. How do L and its adjoint L† play different roles?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

L evolves observables; L† evolves probability distributions through ∂ₜp=L†p.

**Intuition:** The same dynamics have a function view and a distribution view.

</details>

Sources: [Lecture 04 · p. 52](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=52)

Card ID: `am207-adjoint-density`

---

### 226. For total jump rate λ, what is the small-time probability of staying put?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1−λΔt plus higher-order terms.

**Intuition:** No jump is the usual outcome over a sufficiently short interval.

</details>

Sources: [Lecture 04 · p. 54](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=54)

Card ID: `am207-small-time-stay`

---

### 227. Why does a jump generator contain f(new)−f(current)?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It measures the change caused by each possible jump, weighted by its rate.

**Intuition:** A generator averages changes, not just destination values.

</details>

Sources: [Lecture 04 · p. 55](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=55)

Card ID: `am207-jump-generator-difference`

---

### 228. If each of n particles dies at rate γ, what is the total death rate?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

γn.

**Intuition:** Independent opportunities add their rates.

</details>

Sources: [Lecture 04 · p. 61](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=61)

Card ID: `am207-pure-death-rate`

---

### 229. How does the mean count evolve under independent death at rate γ?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

dm/dt=−γm, so m(t)=m(0)e^(−γt).

**Intuition:** The expected loss rate is proportional to the expected population.

</details>

Sources: [Lecture 04 · p. 63](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=63)

Card ID: `am207-pure-death-mean`

---

### 230. How does the diffusion coefficient scale with random-walk step size h and step time τ?

**AM 207 · Diffusion limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For symmetric steps ±h every τ, D=h²/(2τ).

**Intuition:** Spread per unit time determines diffusion strength.

</details>

Sources: [Lecture 04 · p. 69](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=69)

Card ID: `am207-random-walk-diffusion`

---

### 231. How does SSA avoid solving for every state's probability?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It generates individual event trajectories and estimates statistics from repeated runs.

**Intuition:** Sampling paths trades a huge probability equation for Monte Carlo error.

</details>

Sources: [Lecture 05 · p. 3](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=3)

Card ID: `am207-ssa-paths-not-density`

---

### 232. What does “exact” mean for SSA?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It samples the specified continuous-time jump model without a time-discretization approximation.

**Intuition:** Finite ensembles still have sampling error, and the model can still be imperfect.

</details>

Sources: [Lecture 05 · p. 37](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=37)

Card ID: `am207-ssa-exact-meaning`

---

### 233. How do reaction propensities determine the next waiting time?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Sum them to get a₀. With rates constant between jumps, the waiting time is exponential with rate a₀.

**Intuition:** Any channel can end the wait.

</details>

Sources: [Lecture 05 · p. 6](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-ssa-total-rate`

---

### 234. How is the next reaction channel chosen?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Choose channel j with probability aⱼ/a₀.

**Intuition:** A faster channel wins a larger share of the event competition.

</details>

Sources: [Lecture 05 · p. 10](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=10)

Card ID: `am207-ssa-channel-probability`

---

### 235. What happens when the total propensity is zero?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No event can occur under the current time-homogeneous rules; the state is absorbing unless an external change activates a channel.

**Intuition:** Do not divide by zero or draw a finite waiting time.

</details>

Sources: [Lecture 05 · p. 10](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=10)

Card ID: `am207-ssa-zero-rate`

---

### 236. Why recompute propensities after a reaction?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The event changes molecule counts, which can change the rates of other channels.

**Intuition:** Each event changes the next competition.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-recompute`

---

### 237. What is the count-change vector for 2A+B→3B+C?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In the order A,B,C, it is (−2,+2,+1).

**Intuition:** Subtract reactants from products, including species on both sides.

</details>

Sources: [Lecture 05 · p. 19](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=19)

Card ID: `am207-stoichiometry-example`

---

### 238. Why is an A+B reaction propensity proportional to nA·nB?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There are nA choices of A and nB choices of B, giving nA·nB possible pairs.

**Intuition:** Mass action counts possible reacting combinations.

</details>

Sources: [Lecture 05 · p. 20](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-bimolecular-distinct`

---

### 239. Why does a 2A reaction use nA(nA−1)/2 under a per-pair rate convention?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It counts unordered pairs of distinct A molecules.

**Intuition:** One molecule cannot react with itself; swapping the same pair adds no new pair.

</details>

Sources: [Lecture 05 · p. 20](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-bimolecular-identical`

---

### 240. Why can a source reaction ∅→A have constant propensity?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its supply is modeled as external and independent of the current count of A.

**Intuition:** The model treats the source as a reservoir.

</details>

Sources: [Lecture 05 · p. 20](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-zero-order-propensity`

---

### 241. How does a lattice diffusion hopping rate scale with cell width h?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For a neighbor direction, the per-particle rate scales as D/h².

**Intuition:** Finer spatial resolution requires more frequent hops.

</details>

Sources: [Lecture 05 · p. 25](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=25)

Card ID: `am207-hopping-rate`

---

### 242. Does hopping between cells change total molecule count?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. One cell loses exactly what the other gains.

**Intuition:** Transport redistributes material; reactions can create or destroy it.

</details>

Sources: [Lecture 05 · p. 25](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=25)

Card ID: `am207-hopping-conservation`

---

### 243. What makes U+2V→3V autocatalytic?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

V helps produce another V. The net change is one U lost and one V gained.

**Intuition:** Existing product promotes further product formation.

</details>

Sources: [Lecture 05 · p. 27](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=27)

Card ID: `am207-autocatalysis-vector`

---

### 244. What is the intuition behind lateral inhibition?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A cell's state suppresses the same fate in neighboring cells, encouraging contrasting local states.

**Intuition:** Local feedback can produce spatial patterns.

</details>

Sources: [Lecture 05 · p. 34](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=34)

Card ID: `am207-lateral-inhibition`

---

### 245. How does tau leaping differ from SSA?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It advances a chosen interval and samples multiple reaction counts, approximately holding propensities fixed during that interval.

**Intuition:** Larger time advances buy speed through approximation.

</details>

Sources: [Lecture 05 · p. 38](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=38)

Card ID: `am207-tau-many-events`

---

### 246. What is the Poisson mean for channel j over a leap of duration τ?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

aⱼ(x)τ, using the propensity at the start of the leap.

**Intuition:** Rate times duration gives an expected event count.

</details>

Sources: [Lecture 05 · p. 39](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-poisson-mean`

---

### 247. Why can naive tau leaping produce negative molecule counts?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Independent sampled reaction counts may consume more molecules than are available.

**Intuition:** A Poisson count is unbounded, but the reactant supply is not.

</details>

Sources: [Lecture 05 · p. 41](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=41)

Card ID: `am207-tau-negative-count`

---

### 248. Why is clipping a negative population to zero not a principled repair?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It changes the simulated transition law and can bias statistics. Reduce the step or use a suitable bounded or exact treatment.

**Intuition:** Fix the event approximation, not merely its impossible output.

</details>

Sources: [Lecture 05 · p. 41](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=41)

Card ID: `am207-tau-clipping-problem`

---

### 249. What should remain nearly constant during a valid tau leap?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The reaction propensities, with high probability.

**Intuition:** Small expected change alone can hide large random fluctuations.

</details>

Sources: [Lecture 05 · p. 42](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=42)

Card ID: `am207-tau-leap-condition`

---

### 250. What does the evidence do in Bayes' rule?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It normalizes prior times likelihood so the posterior integrates to 1.

**Intuition:** The evidence averages the likelihood over the prior.

</details>

Sources: [Lecture 06 · p. 10](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=10)

Card ID: `am207-bayes-evidence-role`

---

### 251. Is a likelihood automatically a probability density over the parameter?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It describes the observed data as a function of the parameter; it need not integrate to 1 over parameter values.

**Intuition:** A posterior needs a prior and normalization.

</details>

Sources: [Lecture 06 · p. 10](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=10)

Card ID: `am207-likelihood-not-parameter-density`

---

### 252. What is the prior predictive distribution?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The data distribution averaged over the prior parameter distribution.

**Intuition:** It asks what the model predicts before seeing the current data.

</details>

Sources: [Lecture 06 · p. 19](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=19)

Card ID: `am207-prior-predictive`

---

### 253. Why is fitting calibration data insufficient for validation?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The parameters were selected using those data. Predicting relevant new observations tests transfer beyond the fit.

**Intuition:** A good fit can conceal overfitting or model mismatch.

</details>

Sources: [Lecture 06 · p. 39](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=39)

Card ID: `am207-calibration-validation`

---

### 254. With a uniform prior and 4 heads in 11 tosses, what is the posterior for the head probability?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Beta(5,8), because the likelihood contributes θ⁴(1−θ)⁷.

**Intuition:** Add observed heads and tails to the prior's shape parameters.

</details>

Sources: [Lecture 06 · p. 49](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=49)

Card ID: `am207-coin-four-eleven`

---

### 255. What is the posterior mean for Beta(5,8)?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

5/13.

**Intuition:** The posterior mean balances the observed counts with the prior.

</details>

Sources: [Lecture 06 · p. 50](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-coin-posterior-mean`

---

### 256. Does the peak of a continuous posterior have positive point probability?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A single point has probability zero; intervals have probability obtained by integration.

**Intuition:** Density height and probability mass are different.

</details>

Sources: [Lecture 06 · p. 50](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-continuous-point-probability`

---

### 257. Can data restore posterior probability to a region assigned zero prior probability?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not under ordinary Bayes updating: zero prior times finite likelihood remains zero.

**Intuition:** A prior's support is a substantive modeling choice.

</details>

Sources: [Lecture 06 · p. 53](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=53)

Card ID: `am207-prior-zero-support`

---

### 258. Does a narrow posterior prove that the model is correct?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It describes uncertainty conditional on the chosen model and assumptions.

**Intuition:** Confidence within a model does not establish the model's validity.

</details>

Sources: [Lecture 06 · p. 64](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=64)

Card ID: `am207-posterior-model-limits`

---

### 259. For N independent exponential observations with sum T, what is the rate log-likelihood?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

N logν−νT, apart from parameter-independent terms, for ν>0.

**Intuition:** The raw data enter through their count and sum.

</details>

Sources: [Lecture 06 · p. 59](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-exponential-loglikelihood`

---

### 260. What is the maximum-likelihood exponential rate?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

ν̂=N/T=1/(sample mean), assuming T>0.

**Intuition:** The rate is the reciprocal of the mean waiting time.

</details>

Sources: [Lecture 06 · p. 59](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-exponential-mle-rate`

---

### 261. Is the exponential rate estimate the average of individual reciprocal waiting times?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It is the reciprocal of their average.

**Intuition:** Averaging and taking reciprocals do not commute.

</details>

Sources: [Lecture 06 · p. 59](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-reciprocal-average`

---

### 262. Why prefer a raw-data likelihood to fitting histogram heights when a sampling model is available?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Binning discards information and makes the fit depend on bin choices.

**Intuition:** Use the observation model directly when possible.

</details>

Sources: [Lecture 06 · p. 55](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=55)

Card ID: `am207-histogram-information`

---

### 263. What is the relative posterior standard deviation for Gamma(N+1,T)?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/√(N+1), since its mean is (N+1)/T and its SD is √(N+1)/T.

**Intuition:** More observations narrow relative uncertainty at a square-root rate.

</details>

Sources: [Lecture 06 · p. 62](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=62)

Card ID: `am207-rate-posterior-width`

---

### 264. How can a uniform draw produce an exponential waiting time with rate λ?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use T=−log(U)/λ for U uniform on (0,1). Its survival probability is e^(−λt).

**Intuition:** Stretch uniform randomness through the inverse CDF.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse`

---

### 265. Why does F⁻¹(U) have CDF F when F is continuous and strictly increasing?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

P(F⁻¹(U)≤x)=P(U≤F(x))=F(x).

**Intuition:** Uniform draws choose probability levels, not equally spaced outcomes.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse-proof`

---

### 266. How do you turn U∼Uniform(0,1) into Uniform(−2,5)?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use −2+7U. Scale by the interval length, then shift to its left endpoint.

**Intuition:** Scale sets width; translation sets location.

</details>

Sources: [Lecture 02 · uniform transformation](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=28)

Card ID: `am207-affine-uniform`

---

### 267. An event rate is 4 per second. What is the mean waiting time?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/4 second. Rate and mean waiting time are reciprocals.

**Intuition:** Faster events mean shorter waits.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-exponential-number`

---

### 268. You have already waited s for an exponential event. Does the remaining wait depend on s?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. P(T>s+t given T>s)=e^(−λt), the original survival law.

**Intuition:** With a constant hazard, the clock does not age.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-memoryless-proof`

---

### 269. How many more independent samples reduce Monte Carlo SE by a factor of 10?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100 times as many, assuming finite variance. SE shrinks as 1/√N.

**Intuition:** Tenfold precision needs a hundredfold sample budget.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mc-rate`

---

### 270. How do uniform samples on [2,5] estimate ∫₂⁵f(x)dx?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Average f at the sampled points, then multiply by 3, the interval length.

**Intuition:** A sample average is an expectation; volume turns it into an integral.

</details>

Sources: [Lecture 03 · pp. 25–27](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=26)

Card ID: `am207-integral-volume`

---

### 271. Does unbiasedness of an average require independent draws?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If each term has expectation I, their average does too. Dependence matters for its variance.

**Intuition:** Expectation is linear even when samples are dependent.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mean-unbiased-proof`

---

### 272. Independent values have sample SD 3 across 900 draws. What is the mean’s estimated SE?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3/√900=0.1.

**Intuition:** The average fluctuates less than individual draws.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-standard-error-number`

---

### 273. What does MSE include that estimator variance alone does not?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Squared bias: MSE=variance+bias².

**Intuition:** A stable estimate can still be systematically wrong.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-rmse-bias`

---

### 274. Why does a midpoint grid lose its advantage as dimension grows?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With N points in d dimensions, its error scales as N^(−2/d), under suitable smoothness. Monte Carlo’s finite-variance exponent stays −1/2.

**Intuition:** Grid points must be spread across every coordinate.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid`

---

### 275. With at most one million grid points in 8 dimensions, how many fit per axis?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only 5: 5⁸=390,625, while 6⁸ exceeds one million.

**Intuition:** A huge total grid can be sparse along each direction.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid-budget`

---

### 276. Why can ∫ over [0,1]ᵈ of exp(−Σxᵢ²) factor into one-dimensional integrals?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The integrand is a product of separate coordinate functions, and the domain is a product of intervals.

**Intuition:** Separable structure can remove a high-dimensional computation.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-product-integral`

---

### 277. If Monte Carlo error scales as N⁻¹ᐟ², what does 16 times the sample count buy?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About four times smaller error, under the stated scaling.

**Intuition:** Square-root convergence is slow.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-slope-interpretation`

---

### 278. Why can symmetric Metropolis–Hastings use an unnormalized target f?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its acceptance ratio is min(1,f(y)/f(x)). The target’s common normalizing constant cancels.

**Intuition:** Relative density can be enough to sample.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh`

---

### 279. Target ratio is 2, but reverse/forward proposal ratio is 0.2. What is MH acceptance?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

min(1,2×0.2)=0.4.

**Intuition:** A proposal’s directional bias must be corrected.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-asymmetric-acceptance`

---

### 280. How can symmetric MH avoid dividing tiny densities?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Compare log(U) with min(0,log f(y)−log f(x)).

**Intuition:** Log space avoids underflow without changing the decision.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-log-space`

---

### 281. Why is accepted MH probability flow symmetric between x and y?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It equals min(π(x)q(y given x),π(y)q(x given y)). Swapping x and y leaves it unchanged.

**Intuition:** Acceptance trims both directions to the smaller proposed flow.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-detailed-balance-proof`

---

### 282. Should a rejected MH step be saved as another copy of the current state?

**AM 207 · MCMC correctness · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. The repeated state records how long the chain stays there. Dropping repeats generally changes the sampled distribution.

**Intuition:** Waiting is part of the sample path.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-reject`

---

### 283. A chain spends 90% of steps at A. Could keeping only moves suggest 50%?

**AM 207 · MCMC correctness · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A two-state jump sequence alternates A,B regardless of unequal holding times.

**Intuition:** Discarding repeats discards residence-time information.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-jump-chain-example`

---

### 284. How do you propose a Cauchy step centered at x with scale γ?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use x+γtan(π(U−1/2)), with U in (0,1). With fixed γ, the proposal is symmetric.

**Intuition:** Heavy-tailed steps allow occasional large jumps.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy`

---

### 285. What are the Cauchy quartiles for center m and scale γ?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

m−γ, m, and m+γ.

**Intuition:** Scale controls the quartile spread, not a finite variance.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy-quantile`

---

### 286. Why avoid U=0 or 1 in inverse-Cauchy sampling?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Those quantiles are infinite because tan(±π/2) is unbounded.

**Intuition:** Finite random-number endpoints need deliberate handling.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-endpoint-tangent`

---

### 287. Does a 50% MH acceptance rate prove good mixing?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A chain can accept tiny, redundant moves while exploring a narrow ridge very slowly.

**Intuition:** Accepted movement is not necessarily useful exploration.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-mixing`

---

### 288. For covariance [[1,ρ],[ρ,1]], which directions are long and short when ρ>0?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The (1,1) direction has variance 1+ρ; (1,−1) has variance 1−ρ.

**Intuition:** Strong positive correlation makes a thin diagonal ridge.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-correlated-normal-axes`

---

### 289. Why can both tiny and huge random-walk steps be bad?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Tiny steps accept but crawl. Huge steps usually reject and leave the chain stuck.

**Intuition:** Tune for exploration, not acceptance alone.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-proposal-scale-extremes`

---

### 290. Why freeze a tuned MH proposal after warm-up?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A fixed proposal gives a fixed transition kernel. Continued adaptation requires extra validity conditions.

**Intuition:** Changing the sampler’s rules changes its mathematical justification.

</details>

Sources: [Lecture 03 · adaptive proposal discussion, companion caution](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=23)

Card ID: `am207-warmup-adaptation`

---

### 291. Can a stationary chain fail detailed balance?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A uniform three-state cycle is stationary but has one-way probability flow.

**Intuition:** Global balance need not balance every pair.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-balance`

---

### 292. For P=[[0.8,0.2],[0.3,0.7]], what is the stationary distribution?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(0.6,0.4), since 0.6×0.2=0.4×0.3.

**Intuition:** Stationary mass compensates for unequal escape probabilities.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationary-two-state`

---

### 293. Why does detailed balance imply stationarity?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Summing matched pairwise flows makes total incoming probability equal each state’s probability.

**Intuition:** Balanced pairs guarantee balanced totals.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-detailed-implies-stationary`

---

### 294. Does a stationary distribution guarantee convergence to it from any start?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A deterministic two-state alternation has a stationary uniform distribution but keeps oscillating from a fixed start.

**Intuition:** A preserved distribution need not attract every initial state.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationarity-not-convergence`

---

### 295. Why can merging Alice and Bob into “not Carol” destroy the Markov property?

**AM 207 · The Markov property · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

If Alice and Bob have different chances of sending to Carol, the hidden identity still matters. History can reveal that identity.

**Intuition:** A coarse state may forget information needed for prediction.

</details>

Sources: [HW2 · Q2(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumping`

---

### 296. Can two merged states have different internal transitions and still form a Markov coarse state?

**AM 207 · The Markov property · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if their total transition probability into each coarse block is the same.

**Intuition:** Coarse prediction needs block totals, not identical internal behavior.

</details>

Sources: [HW2 · Q2(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumpable-example`

---

### 297. What does whitening do to a Gaussian cloud?

**AM 207 · AM 207 × STAT 244 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract its mean and multiply by Σ⁻¹ᐟ². The cloud becomes centered with covariance I.

**Intuition:** Turn a tilted, stretched cloud into a round one.

</details>

Sources: [HW2 · Q11](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [HW2 · Q1](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `bridge-whiten`

---

### 298. Reaction rates are 2 and 3 per second. What is the mean wait for either event?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/(2+3)=0.2 seconds.

**Intuition:** Competing event rates add.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa`

---

### 299. SSA rates are (1,3,6). Which reaction does a uniform draw 0.35 select?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Reaction 2. The cumulative probability cutoffs are 0.1,0.4,1.

**Intuition:** Select events in proportion to their rates.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-event-number`

---

### 300. The next event is at 10.3, but simulation ends at 10. Which state do you report?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The state before that event. Nothing changes before the horizon.

**Intuition:** Do not let a future event alter an earlier record.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-horizon`

---

### 301. What happens when every SSA propensity is zero?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No further event can occur under the current time-homogeneous model. Stop or carry the state to the horizon.

**Intuition:** No allowed event means an absorbing state.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-zero-propensity`

---

### 302. For 2A→B with rate c per unordered pair, what is the propensity at count n?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

c n(n−1)/2.

**Intuition:** Count actual pairs, not a molecule paired with itself.

</details>

Sources: [Lecture 05 · propensity examples](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-combinatorial-propensity`

---

### 303. Why isn’t E[RF] always E[R]E[F]?

**AM 207 · Moment closure · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

E[RF]=E[R]E[F]+Cov(R,F). Correlation contributes an extra term.

**Intuition:** A nonlinear rate can depend on more than the means.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-closure`

---

### 304. E[R]=10, E[F]=4, Cov(R,F)=−6. What is E[RF]?

**AM 207 · Moment closure · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

34, not 40.

**Intuition:** Negative association lowers the expected product.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-covariance-gap`

---

### 305. With a uniform coin prior, what follows from 4 heads and 7 tails?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A Beta(5,8) posterior: add the counts to the Beta(1,1) prior parameters.

**Intuition:** Bayesian updating adds evidence to the prior.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-bayes`

---

### 306. How does Beta(a,b) update after h heads and t tails?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To Beta(a+h,b+t), for conditionally independent flips sharing one head probability.

**Intuition:** The prior and likelihood combine through their exponents.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-beta-update-general`

---

### 307. With a Beta(5,8) posterior, what is the next head probability?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

5/13, the posterior mean of θ.

**Intuition:** Prediction averages over remaining parameter uncertainty.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-posterior-predictive`

---

### 308. Why isn’t likelihood automatically a posterior?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A posterior multiplies likelihood by a prior, then normalizes over the parameter.

**Intuition:** Reversing a conditional requires Bayes’ rule.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-likelihood-not-posterior`

---

### 309. Does observing a coin sequence versus just its head count change the posterior shape?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not under the same shared-θ Bernoulli model and prior. The count likelihood adds a binomial factor independent of θ.

**Intuition:** Parameter-independent factors cancel in posterior normalization.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-sequence-versus-count`

---

### 310. Can a probability density be greater than 1?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Uniform(0,0.2) has density 5. Its total area is still 1.

**Intuition:** Probability is area, not density height.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-density`

---

### 311. If F(1)=0.2 and F(3)=0.8, what is P(1<X≤3)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.8−0.2=0.6.

**Intuition:** Subtract cumulative probabilities to isolate an interval.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-cdf-density`

---

### 312. For density f(x)=cx on [0,2], what is c?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/2, since ∫₀²cx dx=2c must equal 1.

**Intuition:** A density must have total area one.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-normalize-density`

---

### 313. Must you derive the distribution of g(X) to find its mean?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Use E[g(X)]=∫g(x)p(x)dx when it exists.

**Intuition:** Average the function directly over the original distribution.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-expectation-function`

---

### 314. A fair die result is even. What is the chance it exceeds 3?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

2/3. Of the remaining possibilities {2,4,6}, two exceed 3.

**Intuition:** Conditioning restricts the possibilities and renormalizes them.

</details>

Sources: [Lecture 01 · conditional probability example](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-conditional-probability`

---

### 315. Can two disjoint positive-probability events be independent?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Learning one occurred rules out the other.

**Intuition:** Mutually exclusive is not independent.

</details>

Sources: [Lecture 01 · probability rules, companion example](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-independence-vs-disjoint`

---

### 316. If Y=2X, why does its density get a factor 1/2?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The transformation doubles interval lengths. Density must halve to preserve probability.

**Intuition:** Stretch space, thin out density.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-jacobian`

---

### 317. If Y=−3X, is its density negative?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. fY(y)=fX(−y/3)/3. Use the absolute inverse derivative.

**Intuition:** Orientation changes cannot create negative probability.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-negative-scale`

---

### 318. For invertible Y=AX, what is the transformed density?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

fY(y)=fX(A⁻¹y)/abs(det(A)).

**Intuition:** The density compensates for the area or volume stretch.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-two-dimensional-jacobian`

---

### 319. For Y=X², why might one inverse root be insufficient?

**AM 207 · Noninjective transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both +√y and −√y map to y. Their probability contributions must be added.

**Intuition:** A many-to-one map collects mass from every valid branch.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-multiple-roots`

---

### 320. If X is uniform on [−1,1], what is P(X²≤y) for 0<y<1?

**AM 207 · Noninjective transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

√y, because X must lie between −√y and √y.

**Intuition:** Squaring folds both halves of the interval together.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-square-uniform-density`

---

### 321. Why do accepted rejection-sampling draws follow the target?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Proposal density q times acceptance p/(Mq) equals p/M. Renormalizing leaves p.

**Intuition:** Acceptance corrects the proposal’s shape.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection`

---

### 322. With normalized target p≤5q, what is the rejection sampler’s acceptance rate?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/5=20%.

**Intuition:** A loose envelope wastes proposals.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-envelope-efficiency`

---

### 323. With unnormalized f≤cq, how do you accept a proposal x?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With probability f(x)/(cq(x)). Accepted draws follow f normalized, even if its integral is unknown.

**Intuition:** You need a valid envelope, not necessarily the normalizing constant.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-unknown-normalizer`

---

### 324. How can samples from q estimate an expectation under p?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Average f(X)p(X)/q(X), provided q covers every contributing region.

**Intuition:** Weights compensate for sampling from the wrong distribution.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance`

---

### 325. p(A)=0.8 but q(A)=0.5. What weight corrects an A draw?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.8/0.5=1.6.

**Intuition:** Under-sampled outcomes need extra weight.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance-discrete`

---

### 326. Can importance weights recover a region the proposal never visits?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If q is zero where the target integrand contributes, that contribution is missing.

**Intuition:** Weights cannot repair absent coverage.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-missing-support`

---

### 327. Why divide a weighted sum by the sum of weights?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It cancels an unknown common scale. The resulting ratio is generally biased at finite sample size, though it can be consistent.

**Intuition:** Normalization trades an unknown constant for a random denominator.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-self-normalized`

---

### 328. Weights are (1,2,7), values are (0,1,1). What is the normalized weighted mean?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

9/10=0.9.

**Intuition:** Divide by total weight, not sample count.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-normalize-weights-number`

---

### 329. What does one normalized weight of 0.99 tell you?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Nearly the entire estimate comes from one sample. Nominal sample count greatly overstates the diversity of contributions.

**Intuition:** A thousand draws can effectively behave like one.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-weight-degeneracy`

---

### 330. Why can s/√N underestimate MCMC uncertainty?

**AM 207 · Monte Carlo error · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Positive dependence adds covariance terms to the average’s variance.

**Intuition:** Repeated nearby information is worth less than independent information.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-autocorrelation`

---

### 331. If integrated autocorrelation multiplies variance by 9, what is the effective size of 9000 draws?

**AM 207 · Monte Carlo error · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About 1000 for that estimated quantity, under the stationary mixing approximation.

**Intuition:** Effective size measures information, not stored rows.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-ar1-effective-size`

---

### 332. In a Poisson process with rate ν, what is the count by time t?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Poisson(νt), with mean νt.

**Intuition:** Rate times exposure gives the expected count.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson`

---

### 333. At 2 events per minute, what is the expected count in 30 seconds?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. Convert 30 seconds to half a minute before multiplying.

**Intuition:** Rates and times must use compatible units.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson-number`

---

### 334. Does independent Poisson increments mean N(1) and N(2) are independent?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. N(2) includes N(1). Only counts over disjoint intervals are independent.

**Intuition:** Cumulative totals share their earlier events.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-independent-increments`

---

### 335. If each independent trial succeeds with probability p, what is the mean trial of first success?

**AM 207 · Discrete waiting times · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/p, counting the successful trial.

**Intuition:** Rare success means a longer expected wait.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric`

---

### 336. With success chance 0.2, what is P(first success on trial 3)?

**AM 207 · Discrete waiting times · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.8²×0.2=0.128: two failures, then success.

**Intuition:** Specify the failures before the first success.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric-number`

---

### 337. With N parents producing two offspring each, why is sibling probability 1/(2N−1)?

**AM 207 · Population sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After choosing one offspring, exactly one of the other 2N−1 is its sibling.

**Intuition:** Count the remaining possibilities under the actual reproduction model.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-coalescent`

---

### 338. With 3 parents and two offspring each, what is the sampled pair’s sibling probability?

**AM 207 · Population sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/5, not 1/6.

**Intuition:** Large-population approximations need not be exact for small populations.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-finite-population-check`

---

### 339. Why scale a geometric waiting time of mean about 2N by 2N?

**AM 207 · Continuous limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It keeps the typical wait near one as N grows. The scaled survival probability approaches e⁻ᵗ.

**Intuition:** Rescaling reveals a nondegenerate limit.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-scaling-limit`

---

### 340. Two independent lineages mutate at rate ν for a fixed time t. What is their total count?

**AM 207 · Conditional distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Poisson(2νt). Independent Poisson counts add their means.

**Intuition:** Two lineages provide twice the exposure.

</details>

Sources: [HW1 · Q1(d–e)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-two-lineages`

---

### 341. Why can a random-time Poisson count have variance larger than its mean?

**AM 207 · Conditional distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exposure-time uncertainty adds extra variance. If K given T is Poisson(2νT), Var(K)=2νE[T]+4ν²Var(T).

**Intuition:** Random exposure creates overdispersion.

</details>

Sources: [HW1 · Q1(d–e)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-mixture-variance`

---

### 342. How do you invert a linear CDF segment?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Find U’s fraction through the segment’s CDF range, then move that same fraction through its x range.

**Intuition:** Interpolate in probability space first.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-piecewise-cdf`

---

### 343. A CDF joins (2,0.3) to (5,0.9). Where does U=0.5 map?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To x=3. The probability level is one-third through the segment, so move one-third from 2 to 5.

**Intuition:** Match fractions along the two axes.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-inverse-interpolation-number`

---

### 344. Does a flat part of a continuous CDF contain probability mass?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The cumulative probability does not increase there.

**Intuition:** A wide x interval can still have zero chance.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-cdf-flat-segment`

---

### 345. How does Box–Muller make two standard normals from two uniforms?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Set R=√(−2log U₁), θ=2πU₂, then return Rcosθ and Rsinθ, using independent uniforms in (0,1).

**Intuition:** Choose a Gaussian radius and an independent uniform angle.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-box-muller`

---

### 346. For the Box–Muller radius, what is P(R≤r) when r≥0?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1−e^(−r²/2).

**Intuition:** The radius is not uniform; its tail decays with squared distance.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-cdf`

---

### 347. What distribution does R²/2 have in Box–Muller?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exponential with rate 1, since R²/2=−log U.

**Intuition:** A Gaussian squared radius connects directly to an exponential wait.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-square-exponential`

---

### 348. What fraction of uniform square proposals miss the unit disk?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1−π/4≈21.5%.

**Intuition:** Rejection cost follows the area outside the accepted region.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-marsaglia`

---

### 349. How does a uniform disk point become a standard normal pair?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With S=V₁²+V₂² in (0,1), multiply (V₁,V₂) by √(−2log S/S).

**Intuition:** Keep the angle; replace the radius distribution.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-polar-transform`

---

### 350. If acceptance probability is π/4, how many proposals are needed on average?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

4/π≈1.27 per accepted point.

**Intuition:** Expected attempts are the reciprocal of success probability.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-rejection-efficiency`

---

### 351. How do you get a two-step transition probability?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Sum products over every intermediate state: (P²)ᵢₖ=ΣⱼPᵢⱼPⱼₖ.

**Intuition:** Multiply along paths, add across alternatives.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-ck`

---

### 352. With current states in P’s rows, how does a row distribution advance?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

p_next=pP. For a column distribution, use Pᵀp.

**Intuition:** Keep your vector orientation consistent.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-transition-matrix-orientation`

---

### 353. For P=[[0.8,0.2],[0.3,0.7]], what is the two-step chance A→B?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.8×0.2+0.2×0.7=0.30.

**Intuition:** Include both possible intermediate states.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-two-step-number`

---

### 354. What is the basic structure of a master equation?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Probability inflow minus probability outflow for each state.

**Intuition:** Track probability like fluid moving between containers.

</details>

Sources: [Lecture 05 · p. 6](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-master`

---

### 355. Why should all master-equation derivatives sum to zero?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every transition removes probability from one state and adds the same amount to another.

**Intuition:** Internal flows cannot create total probability.

</details>

Sources: [Lecture 05 · p. 6](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-probability-conservation`

---

### 356. In pure death with rate γn, how does probability enter state zero?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

From state one at rate γp₁. There is no outflow from zero.

**Intuition:** You cannot lose a particle you do not have.

</details>

Sources: [Lecture 04 · radioactive decay, pp. 61–63](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=62)

Card ID: `am207-death-boundary`

---

### 357. What does a jump-process generator measure?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The rate-weighted change of a function: Lf(x)=Σⱼaⱼ(x)[f(x+νⱼ)−f(x)].

**Intuition:** Change per event times events per time gives expected local change.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator`

---

### 358. Why must a jump generator send the constant function 1 to zero?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every jump changes 1 by zero. This is a quick check of probability conservation.

**Intuition:** A jump cannot change a constant.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator-constant`

---

### 359. If each particle dies at rate γ, how does the mean count change?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

m′=−γm, so m(t)=m(0)e^(−γt). This mean equation is exact because the drift is linear.

**Intuition:** Random paths can have a simple deterministic mean.

</details>

Sources: [Lecture 04 · radioactive decay mean](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=63)

Card ID: `am207-death-mean`

---

### 360. How does a swap increase the left urn’s blue count?

**AM 207 · Transition rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It must choose green from the left and blue from the right. Thus w₊(n)=λ(N−n)(B−n)/N².

**Intuition:** Multiply the choices that produce the desired change.

</details>

Sources: [HW2 · Q3(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-rates`

---

### 361. Why must w₋(0)=0 in the urn model?

**AM 207 · Transition rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left urn has no blue ball to lose.

**Intuition:** Rates must respect the state’s physical boundaries.

</details>

Sources: [HW2 · Q3(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-boundaries`

---

### 362. Why does the urn model’s mean equation close exactly?

**AM 207 · Moment equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its net drift is linear: m′=(λ/N)(B−2m). No unknown higher moment appears.

**Intuition:** Linear drift lets expectation pass through without approximation.

</details>

Sources: [HW2 · Q3(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-mean`

---

### 363. An urn mean starts at 50 and relaxes toward 25 with time constant 25 seconds. What is it after 25 seconds?

**AM 207 · Moment equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

25+25/e≈34.2.

**Intuition:** One time constant removes about 63% of the initial gap.

</details>

Sources: [HW2 · Q3(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-timescale-number`

---

### 364. Why is the equilibrium urn count hypergeometric rather than binomial?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left urn samples N balls without replacement from 2N balls with a fixed total of B blue.

**Intuition:** Fixed totals make the color draws dependent.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-stationary`

---

### 365. With 2 balls per urn and 2 blue total, what are the equilibrium left-blue probabilities?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For 0,1,2 blue: 1/6, 4/6, 1/6.

**Intuition:** There are more allocations with one blue in each urn.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-hypergeometric-small`

---

### 366. How do birth–death rates determine neighboring stationary probabilities?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

πₙ₊₁/πₙ=w₊(n)/w₋(n+1), when the denominator is positive. Normalize the resulting weights.

**Intuition:** Neighboring flows must balance at equilibrium.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-birth-death-recursion`

---

### 367. Why can a per-jump histogram misrepresent continuous-time occupancy?

**AM 207 · Simulation diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fast-exit states generate many visits but little residence time. Weight by holding times instead.

**Intuition:** Count time spent, not just arrivals.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-time-histogram`

---

### 368. A path spends 9 seconds at A and 1 at B. What are its time fractions?

**AM 207 · Simulation diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

90% and 10%, even if it visited each state once.

**Intuition:** Equal visits do not imply equal occupancy.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-holding-time-number`

---

### 369. What count change does G+R→2R produce in (G,R,F)?

**AM 207 · Reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(−1,+1,0): one grass unit becomes one additional rabbit.

**Intuition:** Stoichiometry describes the event’s jump, not its frequency.

</details>

Sources: [HW2 · Q4](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-stoichiometry`

---

### 370. How do reaction channels combine into the expected rabbit-count rate?

**AM 207 · Reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add each rabbit jump times its propensity, then take expectations: (β/N)E[GR]−μE[R]−(γ/N)E[RF].

**Intuition:** Birth adds; death and predation subtract.

</details>

Sources: [HW2 · Q4](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-reaction-drift`

---

### 371. What is the rabbit equation in the mean-field grass–rabbit–fox model?

**AM 207 · Mean-field dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r′=βgr−μr−γrf. It replaces random product moments with products of densities.

**Intuition:** Growth comes from food; losses come from death and predators.

</details>

Sources: [HW2 · Q4(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-meanfield`

---

### 372. At a positive fox equilibrium, what rabbit density is needed?

**AM 207 · Mean-field dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r*=δ/γ, because fox growth f(γr−δ) must vanish with f>0.

**Intuition:** The prey density must balance predator birth and death.

</details>

Sources: [HW2 · Q4(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-coexistence-condition`

---

### 373. Why can a stochastic population go extinct while its mean-field ODE stays positive?

**AM 207 · Stochastic vs deterministic models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The last individual can disappear in a discrete event. An absorbing zero state can then prevent recovery.

**Intuition:** A smooth density cannot fully describe losing the last individual.

</details>

Sources: [HW2 · Q4(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-extinction`

---

### 374. In a coupled Delta–Notch grid, does each cell get its own independent SSA clock step?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not in the direct global SSA. Choose one event from all cells’ channels using their combined rate.

**Intuition:** Coupled cells share one global event timeline.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-notch`

---

### 375. Why must the Delta–Notch boundary rule be implemented exactly?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Zero-valued fictitious boundary cells and periodic wrapping produce different neighbor signals.

**Intuition:** Boundary conditions are part of the model, not a plotting detail.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-neighbor-average`

---

### 376. Why set production rate to zero at the maximum count instead of clipping afterward?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes the forbidden event from both event selection and total rate. Clipping after selection can distort the timing.

**Intuition:** Enforce constraints in the event law.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-bounded-propensities`

---

### 377. What makes tau-leaping approximate?

**AM 207 · Accelerated simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It holds propensities roughly constant during a time step and samples how many reactions occur.

**Intuition:** Leap over events only while their rates barely change.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau`

---

### 378. With propensity 12 per second and step 0.1 seconds, what reaction count does tau-leaping draw?

**AM 207 · Accelerated simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Poisson(1.2), with mean and variance 1.2.

**Intuition:** Rate times step length gives expected event count.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-count-number`

---

### 379. What is the MLE of an exponential rate from positive waiting times?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

N/Σtᵢ, the reciprocal of the sample mean.

**Intuition:** More events per observed time imply a higher rate.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-likelihood`

---

### 380. Waiting times are 0.2, 0.3, and 0.5 seconds. What is the exponential-rate MLE?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3 events divided by 1 second: 3 per second.

**Intuition:** Estimate the rate from total count and total exposure.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-exp-mle-number`

---

### 381. Why prefer raw-data likelihood over fitting an exponential histogram?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The histogram changes with bin edges and widths. Raw-data likelihood avoids that arbitrary binning choice.

**Intuition:** Binning can change an estimate without changing the data.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-histogram-fit`

---

### 382. If θ is uniform on (0,1), are its log-odds uniform too?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The transformed density includes a Jacobian and becomes θ(1−θ) in log-odds coordinates.

**Intuition:** “Uniform” depends on how you parameterize uncertainty.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-prior`

---

### 383. A Gamma(a,b) shape–rate prior meets N exponential waits totaling T. What is the posterior?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Gamma(a+N,b+T).

**Intuition:** Counts update shape; exposure updates rate.

</details>

Sources: [Lecture 06 · Bayesian exponential example, pp. 61–64](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=61)

Card ID: `am207-gamma-exponential`

---

### 384. With prior proportional to 1 for ν>0 and waits totaling T>0, what is the posterior?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Gamma(N+1,T) in shape–rate form. The flat prior is improper, but this posterior is proper.

**Intuition:** An improper prior requires a separate posterior-normalization check.

</details>

Sources: [Lecture 06 · flat-prior exponential example](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=62)

Card ID: `am207-flat-rate-posterior`

---

### 385. What does a 95% Bayesian credible interval mean?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It contains 95% of posterior probability under the chosen prior and likelihood.

**Intuition:** The probability statement is conditional on the model and observed data.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-credible-interval-meaning`

---

### 386. A walk jumps ±Δx, each at rate 1/(2τ). What is its diffusion coefficient?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

D=Δx²/(2τ).

**Intuition:** Spreading depends on squared jump size per unit time.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion`

---

### 387. If jump size halves, how must τ change to keep diffusion fixed?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Divide τ by four.

**Intuition:** Halving length requires quadrupling the event frequency.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-scaling`

---

### 388. How does a diffusing particle’s typical displacement grow with time?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

As √t: in one dimension, RMS displacement is √(2Dt).

**Intuition:** Random steps spread more slowly than steady directed motion.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-msd`

---

### 389. What changes between frequentist and Bayesian views of an unknown parameter?

**AM 207 · Probability interpretations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Frequentist inference treats it as fixed; Bayesian inference represents uncertainty about it with a distribution.

**Intuition:** Both use probability rules, but assign uncertainty differently.

</details>

Sources: [Lecture 01 · pp. 19–23 and p. 45](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=23)

Card ID: `am207-probability-views`

---

### 390. What does uᵀv compute?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum of coordinate products, Σuᵢvᵢ. Geometrically it equals ‖u‖‖v‖cosθ.

**Intuition:** The dot product measures alignment.

</details>

Sources: [Linear algebra notes · p. 1](../courses/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-inner-product`

---

### 391. How do you get Euclidean length from a dot product?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

‖u‖=√(uᵀu).

**Intuition:** A vector dotted with itself gives squared length.

</details>

Sources: [Linear algebra notes · p. 1](../courses/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-vector-length`

---

### 392. What is (3,4) dotted with (−1,7)?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

−3+28=25.

**Intuition:** Multiply matching coordinates, then add.

</details>

Sources: [Linear algebra notes · p. 1](../courses/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-inner-example`

---

### 393. What is the difference between uᵀv and uvᵀ?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For equally sized vectors, the first is a scalar. The second is a matrix of pairwise coordinate products.

**Intuition:** Inner collapses; outer expands.

</details>

Sources: [Linear algebra notes · p. 2](../courses/stat244/lecnotes/notes-linalg.pdf#page=2)

Card ID: `stat244-outer-not-inner`

---

### 394. What is the span of a set of vectors?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every linear combination of those vectors.

**Intuition:** Span is everything your ingredients can build.

</details>

Sources: [Linear algebra notes · p. 2](../courses/stat244/lecnotes/notes-linalg.pdf#page=2)

Card ID: `stat244-span-definition`

---

### 395. What makes a spanning set a basis?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its vectors are also linearly independent.

**Intuition:** A basis spans the space without redundancy.

</details>

Sources: [Linear algebra notes · p. 3](../courses/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-basis-definition`

---

### 396. How do you test linear independence using Xc=0?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The columns are independent exactly when c=0 is the only solution.

**Intuition:** No nontrivial combination cancels out.

</details>

Sources: [Linear algebra notes · p. 3](../courses/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-independence-definition`

---

### 397. What does rank(X) count?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The dimension of its column space, equivalently its row space.

**Intuition:** Rank counts independent directions represented by the matrix.

</details>

Sources: [Linear algebra notes · p. 3](../courses/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-rank-definition`

---

### 398. What is the null space of X?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All coefficient vectors v for which Xv=0.

**Intuition:** These input directions disappear under the map.

</details>

Sources: [Linear algebra notes · p. 4](../courses/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-null-definition`

---

### 399. How do you project y onto a nonzero vector u’s span?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use u(uᵀy)/(uᵀu).

**Intuition:** Measure alignment with u, then reconstruct that component.

</details>

Sources: [Linear algebra notes · p. 8](../courses/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-projection-line`

---

### 400. What does XᵀX=I say about X’s columns?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They have unit length and are pairwise perpendicular.

**Intuition:** The Gram matrix records column lengths and overlaps.

</details>

Sources: [Linear algebra notes · p. 8](../courses/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-orthonormal-columns`

---

### 401. If a tall Q has QᵀQ=I, must QQᵀ=I?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. QQᵀ projects onto Q’s column space, which may be smaller than observation space.

**Intuition:** A left inverse need not be a two-sided inverse.

</details>

Sources: [Linear algebra notes · p. 8](../courses/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-rectangular-not-inverse`

---

### 402. Why is the split into W and W⊥ components unique?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The difference between two candidate splits would lie in both W and W⊥. Only zero can do that.

**Intuition:** Perpendicular complementary spaces overlap only at zero.

</details>

Sources: [Linear algebra notes · p. 7](../courses/stat244/lecnotes/notes-linalg.pdf#page=7)

Card ID: `stat244-orthogonal-decomposition-unique`

---

### 403. What does positive semidefinite mean for a symmetric A?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

vᵀAv≥0 for every v. Positive definite requires strict positivity for every nonzero v.

**Intuition:** No direction has negative quadratic energy.

</details>

Sources: [Linear algebra notes · p. 9](../courses/stat244/lecnotes/notes-linalg.pdf#page=9)

Card ID: `stat244-psd-definition`

---

### 404. What does Cholesky express a positive-definite matrix as?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

LLᵀ, with L lower triangular and positive diagonal.

**Intuition:** A positive quadratic can be built from a triangular factor.

</details>

Sources: [Linear algebra notes · p. 10](../courses/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-cholesky-role`

---

### 405. What is the spectral decomposition of a real symmetric matrix?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A=QΛQᵀ, with orthonormal eigenvectors in Q and eigenvalues in Λ.

**Intuition:** Rotate to coordinates where the action is diagonal.

</details>

Sources: [Linear algebra notes · p. 10](../courses/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-spectral-decomposition`

---

### 406. How do eigenvalues reveal whether a symmetric matrix is positive definite?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All must be positive. Nonnegative eigenvalues give positive semidefiniteness.

**Intuition:** Check the quadratic energy along each eigen-direction.

</details>

Sources: [Linear algebra notes · p. 10](../courses/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-positive-eigenvalues`

---

### 407. Why is every covariance matrix positive semidefinite?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

vᵀΣv=Var(vᵀY)≥0.

**Intuition:** Every linear combination must have nonnegative variance.

</details>

Sources: [Linear algebra notes · p. 11](../courses/stat244/lecnotes/notes-linalg.pdf#page=11)

Card ID: `stat244-covariance-psd`

---

### 408. Does rotating by covariance eigenvectors fully whiten data?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes covariance between coordinates, but their variances remain the eigenvalues. Whitening also divides by their square roots when positive.

**Intuition:** Decorrelation removes tilt; whitening also removes unequal scales.

</details>

Sources: [Linear algebra notes · p. 11](../courses/stat244/lecnotes/notes-linalg.pdf#page=11)

Card ID: `stat244-decorrelate-not-whiten`

---

### 409. What is the compact rank-r SVD?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

X=UᵣDᵣVᵣᵀ, retaining the r positive singular values.

**Intuition:** Rotate input, stretch r directions, rotate output.

</details>

Sources: [Linear algebra notes · p. 13](../courses/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-form`

---

### 410. Which SVD vectors span C(X)?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left singular vectors corresponding to positive singular values.

**Intuition:** Left singular vectors describe reachable observation directions.

</details>

Sources: [Linear algebra notes · p. 13](../courses/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-column-space`

---

### 411. Which SVD vectors span C(Xᵀ)?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The right singular vectors corresponding to positive singular values.

**Intuition:** Right singular vectors describe visible coefficient directions.

</details>

Sources: [Linear algebra notes · p. 13](../courses/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-row-space`

---

### 412. How does SVD give the pseudoinverse?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

X⁺=VᵣDᵣ⁻¹Uᵣᵀ. Invert only the positive singular values.

**Intuition:** Undo the stretches that actually exist.

</details>

Sources: [Linear algebra notes · p. 13](../courses/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-pseudoinverse`

---

### 413. What makes the Moore–Penrose inverse unique beyond XGX=X?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It also satisfies GXG=G, and both XG and GX are symmetric.

**Intuition:** The extra conditions select canonical orthogonal projections.

</details>

Sources: [Linear algebra notes · p. 5](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-moore-penrose-conditions`

---

### 414. Does n≥p guarantee identifiable regression coefficients?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The design columns must also be independent.

**Intuition:** Enough rows do not guarantee enough distinct information.

</details>

Sources: [Linear algebra notes · p. 14](../courses/stat244/lecnotes/notes-linalg.pdf#page=14)

Card ID: `stat244-more-observations-not-rank`

---

### 415. What is intrinsic aliasing?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Column dependence built into the model specification, such as an intercept plus all group indicators.

**Intuition:** The redundancy comes from the chosen description.

</details>

Sources: [Linear algebra notes · p. 15](../courses/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-intrinsic-aliasing`

---

### 416. What is extrinsic aliasing?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Column dependence caused by the collected data, such as a group level never being observed.

**Intuition:** The design can lose information before fitting begins.

</details>

Sources: [Linear algebra notes · p. 15](../courses/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-extrinsic-aliasing`

---

### 417. Why is an unobserved group’s mean not recoverable from its indicator column?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That indicator is all zero, so changing its coefficient changes no observed mean.

**Intuition:** An absent group contributes no direct information.

</details>

Sources: [Linear algebra notes · p. 15](../courses/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-empty-level`

---

### 418. Why not encode an unordered three-level factor as 1,2,3 in one column?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That imposes an ordered, equally spaced linear effect. Separate contrasts allow unrestricted level differences.

**Intuition:** Numeric labels can accidentally impose a model.

</details>

Sources: [Least-squares theory notes · p. 1](../courses/stat244/lecnotes/notes-lstheory.pdf#page=1)

Card ID: `stat244-quantitative-vs-factor`

---

### 419. Can a linear model contain x²?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. β₀+β₁x+β₂x² is linear in its unknown coefficients.

**Intuition:** A curved response can still use linear-model theory.

</details>

Sources: [Least-squares theory notes · p. 1](../courses/stat244/lecnotes/notes-lstheory.pdf#page=1)

Card ID: `stat244-linear-in-parameters`

---

### 420. What do polynomial contrasts test for ordered factor levels?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Linear, quadratic, and higher-order patterns across the specified level scores.

**Intuition:** Trend questions differ from arbitrary pairwise differences.

</details>

Sources: [Least-squares theory notes · p. 6](../courses/stat244/lecnotes/notes-lstheory.pdf#page=6)

Card ID: `stat244-polynomial-contrasts`

---

### 421. Why does level spacing matter for polynomial contrasts?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The trends depend on the numeric scores assigned to levels. Equal spacing is a modeling choice.

**Intuition:** Ordering alone does not specify distances.

</details>

Sources: [Least-squares theory notes · p. 6](../courses/stat244/lecnotes/notes-lstheory.pdf#page=6)

Card ID: `stat244-polynomial-spacing`

---

### 422. What is the spherical Gaussian linear model?

**STAT 244 · Normal linear model · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

y∼N(Xβ,σ²I): mean in C(X), common variance, and independent Gaussian errors.

**Intuition:** The design describes the mean; σ²I describes noise.

</details>

Sources: [Least-squares theory notes · p. 8](../courses/stat244/lecnotes/notes-lstheory.pdf#page=8)

Card ID: `stat244-normal-model`

---

### 423. What is the central mean assumption of a linear model?

**STAT 244 · Normal linear model · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The true mean vector belongs to C(X).

**Intuition:** The model must be able to express the expected signal.

</details>

Sources: [Least-squares theory notes · p. 8](../courses/stat244/lecnotes/notes-lstheory.pdf#page=8)

Card ID: `stat244-mean-in-space`

---

### 424. For full-column-rank X, what is β̂OLS?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(XᵀX)⁻¹Xᵀy. Numerically, solve with QR or SVD rather than explicitly forming the inverse.

**Intuition:** The formula identifies the estimator; a solver computes it.

</details>

Sources: [Least-squares theory notes · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-ols-formula`

---

### 425. Why is OLS called linear in the response?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With fixed X, β̂ is a fixed matrix times y.

**Intuition:** Linearity here concerns y, not the predictor shapes.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-ols-linear`

---

### 426. Under Var(y)=σ²I, what is Var(β̂) for full-rank X?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²(XᵀX)⁻¹.

**Intuition:** Weak design directions create large coefficient uncertainty.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-ols-covariance`

---

### 427. Under the correct spherical linear model, what are E[ŷ] and Var(ŷ)?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

E[ŷ]=Xβ and Var(ŷ)=σ²H.

**Intuition:** The fit is unbiased for the mean but still random.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-fit-covariance`

---

### 428. Why do OLS and Gaussian maximum likelihood choose the same β?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For fixed positive σ², maximizing likelihood is equivalent to minimizing residual SSE.

**Intuition:** Gaussian likelihood penalizes squared errors.

</details>

Sources: [Least-squares theory notes · p. 13](../courses/stat244/lecnotes/notes-lstheory.pdf#page=13)

Card ID: `stat244-normal-ols-mle`

---

### 429. Can the fitted mean be closer to observed y than the true mean is?

**STAT 244 · Projection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Least squares picks the closest allowed mean, and can absorb some sample noise.

**Intuition:** Better training fit does not mean closer to the true signal.

</details>

Sources: [Least-squares theory notes · p. 16](../courses/stat244/lecnotes/notes-lstheory.pdf#page=16)

Card ID: `stat244-fit-closer-than-truth`

---

### 430. With an intercept, how does centered total variation split?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

TSS=explained sum of squares+residual SSE.

**Intuition:** The intercept separates the mean from variation around it.

</details>

Sources: [Least-squares theory notes · p. 16](../courses/stat244/lecnotes/notes-lstheory.pdf#page=16)

Card ID: `stat244-centered-decomposition`

---

### 431. What is R² for OLS with an intercept and nonzero TSS?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1−SSE/TSS.

**Intuition:** R² measures the fraction of centered training variation fitted.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-definition`

---

### 432. Why can training R² rise when you add a useless predictor?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The larger space can fit extra noise and cannot increase minimized SSE.

**Intuition:** Training fit rewards flexibility even without new signal.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-monotone`

---

### 433. Does a high R² establish a causal explanation?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It summarizes fit, not the assumptions needed for causal inference.

**Intuition:** Explaining variation is not establishing causation.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-not-causal`

---

### 434. How is R² related to the correlation between y and ŷ?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For OLS with an intercept and nonconstant fit, R²=Corr(y,ŷ)².

**Intuition:** Projection geometry connects explained variation to alignment.

</details>

Sources: [Least-squares theory notes · p. 19](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-fit-correlation`

---

### 435. For known positive-definite V and full-rank X, what is β̂GLS?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(XᵀV⁻¹X)⁻¹XᵀV⁻¹y.

**Intuition:** Weight by precision before solving for coefficients.

</details>

Sources: [Least-squares theory notes · p. 21](../courses/stat244/lecnotes/notes-lstheory.pdf#page=21)

Card ID: `stat244-gls-estimator`

---

### 436. What is Var(β̂GLS) when Var(y)=σ²V?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²(XᵀV⁻¹X)⁻¹, assuming full column rank.

**Intuition:** The precision-weighted design determines uncertainty.

</details>

Sources: [Least-squares theory notes · p. 21](../courses/stat244/lecnotes/notes-lstheory.pdf#page=21)

Card ID: `stat244-gls-covariance`

---

### 437. Why can the GLS hat matrix be idempotent but not symmetric?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It projects using weighted geometry. In ordinary Euclidean geometry, that projection can be oblique.

**Intuition:** Perpendicularity depends on the chosen inner product.

</details>

Sources: [Least-squares theory notes · p. 22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-gls-oblique`

---

### 438. If Y is Gaussian, is AY+b Gaussian?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, possibly degenerate. Its mean is Aμ+b and covariance AΣAᵀ.

**Intuition:** Linear transformations preserve the Gaussian family.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-normal-linear-map`

---

### 439. What does (y−μ)ᵀΣ⁻¹(y−μ) measure?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Squared distance from the mean after accounting for covariance.

**Intuition:** A deviation matters relative to its typical direction and scale.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-mahalanobis-distance`

---

### 440. For a positive integer n, what is Γ(n)?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(n−1)!, not n!.

**Intuition:** The Gamma function extends factorial with a one-step shift.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gamma-integer`

---

### 441. What recursion does the Gamma function satisfy?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Γ(x+1)=xΓ(x), for x>0.

**Intuition:** It extends the factorial recursion to nonintegers.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gamma-recursion`

---

### 442. What is the square of a standard normal distributed as?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

χ² with one degree of freedom.

**Intuition:** One independent squared Gaussian contributes one degree of freedom.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-chi-square-one`

---

### 443. How do you construct tᵣ from Gaussian and chi-squared variables?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Z/√(W/r), with Z∼N(0,1), W∼χ²ᵣ, and independence.

**Intuition:** A noisy variance estimate rescales a standard Gaussian.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-t-construction`

---

### 444. How do two independent chi-squared variables produce an F distribution?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(W/p)/(U/q) has F(p,q) when W∼χ²ₚ and U∼χ²q.

**Intuition:** Compare independent variance-like quantities after scaling by df.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-f-construction`

---

### 445. If T∼tᵣ, what is T² distributed as?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

F with degrees of freedom (1,r).

**Intuition:** Squaring a one-dimensional t test gives the matching F test.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-t-squared-f`

---

### 446. Is a ratio of any two scaled chi-squared variables F-distributed?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The standard construction requires independence.

**Intuition:** Marginal distributions alone do not determine a ratio’s law.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-f-independence`

---

### 447. Under a full-rank Gaussian linear model, what distribution does β̂ have?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

N(β,σ²(XᵀX)⁻¹).

**Intuition:** OLS is a linear transformation of Gaussian data.

</details>

Sources: [Least-squares inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-coefficient-gaussian`

---

### 448. What is the estimated SE of aᵀβ̂?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

s√(aᵀ(XᵀX)⁻¹a), for full-rank OLS.

**Intuition:** A contrast’s uncertainty includes covariance between coefficients.

</details>

Sources: [Least-squares inference notes · p. 12](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-contrast-se`

---

### 449. Why is a joint coefficient confidence region generally an ellipsoid?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Some coefficient combinations are measured more precisely than others, as encoded by XᵀX.

**Intuition:** Uncertainty has direction as well as size.

</details>

Sources: [Least-squares inference notes · p. 11](../courses/stat244/lecnotes/notes-lsinf.pdf#page=11)

Card ID: `stat244-confidence-ellipsoid`

---

### 450. Why scale predictors before interpreting a condition number?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Units alone can create large stretch differences. Scaling helps separate unit choices from near-dependence.

**Intuition:** Meters versus millimeters should not masquerade as new information.

</details>

Sources: [Least-squares inference notes · p. 15](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-condition-representation`

---

### 451. Why use a generalized VIF for a factor?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A factor can occupy several contrast columns. GVIF assesses the block rather than one arbitrary coding column.

**Intuition:** A multi-direction term needs a multi-direction diagnostic.

</details>

Sources: [Least-squares inference notes · p. 16](../courses/stat244/lecnotes/notes-lsinf.pdf#page=16)

Card ID: `stat244-gvif-purpose`

---

### 452. How should you choose how many PCR components to keep for prediction?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use an appropriate validation procedure, fitting preprocessing inside training folds.

**Intuition:** Large variance explained in X is not the final prediction criterion.

</details>

Sources: [Least-squares inference notes · p. 24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pcr-component-choice`

---

### 453. What can curvature in residuals versus fitted values suggest?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The mean model may be missing a nonlinear pattern.

**Intuition:** Residual structure is signal the mean model left behind.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-curve`

---

### 454. What can a widening residual funnel suggest?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Nonconstant error variance.

**Intuition:** The noise scale may depend on the predicted level.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-funnel`

---

### 455. Does a pattern-free residual plot prove all model assumptions?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It may fail to reveal problems and does not directly check every assumption.

**Intuition:** Diagnostics provide evidence, not certification.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-clean`

---

### 456. Which plot more directly examines a normal-error assumption?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A suitable residual QQ plot, rather than only residuals versus fitted values.

**Intuition:** Different diagnostics target different assumptions.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-qq-role`

---

### 457. What is an observation’s leverage hᵢᵢ?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its diagonal entry in H. It measures how unusual its predictor position is relative to the design.

**Intuition:** Leverage concerns x, not an unusual response y.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-definition`

---

### 458. Can changing y alone change leverage?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. H depends only on X.

**Intuition:** Predictor geometry determines leverage before responses are observed.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-response`

---

### 459. What range can an OLS leverage take?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Between 0 and 1.

**Intuition:** A projector cannot retain more than the entire coordinate direction.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-bounds`

---

### 460. What is average leverage for a rank-r design with n rows?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r/n, because Σhᵢᵢ=r.

**Intuition:** Total fitted dimension is distributed across observations.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-average`

---

### 461. How does yᵢ affect its own fitted value?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

∂ŷᵢ/∂yᵢ=hᵢᵢ.

**Intuition:** High leverage gives an observation more pull on its own fit.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-leverage-sensitivity`

---

### 462. Under spherical errors, what is Var(e)?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²(I−H).

**Intuition:** Fitting changes both residual variances and their correlations.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-covariance`

---

### 463. Why do high-leverage observations have smaller raw residual variance?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Var(eᵢ)=σ²(1−hᵢᵢ). The fit follows them more closely.

**Intuition:** A small residual need not mean little influence.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-variance`

---

### 464. Are OLS residuals independent just because the original errors are?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Generally not. Their off-diagonal covariances are −σ²hᵢⱼ.

**Intuition:** Fitting links observations through the shared model.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-correlated`

---

### 465. How do you standardize a residual for noise and leverage?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

rᵢ=eᵢ/[s√(1−hᵢᵢ)], when the denominator is positive.

**Intuition:** Raw residuals do not all have the same variance.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-internal-studentization`

---

### 466. Why isn’t an internally studentized residual exactly t-distributed?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its numerator and the full-data estimate s are dependent.

**Intuition:** The usual t construction needs an independent noise estimate.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-internal-not-t`

---

### 467. What changes for an externally studentized residual?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use s estimated with observation i omitted: eᵢ/[s₍ᵢ₎√(1−hᵢᵢ)].

**Intuition:** Estimate noise without the point being checked.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-external-studentization`

---

### 468. Under Gaussian errors, what is the deleted-residual t reference?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

t with n−p−1 df for a fixed observation, assuming the deleted design keeps rank p.

**Intuition:** Deleting one observation costs one residual degree of freedom.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-external-t-df`

---

### 469. Why adjust when testing every observation for outlyingness?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Many individual tests increase the chance of at least one false flag.

**Intuition:** Searching everywhere is different from checking one prespecified point.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-outlier-multiple-testing`

---

### 470. How does Bonferroni adjust n residual-test p-values?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply each raw p-value by n and cap at 1.

**Intuition:** Spend the error budget across the whole search.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-bonferroni-residuals`

---

### 471. Does Bonferroni require independent residual tests?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its familywise-error bound also holds under dependence.

**Intuition:** The union bound does not need independence.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-bonferroni-dependence`

---

### 472. Which reference quantiles match externally studentized residuals under the Gaussian model?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

t quantiles with n−p−1 df, subject to the deletion assumptions.

**Intuition:** Use the distribution of the actual diagnostic you plotted.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-qq-studentized`

---

### 473. What happens to XᵀX when observation i is removed?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract xᵢᵀxᵢ.

**Intuition:** One deleted row is a rank-one update to the Gram matrix.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-delete-gram`

---

### 474. Why is Sherman–Morrison–Woodbury useful for deletion diagnostics?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It updates an inverse after a low-rank change instead of recomputing it from scratch, when the needed inverses exist.

**Intuition:** Reuse the full fit to study many nearby fits.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-smw-purpose`

---

### 475. How is the leave-one-out prediction residual related to the full-fit residual?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is eᵢ/(1−hᵢᵢ), provided deleting the point preserves rank.

**Intuition:** The full fit hides some error by fitting the point itself.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-deleted-residual`

---

### 476. Why can deleting a high-leverage point cause a large change?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Deletion formulas divide by 1−hᵢᵢ, which becomes small.

**Intuition:** A point with strong pull can be hard to replace.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-delete-high-leverage`

---

### 477. What warning does hᵢᵢ=1 give for ordinary deletion formulas?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The denominator vanishes; deleting that observation loses a design direction.

**Intuition:** Some observations uniquely support part of the model.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-leverage-one`

---

### 478. How do outlyingness and leverage differ?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Outlyingness is an unusual response given x; leverage is an unusual x.

**Intuition:** A point can be unusual in either axis of the modeling problem.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-outlier-vs-leverage`

---

### 479. What does influence ask?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How much the fitted model changes when an observation is removed.

**Intuition:** Influence is about the fit’s dependence on a point.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-influence-definition`

---

### 480. Must a high-leverage point be highly influential?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its response may agree closely with the rest of the fitted pattern.

**Intuition:** Potential pull is different from actual disruption.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-leverage-not-influence`

---

### 481. What does Cook’s distance summarize?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The coefficient change after deleting a point, scaled by coefficient uncertainty and model dimension.

**Intuition:** Compare deletion effects on a common uncertainty scale.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-definition`

---

### 482. How does Cook’s distance combine residual size and leverage?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Dᵢ=(rᵢ²/p)hᵢᵢ/(1−hᵢᵢ), using the internally studentized residual.

**Intuition:** Large residuals and high leverage reinforce each other.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-formula`

---

### 483. Does a large Cook’s distance automatically justify deleting an observation?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Investigate data quality and model sensitivity; the point may be valid and important.

**Intuition:** A diagnostic flag starts an investigation, not an automatic deletion.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-not-delete`

---

### 484. What distinguishes DFFITS from DFBETAS?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

DFFITS focuses on a fitted-value change; DFBETAS on a particular coefficient change.

**Intuition:** Different influence measures target different consequences.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-dffits-dfbetas`

---

### 485. What does the column space of X mean in regression?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is every mean vector the model can express: all Xβ. It contains zero and is closed under addition and scaling.

**Intuition:** The column space is the model’s menu of possible means.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-space`

---

### 486. For an n×p design X, do coefficients and fitted values live in the same space?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Usually not. β lives in ℝᵖ; Xβ lives in ℝⁿ.

**Intuition:** Coefficients describe features; fitted values describe observations.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-ambient-dimensions`

---

### 487. A 10×4 design has rank 3. How many coefficient directions are invisible?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One: dim N(X)=4−3. Moving along it leaves Xβ unchanged.

**Intuition:** Rank counts visible directions; nullity counts invisible ones.

</details>

Sources: [Linear algebra notes · subspaces and rank](../courses/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-rank-nullity`

---

### 488. Can different design matrices describe the same mean model?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if their columns span the same space.

**Intuition:** The reachable means matter more than the chosen basis.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-span-not-columns`

---

### 489. What vectors are perpendicular to (1,1,0) and (0,1,1)?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiples of (1,−1,1). Each dot product is zero.

**Intuition:** Perpendicular directions satisfy all column constraints at once.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-null`

---

### 490. Why is N(X) perpendicular to the row space of X?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Xv=0 says every row has dot product zero with v. The same is then true for every combination of rows.

**Intuition:** A null direction is invisible to every row.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-nullspace-test`

---

### 491. Project y=(1,2,6) onto the constant vectors. What do you get?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(3,3,3), using the average 3. The residual is (−2,−1,3).

**Intuition:** The best constant fit is the average.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-orthogonal-decomposition-example`

---

### 492. When can ℓᵀβ be estimated linearly and without bias?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When ℓ is in X’s row space. Then ℓ=Xᵀa for some a, and aᵀy estimates the target unbiasedly.

**Intuition:** An estimable target cannot depend on invisible coefficient directions.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-estimable`

---

### 493. With X=[x x], which is identifiable: β₁ or β₁+β₂?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum. The mean is x(β₁+β₂), so the data cannot separate the two contributions.

**Intuition:** Duplicate features reveal a total, not its allocation.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-columns`

---

### 494. If ℓ=Xᵀa, why is aᵀy unbiased for ℓᵀβ?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

E[aᵀy]=aᵀXβ=ℓᵀβ, assuming E[y]=Xβ.

**Intuition:** Match the estimator’s mean to the target.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-construct-unbiased-estimator`

---

### 495. Can γ₂−γ₁ be identifiable when individual group effects are not?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. In μᵢ=α+γᵢ, the difference is μ₂−μ₁ for observed groups. A common shift in effects cancels.

**Intuition:** Differences can be identifiable even when baselines are arbitrary.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-contrast-invariance`

---

### 496. With rank-deficient X, when is a new mean x₀β uniquely determined?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When x₀ is in X’s row space. Otherwise two equally valid coefficient vectors can predict different new means.

**Intuition:** Training-fit agreement does not guarantee prediction agreement everywhere.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-new-point-estimability`

---

### 497. Does a numerically accurate least-squares fit guarantee valid inference?

**STAT 244 · AM 205 × STAT 244 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. AM 205 asks whether the calculation is reliable; STAT 244 asks whether the statistical assumptions justify inference.

**Intuition:** Accurate computation does not validate the model’s assumptions.

</details>

Sources: [HW2 · Q5–9](../courses/stat244/homeworks/ps2/hw2.pdf#page=3); [PS2 · Q3](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `bridge-fit`

---

### 498. Why can an intercept plus every group indicator cause ambiguity?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The indicators add up to the intercept column. You can shift the intercept and offset every group effect without changing the fit.

**Intuition:** Redundant columns create redundant coefficient descriptions.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-alias`

---

### 499. An intercept plus three observed-group indicators gives how many independent directions?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three, not four. The intercept is the sum of the indicators.

**Intuition:** Count independent directions, not column names.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-dummy-rank`

---

### 500. Does choosing a reference group restrict the possible group means?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It changes the coefficient description: the intercept is the reference mean, and other effects are differences.

**Intuition:** An identifying convention is not a substantive hypothesis.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-constraints-not-model`

---

### 501. Why do X and XA give the same fits when A is invertible?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They span the same column space. A changes coordinates, not the set of possible mean vectors.

**Intuition:** Recode the coefficients without changing the model.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode`

---

### 502. If X*=XA and X has full column rank, how do coefficients transform?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

β=Aγ, or γ=A⁻¹β, so Xβ=X*γ.

**Intuition:** The coefficients must compensate for the changed basis.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-parameter-map`

---

### 503. Two full-rank designs share a column space. Can the basis-change matrix be singular?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A singular change would lose a direction, contradicting full column rank.

**Intuition:** A genuine basis change preserves every direction.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-column-space-converse`

---

### 504. If β̂ is one least-squares solution, what are all the others?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

β̂+N(X). Adding a null vector changes coefficients but leaves the fitted values unchanged.

**Intuition:** Nonunique solutions form a shifted null space.

</details>

Sources: [HW2 · Q2](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine`

---

### 505. If X=[x x] and the best fit is 3x, what coefficient pairs work?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every pair with β₁+β₂=3, such as (3,0) or (1,2).

**Intuition:** One fit can have many coefficient explanations.

</details>

Sources: [HW2 · Q2](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-example`

---

### 506. Do the normal equations require normally distributed errors?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. “Normal” means perpendicular: Xᵀ(y−Xβ̂)=0. This follows from least-squares geometry alone.

**Intuition:** The name refers to a right angle, not a distribution.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-normal`

---

### 507. What is the gradient of ‖y−Xβ‖²?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

2Xᵀ(Xβ−y). Setting it to zero gives XᵀXβ=Xᵀy.

**Intuition:** At the optimum, no predictor direction reduces squared error.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-differentiate-loss`

---

### 508. Why do OLS residuals sum to zero when there is an intercept?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are perpendicular to every design column, including the all-ones column. So 1ᵀe=0.

**Intuition:** An intercept forces the average residual to zero.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-residual-sum-zero`

---

### 509. Why are OLS fitted values perpendicular to residuals?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fit lies in C(X), and the residual is perpendicular to that entire space.

**Intuition:** Least squares splits data into a fit and an orthogonal leftover.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-fitted-orthogonality`

---

### 510. Which two properties define an orthogonal projector P?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

P²=P and Pᵀ=P. Applying it twice changes nothing, and symmetry makes the projection perpendicular.

**Intuition:** Idempotence gives a projection; symmetry makes it orthogonal.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projection`

---

### 511. Is P²=P alone enough for an orthogonal projection?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. [[1,1],[0,0]] is idempotent but not symmetric. It projects at a slant.

**Intuition:** A projection can be oblique.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-idempotent-not-orthogonal`

---

### 512. What eigenvalues can a projector have?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only 0 or 1: λ²=λ. A direction is either removed or retained.

**Intuition:** A projector selects directions rather than stretching them.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projector-eigenvalues`

---

### 513. If the model space has rank r, what is tr(H)?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r. Each retained direction contributes an eigenvalue 1.

**Intuition:** The hat matrix’s trace counts fitted dimensions.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-hat-trace`

---

### 514. For nested models, what does (P₁−P₀)y represent?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The part of y explained by the larger model but not the smaller one.

**Intuition:** Added directions account for the improvement in fit.

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nested`

---

### 515. If V₀⊆V₁, why is P₁P₀=P₀?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After projecting into V₀, the vector already lies in V₁. Projecting into V₁ cannot change it.

**Intuition:** A larger space already contains the smaller fit.

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nesting-product`

---

### 516. Is the difference of two orthogonal projectors always a projector?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. diag(0,1)−diag(1,0)=diag(−1,1), which is not idempotent. The usual difference rule requires nested spaces.

**Intuition:** Subtracting unrelated model spaces is not “extra fit.”

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-difference-without-nesting`

---

### 517. Under treatment coding, what does the intercept mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fitted reference-group mean when other numeric predictors are zero.

**Intuition:** The coding determines the baseline’s interpretation.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-contrasts`

---

### 518. Reference mean 10; B’s coefficient is 2. What is B’s fitted mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12. Treatment coefficients are differences from the reference.

**Intuition:** Add the contrast to the baseline.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-treatment-numeric`

---

### 519. Sum-coded effects are 2 and −1 for three groups. What is the missing effect?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

−1, so all three effects sum to zero.

**Intuition:** The final effect is determined by the constraint.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-coding-numeric`

---

### 520. With a contrast coded −1 for A and +1 for B, why is its coefficient half their difference?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Moving from A to B changes the code by 2, so the fitted difference is twice the coefficient.

**Intuition:** Read the coding scale before interpreting a coefficient.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-helmert-scaling`

---

### 521. Can you drop the intercept from any equivalent factor codings and keep equivalent models?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Their spaces can coincide only after the intercept direction is added.

**Intuition:** Removing a shared direction can reveal different remaining spaces.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-remove-intercept-caveat`

---

### 522. Why divide residual SSE by n−rank(X) to estimate noise variance unbiasedly?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fitting uses rank(X) directions. Under spherical errors and the correct mean model, only n−rank(X) noise directions remain in the residual.

**Intuition:** Fitted directions consume residual degrees of freedom.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance`

---

### 523. n=20, rank(X)=4, SSE=80. What is the unbiased variance estimate?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

80/(20−4)=5.

**Intuition:** Divide by residual dimensions, not total observations.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-numeric`

---

### 524. Why is SSE/n a likelihood maximum for Gaussian variance when SSE>0?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

At s=SSE/n, the derivative of ℓ(s) is zero and its second derivative is negative.

**Intuition:** Check curvature, not just the stationary point.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-second-derivative`

---

### 525. What does “best” mean in BLUE?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Smallest variance among linear unbiased estimators, under the Gauss–Markov assumptions. It does not compare against every biased or nonlinear estimator.

**Intuition:** “Best” always has a comparison class.

</details>

Sources: [HW2 · Q9](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue`

---

### 526. Does OLS need Gaussian errors to be unbiased?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. With fixed full-rank X, E[y]=Xβ is enough. Gaussianity matters for exact finite-sample t and F inference.

**Intuition:** Estimation and exact inference require different assumptions.

</details>

Sources: [HW2 · Q9](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-normality-separation`

---

### 527. What identity defines a generalized inverse G of B here?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

BGB=B. It need not satisfy BG=I or be unique.

**Intuition:** A generalized inverse only has to undo B where B acts.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse`

---

### 528. For B=diag(1,0), why does G=diag(1,t) work for any t?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

BGB=B whatever t is. Multiplication by B erases the second direction.

**Intuition:** The generalized-inverse rule leaves invisible directions unconstrained.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse-example`

---

### 529. If G is a generalized inverse of B, what works for BA when A is invertible?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A⁻¹G, since (BA)(A⁻¹G)(BA)=BGBA=BA.

**Intuition:** Cancel A next to its inverse, then use BGB=B.

</details>

Sources: [HW2 · Q1(a)](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-ginverse-product`

---

### 530. If G is a generalized inverse of B, what works for AB when A is invertible?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

GA⁻¹, since (AB)(GA⁻¹)(AB)=A(BGB)=AB.

**Intuition:** The inverse must go on the correct side.

</details>

Sources: [HW2 · Q1(a)](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-right-product`

---

### 531. Why can coefficients be nonunique while fitted values are unique?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All least-squares fits equal the unique orthogonal projection onto C(X). Different coefficient solutions differ only in N(X).

**Intuition:** The prediction vector is unique even if its coordinates are not.

</details>

Sources: [HW2 · Q10](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-projector-unique`

---

### 532. For X=[[1,0],[1,0]] and y=(1,3), what is the fit?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(2,2). The first coefficient is 2; the second is arbitrary because its column is zero.

**Intuition:** An unused coefficient cannot affect predictions.

</details>

Sources: [HW2 · Q10](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-g-inverse-fitted-numeric`

---

### 533. Why is an orthogonal projection the nearest point in a subspace?

**STAT 244 · Projection proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Moving elsewhere within the subspace adds a perpendicular squared-distance term: ‖y−μ‖²=‖y−μ̂‖²+‖μ̂−μ‖².

**Intuition:** Every alternative adds nonnegative extra distance.

</details>

Sources: [HW2 · Q6](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-pythagoras`

---

### 534. Why can a linear unbiased competitor not beat OLS under spherical errors?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its covariance is OLS covariance plus σ²AAᵀ for some AX=0. The added term is positive semidefinite.

**Intuition:** Extra unbiased adjustments add noise, not information.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-blue-proof`

---

### 535. A linear unbiased contrast estimator adds weights z with Xᵀz=0. What variance does that add?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²‖z‖² under Var(y)=σ²I.

**Intuition:** Weighting pure residual directions adds noise to the target.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-contrast-variance-gap`

---

### 536. What does generalized least squares change?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It measures residual size using V⁻¹ when Var(y)=σ²V: minimize eᵀV⁻¹e.

**Intuition:** Judge errors relative to their covariance structure.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-gls`

---

### 537. Why whiten both y and X in GLS?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Transforming y by V⁻¹ᐟ² changes its mean to V⁻¹ᐟ²Xβ too. Leaving X unchanged would change the model.

**Intuition:** Transform the data and its expected signal together.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-whitening-covariance`

---

### 538. Two independent measurements have variances 1 and 4. What relative weights should they get?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1 and 1/4, proportional to inverse variance.

**Intuition:** Trust the noisier measurement less.

</details>

Sources: [Least-squares theory · p. 22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weights`

---

### 539. Values are 2 and 8, with variances proportional to 1 and 4. What is their weighted mean?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(2+8/4)/(1+1/4)=3.2.

**Intuition:** The estimate leans toward the more precise observation.

</details>

Sources: [Least-squares theory · p. 22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weighted-mean`

---

### 540. Project a standard Gaussian vector onto r orthogonal directions. What distribution does its squared length have?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

χ² with r degrees of freedom: a sum of r independent squared standard normals.

**Intuition:** Degrees of freedom count independent squared noise directions.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-cochran`

---

### 541. What are the mean and variance of Z₁²+Z₂² for independent standard normals?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is χ²₂, with mean 2 and variance 4.

**Intuition:** For χ²ᵣ, mean is r and variance is 2r.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-quadratic-rank-two`

---

### 542. Why are Gaussian OLS fitted values and residuals independent?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are jointly Gaussian and have zero cross-covariance, since H(I−H)=0.

**Intuition:** Gaussianity turns orthogonality into independence.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-independent-fit-residual`

---

### 543. What does the nested-model F statistic compare?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Improvement per added direction against residual noise per remaining direction: [(SSE₀−SSE₁)/(r₁−r₀)]/[SSE₁/(n−r₁)].

**Intuition:** Ask whether extra fit is large relative to noise.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-test`

---

### 544. Why is the usual central F reference distribution a null-model result?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under the null, the extra fitted directions contain noise but no mean signal. Under an alternative, they can contain signal too.

**Intuition:** A test’s reference describes what happens without the added effect.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-null-needed`

---

### 545. How many test degrees of freedom can a four-level factor add?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three with an intercept, if all three contrast directions are independent.

**Intuition:** One named predictor can contribute several directions.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-rank-not-predictors`

---

### 546. For nested Gaussian models, do a large F statistic and a small null/full likelihood ratio agree?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Both indicate that allowing the extra directions substantially improves fit.

**Intuition:** Different statistics can encode the same evidence ordering.

</details>

Sources: [Inference notes · pp. 5–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-lrt-monotone`

---

### 547. SSE drops from 120 to 80 after adding 2 directions; full residual df is 20. What is F?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[(120−80)/2]/[80/20]=5.

**Intuition:** Compare improvement per direction with noise per direction.

</details>

Sources: [Inference notes · p. 5 · companion calculation](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-number`

---

### 548. How do you express β₂=β₃ as a linear restriction?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use a row with 1 in position 2, −1 in position 3, and zeros elsewhere; set its product with β to zero.

**Intuition:** Equality is a zero difference.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraints`

---

### 549. Is the restriction β₃=2 a subspace constraint?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its solution set does not contain zero, so it is affine.

**Intuition:** A nonzero target shifts the constraint away from the origin.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraint-matrix`

---

### 550. Why add Lagrange multipliers to constrained least squares?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They balance the least-squares gradient against directions forbidden by Λβ=c. The constraints and stationarity equations are solved together.

**Intuition:** The best allowed point need not have an unconstrained zero gradient.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constrained-normal-equations`

---

### 551. What is a coefficient’s estimated standard error in full-rank OLS?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

s√[(XᵀX)⁻¹ⱼⱼ], with s²=SSE/(n−p). The inverse-design term alone omits the noise scale.

**Intuition:** Uncertainty combines design geometry and noise size.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-t-ci`

---

### 552. If s=3 and (XᵀX)⁻¹ⱼⱼ=0.04, what is the coefficient SE?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3√0.04=0.6.

**Intuition:** Take the square root before multiplying by the noise scale.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-standard-error-number`

---

### 553. What does 95% frequentist confidence mean?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under repeated sampling, the interval-building procedure covers the fixed true parameter 95% of the time.

**Intuition:** The coverage guarantee belongs to the procedure.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-confidence-interpretation`

---

### 554. Why is a new-response prediction interval wider than a mean-response interval?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A new response includes its own noise in addition to uncertainty in the estimated mean.

**Intuition:** Predicting one noisy outcome is harder than estimating its average.

</details>

Sources: [Inference notes · pp. 12–13](../courses/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction`

---

### 555. With s=2 and mean-prediction leverage 0.25, what are the mean and new-response SEs?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Mean: 2√0.25=1. New response: 2√1.25=√5.

**Intuition:** The extra 1 inside the square root is future observation noise.

</details>

Sources: [Inference notes · pp. 12–13](../courses/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction-width-number`

---

### 556. Do ten separate 95% intervals guarantee 95% coverage for all ten together?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. All intervals covering simultaneously is a stronger event than any one covering.

**Intuition:** More protected claims require more protection.

</details>

Sources: [Inference notes · pp. 11–12](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-simultaneous`

---

### 557. What multiplier gives Scheffé protection for all coefficient combinations in a p-parameter Gaussian model?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

√(pF), using the 1−α quantile of F with p and n−p degrees of freedom.

**Intuition:** Protecting every linear combination widens the intervals.

</details>

Sources: [Inference notes · pp. 11–12](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-scheffe-factor`

---

### 558. If A⊆B, which orthogonal complement is larger?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A⊥ is larger: B⊥⊆A⊥. Being perpendicular to a bigger space imposes more restrictions.

**Intuition:** More directions to avoid means fewer directions left.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-orthocomplement`

---

### 559. Why is v₁+v₂ perpendicular to W₁∩W₂ when vᵢ is perpendicular to Wᵢ?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Any vector in the intersection is perpendicular to both v₁ and v₂, hence to their sum.

**Intuition:** Two zero dot products still add to zero.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-intersection-complement`

---

### 560. In finite dimensions, what is (A⊥)⊥ for a subspace A?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A itself. Every vector decomposes into an A component and an A⊥ component; perpendicularity to A⊥ removes the latter.

**Intuition:** Taking the orthogonal complement twice returns the original space.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-double-complement`

---

### 561. How does covariance change under AY+b?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It becomes AΣAᵀ. The constant shift b changes the mean, not the covariance.

**Intuition:** Linear mixing changes spread; translation does not.

</details>

Sources: [Inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-cov-transform`

---

### 562. Can X and X² be dependent but uncorrelated when X is standard normal?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Symmetry makes Cov(X,X²)=0, but X² is completely determined by X.

**Intuition:** Zero correlation only rules out linear association.

</details>

Sources: [Inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gaussian-uncorrelated`

---

### 563. Can pairwise correlations miss multicollinearity?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. One predictor can be nearly a combination of several others without nearly matching any single one.

**Intuition:** Dependence can involve a group of columns.

</details>

Sources: [Inference notes · pp. 14–15](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-collinearity`

---

### 564. Why can nearly duplicate predictors have unstable coefficients but stable fits?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One coefficient can rise while the other falls, nearly cancelling in Xβ.

**Intuition:** The data may identify a total much better than its parts.

</details>

Sources: [Inference notes · pp. 14–15](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-stable-sum-unstable-parts`

---

### 565. If predicting xⱼ from other predictors gives R²=0.95, what is its VIF?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1/(1−0.95)=20. This is a variance-inflation factor under the usual regression comparison.

**Intuition:** Little unique predictor variation means high coefficient uncertainty.

</details>

Sources: [Inference notes · pp. 15–18](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif`

---

### 566. If VIF=9, how much does the coefficient SE inflate?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

By 3, holding noise and predictor scale fixed. Standard error is the square root of variance.

**Intuition:** Variance factors must be square-rooted for SEs.

</details>

Sources: [Inference notes · pp. 15–18](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-standard-error`

---

### 567. Software reports GVIF^(1/(2df))=2. What is GVIF^(1/df)?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

4. Square the reported value.

**Intuition:** Check whether a diagnostic uses a variance or SE-like scale.

</details>

Sources: [Inference notes · pp. 16–17](../courses/stat244/lecnotes/notes-lsinf.pdf#page=17)

Card ID: `stat244-gvif-scale`

---

### 568. What does Gram–Schmidt subtract from the next column?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its projection onto the earlier columns’ span. What remains is a new perpendicular direction.

**Intuition:** Keep only what earlier directions cannot explain.

</details>

Sources: [Inference notes · pp. 20–23](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt`

---

### 569. Remove the projection onto (1,1) from (1,0). What remains?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(1/2,−1/2), whose dot product with (1,1) is zero.

**Intuition:** Subtract the shared component to isolate a new direction.

</details>

Sources: [Inference notes · pp. 20–23](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt-number`

---

### 570. Does orthogonalizing predictors remove uncertainty in the original coefficients?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If all directions are retained, it only changes coordinates. Transforming back restores the original uncertainty.

**Intuition:** A nicer basis is not new information.

</details>

Sources: [Inference notes · pp. 18–20](../courses/stat244/lecnotes/notes-lsinf.pdf#page=19)

Card ID: `stat244-orthogonalization-limit`

---

### 571. Why can PCR discard a useful predictor direction?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

PCA ranks directions by variation in X, not their relationship with y. A low-variance direction may carry strong signal.

**Intuition:** Large predictor variation need not mean high predictive value.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr`

---

### 572. Why does full-component PCR reproduce OLS, but truncated PCR may not?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All components preserve the original space. Dropping components removes directions from the model.

**Intuition:** Rotation preserves a model; truncation changes it.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-full-versus-truncated`

---

### 573. Why fit PCA inside each cross-validation training fold?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Otherwise validation predictors influence the means, scales, and directions used to train the model.

**Intuition:** Unsupervised preprocessing can still leak validation information.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pca-fold-boundary`

---

### 574. What does PLS use that PCA does not?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The response y, as well as predictor structure, to construct components.

**Intuition:** PLS seeks response-related directions, not just variable predictors.

</details>

Sources: [Inference notes · pp. 24–25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls`

---

### 575. Why is fitting PLS before splitting especially risky?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Validation responses influence the constructed components, leaking the answers into the representation.

**Intuition:** Response-informed features must be trained without validation outcomes.

</details>

Sources: [Inference notes · pp. 24–25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls-supervised-boundary`

---

### 576. Why does C(X) always contain zero?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Choose β=0, so Xβ=0.

**Intuition:** A linear model space always passes through the origin.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-zero-mean`

---

### 577. If Xβ₁ and Xβ₂ are possible means, is their sum possible too?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes: Xβ₁+Xβ₂=X(β₁+β₂).

**Intuition:** Linear combinations stay in the model space.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-add-means`

---

### 578. Does an OLS residual lie in N(X) or N(Xᵀ)?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

N(Xᵀ), since Xᵀe=0. Residuals have n entries, not p.

**Intuition:** Dimensions help catch a transposed-space mistake.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-residual-space`

---

### 579. A design has 10 rows and rank 3. How many residual directions remain?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

10−3=7.

**Intuition:** Observation space splits into fitted and residual directions.

</details>

Sources: [Linear algebra notes · subspaces and rank · companion concept check](../courses/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-residual-dimension`

---

### 580. Can deleting a predictor enlarge the model’s column space?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Every combination of the remaining columns was already available.

**Intuition:** Fewer ingredients cannot create more linear combinations.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-drop-column`

---

### 581. If X has full column rank, which coefficient contrasts are estimable?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every ℓᵀβ. The row space is all of ℝᵖ.

**Intuition:** No coefficient direction is invisible.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-full-rank-targets`

---

### 582. How can a null vector prove that ℓᵀβ is not estimable?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Find v with Xv=0 but ℓᵀv≠0. Then β and β+v have identical means but different target values.

**Intuition:** The data cannot distinguish targets that change invisibly.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-null-target-test`

---

### 583. What does ℓᵀG(XᵀX)=ℓᵀ mean when G is a generalized inverse?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The target row survives the recoverable part of the design. This characterizes estimability in the notes.

**Intuition:** Estimable targets live entirely in visible directions.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-estimability-ginverse`

---

### 584. Why do X and XᵀX have the same null space?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

vᵀXᵀXv=‖Xv‖². This is zero exactly when Xv=0.

**Intuition:** Squaring the design preserves its invisible directions.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-gram-null`

---

### 585. Why is C(XᵀX)=C(Xᵀ)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They have the same null space, and their column spaces are the corresponding orthogonal complements.

**Intuition:** The Gram matrix preserves the design’s visible coefficient space.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-gram-row`

---

### 586. For X=[x x], what is one nonzero null vector?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(1,−1). Increasing one coefficient and decreasing the other cancels exactly.

**Intuition:** Opposing allocations leave the same total.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-null`

---

### 587. With X=[x x], can the data identify β₁−β₂?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Shifting coefficients by (t,−t) changes the difference by 2t without changing the mean.

**Intuition:** The unidentified direction is the contrast between duplicates.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-difference`

---

### 588. In μᵢⱼ=α+βᵢ+γⱼ, why isn’t α separately identifiable without constraints?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add c to α and subtract c from every βᵢ. Every cell mean stays the same.

**Intuition:** An arbitrary baseline can move between parameter blocks.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-shift`

---

### 589. In an observed additive two-way layout, is βᵢ−βₖ estimable?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. At the same column j, μᵢⱼ−μₖⱼ=βᵢ−βₖ.

**Intuition:** Compare groups while holding the other factor fixed.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-row-contrast`

---

### 590. What does an additive two-way model assume about a row effect across columns?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The difference βᵢ−βₖ is the same at every column level.

**Intuition:** Additivity means one factor does not modify the other’s effect.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-interaction`

---

### 591. With all r×c cells observed, how many mean dimensions does an additive two-way model have?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r+c−1: one baseline, r−1 row contrasts, and c−1 column contrasts.

**Intuition:** Redundant baselines should be counted only once.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-dimensions`

---

### 592. Why is “all group means are equal” different from choosing a reference group?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes allowable mean patterns. Choosing a reference only renames the same patterns.

**Intuition:** A hypothesis changes the model; a coding convention need not.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-equality-shrinks`

---

### 593. Can an invertible recoding change OLS residual SSE?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The fitted-value space and orthogonal projection are unchanged.

**Intuition:** Different coefficients can produce identical fit quality.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode-sse`

---

### 594. Can individual coefficient p-values change after recoding?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A coefficient may now represent a different hypothesis, even though fitted values are unchanged.

**Intuition:** Compare the tested contrasts, not just coefficient positions.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode-coefficient-tests`

---

### 595. When is the set β̂+N(X) a vector subspace?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When it contains zero, equivalently when Xβ̂=0.

**Intuition:** A shifted space is linear only if the shift stays inside it.

</details>

Sources: [HW2 · Q2 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-origin`

---

### 596. Why isn’t the line β₁+β₂=3 a vector space?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It excludes (0,0), and doubling a point changes the sum to 6.

**Intuition:** Vector spaces must contain zero and survive scaling.

</details>

Sources: [HW2 · Q2 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-zero`

---

### 597. What does Xᵀe=0 say about each predictor?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its dot product with the residual is zero.

**Intuition:** No available predictor direction remains in the residual.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-normal-equation-geometry`

---

### 598. Why can least squares have no bad local minima?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its Hessian is 2XᵀX, which is positive semidefinite because vᵀXᵀXv=‖Xv‖²≥0.

**Intuition:** The squared-error surface is convex.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-hessian-positive`

---

### 599. When is the OLS coefficient minimum unique?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When X has full column rank, making XᵀX positive definite.

**Intuition:** No flat coefficient direction means no alternate minimizer.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-unique-minimum`

---

### 600. Without an intercept, must OLS residuals average zero?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The all-ones direction may not belong to the model space.

**Intuition:** Orthogonality only applies to directions the design includes.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-no-intercept`

---

### 601. Why does ‖y‖²=‖ŷ‖²+‖e‖² for OLS?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Because y=ŷ+e and ŷᵀe=0.

**Intuition:** The fitted and residual pieces form a right triangle.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-uncentered-squares`

---

### 602. Why is I−P idempotent when P is?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Expand: (I−P)²=I−2P+P²=I−P.

**Intuition:** Extracting the leftover twice changes nothing.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-complement-idempotent`

---

### 603. Onto what space does the identity matrix project?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The entire observation space. Every vector stays unchanged.

**Intuition:** Keeping every direction is also a projection.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-identity-projection`

---

### 604. What does P=(1/n)11ᵀ do to y?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It replaces every entry with the sample mean.

**Intuition:** The constant-vector space has one direction.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-mean-projector`

---

### 605. Why does a projector’s trace equal its rank?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its eigenvalues are only 0 and 1. Summing them counts the retained directions.

**Intuition:** Trace counts the projector’s ones.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-trace-rank`

---

### 606. If tr(H)=r for n observations, what is tr(I−H)?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

n−r.

**Intuition:** Every observation-space direction is fitted or residual.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-residual-trace`

---

### 607. Can adding columns to an OLS model increase its minimized training SSE?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The old fit is still available in the larger space.

**Intuition:** More options cannot worsen the best achievable training fit.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-adding-fit`

---

### 608. What is rank(P₁−P₀) for nested spaces of dimensions r₀ and r₁?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r₁−r₀.

**Intuition:** The difference projector keeps only newly added directions.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-extra-dimensions`

---

### 609. What are the three orthogonal pieces in a nested-model decomposition?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Small-model fit, extra large-model fit, and large-model residual. Their sum is y.

**Intuition:** Separate old signal, added fit, and leftover variation.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-three-pieces`

---

### 610. Do arbitrary orthogonal projectors commute?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Nesting is one condition that makes P₀P₁=P₁P₀=P₀.

**Intuition:** Do not move matrix factors past each other without a reason.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-commute-warning`

---

### 611. Under sum coding, what does the intercept represent at zero numeric predictors?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The equally weighted average of fitted group means.

**Intuition:** Zero-sum effects center the baseline across levels.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-intercept`

---

### 612. Is a sum-coded intercept necessarily the overall sample mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It averages group means equally, while the sample mean weights groups by their sizes.

**Intuition:** An average over groups differs from an average over observations.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-unbalanced-average`

---

### 613. If you change the reference group, do group predictions change?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, with equivalent full-rank coding and the same model. The differences are simply measured from a new baseline.

**Intuition:** Changing the origin changes coordinates, not locations.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-reference-change`

---

### 614. Intercept 10 and effects 2,−1,−1 give which group means?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12,9,9. Their equal-weight average is 10.

**Intuition:** Add each deviation to the common baseline.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-means`

---

### 615. A Helmert column has entries −1,−1,+2. How does its coefficient relate to C−average(A,B)?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That mean contrast equals three times the coefficient.

**Intuition:** The contrast scaling sets the coefficient’s units.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-second-helmert`

---

### 616. Why can the baseline-predictor slope stay unchanged across equivalent group codings?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The group-mean space is unchanged, so adjusting for it leaves the same regression problem for the numeric predictor, assuming identifiability.

**Intuition:** Recoding a nuisance factor does not add or remove adjustment directions.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-baseline-slope`

---

### 617. What is the Gaussian maximum-likelihood estimate of σ² when SSE>0?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

SSE/n, rather than SSE/(n−r).

**Intuition:** Maximum likelihood and unbiasedness optimize different criteria.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-mle`

---

### 618. Why is SSE/n downward biased under the correct mean model?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fitting removes noise along r model directions, leaving expected SSE=(n−r)σ².

**Intuition:** The residual has already had some noise fitted away.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-bias`

---

### 619. If rank(X)=n, can SSE/(n−rank(X)) estimate noise variance?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. There are no residual degrees of freedom, and the denominator is zero.

**Intuition:** A saturated fit leaves no independent residual noise to measure.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-no-residual-df`

---

### 620. If Gaussian SSE=0, is σ̂²=0 an ordinary positive interior MLE?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The likelihood grows as variance approaches zero, a boundary behavior.

**Intuition:** A formula at the boundary needs separate interpretation.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-zero-sse-boundary`

---

### 621. Does Gauss–Markov require normal errors?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The mean and spherical covariance assumptions are enough for the linear-unbiased comparison.

**Intuition:** Normality is not part of BLUE’s core argument.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue-normality`

---

### 622. Can a biased estimator have smaller mean squared error than BLUE?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. BLUE only minimizes variance within the linear unbiased class.

**Intuition:** Accepting some bias can reduce variance enough to help overall error.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue-biased`

---

### 623. What does Var(y)=σ²I assert?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Equal marginal variances and zero pairwise covariances. It does not alone assert independence.

**Intuition:** A covariance model is weaker than a full distribution model.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-spherical-errors`

---

### 624. When does the generalized-inverse condition force G=B⁻¹?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When B is invertible. Multiply BGB=B by B⁻¹ on both sides.

**Intuition:** Full invertibility removes the freedom.

</details>

Sources: [Linear algebra notes · pp. 4–5 · companion concept check](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ordinary-inverse`

---

### 625. Which diag(1,t) is the Moore–Penrose inverse of diag(1,0)?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

t=0.

**Intuition:** The pseudoinverse avoids arbitrary action in the null direction.

</details>

Sources: [Linear algebra notes · pp. 4–5 · companion concept check](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-moore-penrose-choice`

---

### 626. How does the fitted-value projector act on C(X) and C(X)⊥?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It keeps the first and kills the second.

**Intuition:** Those two actions completely determine the projection.

</details>

Sources: [HW2 · Q10 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-projector-action`

---

### 627. If an alternative fit differs from the projection by length 3, how much extra squared error does it add?

**STAT 244 · Projection proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

9, by the orthogonal squared-distance decomposition.

**Intuition:** Distance within the model adds in quadrature.

</details>

Sources: [HW2 · Q6 · companion concept check](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-minimum-squared-distance`

---

### 628. For full-rank X, when is By unbiased for β for every β?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When BX=I, because E[By]=BXβ.

**Intuition:** Unbiasedness becomes a matrix identity.

</details>

Sources: [Least-squares theory · pp. 19–20 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-unbiased-constraint`

---

### 629. Why is AAᵀ positive semidefinite?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For every v, vᵀAAᵀv=‖Aᵀv‖²≥0.

**Intuition:** A squared length can never reduce variance.

</details>

Sources: [Least-squares theory · pp. 19–20 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-variance-gap-psd`

---

### 630. Are GLS residuals necessarily Euclidean-orthogonal to X’s columns?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. They satisfy XᵀV⁻¹e=0: weighted orthogonality.

**Intuition:** GLS changes the geometry used to measure angles and lengths.

</details>

Sources: [Least-squares theory · pp. 20–22 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-gls-orthogonality`

---

### 631. If Var(y)=σ²V, what covariance does V⁻¹ᐟ²y have?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

σ²I.

**Intuition:** Whitening removes unequal scales and covariance in the transformed coordinates.

</details>

Sources: [Least-squares theory · pp. 20–22 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-whitening-result`

---

### 632. An average combines m independent equal-variance observations. What precision weight should it get?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Weight proportional to m, since its variance is σ²/m.

**Intuition:** More independent measurements make an average more precise.

</details>

Sources: [Least-squares theory · p. 22 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-mean-precision`

---

### 633. Are inverse marginal variances alone enough for GLS with correlated errors?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The full inverse covariance matters, including off-diagonal entries.

**Intuition:** Correlation changes which combinations are informative.

</details>

Sources: [Least-squares theory · p. 22 · companion concept check](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-correlated-weights`

---

### 634. Under the Gaussian linear model, what is SSE/σ² distributed as?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

χ² with n−rank(X) degrees of freedom, assuming positive residual df.

**Intuition:** Residual noise lives in the unfitted directions.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-residual-chi-square`

---

### 635. Does a projector always turn squared noise length into a chi-squared variable?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The exact chi-squared result requires the appropriate Gaussian noise model.

**Intuition:** Geometry alone does not determine the noise distribution.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-non-gaussian-warning`

---

### 636. Why is H(I−H)=0?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

H−H²=0 because H is idempotent.

**Intuition:** The fitted and residual projectors keep disjoint directions.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-covariance-zero`

---

### 637. Why use the full model’s residual SSE in the F-test denominator?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It estimates noise after allowing all directions under consideration.

**Intuition:** Use the leftover variation as the noise benchmark.

</details>

Sources: [Inference notes · pp. 3–6 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-noise-denominator`

---

### 638. Under the null, why is an F statistic often near 1 rather than 0?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both numerator and denominator estimate the same noise variance after dividing by their degrees of freedom.

**Intuition:** Added directions fit some noise even when no effect exists.

</details>

Sources: [Inference notes · pp. 3–6 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-close-one`

---

### 639. For F=5 with 2 added directions and 20 residual df, what reference is needed for a p-value?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

F with degrees of freedom (2,20), under the Gaussian null assumptions.

**Intuition:** A statistic’s value is not itself its tail probability.

</details>

Sources: [Inference notes · p. 5 · companion calculation · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-degrees`

---

### 640. For positive SSEs in nested Gaussian models, what is the null/full maximized likelihood ratio?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(SSE₀/SSE₁)^(−n/2). Larger relative improvement makes this ratio smaller.

**Intuition:** The simpler model loses likelihood when its residual cost rises.

</details>

Sources: [Inference notes · pp. 5–6 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-lrt-ratio`

---

### 641. Why can’t every coefficient restriction be tested in a rank-deficient model?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Some restrictions change along null directions while the data distribution stays the same.

**Intuition:** A hypothesis must concern observable information.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-untestable-restriction`

---

### 642. How do you encode β₁=β₂ and β₃=2 for β=(β₀,β₁,β₂,β₃)?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use rows (0,1,−1,0) and (0,0,0,1), with targets 0 and 2.

**Intuition:** Each independent row represents one constraint.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-two-restrictions`

---

### 643. In the constrained least-squares block system, what does the lower block enforce?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Λβ=c.

**Intuition:** One block optimizes; the other keeps the solution feasible.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-kkt-lower`

---

### 644. What is the stationarity equation for constrained least squares?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

XᵀXβ+Λᵀξ=Xᵀy, with multiplier scaling absorbed in ξ.

**Intuition:** The constraint supplies the force balancing the loss gradient.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-kkt-upper`

---

### 645. Why use a t distribution instead of a standard normal when σ is estimated?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The estimated noise scale introduces extra uncertainty. Under Gaussian errors, the standardized coefficient uses t with n−p df.

**Intuition:** Estimating the denominator makes the tails heavier.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-why-t`

---

### 646. A coefficient is 1.2 with SE 0.6. What t statistic tests zero?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1.2/0.6=2.

**Intuition:** A t statistic measures distance from the null in SE units.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-t-two`

---

### 647. How do you build a pointwise coefficient confidence interval?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Estimate ± t critical value × estimated SE, under the Gaussian linear-model conditions.

**Intuition:** Uncertainty is a margin around the estimate.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-interval-form`

---

### 648. Does a frequentist 95% interval assign 95% posterior probability to its parameter range?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. That interpretation needs a posterior distribution and its assumptions.

**Intuition:** Coverage and posterior probability are different statements.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-confidence-not-posterior`

---

### 649. Can unlimited data eliminate uncertainty in a new noisy response?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can eliminate mean-estimation uncertainty in suitable settings, but not the new response’s irreducible noise.

**Intuition:** Learning the average perfectly does not predict every outcome perfectly.

</details>

Sources: [Inference notes · pp. 12–13 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-infinite-data-noise`

---

### 650. If ten independent intervals each cover with probability 0.95, what is their joint coverage?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0.95¹⁰≈0.60.

**Intuition:** Many individually reliable statements can be jointly unreliable.

</details>

Sources: [Inference notes · pp. 11–12 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-independent-intervals`

---

### 651. If E[Y]=μ, what is E[AY+b]?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Aμ+b.

**Intuition:** Expectation follows affine transformations directly.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-mean-transform`

---

### 652. Does Var(AY)=AΣAᵀ require Gaussian Y?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Finite second moments suffice.

**Intuition:** Moment identities are more general than Gaussian distribution results.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-no-gaussian-required`

---

### 653. When does zero covariance imply independence for two random vectors?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When they are jointly Gaussian.

**Intuition:** Separate Gaussian marginals alone are not enough.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-joint-normal-key`

---

### 654. Can x₃≈x₁+x₂ cause multicollinearity without an almost-perfect pairwise correlation?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. The near-dependence uses three columns together.

**Intuition:** Look for weak directions in the entire design.

</details>

Sources: [Inference notes · pp. 14–15 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-three-variable-dependence`

---

### 655. Why can stable training predictions become unstable off the observed predictor relationship?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The cancellation between uncertain coefficients may no longer occur at the new predictor values.

**Intuition:** A weakly identified direction can become visible during extrapolation.

</details>

Sources: [Inference notes · pp. 14–15 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-extrapolation-risk`

---

### 656. If a predictor has R²=0 against the others, what is its VIF?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. There is no variance inflation from linear overlap under this comparison.

**Intuition:** No overlap means no inflation beyond the baseline.

</details>

Sources: [Inference notes · pp. 15–18 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-zero-rsquared`

---

### 657. Does a large VIF automatically mean you should delete a predictor?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The scientific target and model assumptions matter too.

**Intuition:** A warning about uncertainty is not a complete modeling decision.

</details>

Sources: [Inference notes · pp. 15–18 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-not-delete`

---

### 658. What does a zero Gram–Schmidt residual mean?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The new column is already in the earlier span.

**Intuition:** The column adds no independent information.

</details>

Sources: [Inference notes · pp. 20–23 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-zero-new-direction`

---

### 659. How do you turn a nonzero orthogonal residual u into a unit vector?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Divide by ‖u‖.

**Intuition:** Orthogonal means perpendicular; orthonormal also means unit length.

</details>

Sources: [Inference notes · pp. 20–23 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-normalize-direction`

---

### 660. Why might discarding small principal components help even though it loses information?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can reduce variance by removing poorly determined directions, at the cost of bias.

**Intuition:** A smaller model trades flexibility for stability.

</details>

Sources: [Inference notes · pp. 23–24 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-tradeoff`

---

### 661. Does using y to build PLS components guarantee better predictions than PCR?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Response-informed directions can also fit noise. Compare honest held-out performance.

**Intuition:** Supervision is useful information, not a performance guarantee.

</details>

Sources: [Inference notes · pp. 24–25 · companion concept check](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls-not-universal`
