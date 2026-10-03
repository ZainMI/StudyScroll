# StudyScroll: master feed

Updated 2026-10-03. 1299 curated cards.

Short question-and-answer flashcards covering the core concepts in AM 207 lectures 01–06 and all three uploaded STAT 244 lecture-note sets, with assignment practice and supporting textbook concepts. AM 205 covers PS1–2, the October 2026 Quiz 1 review, and 2023–2025 Quiz 1 solutions with supporting concepts. No card quota applies; coverage does not imply mastery. Historical and administrative slides are excluded. AM 209a uses the supplied COMPSCI 1090A Ed course, lectures 1–8 only, covering data, EDA, regression, model selection, regularization, and inference. UBuffalo International Finance covers the supplied Chapters 1–5 slides and Chapter 2–4 homework; source inconsistencies and exact/approximate conventions are documented in INTERNATIONAL_FINANCE_COVERAGE.md.

The editable source of truth is [master-feed.json](master-feed.json). This readable document is generated with `npm run feed:build`. Edit the JSON, then regenerate; the Next app imports that same JSON directly.

These are authored learning prompts derived from the listed materials, not quotations or official answer keys. Companion examples and cross-course explanations add interpretation. Reveal the explanation only after attempting the prompt.

## Course map

- **UBuffalo — International Finance:** Chapters 1–5 and Chapter 2–4 homework: national accounts, balance of payments, currency returns, money markets, PPP, and real exchange rates. See [INTERNATIONAL_FINANCE_COVERAGE.md](INTERNATIONAL_FINANCE_COVERAGE.md).
- **AM 205:** floating-point spacing, rounding, matrix operations, linear-map geometry, pivoting, low-rank approximation, algebraic least squares, and Quiz 1 review/practice (2023–2025). See [AM205_QUIZ1_COVERAGE.md](AM205_QUIZ1_COVERAGE.md).
- **AM 207:** probability foundations, inverse transforms, Monte Carlo, Metropolis–Hastings, Markov dynamics, jump processes, SSA, tau leaping, and Bayesian uncertainty.
- **STAT 244:** linear algebra, estimability, projections, contrast coding, least squares and GLS, inference, multicollinearity, PCR/PLS, and regression diagnostics.
- **AM 209a:** lectures 1–8 from the supplied COMPSCI 1090A course: data preparation, visualization, kNN, regression, cross-validation, ridge/lasso, and bootstrap inference. See [AM209A_COVERAGE.md](AM209A_COVERAGE.md).
See [LECTURE_COVERAGE.md](LECTURE_COVERAGE.md) for the lecture-note map, [coverage.json](coverage.json) for learning-objective mappings and [CURATION.md](CURATION.md) for the uncapped content workflow. Scope is current lectures and assignments with supporting textbook sections. No fixed total, per-course quota, or daily card limit applies.

## Feed

### 01. In binary64, what comes immediately after 99?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(99+2^{-46}\). Since 99 is between \(2^{6}\) and \(2^{7}\), the gap is \(2^6\times2^{-52}\).

**Intuition:** Machine-number gaps grow with magnitude.

</details>

Sources: [PS1 · Q1(a)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing`

---

### 02. Is the machine-number gap the same on both sides of 2?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In binary64, the gap below 2 is \(2^{-52}\); above it, \(2^{-51}\). Crossing a power of two doubles the gap.

**Intuition:** The grid gets coarser as numbers grow.

</details>

Sources: [PS1 · Q1(a)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [Review · 1.8 · nonuniform spacing](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-binade-boundary`

---

### 03. Is unit roundoff the gap after 1?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. For binary64 round-to-nearest, the gap is \(2^{-52}\) but unit roundoff is \(2^{-53}\): half a gap. Check which quantity a text calls “epsilon.”

**Intuition:** Nearest rounding loses at most about half a step.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-roundoff-versus-epsilon`

---

### 04. With three significant binary bits, which numbers fit in [1,2)?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1, 1.25, 1.5, and 1.75. The two bits after the leading 1 give four equally spaced choices.

**Intuition:** More bits create a finer grid.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-toy-binary`

---

### 05. Why does binary64 round \(2^{53}\) + 1 back to \(2^{53}\)?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The gap there is 2, so the exact answer is halfway between neighbors. Ties-to-even chooses \(2^{53}\).

**Intuition:** Adding one can leave a large machine number unchanged.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61); [2024 · Q1](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-largest-consecutive-integers`

---

### 06. Why allow floating-point numbers with reduced precision very close to zero?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They provide a gradual approach to zero instead of an abrupt cutoff. These subnormal numbers have a fixed absolute gap, so their relative precision worsens closer to zero.

**Intuition:** Tiny values survive, but with fewer useful relative digits.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-subnormal-role`

---

### 07. How many binary64 numbers lie in [1.5,2]?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(2^{51}\) + 1. Divide the interval length, 0.5, by the gap, \(2^{-52}\), then add one for the extra endpoint.

**Intuition:** Count gaps, then include both ends.

</details>

Sources: [PS1 · Q1(b)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-count`

---

### 08. How many grid points \(a+k\delta\) lie in [a,b]?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\left\lfloor\frac{b-a}{\delta}\right\rfloor+1\), for integers \(k\ge 0\) and \(\delta >0\). Round down because a point beyond b does not count.

**Intuition:** A partial gap does not contain another point.

</details>

Sources: [PS1 · Q1(b)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-non-grid-endpoint`

---

### 09. Can two different machine numbers have the same computed reciprocal?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Different exact reciprocals can round to the same output. Rounding squeezes continuous answers onto a finite grid.

**Intuition:** A one-to-one real operation can lose information on a computer.

</details>

Sources: [PS1 · Q1(c–e)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-reciprocal`

---

### 10. Does a reciprocal collision proof identify which inputs collide?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Counting more inputs than possible outputs proves some collision exists. Finding a specific pair requires more analysis or a search.

**Intuition:** Existence is not the same as location.

</details>

Sources: [PS1 · Q1(c–e)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-pigeonhole-not-all`

---

### 11. Why is 4 \(\times\) \((\frac{1}{4})\) exact in binary arithmetic?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both 4 and \(\frac{1}{4}\) are powers of two, so they are exactly representable. Their product is exactly 1.

**Intuition:** Powers of two fit binary arithmetic naturally.

</details>

Sources: [PS1 · Q2](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-roundtrip`

---

### 12. Which fractions terminate in binary?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Reduced fractions whose denominators are powers of two. For example, \(\frac{1}{8}\) terminates; \(\frac{1}{10}\) does not because its denominator contains a factor of 5.

**Intuition:** Binary place values are halves, quarters, eighths, and so on.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-finite-binary`

---

### 13. Do row operations multiply a matrix on the left or right?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

On the left. Column operations multiply on the right: LB changes rows; BC changes columns.

**Intuition:** Left acts on rows; right acts on columns.

</details>

Sources: [PS1 · Q3](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-operations`

---

### 14. Does “scale row 1, then swap rows” equal the reverse order?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Usually not. In the first order, the scaled row moves. In the reverse order, a different original row gets scaled.

**Intuition:** Matrix operations remember their order.

</details>

Sources: [PS1 · Q3](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-column-order`

---

### 15. Which right multiplier makes column 1 become column 1 + 3 column 2?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

C \(=\) \(\begin{bmatrix}1&0\\3&1\end{bmatrix}\). The first column of BC is B times \((1,3)^{\mathsf{T}}\), giving the required combination.

**Intuition:** A multiplier’s column gives one output column’s recipe.

</details>

Sources: [PS1 · Q3](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-column-add-index`

---

### 16. What does an invertible 2D linear map do to a unit disk?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It produces an ellipse. The map’s singular values are its semiaxis lengths; its left singular vectors give the axis directions.

**Intuition:** A linear map rotates and stretches space.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-disk`

---

### 17. Singular values are 3 and \(\frac{1}{2}\). How does area change?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Area is multiplied by 3 \(\times\) \(\frac{1}{2}\) \(=\) \(\frac{3}{2}\). A unit disk becomes an ellipse of area \(3\pi /2\).

**Intuition:** Multiply the stretches to get the area scale.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-singular-values-area`

---

### 18. What does \(\operatorname{diag}(2,0)\) do to a unit disk?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It flattens it onto the horizontal segment from −2 to 2. The second direction disappears, so the image has zero area.

**Intuition:** A zero singular value erases a direction.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-rank-collapse`

---

### 19. Why can’t an orthogonal matrix stretch a vector?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(Q^{\mathsf{T}}Q=I\), so \(\Vert Qx\Vert ^{2}=x^{\mathsf{T}}Q^{\mathsf{T}}Qx=x^{\mathsf{T}}x\). A square Q can rotate or reflect, but preserves lengths.

**Intuition:** Orthogonal transformations change direction without changing size.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [Review · 3.26](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-orthogonal-map`

---

### 20. Why avoid dividing by a tiny pivot?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It creates huge elimination multipliers. Large intermediate values can magnify rounding errors when later subtracted.

**Intuition:** A legal division can still be numerically dangerous.

</details>

Sources: [PS2 · Q1](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot`

---

### 21. Does a zero first pivot mean the matrix is singular?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(\begin{bmatrix}0&1\\1&0\end{bmatrix}\) is invertible. Swapping rows makes elimination possible.

**Intuition:** Sometimes the equations need reordering, not replacing.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113); [Review · 2.14](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2); [2023 · Q2](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-zero-pivot-nonsingular`

---

### 22. Do elimination multipliers below 1 prevent all growth?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Subtracting rows with opposite signs can increase entries. For example, subtract [1,−1] from [1,1] to get [0,2].

**Intuition:** Small multipliers do not guarantee small intermediate entries.

</details>

Sources: [Heath · Ch. 2 review Q2.27, printed p. 93](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-multiplier-growth`

---

### 23. How do you get \(\det (A)\) from \(PA=LU\)?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply U’s diagonal entries and multiply by (−1) for each row swap. This assumes L has ones on its diagonal.

**Intuition:** Triangular factors make determinants easy.

</details>

Sources: [PS2 · Q1(a)](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-det`

---

### 24. Why might a flat flag need fewer rank-one pieces than a waving flag?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Repeated stripes create repeated patterns. Folds and shadows introduce extra independent variation.

**Intuition:** Low approximate rank means a few patterns explain most variation.

</details>

Sources: [PS2 · Q2](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rank`

---

### 25. How is image RMS error related to the Frobenius norm?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For an \(m\times n\) residual R, \(\operatorname{RMS}=\frac{\lVert R\rVert_F}{\sqrt{mn}}\). It is the typical error per pixel rather than the total error size.

**Intuition:** Normalize by pixel count to compare typical errors.

</details>

Sources: [PS2 · Q2](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rms-frobenius`

---

### 26. Does greedy elimination always improve a low-rank image approximation?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Removing the largest residual entry need not reduce total squared error. Truncated SVD, unlike this greedy rule, is optimal for each rank in Frobenius norm.

**Intuition:** Fixing the worst pixel can worsen others.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-greedy`

---

### 27. Why subtract \(\frac{R_{:,j}R_{i,:}}{R_{ij}}\) from a residual?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For a nonzero pivot, this rank-one term exactly matches pivot row i and column j. Both become zero in exact arithmetic.

**Intuition:** One outer product removes a whole row-and-column pattern.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-elimination-update`

---

### 28. What if the largest residual entry is zero?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Then every residual entry is zero. Stop: dividing by that pivot would only introduce an error.

**Intuition:** An exact fit needs no further update.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-zero-residual-pivot`

---

### 29. Why is \(bx^{2}+cxy+dy^{2}\approx 1\) a linear least-squares model?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The unknowns b,c,d appear linearly. Treat \(x^{2},xy,y^{2}\) as known features.

**Intuition:** “Linear” refers to the unknown coefficients, not the features.

</details>

Sources: [PS2 · Q3(a)](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse`

---

### 30. For \((x,y)=(2,-3)\), what is the ellipse-fit design row?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[4,−6,9], because the features are \(x^{2}\), xy, and \(y^{2}\). The target is 1.

**Intuition:** The cross-product feature keeps its sign.

</details>

Sources: [PS2 · Q3(a)](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-design-row`

---

### 31. Does ellipse fitting by equation residual minimize distance to the curve?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It minimizes how far \(bx^{2}+cxy+dy^{2}\) is from 1, not the shortest geometric distance to the ellipse.

**Intuition:** An easy-to-compute loss can measure a different kind of error.

</details>

Sources: [PS2 · Q3(a)](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-algebraic-distance`

---

### 32. When does \(bx^{2}+cxy+dy^{2}=1\) form a real, nondegenerate ellipse?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When \(Q=\begin{bmatrix}b&c/2\\c/2&d\end{bmatrix}\) is positive definite. Equivalently, \(b>0\) and \(bd-c^{2}/4>0\).

**Intuition:** The quadratic must curve upward in every direction.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-check`

---

### 33. Why does cxy put \(c/2\) in each off-diagonal entry of Q?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In \(x^{\mathsf{T}}Qx\), both off-diagonal entries contribute to xy. Two copies of \(c/2\) add up to c.

**Intuition:** The cross term gets counted twice.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-quadratic-cross-term`

---

### 34. Q has eigenvalues 4 and \(\frac{1}{9}\). What are the axes of \(x^{\mathsf{T}}Qx=1\)?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The semiaxis lengths are \(1/\sqrt{4}=\frac{1}{2}\) and \(1/\sqrt{\frac{1}{9}}=3\).

**Intuition:** A larger quadratic penalty permits a shorter axis.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-axes`

---

### 35. Why use \(r=\sqrt{U}\) to sample uniformly inside a unit disk?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fraction of area inside radius r is \(r^{2}\). Setting \(r^{2}=U\) gives \(r=\sqrt{U}\), with an independent uniform angle.

**Intuition:** Outer rings need more samples because they contain more area.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `bridge-disk`

---

### 36. Before solving a problem numerically, what makes its answer mathematically well-defined?

**AM 205 · Foundations of computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A solution exists, is unique, and changes continuously with the input. These conditions make the problem well-posed, although its answer can still be very sensitive.

**Intuition:** You need an answer that exists and behaves sensibly.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-wellposed`

---

### 37. Can extra arithmetic precision fix every numerical error?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It reduces rounding error, but does not fix a wrong model, an inadequate discretization, or inaccurate measurements.

**Intuition:** More digits cannot repair the wrong problem.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-errors`

---

### 38. Why can a smaller finite-difference step make a derivative worse?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Truncation error shrinks with h, but rounding in f(x+h)−f(x) gets amplified by division by h. Eventually rounding wins.

**Intuition:** A smaller step trades approximation error for arithmetic error.

</details>

Sources: [Heath · Ch. 1 review Q1.50, printed p. 41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-discretization-tradeoff`

---

### 39. Why is subtracting nearly equal approximate numbers risky?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their true difference is small, but the errors already in the inputs need not be. Those errors can dominate the result.

**Intuition:** Cancellation exposes errors that large leading digits concealed.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-cancellation`

---

### 40. How can you compute \(\sqrt{1+x}-1\) reliably for small positive x?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use \(\frac{x}{\sqrt{1+x}+1}\). It is algebraically equal but avoids subtracting almost equal numbers.

**Intuition:** Rewrite the expression before increasing precision.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-rationalize-small-difference`

---

### 41. How can \(\sqrt{a^{2}+b^{2}}\) overflow when its answer fits?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The intermediate squares may be too large. With \(m=\max (\operatorname{abs}(a),\operatorname{abs}(b))>0\), compute \(m\sqrt{(a/m)^{2}+(b/m)^{2}}\) instead.

**Intuition:** Keep intermediate values on a safe scale.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-overflow-rewrite`

---

### 42. Why doesn’t x==NaN detect NaN?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

NaN compares unequal to everything, including itself. Use an isnan check.

**Intuition:** “Not a number” follows special comparison rules.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-exceptional-values`

---

### 43. An estimate is 0.002 instead of 0.001. What is its relative error?

**AM 205 · Error measures · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100%: the absolute error, 0.001, equals the true value’s magnitude.

**Intuition:** A small absolute error can be a huge relative error.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-relative`

---

### 44. Why is 1.4 a backward-accurate approximation to \(\sqrt{2}\)?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is exactly \(\sqrt{1.96}\). Backward error asks how much the input must change: here, 2 changes by 0.04.

**Intuition:** Explain the computed answer by a nearby input.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-backward`

---

### 45. If \(r=b-A\hat{x}\), which right-hand side makes \(\hat{x}\) exact?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

b−r, because \(A\hat{x}=b-r\). The residual measures the needed change in b when A stays fixed.

**Intuition:** A solve’s residual is a backward-error clue.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-linear-backward-data`

---

### 46. Can a stable algorithm give an inaccurate answer?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. It solves a nearby problem accurately, but an ill-conditioned problem can turn a tiny input change into a big answer change.

**Intuition:** Stability cannot remove the problem’s sensitivity.

</details>

Sources: [Heath · §1.2.6, printed p. 13](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-conditioning`

---

### 47. With 12-digit input accuracy and condition number \(10^{4}\), how many digits might survive?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Roughly 8 in a first-order worst-case estimate: \(10^{4}\times 10^{-12}=10^{-8}\). The actual error depends on its direction.

**Intuition:** Conditioning can consume accurate digits.

</details>

Sources: [Heath · Ch. 2 review Q2.64–65, printed p. 95](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-digits-lost`

---

### 48. How does \(\left|\frac{xf\prime(x)}{f(x)}\right|\) help predict the effect of a small input error?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It estimates how many percent the output changes per one-percent input change. This relative condition number requires nonzero x and f(x); a large value means small relative input errors can be amplified.

**Intuition:** It compares relative changes, not raw slopes.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-scalar-condition`

---

### 49. Does taking a square root amplify small relative errors?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For \(x>0\), it approximately halves them: \(\left|\frac{xf\prime(x)}{f(x)}\right|=\frac12\).

**Intuition:** Square roots compress relative changes.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-sqrt-condition`

---

### 50. Can regrouping a floating-point sum change its answer?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. In binary64, \((10^{16}-10^{16})+1\) gives 1, while \(10^{16}+(-10^{16}+1)\) gives 0.

**Intuition:** An intermediate rounding decision can change the final result.

</details>

Sources: [Heath · Ch. 1 review · floating-point properties](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60); [Review · 1.9 · associativity](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-associative`

---

### 51. Why can adding small positive terms first help?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each might vanish when added alone to a huge sum. Together they can form a contribution large enough to survive rounding.

**Intuition:** Let small contributions accumulate before mixing scales.

</details>

Sources: [Heath · Ch. 1 review Q1.45–49, printed p. 41](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-positive-sum-order`

---

### 52. Does printing more digits make an answer more accurate?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Precision is how many digits the arithmetic can represent; accuracy is how close the result is to the truth.

**Intuition:** Displayed digits are not guaranteed knowledge.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-precision`

---

### 53. Can a tiny determinant belong to a well-conditioned matrix?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. For \(A=10^{-10}I\), \(\det (A)\) is tiny but \(\kappa _{2}(A)=1\). All directions shrink equally.

**Intuition:** Conditioning measures unequal sensitivity, not overall size.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116); [2023 · Q3](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-condition-scale`

---

### 54. For \(\begin{bmatrix}1&-2\\3&4\end{bmatrix}\), what are the induced 1- and infinity-norms?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The 1-norm is 6, the largest absolute column sum. The infinity-norm is 7, the largest absolute row sum.

**Intuition:** Columns for the 1-norm; rows for the infinity-norm.

</details>

Sources: [Heath · Ch. 2 review · matrix norms](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-matrix-norms`

---

### 55. What is \(\kappa _{2}(\operatorname{diag}(4,-6,2))\)?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{6}{2}=3\). Use the largest and smallest absolute diagonal entries.

**Intuition:** Signs change orientation, not stretch magnitudes.

</details>

Sources: [Heath · Ch. 2 review Q2.57, printed p. 94](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-diagonal-condition`

---

### 56. Why doesn’t a small residual guarantee a small solution error?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The error is \(-A^{-1}r\). A large inverse can amplify a tiny residual.

**Intuition:** A system can hide large errors along weak directions.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-residual`

---

### 57. \(A=\operatorname{diag}(1,10^{-8})\), \(b=(1,10^{-8})\). Can \(\hat{x}=(1,0)\) look accurate?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its residual is only \((0,10^{-8})\), but the true solution is (1,1). The second component is completely wrong.

**Intuition:** A weakly measured direction can conceal a large error.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-small-residual-counterexample`

---

### 58. Can a real linear system have exactly two solutions?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Every point on the line through two distinct solutions is also a solution.

**Intuition:** Two solutions imply an entire family.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114); [Review · 2.28](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-two-solutions`

---

### 59. If a matrix is singular, must \(Ax=b\) have no solution?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It may have none or infinitely many, depending on whether b lies in its column space.

**Intuition:** Singularity concerns uniqueness; consistency concerns existence.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-consistency`

---

### 60. Do fewer equations than unknowns guarantee a solution?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The equations can conflict. If a solution exists, however, the nontrivial null space makes it nonunique.

**Intuition:** Too few constraints imply freedom, not consistency.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-underdetermined`

---

### 61. How do partial and complete pivoting differ?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Partial pivoting searches the active column. Complete pivoting searches the remaining submatrix and can swap columns too.

**Intuition:** Swapping columns also reorders the unknowns.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-pivot-scope`

---

### 62. First column: (1,4,−7). Which entry does partial pivoting choose?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(−7), because it has the largest magnitude. The sign is irrelevant to avoiding a small divisor.

**Intuition:** Choose the largest absolute pivot, not the most positive.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-pivot-choice`

---

### 63. Why keep LU factors when solving for many right-hand sides?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Dense factorization costs \(O(n^{3})\). Once it is done, each pair of triangular solves costs \(O(n^{2})\).

**Intuition:** Pay for the expensive structure once.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-lu-reuse`

---

### 64. With \(PA=LU\), how do you solve \(Ax=b\)?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Solve \(Ly=Pb\), then \(Ux=y\). Apply the row permutation to b as well as A.

**Intuition:** Reordering equations also reorders their right-hand sides.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-solve-with-permutation`

---

### 65. Why can you solve a lower-triangular system from top to bottom?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The first row gives the first unknown. Each later row uses values already found.

**Intuition:** Triangular structure turns one large problem into small steps.

</details>

Sources: [Heath · Ch. 2 exercises · triangular solves](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=117)

Card ID: `am205-triangular-step`

---

### 66. If \(A=LU\), which factor comes first when solving \(A^{\mathsf{T}}x=b\)?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

First solve \(U^{\mathsf{T}}y=b\), then \(L^{\mathsf{T}}x=y\), because \(A^{\mathsf{T}}=U^{\mathsf{T}}L^{\mathsf{T}}\).

**Intuition:** Transposing reverses the product order.

</details>

Sources: [Heath · Ch. 2 review Q2.48, printed p. 94](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-transpose-solve`

---

### 67. To compute \(A^{-1}Bc\), should you build \(A^{-1}\)?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Compute \(v=Bc\), then solve \(Ax=v\). This avoids an unnecessary inverse and matrix–matrix product.

**Intuition:** Apply an inverse by solving, not by constructing it.

</details>

Sources: [Heath · Ch. 2 review Q2.44–46, printed p. 94](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-inverse-product-cost`

---

### 68. What does Cholesky need beyond symmetry?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Positive definiteness. A real symmetric positive-definite matrix has \(A=LL^{\mathsf{T}}\) with positive diagonal entries in L.

**Intuition:** The quadratic energy must be positive in every nonzero direction.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-cholesky`

---

### 69. Do positive diagonal entries make a symmetric matrix positive definite?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(\begin{bmatrix}1&2\\2&1\end{bmatrix}\) has eigenvalue −1. The direction (1,−1) gives a negative quadratic form.

**Intuition:** Checking coordinate directions alone misses tilted directions.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-positive-definite-test`

---

### 70. How do you multiply \(uv^{\mathsf{T}}\) by x without building a matrix?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Compute the scalar \(v^{\mathsf{T}}x\), then scale u by it. The work is \(O(n)\), rather than \(O(n^{2})\), for length-n vectors.

**Intuition:** A rank-one map measures one direction and outputs another.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-rank-one`

---

### 71. Why is \(uv^{\mathsf{T}}\) rank one when u and v are nonzero?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every column is a multiple of u, and at least one is nonzero.

**Intuition:** All output columns share one direction.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-outer-product-rank`

---

### 72. Why can normal equations make least squares numerically harder?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For full-column-rank X, \(\kappa _{2}(X^{\mathsf{T}}X)=\kappa _{2}(X)^{2}\). Forming \(X^{\mathsf{T}}X\) magnifies the condition number.

**Intuition:** Squaring the matrix’s stretch ratios magnifies sensitivity.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134); [Review · 3.14 · conditioning](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-normal-squared`

---

### 73. With \(X=QR\), which system gives the least-squares coefficients?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(R\beta =Q^{\mathsf{T}}y\), for reduced QR with full column rank. Project y onto Q’s directions, then solve the triangular system.

**Intuition:** Separate geometry from the coefficient solve.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134); [Review · QR and least squares](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=6)

Card ID: `am205-qr-reduction`

---

### 74. What makes \(X^{+}y\) special among rank-deficient least-squares solutions?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It has the smallest Euclidean coefficient norm. Adding a null-space vector keeps the same fit but increases the norm.

**Intuition:** The pseudoinverse chooses the shortest coefficient explanation.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134); [Review · SVD minimum norm](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=6)

Card ID: `am205-svd-minimum-norm`

---

### 75. Is the binary64 gap at 100 different from the gap at 99?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Both lie in [64,128), so both have gap \(2^{-46}\).

**Intuition:** One power-of-two interval shares one spacing.

</details>

Sources: [PS1 · Q1(a) · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [2023 · Q11](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-spacing-at-100`

---

### 76. What happens to binary64 spacing when you cross 128?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles from \(2^{-46}\) to \(2^{-45}\).

**Intuition:** The exponent increases; the number of significant bits does not.

</details>

Sources: [PS1 · Q1(a) · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing-at-128`

---

### 77. Why does nearest rounding involve half a gap?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Any point between neighbors is at most half their distance from the closer neighbor.

**Intuition:** Rounding chooses the nearer endpoint.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-half-gap`

---

### 78. On the grid 1, 1.25, 1.5, 1.75, where does 1.4 round?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To 1.5: it is 0.1 away, versus 0.15 from 1.25.

**Intuition:** Representable values are a grid, not every decimal.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-toy-round`

---

### 79. Are all integers above \(2^{53}\) impossible in binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In \([2^{53},2^{54})\), every even integer is representable. The odd integers fall between grid points.

**Intuition:** Losing consecutive integers does not mean losing all integers.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61); [2024 · Q1](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-even-large`

---

### 80. Why isn’t decimal 0.1 exact in binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(0.1=\frac{1}{10}\), whose reduced denominator includes 5. Its binary expansion repeats and must be rounded.

**Intuition:** A short decimal need not be a short binary fraction.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-decimal-point-one`

---

### 81. Does a terminating binary expansion guarantee a value fits binary64?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not by itself. It must also fit the format’s exponent range and precision.

**Intuition:** An exact expansion can still need too many bits.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-fraction-range`

---

### 82. How many points are there in two adjacent grid gaps?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three: one at each end and one in the middle.

**Intuition:** Endpoints are like fenceposts, not fence panels.

</details>

Sources: [PS1 · Q1(b) · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-three-fenceposts`

---

### 83. Why can reciprocal rounding lose distinctions between nearby large inputs?

**AM 205 · Rounding & information loss · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The reciprocal curve gets flatter as inputs grow. Their outputs can differ by less than the output grid spacing.

**Intuition:** A flat transformation can squeeze differences below resolution.

</details>

Sources: [PS1 · Q1(c–e) · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-reciprocal-compression`

---

### 84. Can 5 \(\times\) \((\frac{1}{5})\) still equal 1 on a computer?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Although \(\frac{1}{5}\) is rounded, the product may round back to exactly 1.

**Intuition:** A rounded intermediate does not force a wrong final value.

</details>

Sources: [PS1 · Q2 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-rounded-product`

---

### 85. Can deleting a row be written as matrix multiplication?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Multiply on the left by a rectangular matrix that selects the rows you keep.

**Intuition:** Matrix operators need not be square.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-delete`

---

### 86. Is replacing row 1 by row 3 reversible?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The original row 1 is lost. The corresponding row-operation matrix is singular.

**Intuition:** Copying is different from swapping.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-copy`

---

### 87. If row operation \(L_{1}\) happens before \(L_{2}\), what is the final product?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(L_{2}L_{1}B\). The operator nearest B acts first.

**Intuition:** Left operations accumulate outward to the left.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-left-compose`

---

### 88. If column operation \(C_{1}\) happens before \(C_{2}\), what is the final product?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(BC_{1}C_{2}\).

**Intuition:** Right operations accumulate outward to the right.

</details>

Sources: [PS1 · Q3 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-right-compose`

---

### 89. What do the right singular vectors tell you about a linear map?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are the input directions that become the ellipse’s principal axes after transformation.

**Intuition:** Right vectors describe input directions; left vectors describe outputs.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-right-vectors`

---

### 90. Why plot transformed disks with equal axis scales?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Unequal plot scales can make a circle look like an ellipse or distort the true stretch ratio.

**Intuition:** The display can manufacture apparent geometry.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-equal-plot-scales`

---

### 91. Does a negative determinant mean negative area?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Absolute determinant gives area scale. A negative sign indicates an orientation reversal.

**Intuition:** Magnitude measures size; sign measures orientation.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-determinant-sign`

---

### 92. Why is an orthogonal matrix easy to invert?

**AM 205 · Geometry of linear maps · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For square Q, \(Q^{\mathsf{T}}Q=I\), so \(Q^{-1}=Q^{\mathsf{T}}\).

**Intuition:** Undo a rotation or reflection by transposing.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-orthogonal-inverse`

---

### 93. A pivot is \(10^{-12}\) and the entry below is 5. What multiplier eliminates it?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(5/10^{-12}=5\times 10^{12}\). That huge multiplier is the numerical warning.

**Intuition:** The pivot is a divisor, so its scale matters.

</details>

Sources: [PS2 · Q1 · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot-multiplier`

---

### 94. Does pivoting make an ill-conditioned problem well-conditioned?

**AM 205 · Gaussian elimination · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It improves the elimination procedure but does not remove sensitivity in the original problem.

**Intuition:** A safer algorithm cannot improve the information in the data.

</details>

Sources: [PS2 · Q1 · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot-does-not-fix`

---

### 95. What does one row swap do to a determinant?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It flips the sign without changing the magnitude.

**Intuition:** Swapping reverses orientation.

</details>

Sources: [PS2 · Q1(a) · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-swap-det`

---

### 96. Why is a triangular matrix’s determinant the diagonal product?

**AM 205 · LU factorization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its triangular structure eliminates the competing determinant terms.

**Intuition:** Only the diagonal route contributes.

</details>

Sources: [PS2 · Q1(a) · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-triangular-det`

---

### 97. Can a nearly simple image have full exact rank?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Tiny noise can make every singular value nonzero, even if only a few are large.

**Intuition:** Exact rank and useful approximate rank answer different questions.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-noisy-full-rank`

---

### 98. If every image row is a multiple of one row, what is its rank?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One, unless the image is entirely zero.

**Intuition:** One horizontal pattern plus row weights is enough.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-one-pattern-image`

---

### 99. If every pixel error doubles, what happens to RMS error?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles. Squaring gives a factor of four, then the square root removes half that power.

**Intuition:** RMS has the same units as the pixels.

</details>

Sources: [PS2 · Q2 · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rms-scale`

---

### 100. What is the squared Frobenius error of a rank-k truncated SVD?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum of squares of the discarded singular values: \(\sum_{i>k}\sigma_i^2\).

**Intuition:** Discarded stretches account for the remaining squared error.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-svd-tail`

---

### 101. A column has m entries and a row has n. What shape is their outer product?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(m\times n\). Every column entry multiplies every row entry.

**Intuition:** An outer product builds a matrix from two patterns.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-outer-shape`

---

### 102. Can a sum of k rank-one matrices have rank larger than k?

**AM 205 · Low-rank approximation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its column space fits inside the span of at most k column vectors.

**Intuition:** Each rank-one term adds at most one direction.

</details>

Sources: [PS2 · Q2 · method comparison · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rank-sum`

---

### 103. How many coefficients does a centered ellipse fit use?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three: b,c,d for \(x^{2},xy,y^{2}\). “Centered” removes linear x and y terms from this model.

**Intuition:** Model assumptions determine the number of unknowns.

</details>

Sources: [PS2 · Q3(a) · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-three-features`

---

### 104. Do three ellipse-fit points guarantee unique coefficients?

**AM 205 · Least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Their feature rows must also be linearly independent.

**Intuition:** Three equations can repeat the same constraint.

</details>

Sources: [PS2 · Q3(a) · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-points-not-enough`

---

### 105. If \(c=0\) in \(bx^{2}+cxy+dy^{2}=1\), how are valid ellipse axes oriented?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Along the coordinate axes, provided b and d are positive.

**Intuition:** The cross term is what couples the coordinates.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-axis-aligned`

---

### 106. If Q has one positive and one negative eigenvalue, is \(x^{\mathsf{T}}Qx=1\) an ellipse?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In its eigenbasis, one squared term is subtracted: the curve is a hyperbola.

**Intuition:** An indefinite quadratic opens in opposing directions.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-indefinite-curve`

---

### 107. What gives the axis directions of \(x^{\mathsf{T}}Qx=1\) for positive-definite Q?

**AM 205 · Model validity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Q’s orthonormal eigenvectors.

**Intuition:** Diagonalizing Q uncouples the coordinate directions.

</details>

Sources: [PS2 · Q3 · interpretation · companion concept check](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-eigenvector-axes`

---

### 108. For a point uniform in a unit disk, what is \(P(r\le \frac{1}{2})\)?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{4}\), because area scales as radius squared.

**Intuition:** Half the radius encloses only a quarter of the area.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations · companion concept check](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am205-half-radius`

---

### 109. What fraction of uniform points in \([-1,1]^{2}\) land inside the unit disk?

**AM 205 · AM 205 × AM 207 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\pi /4\): disk area divided by square area.

**Intuition:** Rejection sampling turns area ratios into acceptance rates.

</details>

Sources: [PS1 · Q4 · companion concept check](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations · companion concept check](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am205-square-rejection`

---

### 110. Can a well-posed problem be ill-conditioned?

**AM 205 · Foundations of computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Its answer can depend continuously but very steeply on the input.

**Intuition:** Continuous does not mean insensitive.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-wellposed-not-wellconditioned`

---

### 111. A perfect solver predicts motion with no air resistance. Why can it miss reality?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The model omits a relevant force. That is modeling error, even if the equations are solved exactly.

**Intuition:** Computational correctness is not model correctness.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-model-error`

---

### 112. Approximating a curve with straight segments introduces which error?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Discretization error: a continuous object is replaced by a finite approximation.

**Intuition:** The approximation exists before floating-point rounding begins.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-discretization-example`

---

### 113. Can higher precision recover digits a sensor never measured?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It can preserve available information, not create missing information.

**Intuition:** Input uncertainty survives a perfect calculation.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-input-noise`

---

### 114. If derivative error is roughly \(h+u/h\), where is the best scale for h?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Near \(\sqrt{u}\), where the two error terms balance.

**Intuition:** Do not improve one error source while ignoring the other.

</details>

Sources: [Heath · Ch. 1 review Q1.50, printed p. 41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-balance-step`

---

### 115. Can cancellation be harmful even if subtraction itself is exact?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. It can reveal errors already present in the two operands.

**Intuition:** The dangerous error may enter before the subtraction.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-exact-subtraction`

---

### 116. In a scaled norm calculation, what if \(\max (\operatorname{abs}(a),\operatorname{abs}(b))=0\)?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Return zero. Both inputs are zero, so no division is needed.

**Intuition:** Handle the zero case before dividing by the scale.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-zero-scale`

---

### 117. Under IEEE arithmetic, why is \(\frac{0}{0}\) NaN rather than infinity?

**AM 205 · Error sources · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No unique quotient is determined. Any finite number multiplied by zero gives zero.

**Intuition:** Undefined information is different from an unbounded result.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-zero-over-zero`

---

### 118. Why is relative error awkward when the true answer is zero?

**AM 205 · Error measures · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The usual formula divides by the true magnitude. Use absolute error or another meaningful reference scale instead.

**Intuition:** Choose an error measure with a meaningful denominator.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-relative-zero`

---

### 119. If \(\sqrt{2}\) is approximated by 1.4, what is the forward error?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About 0.0142: \(\operatorname{abs}(\sqrt{2}-1.4)\).

**Intuition:** Forward error measures the answer, not the input.

</details>

Sources: [Heath · §1.2.5, printed p. 12 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-forward-sqrt`

---

### 120. Why is the perturbation to b equal to −r when \(r=b-A\hat{x}\)?

**AM 205 · Error analysis · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Rearrange the definition: \(A\hat{x}=b-r\).

**Intuition:** Residual sign conventions matter.

</details>

Sources: [Heath · §1.2.5, printed p. 12 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-residual-sign`

---

### 121. Which belongs to the problem: conditioning or stability?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Conditioning. Stability describes how an algorithm handles rounding and perturbations.

**Intuition:** Separate a sensitive question from a fragile computation.

</details>

Sources: [Heath · §1.2.6, printed p. 13 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-problem-vs-solver`

---

### 122. Can a function have a large slope but small relative sensitivity?

**AM 205 · Conditioning vs stability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. For \(\sqrt{x}\) near zero, the slope is large but relative condition number is \(\frac{1}{2}\).

**Intuition:** Raw units and percentage changes tell different stories.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-absolute-vs-relative`

---

### 123. Why can parallel sums differ slightly from serial sums?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They group additions differently. Floating-point rounding makes grouping matter.

**Intuition:** Different reduction trees can produce different last digits.

</details>

Sources: [Heath · Ch. 1 review · floating-point properties · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-parallel-sums`

---

### 124. What is the idea behind compensated summation?

**AM 205 · Floating-point arithmetic · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Track small rounding losses in a correction term so later additions can recover part of them.

**Intuition:** Do not silently discard every tiny contribution.

</details>

Sources: [Heath · Ch. 1 review Q1.45–49, printed p. 41 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-compensation`

---

### 125. Does multiplying an invertible matrix by a nonzero scalar change its condition number?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, for the same induced norm: \(\Vert \alpha A\Vert \Vert (\alpha A)^{-1}\Vert =\Vert A\Vert \Vert A^{-1}\Vert\).

**Intuition:** Uniform scaling cancels out of the sensitivity ratio.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-condition-scaling`

---

### 126. What does \(\Vert Ax\Vert \le \Vert A\Vert \Vert x\Vert\) tell you?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The induced matrix norm bounds how much A can amplify a vector’s size.

**Intuition:** A matrix norm is a worst-direction stretch bound.

</details>

Sources: [Heath · Ch. 2 review · matrix norms · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-norm-bound`

---

### 127. What is the smallest possible 2-norm condition number of an invertible matrix?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. Its largest singular value cannot be smaller than its smallest.

**Intuition:** Equal stretch in every direction is best conditioned.

</details>

Sources: [Heath · Ch. 2 review Q2.57, printed p. 94 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-condition-one`

---

### 128. Why normalize a linear-system residual?

**AM 205 · Linear-system verification · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiplying A and b by a tiny scalar makes the raw residual tiny without improving \(\hat{x}\). Normalization accounts for the problem’s scale.

**Intuition:** Small needs a reference scale.

</details>

Sources: [Heath · §2.3.5, printed p. 61 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82); [Review · 2.33(c)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-scaled-residual`

---

### 129. If \(Ax=Ay\), where does x−y live?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In the null space, because \(A(x-y)=0\).

**Intuition:** Nonuniqueness lives in invisible directions.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-null-difference`

---

### 130. When does an \(m\times n\) matrix map onto every b in \(\mathbb{R}^{m}\)?

**AM 205 · Linear systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When it has full row rank m.

**Intuition:** Every output direction must be reachable.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-full-row-rank`

---

### 131. Why must complete pivoting track column swaps?

**AM 205 · Pivoting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They reorder the variables. Without undoing them, the solution entries can be assigned to the wrong unknowns.

**Intuition:** A correct value in the wrong position is still wrong.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-column-permutation`

---

### 132. After dense LU factorization, does doubling n roughly double solve cost?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A triangular solve costs \(O(n^{2})\), so doubling n roughly quadruples that work.

**Intuition:** Reusing factors is cheaper, but not free.

</details>

Sources: [Heath · Ch. 2 review · repeated systems · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-many-b-cost`

---

### 133. Which triangular solve runs backward from the last row?

**AM 205 · Efficient linear solves · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The upper-triangular solve. The last equation isolates the last unknown.

**Intuition:** Start where only one unknown remains.

</details>

Sources: [Heath · Ch. 2 review · repeated systems · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-forward-backward`

---

### 134. What is \(LL^{\mathsf{T}}\) for \(L=\begin{bmatrix}2&0\\1&1\end{bmatrix}\)?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\begin{bmatrix}4&2\\2&2\end{bmatrix}\). This supplies a concrete positive-definite example.

**Intuition:** A factorization can certify positive definiteness.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-cholesky-check`

---

### 135. Can a positive-definite matrix be badly conditioned?

**AM 205 · Structured factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. \(\operatorname{diag}(1,10^{-12})\) is positive definite but has condition number \(10^{12}\).

**Intuition:** Positive eigenvalues need not have similar magnitudes.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95 · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116); [Review · 2.17](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-spd-sensitive`

---

### 136. Where must the output of \(uv^{\mathsf{T}}x\) lie?

**AM 205 · Low-rank computation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In span(u), whatever x is.

**Intuition:** A rank-one map funnels every input into one output direction.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-rank-one-output`

---

### 137. If \(\kappa _{2}(X)=10\), what is \(\kappa _{2}(X^{\mathsf{T}}X)\) for full-column-rank X?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100.

**Intuition:** Normal equations square the stretch ratio.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-condition-ten`

---

### 138. Which part of y can a least-squares fit in C(X) never match?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its orthogonal component \((I-QQ^{\mathsf{T}})y\).

**Intuition:** Least squares cannot fit a direction outside the model space.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-qr-leftover`

---

### 139. Why can inverting a tiny singular value amplify noise?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its reciprocal is huge, so a small data component becomes a large coefficient component.

**Intuition:** Weakly observed directions are expensive to reconstruct.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-tiny-singular-inverse`

---

### 140. Why does a numerical pseudoinverse need a tolerance?

**AM 205 · Least-squares algorithms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It must decide which small singular values count as zero. That decision changes the effective rank.

**Intuition:** Numerical rank depends on scale and resolution.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading · companion concept check](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-pseudoinverse-threshold`

---

### 141. How does uncertainty differ from error?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Error is a discrepancy from a true or reference value. Uncertainty describes the range of plausible values when knowledge is incomplete.

**Intuition:** A narrow uncertainty estimate can still miss the truth.

</details>

Sources: [Lecture 01 · p. 8](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=8)

Card ID: `am207-uncertainty-error`

---

### 142. When rolling a die, what outcomes belong to the event “an even result”?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The outcomes {2,4,6}. An event is a group of possible outcomes satisfying a condition; its probability is the chance the result falls in that group.

**Intuition:** An event can contain many elementary outcomes.

</details>

Sources: [Lecture 01 · p. 11](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=11)

Card ID: `am207-event-set`

---

### 143. If you assign probabilities to outcomes, what rules keep the assignments consistent?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No event can have negative probability; all possible outcomes together have probability 1; probabilities of countably many nonoverlapping events add. This assignment rule is formally called a probability measure.

**Intuition:** Disjoint alternatives can be added directly.

</details>

Sources: [Lecture 01 · p. 12](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-probability-axioms`

---

### 144. How do you find the probability that A does not happen?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P(A^{c})=1-P(A)\).

**Intuition:** A and its complement exhaust all possibilities.

</details>

Sources: [Lecture 01 · p. 12](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-complement-event`

---

### 145. Why subtract \(P(A\cap B)\) when finding \(P(A\cup B)\)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Adding \(P(A)+P(B)\) counts the overlap twice. Subtract it once.

**Intuition:** An outcome in both events is still only one outcome.

</details>

Sources: [Lecture 01 · p. 12](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-union-overlap`

---

### 146. Why divide by \(P(B)\) in \(P(A\mid B)\)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Conditioning restricts attention to B. Dividing \(P(A\cap B)\) by \(P(B)\) renormalizes that restricted space.

**Intuition:** Within the new universe B, total probability must be 1.

</details>

Sources: [Lecture 01 · p. 18](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-conditional-denominator`

---

### 147. How do mutually exclusive cases \(B_{i}\) help compute \(P(A)\)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

If the cases cover the sample space, \(P(A)=\sum_i P(A\mid B_i)P(B_i)\).

**Intuition:** Average the conditional chances using the chances of each case.

</details>

Sources: [Lecture 01 · p. 18](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-total-probability`

---

### 148. What does independence of A and B mean?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P(A\cap B)=P(A)P(B)\). When \(P(B)>0\), knowing B does not change the probability of A.

**Intuition:** Independence concerns information, not whether events look unrelated.

</details>

Sources: [Lecture 01 · p. 18](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-independence-meaning`

---

### 149. Why simulate many possible runs of the same random system?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A single run shows one possible history. A collection of runs, called an ensemble, shows the range of outcomes and lets you estimate probabilities and expected values.

**Intuition:** It represents alternatives, not necessarily particles in one physical system.

</details>

Sources: [Lecture 01 · p. 29](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=29)

Card ID: `am207-ensemble-meaning`

---

### 150. Do two separately simulated runs affect one another?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. They represent alternative histories. Particles within one run may interact, but particles in different runs do not. The collection of possible runs is called an ensemble.

**Intuition:** Separate possible worlds from components of one world.

</details>

Sources: [Lecture 01 · p. 30](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=30)

Card ID: `am207-ensemble-members`

---

### 151. Can the expected number of molecules be noninteger?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Every realization has an integer count, but a weighted average of those counts need not be integer.

**Intuition:** A mean need not be a possible individual outcome.

</details>

Sources: [Lecture 01 · p. 31](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=31)

Card ID: `am207-ensemble-fraction`

---

### 152. Why is the mean of an event indicator its probability?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The indicator is 1 on the event and 0 otherwise, so its expected value is \(1\cdot P(A)+0\cdot P(A^{c})=P(A)\).

**Intuition:** Counting event occurrences estimates a probability.

</details>

Sources: [Lecture 01 · p. 33](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=33)

Card ID: `am207-indicator-probability`

---

### 153. If you roll two dice and record their sum, what makes that sum a random variable?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each possible pair of dice results maps to one number: its sum. The rule is fixed, but the recorded value is uncertain because the dice outcomes are uncertain.

**Intuition:** It turns outcomes into quantities you can analyze.

</details>

Sources: [Lecture 01 · p. 35](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=35)

Card ID: `am207-random-variable-map`

---

### 154. Can a probability density exceed 1?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Probabilities are areas under the density, and the total area must be 1.

**Intuition:** Height is not probability.

</details>

Sources: [Lecture 01 · p. 36](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-density-not-probability`

---

### 155. What does F(x) tell you?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(F(x)=P(X\le x)\), the probability accumulated up to x.

**Intuition:** A CDF never decreases and runs from 0 to 1.

</details>

Sources: [Lecture 01 · p. 36](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-cdf-definition`

---

### 156. How do you obtain \(P(a<X\le b)\) from a CDF?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract F(a) from F(b).

**Intuition:** The difference removes probability accumulated before the interval.

</details>

Sources: [Lecture 01 · p. 36](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-interval-cdf`

---

### 157. How can you calculate variance from the expected value of X and \(X^{2}\)?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Var}(X)=E[X^{2}]-E[X]^{2}\), when both expected values are finite. Average the squared values, then subtract the square of their average; the remainder captures spread.

**Intuition:** Spread is the second moment after removing the squared center.

</details>

Sources: [Lecture 01 · p. 37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=37)

Card ID: `am207-variance-second-moment`

---

### 158. Is \(E[g(X)]\) always equal to \(g(E[X])\)?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. For \(g(x)=x^{2}\), their difference is \(\operatorname{Var}(X)\).

**Intuition:** Nonlinear transformations and averaging usually do not commute.

</details>

Sources: [Lecture 01 · p. 37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=37)

Card ID: `am207-nonlinear-average`

---

### 159. Why do we need more than one random variable to describe a random trajectory?

**AM 207 · Ensembles and random variables · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

We need a random value at each time and a description of how those values depend on one another. That collection is a stochastic process.

**Intuition:** Knowing each time's marginal distribution does not specify temporal dependence.

</details>

Sources: [Lecture 01 · p. 38](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=38)

Card ID: `am207-stochastic-process`

---

### 160. If X is normal and \(Y=e^{x}\), what values can Y take?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only positive values. Exponentiation maps the real line to (0,∞).

**Intuition:** Check the transformed support before writing a density.

</details>

Sources: [Lecture 01 · p. 41](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=41)

Card ID: `am207-lognormal-support`

---

### 161. Why does a lognormal density contain a factor \(1/y\)?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The inverse transformation is \(x=\log y\), whose derivative is \(1/y\). Thus \(f_Y(y)=\frac{f_X(\log y)}{y}\) for \(y>0\).

**Intuition:** Density stretches inversely with the coordinate scale.

</details>

Sources: [Lecture 01 · p. 41](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=41)

Card ID: `am207-lognormal-jacobian`

---

### 162. How can inverse-CDF sampling handle a discrete distribution?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use the smallest x for which \(F(x)\ge U\). Each jump of the CDF receives a uniform interval equal to its probability mass.

**Intuition:** Flat and jumping CDFs need a generalized inverse.

</details>

Sources: [Lecture 01 · p. 44](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-generalized-inverse`

---

### 163. What does a PRNG seed control?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It fixes the initial state of a deterministic generator and therefore its subsequent sequence.

**Intuition:** A seed makes a random-looking computation reproducible.

</details>

Sources: [Lecture 02 · p. 5](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=5)

Card ID: `am207-seed-determinism`

---

### 164. Why must a finite-state PRNG eventually repeat?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After enough steps, a state repeats. Deterministic updates then repeat the same future sequence.

**Intuition:** A long period matters when drawing many samples.

</details>

Sources: [Lecture 02 · p. 6](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=6)

Card ID: `am207-finite-state-period`

---

### 165. How does a linear congruential generator update its state?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(x_{n+1}=(ax_n+c)\bmod m\).

**Intuition:** Simple arithmetic can generate long sequences, but parameter choices affect quality.

</details>

Sources: [Lecture 02 · p. 6](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=6)

Card ID: `am207-lcg-rule`

---

### 166. Can passing randomness tests prove that PRNG outputs are independent?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Tests can detect certain patterns, but cannot certify every property of a deterministic sequence.

**Intuition:** Passing a diagnostic is evidence, not a universal guarantee.

</details>

Sources: [Lecture 02 · p. 8](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=8)

Card ID: `am207-random-tests-limit`

---

### 167. Why should you avoid resetting the same seed inside a sampling loop?

**AM 207 · Random number generation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each reset restarts the sequence, often producing the same draw repeatedly.

**Intuition:** Seed once, then let the generator advance.

</details>

Sources: [Lecture 02 · p. 11](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=11)

Card ID: `am207-reseed-loop`

---

### 168. How does uniform sampling on a region D estimate an integral?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply the sample average of f(X) by the volume of D.

**Intuition:** Uniform density equals one divided by the region's volume.

</details>

Sources: [Lecture 02 · p. 12](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=12)

Card ID: `am207-uniform-volume-general`

---

### 169. What changes when several x values map to the same y?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add the density contribution from every inverse branch, each divided by the absolute forward derivative.

**Intuition:** All routes to the same output contribute probability.

</details>

Sources: [Lecture 02 · p. 19](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-transform-branches`

---

### 170. For X uniform on (0,1), what is the density of \(Y=4(X-\frac{1}{2})^{2}\)?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(f_Y(y)=\frac{1}{2\sqrt{y}}\) for \(0<y<1\). The two inverse branches contribute equally.

**Intuition:** A symmetric fold combines probability from both sides.

</details>

Sources: [Lecture 02 · p. 20](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=20)

Card ID: `am207-squared-uniform-density`

---

### 171. When does F(X) have a uniform distribution?

**AM 207 · Probability transforms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When X has a continuous CDF F. Discrete CDFs generally produce discrete probability levels instead.

**Intuition:** Continuity matters for the probability integral transform.

</details>

Sources: [Lecture 02 · p. 21](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=21)

Card ID: `am207-probability-integral-condition`

---

### 172. Where must a rejection-sampling envelope dominate the target?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Everywhere the target has positive density, up to sets of zero probability.

**Intuition:** A missed peak can bias the accepted sample.

</details>

Sources: [Lecture 02 · p. 32](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection-global-bound`

---

### 173. For normalized p and proposal q with \(p\le Mq\), what fraction of proposals is accepted on average?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1/M\).

**Intuition:** A loose envelope wastes more proposals.

</details>

Sources: [Lecture 02 · p. 34](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=34)

Card ID: `am207-rejection-acceptance-fraction`

---

### 174. Can a proposal with zero density in part of the target's support work?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It can never propose outcomes from that missing region.

**Intuition:** Coverage of the target support comes before efficiency.

</details>

Sources: [Lecture 02 · p. 32](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection-support`

---

### 175. How does MCMC reverse the usual stochastic-modeling problem?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Instead of starting with dynamics and finding their distribution, you start with a target distribution and design dynamics that preserve it.

**Intuition:** The chain is a tool for sampling the target.

</details>

Sources: [Lecture 02 · p. 41](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=41)

Card ID: `am207-mcmc-reverse-design`

---

### 176. Is rejection in Metropolis–Hastings an absence of a transition?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It is a transition back to the current state, contributing to the transition rule’s probability of staying put.

**Intuition:** Staying put is part of the Markov chain.

</details>

Sources: [Lecture 02 · p. 42](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=42)

Card ID: `am207-mh-holding`

---

### 177. Why can Metropolis–Hastings use an unnormalized target?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The common normalization constant cancels in the target-density ratio.

**Intuition:** Relative density is enough to decide acceptance.

</details>

Sources: [Lecture 02 · p. 38](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=38)

Card ID: `am207-mh-normalizer`

---

### 178. Does an invariant target alone guarantee convergence from any starting point?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The chain also needs suitable accessibility and convergence conditions; a chain trapped in one region can preserve the target without exploring it.

**Intuition:** Preserving a distribution and reaching it are different questions.

</details>

Sources: [Lecture 02 · p. 47](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=47)

Card ID: `am207-stationarity-convergence`

---

### 179. Does the Markov property make consecutive states independent?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The next state can depend strongly on the current state; the earlier past adds no information once the present is known.

**Intuition:** One-step memory still creates correlation.

</details>

Sources: [Lecture 03 · p. 10](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=10)

Card ID: `am207-markov-not-iid`

---

### 180. Why can a very high acceptance rate signal inefficient sampling?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Proposals may be so small that the chain barely moves, producing highly correlated draws.

**Intuition:** Accepted steps must also cover useful distance.

</details>

Sources: [Lecture 03 · p. 22](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=22)

Card ID: `am207-acceptance-too-high`

---

### 181. Why can very large proposals slow exploration?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Many proposals land in low-density regions and are rejected, leaving repeated states.

**Intuition:** Big attempted moves do not guarantee big actual moves.

</details>

Sources: [Lecture 03 · p. 22](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=22)

Card ID: `am207-acceptance-too-low`

---

### 182. Is one acceptance-rate target optimal for every MCMC problem?

**AM 207 · Markov chain sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Useful rates depend on the proposal, dimension, and target geometry.

**Intuition:** Judge mixing and effective information, not a single percentage alone.

</details>

Sources: [Lecture 03 · p. 23](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=23)

Card ID: `am207-acceptance-target-universal`

---

### 183. What is the variance of an average of N IID draws with variance \(\sigma ^{2}\)?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{\sigma^2}{N}\).

**Intuition:** Independent averaging reduces variance linearly with sample count.

</details>

Sources: [Lecture 03 · p. 27](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=27)

Card ID: `am207-iid-mean-variance`

---

### 184. What assumption supports the usual \(\frac{1}{\sqrt{N}}\) Monte Carlo error scale?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Finite variance, together with suitable sampling assumptions such as IID draws.

**Intuition:** Heavy tails can break familiar error estimates.

</details>

Sources: [Lecture 03 · p. 28](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=28)

Card ID: `am207-mc-finite-variance`

---

### 185. Does a dimension-independent \(\frac{1}{\sqrt{N}}\) rate mean high-dimensional integration is easy?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The variance and cost per draw can grow dramatically with dimension.

**Intuition:** The rate hides a problem-dependent constant.

</details>

Sources: [Lecture 03 · p. 30](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=30)

Card ID: `am207-mc-dimension-constant`

---

### 186. Which expected value equals \(\int_0^\infty\cos(2x)e^{-x}\,dx\)?

**AM 207 · Monte Carlo integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E[\cos (2X)]\) for \(X\sim \operatorname{Exponential}(1)\). The integral equals \(\frac{1}{5}\).

**Intuition:** Recognizing a density turns an integral into a sampling problem.

</details>

Sources: [Lecture 03 · p. 29](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=29)

Card ID: `am207-exponential-integral-example`

---

### 187. Where must an importance proposal q be positive?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Where the integrand times the target density is nonzero.

**Intuition:** Weights cannot recover a region you never sample.

</details>

Sources: [Lecture 03 · p. 33](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=33)

Card ID: `am207-importance-support`

---

### 188. What determines importance-sampling variance?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The variability of \(\frac{f(X)p(X)}{q(X)}\) under draws from q.

**Intuition:** A good proposal makes weighted contributions similar.

</details>

Sources: [Lecture 03 · p. 34](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance-variance`

---

### 189. Where should an ideal importance sampler spend its effort to estimate \(\mathbb{E}_p[f(X)]\)?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Where \(|f(x)|p(x)\) is large. Under standard integrability conditions, sampling in proportion to that quantity minimizes variance: focus on regions that contribute most to the integral.

**Intuition:** Sample where contributions are large, not merely where p is large.

</details>

Sources: [Lecture 03 · p. 35](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-importance-optimal-shape`

---

### 190. Why is the ideal proposal often unavailable in practice?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its normalizing constant may be the very integral you want to estimate.

**Intuition:** The theoretical optimum explains the goal without automatically solving the problem.

</details>

Sources: [Lecture 03 · p. 35](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-importance-zero-variance-catch`

---

### 191. For \(X\sim N(0,\sigma ^{2}I)\) in d dimensions, where is its typical radius for large d?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Near \(\sigma \sqrt{d}\), because \(E[\Vert X\Vert ^{2}]=d\sigma ^{2}\) and the squared radius concentrates relatively.

**Intuition:** Most Gaussian mass is far from its density peak at the origin.

</details>

Sources: [Lecture 03 · p. 39](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=39)

Card ID: `am207-normal-typical-radius`

---

### 192. How variable is the squared radius of a d-dimensional isotropic normal?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Var}(\Vert X\Vert ^{2})=2d\sigma ^{4}\).

**Intuition:** Relative fluctuations shrink as dimension grows.

</details>

Sources: [Lecture 03 · p. 39](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=39)

Card ID: `am207-normal-radius-variance`

---

### 193. Why can the highest-density point lie far from most probability mass?

**AM 207 · High-dimensional geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Probability depends on both density and available volume. High-dimensional shells contain enormous volume.

**Intuition:** Peak density is not the same as a typical location.

</details>

Sources: [Lecture 03 · p. 38](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=38)

Card ID: `am207-density-mode-mass`

---

### 194. What is the state of an Ising model?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A configuration of spins, each taking the value +1 or −1.

**Intuition:** The random object is the whole configuration.

</details>

Sources: [Lecture 03 · p. 41](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=41)

Card ID: `am207-ising-state`

---

### 195. For energy \(-J\sum s_{i}s_{j}\) with \(J>0\), which neighbors are favored?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Aligned neighbors have lower energy than opposite neighbors.

**Intuition:** Positive coupling encourages local agreement.

</details>

Sources: [Lecture 03 · p. 41](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=41)

Card ID: `am207-ising-ferromagnetic`

---

### 196. How does temperature affect Boltzmann probabilities?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The weight is \(\exp (-E/(kBT))\). Higher temperature reduces the penalty for higher energy.

**Intuition:** Heat makes energetic differences less decisive.

</details>

Sources: [Lecture 03 · p. 42](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=42)

Card ID: `am207-boltzmann-temperature`

---

### 197. What is the energy change from flipping one Ising spin \(s_{i}\)?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\Delta E=2Js_{i}\sum _{j}s_{j}\), summing over its neighbors with each bond counted once in the energy.

**Intuition:** Only bonds touching the flipped spin change.

</details>

Sources: [Lecture 03 · p. 44](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=44)

Card ID: `am207-ising-flip-cost`

---

### 198. What goes wrong if an energy sum counts each neighboring pair twice?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles the interaction energy. Count each bond once or divide that sum by two.

**Intuition:** Implementation conventions must match the acceptance formula.

</details>

Sources: [Lecture 03 · p. 44](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=44)

Card ID: `am207-ising-double-count`

---

### 199. Why allow uphill energy moves in Metropolis sampling?

**AM 207 · Statistical physics examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are needed to sample a finite-temperature distribution and can help escape local minima.

**Intuition:** Sampling a distribution is different from minimizing energy.

</details>

Sources: [Lecture 03 · p. 43](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=43)

Card ID: `am207-energy-uphill`

---

### 200. Where are the minima of \((x^{2}-\frac{1}{2})^{2}\)?

**AM 207 · Multimodal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

At \(x=\pm\frac{1}{\sqrt2}\), where the squared quantity is zero.

**Intuition:** Two separated minima create two attractive regions.

</details>

Sources: [Lecture 03 · p. 49](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=49)

Card ID: `am207-double-well-minima`

---

### 201. Why can a chain appear stable while missing half a target distribution?

**AM 207 · Multimodal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It may explore one mode well but rarely cross the low-probability barrier to another.

**Intuition:** Within-mode stability does not establish global mixing.

</details>

Sources: [Lecture 03 · p. 50](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=50)

Card ID: `am207-mode-trapping`

---

### 202. What units does a transition rate have?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Inverse time. Rate times a small time interval approximates a jump probability.

**Intuition:** A rate itself can exceed 1.

</details>

Sources: [Lecture 04 · p. 4](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=4)

Card ID: `am207-master-rate-units`

---

### 203. Why evaluate a gain term at \(n-\nu\) for a jump of size \(\nu\)?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A trajectory arriving at n after that jump must have started at \(n-\nu\).

**Intuition:** Trace arrivals backward to their source state.

</details>

Sources: [Lecture 04 · p. 18](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=18)

Card ID: `am207-master-arrival-state`

---

### 204. Why might mRNA count alone fail to be a Markov state?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its future production rate can depend on an unobserved promoter state. Include that state to capture the relevant memory.

**Intuition:** A useful state stores what predicts the next transition.

</details>

Sources: [Lecture 04 · p. 16](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=16)

Card ID: `am207-hidden-promoter-state`

---

### 205. How can promoter switching create bursts of gene expression?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An active interval allows repeated transcription before the promoter switches off.

**Intuition:** Random switching can create clustered events.

</details>

Sources: [Lecture 04 · p. 16](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=16)

Card ID: `am207-gene-burst`

---

### 206. What is the state change for one SIR infection?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Susceptible decreases by 1 and infected increases by 1; recovered stays unchanged.

**Intuition:** A reaction vector records bookkeeping for one event.

</details>

Sources: [Lecture 04 · p. 20](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-sir-infection-jump`

---

### 207. What is the state change for one SIR recovery?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Infected decreases by 1 and recovered increases by 1.

**Intuition:** Transitions move people between compartments.

</details>

Sources: [Lecture 04 · p. 20](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-sir-recovery-jump`

---

### 208. Why can a small stochastic outbreak die out even if deterministic dynamics predict growth?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Early recoveries may occur before enough new infections. Discrete chance matters when counts are small.

**Intuition:** Average growth does not guarantee survival of each realization.

</details>

Sources: [Lecture 04 · p. 20](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=20)

Card ID: `am207-small-outbreak-extinction`

---

### 209. Why is a queue's departure rate zero when it is empty?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There is no customer to serve. The boundary must prevent negative queue length.

**Intuition:** Physical constraints change transition rules at boundaries.

</details>

Sources: [Lecture 04 · p. 27](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=27)

Card ID: `am207-queue-boundary`

---

### 210. When does a basic \(M/M/1\) queue have a stationary queue-length distribution?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When arrival rate \(\lambda\) is smaller than service rate \(\mu\). Then \(P(N=n)=(1-\rho )\rho ^{n}\) with \(\rho =\lambda /\mu\).

**Intuition:** Average service capacity must exceed incoming demand.

</details>

Sources: [Lecture 04 · p. 27](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=27)

Card ID: `am207-queue-stability`

---

### 211. What remains conserved when two clusters merge without losing material?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Total mass, even though the number of clusters decreases.

**Intuition:** A changing count can coexist with a conserved weighted sum.

</details>

Sources: [Lecture 04 · p. 28](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=28)

Card ID: `am207-coagulation-conservation`

---

### 212. What makes a Hawkes process self-exciting?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An event temporarily increases the rate of future events.

**Intuition:** Past events affect current risk through the intensity.

</details>

Sources: [Lecture 04 · p. 34](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=34)

Card ID: `am207-hawkes-memory`

---

### 213. What happens between jumps in a piecewise-deterministic Markov process?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The state follows deterministic dynamics; random events change its evolution.

**Intuition:** Randomness need not act continuously in time.

</details>

Sources: [Lecture 04 · p. 38](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=38)

Card ID: `am207-pdmp-meaning`

---

### 214. When can a diffusion approximation miss important behavior?

**AM 207 · Jump process applications · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When discrete boundaries, rare large jumps, or heavy tails matter.

**Intuition:** Matching typical small fluctuations may miss rare outcomes.

</details>

Sources: [Lecture 04 · p. 41](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=41)

Card ID: `am207-diffusion-limit-caution`

---

### 215. What does the Chapman–Kolmogorov equation sum over?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All possible intermediate states, multiplying the two transition probabilities for each route.

**Intuition:** Break a transition into two time segments and add the routes.

</details>

Sources: [Lecture 04 · p. 43](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-ck-intermediate`

---

### 216. At the current state, how does the generator predict the change in a quantity f(X)?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Lf(x) is the instantaneous expected rate of change of f(X) when the current state is x. The function f picks the quantity you care about, such as a molecule count; the notes call this an observable.

**Intuition:** The generator describes local dynamics through test functions.

</details>

Sources: [Lecture 04 · p. 49](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator-observable`

---

### 217. How does the generator determine the evolution of \(E[f(X_{t})]\)?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under appropriate regularity, \(\frac{d}{dt}\mathbb{E}[f(X_t)]=\mathbb{E}[Lf(X_t)]\).

**Intuition:** Local expected changes produce equations for moments.

</details>

Sources: [Lecture 04 · p. 49](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-expectation-generator`

---

### 218. Why does a Markov generator send the constant function 1 to zero?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The value 1 never changes along any trajectory.

**Intuition:** This is the observable-side counterpart of conserving total probability.

</details>

Sources: [Lecture 04 · p. 50](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=50)

Card ID: `am207-generator-constant-intuition`

---

### 219. How does tracking a quantity’s expected change differ from tracking the whole probability distribution?

**AM 207 · Markov dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The generator L acts on a quantity f to describe its expected rate of change. Its adjoint L† acts on the distribution: \(\partial _{t}p=L^{\dagger}p\). They describe the same dynamics from two perspectives.

**Intuition:** The same dynamics have a function view and a distribution view.

</details>

Sources: [Lecture 04 · p. 52](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=52)

Card ID: `am207-adjoint-density`

---

### 220. For total jump rate \(\lambda\), what is the small-time probability of staying put?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1-\lambda \Delta t\) plus higher-order terms.

**Intuition:** No jump is the usual outcome over a sufficiently short interval.

</details>

Sources: [Lecture 04 · p. 54](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=54)

Card ID: `am207-small-time-stay`

---

### 221. Why does a jump generator contain f(new)−f(current)?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It measures the change caused by each possible jump, weighted by its rate.

**Intuition:** A generator averages changes, not just destination values.

</details>

Sources: [Lecture 04 · p. 55](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=55)

Card ID: `am207-jump-generator-difference`

---

### 222. If each of n particles dies at rate \(\gamma\), what is the total death rate?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\gamma n\).

**Intuition:** Independent opportunities add their rates.

</details>

Sources: [Lecture 04 · p. 61](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=61)

Card ID: `am207-pure-death-rate`

---

### 223. How does the mean count evolve under independent death at rate \(\gamma\)?

**AM 207 · Jump processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{dm}{dt}=-\gamma m\), so \(m(t)=m(0)e^{-\gamma t}\).

**Intuition:** The expected loss rate is proportional to the expected population.

</details>

Sources: [Lecture 04 · p. 63](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=63)

Card ID: `am207-pure-death-mean`

---

### 224. How does the diffusion coefficient scale with random-walk step size h and step time \(\tau\)?

**AM 207 · Diffusion limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For symmetric steps \(\pm h\) every \(\tau\), \(D=\frac{h^2}{2\tau}\).

**Intuition:** Spread per unit time determines diffusion strength.

</details>

Sources: [Lecture 04 · p. 69](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=69)

Card ID: `am207-random-walk-diffusion`

---

### 225. How does SSA avoid solving for every state's probability?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It generates individual event trajectories and estimates statistics from repeated runs.

**Intuition:** Sampling paths trades a huge probability equation for Monte Carlo error.

</details>

Sources: [Lecture 05 · p. 3](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=3)

Card ID: `am207-ssa-paths-not-density`

---

### 226. What does “exact” mean for SSA?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It samples the specified continuous-time jump model without a time-discretization approximation.

**Intuition:** Finite ensembles still have sampling error, and the model can still be imperfect.

</details>

Sources: [Lecture 05 · p. 37](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=37)

Card ID: `am207-ssa-exact-meaning`

---

### 227. If several reactions can happen next, how do their rates determine the waiting time?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add their rates to get \(a_{0}\). With rates constant between events, the next waiting time is exponential with rate \(a_{0}\). More possible events make the next event arrive sooner on average.

**Intuition:** Any channel can end the wait.

</details>

Sources: [Lecture 05 · p. 6](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-ssa-total-rate`

---

### 228. How is the next reaction channel chosen?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Choose channel j with probability \(\frac{a_j}{a_0}\).

**Intuition:** A faster channel wins a larger share of the event competition.

</details>

Sources: [Lecture 05 · p. 10](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=10)

Card ID: `am207-ssa-channel-probability`

---

### 229. If every possible event has rate zero, can the simulated system change on its own?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Under the current time-independent rules it stays in that state forever, unless an external change enables an event. Such a state is called absorbing.

**Intuition:** Do not divide by zero or draw a finite waiting time.

</details>

Sources: [Lecture 05 · p. 10](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=10)

Card ID: `am207-ssa-zero-rate`

---

### 230. Why recompute reaction rates after a reaction?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The event changes molecule counts, which can change the rates of other channels.

**Intuition:** Each event changes the next competition.

</details>

Sources: [Lecture 05 · p. 21](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-recompute`

---

### 231. What is the count-change vector for \(2A+B\to 3B+C\)?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In the order A,B,C, it is (−2,+2,+1).

**Intuition:** Subtract reactants from products, including species on both sides.

</details>

Sources: [Lecture 05 · p. 19](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=19)

Card ID: `am207-stoichiometry-example`

---

### 232. Why is an A+B reaction reaction rate proportional to nA·nB?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There are nA choices of A and nB choices of B, giving nA·nB possible pairs.

**Intuition:** Mass action counts possible reacting combinations.

</details>

Sources: [Lecture 05 · p. 20](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-bimolecular-distinct`

---

### 233. Why does a 2A reaction use nA(nA−1)/2 under a per-pair rate convention?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It counts unordered pairs of distinct A molecules.

**Intuition:** One molecule cannot react with itself; swapping the same pair adds no new pair.

</details>

Sources: [Lecture 05 · p. 20](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-bimolecular-identical`

---

### 234. Why can a source reaction \(\varnothing \to A\) have constant reaction rate?

**AM 207 · Reaction networks · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its supply is modeled as external and independent of the current count of A.

**Intuition:** The model treats the source as a reservoir.

</details>

Sources: [Lecture 05 · p. 20](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-zero-order-propensity`

---

### 235. How does a lattice diffusion hopping rate scale with cell width h?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For a neighbor direction, the per-particle rate scales as \(D/h^{2}\).

**Intuition:** Finer spatial resolution requires more frequent hops.

</details>

Sources: [Lecture 05 · p. 25](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=25)

Card ID: `am207-hopping-rate`

---

### 236. Does hopping between cells change total molecule count?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. One cell loses exactly what the other gains.

**Intuition:** Transport redistributes material; reactions can create or destroy it.

</details>

Sources: [Lecture 05 · p. 25](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=25)

Card ID: `am207-hopping-conservation`

---

### 237. What makes \(U+2V\to 3V\) autocatalytic?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

V helps produce another V. The net change is one U lost and one V gained.

**Intuition:** Existing product promotes further product formation.

</details>

Sources: [Lecture 05 · p. 27](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=27)

Card ID: `am207-autocatalysis-vector`

---

### 238. What is the intuition behind lateral inhibition?

**AM 207 · Spatial reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A cell's state suppresses the same fate in neighboring cells, encouraging contrasting local states.

**Intuition:** Local feedback can produce spatial patterns.

</details>

Sources: [Lecture 05 · p. 34](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=34)

Card ID: `am207-lateral-inhibition`

---

### 239. How does tau leaping differ from SSA?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It advances a chosen interval and samples multiple reaction counts, approximately holding reaction rates fixed during that interval.

**Intuition:** Larger time advances buy speed through approximation.

</details>

Sources: [Lecture 05 · p. 38](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=38)

Card ID: `am207-tau-many-events`

---

### 240. What is the Poisson mean for channel j over a leap of duration \(\tau\)?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(a_{j}(x)\tau\), using the reaction rate at the start of the leap.

**Intuition:** Rate times duration gives an expected event count.

</details>

Sources: [Lecture 05 · p. 39](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-poisson-mean`

---

### 241. Why can naive tau leaping produce negative molecule counts?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Independent sampled reaction counts may consume more molecules than are available.

**Intuition:** A Poisson count is unbounded, but the reactant supply is not.

</details>

Sources: [Lecture 05 · p. 41](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=41)

Card ID: `am207-tau-negative-count`

---

### 242. Why is clipping a negative population to zero not a principled repair?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It changes the simulated transition law and can bias statistics. Reduce the step or use a suitable bounded or exact treatment.

**Intuition:** Fix the event approximation, not merely its impossible output.

</details>

Sources: [Lecture 05 · p. 41](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=41)

Card ID: `am207-tau-clipping-problem`

---

### 243. What should remain nearly constant during a valid tau leap?

**AM 207 · Tau leaping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The reaction reaction rates, with high probability.

**Intuition:** Small expected change alone can hide large random fluctuations.

</details>

Sources: [Lecture 05 · p. 42](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=42)

Card ID: `am207-tau-leap-condition`

---

### 244. Why divide prior times likelihood by a normalizing constant in Bayes’ rule?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The updated probabilities must add or integrate to 1. The normalizing constant, also called the evidence, makes that happen without changing which parameter values are favored.

**Intuition:** The evidence averages the likelihood over the prior.

</details>

Sources: [Lecture 06 · p. 10](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=10)

Card ID: `am207-bayes-evidence-role`

---

### 245. Is a likelihood automatically a probability density over the parameter?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It describes the observed data as a function of the parameter; it need not integrate to 1 over parameter values.

**Intuition:** A posterior needs a prior and normalization.

</details>

Sources: [Lecture 06 · p. 10](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=10)

Card ID: `am207-likelihood-not-parameter-density`

---

### 246. Before seeing data, how can you predict outcomes when the parameter is uncertain?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Predict outcomes for each possible parameter value, then average those predictions using the prior probabilities. The result is the prior predictive distribution.

**Intuition:** It asks what the model predicts before seeing the current data.

</details>

Sources: [Lecture 06 · p. 19](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=19)

Card ID: `am207-prior-predictive`

---

### 247. Why is fitting calibration data insufficient for validation?

**AM 207 · Models and uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The parameters were selected using those data. Predicting relevant new observations tests transfer beyond the fit.

**Intuition:** A good fit can conceal overfitting or model mismatch.

</details>

Sources: [Lecture 06 · p. 39](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=39)

Card ID: `am207-calibration-validation`

---

### 248. With a uniform prior and 4 heads in 11 tosses, what is the posterior for the head probability?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Beta}(5,8)\), because the likelihood contributes \(\theta ^{4}(1-\theta )^{7}\).

**Intuition:** Add observed heads and tails to the prior's shape parameters.

</details>

Sources: [Lecture 06 · p. 49](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=49)

Card ID: `am207-coin-four-eleven`

---

### 249. What is the posterior mean for \(\operatorname{Beta}(5,8)\)?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{5}{13}\).

**Intuition:** The posterior mean balances the observed counts with the prior.

</details>

Sources: [Lecture 06 · p. 50](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-coin-posterior-mean`

---

### 250. Does the peak of a continuous posterior have positive point probability?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A single point has probability zero; intervals have probability obtained by integration.

**Intuition:** Density height and probability mass are different.

</details>

Sources: [Lecture 06 · p. 50](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-continuous-point-probability`

---

### 251. Can data restore posterior probability to a region assigned zero prior probability?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not under ordinary Bayes updating: zero prior times finite likelihood remains zero.

**Intuition:** A prior's support is a substantive modeling choice.

</details>

Sources: [Lecture 06 · p. 53](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=53)

Card ID: `am207-prior-zero-support`

---

### 252. Does a narrow posterior prove that the model is correct?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It describes uncertainty conditional on the chosen model and assumptions.

**Intuition:** Confidence within a model does not establish the model's validity.

</details>

Sources: [Lecture 06 · p. 64](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=64)

Card ID: `am207-posterior-model-limits`

---

### 253. For N independent exponential observations with sum T, what is the rate log-likelihood?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(N\log\nu-\nu T\), apart from parameter-independent terms, for \(\nu >0\).

**Intuition:** The raw data enter through their count and sum.

</details>

Sources: [Lecture 06 · p. 59](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-exponential-loglikelihood`

---

### 254. What is the maximum-likelihood exponential rate?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\hat{\nu}=\frac{N}{T}=\frac{1}{\text{sample mean}}\), assuming \(T>0\).

**Intuition:** The rate is the reciprocal of the mean waiting time.

</details>

Sources: [Lecture 06 · p. 59](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-exponential-mle-rate`

---

### 255. Is the exponential rate estimate the average of individual reciprocal waiting times?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It is the reciprocal of their average.

**Intuition:** Averaging and taking reciprocals do not commute.

</details>

Sources: [Lecture 06 · p. 59](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=59)

Card ID: `am207-reciprocal-average`

---

### 256. Why prefer a raw-data likelihood to fitting histogram heights when a sampling model is available?

**AM 207 · Likelihood estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Binning discards information and makes the fit depend on bin choices.

**Intuition:** Use the observation model directly when possible.

</details>

Sources: [Lecture 06 · p. 55](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=55)

Card ID: `am207-histogram-information`

---

### 257. What is the relative posterior standard deviation for \(\operatorname{Gamma}(N+1,T)\)?

**AM 207 · Bayesian examples · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{\sqrt{N+1}}\), since its mean is (N+1)/T and its SD is \(\frac{\sqrt{N+1}}{T}\).

**Intuition:** More observations narrow relative uncertainty at a square-root rate.

</details>

Sources: [Lecture 06 · p. 62](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=62)

Card ID: `am207-rate-posterior-width`

---

### 258. How can a uniform draw produce an exponential waiting time with rate \(\lambda\)?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use \(T=-\frac{\log U}{\lambda}\) for U uniform on (0,1). Its survival probability is \(e^{-\lambda t}\).

**Intuition:** Stretch uniform randomness through the inverse CDF.

</details>

Sources: [Lecture 01 · p. 44](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse`

---

### 259. Why does \(F^{-1}(U)\) have CDF F when F is continuous and strictly increasing?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P(F^{-1}(U)\le x)=P(U\le F(x))=F(x)\).

**Intuition:** Uniform draws choose probability levels, not equally spaced outcomes.

</details>

Sources: [Lecture 01 · p. 44](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse-proof`

---

### 260. How do you turn \(U\sim \operatorname{Uniform}(0,1)\) into \(\operatorname{Uniform}(-2,5)\)?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use −2+7U. Scale by the interval length, then shift to its left endpoint.

**Intuition:** Scale sets width; translation sets location.

</details>

Sources: [Lecture 02 · uniform transformation](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=28)

Card ID: `am207-affine-uniform`

---

### 261. An event rate is 4 per second. What is the mean waiting time?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{4}\) second. Rate and mean waiting time are reciprocals.

**Intuition:** Faster events mean shorter waits.

</details>

Sources: [Lecture 01 · p. 44](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-exponential-number`

---

### 262. You have already waited s for an exponential event. Does the remaining wait depend on s?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(P(T>s+t\mid T>s)=e^{-\lambda t}\), the original survival law.

**Intuition:** With a constant hazard, the clock does not age.

</details>

Sources: [Lecture 01 · p. 44](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-memoryless-proof`

---

### 263. How many more independent samples reduce Monte Carlo SE by a factor of 10?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

100 times as many, assuming finite variance. SE shrinks as \(\frac{1}{\sqrt{N}}\).

**Intuition:** Tenfold precision needs a hundredfold sample budget.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mc-rate`

---

### 264. How do uniform samples on [2,5] estimate \(\int _{2}^{5}f(x)dx\)?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Average f at the sampled points, then multiply by 3, the interval length.

**Intuition:** A sample average is an expected value; volume turns it into an integral.

</details>

Sources: [Lecture 03 · pp. 25–27](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=26)

Card ID: `am207-integral-volume`

---

### 265. Does unbiasedness of an average require independent draws?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If each term has expected value I, their average does too. Dependence matters for its variance.

**Intuition:** Expectation is linear even when samples are dependent.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mean-unbiased-proof`

---

### 266. Independent values have sample SD 3 across 900 draws. What is the mean’s estimated SE?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(3/\sqrt{900}=0.1\).

**Intuition:** The average fluctuates less than individual draws.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-standard-error-number`

---

### 267. What does MSE include that estimator variance alone does not?

**AM 207 · Monte Carlo · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Squared bias: \(\operatorname{MSE}=\operatorname{Variance}+\operatorname{Bias}^2\).

**Intuition:** A stable estimate can still be systematically wrong.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-rmse-bias`

---

### 268. Why does a midpoint grid lose its advantage as dimension grows?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With N points in d dimensions, its error scales as \(N^{-2/d}\), under suitable smoothness. Monte Carlo’s finite-variance exponent stays \(-\frac{1}{2}\).

**Intuition:** Grid points must be spread across every coordinate.

</details>

Sources: [HW1 · Q2(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid`

---

### 269. With at most one million grid points in 8 dimensions, how many fit per axis?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only 5: \(5^{8}=390,625\), while \(6^{8}\) exceeds one million.

**Intuition:** A huge total grid can be sparse along each direction.

</details>

Sources: [HW1 · Q2(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid-budget`

---

### 270. Why can \(\int\) over \([0,1]^{d}\) of \(\exp (-\sum x_{i}^{2})\) factor into one-dimensional integrals?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The integrand is a product of separate coordinate functions, and the domain is a product of intervals.

**Intuition:** Separable structure can remove a high-dimensional computation.

</details>

Sources: [HW1 · Q2(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-product-integral`

---

### 271. If Monte Carlo error scales as \(N^{-\frac{1}{2}}\), what does 16 times the sample count buy?

**AM 207 · High-dimensional integration · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About four times smaller error, under the stated scaling.

**Intuition:** Square-root convergence is slow.

</details>

Sources: [HW1 · Q2(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-slope-interpretation`

---

### 272. Why can symmetric Metropolis–Hastings use an unnormalized target f?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its acceptance ratio is min(1,f(y)/f(x)). The target’s common normalizing constant cancels.

**Intuition:** Relative density can be enough to sample.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh`

---

### 273. Target ratio is 2, but reverse/forward proposal ratio is 0.2. What is MH acceptance?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\min (1,2\times 0.2)=0.4\).

**Intuition:** A proposal’s directional bias must be corrected.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-asymmetric-acceptance`

---

### 274. How can symmetric MH avoid dividing tiny densities?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Compare log(U) with \(\min(0,\log f(y)-\log f(x))\).

**Intuition:** Log space avoids underflow without changing the decision.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-log-space`

---

### 275. Why is accepted MH probability flow symmetric between x and y?

**AM 207 · Metropolis–Hastings · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It equals \(\min\bigl(\pi(x)q(y\mid x),\pi(y)q(x\mid y)\bigr)\). Swapping x and y leaves it unchanged.

**Intuition:** Acceptance trims both directions to the smaller proposed flow.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-detailed-balance-proof`

---

### 276. Should a rejected MH step be saved as another copy of the current state?

**AM 207 · MCMC correctness · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. The repeated state records how long the chain stays there. Dropping repeats generally changes the sampled distribution.

**Intuition:** Waiting is part of the sample path.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-reject`

---

### 277. A chain spends 90% of steps at A. Could keeping only moves suggest 50%?

**AM 207 · MCMC correctness · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A two-state jump sequence alternates A,B regardless of unequal holding times.

**Intuition:** Discarding repeats discards residence-time information.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-jump-chain-example`

---

### 278. How do you propose a Cauchy step centered at x with scale \(\gamma\)?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use \(x+\gamma \tan (\pi (U-\frac{1}{2}))\), with U in (0,1). With fixed \(\gamma\), the proposal is symmetric.

**Intuition:** Heavy-tailed steps allow occasional large jumps.

</details>

Sources: [HW2 · Q1(a)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy`

---

### 279. What are the Cauchy quartiles for center m and scale \(\gamma\)?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(m-\gamma\), m, and \(m+\gamma\).

**Intuition:** Scale controls the quartile spread, not a finite variance.

</details>

Sources: [HW2 · Q1(a)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy-quantile`

---

### 280. Why avoid \(U=0\) or 1 in inverse-Cauchy sampling?

**AM 207 · Proposal distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Those quantiles are infinite because \(\tan (\pm \pi /2)\) is unbounded.

**Intuition:** Finite random-number endpoints need deliberate handling.

</details>

Sources: [HW2 · Q1(a)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-endpoint-tangent`

---

### 281. Does a 50% MH acceptance rate prove good mixing?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A chain can accept tiny, redundant moves while exploring a narrow ridge very slowly.

**Intuition:** Accepted movement is not necessarily useful exploration.

</details>

Sources: [HW2 · Q1(b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-mixing`

---

### 282. For covariance \(\begin{bmatrix}1&\rho\\\rho &1\end{bmatrix}\), which directions are long and short when \(\rho >0\)?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The (1,1) direction has variance \(1+\rho\); (1,−1) has variance \(1-\rho\).

**Intuition:** Strong positive correlation makes a thin diagonal ridge.

</details>

Sources: [HW2 · Q1(b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-correlated-normal-axes`

---

### 283. Why can both tiny and huge random-walk steps be bad?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Tiny steps accept but crawl. Huge steps usually reject and leave the chain stuck.

**Intuition:** Tune for exploration, not acceptance alone.

</details>

Sources: [HW2 · Q1(b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-proposal-scale-extremes`

---

### 284. Why freeze a tuned MH proposal after warm-up?

**AM 207 · MCMC diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A fixed proposal gives a fixed transition rule. Continued adaptation requires extra validity conditions.

**Intuition:** Changing the sampler’s rules changes its mathematical justification.

</details>

Sources: [Lecture 03 · adaptive proposal discussion, companion caution](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=23)

Card ID: `am207-warmup-adaptation`

---

### 285. Can a stationary chain fail detailed balance?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A uniform three-state cycle is stationary but has one-way probability flow.

**Intuition:** Global balance need not balance every pair.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-balance`

---

### 286. For \(P=\begin{bmatrix}0.8&0.2\\0.3&0.7\end{bmatrix}\), what is the stationary distribution?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(0.6,0.4), since \(0.6\times 0.2=0.4\times 0.3\).

**Intuition:** Stationary mass compensates for unequal escape probabilities.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationary-two-state`

---

### 287. Why does detailed balance imply stationarity?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Summing matched pairwise flows makes total incoming probability equal each state’s probability.

**Intuition:** Balanced pairs guarantee balanced totals.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-detailed-implies-stationary`

---

### 288. Does a stationary distribution guarantee convergence to it from any start?

**AM 207 · Stationarity & reversibility · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A deterministic two-state alternation has a stationary uniform distribution but keeps oscillating from a fixed start.

**Intuition:** A preserved distribution need not attract every initial state.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationarity-not-convergence`

---

### 289. Why can merging Alice and Bob into “not Carol” destroy the Markov property?

**AM 207 · The Markov property · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

If Alice and Bob have different chances of sending to Carol, the hidden identity still matters. History can reveal that identity.

**Intuition:** A coarse state may forget information needed for prediction.

</details>

Sources: [HW2 · Q2(c)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumping`

---

### 290. Can two merged states have different internal transitions and still form a Markov coarse state?

**AM 207 · The Markov property · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if their total transition probability into each coarse block is the same.

**Intuition:** Coarse prediction needs block totals, not identical internal behavior.

</details>

Sources: [HW2 · Q2(c)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumpable-example`

---

### 291. What does whitening do to a Gaussian cloud?

**AM 207 · AM 207 × STAT 244 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract its mean and multiply by \(\Sigma ^{-\frac{1}{2}}\). The cloud becomes centered with covariance I.

**Intuition:** Turn a tilted, stretched cloud into a round one.

</details>

Sources: [HW2 · Q11](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [HW2 · Q1](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `bridge-whiten`

---

### 292. Reaction rates are 2 and 3 per second. What is the mean wait for either event?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1/(2+3)=0.2\) seconds.

**Intuition:** Competing event rates add.

</details>

Sources: [Lecture 05 · p. 21](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa`

---

### 293. SSA rates are (1,3,6). Which reaction does a uniform draw 0.35 select?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Reaction 2. The cumulative probability cutoffs are 0.1,0.4,1.

**Intuition:** Select events in proportion to their rates.

</details>

Sources: [Lecture 05 · p. 21](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-event-number`

---

### 294. The next event is at 10.3, but simulation ends at 10. Which state do you report?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The state before that event. Nothing changes before the horizon.

**Intuition:** Do not let a future event alter an earlier record.

</details>

Sources: [Lecture 05 · p. 21](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-horizon`

---

### 295. What happens when every SSA reaction rate is zero?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No further event can occur under the current time-homogeneous model. Stop or carry the state to the horizon.

**Intuition:** No allowed event means an absorbing state.

</details>

Sources: [Lecture 05 · p. 21](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-zero-propensity`

---

### 296. For \(2A\to B\) with rate c per unordered pair, what is the reaction rate at count n?

**AM 207 · Stochastic simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

c n(n−1)/2.

**Intuition:** Count actual pairs, not a molecule paired with itself.

</details>

Sources: [Lecture 05 · propensity examples](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-combinatorial-propensity`

---

### 297. Why isn’t \(E[RF]\) always \(E[R]E[F]\)?

**AM 207 · Moment closure · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E[RF]=E[R]E[F]+\operatorname{Cov}(R,F)\). Correlation contributes an extra term.

**Intuition:** A nonlinear rate can depend on more than the means.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-closure`

---

### 298. \(E[R]=10\), \(E[F]=4\), \(\operatorname{Cov}(R,F)=-6\). What is \(E[RF]\)?

**AM 207 · Moment closure · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

34, not 40.

**Intuition:** Negative association lowers the expected product.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-covariance-gap`

---

### 299. With a uniform coin prior, what follows from 4 heads and 7 tails?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A \(\operatorname{Beta}(5,8)\) posterior: add the counts to the \(\operatorname{Beta}(1,1)\) prior parameters.

**Intuition:** Bayesian updating adds evidence to the prior.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-bayes`

---

### 300. How does \(\operatorname{Beta}(a,b)\) update after h heads and t tails?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To \(\operatorname{Beta}(a+h,b+t)\), for conditionally independent flips sharing one head probability.

**Intuition:** The prior and likelihood combine through their exponents.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-beta-update-general`

---

### 301. With a \(\operatorname{Beta}(5,8)\) posterior, what is the next head probability?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{5}{13}\), the posterior mean of \(\theta\).

**Intuition:** Prediction averages over remaining parameter uncertainty.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-posterior-predictive`

---

### 302. Why isn’t likelihood automatically a posterior?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A posterior multiplies likelihood by a prior, then normalizes over the parameter.

**Intuition:** Reversing a conditional requires Bayes’ rule.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-likelihood-not-posterior`

---

### 303. Does observing a coin sequence versus just its head count change the posterior shape?

**AM 207 · Bayesian updating · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not under the same Bernoulli model with a shared head probability and prior. The count likelihood adds a binomial factor independent of \(\theta\).

**Intuition:** Parameter-independent factors cancel in posterior normalization.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-sequence-versus-count`

---

### 304. Can a probability density be greater than 1?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. \(\operatorname{Uniform}(0,0.2)\) has density 5. Its total area is still 1.

**Intuition:** Probability is area, not density height.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-density`

---

### 305. If \(F(1)=0.2\) and \(F(3)=0.8\), what is \(P(1<X\le 3)\)?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(0.8-0.2=0.6\).

**Intuition:** Subtract cumulative probabilities to isolate an interval.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-cdf-density`

---

### 306. For density \(f(x)=cx\) on [0,2], what is c?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{2}\), since \(\int_0^2 cx\,dx=2c\) must equal 1.

**Intuition:** A density must have total area one.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-normalize-density`

---

### 307. To find the expected value of g(X), do you first need its full distribution?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(E[g(X)]=\int g(x)p(x)dx\) when the integral exists. Weight each possible transformed value by how likely the original value is.

**Intuition:** Average the function directly over the original distribution.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-expectation-function`

---

### 308. A fair die result is even. What is the chance it exceeds 3?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{2}{3}\). Of the remaining possibilities {2,4,6}, two exceed 3.

**Intuition:** Conditioning restricts the possibilities and renormalizes them.

</details>

Sources: [Lecture 01 · conditional probability example](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-conditional-probability`

---

### 309. Can two disjoint positive-probability events be independent?

**AM 207 · Probability foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Learning one occurred rules out the other.

**Intuition:** Mutually exclusive is not independent.

</details>

Sources: [Lecture 01 · probability rules, companion example](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-independence-vs-disjoint`

---

### 310. If \(Y=2X\), why does its density get a factor \(\frac{1}{2}\)?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The transformation doubles interval lengths. Density must halve to preserve probability.

**Intuition:** Stretch space, thin out density.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-jacobian`

---

### 311. If \(Y=-3X\), is its density negative?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(f_Y(y)=f_X(-y/3)/3\). Use the absolute inverse derivative.

**Intuition:** Orientation changes cannot create negative probability.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-negative-scale`

---

### 312. For invertible \(Y=AX\), what is the transformed density?

**AM 207 · Transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(f_Y(y)=f_X(A^{-1}y)/\operatorname{abs}(\det (A))\).

**Intuition:** The density compensates for the area or volume stretch.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-two-dimensional-jacobian`

---

### 313. For \(Y=X^{2}\), why might one inverse root be insufficient?

**AM 207 · Noninjective transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both \(+\sqrt{y}\) and \(-\sqrt{y}\) map to y. Their probability contributions must be added.

**Intuition:** A many-to-one map collects mass from every valid branch.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-multiple-roots`

---

### 314. If X is uniform on [−1,1], what is \(P(X^{2}\le y)\) for \(0<y<1\)?

**AM 207 · Noninjective transformations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sqrt{y}\), because X must lie between \(-\sqrt{y}\) and \(\sqrt{y}\).

**Intuition:** Squaring folds both halves of the interval together.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-square-uniform-density`

---

### 315. Why do accepted rejection-sampling draws follow the target?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Proposal density q times acceptance \(p/(Mq)\) equals \(p/M\). Renormalizing leaves p.

**Intuition:** Acceptance corrects the proposal’s shape.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection`

---

### 316. With normalized target \(p\le 5q\), what is the rejection sampler’s acceptance rate?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{5}=20\%\).

**Intuition:** A loose envelope wastes proposals.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-envelope-efficiency`

---

### 317. With unnormalized \(f\le cq\), how do you accept a proposal x?

**AM 207 · Rejection sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With probability f(x)/(cq(x)). Accepted draws follow f normalized, even if its integral is unknown.

**Intuition:** You need a valid envelope, not necessarily the normalizing constant.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-unknown-normalizer`

---

### 318. If you sample from q instead of p, how can you still estimate the expected value under p?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Average \(\frac{f(X)p(X)}{q(X)}\). The weight \(\frac{p(X)}{q(X)}\) corrects for outcomes sampled too often or too rarely. The sampling distribution q must cover every region contributing to the desired expected value.

**Intuition:** Weights compensate for sampling from the wrong distribution.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance`

---

### 319. \(p(A)=0.8\) but \(q(A)=0.5\). What weight corrects an A draw?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{0.8}{0.5}=1.6\).

**Intuition:** Under-sampled outcomes need extra weight.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance-discrete`

---

### 320. Can importance weights recover a region the proposal never visits?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If q is zero where the target integrand contributes, that contribution is missing.

**Intuition:** Weights cannot repair absent coverage.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-missing-support`

---

### 321. Why divide a weighted sum by the sum of weights?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It cancels an unknown common scale. The resulting ratio is generally biased at finite sample size, though it can be consistent.

**Intuition:** Normalization trades an unknown constant for a random denominator.

</details>

Sources: [Lecture 03 · p. 35](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-self-normalized`

---

### 322. Weights are (1,2,7), values are (0,1,1). What is the normalized weighted mean?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{9}{10}=0.9\).

**Intuition:** Divide by total weight, not sample count.

</details>

Sources: [Lecture 03 · p. 35](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-normalize-weights-number`

---

### 323. What does one normalized weight of 0.99 tell you?

**AM 207 · Importance sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Nearly the entire estimate comes from one sample. Nominal sample count greatly overstates the diversity of contributions.

**Intuition:** A thousand draws can effectively behave like one.

</details>

Sources: [Lecture 03 · p. 35](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-weight-degeneracy`

---

### 324. Why can \(\frac{s}{\sqrt{N}}\) underestimate MCMC uncertainty?

**AM 207 · Monte Carlo error · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Positive dependence adds covariance terms to the average’s variance.

**Intuition:** Repeated nearby information is worth less than independent information.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-autocorrelation`

---

### 325. If integrated autocorrelation multiplies variance by 9, what is the effective size of 9000 draws?

**AM 207 · Monte Carlo error · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

About 1000 for that estimated quantity, under the stationary mixing approximation.

**Intuition:** Effective size measures information, not stored rows.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-ar1-effective-size`

---

### 326. In a Poisson process with rate \(\nu\), what is the count by time t?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Poisson}(\nu t)\), with mean \(\nu t\).

**Intuition:** Rate times exposure gives the expected count.

</details>

Sources: [HW1 · Q1(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson`

---

### 327. At 2 events per minute, what is the expected count in 30 seconds?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. Convert 30 seconds to half a minute before multiplying.

**Intuition:** Rates and times must use compatible units.

</details>

Sources: [HW1 · Q1(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson-number`

---

### 328. Does independent Poisson increments mean N(1) and N(2) are independent?

**AM 207 · Poisson processes · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. N(2) includes N(1). Only counts over disjoint intervals are independent.

**Intuition:** Cumulative totals share their earlier events.

</details>

Sources: [HW1 · Q1(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-independent-increments`

---

### 329. If each independent trial succeeds with probability p, what is the mean trial of first success?

**AM 207 · Discrete waiting times · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1/p\), counting the successful trial.

**Intuition:** Rare success means a longer expected wait.

</details>

Sources: [HW1 · Q1(c)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric`

---

### 330. With success chance 0.2, what is P(first success on trial 3)?

**AM 207 · Discrete waiting times · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(0.8^{2}\times 0.2=0.128\): two failures, then success.

**Intuition:** Specify the failures before the first success.

</details>

Sources: [HW1 · Q1(c)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric-number`

---

### 331. With N parents producing two offspring each, why is sibling probability \(1/(2N-1)\)?

**AM 207 · Population sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After choosing one offspring, exactly one of the other 2N−1 is its sibling.

**Intuition:** Count the remaining possibilities under the actual reproduction model.

</details>

Sources: [HW1 · Q1(c)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-coalescent`

---

### 332. With 3 parents and two offspring each, what is the sampled pair’s sibling probability?

**AM 207 · Population sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{5}\), not \(\frac{1}{6}\).

**Intuition:** Large-population approximations need not be exact for small populations.

</details>

Sources: [HW1 · Q1(c)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-finite-population-check`

---

### 333. Why scale a geometric waiting time of mean about 2N by 2N?

**AM 207 · Continuous limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It keeps the typical wait near one as N grows. The scaled survival probability approaches \(e^{-t}\).

**Intuition:** Rescaling reveals a nondegenerate limit.

</details>

Sources: [HW1 · Q1(c)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-scaling-limit`

---

### 334. Two independent lineages mutate at rate \(\nu\) for a fixed time t. What is their total count?

**AM 207 · Conditional distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Poisson}(2\nu t)\). Independent Poisson counts add their means.

**Intuition:** Two lineages provide twice the exposure.

</details>

Sources: [HW1 · Q1(d–e)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-two-lineages`

---

### 335. Why can a random-time Poisson count have variance larger than its mean?

**AM 207 · Conditional distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exposure-time uncertainty adds extra variance. If K given T is \(\operatorname{Poisson}(2\nu T)\), \(\operatorname{Var}(K)=2\nu E[T]+4\nu ^{2}\operatorname{Var}(T)\).

**Intuition:** Random exposure creates overdispersion.

</details>

Sources: [HW1 · Q1(d–e)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-mixture-variance`

---

### 336. How do you invert a linear CDF segment?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Find U’s fraction through the segment’s CDF range, then move that same fraction through its x range.

**Intuition:** Interpolate in probability space first.

</details>

Sources: [HW1 · Q3](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-piecewise-cdf`

---

### 337. A CDF joins (2,0.3) to (5,0.9). Where does \(U=0.5\) map?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To \(x=3\). The probability level is one-third through the segment, so move one-third from 2 to 5.

**Intuition:** Match fractions along the two axes.

</details>

Sources: [HW1 · Q3](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-inverse-interpolation-number`

---

### 338. Does a flat part of a continuous CDF contain probability mass?

**AM 207 · Inverse-transform sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The cumulative probability does not increase there.

**Intuition:** A wide x interval can still have zero chance.

</details>

Sources: [HW1 · Q3](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-cdf-flat-segment`

---

### 339. How does Box–Muller make two standard normals from two uniforms?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Set \(R=\sqrt{-2\log U_1}\), \(\theta =2\pi U_{2}\), then return \(R\cos\theta\) and \(R\sin\theta\), using independent uniforms in (0,1).

**Intuition:** Choose a Gaussian radius and an independent uniform angle.

</details>

Sources: [HW1 · Q4(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-box-muller`

---

### 340. For the Box–Muller radius, what is \(P(R\le r)\) when \(r\ge 0\)?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1-e^{-r^{2}/2}\).

**Intuition:** The radius is not uniform; its tail decays with squared distance.

</details>

Sources: [HW1 · Q4(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-cdf`

---

### 341. What distribution does \(\frac{R^2}{2}\) have in Box–Muller?

**AM 207 · Normal sampling · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exponential with rate 1, since \(\frac{R^2}{2}=-\log U\).

**Intuition:** A Gaussian squared radius connects directly to an exponential wait.

</details>

Sources: [HW1 · Q4(a–b)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-square-exponential`

---

### 342. What fraction of uniform square proposals miss the unit disk?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1-\pi /4\approx 21.5\%\).

**Intuition:** Rejection cost follows the area outside the accepted region.

</details>

Sources: [HW1 · Q4(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-marsaglia`

---

### 343. How does a uniform disk point become a standard normal pair?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With \(S=V_{1}^{2}+V_{2}^{2}\) in (0,1), multiply \((V_{1},V_{2})\) by \(\sqrt{\frac{-2\log S}{S}}\).

**Intuition:** Keep the angle; replace the radius distribution.

</details>

Sources: [HW1 · Q4(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-polar-transform`

---

### 344. If acceptance probability is \(\pi /4\), how many proposals are needed on average?

**AM 207 · Rejection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(4/\pi \approx 1.27\) per accepted point.

**Intuition:** Expected attempts are the reciprocal of success probability.

</details>

Sources: [HW1 · Q4(d)](../courses/harvard/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-rejection-efficiency`

---

### 345. How do you get a two-step transition probability?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Sum products over every intermediate state: \((P^{2})_{ik}=\sum _{j}P_{ij}P_{jk}\).

**Intuition:** Multiply along paths, add across alternatives.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-ck`

---

### 346. With current states in P’s rows, how does a row distribution advance?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(p_{\mathrm{next}}=pP\). For a column distribution, use \(P^{\mathsf{T}}p\).

**Intuition:** Keep your vector orientation consistent.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-transition-matrix-orientation`

---

### 347. For \(P=\begin{bmatrix}0.8&0.2\\0.3&0.7\end{bmatrix}\), what is the two-step chance \(A\to B\)?

**AM 207 · Markov transitions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(0.8\times 0.2+0.2\times 0.7=0.30\).

**Intuition:** Include both possible intermediate states.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-two-step-number`

---

### 348. How does the probability of being in a state change as events move the system around?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add probability arriving from other states and subtract probability leaving this state. Writing that balance for every state gives the master equation.

**Intuition:** Track probability like fluid moving between containers.

</details>

Sources: [Lecture 05 · p. 6](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-master`

---

### 349. Why should all master-equation derivatives sum to zero?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every transition removes probability from one state and adds the same amount to another.

**Intuition:** Internal flows cannot create total probability.

</details>

Sources: [Lecture 05 · p. 6](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-probability-conservation`

---

### 350. In pure death with rate \(\gamma n\), how does probability enter state zero?

**AM 207 · Master equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

From state one at rate \(\gamma p_{1}\). There is no outflow from zero.

**Intuition:** You cannot lose a particle you do not have.

</details>

Sources: [Lecture 04 · radioactive decay, pp. 61–63](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=62)

Card ID: `am207-death-boundary`

---

### 351. How do jump sizes and event rates determine the expected change of a quantity?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(Lf(x)=\sum _{j}a_{j}(x)[f(x+\nu _{j})-f(x)]\). For each possible event, multiply its change in the quantity by its event rate, then add. This rate-of-change operator is called the generator.

**Intuition:** Change per event times events per time gives expected local change.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator`

---

### 352. Why must a jump generator send the constant function 1 to zero?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every jump changes 1 by zero. This is a quick check of probability conservation.

**Intuition:** A jump cannot change a constant.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator-constant`

---

### 353. If each particle dies at rate \(\gamma\), how does the mean count change?

**AM 207 · Markov generators · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(m'=-\gamma m\), so \(m(t)=m(0)e^{-\gamma t}\). This mean equation is exact because the drift is linear.

**Intuition:** Random paths can have a simple deterministic mean.

</details>

Sources: [Lecture 04 · radioactive decay mean](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=63)

Card ID: `am207-death-mean`

---

### 354. How does a swap increase the left urn’s blue count?

**AM 207 · Transition rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It must choose green from the left and blue from the right. Thus \(w_{+}(n)=\lambda (N-n)(B-n)/N^{2}\).

**Intuition:** Multiply the choices that produce the desired change.

</details>

Sources: [HW2 · Q3(a)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-rates`

---

### 355. Why must \(w_{−}(0)=0\) in the urn model?

**AM 207 · Transition rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left urn has no blue ball to lose.

**Intuition:** Rates must respect the state’s physical boundaries.

</details>

Sources: [HW2 · Q3(a)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-boundaries`

---

### 356. Why does the urn model’s mean equation close exactly?

**AM 207 · Moment equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its net drift is linear: \(m'=(\lambda /N)(B-2m)\). No unknown higher moment appears.

**Intuition:** Linear drift lets expected value pass through without approximation.

</details>

Sources: [HW2 · Q3(c)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-mean`

---

### 357. An urn mean starts at 50 and relaxes toward 25 with time constant 25 seconds. What is it after 25 seconds?

**AM 207 · Moment equations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(25+25/e\approx 34.2\).

**Intuition:** One time constant removes about 63% of the initial gap.

</details>

Sources: [HW2 · Q3(c)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-timescale-number`

---

### 358. Why is the equilibrium urn count hypergeometric rather than binomial?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left urn samples N balls without replacement from 2N balls with a fixed total of B blue.

**Intuition:** Fixed totals make the color draws dependent.

</details>

Sources: [HW2 · Q3(d)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-stationary`

---

### 359. With 2 balls per urn and 2 blue total, what are the equilibrium left-blue probabilities?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For 0,1,2 blue: \(\frac{1}{6}\), \(\frac{4}{6}\), \(\frac{1}{6}\).

**Intuition:** There are more allocations with one blue in each urn.

</details>

Sources: [HW2 · Q3(d)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-hypergeometric-small`

---

### 360. How do birth–death rates determine neighboring stationary probabilities?

**AM 207 · Stationary distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\pi _{n+1}/\pi _{n}=w_{+}(n)/w_{−}(n+1)\), when the denominator is positive. Normalize the resulting weights.

**Intuition:** Neighboring flows must balance at equilibrium.

</details>

Sources: [HW2 · Q3(d)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-birth-death-recursion`

---

### 361. Why can a per-jump histogram misrepresent continuous-time occupancy?

**AM 207 · Simulation diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fast-exit states generate many visits but little residence time. Weight by holding times instead.

**Intuition:** Count time spent, not just arrivals.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-time-histogram`

---

### 362. A path spends 9 seconds at A and 1 at B. What are its time fractions?

**AM 207 · Simulation diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

90% and 10%, even if it visited each state once.

**Intuition:** Equal visits do not imply equal occupancy.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-holding-time-number`

---

### 363. What count change does \(G+R\to 2R\) produce in (G,R,F)?

**AM 207 · Reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(−1,+1,0): one grass unit becomes one additional rabbit.

**Intuition:** Stoichiometry describes the event’s jump, not its frequency.

</details>

Sources: [HW2 · Q4](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-stoichiometry`

---

### 364. How do reaction channels combine into the expected rabbit-count rate?

**AM 207 · Reaction systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add each rabbit jump times its reaction rate, then take expected values: \((\beta /N)E[GR]-\mu E[R]-(\gamma /N)E[RF]\).

**Intuition:** Birth adds; death and predation subtract.

</details>

Sources: [HW2 · Q4](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-reaction-drift`

---

### 365. Why does the mean-field rabbit model use products of population densities?

**AM 207 · Mean-field dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It approximates expected products by products of expected values, dropping covariance between populations. This gives \(r'=\beta gr-\mu r-\gamma rf\) for grass, rabbit, and fox densities g,r,f; it can miss important random dependence.

**Intuition:** Growth comes from food; losses come from death and predators.

</details>

Sources: [HW2 · Q4(b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-meanfield`

---

### 366. At a positive fox equilibrium, what rabbit density is needed?

**AM 207 · Mean-field dynamics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r^{*}=\delta /\gamma\), because fox growth \(f(\gamma r-\delta )\) must vanish with \(f>0\).

**Intuition:** The prey density must balance predator birth and death.

</details>

Sources: [HW2 · Q4(b)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-coexistence-condition`

---

### 367. Why can a stochastic population go extinct while its mean-field ODE stays positive?

**AM 207 · Stochastic vs deterministic models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The last individual can disappear in a discrete event. An absorbing zero state can then prevent recovery.

**Intuition:** A smooth density cannot fully describe losing the last individual.

</details>

Sources: [HW2 · Q4(c)](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-extinction`

---

### 368. In a coupled Delta–Notch grid, does each cell get its own independent SSA clock step?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not in the direct global SSA. Choose one event from all cells’ channels using their combined rate.

**Intuition:** Coupled cells share one global event timeline.

</details>

Sources: [HW2 · Q5](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-notch`

---

### 369. Why must the Delta–Notch boundary rule be implemented exactly?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Zero-valued fictitious boundary cells and periodic wrapping produce different neighbor signals.

**Intuition:** Boundary conditions are part of the model, not a plotting detail.

</details>

Sources: [HW2 · Q5](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-neighbor-average`

---

### 370. Why set production rate to zero at the maximum count instead of clipping afterward?

**AM 207 · Spatial stochastic systems · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes the forbidden event from both event selection and total rate. Clipping after selection can distort the timing.

**Intuition:** Enforce constraints in the event law.

</details>

Sources: [HW2 · Q5](../courses/harvard/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-bounded-propensities`

---

### 371. What makes tau-leaping approximate?

**AM 207 · Accelerated simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It holds reaction rates roughly constant during a time step and samples how many reactions occur.

**Intuition:** Leap over events only while their rates barely change.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau`

---

### 372. With reaction rate 12 per second and step 0.1 seconds, what reaction count does tau-leaping draw?

**AM 207 · Accelerated simulation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Poisson}(1.2)\), with mean and variance 1.2.

**Intuition:** Rate times step length gives expected event count.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-count-number`

---

### 373. What is the MLE of an exponential rate from positive waiting times?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{N}{\sum_i t_i}\), the reciprocal of the sample mean.

**Intuition:** More events per observed time imply a higher rate.

</details>

Sources: [Lecture 06 · p. 60](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-likelihood`

---

### 374. Waiting times are 0.2, 0.3, and 0.5 seconds. What is the exponential-rate MLE?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3 events divided by 1 second: 3 per second.

**Intuition:** Estimate the rate from total count and total exposure.

</details>

Sources: [Lecture 06 · p. 60](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-exp-mle-number`

---

### 375. Why prefer raw-data likelihood over fitting an exponential histogram?

**AM 207 · Inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The histogram changes with bin edges and widths. Raw-data likelihood avoids that arbitrary binning choice.

**Intuition:** Binning can change an estimate without changing the data.

</details>

Sources: [Lecture 06 · p. 60](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-histogram-fit`

---

### 376. If \(\theta\) is uniform on (0,1), are its log-odds uniform too?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The transformed density includes a Jacobian and becomes \(\theta (1-\theta )\) in log-odds coordinates.

**Intuition:** “Uniform” depends on how you parameterize uncertainty.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-prior`

---

### 377. A \(\operatorname{Gamma}(a,b)\) shape–rate prior meets N exponential waits totaling T. What is the posterior?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Gamma}(a+N,b+T)\).

**Intuition:** Counts update shape; exposure updates rate.

</details>

Sources: [Lecture 06 · Bayesian exponential example, pp. 61–64](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=61)

Card ID: `am207-gamma-exponential`

---

### 378. With prior proportional to 1 for \(\nu >0\) and waits totaling \(T>0\), what is the posterior?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Gamma}(N+1,T)\) in shape–rate form. The flat prior is improper, but this posterior is proper.

**Intuition:** An improper prior requires a separate posterior-normalization check.

</details>

Sources: [Lecture 06 · flat-prior exponential example](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=62)

Card ID: `am207-flat-rate-posterior`

---

### 379. What does a 95% Bayesian credible interval mean?

**AM 207 · Bayesian inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It contains 95% of posterior probability under the chosen prior and likelihood.

**Intuition:** The probability statement is conditional on the model and observed data.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-credible-interval-meaning`

---

### 380. A walk jumps \(\pm \Delta x\), each at rate \(1/(2\tau )\). What is its diffusion coefficient?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(D=\frac{(\Delta x)^2}{2\tau}\).

**Intuition:** Spreading depends on squared jump size per unit time.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion`

---

### 381. If jump size halves, how must \(\tau\) change to keep diffusion fixed?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Divide \(\tau\) by four.

**Intuition:** Halving length requires quadrupling the event frequency.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-scaling`

---

### 382. How does a diffusing particle’s typical displacement grow with time?

**AM 207 · Random-walk limits · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

As \(\sqrt{t}\): in one dimension, RMS displacement is \(\sqrt{2Dt}\).

**Intuition:** Random steps spread more slowly than steady directed motion.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/harvard/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-msd`

---

### 383. What changes between frequentist and Bayesian views of an unknown parameter?

**AM 207 · Probability interpretations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Frequentist inference treats it as fixed; Bayesian inference represents uncertainty about it with a distribution.

**Intuition:** Both use probability rules, but assign uncertainty differently.

</details>

Sources: [Lecture 01 · pp. 19–23 and p. 45](../courses/harvard/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=23)

Card ID: `am207-probability-views`

---

### 384. What does \(u^{\mathsf{T}}v\) compute?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum of coordinate products, \(\sum u_{i}v_{i}\). Geometrically it equals \(\Vert u\Vert \Vert v\Vert \cos \theta\).

**Intuition:** The dot product measures alignment.

</details>

Sources: [Linear algebra notes · p. 1](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-inner-product`

---

### 385. How do you get Euclidean length from a dot product?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\Vert u\Vert =\sqrt{u^{\mathsf{T}}u}\).

**Intuition:** A vector dotted with itself gives squared length.

</details>

Sources: [Linear algebra notes · p. 1](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-vector-length`

---

### 386. What is (3,4) dotted with (−1,7)?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(-3+28=25\).

**Intuition:** Multiply matching coordinates, then add.

</details>

Sources: [Linear algebra notes · p. 1](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=1)

Card ID: `stat244-inner-example`

---

### 387. What is the difference between \(u^{\mathsf{T}}v\) and \(uv^{\mathsf{T}}\)?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For equally sized vectors, the first is a scalar. The second is a matrix of pairwise coordinate products.

**Intuition:** Inner collapses; outer expands.

</details>

Sources: [Linear algebra notes · p. 2](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=2)

Card ID: `stat244-outer-not-inner`

---

### 388. What vectors can you reach by scaling and adding a given set of vectors?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All their linear combinations. This reachable set is called their span; it includes every direction those vectors can jointly express.

**Intuition:** Span is everything your ingredients can build.

</details>

Sources: [Linear algebra notes · p. 2](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=2)

Card ID: `stat244-span-definition`

---

### 389. What makes a set of vectors enough to describe a space without redundancy?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They reach the whole space, and none is a combination of the others. Such a set is a basis: every vector in the space has a unique coefficient description.

**Intuition:** A basis spans the space without redundancy.

</details>

Sources: [Linear algebra notes · p. 3](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-basis-definition`

---

### 390. How do you test linear independence using \(Xc=0\)?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The columns are independent exactly when \(c=0\) is the only solution.

**Intuition:** No nontrivial combination cancels out.

</details>

Sources: [Linear algebra notes · p. 3](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-independence-definition`

---

### 391. How many independently adjustable prediction directions does a design matrix provide?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its rank: the number of independent column directions. Duplicate or redundant columns do not add a new prediction direction.

**Intuition:** Rank counts independent directions represented by the matrix.

</details>

Sources: [Linear algebra notes · p. 3](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=3)

Card ID: `stat244-rank-definition`

---

### 392. Which changes to regression coefficients leave every prediction unchanged?

**STAT 244 · Linear algebra foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Any vector v with \(Xv=0\). Adding it to \(\beta\) leaves \(X\beta\) unchanged. These invisible coefficient changes form the null space of X.

**Intuition:** These input directions disappear under the map.

</details>

Sources: [Linear algebra notes · p. 4](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-null-definition`

---

### 393. How do you project y onto a nonzero vector u’s span?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use \(u\frac{u^{\mathsf{T}}y}{u^{\mathsf{T}}u}\).

**Intuition:** Measure alignment with u, then reconstruct that component.

</details>

Sources: [Linear algebra notes · p. 8](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-projection-line`

---

### 394. What does \(X^{\mathsf{T}}X=I\) say about X’s columns?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They have unit length and are pairwise perpendicular.

**Intuition:** The Gram matrix records column lengths and overlaps.

</details>

Sources: [Linear algebra notes · p. 8](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-orthonormal-columns`

---

### 395. If a tall Q has \(Q^{\mathsf{T}}Q=I\), must \(QQ^{\mathsf{T}}=I\)?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(QQ^{\mathsf{T}}\) projects onto Q’s column space, which may be smaller than observation space.

**Intuition:** A left inverse need not be a two-sided inverse.

</details>

Sources: [Linear algebra notes · p. 8](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=8)

Card ID: `stat244-rectangular-not-inverse`

---

### 396. Why is the split into W and \(W^{\perp}\) components unique?

**STAT 244 · Orthogonal geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The difference between two candidate splits would lie in both W and \(W^{\perp}\). Only zero can do that.

**Intuition:** Perpendicular complementary spaces overlap only at zero.

</details>

Sources: [Linear algebra notes · p. 7](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=7)

Card ID: `stat244-orthogonal-decomposition-unique`

---

### 397. If \(v^{\mathsf{T}}Av\) is never negative, what does that tell you about a symmetric matrix A?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No direction gives a negative quadratic value. This is positive semidefiniteness. Positive definiteness is stronger: every nonzero direction must give a strictly positive value.

**Intuition:** No direction has negative quadratic energy.

</details>

Sources: [Linear algebra notes · p. 9](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=9)

Card ID: `stat244-psd-definition`

---

### 398. What does Cholesky express a positive-definite matrix as?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(LL^{\mathsf{T}}\), with L lower triangular and positive diagonal.

**Intuition:** A positive quadratic can be built from a triangular factor.

</details>

Sources: [Linear algebra notes · p. 10](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-cholesky-role`

---

### 399. What is the spectral decomposition of a real symmetric matrix?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(A=Q\Lambda Q^{\mathsf{T}}\), with orthonormal eigenvectors in Q and eigenvalues in \(\Lambda\).

**Intuition:** Rotate to coordinates where the action is diagonal.

</details>

Sources: [Linear algebra notes · p. 10](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-spectral-decomposition`

---

### 400. How do eigenvalues reveal whether a symmetric matrix is positive definite?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All must be positive. Nonnegative eigenvalues give positive semidefiniteness.

**Intuition:** Check the quadratic energy along each eigen-direction.

</details>

Sources: [Linear algebra notes · p. 10](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=10)

Card ID: `stat244-positive-eigenvalues`

---

### 401. Why is every covariance matrix positive semidefinite?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(v^{\mathsf{T}}\Sigma v=\operatorname{Var}(v^{\mathsf{T}}Y)\ge 0\).

**Intuition:** Every linear combination must have nonnegative variance.

</details>

Sources: [Linear algebra notes · p. 11](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=11)

Card ID: `stat244-covariance-psd`

---

### 402. Does rotating by covariance eigenvectors fully whiten data?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes covariance between coordinates, but their variances remain the eigenvalues. Whitening also divides by their square roots when positive.

**Intuition:** Decorrelation removes tilt; whitening also removes unequal scales.

</details>

Sources: [Linear algebra notes · p. 11](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=11)

Card ID: `stat244-decorrelate-not-whiten`

---

### 403. What is the compact rank-r SVD?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(X=U_{r}D_{r}V_{r}^{\mathsf{T}}\), retaining the r positive singular values.

**Intuition:** Rotate input, stretch r directions, rotate output.

</details>

Sources: [Linear algebra notes · p. 13](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-form`

---

### 404. Which SVD vectors span C(X)?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The left singular vectors corresponding to positive singular values.

**Intuition:** Left singular vectors describe reachable observation directions.

</details>

Sources: [Linear algebra notes · p. 13](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-column-space`

---

### 405. Which SVD vectors span \(C(X^{\mathsf{T}})\)?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The right singular vectors corresponding to positive singular values.

**Intuition:** Right singular vectors describe visible coefficient directions.

</details>

Sources: [Linear algebra notes · p. 13](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-row-space`

---

### 406. How does SVD give the pseudoinverse?

**STAT 244 · Matrix factorizations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(X^{+}=V_{r}D_{r}^{-1}U_{r}^{\mathsf{T}}\). Invert only the positive singular values.

**Intuition:** Undo the stretches that actually exist.

</details>

Sources: [Linear algebra notes · p. 13](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=13)

Card ID: `stat244-svd-pseudoinverse`

---

### 407. What makes the Moore–Penrose inverse unique beyond \(XGX=X\)?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It also satisfies \(GXG=G\), and both XG and GX are symmetric.

**Intuition:** The extra conditions select canonical orthogonal projections.

</details>

Sources: [Linear algebra notes · p. 5](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-moore-penrose-conditions`

---

### 408. Does \(n\ge p\) guarantee identifiable regression coefficients?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The design columns must also be independent.

**Intuition:** Enough rows do not guarantee enough distinct information.

</details>

Sources: [Linear algebra notes · p. 14](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=14)

Card ID: `stat244-more-observations-not-rank`

---

### 409. Why can an intercept plus an indicator for every group give nonunique coefficients?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The indicators sum to the intercept column, so one column is redundant no matter which data you collect. This dependence built into the model is called intrinsic aliasing.

**Intuition:** The redundancy comes from the chosen description.

</details>

Sources: [Linear algebra notes · p. 15](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-intrinsic-aliasing`

---

### 410. Why can a missing group make its regression effect impossible to estimate?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its indicator column is all zero in the collected data, so changing that coefficient changes no observed prediction. Dependence caused by the observed sample is called extrinsic aliasing.

**Intuition:** The design can lose information before fitting begins.

</details>

Sources: [Linear algebra notes · p. 15](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-extrinsic-aliasing`

---

### 411. Why is an unobserved group’s mean not recoverable from its indicator column?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That indicator is all zero, so changing its coefficient changes no observed mean.

**Intuition:** An absent group contributes no direct information.

</details>

Sources: [Linear algebra notes · p. 15](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=15)

Card ID: `stat244-empty-level`

---

### 412. Why not encode an unordered three-level factor as 1,2,3 in one column?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That imposes an ordered, equally spaced linear effect. Separate contrasts allow unrestricted level differences.

**Intuition:** Numeric labels can accidentally impose a model.

</details>

Sources: [Least-squares theory notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=1)

Card ID: `stat244-quantitative-vs-factor`

---

### 413. Can a linear model contain \(x^{2}\)?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. \(\beta _{0}+\beta _{1}x+\beta _{2}x^{2}\) is linear in its unknown coefficients.

**Intuition:** A curved response can still use linear-model theory.

</details>

Sources: [Least-squares theory notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=1)

Card ID: `stat244-linear-in-parameters`

---

### 414. What do polynomial contrasts test for ordered factor levels?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Linear, quadratic, and higher-order patterns across the specified level scores.

**Intuition:** Trend questions differ from arbitrary pairwise differences.

</details>

Sources: [Least-squares theory notes · p. 6](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=6)

Card ID: `stat244-polynomial-contrasts`

---

### 415. Why does level spacing matter for polynomial contrasts?

**STAT 244 · Design and coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The trends depend on the numeric scores assigned to levels. Equal spacing is a modeling choice.

**Intuition:** Ordering alone does not specify distances.

</details>

Sources: [Least-squares theory notes · p. 6](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=6)

Card ID: `stat244-polynomial-spacing`

---

### 416. What assumptions does \(y\sim N(X\beta ,\sigma ^{2}I)\) make about the outcomes?

**STAT 244 · Normal linear model · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their expected values are \(X\beta\). Their errors are Gaussian, independent, and have the same variance \(\sigma ^{2}\). The notes call the equal-variance covariance structure spherical.

**Intuition:** The design describes the mean; \(\sigma ^{2}I\) describes noise.

</details>

Sources: [Least-squares theory notes · p. 8](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=8)

Card ID: `stat244-normal-model`

---

### 417. What does a linear model assume it can express about the true expected outcomes?

**STAT 244 · Normal linear model · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They can be written as \(X\beta\) for some coefficient vector \(\beta\). In geometric language, the true mean is in the column space C(X).

**Intuition:** The model must be able to express the expected signal.

</details>

Sources: [Least-squares theory notes · p. 8](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=8)

Card ID: `stat244-mean-in-space`

---

### 418. For full-column-rank X, what is \(\hat{\beta}_{\mathrm{OLS}}\)?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((X^{\mathsf{T}}X)^{-1}X^{\mathsf{T}}y\). Numerically, solve with QR or SVD rather than explicitly forming the inverse.

**Intuition:** The formula identifies the estimator; a solver computes it.

</details>

Sources: [Least-squares theory notes · p. 9](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-ols-formula`

---

### 419. Why is OLS called linear in the response?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With fixed X, \(\hat{\beta}\) is a fixed matrix times y.

**Intuition:** Linearity here concerns y, not the predictor shapes.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-ols-linear`

---

### 420. Under \(\operatorname{Var}(y)=\sigma ^{2}I\), what is \(\operatorname{Var}(\hat{\beta})\) for full-rank X?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sigma ^{2}(X^{\mathsf{T}}X)^{-1}\).

**Intuition:** Weak design directions create large coefficient uncertainty.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-ols-covariance`

---

### 421. Under the correct spherical linear model, what are \(E[\hat{y}]\) and \(\operatorname{Var}(\hat{y})\)?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E[\hat{y}]=X\beta\) and \(\operatorname{Var}(\hat{y})=\sigma ^{2}H\).

**Intuition:** The fit is unbiased for the mean but still random.

</details>

Sources: [Least-squares theory notes · p. 11](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=11)

Card ID: `stat244-fit-covariance`

---

### 422. Why do OLS and Gaussian maximum likelihood choose the same \(\beta\)?

**STAT 244 · Least squares estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For fixed positive \(\sigma ^{2}\), maximizing likelihood is equivalent to minimizing residual SSE.

**Intuition:** Gaussian likelihood penalizes squared errors.

</details>

Sources: [Least-squares theory notes · p. 13](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=13)

Card ID: `stat244-normal-ols-mle`

---

### 423. Can the fitted mean be closer to observed y than the true mean is?

**STAT 244 · Projection geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Least squares picks the closest allowed mean, and can absorb some sample noise.

**Intuition:** Better training fit does not mean closer to the true signal.

</details>

Sources: [Least-squares theory notes · p. 16](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=16)

Card ID: `stat244-fit-closer-than-truth`

---

### 424. With an intercept, how does centered total variation split?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{TSS}=\text{explained sum of squares}+\operatorname{SSE}\).

**Intuition:** The intercept separates the mean from variation around it.

</details>

Sources: [Least-squares theory notes · p. 16](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=16)

Card ID: `stat244-centered-decomposition`

---

### 425. What is \(R^{2}\) for OLS with an intercept and nonzero TSS?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1-\operatorname{SSE}/\operatorname{TSS}\).

**Intuition:** \(R^{2}\) measures the fraction of centered training variation fitted.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-definition`

---

### 426. Why can training \(R^{2}\) rise when you add a useless predictor?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The larger space can fit extra noise and cannot increase minimized SSE.

**Intuition:** Training fit rewards flexibility even without new signal.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-monotone`

---

### 427. Does a high \(R^{2}\) establish a causal explanation?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It summarizes fit, not the assumptions needed for causal inference.

**Intuition:** Explaining variation is not establishing causation.

</details>

Sources: [Least-squares theory notes · p. 18](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=18)

Card ID: `stat244-r-squared-not-causal`

---

### 428. How is \(R^{2}\) related to the correlation between y and \(\hat{y}\)?

**STAT 244 · Explained variation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For OLS with an intercept and nonconstant fit, \(R^{2}=\operatorname{Corr}(y,\hat{y})^{2}\).

**Intuition:** Projection geometry connects explained variation to alignment.

</details>

Sources: [Least-squares theory notes · p. 19](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-fit-correlation`

---

### 429. For known positive-definite V and full-rank X, what is \(\hat{\beta}_{\mathrm{GLS}}\)?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((X^{\mathsf{T}}V^{-1}X)^{-1}X^{\mathsf{T}}V^{-1}y\).

**Intuition:** Weight by precision before solving for coefficients.

</details>

Sources: [Least-squares theory notes · p. 21](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=21)

Card ID: `stat244-gls-estimator`

---

### 430. What is \(\operatorname{Var}(\hat{\beta}_{\mathrm{GLS}})\) when \(\operatorname{Var}(y)=\sigma ^{2}V\)?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sigma ^{2}(X^{\mathsf{T}}V^{-1}X)^{-1}\), assuming full column rank.

**Intuition:** The precision-weighted design determines uncertainty.

</details>

Sources: [Least-squares theory notes · p. 21](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=21)

Card ID: `stat244-gls-covariance`

---

### 431. Why can the GLS hat matrix be idempotent but not symmetric?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It projects using weighted geometry. In ordinary Euclidean geometry, that projection can be oblique.

**Intuition:** Perpendicularity depends on the chosen inner product.

</details>

Sources: [Least-squares theory notes · p. 22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-gls-oblique`

---

### 432. If Y is Gaussian, is AY+b Gaussian?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, possibly degenerate. Its mean is \(A\mu +b\) and covariance \(A\Sigma A^{\mathsf{T}}\).

**Intuition:** Linear transformations preserve the Gaussian family.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-normal-linear-map`

---

### 433. What does \((y-\mu )^{\mathsf{T}}\Sigma ^{-1}(y-\mu )\) measure?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Squared distance from the mean after accounting for covariance.

**Intuition:** A deviation matters relative to its typical direction and scale.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-mahalanobis-distance`

---

### 434. For a positive integer n, what is \(\Gamma (n)\)?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(n−1)!, not n!.

**Intuition:** The Gamma function extends factorial with a one-step shift.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gamma-integer`

---

### 435. What recursion does the Gamma function satisfy?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\Gamma (x+1)=x\Gamma (x)\), for \(x>0\).

**Intuition:** It extends the factorial recursion to nonintegers.

</details>

Sources: [Least-squares inference notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gamma-recursion`

---

### 436. What is the square of a standard normal distributed as?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\chi ^{2}\) with one degree of freedom.

**Intuition:** One independent squared Gaussian contributes one degree of freedom.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-chi-square-one`

---

### 437. How do you construct tᵣ from Gaussian and chi-squared variables?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{Z}{\sqrt{W/r}}\), with \(Z\sim N(0,1)\), \(W\sim \chi ^{2r}\), and independence.

**Intuition:** A noisy variance estimate rescales a standard Gaussian.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-t-construction`

---

### 438. How do two independent chi-squared variables produce an F distribution?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((W/p)/(U/q)\) has F(p,q) when \(W\sim \chi ^{2}_{p}\) and \(U\sim\chi_q^2\).

**Intuition:** Compare independent variance-like quantities after scaling by df.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-f-construction`

---

### 439. If \(T\sim t_{r}\), what is \(T^{2}\) distributed as?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

F with degrees of freedom (1,r).

**Intuition:** Squaring a one-dimensional t test gives the matching F test.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-t-squared-f`

---

### 440. Is a ratio of any two scaled chi-squared variables F-distributed?

**STAT 244 · Inference distributions · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The standard construction requires independence.

**Intuition:** Marginal distributions alone do not determine a ratio’s law.

</details>

Sources: [Least-squares inference notes · p. 2](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=2)

Card ID: `stat244-f-independence`

---

### 441. Under a full-rank Gaussian linear model, what distribution does \(\hat{\beta}\) have?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(N(\beta ,\sigma ^{2}(X^{\mathsf{T}}X)^{-1})\).

**Intuition:** OLS is a linear transformation of Gaussian data.

</details>

Sources: [Least-squares inference notes · p. 10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-coefficient-gaussian`

---

### 442. What is the estimated SE of \(a^{\mathsf{T}}\hat{\beta}\)?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(s\sqrt{a^{\mathsf{T}}(X^{\mathsf{T}}X)^{-1}a}\), for full-rank OLS.

**Intuition:** A contrast’s uncertainty includes covariance between coefficients.

</details>

Sources: [Least-squares inference notes · p. 12](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-contrast-se`

---

### 443. Why is a joint coefficient confidence region generally an ellipsoid?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Some coefficient combinations are measured more precisely than others, as encoded by \(X^{\mathsf{T}}X\).

**Intuition:** Uncertainty has direction as well as size.

</details>

Sources: [Least-squares inference notes · p. 11](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=11)

Card ID: `stat244-confidence-ellipsoid`

---

### 444. Why scale predictors before interpreting a condition number?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Units alone can create large stretch differences. Scaling helps separate unit choices from near-dependence.

**Intuition:** Meters versus millimeters should not masquerade as new information.

</details>

Sources: [Least-squares inference notes · p. 15](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-condition-representation`

---

### 445. Why use a generalized VIF for a factor?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A factor can occupy several contrast columns. GVIF assesses the block rather than one arbitrary coding column.

**Intuition:** A multi-direction term needs a multi-direction diagnostic.

</details>

Sources: [Least-squares inference notes · p. 16](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=16)

Card ID: `stat244-gvif-purpose`

---

### 446. How should you choose how many PCR components to keep for prediction?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use an appropriate validation procedure, fitting preprocessing inside training folds.

**Intuition:** Large variance explained in X is not the final prediction criterion.

</details>

Sources: [Least-squares inference notes · p. 24](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pcr-component-choice`

---

### 447. What can curvature in residuals versus fitted values suggest?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The mean model may be missing a nonlinear pattern.

**Intuition:** Residual structure is signal the mean model left behind.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-curve`

---

### 448. What can a widening residual funnel suggest?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Nonconstant error variance.

**Intuition:** The noise scale may depend on the predicted level.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-funnel`

---

### 449. Does a pattern-free residual plot prove all model assumptions?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It may fail to reveal problems and does not directly check every assumption.

**Intuition:** Diagnostics provide evidence, not certification.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-residual-clean`

---

### 450. Which plot more directly examines a normal-error assumption?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A suitable residual QQ plot, rather than only residuals versus fitted values.

**Intuition:** Different diagnostics target different assumptions.

</details>

Sources: [Least-squares inference notes · p. 25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=25)

Card ID: `stat244-qq-role`

---

### 451. Which observations can pull their own fitted values most strongly toward their responses?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Those with high leverage \(h_{ii}\), a diagonal entry of the hat matrix H. Their predictor positions are unusual relative to the design. Leverage depends on predictors, not on whether the observed response is surprising.

**Intuition:** Leverage concerns x, not an unusual response y.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-definition`

---

### 452. Can changing y alone change leverage?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. H depends only on X.

**Intuition:** Predictor geometry determines leverage before responses are observed.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-response`

---

### 453. What range can an OLS leverage take?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Between 0 and 1.

**Intuition:** A projector cannot retain more than the entire coordinate direction.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-bounds`

---

### 454. What is average leverage for a rank-r design with n rows?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r/n\), because \(\sum_i h_{ii}=r\).

**Intuition:** Total fitted dimension is distributed across observations.

</details>

Sources: [Least-squares inference notes · p. 26](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=26)

Card ID: `stat244-leverage-average`

---

### 455. How does \(y_{i}\) affect its own fitted value?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\partial \hat{y}_{i}/\partial y_{i}=h_{ii}\).

**Intuition:** High leverage gives an observation more pull on its own fit.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-leverage-sensitivity`

---

### 456. Under equal-variance, uncorrelated errors, what is \(\operatorname{Var}(e)\)?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sigma ^{2}(I-H)\).

**Intuition:** Fitting changes both residual variances and their correlations.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-covariance`

---

### 457. Why do high-leverage observations have smaller raw residual variance?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Var}(e_{i})=\sigma ^{2}(1-h_{ii})\). The fit follows them more closely.

**Intuition:** A small residual need not mean little influence.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-variance`

---

### 458. Are OLS residuals independent just because the original errors are?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Generally not. Their off-diagonal covariances are \(-\sigma ^{2}h_{ij}\).

**Intuition:** Fitting links observations through the shared model.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-residual-correlated`

---

### 459. How do you standardize a residual for noise and leverage?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r_i=\frac{e_i}{s\sqrt{1-h_{ii}}}\), when the denominator is positive.

**Intuition:** Raw residuals do not all have the same variance.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-internal-studentization`

---

### 460. Why isn’t an internally studentized residual exactly t-distributed?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its numerator and the full-data estimate s are dependent.

**Intuition:** The usual t construction needs an independent noise estimate.

</details>

Sources: [Least-squares inference notes · p. 27](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=27)

Card ID: `stat244-internal-not-t`

---

### 461. What changes for an externally studentized residual?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use s estimated with observation i omitted: \(\frac{e_i}{s_{(i)}\sqrt{1-h_{ii}}}\).

**Intuition:** Estimate noise without the point being checked.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-external-studentization`

---

### 462. Under Gaussian errors, what is the deleted-residual t reference?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

t with n−p−1 df for a fixed observation, assuming the deleted design keeps rank p.

**Intuition:** Deleting one observation costs one residual degree of freedom.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-external-t-df`

---

### 463. Why adjust when testing every observation for outlyingness?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Many individual tests increase the chance of at least one false flag.

**Intuition:** Searching everywhere is different from checking one prespecified point.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-outlier-multiple-testing`

---

### 464. How does Bonferroni adjust n residual-test p-values?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply each raw p-value by n and cap at 1.

**Intuition:** Spend the error budget across the whole search.

</details>

Sources: [Least-squares inference notes · p. 28](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=28)

Card ID: `stat244-bonferroni-residuals`

---

### 465. Does Bonferroni require independent residual tests?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its familywise-error bound also holds under dependence.

**Intuition:** The union bound does not need independence.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-bonferroni-dependence`

---

### 466. Which reference quantiles match externally studentized residuals under the Gaussian model?

**STAT 244 · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

t quantiles with n−p−1 df, subject to the deletion assumptions.

**Intuition:** Use the distribution of the actual diagnostic you plotted.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-qq-studentized`

---

### 467. What happens to \(X^{\mathsf{T}}X\) when observation i is removed?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract \(x_{i}^{\mathsf{T}}x_{i}\).

**Intuition:** One deleted row is a rank-one update to the Gram matrix.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-delete-gram`

---

### 468. Why is Sherman–Morrison–Woodbury useful for deletion diagnostics?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It updates an inverse after a low-rank change instead of recomputing it from scratch, when the needed inverses exist.

**Intuition:** Reuse the full fit to study many nearby fits.

</details>

Sources: [Least-squares inference notes · p. 29](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=29)

Card ID: `stat244-smw-purpose`

---

### 469. How is the leave-one-out prediction residual related to the full-fit residual?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is \(\frac{e_i}{1-h_{ii}}\), provided deleting the point preserves rank.

**Intuition:** The full fit hides some error by fitting the point itself.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-deleted-residual`

---

### 470. Why can deleting a high-leverage point cause a large change?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Deletion formulas divide by \(1-h_{ii}\), which becomes small.

**Intuition:** A point with strong pull can be hard to replace.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-delete-high-leverage`

---

### 471. What warning does \(h_{ii}=1\) give for ordinary deletion formulas?

**STAT 244 · Deletion diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The denominator vanishes; deleting that observation loses a design direction.

**Intuition:** Some observations uniquely support part of the model.

</details>

Sources: [Least-squares inference notes · p. 30](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=30)

Card ID: `stat244-leverage-one`

---

### 472. How do outlyingness and leverage differ?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Outlyingness is an unusual response given x; leverage is an unusual x.

**Intuition:** A point can be unusual in either axis of the modeling problem.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-outlier-vs-leverage`

---

### 473. How can you check whether one observation strongly drives the fitted model?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Remove it, refit, and compare coefficients or predictions. A large change indicates influence; an unusual predictor value alone does not establish that.

**Intuition:** Influence is about the fit’s dependence on a point.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-influence-definition`

---

### 474. Must a high-leverage point be highly influential?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its response may agree closely with the rest of the fitted pattern.

**Intuition:** Potential pull is different from actual disruption.

</details>

Sources: [Least-squares inference notes · p. 32](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=32)

Card ID: `stat244-leverage-not-influence`

---

### 475. What does Cook’s distance summarize?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The coefficient change after deleting a point, scaled by coefficient uncertainty and model dimension.

**Intuition:** Compare deletion effects on a common uncertainty scale.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-definition`

---

### 476. How does Cook’s distance combine residual size and leverage?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(D_i=\frac{r_i^2}{p}\frac{h_{ii}}{1-h_{ii}}\), using the internally studentized residual.

**Intuition:** Large residuals and high leverage reinforce each other.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-formula`

---

### 477. Does a large Cook’s distance automatically justify deleting an observation?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Investigate data quality and model sensitivity; the point may be valid and important.

**Intuition:** A diagnostic flag starts an investigation, not an automatic deletion.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-cooks-not-delete`

---

### 478. What distinguishes DFFITS from DFBETAS?

**STAT 244 · Leverage and influence · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

DFFITS focuses on a fitted-value change; DFBETAS on a particular coefficient change.

**Intuition:** Different influence measures target different consequences.

</details>

Sources: [Least-squares inference notes · p. 33](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=33)

Card ID: `stat244-dffits-dfbetas`

---

### 479. What does the column space of X mean in regression?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is every mean vector the model can express: all \(X\beta\). It contains zero and is closed under addition and scaling.

**Intuition:** The column space is the model’s menu of possible means.

</details>

Sources: [HW1 · Q1](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-space`

---

### 480. For an \(n\times p\) design X, do coefficients and fitted values live in the same space?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Usually not. \(\beta\) lives in \(\mathbb{R}^{p}\); \(X\beta\) lives in \(\mathbb{R}^{n}\).

**Intuition:** Coefficients describe features; fitted values describe observations.

</details>

Sources: [HW1 · Q1](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-ambient-dimensions`

---

### 481. A \(10\times 4\) design has rank 3. How many coefficient directions are invisible?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One: dim \(N(X)=4-3\). Moving along it leaves \(X\beta\) unchanged.

**Intuition:** Rank counts visible directions; nullity counts invisible ones.

</details>

Sources: [Linear algebra notes · subspaces and rank](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-rank-nullity`

---

### 482. Can different design matrices describe the same mean model?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if their columns span the same space.

**Intuition:** The reachable means matter more than the chosen basis.

</details>

Sources: [HW1 · Q1](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-span-not-columns`

---

### 483. What vectors are perpendicular to (1,1,0) and (0,1,1)?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiples of (1,−1,1). Each dot product is zero.

**Intuition:** Perpendicular directions satisfy all column constraints at once.

</details>

Sources: [HW1 · Q2](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-null`

---

### 484. Why is N(X) perpendicular to the row space of X?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(Xv=0\) says every row has dot product zero with v. The same is then true for every combination of rows.

**Intuition:** A null direction is invisible to every row.

</details>

Sources: [HW1 · Q2](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-nullspace-test`

---

### 485. Project \(y=(1,2,6)\) onto the constant vectors. What do you get?

**STAT 244 · Fundamental subspaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(3,3,3), using the average 3. The residual is (−2,−1,3).

**Intuition:** The best constant fit is the average.

</details>

Sources: [HW1 · Q2](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-orthogonal-decomposition-example`

---

### 486. When can the data support an unbiased estimate of a coefficient combination \(\ell ^{\mathsf{T}}\beta\)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When \(\ell\) lies in the row space of X. Then \(\ell =X^{\mathsf{T}}a\) for some a, so \(a^{\mathsf{T}}y\) has expected value \(\ell ^{\mathsf{T}}\beta\). The combination is then called estimable.

**Intuition:** An estimable target cannot depend on invisible coefficient directions.

</details>

Sources: [HW1 · Q5–6](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-estimable`

---

### 487. With \(X=\begin{bmatrix}x&x\end{bmatrix}\), which is identifiable: \(\beta _{1}\) or \(\beta _{1}+\beta _{2}\)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The sum. The mean is \(x(\beta _{1}+\beta _{2})\), so the data cannot separate the two contributions.

**Intuition:** Duplicate features reveal a total, not its allocation.

</details>

Sources: [HW1 · Q5–6](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-columns`

---

### 488. If \(\ell =X^{\mathsf{T}}a\), why is \(a^{\mathsf{T}}y\) unbiased for \(\ell ^{\mathsf{T}}\beta\)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E[a^{\mathsf{T}}y]=a^{\mathsf{T}}X\beta =\ell ^{\mathsf{T}}\beta\), assuming \(E[y]=X\beta\).

**Intuition:** Match the estimator’s mean to the target.

</details>

Sources: [HW1 · Q5–6](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-construct-unbiased-estimator`

---

### 489. Can \(\gamma _{2}-\gamma _{1}\) be identifiable when individual group effects are not?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. In \(\mu _{i}=\alpha +\gamma _{i}\), the difference is \(\mu _{2}-\mu _{1}\) for observed groups. A common shift in effects cancels.

**Intuition:** Differences can be identifiable even when baselines are arbitrary.

</details>

Sources: [HW1 · Q5–6](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-contrast-invariance`

---

### 490. With rank-deficient X, when is a new mean \(x_{0}\beta\) uniquely determined?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When \(x_{0}\) is in X’s row space. Otherwise two equally valid coefficient vectors can predict different new means.

**Intuition:** Training-fit agreement does not guarantee prediction agreement everywhere.

</details>

Sources: [HW1 · Q5–6](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-new-point-estimability`

---

### 491. Does a numerically accurate least-squares fit guarantee valid inference?

**STAT 244 · AM 205 × STAT 244 · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. AM 205 asks whether the calculation is reliable; STAT 244 asks whether the statistical assumptions justify inference.

**Intuition:** Accurate computation does not validate the model’s assumptions.

</details>

Sources: [HW2 · Q5–9](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3); [PS2 · Q3](../courses/harvard/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `bridge-fit`

---

### 492. Why can an intercept plus every group indicator cause ambiguity?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The indicators add up to the intercept column. You can shift the intercept and offset every group effect without changing the fit.

**Intuition:** Redundant columns create redundant coefficient descriptions.

</details>

Sources: [Least-squares theory · p. 2](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-alias`

---

### 493. An intercept plus three observed-group indicators gives how many independent directions?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three, not four. The intercept is the sum of the indicators.

**Intuition:** Count independent directions, not column names.

</details>

Sources: [Least-squares theory · p. 2](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-dummy-rank`

---

### 494. Does choosing a reference group restrict the possible group means?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It changes the coefficient description: the intercept is the reference mean, and other effects are differences.

**Intuition:** An identifying convention is not a substantive hypothesis.

</details>

Sources: [Least-squares theory · p. 2](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-constraints-not-model`

---

### 495. Why do X and XA give the same fits when A is invertible?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They span the same column space. A changes coordinates, not the set of possible mean vectors.

**Intuition:** Recode the coefficients without changing the model.

</details>

Sources: [HW2 · Q1 and Q4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode`

---

### 496. If \(X^{*}=XA\) and X has full column rank, how do coefficients transform?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\beta =A\gamma\), or \(\gamma =A^{-1}\beta\), so \(X\beta =X^{*}\gamma\).

**Intuition:** The coefficients must compensate for the changed basis.

</details>

Sources: [HW2 · Q1 and Q4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-parameter-map`

---

### 497. Two full-rank designs share a column space. Can the basis-change matrix be singular?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A singular change would lose a direction, contradicting full column rank.

**Intuition:** A genuine basis change preserves every direction.

</details>

Sources: [HW2 · Q1 and Q4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-column-space-converse`

---

### 498. If \(\hat{\beta}\) is one least-squares solution, what are all the others?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\hat{\beta}+N(X)\). Adding a null vector changes coefficients but leaves the fitted values unchanged.

**Intuition:** Nonunique solutions form a shifted null space.

</details>

Sources: [HW2 · Q2](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine`

---

### 499. If \(X=\begin{bmatrix}x&x\end{bmatrix}\) and the best fit is 3x, what coefficient pairs work?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every pair with \(\beta _{1}+\beta _{2}=3\), such as (3,0) or (1,2).

**Intuition:** One fit can have many coefficient explanations.

</details>

Sources: [HW2 · Q2](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-example`

---

### 500. Do the normal equations require normally distributed errors?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. “Normal” means perpendicular: \(X^{\mathsf{T}}(y-X\hat{\beta})=0\). This follows from least-squares geometry alone.

**Intuition:** The name refers to a right angle, not a distribution.

</details>

Sources: [Least-squares theory · p. 9](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-normal`

---

### 501. What is the gradient of \(\Vert y-X\beta \Vert ^{2}\)?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(2X^{\mathsf{T}}(X\beta -y)\). Setting it to zero gives \(X^{\mathsf{T}}X\beta =X^{\mathsf{T}}y\).

**Intuition:** At the optimum, no predictor direction reduces squared error.

</details>

Sources: [Least-squares theory · p. 9](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-differentiate-loss`

---

### 502. Why do OLS residuals sum to zero when there is an intercept?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are perpendicular to every design column, including the all-ones column. So \(1^{\mathsf{T}}e=0\).

**Intuition:** An intercept forces the average residual to zero.

</details>

Sources: [Least-squares theory · p. 9](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-residual-sum-zero`

---

### 503. Why are OLS fitted values perpendicular to residuals?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fit lies in C(X), and the residual is perpendicular to that entire space.

**Intuition:** Least squares splits data into a fit and an orthogonal leftover.

</details>

Sources: [Least-squares theory · p. 9](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-fitted-orthogonality`

---

### 504. Which two properties define an orthogonal projector P?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P^{2}=P\) and \(P^{\mathsf{T}}=P\). Applying it twice changes nothing, and symmetry makes the projection perpendicular.

**Intuition:** Idempotence gives a projection; symmetry makes it orthogonal.

</details>

Sources: [HW2 · Q5(a–c)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projection`

---

### 505. Is \(P^{2}=P\) alone enough for an orthogonal projection?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(\begin{bmatrix}1&1\\0&0\end{bmatrix}\) is idempotent but not symmetric. It projects at a slant.

**Intuition:** A projection can be oblique.

</details>

Sources: [HW2 · Q5(a–c)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-idempotent-not-orthogonal`

---

### 506. What eigenvalues can a projector have?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only 0 or 1: \(\lambda ^{2}=\lambda\). A direction is either removed or retained.

**Intuition:** A projector selects directions rather than stretching them.

</details>

Sources: [HW2 · Q5(a–c)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projector-eigenvalues`

---

### 507. If the model space has rank r, what is tr(H)?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r. Each retained direction contributes an eigenvalue 1.

**Intuition:** The hat matrix’s trace counts fitted dimensions.

</details>

Sources: [HW2 · Q5(a–c)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-hat-trace`

---

### 508. For nested models, what does \((P_{1}-P_{0})y\) represent?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The part of y explained by the larger model but not the smaller one.

**Intuition:** Added directions account for the improvement in fit.

</details>

Sources: [HW2 · Q5(d)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nested`

---

### 509. If \(V_{0}\subseteq V_{1}\), why is \(P_{1}P_{0}=P_{0}\)?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

After projecting into \(V_{0}\), the vector already lies in \(V_{1}\). Projecting into \(V_{1}\) cannot change it.

**Intuition:** A larger space already contains the smaller fit.

</details>

Sources: [HW2 · Q5(d)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nesting-product`

---

### 510. Is the difference of two orthogonal projectors always a projector?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. \(\operatorname{diag}(0,1)-\operatorname{diag}(1,0)=\operatorname{diag}(-1,1)\), which is not idempotent. The usual difference rule requires nested spaces.

**Intuition:** Subtracting unrelated model spaces is not “extra fit.”

</details>

Sources: [HW2 · Q5(d)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-difference-without-nesting`

---

### 511. Under treatment coding, what does the intercept mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The fitted reference-group mean when other numeric predictors are zero.

**Intuition:** The coding determines the baseline’s interpretation.

</details>

Sources: [HW2 · Q3–4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-contrasts`

---

### 512. Reference mean 10; B’s coefficient is 2. What is B’s fitted mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12. Treatment coefficients are differences from the reference.

**Intuition:** Add the contrast to the baseline.

</details>

Sources: [HW2 · Q3–4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-treatment-numeric`

---

### 513. Sum-coded effects are 2 and −1 for three groups. What is the missing effect?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

−1, so all three effects sum to zero.

**Intuition:** The final effect is determined by the constraint.

</details>

Sources: [HW2 · Q3–4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-coding-numeric`

---

### 514. With a contrast coded −1 for A and +1 for B, why is its coefficient half their difference?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Moving from A to B changes the code by 2, so the fitted difference is twice the coefficient.

**Intuition:** Read the coding scale before interpreting a coefficient.

</details>

Sources: [HW2 · Q3–4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-helmert-scaling`

---

### 515. Can you drop the intercept from any equivalent factor codings and keep equivalent models?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Their spaces can coincide only after the intercept direction is added.

**Intuition:** Removing a shared direction can reveal different remaining spaces.

</details>

Sources: [HW2 · Q3–4](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-remove-intercept-caveat`

---

### 516. Why divide residual SSE by \(n-\operatorname{rank}(X)\) to estimate noise variance unbiasedly?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fitting uses \(\operatorname{rank}(X)\) directions. Under equal-variance, uncorrelated errors and the correct mean model, only \(n-\operatorname{rank}(X)\) noise directions remain in the residual.

**Intuition:** Fitted directions consume residual degrees of freedom.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance`

---

### 517. \(n=20\), \(\operatorname{rank}(X)=4\), \(\operatorname{SSE}=80\). What is the unbiased variance estimate?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(80/(20-4)=5\).

**Intuition:** Divide by residual dimensions, not total observations.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-numeric`

---

### 518. Why is \(\operatorname{SSE}/n\) a likelihood maximum for Gaussian variance when \(\operatorname{SSE}>0\)?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

At \(s=\operatorname{SSE}/n\), the derivative of \(\ell (s)\) is zero and its second derivative is negative.

**Intuition:** Check curvature, not just the stationary point.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-second-derivative`

---

### 519. What does “best” mean in BLUE?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Smallest variance among linear unbiased estimators, under the Gauss–Markov assumptions. It does not compare against every biased or nonlinear estimator.

**Intuition:** “Best” always has a comparison class.

</details>

Sources: [HW2 · Q9](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue`

---

### 520. Does OLS need Gaussian errors to be unbiased?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. With fixed full-rank X, \(E[y]=X\beta\) is enough. Gaussianity matters for exact finite-sample t and F inference.

**Intuition:** Estimation and exact inference require different assumptions.

</details>

Sources: [HW2 · Q9](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-normality-separation`

---

### 521. What identity defines a generalized inverse G of B here?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(BGB=B\). It need not satisfy \(BG=I\) or be unique.

**Intuition:** A generalized inverse only has to undo B where B acts.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse`

---

### 522. For \(B=\operatorname{diag}(1,0)\), why does \(G=\operatorname{diag}(1,t)\) work for any t?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(BGB=B\) whatever t is. Multiplication by B erases the second direction.

**Intuition:** The generalized-inverse rule leaves invisible directions unconstrained.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse-example`

---

### 523. If G is a generalized inverse of B, what works for BA when A is invertible?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(A^{-1}G\), since (BA)(\(A^{-1}G\))(BA)=BGBA=BA.

**Intuition:** Cancel A next to its inverse, then use \(BGB=B\).

</details>

Sources: [HW2 · Q1(a)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-ginverse-product`

---

### 524. If G is a generalized inverse of B, what works for AB when A is invertible?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(GA^{-1}\), since \((AB)(GA^{-1})(AB)=A(BGB)=AB\).

**Intuition:** The inverse must go on the correct side.

</details>

Sources: [HW2 · Q1(a)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-right-product`

---

### 525. Why can coefficients be nonunique while fitted values are unique?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All least-squares fits equal the unique orthogonal projection onto C(X). Different coefficient solutions differ only in N(X).

**Intuition:** The prediction vector is unique even if its coordinates are not.

</details>

Sources: [HW2 · Q10](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-projector-unique`

---

### 526. For \(X=\begin{bmatrix}1&0\\1&0\end{bmatrix}\) and \(y=(1,3)\), what is the fit?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(2,2). The first coefficient is 2; the second is arbitrary because its column is zero.

**Intuition:** An unused coefficient cannot affect predictions.

</details>

Sources: [HW2 · Q10](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-g-inverse-fitted-numeric`

---

### 527. Why is an orthogonal projection the nearest point in a subspace?

**STAT 244 · Projection proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Moving elsewhere within the subspace adds a perpendicular squared-distance term: \(\Vert y-\mu \Vert ^{2}=\Vert y-\hat{\mu}\Vert ^{2}+\Vert \hat{\mu}-\mu \Vert ^{2}\).

**Intuition:** Every alternative adds nonnegative extra distance.

</details>

Sources: [HW2 · Q6](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-pythagoras`

---

### 528. Why can a linear unbiased competitor not beat OLS under equal-variance, uncorrelated errors?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its covariance is OLS covariance plus \(\sigma ^{2}AA^{\mathsf{T}}\) for some \(AX=0\). The added term is positive semidefinite.

**Intuition:** Extra unbiased adjustments add noise, not information.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-blue-proof`

---

### 529. A linear unbiased contrast estimator adds weights z with \(X^{\mathsf{T}}z=0\). What variance does that add?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sigma ^{2}\Vert z\Vert ^{2}\) under \(\operatorname{Var}(y)=\sigma ^{2}I\).

**Intuition:** Weighting pure residual directions adds noise to the target.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-contrast-variance-gap`

---

### 530. What does generalized least squares change?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It measures residual size using \(V^{-1}\) when \(\operatorname{Var}(y)=\sigma ^{2}V\): minimize \(e^{\mathsf{T}}V^{-1}e\).

**Intuition:** Judge errors relative to their covariance structure.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-gls`

---

### 531. Why whiten both y and X in GLS?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Transforming y by \(V^{-\frac{1}{2}}\) changes its mean to \(V^{-\frac{1}{2}}X\beta\) too. Leaving X unchanged would change the model.

**Intuition:** Transform the data and its expected signal together.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-whitening-covariance`

---

### 532. Two independent measurements have variances 1 and 4. What relative weights should they get?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1 and \(\frac{1}{4}\), proportional to inverse variance.

**Intuition:** Trust the noisier measurement less.

</details>

Sources: [Least-squares theory · p. 22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weights`

---

### 533. Values are 2 and 8, with variances proportional to 1 and 4. What is their weighted mean?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((2+\frac{8}{4})/(1+\frac{1}{4})=3.2\).

**Intuition:** The estimate leans toward the more precise observation.

</details>

Sources: [Least-squares theory · p. 22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weighted-mean`

---

### 534. Project a standard Gaussian vector onto r orthogonal directions. What distribution does its squared length have?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\chi ^{2}\) with r degrees of freedom: a sum of r independent squared standard normals.

**Intuition:** Degrees of freedom count independent squared noise directions.

</details>

Sources: [Inference notes · p. 3](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-cochran`

---

### 535. What are the mean and variance of \(Z_{1}^{2}+Z_{2}^{2}\) for independent standard normals?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is \(\chi ^{2}_{2}\), with mean 2 and variance 4.

**Intuition:** For \(\chi ^{2r}\), mean is r and variance is 2r.

</details>

Sources: [Inference notes · p. 3](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-quadratic-rank-two`

---

### 536. Why are Gaussian OLS fitted values and residuals independent?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are jointly Gaussian and have zero cross-covariance, since \(H(I-H)=0\).

**Intuition:** Gaussianity turns orthogonality into independence.

</details>

Sources: [Inference notes · p. 3](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-independent-fit-residual`

---

### 537. What does the nested-model F statistic compare?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Improvement per added direction against residual noise per remaining direction: \(\frac{(\operatorname{SSE}_0-\operatorname{SSE}_1)/(r_1-r_0)}{\operatorname{SSE}_1/(n-r_1)}\).

**Intuition:** Ask whether extra fit is large relative to noise.

</details>

Sources: [Inference notes · pp. 3–6](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-test`

---

### 538. Why is the usual central F reference distribution a null-model result?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under the null, the extra fitted directions contain noise but no mean signal. Under an alternative, they can contain signal too.

**Intuition:** A test’s reference describes what happens without the added effect.

</details>

Sources: [Inference notes · pp. 3–6](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-null-needed`

---

### 539. How many test degrees of freedom can a four-level factor add?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Three with an intercept, if all three contrast directions are independent.

**Intuition:** One named predictor can contribute several directions.

</details>

Sources: [Inference notes · pp. 3–6](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-rank-not-predictors`

---

### 540. For nested Gaussian models, do a large F statistic and a small null/full likelihood ratio agree?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Both indicate that allowing the extra directions substantially improves fit.

**Intuition:** Different statistics can encode the same evidence ordering.

</details>

Sources: [Inference notes · pp. 5–6](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-lrt-monotone`

---

### 541. SSE drops from 120 to 80 after adding 2 directions; full residual df is 20. What is F?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{(120-80)/2}{80/20}=5\).

**Intuition:** Compare improvement per direction with noise per direction.

</details>

Sources: [Inference notes · p. 5 · companion calculation](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-number`

---

### 542. How do you express \(\beta _{2}=\beta _{3}\) as a linear restriction?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use a row with 1 in position 2, −1 in position 3, and zeros elsewhere; set its product with \(\beta\) to zero.

**Intuition:** Equality is a zero difference.

</details>

Sources: [Inference notes · pp. 8–10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraints`

---

### 543. Is the restriction \(\beta _{3}=2\) a subspace constraint?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Its solution set does not contain zero, so it is affine.

**Intuition:** A nonzero target shifts the constraint away from the origin.

</details>

Sources: [Inference notes · pp. 8–10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraint-matrix`

---

### 544. Why add Lagrange multipliers to constrained least squares?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They balance the least-squares gradient against directions forbidden by \(\Lambda \beta =c\). The constraints and stationarity equations are solved together.

**Intuition:** The best allowed point need not have an unconstrained zero gradient.

</details>

Sources: [Inference notes · pp. 8–10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constrained-normal-equations`

---

### 545. What is a coefficient’s estimated standard error in full-rank OLS?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(s\sqrt{(X^{\mathsf{T}}X)^{-1}_{jj}}\), with \(s^2=\frac{\operatorname{SSE}}{n-p}\). The inverse-design term alone omits the noise scale.

**Intuition:** Uncertainty combines design geometry and noise size.

</details>

Sources: [Inference notes · p. 10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-t-ci`

---

### 546. If \(s=3\) and \((X^{\mathsf{T}}X)^{-1}_{jj}=0.04\), what is the coefficient SE?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(3\sqrt{0.04}=0.6\).

**Intuition:** Take the square root before multiplying by the noise scale.

</details>

Sources: [Inference notes · p. 10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-standard-error-number`

---

### 547. What does 95% frequentist confidence mean?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under repeated sampling, the interval-building procedure covers the fixed true parameter 95% of the time.

**Intuition:** The coverage guarantee belongs to the procedure.

</details>

Sources: [Inference notes · p. 10](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-confidence-interpretation`

---

### 548. Why is a new-response prediction interval wider than a mean-response interval?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A new response includes its own noise in addition to uncertainty in the estimated mean.

**Intuition:** Predicting one noisy outcome is harder than estimating its average.

</details>

Sources: [Inference notes · pp. 12–13](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction`

---

### 549. With \(s=2\) and mean-prediction leverage 0.25, what are the mean and new-response SEs?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Mean: \(2\sqrt{0.25}=1\). New response: \(2\sqrt{1.25}=\sqrt{5}\).

**Intuition:** The extra 1 inside the square root is future observation noise.

</details>

Sources: [Inference notes · pp. 12–13](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction-width-number`

---

### 550. Do ten separate 95% intervals guarantee 95% coverage for all ten together?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. All intervals covering simultaneously is a stronger event than any one covering.

**Intuition:** More protected claims require more protection.

</details>

Sources: [Inference notes · pp. 11–12](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-simultaneous`

---

### 551. What multiplier gives Scheffé protection for all coefficient combinations in a p-parameter Gaussian model?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sqrt{pF}\), using the \(1-\alpha\) quantile of F with p and n−p degrees of freedom.

**Intuition:** Protecting every linear combination widens the intervals.

</details>

Sources: [Inference notes · pp. 11–12](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-scheffe-factor`

---

### 552. If \(A\subseteq B\), which orthogonal complement is larger?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(A^{\perp}\) is larger: \(B^{\perp}\subseteq A^{\perp}\). Being perpendicular to a bigger space imposes more restrictions.

**Intuition:** More directions to avoid means fewer directions left.

</details>

Sources: [HW1 · Q7](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-orthocomplement`

---

### 553. Why is \(v_{1}+v_{2}\) perpendicular to \(W_{1}\cap W_{2}\) when \(v_{i}\) is perpendicular to \(W_{i}\)?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Any vector in the intersection is perpendicular to both \(v_{1}\) and \(v_{2}\), hence to their sum.

**Intuition:** Two zero dot products still add to zero.

</details>

Sources: [HW1 · Q7](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-intersection-complement`

---

### 554. In finite dimensions, what is \((A^{\perp})^{\perp}\) for a subspace A?

**STAT 244 · Subspace proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A itself. Every vector decomposes into an A component and an \(A^{\perp}\) component; perpendicularity to \(A^{\perp}\) removes the latter.

**Intuition:** Taking the orthogonal complement twice returns the original space.

</details>

Sources: [HW1 · Q7](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-double-complement`

---

### 555. How does covariance change under AY+b?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It becomes \(A\Sigma A^{\mathsf{T}}\). The constant shift b changes the mean, not the covariance.

**Intuition:** Linear mixing changes spread; translation does not.

</details>

Sources: [Inference notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-cov-transform`

---

### 556. Can X and \(X^{2}\) be dependent but uncorrelated when X is standard normal?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Symmetry makes \(\operatorname{Cov}(X,X^{2})=0\), but \(X^{2}\) is completely determined by X.

**Intuition:** Zero correlation only rules out linear association.

</details>

Sources: [Inference notes · p. 1](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gaussian-uncorrelated`

---

### 557. Can pairwise correlations miss multicollinearity?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. One predictor can be nearly a combination of several others without nearly matching any single one.

**Intuition:** Dependence can involve a group of columns.

</details>

Sources: [Inference notes · pp. 14–15](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-collinearity`

---

### 558. Why can nearly duplicate predictors have unstable coefficients but stable fits?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One coefficient can rise while the other falls, nearly cancelling in \(X\beta\).

**Intuition:** The data may identify a total much better than its parts.

</details>

Sources: [Inference notes · pp. 14–15](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-stable-sum-unstable-parts`

---

### 559. If predicting \(x_{j}\) from other predictors gives \(R^{2}=0.95\), what is its VIF?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1/(1-0.95)=20\). This is a variance-inflation factor under the usual regression comparison.

**Intuition:** Little unique predictor variation means high coefficient uncertainty.

</details>

Sources: [Inference notes · pp. 15–18](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif`

---

### 560. If \(\operatorname{VIF}=9\), how much does the coefficient SE inflate?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

By 3, holding noise and predictor scale fixed. Standard error is the square root of variance.

**Intuition:** Variance factors must be square-rooted for SEs.

</details>

Sources: [Inference notes · pp. 15–18](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-standard-error`

---

### 561. Software reports \(\operatorname{GVIF}^{1/(2df)}=2\). What is \(\operatorname{GVIF}^{1/df}\)?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

4. Square the reported value.

**Intuition:** Check whether a diagnostic uses a variance or SE-like scale.

</details>

Sources: [Inference notes · pp. 16–17](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=17)

Card ID: `stat244-gvif-scale`

---

### 562. What does Gram–Schmidt subtract from the next column?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its projection onto the earlier columns’ span. What remains is a new perpendicular direction.

**Intuition:** Keep only what earlier directions cannot explain.

</details>

Sources: [Inference notes · pp. 20–23](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt`

---

### 563. Remove the projection onto (1,1) from (1,0). What remains?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((\frac{1}{2},-\frac{1}{2})\), whose dot product with (1,1) is zero.

**Intuition:** Subtract the shared component to isolate a new direction.

</details>

Sources: [Inference notes · pp. 20–23](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt-number`

---

### 564. Does orthogonalizing predictors remove uncertainty in the original coefficients?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If all directions are retained, it only changes coordinates. Transforming back restores the original uncertainty.

**Intuition:** A nicer basis is not new information.

</details>

Sources: [Inference notes · pp. 18–20](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=19)

Card ID: `stat244-orthogonalization-limit`

---

### 565. Why can PCR discard a useful predictor direction?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

PCA ranks directions by variation in X, not their relationship with y. A low-variance direction may carry strong signal.

**Intuition:** Large predictor variation need not mean high predictive value.

</details>

Sources: [Inference notes · pp. 23–24](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr`

---

### 566. Why does full-component PCR reproduce OLS, but truncated PCR may not?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All components preserve the original space. Dropping components removes directions from the model.

**Intuition:** Rotation preserves a model; truncation changes it.

</details>

Sources: [Inference notes · pp. 23–24](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-full-versus-truncated`

---

### 567. Why fit PCA inside each cross-validation training fold?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Otherwise validation predictors influence the means, scales, and directions used to train the model.

**Intuition:** Unsupervised preprocessing can still leak validation information.

</details>

Sources: [Inference notes · pp. 23–24](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pca-fold-boundary`

---

### 568. What does PLS use that PCA does not?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The response y, as well as predictor structure, to construct components.

**Intuition:** PLS seeks response-related directions, not just variable predictors.

</details>

Sources: [Inference notes · pp. 24–25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls`

---

### 569. Why is fitting PLS before splitting especially risky?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Validation responses influence the constructed components, leaking the answers into the representation.

**Intuition:** Response-informed features must be trained without validation outcomes.

</details>

Sources: [Inference notes · pp. 24–25](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls-supervised-boundary`

---

### 570. Why does C(X) always contain zero?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Choose \(\beta =0\), so \(X\beta =0\).

**Intuition:** A linear model space always passes through the origin.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-zero-mean`

---

### 571. If \(X\beta _{1}\) and \(X\beta _{2}\) are possible means, is their sum possible too?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes: \(X\beta _{1}+X\beta _{2}=X(\beta _{1}+\beta _{2})\).

**Intuition:** Linear combinations stay in the model space.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-add-means`

---

### 572. Does an OLS residual lie in N(X) or \(N(X^{\mathsf{T}})\)?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(N(X^{\mathsf{T}})\), since \(X^{\mathsf{T}}e=0\). Residuals have n entries, not p.

**Intuition:** Dimensions help catch a transposed-space mistake.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-residual-space`

---

### 573. A design has 10 rows and rank 3. How many residual directions remain?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(10-3=7\).

**Intuition:** Observation space splits into fitted and residual directions.

</details>

Sources: [Linear algebra notes · subspaces and rank · companion concept check](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-residual-dimension`

---

### 574. Can deleting a predictor enlarge the model’s column space?

**STAT 244 · Column spaces · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Every combination of the remaining columns was already available.

**Intuition:** Fewer ingredients cannot create more linear combinations.

</details>

Sources: [HW1 · Q1 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-drop-column`

---

### 575. If X has full column rank, which coefficient contrasts are estimable?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every \(\ell ^{\mathsf{T}}\beta\). The row space is all of \(\mathbb{R}^{p}\).

**Intuition:** No coefficient direction is invisible.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-full-rank-targets`

---

### 576. How can a null vector prove that \(\ell ^{\mathsf{T}}\beta\) is not estimable?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Find v with \(Xv=0\) but \(\ell ^{\mathsf{T}}v\ne 0\). Then \(\beta\) and \(\beta +v\) have identical means but different target values.

**Intuition:** The data cannot distinguish targets that change invisibly.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-null-target-test`

---

### 577. What does \(\ell ^{\mathsf{T}}G(X^{\mathsf{T}}X)=\ell ^{\mathsf{T}}\) mean when G is a generalized inverse?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The target row survives the recoverable part of the design. This characterizes estimability in the notes.

**Intuition:** Estimable targets live entirely in visible directions.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-estimability-ginverse`

---

### 578. Why do X and \(X^{\mathsf{T}}X\) have the same null space?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(v^{\mathsf{T}}X^{\mathsf{T}}Xv=\Vert Xv\Vert ^{2}\). This is zero exactly when \(Xv=0\).

**Intuition:** Squaring the design preserves its invisible directions.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-gram-null`

---

### 579. Why is \(C(X^{\mathsf{T}}X)=C(X^{\mathsf{T}})\)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They have the same null space, and their column spaces are the corresponding orthogonal complements.

**Intuition:** The Gram matrix preserves the design’s visible coefficient space.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-gram-row`

---

### 580. For \(X=\begin{bmatrix}x&x\end{bmatrix}\), what is one nonzero null vector?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

(1,−1). Increasing one coefficient and decreasing the other cancels exactly.

**Intuition:** Opposing allocations leave the same total.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-null`

---

### 581. With \(X=\begin{bmatrix}x&x\end{bmatrix}\), can the data identify \(\beta _{1}-\beta _{2}\)?

**STAT 244 · Estimability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Shifting coefficients by (t,−t) changes the difference by 2t without changing the mean.

**Intuition:** The unidentified direction is the contrast between duplicates.

</details>

Sources: [HW1 · Q5–6 · companion concept check](../courses/harvard/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-difference`

---

### 582. In \(\mu _{ij}=\alpha +\beta _{i}+\gamma _{j}\), why isn’t \(\alpha\) separately identifiable without constraints?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add c to \(\alpha\) and subtract c from every \(\beta _{i}\). Every cell mean stays the same.

**Intuition:** An arbitrary baseline can move between parameter blocks.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-shift`

---

### 583. In an observed additive two-way layout, is \(\beta _{i}-\beta _{k}\) estimable?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. At the same column j, \(\mu _{ij}-\mu _{kj}=\beta _{i}-\beta _{k}\).

**Intuition:** Compare groups while holding the other factor fixed.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-row-contrast`

---

### 584. What does an additive two-way model assume about a row effect across columns?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The difference \(\beta _{i}-\beta _{k}\) is the same at every column level.

**Intuition:** Additivity means one factor does not modify the other’s effect.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-interaction`

---

### 585. With all \(r\times c\) cells observed, how many mean dimensions does an additive two-way model have?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

r+c−1: one baseline, r−1 row contrasts, and c−1 column contrasts.

**Intuition:** Redundant baselines should be counted only once.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-two-way-dimensions`

---

### 586. Why is “all group means are equal” different from choosing a reference group?

**STAT 244 · Identifiability · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It removes allowable mean patterns. Choosing a reference only renames the same patterns.

**Intuition:** A hypothesis changes the model; a coding convention need not.

</details>

Sources: [Least-squares theory · p. 2 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-equality-shrinks`

---

### 587. Can an invertible recoding change OLS residual SSE?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The fitted-value space and orthogonal projection are unchanged.

**Intuition:** Different coefficients can produce identical fit quality.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode-sse`

---

### 588. Can individual coefficient p-values change after recoding?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A coefficient may now represent a different hypothesis, even though fitted values are unchanged.

**Intuition:** Compare the tested contrasts, not just coefficient positions.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode-coefficient-tests`

---

### 589. When is the set \(\hat{\beta}+N(X)\) a vector subspace?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When it contains zero, equivalently when \(X\hat{\beta}=0\).

**Intuition:** A shifted space is linear only if the shift stays inside it.

</details>

Sources: [HW2 · Q2 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-origin`

---

### 590. Why isn’t the line \(\beta _{1}+\beta _{2}=3\) a vector space?

**STAT 244 · Rank-deficient least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It excludes (0,0), and doubling a point changes the sum to 6.

**Intuition:** Vector spaces must contain zero and survive scaling.

</details>

Sources: [HW2 · Q2 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-zero`

---

### 591. What does \(X^{\mathsf{T}}e=0\) say about each predictor?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its dot product with the residual is zero.

**Intuition:** No available predictor direction remains in the residual.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-normal-equation-geometry`

---

### 592. Why can least squares have no bad local minima?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its Hessian is \(2X^{\mathsf{T}}X\), which is positive semidefinite because \(v^{\mathsf{T}}X^{\mathsf{T}}Xv=\Vert Xv\Vert ^{2}\ge 0\).

**Intuition:** The squared-error surface is convex.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-hessian-positive`

---

### 593. When is the OLS coefficient minimum unique?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When X has full column rank, making \(X^{\mathsf{T}}X\) positive definite.

**Intuition:** No flat coefficient direction means no alternate minimizer.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-unique-minimum`

---

### 594. Without an intercept, must OLS residuals average zero?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The all-ones direction may not belong to the model space.

**Intuition:** Orthogonality only applies to directions the design includes.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-no-intercept`

---

### 595. Why does \(\Vert y\Vert ^{2}=\Vert \hat{y}\Vert ^{2}+\Vert e\Vert ^{2}\) for OLS?

**STAT 244 · Least-squares geometry · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Because \(y=\hat{y}+e\) and \(\hat{y}^{\mathsf{T}}e=0\).

**Intuition:** The fitted and residual pieces form a right triangle.

</details>

Sources: [Least-squares theory · p. 9 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-uncentered-squares`

---

### 596. Why is I−P idempotent when P is?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Expand: \((I-P)^{2}=I-2P+P^{2}=I-P\).

**Intuition:** Extracting the leftover twice changes nothing.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-complement-idempotent`

---

### 597. Onto what space does the identity matrix project?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The entire observation space. Every vector stays unchanged.

**Intuition:** Keeping every direction is also a projection.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-identity-projection`

---

### 598. What does \(P=(1/n)11^{\mathsf{T}}\) do to y?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It replaces every entry with the sample mean.

**Intuition:** The constant-vector space has one direction.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-mean-projector`

---

### 599. Why does a projector’s trace equal its rank?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its eigenvalues are only 0 and 1. Summing them counts the retained directions.

**Intuition:** Trace counts the projector’s ones.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-trace-rank`

---

### 600. If \(\operatorname{tr}(H)=r\) for n observations, what is tr(I−H)?

**STAT 244 · Projection matrices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

n−r.

**Intuition:** Every observation-space direction is fitted or residual.

</details>

Sources: [HW2 · Q5(a–c) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-residual-trace`

---

### 601. Can adding columns to an OLS model increase its minimized training SSE?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The old fit is still available in the larger space.

**Intuition:** More options cannot worsen the best achievable training fit.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-adding-fit`

---

### 602. What is \(\operatorname{rank}(P_{1}-P_{0})\) for nested spaces of dimensions \(r_{0}\) and \(r_{1}\)?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r_{1}-r_{0}\).

**Intuition:** The difference projector keeps only newly added directions.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-extra-dimensions`

---

### 603. What are the three orthogonal pieces in a nested-model decomposition?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Small-model fit, extra large-model fit, and large-model residual. Their sum is y.

**Intuition:** Separate old signal, added fit, and leftover variation.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-three-pieces`

---

### 604. Do arbitrary orthogonal projectors commute?

**STAT 244 · Nested models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Nesting is one condition that makes \(P_{0}P_{1}=P_{1}P_{0}=P_{0}\).

**Intuition:** Do not move matrix factors past each other without a reason.

</details>

Sources: [HW2 · Q5(d) · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-commute-warning`

---

### 605. Under sum coding, what does the intercept represent at zero numeric predictors?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The equally weighted average of fitted group means.

**Intuition:** Zero-sum effects center the baseline across levels.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-intercept`

---

### 606. Is a sum-coded intercept necessarily the overall sample mean?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It averages group means equally, while the sample mean weights groups by their sizes.

**Intuition:** An average over groups differs from an average over observations.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-unbalanced-average`

---

### 607. If you change the reference group, do group predictions change?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, with equivalent full-rank coding and the same model. The differences are simply measured from a new baseline.

**Intuition:** Changing the origin changes coordinates, not locations.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-reference-change`

---

### 608. Intercept 10 and effects 2,−1,−1 give which group means?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12,9,9. Their equal-weight average is 10.

**Intuition:** Add each deviation to the common baseline.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-means`

---

### 609. A Helmert column has entries −1,−1,+2. How does its coefficient relate to C−average(A,B)?

**STAT 244 · Contrast coding · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

That mean contrast equals three times the coefficient.

**Intuition:** The contrast scaling sets the coefficient’s units.

</details>

Sources: [HW2 · Q3–4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-second-helmert`

---

### 610. Why can the baseline-predictor slope stay unchanged across equivalent group codings?

**STAT 244 · Reparameterization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The group-mean space is unchanged, so adjusting for it leaves the same regression problem for the numeric predictor, assuming identifiability.

**Intuition:** Recoding a nuisance factor does not add or remove adjustment directions.

</details>

Sources: [HW2 · Q1 and Q4 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-baseline-slope`

---

### 611. What is the Gaussian maximum-likelihood estimate of \(\sigma ^{2}\) when \(\operatorname{SSE}>0\)?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\operatorname{SSE}/n\), rather than \(\operatorname{SSE}/(n-r)\).

**Intuition:** Maximum likelihood and unbiasedness optimize different criteria.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-mle`

---

### 612. Why is \(\operatorname{SSE}/n\) downward biased under the correct mean model?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Fitting removes noise along r model directions, leaving expected \(\operatorname{SSE}=(n-r)\sigma ^{2}\).

**Intuition:** The residual has already had some noise fitted away.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-bias`

---

### 613. If \(\operatorname{rank}(X)=n\), can \(\operatorname{SSE}/(n-\operatorname{rank}(X))\) estimate noise variance?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. There are no residual degrees of freedom, and the denominator is zero.

**Intuition:** A saturated fit leaves no independent residual noise to measure.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-no-residual-df`

---

### 614. If Gaussian \(\operatorname{SSE}=0\), is \(\hat{\sigma}^{2}=0\) an ordinary positive interior MLE?

**STAT 244 · Variance estimation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The likelihood grows as variance approaches zero, a boundary behavior.

**Intuition:** A formula at the boundary needs separate interpretation.

</details>

Sources: [HW2 · Q7; least-squares theory · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-zero-sse-boundary`

---

### 615. Does Gauss–Markov require normal errors?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The mean and equal-variance, uncorrelated-error assumptions are enough for the linear-unbiased comparison.

**Intuition:** Normality is not part of BLUE’s core argument.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue-normality`

---

### 616. Can a slightly biased estimator outperform the best linear unbiased estimator in squared error?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A reduction in variance can outweigh the squared bias. “Best linear unbiased” (BLUE) only compares variance among linear estimators with zero bias.

**Intuition:** Accepting some bias can reduce variance enough to help overall error.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue-biased`

---

### 617. Does \(\operatorname{Var}(y)=\sigma ^{2}I\) mean the errors are independent?

**STAT 244 · Gauss–Markov · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It says they have equal variances and zero pairwise covariances. Independence follows if they are jointly Gaussian, but not from this covariance statement alone.

**Intuition:** A covariance model is weaker than a full distribution model.

</details>

Sources: [HW2 · Q9 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-spherical-errors`

---

### 618. When does the generalized-inverse condition force \(G=B^{-1}\)?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When B is invertible. Multiply \(BGB=B\) by \(B^{-1}\) on both sides.

**Intuition:** Full invertibility removes the freedom.

</details>

Sources: [Linear algebra notes · pp. 4–5 · companion concept check](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ordinary-inverse`

---

### 619. Which \(\operatorname{diag}(1,t)\) is the Moore–Penrose inverse of \(\operatorname{diag}(1,0)\)?

**STAT 244 · Generalized inverses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(t=0\).

**Intuition:** The pseudoinverse avoids arbitrary action in the null direction.

</details>

Sources: [Linear algebra notes · pp. 4–5 · companion concept check](../courses/harvard/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-moore-penrose-choice`

---

### 620. How does the fitted-value projector act on C(X) and \(C(X)^{\perp}\)?

**STAT 244 · Rank deficiency · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It keeps the first and kills the second.

**Intuition:** Those two actions completely determine the projection.

</details>

Sources: [HW2 · Q10 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-projector-action`

---

### 621. If an alternative fit differs from the projection by length 3, how much extra squared error does it add?

**STAT 244 · Projection proofs · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

9, by the orthogonal squared-distance decomposition.

**Intuition:** Distance within the model adds in quadrature.

</details>

Sources: [HW2 · Q6 · companion concept check](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-minimum-squared-distance`

---

### 622. For full-rank X, when is By unbiased for \(\beta\) for every \(\beta\)?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When \(BX=I\), because \(E[By]=BX\beta\).

**Intuition:** Unbiasedness becomes a matrix identity.

</details>

Sources: [Least-squares theory · pp. 19–20 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-unbiased-constraint`

---

### 623. Why is \(AA^{\mathsf{T}}\) positive semidefinite?

**STAT 244 · Gauss–Markov proof · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For every v, \(v^{\mathsf{T}}AA^{\mathsf{T}}v=\Vert A^{\mathsf{T}}v\Vert ^{2}\ge 0\).

**Intuition:** A squared length can never reduce variance.

</details>

Sources: [Least-squares theory · pp. 19–20 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-variance-gap-psd`

---

### 624. Are GLS residuals necessarily Euclidean-orthogonal to X’s columns?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. They satisfy \(X^{\mathsf{T}}V^{-1}e=0\): weighted orthogonality.

**Intuition:** GLS changes the geometry used to measure angles and lengths.

</details>

Sources: [Least-squares theory · pp. 20–22 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-gls-orthogonality`

---

### 625. If \(\operatorname{Var}(y)=\sigma ^{2}V\), what covariance does \(V^{-\frac{1}{2}}y\) have?

**STAT 244 · Generalized least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sigma ^{2}I\).

**Intuition:** Whitening removes unequal scales and covariance in the transformed coordinates.

</details>

Sources: [Least-squares theory · pp. 20–22 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-whitening-result`

---

### 626. An average combines m independent equal-variance observations. What precision weight should it get?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Weight proportional to m, since its variance is \(\sigma ^{2}/m\).

**Intuition:** More independent measurements make an average more precise.

</details>

Sources: [Least-squares theory · p. 22 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-mean-precision`

---

### 627. Are inverse marginal variances alone enough for GLS with correlated errors?

**STAT 244 · Weighted least squares · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The full inverse covariance matters, including off-diagonal entries.

**Intuition:** Correlation changes which combinations are informative.

</details>

Sources: [Least-squares theory · p. 22 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-correlated-weights`

---

### 628. Under the Gaussian linear model, what is \(\operatorname{SSE}/\sigma ^{2}\) distributed as?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\chi ^{2}\) with \(n-\operatorname{rank}(X)\) degrees of freedom, assuming positive residual df.

**Intuition:** Residual noise lives in the unfitted directions.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-residual-chi-square`

---

### 629. Does a projector always turn squared noise length into a chi-squared variable?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The exact chi-squared result requires the appropriate Gaussian noise model.

**Intuition:** Geometry alone does not determine the noise distribution.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-non-gaussian-warning`

---

### 630. Why is \(H(I-H)=0\)?

**STAT 244 · Quadratic forms · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(H-H^{2}=0\) because H is idempotent.

**Intuition:** The fitted and residual projectors keep disjoint directions.

</details>

Sources: [Inference notes · p. 3 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-covariance-zero`

---

### 631. Why use the full model’s residual SSE in the F-test denominator?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It estimates noise after allowing all directions under consideration.

**Intuition:** Use the leftover variation as the noise benchmark.

</details>

Sources: [Inference notes · pp. 3–6 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-noise-denominator`

---

### 632. Under the null, why is an F statistic often near 1 rather than 0?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Both numerator and denominator estimate the same noise variance after dividing by their degrees of freedom.

**Intuition:** Added directions fit some noise even when no effect exists.

</details>

Sources: [Inference notes · pp. 3–6 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-close-one`

---

### 633. For \(F=5\) with 2 added directions and 20 residual df, what reference is needed for a p-value?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

F with degrees of freedom (2,20), under the Gaussian null assumptions.

**Intuition:** A statistic’s value is not itself its tail probability.

</details>

Sources: [Inference notes · p. 5 · companion calculation · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-degrees`

---

### 634. For positive SSEs in nested Gaussian models, what is the null/full maximized likelihood ratio?

**STAT 244 · Nested-model inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\((\operatorname{SSE}_{0}/\operatorname{SSE}_{1})^{-n/2}\). Larger relative improvement makes this ratio smaller.

**Intuition:** The simpler model loses likelihood when its residual cost rises.

</details>

Sources: [Inference notes · pp. 5–6 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-lrt-ratio`

---

### 635. Why can’t every coefficient restriction be tested in a rank-deficient model?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Some restrictions change along null directions while the data distribution stays the same.

**Intuition:** A hypothesis must concern observable information.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-untestable-restriction`

---

### 636. How do you encode \(\beta _{1}=\beta _{2}\) and \(\beta _{3}=2\) for \(\beta =(\beta _{0},\beta _{1},\beta _{2},\beta _{3})\)?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use rows (0,1,−1,0) and (0,0,0,1), with targets 0 and 2.

**Intuition:** Each independent row represents one constraint.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-two-restrictions`

---

### 637. In the constrained least-squares block system, what does the lower block enforce?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\Lambda \beta =c\).

**Intuition:** One block optimizes; the other keeps the solution feasible.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-kkt-lower`

---

### 638. What is the stationarity equation for constrained least squares?

**STAT 244 · General linear hypotheses · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(X^{\mathsf{T}}X\beta +\Lambda ^{\mathsf{T}}\xi =X^{\mathsf{T}}y\), with multiplier scaling absorbed in \(\xi\).

**Intuition:** The constraint supplies the force balancing the loss gradient.

</details>

Sources: [Inference notes · pp. 8–10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-kkt-upper`

---

### 639. Why use a t distribution instead of a standard normal when \(\sigma\) is estimated?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The estimated noise scale introduces extra uncertainty. Under Gaussian errors, the standardized coefficient uses t with n−p df.

**Intuition:** Estimating the denominator makes the tails heavier.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-why-t`

---

### 640. A coefficient is 1.2 with SE 0.6. What t statistic tests zero?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1.2}{0.6}=2\).

**Intuition:** A t statistic measures distance from the null in SE units.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-t-two`

---

### 641. How do you build a pointwise coefficient confidence interval?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Estimate \(\pm\) t critical value \(\times\) estimated SE, under the Gaussian linear-model conditions.

**Intuition:** Uncertainty is a margin around the estimate.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-interval-form`

---

### 642. Does a frequentist 95% interval assign 95% posterior probability to its parameter range?

**STAT 244 · Coefficient inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. That interpretation needs a posterior distribution and its assumptions.

**Intuition:** Coverage and posterior probability are different statements.

</details>

Sources: [Inference notes · p. 10 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-confidence-not-posterior`

---

### 643. Can unlimited data eliminate uncertainty in a new noisy response?

**STAT 244 · Prediction intervals · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can eliminate mean-estimation uncertainty in suitable settings, but not the new response’s irreducible noise.

**Intuition:** Learning the average perfectly does not predict every outcome perfectly.

</details>

Sources: [Inference notes · pp. 12–13 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-infinite-data-noise`

---

### 644. If ten independent intervals each cover with probability 0.95, what is their joint coverage?

**STAT 244 · Simultaneous inference · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(0.95^{10}\approx 0.60\).

**Intuition:** Many individually reliable statements can be jointly unreliable.

</details>

Sources: [Inference notes · pp. 11–12 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-independent-intervals`

---

### 645. If \(E[Y]=\mu\), what is \(E[AY+b]\)?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(A\mu +b\).

**Intuition:** Expectation follows affine transformations directly.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-mean-transform`

---

### 646. Does \(\operatorname{Var}(AY)=A\Sigma A^{\mathsf{T}}\) require Gaussian Y?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Finite second moments suffice.

**Intuition:** Moment identities are more general than Gaussian distribution results.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-no-gaussian-required`

---

### 647. When does zero covariance imply independence for two random vectors?

**STAT 244 · Random vectors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When they are jointly Gaussian.

**Intuition:** Separate Gaussian marginals alone are not enough.

</details>

Sources: [Inference notes · p. 1 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-joint-normal-key`

---

### 648. Can \(x_{3}\approx x_{1}+x_{2}\) cause multicollinearity without an almost-perfect pairwise correlation?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. The near-dependence uses three columns together.

**Intuition:** Look for weak directions in the entire design.

</details>

Sources: [Inference notes · pp. 14–15 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-three-variable-dependence`

---

### 649. Why can stable training predictions become unstable off the observed predictor relationship?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The cancellation between uncertain coefficients may no longer occur at the new predictor values.

**Intuition:** A weakly identified direction can become visible during extrapolation.

</details>

Sources: [Inference notes · pp. 14–15 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-extrapolation-risk`

---

### 650. If a predictor has \(R^{2}=0\) against the others, what is its VIF?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1. There is no variance inflation from linear overlap under this comparison.

**Intuition:** No overlap means no inflation beyond the baseline.

</details>

Sources: [Inference notes · pp. 15–18 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-zero-rsquared`

---

### 651. Does a large VIF automatically mean you should delete a predictor?

**STAT 244 · Multicollinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The scientific target and model assumptions matter too.

**Intuition:** A warning about uncertainty is not a complete modeling decision.

</details>

Sources: [Inference notes · pp. 15–18 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-not-delete`

---

### 652. What does a zero Gram–Schmidt residual mean?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The new column is already in the earlier span.

**Intuition:** The column adds no independent information.

</details>

Sources: [Inference notes · pp. 20–23 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-zero-new-direction`

---

### 653. How do you turn a nonzero orthogonal residual u into a unit vector?

**STAT 244 · Orthogonalization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Divide by \(\Vert u\Vert\).

**Intuition:** Orthogonal means perpendicular; orthonormal also means unit length.

</details>

Sources: [Inference notes · pp. 20–23 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-normalize-direction`

---

### 654. Why might discarding small principal components help even though it loses information?

**STAT 244 · Principal components regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can reduce variance by removing poorly determined directions, at the cost of bias.

**Intuition:** A smaller model trades flexibility for stability.

</details>

Sources: [Inference notes · pp. 23–24 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-tradeoff`

---

### 655. Does using y to build PLS components guarantee better predictions than PCR?

**STAT 244 · Latent predictor methods · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Response-informed directions can also fit noise. Compare honest held-out performance.

**Intuition:** Supervision is useful information, not a performance guarantee.

</details>

Sources: [Inference notes · pp. 24–25 · companion concept check](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls-not-universal`

---

### 656. What connects a data question to a useful decision?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Collect and clean relevant data, explore patterns, fit and evaluate models, then communicate an actionable result.

**Intuition:** The model is one step in the project.

</details>

Sources: [Lecture 1 · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=15)

Card ID: `am209a-cycle`

---

### 657. Why define the prediction question before choosing features?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It determines the target, prediction time, and information actually available when making the decision.

**Intuition:** A useful prediction must be possible at the moment it is needed.

</details>

Sources: [Lecture 1 · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=16)

Card ID: `am209a-question-first`

---

### 658. Why can .isna() miss missing observations?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It checks cells in existing rows. An entirely absent row has no cells to inspect.

**Intuition:** Compare observed records with the records that should exist.

</details>

Sources: [Lecture 1 · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=20)

Card ID: `am209a-absent-rows`

---

### 659. How would you find missing hours in an hourly dataset?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Construct the expected timestamp sequence and compare it with observed timestamps.

**Intuition:** Completeness includes missing records, not just blank values.

</details>

Sources: [Lecture 1 · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=23)

Card ID: `am209a-hourly-audit`

---

### 660. Why put data cleaning into a repeatable function?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It applies the same transformations consistently and makes decisions inspectable and reproducible.

**Intuition:** A pipeline records how raw data became analysis data.

</details>

Sources: [Lecture 1 · PDF p. 27](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=27)

Card ID: `am209a-cleaning-pipeline`

---

### 661. Why convert normalized temperature back to degrees for interpretation?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A slope per degree is easier to interpret than a slope per arbitrary normalized unit.

**Intuition:** Units give coefficients practical meaning.

</details>

Sources: [Lecture 1 · PDF p. 28](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=28)

Card ID: `am209a-units`

---

### 662. Why inspect rider groups separately instead of only their overall average?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A dominant group can hide another group's distinct pattern.

**Intuition:** An average can conceal different behaviors.

</details>

Sources: [Lecture 1 · PDF p. 37](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=37)

Card ID: `am209a-subgroups`

---

### 663. Why compare similar hours when studying temperature and rentals?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Time of day affects demand and may differ across temperature ranges, confounding a simple comparison.

**Intuition:** A pattern can reflect another variable changing alongside the one you study.

</details>

Sources: [Lecture 1 · PDF p. 40](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=40)

Card ID: `am209a-compare-like`

---

### 664. Why train on an earlier year and evaluate on a later year for forecasting?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It mimics predicting the future using only past information.

**Intuition:** The evaluation split should resemble deployment.

</details>

Sources: [Lecture 1 · PDF p. 43](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=43)

Card ID: `am209a-future-split`

---

### 665. What does negative test \(R^{2}\) reveal?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The predictions have larger squared error than the test-set mean benchmark.

**Intuition:** A model can fit training data and still fail on new data.

</details>

Sources: [Lecture 1 · PDF p. 45](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=45)

Card ID: `am209a-negative-score`

---

### 666. What does a curved pattern in residuals suggest?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The model may be missing a nonlinear relationship or another systematic effect.

**Intuition:** Errors with structure are clues to missing structure in the model.

</details>

Sources: [Lecture 1 · PDF p. 48](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=48)

Card ID: `am209a-wrong-shape`

---

### 667. Why can a degree-12 curve fit training data better but predict worse?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its flexibility can fit accidental noise instead of a stable pattern.

**Intuition:** Better memorization can mean worse generalization.

</details>

Sources: [Lecture 1 · PDF p. 54](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=54)

Card ID: `am209a-flexibility`

---

### 668. How can regularization help an overly flexible model?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It discourages large coefficients while still fitting the data.

**Intuition:** Keep useful flexibility while limiting extreme fits.

</details>

Sources: [Lecture 1 · PDF p. 56](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=56)

Card ID: `am209a-shrinkage-intro`

---

### 669. Why might treating hour as a category beat one numeric hour coefficient?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A single slope imposes a constant hourly change. Categories can represent separate morning and evening peaks.

**Intuition:** Numeric storage does not require a straight-line effect.

</details>

Sources: [Lecture 1 · PDF p. 59](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=59)

Card ID: `am209a-hour-categories`

---

### 670. How does predicting rental count differ from predicting busy versus quiet?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Count prediction is regression; busy-versus-quiet prediction is classification.

**Intuition:** The response type determines the task.

</details>

Sources: [Lecture 1 · PDF p. 63](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=63)

Card ID: `am209a-regression-classification`

---

### 671. Why not use an unconstrained straight line as a probability?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can predict below 0 or above 1. Logistic regression maps a linear score into valid probabilities.

**Intuition:** A prediction must respect the target's range.

</details>

Sources: [Lecture 1 · PDF p. 64](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=64)

Card ID: `am209a-logistic-preview`

---

### 672. How does a decision tree make a prediction?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It follows a sequence of feature-based splits to a terminal prediction.

**Intuition:** Several simple rules can represent a nonlinear pattern.

</details>

Sources: [Lecture 1 · PDF p. 68](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=68)

Card ID: `am209a-tree-preview`

---

### 673. Why is a 100% success rate from one observation weak evidence?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It has enormous sampling uncertainty; one additional failure changes the estimate dramatically.

**Intuition:** Extreme percentages can come from tiny samples.

</details>

Sources: [Lecture 1 · PDF p. 69](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=69)

Card ID: `am209a-small-samples`

---

### 674. How does the estimate \((r+\alpha )/(n+\alpha +\beta )\) stabilize a small-sample proportion?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It combines observed successes and failures with prior pseudo-counts.

**Intuition:** The prior has more influence when the data are scarce.

</details>

Sources: [Lecture 1 · PDF p. 70](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=70)

Card ID: `am209a-pseudo-counts`

---

### 675. Why can the most accurate model still be unhelpful operationally?

**AM 209a · Data science workflow · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its errors or outputs may not match the decision's costs and needs.

**Intuition:** Evaluate the consequence of being wrong.

</details>

Sources: [Lecture 1 · PDF p. 77](../courses/harvard/am209a/lecnotes/lecture-01.pdf#page=77)

Card ID: `am209a-decision-cost`

---

### 676. What three pieces make a recorded value interpretable?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The entity observed, the variable measured, and its value with a meaningful scale.

**Intuition:** A number without context is ambiguous.

</details>

Sources: [Lecture 2 · PDF p. 4](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=4)

Card ID: `am209a-datum`

---

### 677. How do primary and secondary data differ?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Primary data are collected for the study; secondary data already exist from another collection process.

**Intuition:** Origin affects what the data can support.

</details>

Sources: [Lecture 2 · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=5)

Card ID: `am209a-primary-secondary`

---

### 678. How does an API differ from scraping a web page?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An API provides a programmatic data interface; scraping extracts information from page content.

**Intuition:** Prefer a structured interface when one is available.

</details>

Sources: [Lecture 2 · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=6)

Card ID: `am209a-api-scraping`

---

### 679. Why keep API keys out of shared notebooks?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They can grant access or allow requests billed to the owner.

**Intuition:** A credential is not ordinary example code.

</details>

Sources: [Lecture 2 · PDF p. 7](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=7)

Card ID: `am209a-api-key`

---

### 680. What does an API rate limit constrain?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How frequently requests can be made within a specified interval.

**Intuition:** A working loop can still exceed the service's limits.

</details>

Sources: [Lecture 2 · PDF p. 7](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=7)

Card ID: `am209a-rate-limit`

---

### 681. Does public visibility automatically grant permission to republish data?

**AM 209a · Responsible collection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Visibility and permission to reuse are separate questions; check the applicable license and terms.

**Intuition:** Accessible does not mean unrestricted.

</details>

Sources: [Lecture 2 · PDF p. 9](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=9)

Card ID: `am209a-public-reuse`

---

### 682. Does robots.txt grant a reuse license?

**AM 209a · Responsible collection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It communicates crawler preferences rather than licensing the content.

**Intuition:** Different documents answer different permission questions.

</details>

Sources: [Lecture 2 · PDF p. 10](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=10)

Card ID: `am209a-robots`

---

### 683. How can joining two anonymous datasets reveal identities?

**AM 209a · Responsible collection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Shared attributes can become a distinctive combination that links records to a person.

**Intuition:** Removing names alone may not remove identifiability.

</details>

Sources: [Lecture 2 · PDF p. 11](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=11)

Card ID: `am209a-reidentify`

---

### 684. Why cache collected data during analysis?

**AM 209a · Responsible collection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It avoids repeated downloads, reduces server load, and preserves a reproducible input snapshot.

**Intuition:** Rerunning analysis should not require refetching unchanged data.

</details>

Sources: [Lecture 2 · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=12)

Card ID: `am209a-cache`

---

### 685. What makes a value atomic in a data table?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is treated as one indivisible value for the analysis, such as a number, Boolean, or label.

**Intuition:** Atomicity depends on how you use the value.

</details>

Sources: [Lecture 2 · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=15)

Card ID: `am209a-atomic`

---

### 686. How does a dictionary differ from a single scalar value?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It contains named components that may represent several variables.

**Intuition:** Nested data often need restructuring before tabular analysis.

</details>

Sources: [Lecture 2 · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=16)

Card ID: `am209a-compound`

---

### 687. How do discrete and continuous quantitative variables differ?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Discrete variables have separated possible values; continuous variables can vary throughout an interval in principle.

**Intuition:** Counts and measurements need different interpretations.

</details>

Sources: [Lecture 2 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=17)

Card ID: `am209a-discrete-continuous`

---

### 688. What makes a categorical variable nominal?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its categories have no meaningful intrinsic order, such as blood type.

**Intuition:** A numeric code does not create an order.

</details>

Sources: [Lecture 2 · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=18)

Card ID: `am209a-nominal`

---

### 689. What makes a categorical variable ordinal?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its categories have a meaningful order, but the gaps need not be equal.

**Intuition:** Ranking does not establish numerical distance.

</details>

Sources: [Lecture 2 · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=18)

Card ID: `am209a-ordinal`

---

### 690. Which summaries make sense for a nominal variable?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Counts, proportions, and the mode.

**Intuition:** Averaging arbitrary category codes has no stable meaning.

</details>

Sources: [Lecture 2 · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=20)

Card ID: `am209a-nominal-summary`

---

### 691. Why be cautious about averaging ordinal scores?

**AM 209a · Variable types · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A mean treats numerical gaps as meaningful and equal, which the category order alone does not justify.

**Intuition:** An encoding can silently add assumptions.

</details>

Sources: [Lecture 2 · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=20)

Card ID: `am209a-ordinal-mean`

---

### 692. How do you calculate a sample mean?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add all n values and divide by n.

**Intuition:** Every observation contributes equally to the sum.

</details>

Sources: [Lecture 2 · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=21)

Card ID: `am209a-mean`

---

### 693. How do you calculate the median of an even number of numeric values?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Sort the values and average the two middle ones.

**Intuition:** The median locates the center by position.

</details>

Sources: [Lecture 2 · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=21)

Card ID: `am209a-median`

---

### 694. Which moves more when one value becomes extremely large: mean or median?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Usually the mean; the median depends on order rather than the extreme value's distance.

**Intuition:** The mean is sensitive to magnitude.

</details>

Sources: [Lecture 2 · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=22)

Card ID: `am209a-outlier-mean`

---

### 695. Which tail names a right-skewed distribution?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The long right tail, even if most observations are on the left.

**Intuition:** Skew is named for the tail, not the crowded side.

</details>

Sources: [Lecture 2 · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=22)

Card ID: `am209a-skew-tail`

---

### 696. What is the range of 2, 5, 7, and 12?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(12-2=10\).

**Intuition:** The range uses only the two extremes.

</details>

Sources: [Lecture 2 · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=23)

Card ID: `am209a-range`

---

### 697. What is the usual unbiased sample variance for IID data?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(s^2=\frac{\sum_i(x_i-\bar x)^2}{n-1}\), for \(n>1\).

**Intuition:** Estimating the mean uses one degree of freedom.

</details>

Sources: [Lecture 2 · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=24)

Card ID: `am209a-02-variance`

---

### 698. Why is standard deviation easier to interpret than variance?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It has the original measurement units; variance has squared units.

**Intuition:** Taking a square root restores the measurement scale.

</details>

Sources: [Lecture 2 · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=24)

Card ID: `am209a-sd-units`

---

### 699. What does a variable's distribution describe?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Which values occur and how frequently they occur.

**Intuition:** A center alone leaves out the shape and spread.

</details>

Sources: [Lecture 2 · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=25)

Card ID: `am209a-distribution`

---

### 700. Why is skewness meaningless for unordered categories?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their horizontal order can be rearranged arbitrarily.

**Intuition:** A tail requires a meaningful direction.

</details>

Sources: [Lecture 2 · PDF p. 26](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=26)

Card ID: `am209a-nominal-skew`

---

### 701. How do CSV and JSON typically differ structurally?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

CSV is a rectangular table; JSON can represent nested records with differing fields.

**Intuition:** A collection of records is not always analysis-ready rows.

</details>

Sources: [Lecture 2 · PDF p. 28](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=28)

Card ID: `am209a-storage`

---

### 702. What should one row represent in a tidy table?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One observation of a clearly defined unit.

**Intuition:** Decide what is being observed before counting rows.

</details>

Sources: [Lecture 2 · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=29)

Card ID: `am209a-row-unit`

---

### 703. What should one column represent in a tidy table?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One variable measured consistently across observations.

**Intuition:** Mixing meanings in one column makes analysis ambiguous.

</details>

Sources: [Lecture 2 · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=29)

Card ID: `am209a-column-variable`

---

### 704. Can cleaning repair a dataset that lacks the information needed for the question?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Better formatting cannot create missing study design or relevant measurements.

**Intuition:** Sometimes the right next step is different data.

</details>

Sources: [Lecture 2 · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=31)

Card ID: `am209a-unanswerable`

---

### 705. Why turn date-valued column headers into a date column?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Dates are values of a variable. Long form stores them as values and can append new observations consistently.

**Intuition:** Headers should name variables, not enumerate their possible values.

</details>

Sources: [Lecture 2 · PDF p. 34](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=34)

Card ID: `am209a-long-form`

---

### 706. Why split a cell containing both a measurement and a unit?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are separate pieces of information needed for consistent interpretation and conversion.

**Intuition:** One cell should not hide several variables.

</details>

Sources: [Lecture 2 · PDF p. 35](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=35)

Card ID: `am209a-split-cell`

---

### 707. Why separate person records from repeated event records?

**AM 209a · Structured data · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They represent different observation units; mixing them duplicates person attributes and can distort counts.

**Intuition:** One kind of record per table clarifies what a row means.

</details>

Sources: [Lecture 2 · PDF p. 36](../courses/harvard/am209a/lecnotes/lecture-02.pdf#page=36)

Card ID: `am209a-mixed-units`

---

### 708. How does a sample differ from a population?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The population is the full target group; the sample contains the observations actually collected.

**Intuition:** The sample is evidence about a larger target, not automatically its mirror.

</details>

Sources: [Lecture 3 · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=6)

Card ID: `am209a-population-sample`

---

### 709. What is selection bias?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The selection process systematically favors some relevant kinds of observations over others.

**Intuition:** More data from a biased process can preserve the bias.

</details>

Sources: [Lecture 3 · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=6)

Card ID: `am209a-selection-bias`

---

### 710. How can nonresponse distort a survey?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

People who respond may differ systematically from those who do not.

**Intuition:** The missing voices may be relevant to the answer.

</details>

Sources: [Lecture 3 · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=6)

Card ID: `am209a-nonresponse`

---

### 711. Why is a sample mean uncertain even when calculated exactly?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A different sample would generally give a different mean.

**Intuition:** Computational precision does not remove sampling variation.

</details>

Sources: [Lecture 3 · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=8)

Card ID: `am209a-sample-uncertainty`

---

### 712. What is the median of 17, 19, 21, 22, 23, 23, 23, 38?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

22.5, the average of 22 and 23.

**Intuition:** Use the middle positions after sorting.

</details>

Sources: [Lecture 3 · PDF p. 9](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=9)

Card ID: `am209a-median-example`

---

### 713. Why does variance react strongly to outliers?

**AM 209a · Descriptive summaries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It squares deviations, giving large distances disproportionately large contributions.

**Intuition:** Twice the deviation produces four times the squared contribution.

</details>

Sources: [Lecture 3 · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=15)

Card ID: `am209a-variance-outlier`

---

### 714. What does Pearson correlation measure?

**AM 209a · Association · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The strength and direction of a linear relationship between two varying quantitative variables.

**Intuition:** It summarizes linear association, not every kind of dependence.

</details>

Sources: [Lecture 3 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=17)

Card ID: `am209a-correlation`

---

### 715. What values can Pearson correlation take?

**AM 209a · Association · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

From −1 to 1, provided both variables have nonzero variance.

**Intuition:** The sign gives direction; magnitude gives linear strength.

</details>

Sources: [Lecture 3 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=17)

Card ID: `am209a-correlation-range`

---

### 716. Does converting meters to centimeters change Pearson correlation?

**AM 209a · Association · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Positive linear rescaling leaves it unchanged.

**Intuition:** Standardization removes measurement units.

</details>

Sources: [Lecture 3 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=17)

Card ID: `am209a-correlation-units`

---

### 717. Does an observed correlation establish a causal effect?

**AM 209a · Association · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Confounding, selection, or other mechanisms can produce association.

**Intuition:** A predictive relationship is not automatically an intervention effect.

</details>

Sources: [Lecture 3 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=17)

Card ID: `am209a-causality`

---

### 718. Does correlation near zero prove no relationship?

**AM 209a · Association · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A strong curved or symmetric nonlinear relationship can have zero linear correlation.

**Intuition:** Always look beyond a single number.

</details>

Sources: [Lecture 3 · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=18)

Card ID: `am209a-zero-correlation`

---

### 719. What lesson does Anscombe's quartet teach?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Datasets can share common summary statistics while having very different shapes and outliers.

**Intuition:** Plot the data before trusting summaries alone.

</details>

Sources: [Lecture 3 · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=20)

Card ID: `am209a-anscombe`

---

### 720. What is exploratory data analysis for?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Finding patterns, problems, and useful questions through summaries and visual inspection.

**Intuition:** Exploration helps decide what to model and what to check.

</details>

Sources: [Lecture 3 · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=23)

Card ID: `am209a-eda-purpose`

---

### 721. What should guide the choice of a chart?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The variable types and whether you want to show distribution, relationship, composition, or comparison.

**Intuition:** Choose the display to answer a question.

</details>

Sources: [Lecture 3 · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=24)

Card ID: `am209a-choose-plot`

---

### 722. What does a histogram show?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How numerical observations are distributed across intervals.

**Intuition:** Bins group nearby values to reveal distribution shape.

</details>

Sources: [Lecture 3 · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=25)

Card ID: `am209a-histogram`

---

### 723. Why examine more than one histogram bin width?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Bin choices can hide or exaggerate apparent peaks and gaps.

**Intuition:** A pattern should not depend entirely on one arbitrary setting.

</details>

Sources: [Lecture 3 · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=25)

Card ID: `am209a-bins`

---

### 724. When is a bar chart more appropriate than a histogram?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When comparing categories rather than intervals on a numeric scale.

**Intuition:** Categories and numeric bins represent different structures.

</details>

Sources: [Lecture 3 · PDF p. 26](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=26)

Card ID: `am209a-bar-histogram`

---

### 725. Why are bars often easier to compare than pie slices?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Aligned lengths are easier to compare accurately than angles or areas.

**Intuition:** Use an encoding that makes the comparison easy.

</details>

Sources: [Lecture 3 · PDF p. 28](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=28)

Card ID: `am209a-pie-bars`

---

### 726. Which plot is a natural starting point for two quantitative variables?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A scatter plot with one variable on each axis.

**Intuition:** Each point preserves an observation's paired values.

</details>

Sources: [Lecture 3 · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=29)

Card ID: `am209a-scatter`

---

### 727. What does a stacked area chart emphasize?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How a total and its subgroup composition change over a continuous axis such as time.

**Intuition:** Middle layers lack a common baseline, making precise comparisons harder.

</details>

Sources: [Lecture 3 · PDF p. 33](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=33)

Card ID: `am209a-stacked-area`

---

### 728. Why overlay or align distributions from different groups?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

To compare their centers, spread, and shapes.

**Intuition:** Similar averages can hide different distributions.

</details>

Sources: [Lecture 3 · PDF p. 34](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=34)

Card ID: `am209a-group-distributions`

---

### 729. What does the box in a standard boxplot represent?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The middle 50% of observations, from the first to third quartile, with a median line.

**Intuition:** The box summarizes spread around the center.

</details>

Sources: [Lecture 3 · PDF p. 35](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=35)

Card ID: `am209a-boxplot`

---

### 730. Does a point beyond a boxplot whisker automatically mean bad data?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It is unusual under the plotting rule and deserves investigation.

**Intuition:** A flag is not proof of a recording error.

</details>

Sources: [Lecture 3 · PDF p. 35](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=35)

Card ID: `am209a-box-outlier`

---

### 731. What extra information can a violin plot show compared with a boxplot?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An estimated distribution shape, including possible multiple peaks.

**Intuition:** Its shape also depends on density-smoothing choices.

</details>

Sources: [Lecture 3 · PDF p. 36](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=36)

Card ID: `am209a-violin`

---

### 732. How can a scatter plot include a third categorical variable?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use color, marker shape, or separate panels for categories.

**Intuition:** Add an encoding only when it helps interpretation.

</details>

Sources: [Lecture 3 · PDF p. 38](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=38)

Card ID: `am209a-extra-dimensions`

---

### 733. Why can plotting every feature at once become unhelpful?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Overlapping marks and competing encodings can obscure the relationships you want to see.

**Intuition:** More displayed information can mean less usable information.

</details>

Sources: [Lecture 3 · PDF p. 39](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=39)

Card ID: `am209a-too-many-dimensions`

---

### 734. What does coloring a pair plot by species help reveal?

**AM 209a · Sampling and EDA · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Whether apparent relationships differ across species or arise from mixing groups.

**Intuition:** Group structure can explain an overall pattern.

</details>

Sources: [Lecture 3 · PDF p. 43](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=43)

Card ID: `am209a-pairplot`

---

### 735. What does graphical integrity require?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Representing magnitudes, scales, and context honestly rather than exaggerating a preferred message.

**Intuition:** The chart should preserve the meaning of the data.

</details>

Sources: [Lecture 3 · PDF p. 50](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=50)

Card ID: `am209a-integrity`

---

### 736. Why remove decorative elements that do not convey information?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They compete with the evidence for attention.

**Intuition:** A reader should see the pattern before the decoration.

</details>

Sources: [Lecture 3 · PDF p. 52](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=52)

Card ID: `am209a-chart-junk`

---

### 737. When is a diverging color scale useful?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When values extend on both sides of a meaningful center, such as positive and negative deviations from zero.

**Intuition:** The midpoint anchors two directions of change.

</details>

Sources: [Lecture 3 · PDF p. 56](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=56)

Card ID: `am209a-diverging-color`

---

### 738. What kind of colors suit unordered categories?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Distinct colors without implying a numerical ranking.

**Intuition:** Different categories need distinction, not an artificial gradient.

</details>

Sources: [Lecture 3 · PDF p. 57](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=57)

Card ID: `am209a-category-color`

---

### 739. What kind of color scale suits ordered values?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A perceptually ordered scale, often varying lightness.

**Intuition:** The visual order should match the data order.

</details>

Sources: [Lecture 3 · PDF p. 58](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=58)

Card ID: `am209a-ordered-color`

---

### 740. Why avoid relying only on red-versus-green differences?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Some readers cannot reliably distinguish them. Add labels, shapes, or other cues.

**Intuition:** Color should reinforce meaning rather than be its only carrier.

</details>

Sources: [Lecture 3 · PDF p. 60](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=60)

Card ID: `am209a-accessible-color`

---

### 741. Why adapt a visualization to its audience?

**AM 209a · Visualization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their knowledge and decision needs determine which labels, context, and detail are useful.

**Intuition:** A technically correct chart still needs to communicate.

</details>

Sources: [Lecture 3 · PDF p. 61](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=61)

Card ID: `am209a-audience`

---

### 742. In a model predicting house prices from size and location, which quantity is y?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The house price: the outcome you want to predict. It is also called the response or target; size and location are predictors.

**Intuition:** The target determines what counts as a correct prediction.

</details>

Sources: [Lecture 4 · Part A · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=8)

Card ID: `am209a-response`

---

### 743. What are predictors or features?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The input variables used to predict the response.

**Intuition:** A useful feature must be available when the prediction is made.

</details>

Sources: [Lecture 4 · Part A · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=8)

Card ID: `am209a-predictors`

---

### 744. What is the shape of a design matrix with n observations and p input features?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

n rows by p columns, before adding any explicit intercept column.

**Intuition:** Rows are cases; columns are features.

</details>

Sources: [Lecture 4 · Part A · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=13)

Card ID: `am209a-design-shape`

---

### 745. Why keep a single feature as an \(n\times 1\) matrix for model fitting?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The estimator expects a collection of rows and feature columns, even when there is only one feature.

**Intuition:** One feature is still a feature axis.

</details>

Sources: [Lecture 4 · Part A · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=13)

Card ID: `am209a-single-feature`

---

### 746. How do df['x'] and df[['x']] differ?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For a unique column name, the first returns a Series; the second returns a one-column DataFrame.

**Intuition:** Double brackets preserve a two-dimensional feature table.

</details>

Sources: [Lecture 4 · Part A · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=16)

Card ID: `am209a-pandas-shape`

---

### 747. What do f(X) and \(\varepsilon\) represent in \(y=f(X)+\varepsilon\)?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

f(X) is the underlying systematic relationship; \(\varepsilon\) is the remaining random variation.

**Intuition:** A model estimates signal from noisy observations.

</details>

Sources: [Lecture 4 · Part A · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=18)

Card ID: `am209a-signal-noise`

---

### 748. How do inference and prediction emphasize different goals?

**AM 209a · Regression foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Inference emphasizes understanding relationships; prediction emphasizes accuracy on new observations.

**Intuition:** The goal affects how you judge a model.

</details>

Sources: [Lecture 4 · Part A · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=19)

Card ID: `am209a-inference-prediction`

---

### 749. What does 1-NN predict at a unique training input?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its own observed response, assuming that observation is included among candidates.

**Intuition:** Perfect training fit can simply mean memorization.

</details>

Sources: [Lecture 4 · Part A · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=31)

Card ID: `am209a-one-neighbor`

---

### 750. Why does k-nearest-neighbors keep the training observations for prediction?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It predicts from nearby stored examples instead of compressing the relationship into a fixed-size coefficient formula. This is why it is called nonparametric; it still has choices such as the number of neighbors.

**Intuition:** Nonparametric does not mean assumption-free.

</details>

Sources: [Lecture 4 · Part A · PDF p. 36](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=36)

Card ID: `am209a-nonparametric`

---

### 751. How does kNN regression predict at a new input?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Find its k nearest training inputs and average their response values.

**Intuition:** Nearby examples supply a local estimate.

</details>

Sources: [Lecture 4 · Part A · PDF p. 37](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=37)

Card ID: `am209a-knn-rule`

---

### 752. If the three nearest responses are 4, 7, and 10, what does unweighted 3-NN predict?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

7.

**Intuition:** Regression averages responses rather than taking a category vote.

</details>

Sources: [Lecture 4 · Part A · PDF p. 37](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=37)

Card ID: `am209a-knn-example`

---

### 753. Why is k a hyperparameter?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is chosen to configure the learning procedure rather than fitted as a regression coefficient.

**Intuition:** Tune the neighborhood size using held-out performance.

</details>

Sources: [Lecture 4 · Part A · PDF p. 38](../courses/harvard/am209a/lecnotes/lecture-04a.pdf#page=38)

Card ID: `am209a-k-hyperparameter`

---

### 754. What are the roles of training, validation, and test data?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Training fits the model; validation chooses settings; test data assess the finalized procedure.

**Intuition:** Do not use the final exam to choose the answers.

</details>

Sources: [Lecture 4 · Part B · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=8)

Card ID: `am209a-train-validation-test`

---

### 755. What is a residual when \(y=10\) and \(\hat{y}=7\)?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(y-\hat{y}=3\), indicating underprediction.

**Intuition:** Keep the sign when diagnosing the direction of errors.

</details>

Sources: [Lecture 4 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=13)

Card ID: `am209a-residual-sign`

---

### 756. How is mean squared error calculated?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Average the squared residuals: \(\operatorname{MSE}=\frac{1}{n}\sum_i(y_i-\hat y_i)^2\).

**Intuition:** Squaring prevents positive and negative errors from cancelling.

</details>

Sources: [Lecture 4 · Part B · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=14)

Card ID: `am209a-mse`

---

### 757. What is the MSE for residuals −2, 0, and 4?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{20}{3}\), about 6.67.

**Intuition:** Square first, then average.

</details>

Sources: [Lecture 4 · Part B · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=14)

Card ID: `am209a-mse-example`

---

### 758. Why report RMSE instead of MSE for interpretability?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

RMSE is \(\sqrt{\operatorname{MSE}}\) and has the same units as the response.

**Intuition:** The result can be compared directly with the measurement scale.

</details>

Sources: [Lecture 4 · Part B · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=15)

Card ID: `am209a-rmse`

---

### 759. How does MAE treat large errors differently from MSE?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

MAE grows linearly with error magnitude; MSE grows quadratically.

**Intuition:** MSE gives extreme misses more influence.

</details>

Sources: [Lecture 4 · Part B · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=15)

Card ID: `am209a-mae`

---

### 760. Is MSE the best loss for every application?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Choose a loss that reflects the consequences of different errors.

**Intuition:** The definition of “best” is part of the problem.

</details>

Sources: [Lecture 4 · Part B · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=15)

Card ID: `am209a-loss-choice`

---

### 761. Why be cautious when two k values have nearly equal validation MSE?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A different split may reverse their ranking.

**Intuition:** A small observed difference may be sampling variation.

</details>

Sources: [Lecture 4 · Part B · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=18)

Card ID: `am209a-split-uncertainty`

---

### 762. If responses and predictions are multiplied by 10, what happens to MSE?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is multiplied by 100.

**Intuition:** Squared errors have squared units.

</details>

Sources: [Lecture 4 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=21)

Card ID: `am209a-mse-rescale`

---

### 763. How is the usual \(R^{2}\) score defined?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1-\frac{\sum_i(y_i-\hat y_i)^2}{\sum_i(y_i-\bar y)^2}\), when the denominator is positive.

**Intuition:** It compares error with a mean-only benchmark on the evaluated observations.

</details>

Sources: [Lecture 4 · Part B · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=24)

Card ID: `am209a-r2-formula`

---

### 764. What does \(R^{2}=0\) mean?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The model matches the squared error of the evaluated data's mean benchmark.

**Intuition:** Zero improvement is not necessarily zero error.

</details>

Sources: [Lecture 4 · Part B · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=25)

Card ID: `am209a-r2-zero`

---

### 765. What does \(R^{2}=1\) mean on an evaluated dataset?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All its predictions match the observed responses exactly, assuming nonconstant responses.

**Intuition:** A perfect score on training data does not establish generalization.

</details>

Sources: [Lecture 4 · Part B · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=25)

Card ID: `am209a-r2-one`

---

### 766. Why isn't predicting the mean the worst possible model?

**AM 209a · Model evaluation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Other predictions can have arbitrarily larger errors and therefore negative \(R^{2}\).

**Intuition:** The mean is a reference baseline, not a lower performance bound.

</details>

Sources: [Lecture 4 · Part B · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=25)

Card ID: `am209a-baseline-not-worst`

---

### 767. What happens when k equals the entire training-set size?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Every prediction is the training response mean.

**Intuition:** The neighborhood no longer depends on the query.

</details>

Sources: [Lecture 4 · Part B · PDF p. 27](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=27)

Card ID: `am209a-all-neighbors`

---

### 768. How does increasing k usually change a kNN regression curve?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It makes the curve smoother by averaging more observations.

**Intuition:** Smoothing reduces sensitivity but can wash out local structure.

</details>

Sources: [Lecture 4 · Part B · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=29)

Card ID: `am209a-increase-k`

---

### 769. What is Euclidean distance between vectors x and z?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\sqrt{\sum_j(x_j-z_j)^2}\).

**Intuition:** Differences in every feature contribute to closeness.

</details>

Sources: [Lecture 4 · Part B · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=31)

Card ID: `am209a-euclidean`

---

### 770. What is the Euclidean distance between (0,0) and (3,4)?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

5, because \(\sqrt{9+16}=5\).

**Intuition:** Distance combines coordinate differences geometrically.

</details>

Sources: [Lecture 4 · Part B · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=31)

Card ID: `am209a-distance-example`

---

### 771. Why scale features before distance-based modeling?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A feature with large numerical units can dominate distances even when it is not more informative.

**Intuition:** Measurement units should not silently decide the neighbors.

</details>

Sources: [Lecture 4 · Part B · PDF p. 32](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=32)

Card ID: `am209a-scale-distance`

---

### 772. Why does kNN become difficult in high dimensions?

**AM 209a · Nearest neighbors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Data become sparse, so nearby observations may no longer be truly local or clearly distinguishable.

**Intuition:** A useful neighborhood needs enough data in the relevant space.

</details>

Sources: [Lecture 4 · Part B · PDF p. 32](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=32)

Card ID: `am209a-curse`

---

### 773. What is the prediction equation for simple linear regression?

**AM 209a · Linear regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\hat{y}=\hat{\beta}_{0}+\hat{\beta}_{1}x\).

**Intuition:** One intercept and one slope define the fitted line.

</details>

Sources: [Lecture 5 · Part A · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=6)

Card ID: `am209a-line`

---

### 774. What does ordinary least squares choose?

**AM 209a · Linear regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Coefficients that minimize the sum, or equivalently the mean, of squared training residuals.

**Intuition:** Training is an optimization problem.

</details>

Sources: [Lecture 5 · Part A · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=12)

Card ID: `am209a-fit`

---

### 775. If \(\hat{y}=7+0.05x\), what is the prediction at \(x=100\)?

**AM 209a · Linear regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12.

**Intuition:** Substitute the input into the fitted equation.

</details>

Sources: [Lecture 5 · Part A · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=16)

Card ID: `am209a-predict-number`

---

### 776. What does a partial derivative hold fixed?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All the other arguments while varying the chosen one.

**Intuition:** It isolates sensitivity to one coefficient.

</details>

Sources: [Lecture 5 · Part A · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=19)

Card ID: `am209a-partial`

---

### 777. For \(r=y-\beta _{0}-\beta _{1}x\), what is \(\partial r^{2}/\partial \beta _{0}\)?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

−2r.

**Intuition:** Increasing the intercept decreases the residual.

</details>

Sources: [Lecture 5 · Part A · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=22)

Card ID: `am209a-intercept-gradient`

---

### 778. For \(r=y-\beta _{0}-\beta _{1}x\), what is \(\partial r^{2}/\partial \beta _{1}\)?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

−2xr.

**Intuition:** The input scales how strongly a slope change affects the prediction.

</details>

Sources: [Lecture 5 · Part A · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=23)

Card ID: `am209a-slope-gradient`

---

### 779. Does a zero gradient always identify a minimum?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. In general it can also identify a maximum or saddle; convex least squares makes stationary points global minima.

**Intuition:** Stationarity needs the shape of the objective for interpretation.

</details>

Sources: [Lecture 5 · Part A · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=24)

Card ID: `am209a-stationary-caution`

---

### 780. How does the gradient tell an optimizer which way to change its parameters?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It collects the partial derivatives of the loss. Locally it points toward the steepest increase; a small step in the opposite direction decreases a differentiable loss when the gradient is nonzero.

**Intuition:** It collects local changes in every coefficient direction.

</details>

Sources: [Lecture 5 · Part A · PDF p. 26](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=26)

Card ID: `am209a-gradient`

---

### 781. What is the fitted simple-regression slope with an intercept?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2}\), provided x varies.

**Intuition:** The slope compares joint variation with predictor variation.

</details>

Sources: [Lecture 5 · Part A · PDF p. 30](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=30)

Card ID: `am209a-slope-formula`

---

### 782. How do you recover the fitted intercept from the slope?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\hat{\beta}_{0}=\bar{y}-\hat{\beta}_{1}\bar{x}\).

**Intuition:** The fitted line passes through the sample means.

</details>

Sources: [Lecture 5 · Part A · PDF p. 30](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=30)

Card ID: `am209a-intercept-formula`

---

### 783. Why can't simple regression identify a unique slope when all x values are equal?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There is no predictor variation; changes in slope can be offset by the intercept.

**Intuition:** The data need different x values to learn a change with x.

</details>

Sources: [Lecture 5 · Part A · PDF p. 30](../courses/harvard/am209a/lecnotes/lecture-05a.pdf#page=30)

Card ID: `am209a-constant-x`

---

### 784. What does multiple linear regression add to simple regression?

**AM 209a · Multiple regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Several predictor terms: \(\hat{y}=\hat{\beta}_{0}+\sum _{j}\hat{\beta}_{j}x_{j}\).

**Intuition:** Each coefficient describes a contribution conditional on the others.

</details>

Sources: [Lecture 5 · Part B · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=8)

Card ID: `am209a-multiple-form`

---

### 785. What does a column of ones represent in the design matrix?

**AM 209a · Multiple regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The intercept term.

**Intuition:** Multiplying a coefficient by 1 adds the same offset to every row.

</details>

Sources: [Lecture 5 · Part B · PDF p. 11](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=11)

Card ID: `am209a-ones-column`

---

### 786. With n observations, p predictors, and an explicit intercept, how many columns does X have?

**AM 209a · Multiple regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

p+1.

**Intuition:** Count the intercept among the fitted coefficients.

</details>

Sources: [Lecture 5 · Part B · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=15)

Card ID: `am209a-matrix-count`

---

### 787. What is the squared-error loss in matrix notation?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\Vert y-X\beta \Vert ^{2}=(y-X\beta )^{\mathsf{T}}(y-X\beta )\).

**Intuition:** The residual vector's squared length sums all squared errors.

</details>

Sources: [Lecture 5 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=19)

Card ID: `am209a-vector-loss`

---

### 788. Does dividing squared-error loss by n change the unregularized minimizer?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Multiplying an objective by a positive constant preserves its minimizers.

**Intuition:** The scale of the objective differs from the location of its minimum.

</details>

Sources: [Lecture 5 · Part B · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=20)

Card ID: `am209a-constant-loss-factor`

---

### 789. What is the gradient of \(\Vert y-X\beta \Vert ^{2}\) with respect to \(\beta\)?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(-2X^{\mathsf{T}}(y-X\beta )\).

**Intuition:** A stationary fit has no residual component along a design column.

</details>

Sources: [Lecture 5 · Part B · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=25)

Card ID: `am209a-matrix-gradient`

---

### 790. What equations characterize an ordinary least-squares solution?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(X^{\mathsf{T}}X\hat{\beta}=X^{\mathsf{T}}y\).

**Intuition:** The residual is orthogonal to every available predictor direction.

</details>

Sources: [Lecture 5 · Part B · PDF p. 27](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=27)

Card ID: `am209a-normal-equations`

---

### 791. When is \(\hat{\beta}=(X^{\mathsf{T}}X)^{-1}X^{\mathsf{T}}y\) valid?

**AM 209a · Least-squares derivation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When X has full column rank, so \(X^{\mathsf{T}}X\) is invertible.

**Intuition:** Writing an inverse does not guarantee it exists.

</details>

Sources: [Lecture 5 · Part B · PDF p. 27](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=27)

Card ID: `am209a-inverse-condition`

---

### 792. What does the intercept represent?

**AM 209a · Linear regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The predicted response when all numeric predictors are zero and categorical predictors are at their reference levels.

**Intuition:** Its practical meaning depends on whether that setting is realistic.

</details>

Sources: [Lecture 5 · Part B · PDF p. 34](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=34)

Card ID: `am209a-intercept`

---

### 793. In \(\hat{y}=5+3x\), what does the slope 3 mean?

**AM 209a · Linear regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The predicted response increases by 3 units for a one-unit increase in x.

**Intuition:** A coefficient connects changes on two measurement scales.

</details>

Sources: [Lecture 5 · Part B · PDF p. 34](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=34)

Card ID: `am209a-slope`

---

### 794. What does a multiple-regression slope describe without interactions?

**AM 209a · Multiple regression · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The predicted response change for a one-unit predictor increase, holding other predictors fixed.

**Intuition:** It is a conditional association, not necessarily a causal effect.

</details>

Sources: [Lecture 5 · Part B · PDF p. 35](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=35)

Card ID: `am209a-conditional-slope`

---

### 795. Why can't raw coefficient magnitudes reliably rank feature importance?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Features measured on different scales produce coefficients in different units.

**Intuition:** A small coefficient can multiply a very large input scale.

</details>

Sources: [Lecture 5 · Part B · PDF p. 36](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=36)

Card ID: `am209a-coefficient-units`

---

### 796. How do you standardize a varying feature?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract its training mean and divide by its training standard deviation.

**Intuition:** A one-unit change then represents one training standard deviation.

</details>

Sources: [Lecture 5 · Part B · PDF p. 38](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=38)

Card ID: `am209a-standardize`

---

### 797. How does min–max scaling transform a nonconstant feature?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use (x−minimum)/(maximum−minimum), with extrema learned from training data.

**Intuition:** The training range becomes 0 to 1.

</details>

Sources: [Lecture 5 · Part B · PDF p. 38](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=38)

Card ID: `am209a-minmax`

---

### 798. Does standardization make a variable normally distributed?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It changes location and scale, not the underlying shape.

**Intuition:** Zero mean and unit variance do not imply a bell curve.

</details>

Sources: [Lecture 5 · Part B · PDF p. 38](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=38)

Card ID: `am209a-scale-not-normal`

---

### 799. Why does strong collinearity make coefficient interpretation difficult?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Predictors share information, so their separate contributions are hard to distinguish and estimates can be unstable.

**Intuition:** Stable predictions can coexist with unstable coefficients.

</details>

Sources: [Lecture 5 · Part B · PDF p. 40](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=40)

Card ID: `am209a-collinear`

---

### 800. How do exact and near collinearity differ for coefficient uniqueness?

**AM 209a · Scaling and collinearity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact dependence can make OLS coefficients nonunique; near dependence can make a unique solution highly sensitive.

**Intuition:** Nonunique and unstable are related but different problems.

</details>

Sources: [Lecture 5 · Part B · PDF p. 40](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=40)

Card ID: `am209a-exact-near`

---

### 801. What does a 0/1 indicator encode?

**AM 209a · Categorical predictors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Whether an observation belongs to a specified group.

**Intuition:** A category becomes a usable design column.

</details>

Sources: [Lecture 5 · Part B · PDF p. 47](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=47)

Card ID: `am209a-dummy`

---

### 802. In \(\hat{y}=\beta _{0}+\beta _{1}D\), what is the predicted group difference?

**AM 209a · Categorical predictors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\beta _{1}\): the prediction at \(D=1\) minus the prediction at \(D=0\).

**Intuition:** The intercept is the reference-group prediction.

</details>

Sources: [Lecture 5 · Part B · PDF p. 48](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=48)

Card ID: `am209a-dummy-interpretation`

---

### 803. With an intercept, how many ordinary dummy columns represent K categories without redundancy?

**AM 209a · Categorical predictors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

K−1, with one reference category.

**Intuition:** All K indicators already sum to the intercept column.

</details>

Sources: [Lecture 5 · Part B · PDF p. 49](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=49)

Card ID: `am209a-levels`

---

### 804. Does changing the reference category change the fitted predictions?

**AM 209a · Categorical predictors · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, when it is an equivalent recoding of the same model.

**Intuition:** The coefficient interpretation changes, not the model space.

</details>

Sources: [Lecture 5 · Part B · PDF p. 50](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=50)

Card ID: `am209a-reference-change`

---

### 805. Must errors be normal to compute an OLS fit?

**AM 209a · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Normality is used for certain exact inferential results, not for minimizing squared error.

**Intuition:** Fitting a model and justifying inference require different assumptions.

</details>

Sources: [Lecture 5 · Part B · PDF p. 51](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=51)

Card ID: `am209a-normality-fitting`

---

### 806. Are model errors and fitted residuals the same thing?

**AM 209a · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Errors use the unknown true mean; residuals use an estimated mean and are generally correlated after fitting.

**Intuition:** Estimated deviations inherit constraints from the fit.

</details>

Sources: [Lecture 5 · Part B · PDF p. 51](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=51)

Card ID: `am209a-errors-residuals`

---

### 807. Why plot residuals against fitted values in multiple regression?

**AM 209a · Regression diagnostics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can reveal curvature or changing spread without choosing only one predictor axis.

**Intuition:** Residual patterns show what the fit leaves unexplained.

</details>

Sources: [Lecture 5 · Part B · PDF p. 52](../courses/harvard/am209a/lecnotes/lecture-05b.pdf#page=52)

Card ID: `am209a-residual-pattern`

---

### 808. Why might a model fit its training data closely but predict new data poorly?

**AM 209a · Model complexity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It may have learned sample-specific noise instead of a pattern that persists. This is overfitting; performance on suitable held-out data helps reveal it.

**Intuition:** The training sample is not the entire prediction problem.

</details>

Sources: [Lecture 6 · Part A · PDF p. 9](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=9)

Card ID: `am209a-overfit`

---

### 809. What does an interaction term let a regression model express?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The effect of one predictor can depend on another predictor's value.

**Intuition:** One universal slope may not describe every context.

</details>

Sources: [Lecture 6 · Part A · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=14)

Card ID: `am209a-interaction`

---

### 810. In \(f=\beta _{0}+\beta _{1}x+\beta _{2}z+\beta _{3}xz\), what is the slope with respect to x?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\beta _{1}+\beta _{3}z\).

**Intuition:** The interaction makes the x effect depend on z.

</details>

Sources: [Lecture 6 · Part A · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=14)

Card ID: `am209a-interaction-slope`

---

### 811. What do a numeric predictor and a group indicator produce without an interaction?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Group-specific intercepts with the same slope.

**Intuition:** The fitted lines are parallel.

</details>

Sources: [Lecture 6 · Part A · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=16)

Card ID: `am209a-parallel-groups`

---

### 812. How does adding xD change the group lines when D is 0 or 1?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Their slopes can differ: \(\beta _{1}\) for \(D=0\) and \(\beta _{1}+\beta _{3}\) for \(D=1\).

**Intuition:** The interaction coefficient is the slope difference.

</details>

Sources: [Lecture 6 · Part A · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=17)

Card ID: `am209a-group-slopes`

---

### 813. If \(\beta _{1}=2\) and \(\beta _{3}=-0.5\), what is the x slope for \(D=1\)?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1.5.

**Intuition:** Add the interaction adjustment to the baseline slope.

</details>

Sources: [Lecture 6 · Part A · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=17)

Card ID: `am209a-interaction-number`

---

### 814. Why is polynomial regression still linear regression?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is linear in the unknown coefficients, even though it is nonlinear in x.

**Intuition:** Linear describes the parameters, not necessarily the plotted curve.

</details>

Sources: [Lecture 6 · Part A · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=24)

Card ID: `am209a-polynomial-linear`

---

### 815. How many coefficients does a one-variable degree-M polynomial have with an intercept?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

M+1.

**Intuition:** The constant term counts as a coefficient too.

</details>

Sources: [Lecture 6 · Part A · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=24)

Card ID: `am209a-poly-count`

---

### 816. What is a quadratic design row for an input x?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\([1,x,x^{2}]\).

**Intuition:** Transform the input, then fit ordinary linear coefficients.

</details>

Sources: [Lecture 6 · Part A · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=25)

Card ID: `am209a-poly-row`

---

### 817. What is the cubic design row at \(x=2\)?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[1,2,4,8].

**Intuition:** Each additional column is another power of the same input.

</details>

Sources: [Lecture 6 · Part A · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=25)

Card ID: `am209a-poly-row-example`

---

### 818. Why inspect the columns produced by polynomial feature expansion?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With several inputs, it may add interaction terms as well as individual powers.

**Intuition:** Feature expansion can create more terms than you intended.

</details>

Sources: [Lecture 6 · Part A · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=29)

Card ID: `am209a-cross-features`

---

### 819. Why avoid both an explicit all-ones feature and a redundant fitted intercept?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They represent the same constant direction and create redundant parameters.

**Intuition:** Choose one consistent intercept convention.

</details>

Sources: [Lecture 6 · Part A · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=29)

Card ID: `am209a-duplicate-intercept`

---

### 820. Why can an overly simple model perform poorly even on its training data?

**AM 209a · Model complexity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It cannot express an important pattern in the data. This is underfitting; collecting more data alone does not fix a model that is too restricted.

**Intuition:** Even excellent optimization cannot fix the wrong model family.

</details>

Sources: [Lecture 6 · Part A · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=31)

Card ID: `am209a-underfit`

---

### 821. Why can high polynomial powers cause numerical trouble?

**AM 209a · Interactions and polynomials · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Very large or tiny input values become extreme when raised to high powers.

**Intuition:** Scale can make a mathematically valid model difficult to compute reliably.

</details>

Sources: [Lecture 6 · Part A · PDF p. 32](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=32)

Card ID: `am209a-power-scaling`

---

### 822. Why inspect model predictions even if MSE is small?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The model may imply implausible responses or relationships in important parts of the input range.

**Intuition:** One aggregate score can hide consequential failures.

</details>

Sources: [Lecture 6 · Part B · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=5)

Card ID: `am209a-plausibility`

---

### 823. What should improve if a model has learned a useful pattern rather than memorized its sample?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its predictions on relevant new observations. This ability to transfer beyond the training data is called generalization.

**Intuition:** New-data performance is the goal, not training perfection.

</details>

Sources: [Lecture 6 · Part B · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=6)

Card ID: `am209a-generalization`

---

### 824. Why not pick hyperparameters using test-set performance?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The selection would adapt to the test data, making its final score optimistically biased.

**Intuition:** An untouched test set evaluates the completed choice.

</details>

Sources: [Lecture 6 · Part B · PDF p. 9](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=9)

Card ID: `am209a-test-leak`

---

### 825. How many predictor subsets exist for J candidate predictors?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(2^{J}\), including the empty subset.

**Intuition:** Each predictor has two choices: include or exclude.

</details>

Sources: [Lecture 6 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=13)

Card ID: `am209a-subset-count`

---

### 826. How many subsets can be formed from 5 predictors?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

32.

**Intuition:** Exhaustive search grows exponentially.

</details>

Sources: [Lecture 6 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=13)

Card ID: `am209a-subset-example`

---

### 827. How does forward selection build a model?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Start with no predictors and repeatedly add the candidate that best improves the chosen evaluation criterion.

**Intuition:** It builds one path rather than checking every subset.

</details>

Sources: [Lecture 6 · Part B · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=16)

Card ID: `am209a-forward-selection`

---

### 828. Does forward selection guarantee the globally best predictor subset?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. An early greedy choice can exclude better combinations from the path.

**Intuition:** A computational shortcut can miss joint effects.

</details>

Sources: [Lecture 6 · Part B · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=16)

Card ID: `am209a-greedy-limits`

---

### 829. How many candidate additions are checked along a full forward-selection path with J predictors?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(J+(J-1)+\cdots +1=J(J+1)/2\), excluding the initial null model.

**Intuition:** The number of candidate fits grows quadratically rather than exponentially.

</details>

Sources: [Lecture 6 · Part B · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=17)

Card ID: `am209a-forward-cost`

---

### 830. How do polynomial coefficients differ from polynomial degree?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Coefficients are fitted parameters; degree is a hyperparameter selecting the model's form.

**Intuition:** Configuration choices sit outside a single model fit.

</details>

Sources: [Lecture 6 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=19)

Card ID: `am209a-parameter-hyperparameter`

---

### 831. What does low training error but much higher validation error suggest?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Overfitting, assuming both sets represent the same prediction setting.

**Intuition:** Training success is not transferring to held-out data.

</details>

Sources: [Lecture 6 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=21)

Card ID: `am209a-gap`

---

### 832. What can high training and validation errors suggest?

**AM 209a · Model selection · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Underfitting or a noisy/difficult prediction problem.

**Intuition:** High error alone does not identify its cause.

</details>

Sources: [Lecture 6 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-06b.pdf#page=21)

Card ID: `am209a-high-both`

---

### 833. Why can model choice be fragile with one validation split?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its particular observations can accidentally favor one model over another.

**Intuition:** The split itself adds uncertainty.

</details>

Sources: [Lecture 6 · Part C · PDF p. 3](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=3)

Card ID: `am209a-single-split`

---

### 834. Can repeated tuning overfit cross-validation results?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Trying many choices can adapt to the validation evidence.

**Intuition:** Cross-validation reduces split dependence, not every form of selection bias.

</details>

Sources: [Lecture 6 · Part C · PDF p. 3](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=3)

Card ID: `am209a-cv-not-magic`

---

### 835. Does cross-validation replace the final untouched test set?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No, when CV is used to choose the model; the test set still evaluates the finalized choice.

**Intuition:** Selection and final evaluation remain separate roles.

</details>

Sources: [Lecture 6 · Part C · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=5)

Card ID: `am209a-cv-test`

---

### 836. If three equal-sized folds have MSEs 2, 4, and 6, what is their mean CV MSE?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

4.

**Intuition:** Aggregate held-out performance across splits.

</details>

Sources: [Lecture 6 · Part C · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=12)

Card ID: `am209a-cv-average`

---

### 837. How does K-fold cross-validation work?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Split development data into K folds, fit on K−1 folds, validate on the remaining fold, and rotate.

**Intuition:** Every observation gets a turn as held-out data.

</details>

Sources: [Lecture 6 · Part C · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=13)

Card ID: `am209a-kfold`

---

### 838. How many fits are needed for one candidate in 5-fold CV?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Five, before any final refit.

**Intuition:** Each validation fold needs a model trained without it.

</details>

Sources: [Lecture 6 · Part C · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=13)

Card ID: `am209a-fold-count`

---

### 839. Where should learned scaling or imputation be fitted during CV?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Inside each training fold, then applied to its validation fold.

**Intuition:** Validation data should not influence preprocessing estimates.

</details>

Sources: [Lecture 6 · Part C · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=13)

Card ID: `am209a-preprocessing-folds`

---

### 840. What is leave-one-out cross-validation?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use each observation alone as validation and train on all the others.

**Intuition:** It is K-fold CV with K equal to the sample size.

</details>

Sources: [Lecture 6 · Part C · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=14)

Card ID: `am209a-loocv`

---

### 841. Why can leave-one-out CV be expensive?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It usually requires one fit per observation.

**Intuition:** Using almost all data per fit can increase computational cost.

</details>

Sources: [Lecture 6 · Part C · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=14)

Card ID: `am209a-loocv-cost`

---

### 842. Why does a cross-validation scorer sometimes return negative MSE?

**AM 209a · Cross-validation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The scoring convention maximizes values, so it negates a loss that should be minimized.

**Intuition:** A score of −2 is better than −5 for negative MSE.

</details>

Sources: [Lecture 6 · Part C · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-06c.pdf#page=16)

Card ID: `am209a-negative-mse`

---

### 843. If you knew the true expected response for each input, would prediction error disappear?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not if individual responses still vary around that expected value. This remaining variation is irreducible noise for the available predictors and setting.

**Intuition:** Better fitting cannot predict randomness absent from the inputs.

</details>

Sources: [Lecture 7 · Part A · PDF p. 11](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=11)

Card ID: `am209a-irreducible`

---

### 844. Which part of prediction error can a better model or more informative training data reduce?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The error from an inadequate relationship or imperfect estimation of it. This is reducible error, distinct from unpredictable variation around the true expected response.

**Intuition:** Better models or better estimation may reduce it.

</details>

Sources: [Lecture 7 · Part A · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=12)

Card ID: `am209a-reducible`

---

### 845. What does model variance measure at a fixed x?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How predictions change across repeated training samples.

**Intuition:** A high-variance model reacts strongly to the particular data collected.

</details>

Sources: [Lecture 7 · Part A · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=17)

Card ID: `am209a-07a-variance`

---

### 846. What does it mean if repeated fits systematically predict above the true mean at an input?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They have positive prediction bias there: the average prediction across training samples exceeds the true expected response f(x). Bias describes systematic error, not the spread between fits.

**Intuition:** Bias concerns systematic error across possible fits.

</details>

Sources: [Lecture 7 · Part A · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=18)

Card ID: `am209a-bias`

---

### 847. What are the usual components of expected squared prediction error?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Squared bias, model variance, and irreducible noise variance, under the standard zero-mean noise setup.

**Intuition:** Reducing one component does not necessarily reduce the total.

</details>

Sources: [Lecture 7 · Part A · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=19)

Card ID: `am209a-decomposition`

---

### 848. How does increasing flexibility often affect bias and variance?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can lower bias while increasing variance.

**Intuition:** More adaptable models can also be less stable.

</details>

Sources: [Lecture 7 · Part A · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=19)

Card ID: `am209a-complexity-tradeoff`

---

### 849. Can a biased estimator predict better than an unbiased one?

**AM 209a · Bias and variance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if its variance reduction outweighs the added squared bias.

**Intuition:** Prediction error balances both components.

</details>

Sources: [Lecture 7 · Part A · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-07a.pdf#page=19)

Card ID: `am209a-biased-better`

---

### 850. What does regularized regression optimize?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A data-fit loss plus a coefficient penalty weighted by \(\lambda\).

**Intuition:** A good fit must also pay for complexity.

</details>

Sources: [Lecture 7 · Part B · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=12)

Card ID: `am209a-penalty`

---

### 851. What happens when \(\lambda =0\) in ridge or lasso?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The penalty disappears, leaving ordinary least squares.

**Intuition:** Zero regularization returns to the original fitting objective.

</details>

Sources: [Lecture 7 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=13)

Card ID: `am209a-lambda-zero`

---

### 852. What happens to penalized slopes as \(\lambda\) becomes very large?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They shrink toward zero; an unpenalized intercept can remain.

**Intuition:** Very strong regularization approaches a constant predictor.

</details>

Sources: [Lecture 7 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=13)

Card ID: `am209a-large-lambda`

---

### 853. Can regularization be too strong?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Excessive shrinkage can erase useful signal and underfit.

**Intuition:** Regularization strength needs tuning rather than maximization.

</details>

Sources: [Lecture 7 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=13)

Card ID: `am209a-too-much`

---

### 854. How should prediction-focused regularization strength be chosen?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Compare candidate \(\lambda\) values using validation or cross-validation loss.

**Intuition:** The penalty's training value does not measure held-out usefulness.

</details>

Sources: [Lecture 7 · Part B · PDF p. 15](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=15)

Card ID: `am209a-tune-lambda`

---

### 855. What coefficient penalty does lasso use?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The L1 penalty \(\lambda\sum_j|\beta_j|\), usually excluding the intercept.

**Intuition:** Absolute values create a sharp corner at zero.

</details>

Sources: [Lecture 7 · Part B · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=16)

Card ID: `am209a-lasso-penalty`

---

### 856. What coefficient penalty does ridge use?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The squared L2 penalty \(\lambda\sum_j\beta_j^2\), usually excluding the intercept.

**Intuition:** Large coefficients become increasingly expensive.

</details>

Sources: [Lecture 7 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=19)

Card ID: `am209a-ridge-penalty`

---

### 857. Why standardize predictors before applying comparable slope penalties?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Changing a feature's units changes the coefficient needed for the same prediction and therefore its penalty.

**Intuition:** Unscaled penalties can treat units as importance.

</details>

Sources: [Lecture 7 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=19)

Card ID: `am209a-scale-penalty`

---

### 858. Why is the intercept usually left unpenalized?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It sets the overall response level rather than a feature effect.

**Intuition:** Shifting the response's origin should not change how slopes are penalized.

</details>

Sources: [Lecture 7 · Part B · PDF p. 20](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=20)

Card ID: `am209a-intercept-penalty`

---

### 859. For centered data and loss \(\Vert y-X\beta \Vert ^{2}+\lambda \Vert \beta \Vert ^{2}\), what is the ridge solution?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\hat{\beta}=(X^{\mathsf{T}}X+\lambda I)^{-1}X^{\mathsf{T}}y\) for \(\lambda >0\).

**Intuition:** Adding \(\lambda\) stabilizes weak coefficient directions.

</details>

Sources: [Lecture 7 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=21)

Card ID: `am209a-ridge-formula`

---

### 860. Why is \(X^{\mathsf{T}}X+\lambda I\) invertible when \(\lambda >0\)?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For nonzero v, \(v^{\mathsf{T}}(X^{\mathsf{T}}X+\lambda I)v=\Vert Xv\Vert ^{2}+\lambda \Vert v\Vert ^{2}>0\).

**Intuition:** The penalty removes flat directions in the slope objective.

</details>

Sources: [Lecture 7 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=21)

Card ID: `am209a-ridge-invertible`

---

### 861. If the fit loss is MSE rather than SSE, does the same numerical \(\lambda\) mean the same penalty strength?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. With \(\operatorname{MSE}+\lambda \Vert \beta \Vert ^{2}\), the normal equations contain \(X^{\mathsf{T}}X+n\lambda I\).

**Intuition:** Always match \(\lambda\) to the objective's scaling convention.

</details>

Sources: [Lecture 7 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=21)

Card ID: `am209a-ridge-loss-scale`

---

### 862. Why try \(\lambda\) values spread across orders of magnitude?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Useful strengths can differ by factors of ten or more.

**Intuition:** A logarithmic grid explores weak and strong penalties efficiently.

</details>

Sources: [Lecture 7 · Part B · PDF p. 24](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=24)

Card ID: `am209a-log-grid`

---

### 863. Can you reuse one fitted coefficient vector for every candidate \(\lambda\)?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Each \(\lambda\) defines a different optimization problem and generally needs its own fit.

**Intuition:** Tuning changes the model, not only its score.

</details>

Sources: [Lecture 7 · Part B · PDF p. 25](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=25)

Card ID: `am209a-refit-candidates`

---

### 864. Should validation MSE include the training coefficient penalty?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Use prediction error on held-out observations to compare predictive performance.

**Intuition:** The penalty guides fitting; validation judges the resulting predictions.

</details>

Sources: [Lecture 7 · Part B · PDF p. 26](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=26)

Card ID: `am209a-validation-unpenalized`

---

### 865. After selecting \(\lambda\), what data can you use for the final refit?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

All development data previously used for training and validation, keeping the test set untouched.

**Intuition:** Once the setting is fixed, use available development information.

</details>

Sources: [Lecture 7 · Part B · PDF p. 29](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=29)

Card ID: `am209a-final-refit`

---

### 866. With 10 \(\lambda\) values and 5 CV folds, how many candidate fits are needed?

**AM 209a · Regularization · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

50, plus the final refit.

**Intuition:** Every setting must be evaluated across the same fold structure.

</details>

Sources: [Lecture 7 · Part B · PDF p. 50](../courses/harvard/am209a/lecnotes/lecture-07b.pdf#page=50)

Card ID: `am209a-cv-grid`

---

### 867. Why is lasso optimization less direct than solving ridge's linear equations?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The absolute-value penalty is not differentiable at zero; algorithms handle that kink explicitly.

**Intuition:** No derivative at zero does not mean no optimization solution.

</details>

Sources: [Lecture 7 · Part C · PDF p. 2](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=2)

Card ID: `am209a-lasso-optimization`

---

### 868. Which method can set coefficients exactly to zero: ridge or lasso?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Lasso commonly does; ridge generally shrinks coefficients continuously without selecting a sparse subset.

**Intuition:** Shrinkage and feature selection are different outcomes.

</details>

Sources: [Lecture 7 · Part C · PDF p. 3](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=3)

Card ID: `am209a-sparsity`

---

### 869. Why does lasso's constraint geometry favor zero coefficients?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its corners lie on coordinate axes, where one or more coefficients are zero.

**Intuition:** The penalty's shape helps determine the solution's structure.

</details>

Sources: [Lecture 7 · Part C · PDF p. 4](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=4)

Card ID: `am209a-lasso-geometry`

---

### 870. Why does ridge usually retain nonzero coefficients?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its smooth constraint boundary does not favor axis-aligned corners.

**Intuition:** A smooth penalty tends to distribute shrinkage.

</details>

Sources: [Lecture 7 · Part C · PDF p. 4](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=4)

Card ID: `am209a-ridge-geometry`

---

### 871. Why can ridge help with highly correlated predictors?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It stabilizes coefficient estimates by penalizing large solutions along weakly identified directions.

**Intuition:** Accept some bias to reduce sensitivity.

</details>

Sources: [Lecture 7 · Part C · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=5)

Card ID: `am209a-ridge-collinearity`

---

### 872. Does a zero lasso coefficient prove the predictor has no relationship with the response?

**AM 209a · Ridge versus lasso · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Selection depends on \(\lambda\), other predictors, and the sample.

**Intuition:** A fitted exclusion is not a universal scientific conclusion.

</details>

Sources: [Lecture 7 · Part C · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=5)

Card ID: `am209a-lasso-zero-proof`

---

### 873. Why would repeated studies produce different regression coefficients?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The observed sample and noise vary, changing the fitted model.

**Intuition:** A point estimate does not describe its own reliability.

</details>

Sources: [Lecture 8 · Part A · PDF p. 12](../courses/harvard/am209a/lecnotes/lecture-08a.pdf#page=12)

Card ID: `am209a-coefficient-uncertainty`

---

### 874. If you repeated a study many times, why would the fitted coefficient vary?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each sample has different observations and noise. The distribution of coefficient estimates across those repeated samples is its sampling distribution.

**Intuition:** One fitted coefficient is one realization of an estimator.

</details>

Sources: [Lecture 8 · Part A · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-08a.pdf#page=22)

Card ID: `am209a-sampling-distribution`

---

### 875. In a bootstrap resample, can the same observation appear more than once?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Sampling with replacement keeps each observation eligible after every draw, so a resample can repeat some rows and omit others.

**Intuition:** A bootstrap sample can repeat some records and omit others.

</details>

Sources: [Lecture 8 · Part B · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=5)

Card ID: `am209a-replacement`

---

### 876. How many observations are drawn for an ordinary size-n bootstrap replicate?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

n draws with replacement from the original n observations.

**Intuition:** Replicates preserve sample size, not the set of distinct rows.

</details>

Sources: [Lecture 8 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=13)

Card ID: `am209a-bootstrap-size`

---

### 877. For pairs bootstrap in regression, what must be resampled together?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An entire observation row: its predictors and response.

**Intuition:** Resampling X and y separately would destroy their relationship.

</details>

Sources: [Lecture 8 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=19)

Card ID: `am209a-pairs`

---

### 878. What do you do after drawing each bootstrap dataset?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Refit the estimator and record the quantity of interest.

**Intuition:** Variation across refits approximates sampling variation.

</details>

Sources: [Lecture 8 · Part B · PDF p. 19](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=19)

Card ID: `am209a-refit-bootstrap`

---

### 879. How is a bootstrap standard error estimated?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Take the sample standard deviation of the statistic across bootstrap replicates.

**Intuition:** Spread across refits estimates uncertainty in the statistic.

</details>

Sources: [Lecture 8 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=21)

Card ID: `am209a-bootstrap-se`

---

### 880. Should the bootstrap SD of coefficients be divided by \(\sqrt{B}\) to estimate the coefficient's standard error?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The replicate SD already estimates that standard error; dividing by \(\sqrt{B}\) targets simulation averaging error instead.

**Intuition:** More bootstrap runs do not create more observed data.

</details>

Sources: [Lecture 8 · Part B · PDF p. 21](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=21)

Card ID: `am209a-not-divide-b`

---

### 881. What distribution does the ordinary nonparametric bootstrap sample from?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The empirical distribution placing equal mass on each observed record.

**Intuition:** The observed sample stands in for the unknown population.

</details>

Sources: [Lecture 8 · Part B · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=22)

Card ID: `am209a-empirical-population`

---

### 882. What improves when you increase the number of bootstrap replicates B?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The numerical stability of the bootstrap estimate, not the information in the original dataset.

**Intuition:** Reduce simulation noise without pretending to collect new observations.

</details>

Sources: [Lecture 8 · Part B · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=22)

Card ID: `am209a-more-replicates`

---

### 883. Can bootstrap resampling fix a biased or unrepresentative original sample?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It repeatedly reuses that sample's information and selection limitations.

**Intuition:** Resampling does not repair the collection process.

</details>

Sources: [Lecture 8 · Part B · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=22)

Card ID: `am209a-bootstrap-limits`

---

### 884. Why can ordinary row bootstrap fail for dependent observations?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Independent resampling breaks the dependence structure; a suitable design such as block resampling may be needed.

**Intuition:** The resampling scheme must match the data structure.

</details>

Sources: [Lecture 8 · Part B · PDF p. 22](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=22)

Card ID: `am209a-dependent-data`

---

### 885. What does 95% confidence describe in frequentist inference?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The long-run coverage of the interval-building procedure under its assumptions.

**Intuition:** The parameter is fixed; intervals vary across samples.

</details>

Sources: [Lecture 8 · Part B · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=23)

Card ID: `am209a-ci-meaning`

---

### 886. Does a realized frequentist 95% CI assign 95% posterior probability to its parameter range?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. That is a Bayesian probability statement requiring a posterior model.

**Intuition:** Coverage and posterior probability answer different questions.

</details>

Sources: [Lecture 8 · Part B · PDF p. 23](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=23)

Card ID: `am209a-ci-not-posterior`

---

### 887. How is a 95% percentile bootstrap interval constructed?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Use the 2.5th and 97.5th percentiles of the bootstrap estimates.

**Intuition:** Leave 2.5% of replicate estimates in each tail.

</details>

Sources: [Lecture 8 · Part B · PDF p. 26](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=26)

Card ID: `am209a-percentile-ci`

---

### 888. If bootstrap percentiles are 1.2 and 3.8, what is the 95% percentile interval?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

[1.2,3.8].

**Intuition:** Report the endpoint values, not the percentile labels.

</details>

Sources: [Lecture 8 · Part B · PDF p. 28](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=28)

Card ID: `am209a-ci-example`

---

### 889. When is estimate \(\pm\) roughly 2 standard errors a reasonable 95% interval approximation?

**AM 209a · Bootstrap · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When the estimator's sampling distribution is approximately normal and the standard error estimate is suitable.

**Intuition:** A symmetric interval may misrepresent a skewed distribution.

</details>

Sources: [Lecture 8 · Part B · PDF p. 30](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=30)

Card ID: `am209a-normal-approx`

---

### 890. In simple regression, how does predictor spread affect slope uncertainty?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Under equal-variance, uncorrelated errors, \(\operatorname{SE}(\hat\beta_1)=\frac{\sigma}{\sqrt{\sum_i(x_i-\bar x)^2}}\).

**Intuition:** A wider range of x provides more leverage for estimating a slope.

</details>

Sources: [Lecture 8 · Part B · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=31)

Card ID: `am209a-slope-se`

---

### 891. If the error SD doubles while X stays fixed, what happens to coefficient standard errors?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They double under the same linear-model assumptions.

**Intuition:** Noisier responses make the same design less informative.

</details>

Sources: [Lecture 8 · Part B · PDF p. 31](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=31)

Card ID: `am209a-noise-se`

---

### 892. How is residual noise variance estimated in full-rank simple regression with an intercept?

**AM 209a · Inference foundations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(s^2=\frac{\operatorname{SSE}}{n-2}\), for \(n>2\) under the usual model assumptions.

**Intuition:** Two fitted coefficients use two degrees of freedom.

</details>

Sources: [Lecture 8 · Part B · PDF p. 32](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=32)

Card ID: `am209a-noise-estimate`

---

### 893. Why isn't a large coefficient enough to establish statistical significance?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its uncertainty and units matter; a large estimate can be imprecise.

**Intuition:** Compare the signal with its uncertainty.

</details>

Sources: [Lecture 8 · Part C · PDF p. 5](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=5)

Card ID: `am209a-size-vs-evidence`

---

### 894. What is the usual coefficient t statistic for testing \(\beta _{j}=0\)?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(t=\hat{\beta}_{j}/\operatorname{SE}(\hat{\beta}_{j})\).

**Intuition:** It measures how many standard errors the estimate lies from zero.

</details>

Sources: [Lecture 8 · Part C · PDF p. 7](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=7)

Card ID: `am209a-t-stat`

---

### 895. If \(\hat{\beta}=0.6\) and its SE is 0.2, what is the t statistic for a zero null?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3.

**Intuition:** The same coefficient would provide less evidence with a larger SE.

</details>

Sources: [Lecture 8 · Part C · PDF p. 7](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=7)

Card ID: `am209a-t-example`

---

### 896. With p predictors and an intercept, what are the classical residual t-test degrees of freedom?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

n−p−1 for a full-rank design under the normal linear model.

**Intuition:** Count observations minus fitted coefficients.

</details>

Sources: [Lecture 8 · Part C · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=14)

Card ID: `am209a-t-df`

---

### 897. What assumptions justify the usual exact regression t reference distribution?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A correct linear mean, full-rank design, and independent Gaussian errors with constant variance, conditional on X.

**Intuition:** The reference distribution depends on the model assumptions.

</details>

Sources: [Lecture 8 · Part C · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=14)

Card ID: `am209a-exact-t`

---

### 898. Why use the absolute t statistic for a two-sided coefficient test?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Large departures in either the positive or negative direction count as evidence against zero.

**Intuition:** Both tails matter when either sign is an alternative.

</details>

Sources: [Lecture 8 · Part C · PDF p. 16](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=16)

Card ID: `am209a-two-sided`

---

### 899. If the null hypothesis were true, what question would a p-value answer?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How likely is a test statistic at least as extreme as the one observed, under the null and model assumptions? It does not give the probability that the null itself is true.

**Intuition:** It is a probability about possible data, conditional on a hypothesis.

</details>

Sources: [Lecture 8 · Part C · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=17)

Card ID: `am209a-pvalue`

---

### 900. Does a p-value of 0.03 mean the null hypothesis has a 3% chance of being true?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It means results at least as extreme as observed have probability 3% under the null and model assumptions. Turning evidence into a probability about the hypothesis requires additional assumptions, such as a Bayesian model.

**Intuition:** Do not reverse a conditional probability.

</details>

Sources: [Lecture 8 · Part C · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=17)

Card ID: `am209a-p-not-null`

---

### 901. Does a nonsignificant coefficient prove its effect is zero?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The data may be too imprecise to distinguish it from zero.

**Intuition:** Absence of strong evidence is not proof of absence.

</details>

Sources: [Lecture 8 · Part C · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=17)

Card ID: `am209a-not-significant`

---

### 902. Does a significant regression coefficient establish causation?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The regression can still reflect confounding or selection.

**Intuition:** Statistical evidence for association is not an experimental intervention.

</details>

Sources: [Lecture 8 · Part C · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=17)

Card ID: `am209a-association-not-cause`

---

### 903. Does statistical significance guarantee practical importance?

**AM 209a · Predictor significance · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. A tiny effect can be precisely estimated, and a meaningful effect can be uncertain.

**Intuition:** Magnitude and uncertainty both matter.

</details>

Sources: [Lecture 8 · Part C · PDF p. 18](../courses/harvard/am209a/lecnotes/lecture-08c.pdf#page=18)

Card ID: `am209a-practical`

---

### 904. How can bootstrap fits give a confidence interval for the mean response at x?

**AM 209a · Prediction uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Predict at the same x with each bootstrap fit and summarize those fitted mean predictions.

**Intuition:** Parameter uncertainty becomes uncertainty about the mean curve.

</details>

Sources: [Lecture 8 · Part D · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-08d.pdf#page=6)

Card ID: `am209a-mean-band`

---

### 905. Why is a prediction interval usually wider than a confidence interval for the mean?

**AM 209a · Prediction uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It includes both uncertainty in the fitted mean and variation of a new response around that mean.

**Intuition:** Predicting one outcome is harder than estimating its average.

</details>

Sources: [Lecture 8 · Part D · PDF p. 11](../courses/harvard/am209a/lecnotes/lecture-08d.pdf#page=11)

Card ID: `am209a-prediction-vs-confidence`

---

### 906. Would knowing f(x) exactly remove all uncertainty in a new y?

**AM 209a · Prediction uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The new response still contains random error \(\varepsilon\).

**Intuition:** A perfectly known mean is not a perfectly predictable individual.

</details>

Sources: [Lecture 8 · Part D · PDF p. 11](../courses/harvard/am209a/lecnotes/lecture-08d.pdf#page=11)

Card ID: `am209a-known-mean`

---

### 907. What is missing if a bootstrap prediction interval uses only the fitted mean curves?

**AM 209a · Prediction uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

New-observation noise. A predictive simulation must also include suitable response variation.

**Intuition:** A collection of fitted lines is a mean-uncertainty band.

</details>

Sources: [Lecture 8 · Part D · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-08d.pdf#page=13)

Card ID: `am209a-bootstrap-new-response`

---

### 908. Under independent new noise, how do mean-estimation variance and response noise combine?

**AM 209a · Prediction uncertainty · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They add: \(\operatorname{Var}(\text{prediction error})=\operatorname{Var}(\text{estimated mean error})+\sigma^2\), under the model.

**Intuition:** Uncertainty has two distinct sources.

</details>

Sources: [Lecture 8 · Part D · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-08d.pdf#page=14)

Card ID: `am209a-two-variances`

---

### 909. Move from 99 to 198: how does the binary64 spacing change?

**AM 205 · Floating-point arithmetic · PREDICT**

**Predict the gap** (equation)

- Magnitude A: 99
- Magnitude B: 198

<details>
<summary>Reveal explanation</summary>

It doubles, from \(2^{-46}\) to \(2^{-45}\). The exponent increases by one while binary64 keeps the same significand precision.

**Intuition:** The floating-point grid stretches with scale.

</details>

Sources: [PS1 · Q1(a)](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing-visual-double-spacing`

---

### 910. Which sequence sends the vector (1, 2) to (2, 2)?

**AM 205 · Matrix operations · COMPARE**

**Same operations, different order** (compare)

- A: Double row 1 \(\to\) swap
- B: Swap \(\to\) double row 1

<details>
<summary>Reveal explanation</summary>

A gives (2, 2). B first gives (2, 1), then (4, 1). Scaling and swapping generally do not commute.

**Intuition:** Track the intermediate state rather than memorizing an order rule.

</details>

Sources: [PS1 · Q3](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-column-order-visual-operation-order`

---

### 911. A map stretches one axis by 4 and the other by \(\frac{1}{4}\). What happens to area?

**AM 205 · Geometry of linear maps · PREDICT**

**Two stretches** (equation)

- \(\sigma _{1}\): 4
- \(\sigma _{2}\): \(\frac{1}{4}\)

<details>
<summary>Reveal explanation</summary>

Area is unchanged because the product of singular values is 1. The shape can still become long and thin.

**Intuition:** Shape distortion and area change are different quantities.

</details>

Sources: [PS1 · Q4](../courses/harvard/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-singular-values-area-visual-area-predict`

---

### 912. What is wrong with declaring this solution accurate from its residual alone?

**AM 205 · Linear-system verification · SPOT THE MISTAKE**

**Spot the claim** (mistake)

- Given: A \(=\) diag(1, \(10^{-8}\)), b \(=\) (1, \(10^{-8}\))
- Claim: \(\hat{x}\) \(=\) (1, 0) is accurate because \(\lVert b-A\hat x\rVert\) \(=\) \(10^{-8}\)

<details>
<summary>Reveal explanation</summary>

The true solution is (1, 1), so the second component is entirely wrong. The tiny second diagonal entry hides that error in the residual.

**Intuition:** An insensitive output direction can conceal a large solution error.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-small-residual-counterexample-visual-residual-trap`

---

### 913. If \(\kappa _{2}(X)=10^{4}\), which least-squares route forms a matrix with condition number \(10^{8}\)?

**AM 205 · Least-squares algorithms · COMPARE**

**Full column rank X** (compare)

- Normal equations: \(X^{\mathsf{T}}X\beta=X^{\mathsf{T}}y\)
- QR: X \(=\) QR, then \(R\beta=Q^{\mathsf{T}}y\)

<details>
<summary>Reveal explanation</summary>

The normal equations form \(X^{\mathsf{T}}X\), whose 2-norm condition number is \(\kappa _{2}(X)^{2}\) \(=\) \(10^{8}\). QR avoids explicitly squaring the condition number.

**Intuition:** Algebraically equivalent formulas can behave differently in finite precision.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-normal-squared-visual-conditioning-predict`

---

### 914. After factoring \(PA=LU\), what belongs in the missing solve step?

**AM 205 · Efficient linear solves · COMPLETE THE SEQUENCE**

**Reuse the factors** (flow)

- 1: Form Pb
- 2: Solve Ly \(=\) Pb
- 3: ?

<details>
<summary>Reveal explanation</summary>

Solve \(Ux=y\) by back substitution. For each new right-hand side, reuse P, L, and U rather than refactoring A.

**Intuition:** Pay for the factorization once, then solve cheaply.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/harvard/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-lu-reuse-visual-solve-pipeline`

---

### 915. Which simulation budget halves the Monte Carlo standard error relative to N draws?

**AM 207 · Monte Carlo integration · COMPARE**

**Independent draws, same variance** (compare)

- Budget A: 2N
- Budget B: 4N

<details>
<summary>Reveal explanation</summary>

Budget B. Standard error scales as \(\frac{1}{\sqrt{N}}\), so quadrupling N halves it; doubling N only multiplies it by \(\frac{1}{\sqrt{2}}\).

**Intuition:** Precision improves with the square root of computational effort.

</details>

Sources: [Lecture 03 · p. 27](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=27)

Card ID: `am207-iid-mean-variance-visual-mc-budget`

---

### 916. If a valid rejection envelope changes from \(M=2\) to \(M=8\), how does acceptance change?

**AM 207 · Rejection sampling · PREDICT**

**Normalized target and proposal** (equation)

- Before: M \(=\) 2
- After: M \(=\) 8

<details>
<summary>Reveal explanation</summary>

Acceptance falls from \(\frac{1}{2}\) to \(\frac{1}{8}\). The looser envelope needs four times as many proposals per accepted draw on average.

**Intuition:** A valid but loose bound wastes computation.

</details>

Sources: [Lecture 02 · p. 34](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=34)

Card ID: `am207-rejection-acceptance-fraction-visual-envelope-cost`

---

### 917. Why is this Metropolis–Hastings output rule wrong?

**AM 207 · Markov chain sampling · SPOT THE MISTAKE**

**Spot the implementation bug** (mistake)

- Rule: Append a state only when a proposal is accepted

<details>
<summary>Reveal explanation</summary>

Rejected proposals must append the current state again. Removing those repeated states changes residence times and generally changes the sampled distribution.

**Intuition:** Staying put is part of the Markov chain.

</details>

Sources: [Lecture 02 · p. 42](../courses/harvard/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=42)

Card ID: `am207-mh-holding-visual-rejection-trap`

---

### 918. Which proposal fails before you even inspect its importance weights?

**AM 207 · Importance sampling · COMPARE**

**Target has positive density across the real line** (compare)

- Proposal A: A normal density
- Proposal B: Uniform on [0, 1]

<details>
<summary>Reveal explanation</summary>

B misses target mass outside [0,1]. A has full support, although its weight variance may still be poor.

**Intuition:** Support is a necessary check, not a guarantee of efficiency.

</details>

Sources: [Lecture 03 · p. 33](../courses/harvard/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=33)

Card ID: `am207-importance-support-visual-support-check`

---

### 919. With a frozen reaction rate of 12 per second and \(\tau =0.25\) seconds, what count is sampled?

**AM 207 · Tau leaping · PREDICT**

**One tau-leap channel** (equation)

- \(a_{j}\): 12 \(s^{-1}\)
- \(\tau\): 0.25 s

<details>
<summary>Reveal explanation</summary>

A Poisson random count with mean 3, not exactly three events. Freezing the reaction rate is the tau-leaping approximation.

**Intuition:** The expected count is deterministic; the realized count is random.

</details>

Sources: [Lecture 05 · p. 39](../courses/harvard/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-poisson-mean-visual-tau-predict`

---

### 920. What posterior completes this coin-update sequence?

**AM 207 · Bayesian examples · COMPLETE THE SEQUENCE**

**Independent tosses with unknown head probability** (flow)

- Prior: Beta(1, 1)
- Data: 4 heads, 7 tails
- Posterior: ?

<details>
<summary>Reveal explanation</summary>

\(\operatorname{Beta}(5,8)\): add heads to the first shape parameter and tails to the second.

**Intuition:** Conjugate updating turns evidence into parameter increments.

</details>

Sources: [Lecture 06 · p. 49](../courses/harvard/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=49)

Card ID: `am207-coin-four-eleven-visual-bayes-pipeline`

---

### 921. Do these coefficient pairs give different fitted values when \(X=\begin{bmatrix}x&x\end{bmatrix}\)?

**STAT 244 · Rank-deficient least squares · COMPARE**

**Duplicated design columns** (compare)

- Pair A: (1, 2)
- Pair B: (4, −1)

<details>
<summary>Reveal explanation</summary>

No. Both give 3x because only the coefficient sum is identified. Individual coefficients differ, but their predictions agree.

**Intuition:** Nonunique coordinates can describe the same fitted vector.

</details>

Sources: [HW2 · Q2](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-example-visual-coefficient-twins`

---

### 922. What condition is missing from this claim about an orthogonal projector?

**STAT 244 · Projection matrices · SPOT THE MISTAKE**

**Spot the incomplete test** (mistake)

- Claim: \(P^{2}\) \(=\) P, therefore P is an orthogonal projector

<details>
<summary>Reveal explanation</summary>

For a real matrix, also require \(P^{\mathsf{T}}=P\). Idempotence alone describes a projection that may be oblique.

**Intuition:** Projecting twice changes nothing; orthogonality additionally controls the direction.

</details>

Sources: [HW2 · Q5(a–c)](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-idempotent-not-orthogonal-visual-projection-trap`

---

### 923. If SSE stays 80 but \(\operatorname{rank}(X)\) rises from 4 to 10 with \(n=20\), what happens to \(s^{2}\)?

**STAT 244 · Variance estimation · PREDICT**

**Unbiased variance estimate** (equation)

- Before: 80 / (20 − 4)
- After: 80 / (20 − 10)

<details>
<summary>Reveal explanation</summary>

It rises from 5 to 8. With SSE held fixed, fewer residual degrees of freedom mean a larger variance estimate.

**Intuition:** Fitting more independent directions leaves fewer directions for estimating noise.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/harvard/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-numeric-visual-degrees-freedom`

---

### 924. Which independent measurement deserves four times the weight in WLS?

**STAT 244 · Weighted least squares · COMPARE**

**Known relative variances** (compare)

- Measurement A: Variance 1
- Measurement B: Variance 4

<details>
<summary>Reveal explanation</summary>

A. Inverse-variance weights are 1 and \(\frac{1}{4}\); the noisier measurement receives less influence.

**Intuition:** Precision, not variance, determines the weight.

</details>

Sources: [Least-squares theory · p. 22](../courses/harvard/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weights-visual-weight-comparison`

---

### 925. With \(s=2\) and mean-prediction leverage 0.25, which standard error is larger?

**STAT 244 · Prediction intervals · COMPARE**

**Same predictor value** (compare)

- Mean response: \(2\sqrt{0.25}\)
- New response: 2√(1 + 0.25)

<details>
<summary>Reveal explanation</summary>

The new-response SE is \(\sqrt{5}\) \(\approx\) 2.24; the mean-response SE is 1. The extra 1 represents the new observation's noise.

**Intuition:** Predicting an individual adds variability beyond estimating its mean.

</details>

Sources: [Inference notes · pp. 12–13](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction-width-number-visual-uncertainty-split`

---

### 926. Why can this principal-components regression shortcut fail?

**STAT 244 · Principal components regression · SPOT THE MISTAKE**

**Spot the reasoning gap** (mistake)

- Claim: The lowest-variance predictor direction cannot matter for prediction

<details>
<summary>Reveal explanation</summary>

Predictor variance does not measure association with the response. A low-variance direction can carry important predictive signal, so discarding it can harm prediction.

**Intuition:** PCA looks at X; prediction also needs the relationship with y.

</details>

Sources: [Inference notes · pp. 23–24](../courses/harvard/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-visual-pcr-trap`

---

### 927. What is wrong with this plan for fixing a biased survey?

**AM 209a · Sampling and EDA · SPOT THE MISTAKE**

**Spot the claim** (mistake)

- Plan: Keep the same selective recruitment method but collect ten times more responses

<details>
<summary>Reveal explanation</summary>

More responses can reduce random variation while leaving selection bias intact. Improve who can enter the sample, not just its size.

**Intuition:** A precise answer about the wrong population is still misleading.

</details>

Sources: [Lecture 3 · PDF p. 6](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=6)

Card ID: `am209a-selection-bias-visual-sample-size-trap`

---

### 928. If X is symmetric around zero and \(Y=X^{2}\), can Pearson correlation miss a perfect relationship?

**AM 209a · Association · PREDICT**

**Assume finite moments and nonzero variances** (equation)

- Input: X
- Output: Y \(=\) \(X^{2}\)

<details>
<summary>Reveal explanation</summary>

Yes. The covariance is zero by symmetry, even though Y is completely determined by X. Pearson correlation measures linear association.

**Intuition:** Zero linear association does not mean no relationship.

</details>

Sources: [Lecture 3 · PDF p. 17](../courses/harvard/am209a/lecnotes/lecture-03.pdf#page=17)

Card ID: `am209a-correlation-visual-curved-association`

---

### 929. Where does this model-selection workflow leak information?

**AM 209a · Model evaluation · COMPLETE THE SEQUENCE**

**Spot the first invalid step** (flow)

- 1: Fit models on training data
- 2: Choose the best using test-set MSE
- 3: Report that same test MSE

<details>
<summary>Reveal explanation</summary>

Step 2 uses the test set for selection. Tune with validation data or cross-validation, then use the held-out test set for final evaluation.

**Intuition:** A test set loses its independent role when it guides decisions.

</details>

Sources: [Lecture 4 · Part B · PDF p. 8](../courses/harvard/am209a/lecnotes/lecture-04b.pdf#page=8)

Card ID: `am209a-train-validation-test-visual-test-leak`

---

### 930. For \(f=1+2x+3z+4xz\), what happens to the x-slope when z changes from 0 to 1?

**AM 209a · Interactions and polynomials · PREDICT**

**Compare conditional slopes** (equation)

- z \(=\) 0: \(\partial f/\partial x\) \(=\) ?
- z \(=\) 1: \(\partial f/\partial x\) \(=\) ?

<details>
<summary>Reveal explanation</summary>

The slope changes from 2 to 6 because \(\partial f/\partial x=2+4z\).

**Intuition:** An interaction makes one variable's effect depend on another.

</details>

Sources: [Lecture 6 · Part A · PDF p. 14](../courses/harvard/am209a/lecnotes/lecture-06a.pdf#page=14)

Card ID: `am209a-interaction-slope-visual-interaction-predict`

---

### 931. Which penalty can produce exact zero coefficients and select features?

**AM 209a · Ridge versus lasso · COMPARE**

**Same squared-error loss, positive \(\lambda\)** (compare)

- Ridge: \(\lambda\) \(\Sigma\) \(\beta _{j}^{2}\)
- Lasso: \(\lambda\) \(\Sigma\) \(|\beta _{j}|\)

<details>
<summary>Reveal explanation</summary>

Lasso can set coefficients exactly to zero. Ridge generally shrinks them continuously without making them exactly zero.

**Intuition:** The penalty's geometry changes the kind of solution favored.

</details>

Sources: [Lecture 7 · Part C · PDF p. 3](../courses/harvard/am209a/lecnotes/lecture-07c.pdf#page=3)

Card ID: `am209a-sparsity-visual-penalty-choice`

---

### 932. Why does this resampling procedure fail to create an ordinary bootstrap distribution of the mean?

**AM 209a · Bootstrap · SPOT THE MISTAKE**

**Spot the sampling mistake** (mistake)

- Procedure: Draw all n observations without replacement, then recompute the mean

<details>
<summary>Reveal explanation</summary>

Each resample contains the same observations, so the mean never changes. An ordinary nonparametric bootstrap draws n observations with replacement.

**Intuition:** Repeated and omitted observations create resampling variability.

</details>

Sources: [Lecture 8 · Part B · PDF p. 13](../courses/harvard/am209a/lecnotes/lecture-08b.pdf#page=13)

Card ID: `am209a-bootstrap-size-visual-bootstrap-trap`

---

### 933. What crosses borders in international economics?

**International Finance · International economics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Goods and services, money, and investments. International economics studies how those cross-border interactions affect economies.

**Intuition:** Trade and finance describe connected parts of the same system.

</details>

Sources: [Chapter 1 · PDF page 3](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=3)

Card ID: `ub-if-international-scope`

---

### 934. How does international finance differ from international trade?

**International Finance · International economics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Trade focuses on goods and services crossing borders. Finance focuses on monetary transactions, financial claims, and the policies governing them.

**Intuition:** A goods transaction often has a financial counterpart.

</details>

Sources: [Chapter 1 · PDF page 20](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=20)

Card ID: `ub-if-trade-vs-finance`

---

### 935. Why measure trade relative to GDP rather than only in dollars?

**International Finance · International economics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The ratio indicates trade's importance relative to the economy's size. Dollar trade can rise simply because the whole economy grows.

**Intuition:** Normalize before comparing economic exposure.

</details>

Sources: [Chapter 1 · PDF page 4](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=4)

Card ID: `ub-if-trade-share`

---

### 936. Why can a large, diverse country have a lower trade-to-GDP ratio?

**International Finance · International economics · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can obtain more goods and resources within its own borders. Smaller economies often rely more heavily on foreign production and markets.

**Intuition:** Economic size changes the need to cross borders.

</details>

Sources: [Chapter 1 · PDF page 6](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=6)

Card ID: `ub-if-country-size`

---

### 937. How can an international exchange benefit both sides?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each party can receive something it values more than what it gives up. Differences in production opportunities create room for mutually beneficial exchange.

**Intuition:** Trade is not automatically a zero-sum contest.

</details>

Sources: [Chapter 1 · PDF page 8](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=8)

Card ID: `ub-if-voluntary-trade`

---

### 938. Can a country gain from trade even if it is less productive in every good?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Gains depend on relative opportunity costs, not just absolute productivity. Specializing where its relative disadvantage is smallest can still improve its consumption possibilities.

**Intuition:** Compare what production requires giving up.

</details>

Sources: [Chapter 1 · PDF page 9](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-comparative-advantage`

---

### 939. If you use scarce resources to produce one good, what is the economic cost beyond the money spent?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The best alternative production or activity you give up. This is opportunity cost: the trade-off created by using those resources here rather than elsewhere.

**Intuition:** Scarcity makes relative tradeoffs matter.

</details>

Sources: [Chapter 1 · PDF page 9](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-opportunity-cost`

---

### 940. How can differences in resource abundance shape trade?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Countries can export goods using relatively abundant factors intensively and import goods requiring relatively scarce factors.

**Intuition:** Trade indirectly exchanges the services of productive resources.

</details>

Sources: [Chapter 1 · PDF page 10](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-abundant-resources`

---

### 941. How can specialization lower production costs?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Producing at a larger scale can spread fixed costs or improve efficiency, allowing gains beyond differences in resources or productivity.

**Intuition:** A larger market can support more efficient production.

</details>

Sources: [Chapter 1 · PDF page 10](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-scale`

---

### 942. Why are international borrowing and lending a form of trade?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They exchange resources available now for claims on resources available later.

**Intuition:** Finance moves purchasing power through time.

</details>

Sources: [Chapter 1 · PDF page 10](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-intertemporal-trade`

---

### 943. If a country gains overall from trade, must every resident gain?

**International Finance · Gains from trade · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Owners of resources used intensively in import-competing industries can lose even when aggregate gains are positive.

**Intuition:** National gains and individual gains are different claims.

</details>

Sources: [Chapter 1 · PDF page 11](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=11)

Card ID: `ub-if-distribution`

---

### 944. What does the pattern of trade describe?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Who sells which goods and services to whom. Productivity, climate, and relative factor supplies help explain that pattern.

**Intuition:** Trade composition reflects differences in production possibilities.

</details>

Sources: [Chapter 1 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-trade-pattern`

---

### 945. How does a tariff differ from a quota?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A tariff taxes trade; a quota limits its quantity. Both can restrict trade but use different policy instruments.

**Intuition:** A price wedge and a quantity ceiling are not the same mechanism.

</details>

Sources: [Chapter 1 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=13)

Card ID: `ub-if-tariff`

---

### 946. What is an export subsidy?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A payment encouraging producers to sell abroad, rather than a tax paid on imports.

**Intuition:** Identify who receives the policy payment.

</details>

Sources: [Chapter 1 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=13)

Card ID: `ub-if-export-subsidy`

---

### 947. Can trade be restricted without a tariff or quota?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. Product rules or other regulations can exclude foreign goods while permitting domestic substitutes.

**Intuition:** A barrier's effect can matter more than its label.

</details>

Sources: [Chapter 1 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=13)

Card ID: `ub-if-regulatory-barrier`

---

### 948. Why consider foreign retaliation when evaluating a trade restriction?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Other governments may respond with their own restrictions, reducing export opportunities and changing the original policy's costs and benefits.

**Intuition:** Policy choices can provoke responses abroad.

</details>

Sources: [Chapter 1 · PDF page 14](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=14)

Card ID: `ub-if-retaliation`

---

### 949. Why might trade policy differ from a policy maximizing national welfare?

**International Finance · Trade patterns and policy · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Organized groups can favor policies benefiting themselves even if the economy as a whole loses.

**Intuition:** Concentrated benefits can outweigh diffuse costs politically.

</details>

Sources: [Chapter 1 · PDF page 14](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=14)

Card ID: `ub-if-special-interests`

---

### 950. How can international asset trade reduce income risk?

**International Finance · International financial links · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Holding assets whose payoffs do not move together can reduce portfolio income variability. It does not eliminate every risk.

**Intuition:** Different sources of income can offset one another.

</details>

Sources: [Chapter 1 · PDF page 15](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=15)

Card ID: `ub-if-diversification`

---

### 951. Why do exchange rates matter for trade prices?

**International Finance · International financial links · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They translate foreign prices into domestic currency and domestic prices into foreign currency.

**Intuition:** The currency conversion changes affordability across borders.

</details>

Sources: [Chapter 1 · PDF page 17](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-exchange-rate-role`

---

### 952. How does a floating exchange rate differ from a fixed one?

**International Finance · International financial links · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A floating rate can change with market conditions; a fixed regime aims to maintain a specified rate or parity through policy.

**Intuition:** The exchange-rate regime affects policy constraints.

</details>

Sources: [Chapter 1 · PDF page 17](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-fixed-floating`

---

### 953. Why can international policy coordination be useful?

**International Finance · International financial links · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One country's policies can affect other countries through trade and financial markets. Coordination can account for these spillovers.

**Intuition:** Integrated economies are not isolated policy laboratories.

</details>

Sources: [Chapter 1 · PDF page 18](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=18)

Card ID: `ub-if-coordination`

---

### 954. What extra risks arise in international capital markets?

**International Finance · International financial links · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exchange-rate changes can alter repayments measured in the lender's currency, and sovereign borrowers can default. Foreign-investment rules also affect transactions.

**Intuition:** A promised foreign-currency payoff has more than one source of uncertainty.

</details>

Sources: [Chapter 1 · PDF page 19](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=19)

Card ID: `ub-if-capital-risk`

---

### 955. Why do production, expenditure, and income have equal aggregate values?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Spending on produced goods and services becomes income to the factors and firms producing them. They are different ways to count the same activity.

**Intuition:** Do not add the three measures together.

</details>

Sources: [Chapter 2 · PDF page 3](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=3)

Card ID: `ub-if-income-output-expenditure`

---

### 956. What does GNP measure?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The value of final goods and services produced by a nation's factors of production during a period, including their production abroad.

**Intuition:** GNP follows the national ownership of productive factors.

</details>

Sources: [Chapter 2 · PDF page 4](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=4)

Card ID: `ub-if-gnp`

---

### 957. What does GDP measure?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The value of final goods and services produced within a country's borders during a period, regardless of factor ownership.

**Intuition:** GDP follows the location of production.

</details>

Sources: [Chapter 2 · PDF page 8](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=8)

Card ID: `ub-if-gdp`

---

### 958. How do net foreign factor receipts connect GNP and GDP?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

GNP \(=\) GDP + factor income received from abroad − factor income paid abroad.

**Intuition:** Location and ownership differ through cross-border factor income.

</details>

Sources: [Chapter 2 · PDF page 8](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=8); [Homework Chapter 2 · Q2 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1)

Card ID: `ub-if-gnp-gdp`

---

### 959. How are profits from a Spanish factory owned by British residents classified?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The factory's production contributes to Spain's GDP. Its British-owned factor income contributes to Britain's GNP rather than Britain's GDP.

**Intuition:** Where production occurs is distinct from who earns its income.

</details>

Sources: [Chapter 2 · PDF page 8](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=8); [Homework Chapter 2 · Q3 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1)

Card ID: `ub-if-factory`

---

### 960. Why count final output rather than repeatedly counting intermediate inputs?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The final output's value already incorporates the intermediate inputs. Counting both in full would double-count production.

**Intuition:** Value added and final expenditure avoid repeated counting.

</details>

Sources: [Chapter 2 · PDF page 4](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=4)

Card ID: `ub-if-final-goods`

---

### 961. What are the four expenditure components in \(Y=C+I+G+CA\)?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Consumption, domestic investment, government purchases, and the current account balance under the chapter's simplified accounting conventions.

**Intuition:** Identify how national output is used.

</details>

Sources: [Chapter 2 · PDF page 5](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=5); [Homework Chapter 2 · Q1 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1)

Card ID: `ub-if-four-uses`

---

### 962. Does buying an existing stock count as investment in national income accounting?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Here investment means additions to productive capital and inventories, not trading an existing financial claim.

**Intuition:** Economic investment and portfolio investment use the same word differently.

</details>

Sources: [Chapter 2 · PDF page 5](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=5)

Card ID: `ub-if-investment-definition`

---

### 963. Why do firms' additions to inventories count as investment?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They are produced goods held for future sale or use rather than current consumption.

**Intuition:** Unsold production is still production.

</details>

Sources: [Chapter 2 · PDF page 5](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=5); [Homework Chapter 2 · Q5 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1)

Card ID: `ub-if-inventory`

---

### 964. Why subtract capital depreciation when moving from gross to net income?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Depreciation represents capital used up during production, so not all gross output is available without reducing the capital stock.

**Intuition:** Gross measures include replacement of worn-out capital.

</details>

Sources: [Chapter 2 · PDF page 7](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=7)

Card ID: `ub-if-depreciation`

---

### 965. How does a unilateral transfer differ from payment for production?

**International Finance · National income accounting · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It transfers purchasing power without buying a good, service, or asset in return. It affects disposable resources and the current account but is not newly produced output.

**Intuition:** A gift is a transfer of resources, not extra production.

</details>

Sources: [Chapter 2 · PDF page 7](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=7); [Homework Chapter 2 · Q12 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-transfers`

---

### 966. What is domestic absorption?

**International Finance · Current account and absorption · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

C+I+G: expenditure by domestic consumers, firms, and government on goods and services.

**Intuition:** Absorption measures spending at home, not just domestic production.

</details>

Sources: [Chapter 2 · PDF page 9](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-absorption`

---

### 967. How does the current account relate to income and absorption?

**International Finance · Current account and absorption · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(CA=Y-(C+I+G)\) in the chapter's income identity. A surplus means income exceeds absorption; a deficit means absorption exceeds income.

**Intuition:** The current account records the gap between earning and spending.

</details>

Sources: [Chapter 2 · PDF page 10](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=10); [Homework Chapter 2 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-ca-absorption`

---

### 968. Is the full current account always just exports minus imports of goods?

**International Finance · Current account and absorption · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It also includes services, net primary income, and net current transfers. The chapter's simple EX−IM notation suppresses or groups these adjustments.

**Intuition:** Do not confuse a goods trade balance with the full current account.

</details>

Sources: [Chapter 2 · PDF page 22](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=22)

Card ID: `ub-if-ca-vs-trade`

---

### 969. How can a country finance a current account deficit?

**International Finance · Current account and absorption · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

By increasing liabilities to foreigners or reducing previously accumulated foreign assets, ignoring capital transfers and valuation effects.

**Intuition:** Spending beyond income uses external financing or existing wealth.

</details>

Sources: [Chapter 2 · PDF page 10](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=10); [Homework Chapter 2 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-deficit-finance`

---

### 970. Does a current account deficit exactly equal the fall in measured net foreign wealth?

**International Finance · Current account and absorption · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Not generally. It contributes to the change, but asset-price changes, exchange-rate revaluations, capital transfers, and other adjustments also affect the stock.

**Intuition:** A flow does not fully explain a revalued asset stock.

</details>

Sources: [Chapter 2 · PDF page 38](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=38); [Homework Chapter 2 · Q4 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1); [Homework Chapter 2 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-wealth-caveat`

---

### 971. How is national saving defined in the chapter?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S=Y-C-G\): income not used for consumption or government purchases.

**Intuition:** Saving leaves resources available for investment or net foreign lending.

</details>

Sources: [Chapter 2 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-national-saving`

---

### 972. How do saving, investment, and the current account connect?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S=I+CA\), so \(CA=S-I\). Saving can fund domestic investment or a net acquisition of foreign claims.

**Intuition:** An open economy has two destinations for saving.

</details>

Sources: [Chapter 2 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=12); [Homework Chapter 2 · Q11 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-saving-identity`

---

### 973. Why does national saving equal investment in a closed economy?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Without cross-border transactions, \(CA=0\), so the identity \(S=I+CA\) reduces to \(S=I\).

**Intuition:** Closing the economy removes net foreign lending.

</details>

Sources: [Chapter 2 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=12); [Homework Chapter 2 · Q6 · PDF page 1](../courses/ubuffalo/international-finance/CH2.pdf#page=1); [Homework Chapter 2 · Q11 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-closed-economy`

---

### 974. If domestic investment exceeds national saving, what sign does CA have?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Negative: \(CA=S-I<0\). The investment gap is financed by net external borrowing or foreign-asset reduction.

**Intuition:** Domestic investment need not wait for equal domestic saving.

</details>

Sources: [Chapter 2 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-saving-deficit`

---

### 975. How do you calculate private saving from income, taxes, and consumption?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S^{p}=Y-T-C\), where T is net taxes and Y−T is disposable income.

**Intuition:** Private saving is what remains after taxes and consumption.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-private-saving`

---

### 976. What is government saving?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S^{g}=T-G\). A budget deficit, \(G>T\), is negative government saving.

**Intuition:** A budget deficit absorbs part of national saving.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-government-saving`

---

### 977. Why does \(S^{p}+S^{g}\) equal national saving?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Adding Y−T−C and T−G cancels taxes, leaving Y−C−G.

**Intuition:** Taxes redistribute between sectors before they affect total saving through behavior.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-saving-sum`

---

### 978. How can private saving be written using I, CA, and the budget deficit?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S^{p}=I+CA+(G-T)\). Rearranging gives \(CA=S^{p}-I-(G-T)\).

**Intuition:** The budget deficit competes with investment and foreign lending for private saving.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q8 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-private-rearrange`

---

### 979. Must a larger government deficit cause an equal current account deterioration?

**International Finance · Saving and investment · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Only if private saving and investment stay fixed. The accounting identity alone does not say how those behaviors respond.

**Intuition:** An identity is not a complete causal model.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-twin-deficits`

---

### 980. How many entries does an international transaction create in double-entry bookkeeping?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Two equal-value entries: one credit and one debit, possibly within the same account.

**Intuition:** The payment side balances the resource or asset side.

</details>

Sources: [Chapter 2 · PDF page 15](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=15); [Homework Chapter 2 · Q13 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3); [Homework Chapter 2 · Q18 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-double-entry`

---

### 981. What distinguishes the current, financial, and capital accounts?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The current account records goods, services, income, and current transfers. The financial account records financial asset transactions. The capital account records capital transfers and certain nonproduced nonfinancial assets.

**Intuition:** Classify the transaction before assigning its sign.

</details>

Sources: [Chapter 2 · PDF page 16](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-three-accounts`

---

### 982. What financial-account sign convention do these slides use?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Net financial inflows are positive: sales of domestic assets to foreigners minus domestic purchases of foreign assets. Under it, \(CA+KA+FA=0\).

**Intuition:** State the sign convention before using an identity.

</details>

Sources: [Chapter 2 · PDF page 24](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=24)

Card ID: `ub-if-sign-convention`

---

### 983. Why is a resident's purchase of a foreign asset a financial-account debit in the slides?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is a financial outflow: the resident gives up funds to acquire a claim on a foreign entity.

**Intuition:** Buying a foreign claim sends financing abroad.

</details>

Sources: [Chapter 2 · PDF page 24](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=24)

Card ID: `ub-if-asset-purchase`

---

### 984. Why is selling a domestic asset to a foreigner a financial-account credit?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It brings financing into the domestic economy and increases foreigners' claims on it.

**Intuition:** An inflow creates a foreign-held claim, not free income.

</details>

Sources: [Chapter 2 · PDF page 24](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=24)

Card ID: `ub-if-asset-sale`

---

### 985. A U.S. resident imports a $1,000 machine and the seller keeps a U.S. bank deposit. What are the entries?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A $1,000 current-account debit for the goods import and a $1,000 financial-account credit for the foreign-held U.S. deposit.

**Intuition:** The imported good and the payment claim balance.

</details>

Sources: [Chapter 2 · PDF page 17](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-import-entry`

---

### 986. How is a U.S. resident's meal in France paid by credit card recorded?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A current-account debit for a U.S. service import and an offsetting financial credit for the payment claim, using the slides' convention.

**Intuition:** Tourism purchases count as international trade in services.

</details>

Sources: [Chapter 2 · PDF page 18](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=18); [Homework Chapter 2 · Q16 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-travel-entry`

---

### 987. Can both entries for one transaction be in the financial account?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A U.S. resident buying a foreign share creates an asset-purchase debit; a matching increase in the foreign seller's U.S. deposit creates a credit.

**Intuition:** No goods trade is required for a cross-border financial transaction.

</details>

Sources: [Chapter 2 · PDF page 19](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=19); [Homework Chapter 2 · Q15 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-stock-entry`

---

### 988. How do the slides record a U.S. bank forgiving foreign debt?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A capital-account debit for the transfer and a financial-account credit for reducing the bank's claim on the foreign borrower.

**Intuition:** Forgiveness removes an asset and transfers wealth.

</details>

Sources: [Chapter 2 · PDF page 20](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=20)

Card ID: `ub-if-debt-forgiveness`

---

### 989. If \(CA=-40\) and \(KA=5\), what is FA under the slides' net-inflow convention?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(FA=35\), since \(-40+5+35=0\).

**Intuition:** Account signs must close the same identity.

</details>

Sources: [Chapter 2 · PDF page 21](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=21)

Card ID: `ub-if-balance-identity`

---

### 990. Why can published balance-of-payments data need a statistical discrepancy?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Different data sources have timing, coverage, and measurement errors even though the underlying double-entry identity balances.

**Intuition:** An accounting identity does not make measurement perfect.

</details>

Sources: [Chapter 2 · PDF page 26](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=26); [Homework Chapter 2 · Q13 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-discrepancy`

---

### 991. Why should all countries' current accounts sum to zero in principle?

**International Finance · Balance of payments bookkeeping · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Each country's payment is another country's receipt. A nonzero measured world total points to inconsistent measurement rather than trade with an outside planet.

**Intuition:** Global credits and debits should match.

</details>

Sources: [Chapter 2 · PDF page 30](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-world-ca`

---

### 992. What is official foreign exchange intervention?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A central bank's purchase or sale of international reserve assets in asset markets. Such transactions can also inject or withdraw domestic money.

**Intuition:** Reserve transactions connect exchange markets with monetary conditions.

</details>

Sources: [Chapter 2 · PDF page 27](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=27)

Card ID: `ub-if-intervention`

---

### 993. What counts as an official international reserve asset in the slides?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Foreign assets held by monetary authorities, including foreign currency, government bonds, gold, and IMF-related reserve assets.

**Intuition:** Reserves provide a buffer for external payments and instability.

</details>

Sources: [Chapter 2 · PDF page 28](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=28)

Card ID: `ub-if-reserve-assets`

---

### 994. What is the official settlements balance under the slides' convention?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

CA+KA+nonreserve financial flows+statistical discrepancy. It is the negative of the balancing net official reserve-related financial flow.

**Intuition:** The overall accounts balance even when the official settlements balance is nonzero.

</details>

Sources: [Chapter 2 · PDF page 29](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=29); [Homework Chapter 2 · Q13 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3); [Homework Chapter 2 · Q14 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-settlements`

---

### 995. What may a negative official settlements balance indicate?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Reserve depletion or increased liabilities to foreign official institutions can finance it. It does not mean double-entry bookkeeping has failed.

**Intuition:** Official financing fills the remaining external gap.

</details>

Sources: [Chapter 2 · PDF page 29](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=29)

Card ID: `ub-if-settlements-deficit`

---

### 996. How is a country's net foreign wealth calculated?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Foreign assets owned by residents minus domestic liabilities owed to foreigners, valued at the relevant date.

**Intuition:** Large foreign assets do not imply positive net wealth.

</details>

Sources: [Chapter 2 · PDF page 38](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-net-foreign-wealth`

---

### 997. How can dollar depreciation improve U.S. net foreign wealth in the slides' example?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Foreign-currency assets rise in dollar value while dollar-denominated liabilities do not change from that currency movement alone.

**Intuition:** The currencies of assets and liabilities determine valuation exposure.

</details>

Sources: [Chapter 2 · PDF page 38](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-valuation-dollar`

---

### 998. How do you reconcile beginning and ending international investment positions?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Add financial transactions, asset-price changes, exchange-rate changes, and other volume or valuation adjustments to the opening position.

**Intuition:** External wealth changes through both transactions and revaluation.

</details>

Sources: [Chapter 2 · PDF page 39](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=39)

Card ID: `ub-if-stock-flow-reconcile`

---

### 999. Why can the international investment position contain an 'other changes' category?

**International Finance · Reserves and external wealth · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Survey coverage, reporting-panel changes, unallocated valuation effects, and other revisions can alter measured positions without a recorded new transaction.

**Intuition:** Measurement revisions need not represent fresh borrowing.

</details>

Sources: [Chapter 2 · PDF page 46](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=46)

Card ID: `ub-if-other-adjustments`

---

### 1000. What does profit shifting do to measured production in a low-tax location?

**International Finance · GDP and welfare · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Booking multinational income or intellectual property there can raise measured GDP without a matching increase in local labor or living standards.

**Intuition:** A GDP jump can reflect accounting location rather than broad prosperity.

</details>

Sources: [Chapter 2 · PDF page 34](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=34); [Homework Chapter 2 · Q17 · PDF page 3](../courses/ubuffalo/international-finance/CH2.pdf#page=3)

Card ID: `ub-if-profit-shifting`

---

### 1001. What is the lesson of the slides' 2015 Irish GDP jump?

**International Finance · GDP and welfare · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its unusually large rise partly reflected multinational accounting and intellectual-property relocation, so GDP growth alone was a poor guide to residents' welfare.

**Intuition:** Treat this as a historical illustration, not a current tax-rate claim.

</details>

Sources: [Chapter 2 · PDF page 34](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-ireland-example`

---

### 1002. What does \(E=1.20\) dollars per euro mean?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

One euro costs 1.20 dollars. Multiplying a euro amount by E converts it to dollars; dividing a dollar amount by E converts it to euros.

**Intuition:** Carry currency units through every calculation.

</details>

Sources: [Chapter 3 · PDF page 3](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=3)

Card ID: `ub-if-quote-units`

---

### 1003. If one euro costs $1.25, how many euros does one dollar buy?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{1}{1.25}=0.80\) euros per dollar.

**Intuition:** Reversing a quote requires taking its reciprocal.

</details>

Sources: [Chapter 3 · PDF page 3](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=3)

Card ID: `ub-if-reciprocal`

---

### 1004. If E in dollars per euro rises, which currency depreciates?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The dollar depreciates and the euro appreciates: more dollars are required to buy one euro.

**Intuition:** A higher quoted number does not always mean a stronger domestic currency.

</details>

Sources: [Chapter 3 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-dollar-depreciation`

---

### 1005. If E falls from $1.00/€ to $0.90/€, what happens to the dollar?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It appreciates against the euro because each dollar now buys more euros.

**Intuition:** Interpret the quote's units before naming the movement.

</details>

Sources: [Chapter 3 · PDF page 10](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-dollar-appreciation`

---

### 1006. With a fixed euro sticker price, how does dollar depreciation change a U.S. import's dollar price?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It increases the dollar price because \(P_{\mathrm{USD}}=E\times P_{\mathrm{EUR}}\) and E rises.

**Intuition:** Exchange-rate pass-through here assumes the foreign sticker price is unchanged.

</details>

Sources: [Chapter 3 · PDF page 11](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=11); [Homework Chapter 3 · Q3 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1); [Homework Chapter 3 · Q4 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-import-price`

---

### 1007. With a fixed dollar sticker price, how does dollar appreciation affect a U.S. export's euro price?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises the euro price: \(P_{\mathrm{EUR}}=P_{\mathrm{USD}}/E\) and dollar appreciation means E falls.

**Intuition:** A stronger currency makes unchanged domestic-price exports costlier abroad.

</details>

Sources: [Chapter 3 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=12); [Homework Chapter 3 · Q3 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-export-price`

---

### 1008. How do you express a British sweater's price in pairs of American jeans?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply its pound price by dollars per pound, then divide by the dollar price of one pair of jeans.

**Intuition:** Convert to a common currency before taking a relative price.

</details>

Sources: [Chapter 3 · PDF page 13](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=13)

Card ID: `ub-if-relative-price`

---

### 1009. Does depreciation mechanically guarantee an immediate export-volume increase?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It changes relative prices under the model's assumptions; quantity responses also depend on demand, contracts, and adjustment timing.

**Intuition:** Price effects and quantity effects are not identical claims.

</details>

Sources: [Chapter 3 · PDF page 13](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=13); [Homework Chapter 3 · Q4 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-quantity-caveat`

---

### 1010. Who participates in foreign exchange markets?

**International Finance · Foreign exchange markets · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Banks, nonfinancial corporations, nonbank financial institutions, and central banks. Their motives include trade payments, investment, and official reserve management.

**Intuition:** The market is larger than importers exchanging travel money.

</details>

Sources: [Chapter 3 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-participants`

---

### 1011. Why do banks play a central role in FX trading?

**International Finance · Foreign exchange markets · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They buy and sell currency deposits for themselves and clients and trade extensively with other banks.

**Intuition:** Many customer transactions are connected through the interbank market.

</details>

Sources: [Chapter 3 · PDF page 17](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-bank-role`

---

### 1012. How does arbitrage reduce exchange-rate differences across locations?

**International Finance · Foreign exchange markets · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Traders buy currency where it is cheaper and sell where it is dearer, raising demand in the cheap market and supply in the expensive one.

**Intuition:** A tradable price gap invites trades that narrow it.

</details>

Sources: [Chapter 3 · PDF page 18](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=18); [Homework Chapter 3 · Q5 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-arbitrage`

---

### 1013. Is a tiny quoted FX price difference automatically an exploitable profit?

**International Finance · Foreign exchange markets · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Fees, bid-ask spreads, timing, and execution costs can exceed the gross gap.

**Intuition:** Compare achievable net prices, not just displayed midpoint quotes.

</details>

Sources: [Chapter 3 · PDF page 18](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=18)

Card ID: `ub-if-arbitrage-costs`

---

### 1014. How does a forward exchange contract differ from a spot transaction?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A spot transaction exchanges currency promptly. A forward fixes the rate now for exchange at a specified future date.

**Intuition:** Agreement date and delivery date are different concepts.

</details>

Sources: [Chapter 3 · PDF page 19](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=19)

Card ID: `ub-if-spot-forward`

---

### 1015. Must spot and forward rates be equal because they move together?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. They concern different delivery dates; interest-rate differentials can create a forward premium or discount.

**Intuition:** High correlation is not numerical equality.

</details>

Sources: [Chapter 3 · PDF page 20](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=20); [Homework Chapter 3 · Q12 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-spot-forward-equal`

---

### 1016. What are the two legs of the FX swap described in the slides?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A spot sale of one currency and a forward repurchase of it.

**Intuition:** A swap temporarily changes the currency held.

</details>

Sources: [Chapter 3 · PDF page 21](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=21); [Homework Chapter 3 · Q6 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-fx-swap`

---

### 1017. Why might a firm receiving dollars use an FX swap if it needs dollars again in three months?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can exchange dollars into another currency now while arranging the reverse exchange for the future dollar payment.

**Intuition:** Match temporary investment needs with known future currency needs.

</details>

Sources: [Chapter 3 · PDF page 21](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=21)

Card ID: `ub-if-swap-use`

---

### 1018. What distinguishes the futures contracts described here from customized forwards?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Futures use standardized contract amounts and delivery dates and can be traded in organized markets. Forwards are negotiated between parties.

**Intuition:** Standardization supports trading and clearing.

</details>

Sources: [Chapter 3 · PDF page 22](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=22); [Homework Chapter 3 · Q6 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-futures-forward`

---

### 1019. What is the dollar notional of ¥12,500,000 at $0.006400 per yen?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\text{JPY}12,500,000\times \text{USD}0.006400/\text{JPY}=\text{USD}80,000\).

**Intuition:** Notional measures the position's scale, not the required collateral.

</details>

Sources: [Chapter 3 · PDF page 23](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=23)

Card ID: `ub-if-futures-notional`

---

### 1020. How do you find the dollar value of a futures price tick?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Multiply the contract's currency amount by the price tick. Here \(\text{JPY}12,500,000\times \text{USD}0.0000005/\text{JPY}=\text{USD}6.25\).

**Intuition:** A small quote movement is multiplied by the full contract size.

</details>

Sources: [Chapter 3 · PDF page 23](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=23)

Card ID: `ub-if-tick-value`

---

### 1021. How does initial margin differ from maintenance margin?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Initial margin is collateral required to open a position; maintenance margin is the minimum account equity required to keep it open under the stated rules.

**Intuition:** Margin is not the contract's purchase price.

</details>

Sources: [Chapter 3 · PDF page 24](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=24)

Card ID: `ub-if-margin`

---

### 1022. Why can a modest futures price change cause a large percentage change in posted collateral?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Profit and loss depend on the full notional position, which can be much larger than the margin deposit.

**Intuition:** Leverage magnifies losses as well as gains relative to collateral.

</details>

Sources: [Chapter 3 · PDF page 24](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=24)

Card ID: `ub-if-margin-leverage`

---

### 1023. A long yen contract rises from 0.006400 to 0.006450 $/¥. What is gross profit on ¥12.5 million?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The price gain is 0.000050 $/¥. Multiplying by ¥12,500,000 gives $625, or 100 ticks at $6.25.

**Intuition:** A long currency future benefits when that currency's quoted price rises.

</details>

Sources: [Chapter 3 · PDF page 26](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=26)

Card ID: `ub-if-futures-profit`

---

### 1024. With $625 gross futures profit and $2 fees at entry and exit, what is net profit?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\text{USD}625-\text{USD}2-\text{USD}2=\text{USD}621\) in the slide's example.

**Intuition:** Round-trip costs reduce the amount actually earned.

</details>

Sources: [Chapter 3 · PDF page 27](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=27)

Card ID: `ub-if-net-profit`

---

### 1025. What separates buying an option from entering a forward obligation?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The option holder has a right, not an obligation, to transact under its terms. The right generally costs a premium.

**Intuition:** Flexibility is not the same as a free guaranteed payoff.

</details>

Sources: [Chapter 3 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=28); [Homework Chapter 3 · Q6 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-option-obligation`

---

### 1026. What is the difference between a currency call and put?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A call gives its holder the right to buy the specified currency; a put gives the right to sell it at the strike.

**Intuition:** Name the underlying currency before interpreting the option.

</details>

Sources: [Chapter 3 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=28)

Card ID: `ub-if-call-put`

---

### 1027. Can every currency option be exercised at any time before expiry?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. That describes American-style exercise. European-style options are exercised only at expiry; the contract terms matter.

**Intuition:** Do not turn one contract style into a universal definition.

</details>

Sources: [Chapter 3 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=28)

Card ID: `ub-if-option-style`

---

### 1028. How do you calculate a one-period nominal rate of return?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Ending value minus initial value, divided by initial value. A $100 deposit ending at $102 returns 2%.

**Intuition:** Return is a proportional gain, not the final account balance.

</details>

Sources: [Chapter 3 · PDF page 30](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-nominal-return`

---

### 1029. How do you approximate a real return from a nominal return and inflation?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Subtract inflation: \(r\approx R-\pi\). The exact gross real return is \((1+R)/(1+\pi )\).

**Intuition:** Purchasing-power gains can be smaller than money gains.

</details>

Sources: [Chapter 3 · PDF page 31](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=31)

Card ID: `ub-if-real-return`

---

### 1030. Why do nominal and real returns coincide in the chapter's fixed-price short run?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Inflation is zero over the modeled period, so adjusting the nominal return for inflation makes no change.

**Intuition:** The equality comes from an assumption about prices.

</details>

Sources: [Chapter 3 · PDF page 32](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=32)

Card ID: `ub-if-fixed-prices`

---

### 1031. Which three attributes guide asset demand?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Expected return, risk, and liquidity.

**Intuition:** A higher promised interest rate is not the only consideration.

</details>

Sources: [Chapter 3 · PDF page 33](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=33); [Homework Chapter 4 · Q2 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-asset-demand`

---

### 1032. Why does the basic currency-deposit model compare expected returns alone?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It treats deposits' risk and liquidity as sufficiently similar. This is a simplifying assumption, not a universal property of real deposits.

**Intuition:** Know what the model holds constant.

</details>

Sources: [Chapter 3 · PDF page 34](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-equal-risk-assumption`

---

### 1033. What determines a foreign deposit's return in domestic currency?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Its foreign-currency interest rate and the exchange-rate change between purchase and conversion back.

**Intuition:** Currency gains can reinforce or offset interest earnings.

</details>

Sources: [Chapter 3 · PDF page 35](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=35); [Homework Chapter 3 · Q11 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-two-return-components`

---

### 1034. How do you compute the expected dollar payoff from investing one dollar in euros?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Buy \(1/E\) euros, earn (1+R€)/E euros, then convert at expected future rate \(E^{e}\) to get \((1+R_{\mathrm{EUR}})E^{e}/E\) dollars.

**Intuition:** Follow the currency conversion at both ends.

</details>

Sources: [Chapter 3 · PDF page 38](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-conversion-steps`

---

### 1035. What is the exact expected dollar return on a euro deposit in the chapter's one-period setup?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(R_{\mathrm{EUR},\mathrm{USD}}=(1+R_{\mathrm{EUR}})\frac{E^e}{E}-1\), with E and \(E^{e}\) both quoted in dollars per euro.

**Intuition:** The interest gain also experiences the currency conversion.

</details>

Sources: [Chapter 3 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=40)

Card ID: `ub-if-exact-foreign-return`

---

### 1036. What approximation does the chapter use for a euro deposit's expected dollar return?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(R_{\mathrm{EUR}}+\frac{E^e-E}{E}\). It drops the product of the interest rate and the expected exchange-rate change.

**Intuition:** The approximation works best when both rates are small.

</details>

Sources: [Chapter 3 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=40)

Card ID: `ub-if-approx-foreign-return`

---

### 1037. Why can exact and approximate foreign returns disagree?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The exact return includes \(R_{\mathrm{EUR}}\times [(E^{e}-E)/E]\), which the additive approximation omits.

**Intuition:** A small omitted product is still nonzero.

</details>

Sources: [Chapter 3 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=40)

Card ID: `ub-if-cross-term`

---

### 1038. Does a 4% euro rate beat a 2% dollar rate when the euro is expected to lose 3% against the dollar?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. The euro deposit's exact dollar return is \(1.04\times 0.97-1=0.88\%\), below 2%.

**Intuition:** A currency loss can outweigh an interest advantage.

</details>

Sources: [Chapter 3 · PDF page 39](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=39)

Card ID: `ub-if-higher-interest-trap`

---

### 1039. What does \(R_{\mathrm{USD}}-R_{\mathrm{EUR}}-\frac{E^e-E}{E}\) measure?

**International Finance · Currency deposit returns · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The approximate expected dollar return advantage of dollar deposits over euro deposits. A positive value favors dollars under the model's assumptions.

**Intuition:** Compare both alternatives in the same currency.

</details>

Sources: [Chapter 3 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-return-gap`

---

### 1040. What is the chapter's approximate uncovered interest parity condition?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(R_{\mathrm{USD}}=R_{\mathrm{EUR}}+\frac{E^e-E}{E}\). Deposits offer equal expected returns measured in dollars under the model's risk and liquidity assumptions.

**Intuition:** Uncovered means the future exchange rate is not locked in.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2); [Homework Chapter 3 · Q16 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-uip`

---

### 1041. Does uncovered parity eliminate exchange-rate risk?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It equates expected returns under assumptions; the realized future spot rate can differ from its expected value.

**Intuition:** Expected equality is not a guaranteed risk-free payoff.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44)

Card ID: `ub-if-uip-risk`

---

### 1042. If dollar deposits initially offer higher expected returns, how does E adjust in the model?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Demand shifts toward dollars, so E falls: the dollar appreciates. At fixed \(E^{e}\), cheaper euros now offer greater expected future appreciation until parity is restored.

**Intuition:** Today's price adjusts to close the expected-return gap.

</details>

Sources: [Chapter 3 · PDF page 45](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=45); [Homework Chapter 3 · Q16 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-dollar-excess-return`

---

### 1043. At fixed \(E^{e}\) and R€, why does a higher current E lower expected euro returns?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It costs more dollars to acquire the same future euro payoff, reducing the percentage return.

**Intuition:** Paying more today for the same expected payoff lowers its yield.

</details>

Sources: [Chapter 3 · PDF page 46](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=46)

Card ID: `ub-if-current-depreciation`

---

### 1044. At fixed \(E^{e}\) and R€, how does dollar appreciation today affect expected euro returns?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A lower E makes euros cheaper today and raises their expected dollar return.

**Intuition:** Current appreciation and expected future appreciation have different effects.

</details>

Sources: [Chapter 3 · PDF page 47](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=47)

Card ID: `ub-if-current-appreciation`

---

### 1045. What identifies equilibrium in the chapter's FX return diagram?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The intersection of the vertical dollar-return line and the downward-sloping expected euro-return curve, with E on the vertical axis.

**Intuition:** Compare expected returns at each possible spot rate.

</details>

Sources: [Chapter 3 · PDF page 50](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=50)

Card ID: `ub-if-fx-graph`

---

### 1046. At fixed foreign interest and \(E^{e}\), what does a higher dollar interest rate do to E?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It lowers E, so the dollar appreciates.

**Intuition:** The condition on expected values is essential.

</details>

Sources: [Chapter 3 · PDF page 51](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=51); [Homework Chapter 3 · Q14 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3); [Homework Chapter 3 · Q18 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-dollar-rate-rise`

---

### 1047. At fixed dollar interest and \(E^{e}\), what does a higher euro interest rate do to E?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises E, so the dollar depreciates and the euro appreciates.

**Intuition:** A higher foreign return increases demand for foreign deposits.

</details>

Sources: [Chapter 3 · PDF page 51](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=51); [Homework Chapter 3 · Q19 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-euro-rate-rise`

---

### 1048. Why can expected future euro appreciation strengthen the euro immediately?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises expected dollar returns on euro assets, increasing demand for euros now. E rises to restore parity.

**Intuition:** Asset prices respond to expected future payoffs today.

</details>

Sources: [Chapter 3 · PDF page 54](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=54)

Card ID: `ub-if-expectations-now`

---

### 1049. How do you solve approximate UIP for today's E?

**International Finance · Interest parity and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E=\frac{E^e}{1+R_{\mathrm{USD}}-R_{\mathrm{EUR}}}\), assuming the denominator is positive.

**Intuition:** A higher expected future quote raises today's equilibrium quote.

</details>

Sources: [Chapter 3 · PDF page 54](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=54)

Card ID: `ub-if-uip-solve`

---

### 1050. Why might someone borrow in one currency and invest in another with a higher interest rate?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They seek the interest-rate difference. This carry trade usually leaves exchange-rate risk: depreciation of the investment currency can erase the interest gain.

**Intuition:** The interest spread is only one part of the total return.

</details>

Sources: [Chapter 3 · PDF page 55](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=55); [Homework Chapter 3 · Q15 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-carry-trade`

---

### 1051. Why is a carry trade not a guaranteed profit?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The high-interest currency may depreciate sharply, and financing, liquidity, and risk conditions can change.

**Intuition:** Small regular gains can coexist with rare large losses.

</details>

Sources: [Chapter 3 · PDF page 55](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=55); [Homework Chapter 3 · Q15 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-carry-risk`

---

### 1052. What changes when a foreign deposit is covered with a forward contract?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The investor fixes the future conversion rate F today, replacing uncertain future spot conversion with contracted conversion.

**Intuition:** Covering removes that exchange-rate uncertainty, subject to contract performance.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57)

Card ID: `ub-if-cip`

---

### 1053. What is exact covered interest parity for one matching investment period?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(1+R_{\mathrm{USD}}=(1+R_{\mathrm{EUR}})F/E\), with E and F in dollars per euro.

**Intuition:** Compare two locked-in payoffs for the same initial dollar.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57)

Card ID: `ub-if-cip-exact`

---

### 1054. How is the euro's forward premium against the dollar calculated?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is (F−E)/E for matching spot and forward quotes in dollars per euro, over the contract period.

**Intuition:** The premium compares forward with spot, not with an expected spot rate.

</details>

Sources: [Chapter 3 · PDF page 59](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=59); [Homework Chapter 3 · Q20 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-forward-premium`

---

### 1055. What is the chapter's approximate covered parity relation?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(R_{\mathrm{USD}}\approx R_{\mathrm{EUR}}+\frac{F-E}{E}\). It neglects the interest-times-premium cross-term.

**Intuition:** Label the approximation when doing numerical exercises.

</details>

Sources: [Chapter 3 · PDF page 59](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=59); [Homework Chapter 3 · Q20 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-cip-approx`

---

### 1056. How do you solve exact covered parity for the forward rate?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(F=E\frac{1+R_{\mathrm{USD}}}{1+R_{\mathrm{EUR}}}\). Interest rates must cover the same maturity as the forward.

**Intuition:** A quoted annual rate cannot be mixed blindly with a shorter contract.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57)

Card ID: `ub-if-forward-solve`

---

### 1057. If a covered euro investment pays more dollars than dollar borrowing costs, what is the idealized arbitrage direction?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Borrow dollars, buy euros spot, invest in euros, and sell the euro payoff forward. At maturity, use the locked-in dollars to repay the loan.

**Intuition:** The forward fixes the currency leg of the round trip.

</details>

Sources: [Chapter 3 · PDF page 58](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=58)

Card ID: `ub-if-covered-arbitrage-direction`

---

### 1058. Why can measured covered-parity deviations persist rather than vanish immediately?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Funding costs, balance-sheet constraints, credit risk, and market frictions can prevent cheap unlimited execution. The slides document deviations around and after the financial crisis.

**Intuition:** A textbook arbitrage assumes access and costs that real institutions may not have.

</details>

Sources: [Chapter 3 · PDF page 60](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=60)

Card ID: `ub-if-cip-frictions`

---

### 1059. When does the forward rate equal the expected future spot rate in these models?

**International Finance · Carry trade and covered parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When both covered and uncovered parity hold for comparable deposits and maturities under the stated assumptions. Covered parity alone does not imply \(F=E^{e}\).

**Intuition:** A forward price is not automatically a forecast.

</details>

Sources: [Chapter 3 · PDF page 62](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=62)

Card ID: `ub-if-forward-expectation`

---

### 1060. What makes an asset money in the chapter's model?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It is widely accepted as a means of payment. Currency and spendable checking balances are central examples.

**Intuition:** Money's defining service is payment convenience.

</details>

Sources: [Chapter 4 · PDF page 4](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=4); [Homework Chapter 4 · Q1 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-money`

---

### 1061. Why can different definitions of money give different totals?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Narrow definitions include the most immediately spendable assets; broader definitions include additional liquid substitutes.

**Intuition:** Liquidity is a spectrum, so the boundary is partly conventional.

</details>

Sources: [Chapter 4 · PDF page 6](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=6); [Homework Chapter 4 · Q1 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-narrow-broad`

---

### 1062. What makes an asset liquid?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It can be used for payment or converted into payment funds quickly with little cost.

**Intuition:** Liquidity concerns ease of use, not simply a high resale price.

</details>

Sources: [Chapter 4 · PDF page 5](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=5)

Card ID: `ub-if-liquidity`

---

### 1063. Why hold money if other assets pay more interest?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Money provides payment convenience and avoids the costs of repeatedly converting other assets into spendable funds.

**Intuition:** Liquidity services compensate for forgone interest.

</details>

Sources: [Chapter 4 · PDF page 5](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=5)

Card ID: `ub-if-liquidity-return`

---

### 1064. How does the central bank influence money supply in the chapter?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It directly controls currency issuance and influences deposit creation and other monetary assets through the banking system.

**Intuition:** Control is not identical for every component of broad money.

</details>

Sources: [Chapter 4 · PDF page 7](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=7)

Card ID: `ub-if-central-bank-supply`

---

### 1065. Why can holding money be risky even if its nominal value is fixed?

**International Finance · Money and liquidity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Unexpected inflation reduces the goods and services that the same nominal balance can buy.

**Intuition:** Nominal safety does not guarantee purchasing-power safety.

</details>

Sources: [Chapter 4 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=9); [Homework Chapter 4 · Q3 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-inflation-risk`

---

### 1066. What is the opportunity cost of holding non-interest-bearing money?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The interest or return forgone on alternative assets.

**Intuition:** As alternative yields rise, idle balances become more expensive to hold.

</details>

Sources: [Chapter 4 · PDF page 10](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-opportunity-cost-money`

---

### 1067. At fixed income and prices, how does a higher interest rate affect money demand?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It lowers money demand by increasing the opportunity cost of holding monetary assets.

**Intuition:** The real money-demand curve slopes down in the interest rate.

</details>

Sources: [Chapter 4 · PDF page 10](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=10); [Homework Chapter 4 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2); [Homework Chapter 4 · Q8 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-interest-money-demand`

---

### 1068. At fixed real income and interest, how does a doubling of P affect nominal money demand?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It doubles nominal money demand while real money demand stays unchanged.

**Intuition:** The same real transactions need twice as many currency units.

</details>

Sources: [Chapter 4 · PDF page 10](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=10); [Homework Chapter 4 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-price-money-demand`

---

### 1069. Why does higher real income increase desired money holdings?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Higher production and expenditure create more transactions requiring liquidity.

**Intuition:** More economic activity raises transactions demand.

</details>

Sources: [Chapter 4 · PDF page 11](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=11); [Homework Chapter 4 · Q7 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-income-money-demand`

---

### 1070. What is the aggregate nominal money-demand equation?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(M^d=P L(R,Y)\), where real money demand L falls with R and rises with Y.

**Intuition:** Separate the price scale from desired purchasing power.

</details>

Sources: [Chapter 4 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=12); [Homework Chapter 4 · Q5 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-nominal-demand`

---

### 1071. If the money stock stays fixed but prices double, what happens to purchasing power?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Real money balances \(M/P\) halve. Dividing nominal money by the price level shows how much goods and services that money can buy.

**Intuition:** Dividing by the price level converts currency units into real units.

</details>

Sources: [Chapter 4 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-real-balances`

---

### 1072. How does an income increase differ from an interest-rate decrease in the money-demand graph?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Higher income shifts the entire L(R,Y) curve outward; a lower interest rate moves along a given curve.

**Intuition:** Distinguish a changed determinant from movement along the relationship.

</details>

Sources: [Chapter 4 · PDF page 14](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=14)

Card ID: `ub-if-shift-vs-move`

---

### 1073. What equation determines the equilibrium interest rate at fixed P and Y?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(M^{s}/P=L(R,Y)\). The interest rate adjusts until real money demand equals real supply.

**Intuition:** Equilibrium removes excess demand or supply of money.

</details>

Sources: [Chapter 4 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=16); [Homework Chapter 4 · Q6 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-money-equilibrium`

---

### 1074. Why is the real money-supply line vertical in the chapter's graph?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Given the nominal stock and price level, \(M^{s}/P\) does not depend on the interest rate in this simplified model.

**Intuition:** Verticality is a model assumption about supply.

</details>

Sources: [Chapter 4 · PDF page 19](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=19)

Card ID: `ub-if-supply-vertical`

---

### 1075. What happens when people hold more money than they want at the current interest rate?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They try to buy interest-bearing assets. Bond prices rise and yields fall until holding the supplied money becomes desirable.

**Intuition:** Portfolio rebalancing changes prices; it does not let everyone eliminate money at once.

</details>

Sources: [Chapter 4 · PDF page 17](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-excess-money`

---

### 1076. What happens when people want more money than they currently hold?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They sell nonmonetary assets to obtain liquidity, putting downward pressure on bond prices and upward pressure on interest rates.

**Intuition:** An excess demand for money is an excess supply of other assets.

</details>

Sources: [Chapter 4 · PDF page 18](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=18)

Card ID: `ub-if-money-shortage`

---

### 1077. At fixed P and Y, what does a larger money supply do to the interest rate?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It lowers the equilibrium interest rate, increasing demand for the additional real balances.

**Intuition:** State the fixed-price assumption before applying this result.

</details>

Sources: [Chapter 4 · PDF page 20](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=20); [Homework Chapter 4 · Q4 · PDF page 1](../courses/ubuffalo/international-finance/Ch4.pdf#page=1)

Card ID: `ub-if-supply-interest`

---

### 1078. At fixed real money supply, does higher real income raise or lower the equilibrium interest rate?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises it. Money demand shifts outward, so the rate must rise to offset that increase. Figure 4.5 shows this despite a mistaken caption saying 'reduces'.

**Intuition:** Use the equilibrium condition and graph to resolve the caption error.

</details>

Sources: [Chapter 4 · PDF page 21](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=21)

Card ID: `ub-if-income-interest`

---

### 1079. At fixed nominal money supply and income, what does a higher price level do to the interest rate?

**International Finance · Money-market equilibrium · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It reduces real money supply \(M^{s}/P\) and raises the equilibrium interest rate.

**Intuition:** A price increase can tighten real liquidity without changing nominal money.

</details>

Sources: [Chapter 4 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-price-interest`

---

### 1080. With sticky prices, fixed output, and fixed exchange-rate expected values, how does a domestic monetary expansion affect the currency?

**International Finance · Money and FX in the short run · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It increases real balances, lowers domestic interest, and depreciates the domestic currency.

**Intuition:** Money-market changes feed into expected asset returns.

</details>

Sources: [Chapter 4 · PDF page 25](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=25); [Homework Chapter 4 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2); [Homework Chapter 4 · Q16 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-domestic-expansion`

---

### 1081. Under the same short-run assumptions, what does a domestic monetary contraction do?

**International Finance · Money and FX in the short run · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It reduces real balances, raises domestic interest, and appreciates the domestic currency.

**Intuition:** Reverse the whole causal chain, not only its final step.

</details>

Sources: [Chapter 4 · PDF page 25](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=25); [Homework Chapter 4 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-domestic-contraction`

---

### 1082. What does a temporary European money-supply increase do to the dollar/euro quote in the model?

**International Finance · Money and FX in the short run · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It lowers euro interest and reduces E in dollars per euro: the euro depreciates and the dollar appreciates.

**Intuition:** The foreign monetary expansion changes the foreign-return curve.

</details>

Sources: [Chapter 4 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=28); [Homework Chapter 4 · Q10 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2); [Homework Chapter 4 · Q11 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-foreign-expansion`

---

### 1083. Does the temporary European monetary expansion shift the U.S. money-market equilibrium in this model?

**International Finance · Money and FX in the short run · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. U.S. money supply, prices, and income are held fixed, so the U.S. interest rate is unchanged.

**Intuition:** The FX market can move while the domestic money market stays put.

</details>

Sources: [Chapter 4 · PDF page 27](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=27); [Homework Chapter 4 · Q10 · PDF page 2](../courses/ubuffalo/international-finance/Ch4.pdf#page=2)

Card ID: `ub-if-foreign-us-market`

---

### 1084. Which two conditions must hold in the combined money/FX diagram?

**International Finance · Money and FX in the short run · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Domestic real money supply equals real money demand, and currency deposits offer equal expected returns under UIP.

**Intuition:** One rate links the two equilibrium conditions.

</details>

Sources: [Chapter 4 · PDF page 22](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=22)

Card ID: `ub-if-joint-equilibrium`

---

### 1085. What separates the short run from the long run here?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

In the short run, some prices and wages are sticky. In the long run, they have adjusted and real output reflects productive capacity.

**Intuition:** The distinction is about adjustment, not a fixed calendar duration.

</details>

Sources: [Chapter 4 · PDF page 29](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=29); [Homework Chapter 4 · Q14 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-short-long`

---

### 1086. What determines long-run real output in this framework?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Labor, capital, technology, and other productive resources rather than the nominal quantity of money.

**Intuition:** Printing currency does not itself create productive capacity.

</details>

Sources: [Chapter 4 · PDF page 29](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=29); [Homework Chapter 4 · Q14 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-capacity`

---

### 1087. What is long-run neutrality of a one-time money-level change?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A proportional money increase eventually raises the price level proportionally without changing real output or long-run real interest in the model.

**Intuition:** Distinguish nominal scaling from real resource changes.

</details>

Sources: [Chapter 4 · PDF page 30](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-level-neutrality`

---

### 1088. How can money-market equilibrium determine the long-run price level?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P=M^{s}/L(R,Y)\). With real money demand unchanged, prices scale with nominal money supply.

**Intuition:** Prices adjust to restore desired real balances.

</details>

Sources: [Chapter 4 · PDF page 30](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-price-equilibrium`

---

### 1089. How does the chapter relate inflation to money and real money-demand growth?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Approximately, inflation equals nominal money growth minus real money-demand growth.

**Intuition:** Some new money accommodates growing demand for liquidity rather than higher prices.

</details>

Sources: [Chapter 4 · PDF page 31](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=31)

Card ID: `ub-if-inflation-growth`

---

### 1090. What pattern do the slides' historical money-growth and inflation data illustrate?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Higher sustained money growth tends to accompany higher inflation, though the relationship is not exact in every observation.

**Intuition:** Long-run association does not imply identical short-run timing.

</details>

Sources: [Chapter 4 · PDF page 32](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=32); [Homework Chapter 4 · Q12 · PDF page 3](../courses/ubuffalo/international-finance/Ch4.pdf#page=3)

Card ID: `ub-if-money-data`

---

### 1091. Why can hyperinflation undermine money's usefulness?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Rapid loss of purchasing power makes holding the currency costly and can lead people to avoid using it.

**Intuition:** An asset can lose its payment role when its real value collapses.

</details>

Sources: [Chapter 4 · PDF page 34](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-hyperinflation`

---

### 1092. How can a money expansion eventually put upward pressure on wages and output prices?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Higher spending increases demand for goods and labor. Producers may raise prices or pay higher wages as resources become harder to obtain.

**Intuition:** Sticky prices can respond gradually to demand and cost pressure.

</details>

Sources: [Chapter 4 · PDF page 36](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=36); [Homework Chapter 4 · Q17 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-demand-cost-pressure`

---

### 1093. How can expected inflation influence wages and prices before it is fully realized?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Workers seek compensation for expected purchasing-power loss, and firms expecting higher output prices may agree to higher wages.

**Intuition:** Expectations can affect current price-setting decisions.

</details>

Sources: [Chapter 4 · PDF page 37](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=37); [Homework Chapter 4 · Q17 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-wage-expectations`

---

### 1094. What does much greater exchange-rate volatility than price-level-ratio volatility suggest?

**International Finance · Long-run money and prices · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Financial prices adjust faster than aggregate goods prices, consistent with short-run price stickiness.

**Intuition:** Asset markets can jump while goods prices move slowly.

</details>

Sources: [Chapter 4 · PDF page 38](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-volatility-sticky`

---

### 1095. What is the long-run currency effect of a permanent money-level increase, other things equal?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A proportional depreciation in the quoted domestic price of foreign currency, alongside a proportional domestic price-level rise.

**Intuition:** The eventual nominal change matches the money-level change in the model.

</details>

Sources: [Chapter 4 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-permanent-level-fx`

---

### 1096. Why can a permanent money expansion depreciate the currency more initially than a temporary one?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Besides lowering current interest, it raises the expected future domestic-currency price of foreign currency.

**Intuition:** Permanent policy changes both today's return and tomorrow's expected exchange rate.

</details>

Sources: [Chapter 4 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=40); [Homework Chapter 4 · Q18 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-permanent-vs-temporary`

---

### 1097. What does exchange-rate overshooting mean?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The immediate exchange-rate response exceeds its eventual long-run response, followed by partial reversal.

**Intuition:** Overshooting is about the path, not just a large movement.

</details>

Sources: [Chapter 4 · PDF page 43](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=43)

Card ID: `ub-if-overshooting`

---

### 1098. Why does a temporarily low domestic interest rate require expected currency appreciation under UIP?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The lower interest return must be offset by an expected currency gain. After an expansion, E jumps above its future level so it can be expected to fall.

**Intuition:** The anticipated reversal compensates for the interest disadvantage.

</details>

Sources: [Chapter 4 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=42); [Homework Chapter 4 · Q18 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-overshoot-uip`

---

### 1099. After permanent monetary expansion, how do P, R, and E evolve toward the new long run?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

P rises gradually, real balances decline from their initial jump, R recovers, and E falls from its overshoot while remaining above its original level.

**Intuition:** The currency partially recovers but does not undo the permanent depreciation.

</details>

Sources: [Chapter 4 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=42); [Homework Chapter 4 · Q18 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-adjustment-path`

---

### 1100. Would immediate proportional price adjustment create the same liquidity-driven overshoot?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Real money balances would not temporarily rise, so the temporary interest-rate fall driving that overshoot would disappear.

**Intuition:** Different adjustment speeds are central to overshooting.

</details>

Sources: [Chapter 4 · PDF page 43](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=43); [Homework Chapter 4 · Q15 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-flexible-prices`

---

### 1101. What is the mirror-image overshooting path after a permanent money contraction?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The currency initially appreciates beyond its long-run appreciation, then partly depreciates as prices fall and interest returns toward its long-run level.

**Intuition:** The sign reverses, but the adjustment logic is the same.

</details>

Sources: [Chapter 4 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-contraction-path`

---

### 1102. Can inflation news coincide with currency appreciation rather than depreciation?

**International Finance · Overshooting and expectations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes, if it raises expected policy interest rates enough relative to other changes. This conditional news response differs from a permanent inflation-driven depreciation model.

**Intuition:** Identify what the news changes, especially expected policy and returns.

</details>

Sources: [Chapter 4 · PDF page 39](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=39); [Homework Chapter 4 · Q19 · PDF page 4](../courses/ubuffalo/international-finance/Ch4.pdf#page=4)

Card ID: `ub-if-inflation-news`

---

### 1103. What are the long-run exchange-rate models intended to explain?

**International Finance · Long-run exchange-rate models · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

How exchange rates tend to relate to economic fundamentals after prices adjust, and how investors may form future-rate expected values. They are not exact daily forecasting machines.

**Intuition:** A long-run benchmark is not a promise about tomorrow's quote.

</details>

Sources: [Chapter 5 · PDF page 3](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=3)

Card ID: `ub-if-long-run-model-purpose`

---

### 1104. What does the law of one price say?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Identical goods should have equal common-currency prices across competitive markets when transport costs and trade barriers are negligible.

**Intuition:** Arbitrage links comparable goods when they can move freely.

</details>

Sources: [Chapter 5 · PDF page 5](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=5)

Card ID: `ub-if-one-price`

---

### 1105. How do you express the law of one price for a good sold in the U.S. and Canada?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(P_{\mathrm{US}}=E_{\mathrm{USD}/\mathrm{CAD}}P_{\mathrm{Canada}}\) for the same good.

**Intuition:** The exchange-rate units must cancel the foreign currency.

</details>

Sources: [Chapter 5 · PDF page 6](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=6)

Card ID: `ub-if-one-price-equation`

---

### 1106. How does PPP extend the law of one price?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It compares the common-currency cost of equivalent baskets rather than one identical good.

**Intuition:** Basket comparability is an additional requirement.

</details>

Sources: [Chapter 5 · PDF page 7](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=7)

Card ID: `ub-if-ppp-basket`

---

### 1107. What exchange rate does absolute PPP imply?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E=\frac{P}{P^*}\), where E is domestic currency per foreign currency and P and P* price equivalent baskets.

**Intuition:** A foreign currency's price reflects the relative cost of the basket.

</details>

Sources: [Chapter 5 · PDF page 8](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=8)

Card ID: `ub-if-absolute-ppp`

---

### 1108. If a basket costs US$200 and C$400, what is the PPP quote in U.S. dollars per Canadian dollar?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{200}{400}=US\text{USD}0.50\) per C$1. The reciprocal is C$2 per US$1.

**Intuition:** A correct ratio can still be mislabeled if quote units are omitted.

</details>

Sources: [Chapter 5 · PDF page 8](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=8)

Card ID: `ub-if-ppp-numeric`

---

### 1109. What does relative PPP predict about exchange-rate changes?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Domestic-currency depreciation approximately equals domestic inflation minus foreign inflation: \(\Delta E/E\approx \pi -\pi *\).

**Intuition:** Higher relative inflation erodes the domestic currency's purchasing power.

</details>

Sources: [Chapter 5 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-relative-ppp`

---

### 1110. What is the exact gross exchange-rate change under relative PPP?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(\frac{E_1}{E_0}=\frac{1+\pi}{1+\pi^*}\). The inflation-difference formula is a small-rate approximation.

**Intuition:** Ratios of gross growth factors preserve compounding.

</details>

Sources: [Chapter 5 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-relative-exact`

---

### 1111. Can relative PPP hold even if absolute PPP fails?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Yes. A persistent level wedge can leave E proportional to \(P/P^{*}\) without making the proportionality constant one.

**Intuition:** Stable deviations in levels can cancel when comparing growth rates.

</details>

Sources: [Chapter 5 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-absolute-relative`

---

### 1112. If both countries have equal inflation, what does relative PPP predict for E?

**International Finance · Purchasing power parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No systematic change in E from the inflation differential alone.

**Intuition:** Compare inflation across countries, not only at home.

</details>

Sources: [Chapter 5 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-equal-inflation`

---

### 1113. What two conditions build the monetary approach to exchange rates?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Money-market equilibrium in each country and absolute PPP linking their price levels.

**Intuition:** Money determines prices; PPP translates relative prices into E.

</details>

Sources: [Chapter 5 · PDF page 10](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=10)

Card ID: `ub-if-monetary-building-blocks`

---

### 1114. How can E be written using money supplies and real money demands under absolute PPP?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E=\frac{M}{M^*}\frac{L(R^*,Y^*)}{L(R,Y)}\). It follows by substituting \(P=M/L\) and \(P^{*}=M^{*}/L^{*}\) into \(E=\frac{P}{P^*}\).

**Intuition:** Relative supply and relative demand for money both matter.

</details>

Sources: [Chapter 5 · PDF page 11](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=11)

Card ID: `ub-if-monetary-equation`

---

### 1115. With real money demand and foreign conditions fixed, what does a 10% permanent domestic money increase do to E in the monetary model?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises P and E by 10%, a domestic depreciation.

**Intuition:** This is a money-level experiment, not a change in its continuing growth rate.

</details>

Sources: [Chapter 5 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-money-level-ppp`

---

### 1116. Under the same assumptions, how does higher foreign money supply affect E?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises the foreign price level and lowers domestic currency per foreign currency: domestic appreciation.

**Intuition:** The foreign price level is in the denominator.

</details>

Sources: [Chapter 5 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-foreign-money-ppp`

---

### 1117. Why can higher nominal domestic interest accompany depreciation in the monetary approach?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Higher nominal interest lowers desired real money balances. At fixed M, a higher P restores money-market equilibrium, and PPP implies a higher E.

**Intuition:** This flexible-price mechanism differs from the fixed-expected values short-run asset experiment.

</details>

Sources: [Chapter 5 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-interest-long-run`

---

### 1118. At fixed M, interest, and foreign conditions, how does higher domestic output affect E under the monetary approach?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises real money demand, lowers P, and lowers E: domestic appreciation.

**Intuition:** A stronger demand for domestic purchasing power can support the currency.

</details>

Sources: [Chapter 5 · PDF page 13](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=13)

Card ID: `ub-if-output-ppp`

---

### 1119. How does a one-time money-level increase differ from a permanently higher money-growth rate?

**International Finance · Monetary approach · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The first changes the eventual price level; the second changes continuing inflation, holding real money-demand growth fixed.

**Intuition:** A step change and a steeper trend are different shocks.

</details>

Sources: [Chapter 5 · PDF page 14](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=14)

Card ID: `ub-if-level-vs-growth`

---

### 1120. Which assumptions connect nominal interest differentials to expected inflation differentials?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Uncovered interest parity plus expected relative PPP give \(R-R^{*}\approx \pi ^{e}-\pi ^{*e}\).

**Intuition:** The Fisher differential needs an exchange-rate expected value link.

</details>

Sources: [Chapter 5 · PDF page 15](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=15)

Card ID: `ub-if-fisher-derive`

---

### 1121. What does the Fisher effect predict when expected inflation rises and the real interest rate stays fixed?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Nominal interest rises by approximately the same amount.

**Intuition:** Lenders require compensation for expected loss of purchasing power.

</details>

Sources: [Chapter 5 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-fisher`

---

### 1122. Does a high nominal interest rate always signal a strong currency?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. It can reflect expected inflation and depreciation rather than an attractive real return.

**Intuition:** Ask why the interest rate is high.

</details>

Sources: [Chapter 5 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-nominal-strength-trap`

---

### 1123. In the flexible-price model, what happens to nominal interest after an unanticipated permanent rise in money growth?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Expected inflation and nominal interest rise immediately through the Fisher effect, holding the real rate fixed.

**Intuition:** Persistent expected inflation changes nominal yields.

</details>

Sources: [Chapter 5 · PDF page 17](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=17)

Card ID: `ub-if-growth-shock-rate`

---

### 1124. Why can P jump immediately when money-growth policy changes even though M has not yet jumped?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The higher nominal interest rate reduces L(R,Y). At fixed current M, \(P=M/L\) must rise to clear the money market.

**Intuition:** A change in money demand can move prices without an immediate money-stock jump.

</details>

Sources: [Chapter 5 · PDF page 19](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=19)

Card ID: `ub-if-price-jump`

---

### 1125. After the flexible-price model's initial P and E jumps, how do their paths change?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Prices rise at the new higher inflation rate, and the domestic currency depreciates faster under relative PPP.

**Intuition:** An initial level adjustment is followed by a new trend.

</details>

Sources: [Chapter 5 · PDF page 19](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=19)

Card ID: `ub-if-growth-path`

---

### 1126. Why does the flexible-price monetary approach not produce the same sticky-price overshoot?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Prices adjust immediately with expected values, preventing the temporary excess real balances and interest-rate fall of the sticky-price mechanism.

**Intuition:** Speed of price adjustment changes the exchange-rate path.

</details>

Sources: [Chapter 5 · PDF page 22](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=22)

Card ID: `ub-if-ppp-no-overshoot`

---

### 1127. Why is 'higher interest appreciates the currency' compatible with inflation-driven depreciation and higher interest?

**International Finance · Fisher effect and inflation · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The first holds future exchange-rate expected values fixed in a short-run experiment. The second changes expected inflation and future exchange rates in a long-run experiment.

**Intuition:** Comparative statics cannot be combined while silently changing what is held fixed.

</details>

Sources: [Chapter 5 · PDF page 20](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=20)

Card ID: `ub-if-two-experiments`

---

### 1128. How well do the slides say PPP predicts actual exchange rates?

**International Finance · Limits of PPP · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Absolute PPP has weak empirical support. Relative PPP is often more plausible but still performs poorly as a precise exchange-rate predictor.

**Intuition:** A useful benchmark can have large and persistent deviations.

</details>

Sources: [Chapter 5 · PDF page 23](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=23)

Card ID: `ub-if-ppp-evidence`

---

### 1129. Why can transport costs allow the same good to have different prices across countries?

**International Finance · Limits of PPP · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A price gap smaller than shipping and trade costs need not offer profitable arbitrage.

**Intuition:** Arbitrage constrains gaps only after its costs are paid.

</details>

Sources: [Chapter 5 · PDF page 26](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=26)

Card ID: `ub-if-transport-band`

---

### 1130. Why do nontradable services weaken PPP?

**International Finance · Limits of PPP · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Services such as local haircuts cannot readily be shipped from the cheaper market to the expensive one.

**Intuition:** Local markets need not share a single world price.

</details>

Sources: [Chapter 5 · PDF page 26](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=26)

Card ID: `ub-if-nontradables`

---

### 1131. What is pricing to market?

**International Finance · Limits of PPP · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Charging different prices in different markets according to local demand and competition rather than applying one uniform converted price.

**Intuition:** Market segmentation can let firms sustain price differences.

</details>

Sources: [Chapter 5 · PDF page 27](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=27)

Card ID: `ub-if-pricing-to-market`

---

### 1132. Why can national price-index differences make PPP tests difficult?

**International Finance · Limits of PPP · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Countries' representative baskets, weights, and measurement methods differ, so their indexes may not compare identical purchases.

**Intuition:** Comparing unlike baskets is not a clean one-price test.

</details>

Sources: [Chapter 5 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=28)

Card ID: `ub-if-basket-measurement`

---

### 1133. Which broad cross-country price pattern do the slides highlight?

**International Finance · Price levels across countries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Richer countries tend to have higher common-currency price levels, especially for nontradables.

**Intuition:** A market exchange rate does not equalize all local living costs.

</details>

Sources: [Chapter 5 · PDF page 29](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=29)

Card ID: `ub-if-rich-price-levels`

---

### 1134. How does the Balassa–Samuelson mechanism connect tradable productivity to nontradable prices?

**International Finance · Price levels across countries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

High tradable-sector productivity supports high wages. Labor-market competition transmits those wages to nontradables, raising their costs and prices even without equally high nontradable productivity.

**Intuition:** Tradable productivity can make local services expensive.

</details>

Sources: [Chapter 5 · PDF page 30](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-balassa-samuelson`

---

### 1135. Why can low tradable productivity help explain cheaper services in poorer countries?

**International Finance · Price levels across countries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

With similar world tradable prices, lower productivity supports lower wages, which lower the cost of producing local services.

**Intuition:** Cheap services need not imply cheap identical traded goods.

</details>

Sources: [Chapter 5 · PDF page 30](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=30)

Card ID: `ub-if-poor-wages`

---

### 1136. How does the alternative factor-endowment explanation differ from Balassa–Samuelson?

**International Finance · Price levels across countries · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It emphasizes higher capital per worker raising wages in rich countries, combined with labor-intensive nontradables, rather than primarily sectoral productivity differences.

**Intuition:** Different mechanisms can produce similar aggregate price patterns.

</details>

Sources: [Chapter 5 · PDF page 31](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=31)

Card ID: `ub-if-endowment-theory`

---

### 1137. What is \(q=\frac{EP^*}{P}\) when E is domestic currency per foreign currency?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The domestic-currency cost of a foreign basket divided by the cost of a domestic basket: a relative goods price.

**Intuition:** The real exchange rate compares purchasing power over goods, not currency units alone.

</details>

Sources: [Chapter 5 · PDF page 33](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=33)

Card ID: `ub-if-real-exchange-definition`

---

### 1138. If \(E=\text{USD}1.20/\text{EUR}\), \(P^{*}=\text{EUR}100\), and \(P=\text{USD}120\), what is q?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(q=1.20\times \frac{100}{120}=1\). One foreign basket costs the same as one domestic basket.

**Intuition:** All three inputs are needed to measure real purchasing power.

</details>

Sources: [Chapter 5 · PDF page 34](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-real-one`

---

### 1139. Under \(q=\frac{EP^*}{P}\), what does a rise in q mean?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Domestic real depreciation: foreign goods become more expensive relative to domestic goods.

**Intuition:** State the convention because reciprocal definitions reverse the direction.

</details>

Sources: [Chapter 5 · PDF page 34](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-real-depreciation`

---

### 1140. Under \(q=\frac{EP^*}{P}\), what does a fall in q mean?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Domestic real appreciation: domestic goods become more expensive relative to foreign goods.

**Intuition:** Real appreciation concerns relative goods prices.

</details>

Sources: [Chapter 5 · PDF page 34](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=34)

Card ID: `ub-if-real-appreciation`

---

### 1141. How do you recover the nominal exchange rate from q and price levels?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(E=q\frac{P}{P^*}\). Nominal movements can reflect either relative price levels or real relative-price changes.

**Intuition:** PPP is the special case with a fixed appropriate q.

</details>

Sources: [Chapter 5 · PDF page 35](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=35)

Card ID: `ub-if-nominal-decompose`

---

### 1142. Must nominal depreciation imply real depreciation?

**International Finance · Real exchange rates · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. If domestic prices rise proportionally with E while foreign prices stay fixed, \(q=\frac{EP^*}{P}\) is unchanged.

**Intuition:** Inflation can offset a nominal exchange-rate movement.

</details>

Sources: [Chapter 5 · PDF page 35](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=35)

Card ID: `ub-if-nominal-real-distinction`

---

### 1143. How does higher relative world demand for domestic goods affect q in the long run?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It lowers q, a domestic real appreciation, as domestic goods become relatively more expensive.

**Intuition:** Higher demand raises the relative value of the desired output.

</details>

Sources: [Chapter 5 · PDF page 36](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=36)

Card ID: `ub-if-demand-real`

---

### 1144. In the chapter's aggregate relative-supply model, how does more domestic output affect q?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It raises q, a real depreciation, to encourage the world to absorb the increased relative supply.

**Intuition:** More output must be sold at a sufficiently attractive relative price.

</details>

Sources: [Chapter 5 · PDF page 37](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=37)

Card ID: `ub-if-supply-real`

---

### 1145. Why does the relative-demand curve rise with q in Figure 5.4?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

A higher q makes domestic goods cheaper relative to foreign goods, increasing relative demand for domestic output.

**Intuition:** Here the vertical-axis variable is the foreign-to-domestic goods price.

</details>

Sources: [Chapter 5 · PDF page 38](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-relative-graph`

---

### 1146. Why is long-run relative supply drawn vertically in Figure 5.4?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Full-employment relative output is taken as given by productive capacity in this simplified diagram.

**Intuition:** The graph isolates a relative-price adjustment to given output.

</details>

Sources: [Chapter 5 · PDF page 38](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-relative-supply-vertical`

---

### 1147. When only monetary factors change in the long-run PPP benchmark, what happens to q?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

It remains unchanged; P and E adjust consistently with the monetary change.

**Intuition:** Nominal scaling alone need not change relative goods prices.

</details>

Sources: [Chapter 5 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=40)

Card ID: `ub-if-monetary-real-neutral`

---

### 1148. Holding price levels fixed, how does higher demand for domestic goods affect nominal E?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Real appreciation lowers q, so \(E=q\frac{P}{P^*}\) falls: nominal domestic appreciation.

**Intuition:** A real demand shift can move the currency without a money-supply change.

</details>

Sources: [Chapter 5 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=40)

Card ID: `ub-if-demand-nominal`

---

### 1149. Why is higher domestic output's effect on nominal E ambiguous in the general model?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

More output raises q through real depreciation but increases money demand and lowers P. Since \(E=q\frac{P}{P^*}\), those effects oppose each other.

**Intuition:** A clear real effect need not determine the nominal effect.

</details>

Sources: [Chapter 5 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-supply-ambiguity`

---

### 1150. Why needn't aggregate-output real depreciation contradict Balassa–Samuelson appreciation?

**International Finance · Real demand and supply · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The aggregate relative-supply exercise and the sector-specific tradable-productivity mechanism change different things. Sectoral composition and nontradable wages matter in the latter.

**Intuition:** Specify which productivity experiment is being analyzed.

</details>

Sources: [Chapter 5 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-productivity-models`

---

### 1151. What adds to the inflation differential in the general nominal interest differential?

**International Finance · Real interest parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Expected real depreciation: R−R*≈expected \(\Delta q/q+\pi ^{e}-\pi ^{*e}\), combining UIP with \(q=\frac{EP^*}{P}\).

**Intuition:** Expected goods-price changes matter when relative PPP does not hold.

</details>

Sources: [Chapter 5 · PDF page 45](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=45)

Card ID: `ub-if-general-nominal-gap`

---

### 1152. What is the approximate expected real interest rate?

**International Finance · Real interest parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r^{e}\approx R-\pi ^{e}\). It measures the expected purchasing-power return rather than the currency-unit return.

**Intuition:** Expected inflation, not already realized inflation, enters an ex ante calculation.

</details>

Sources: [Chapter 5 · PDF page 46](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=46)

Card ID: `ub-if-real-interest`

---

### 1153. What does real interest parity predict under the chapter's assumptions?

**International Finance · Real interest parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(r^e-r^{*e}\approx\mathbb{E}[\Delta q/q]\). The real return gap matches expected domestic real depreciation.

**Intuition:** Equal expected nominal-currency returns need not mean equal goods-basket returns.

</details>

Sources: [Chapter 5 · PDF page 47](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=47)

Card ID: `ub-if-real-parity`

---

### 1154. When does real interest parity imply equal real interest rates across countries?

**International Finance · Real interest parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

When the real exchange rate is expected to stay constant, including the relative-PPP benchmark.

**Intuition:** Equal real rates require more than capital-market integration alone.

</details>

Sources: [Chapter 5 · PDF page 47](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=47)

Card ID: `ub-if-real-equality`

---

### 1155. If expected real domestic depreciation is 2% and the foreign real rate is 1%, what is the domestic real rate under approximate real parity?

**International Finance · Real interest parity · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

3%: the domestic real rate exceeds the foreign rate by the expected 2% real depreciation.

**Intuition:** Keep the sign tied to \(q=\frac{EP^*}{P}\).

</details>

Sources: [Chapter 5 · PDF page 47](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=47)

Card ID: `ub-if-real-gap-numeric`

---

### 1156. Why might traders exchange two currencies through dollars instead of trading the pair directly?

**International Finance · Foreign exchange markets · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Dollar markets can be deeper and easier to trade. The dollar acts as an intermediary, called a vehicle currency, even when neither trader is American.

**Intuition:** A widely used trading network can reduce the need for every possible direct currency pair.

</details>

Sources: [Chapter 3 · PDF page 15](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=15); [Homework Chapter 3 · Q13 · PDF page 3](../courses/ubuffalo/international-finance/Ch3.pdf#page=3)

Card ID: `ub-if-vehicle-currency`

---

### 1157. Why is an ordinary bond not classified like a forward, future, option, or swap?

**International Finance · Currency contracts · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

An ordinary bond is a debt claim. The other contracts derive payoffs from specified underlying prices, rates, or exchanges.

**Intuition:** Do not classify every financial asset as a derivative.

</details>

Sources: [Chapter 3 · PDF page 28](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=28); [Homework Chapter 3 · Q6 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-bond-derivative`

---

### 1158. How can electronic payment innovations change money demand at a given income and interest rate?

**International Finance · Money demand · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

They can change how much spendable balance is needed for transactions, shifting the money-demand relationship rather than merely moving along it.

**Intuition:** Payment technology can alter desired liquidity.

</details>

Sources: [Chapter 4 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=12); [Homework Chapter 4 · Q13 · PDF page 3](../courses/ubuffalo/international-finance/Ch4.pdf#page=3)

Card ID: `ub-if-money-demand-innovation`

---

### 1159. What dollar amount buys a £50 sweater at $1.25 per pound?

**International Finance · Exchange-rate quotations · PREDICT**

**Homework conversion** (equation)

- Price: £50
- Quote: $1.25/£

<details>
<summary>Reveal explanation</summary>

$62.50: \(50\times 1.25\). The pound units cancel, leaving dollars.

**Intuition:** Use multiplication when the quote is domestic currency per foreign currency.

</details>

Sources: [Chapter 3 · PDF page 3](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=3); [Homework Chapter 3 · Q1 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-sweater-conversion`

---

### 1160. If identical jeans cost $50 and £100, what dollar-per-pound rate equalizes their prices?

**International Finance · Exchange-rate quotations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

$0.50 per pound, assuming the prices are linked by the law of one price. Prices alone do not reveal the actual market exchange rate without that assumption.

**Intuition:** An implied parity rate is not automatically an observed market quote.

</details>

Sources: [Chapter 3 · PDF page 3](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=3); [Homework Chapter 3 · Q2 · PDF page 1](../courses/ubuffalo/international-finance/Ch3.pdf#page=1)

Card ID: `ub-if-implied-jeans-rate`

---

### 1161. Given \(CA=15\), \(S^{p}=50\), \(I=25\), \(G=12\), what can you determine about T?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(T=2\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 1 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-1`

---

### 1162. Given \(CA=8\), \(S^{p}=50\), \(G=15\), \(T=3\), what can you determine about I?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(I=30\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 2 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-2`

---

### 1163. Given \(CA=9\), \(I=25\), \(G=10\), \(T=4\), what can you determine about \(S^{p}\)?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S^{p}=40\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 3 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-3`

---

### 1164. Given \(CA=35\), \(S^{p}=50\), \(I=10\), \(T=5\), what can you determine about G?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(G=10\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 4 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-4`

---

### 1165. Given \(S^{p}=10\), \(I=30\), \(G=20\), \(T=10\), what can you determine about CA?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(CA=-30\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 5 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-5`

---

### 1166. Given \(CA=22\), \(S^{p}=200\), \(G=50\), \(T=12\), what can you determine about I?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(I=140\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 6 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-6`

---

### 1167. Given \(CA=-25\), \(I=140\), \(G=100\), \(T=15\), what can you determine about \(S^{p}\)?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(S^{p}=200\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 7 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-7`

---

### 1168. Given \(S^{p}=400\), \(I=200\), \(T=20\), what can you determine about CA and G?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

There is no unique numerical solution. The identity gives \(CA=220-G\), so one additional value is needed.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 8 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-8`

---

### 1169. Given \(CA=-280\), \(S^{p}=100\), \(I=200\), \(G=200\), what can you determine about T?

**International Finance · Saving and investment practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

\(T=20\). Use \(CA=S^{p}-I-G+T\) and rearrange for the missing quantity.

**Intuition:** Check how many independent unknowns remain before calculating.

</details>

Sources: [Chapter 2 · PDF page 13](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=13); [Homework Chapter 2 · Q10 row 9 · PDF page 2](../courses/ubuffalo/international-finance/CH2.pdf#page=2)

Card ID: `ub-if-hw2-row-9`

---

### 1170. With \(R_{\mathrm{USD}}=10\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

4 percentage points: \(10-6-(0)=4\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 1 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-1`

---

### 1171. With \(R_{\mathrm{USD}}=10\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

0 percentage points: \(10-6-(4)=0\). The deposits tie in expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 2 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-2`

---

### 1172. With \(R_{\mathrm{USD}}=10\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 8%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

-4 percentage points: \(10-6-(8)=-4\). Euro deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 3 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-3`

---

### 1173. With \(R_{\mathrm{USD}}=10\%\), \(R_{\mathrm{EUR}}=12\%\), and expected dollar depreciation -4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

2 percentage points: \(10-12-(-4)=2\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 4 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-4`

---

### 1174. With \(R_{\mathrm{USD}}=10\%\), \(R_{\mathrm{EUR}}=18\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

-8 percentage points: \(10-18-(0)=-8\). Euro deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 5 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-5`

---

### 1175. With \(R_{\mathrm{USD}}=15\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

9 percentage points: \(15-6-(0)=9\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 6 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-6`

---

### 1176. With \(R_{\mathrm{USD}}=15\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

5 percentage points: \(15-6-(4)=5\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 7 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-7`

---

### 1177. With \(R_{\mathrm{USD}}=15\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 8%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

1 percentage points: \(15-6-(8)=1\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 8 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-8`

---

### 1178. With \(R_{\mathrm{USD}}=15\%\), \(R_{\mathrm{EUR}}=12\%\), and expected dollar depreciation -4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

7 percentage points: \(15-12-(-4)=7\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 9 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-9`

---

### 1179. With \(R_{\mathrm{USD}}=15\%\), \(R_{\mathrm{EUR}}=18\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

-3 percentage points: \(15-18-(0)=-3\). Euro deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 10 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-10`

---

### 1180. With \(R_{\mathrm{USD}}=20\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

14 percentage points: \(20-6-(0)=14\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 11 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-11`

---

### 1181. With \(R_{\mathrm{USD}}=20\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

10 percentage points: \(20-6-(4)=10\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 12 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-12`

---

### 1182. With \(R_{\mathrm{USD}}=20\%\), \(R_{\mathrm{EUR}}=6\%\), and expected dollar depreciation 8%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

6 percentage points: \(20-6-(8)=6\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 13 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-13`

---

### 1183. With \(R_{\mathrm{USD}}=20\%\), \(R_{\mathrm{EUR}}=12\%\), and expected dollar depreciation -4%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

12 percentage points: \(20-12-(-4)=12\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 14 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-14`

---

### 1184. With \(R_{\mathrm{USD}}=20\%\), \(R_{\mathrm{EUR}}=18\%\), and expected dollar depreciation 0%, what is the approximate dollar-minus-euro return gap?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

2 percentage points: \(20-18-(0)=2\). Dollar deposits have the higher expected dollar return.

**Intuition:** Use the same currency and distinguish percentage points from percentage changes.

</details>

Sources: [Chapter 3 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=42); [Homework Chapter 3 · Q8 case 15 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-gap-15`

---

### 1185. Under approximate UIP, what dollar interest rate matches \(R_{\mathrm{EUR}}=6\%\) and expected dollar depreciation of 0%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

6%, found by adding the euro interest rate and expected dollar depreciation.

**Intuition:** The worksheet repeats these five unique cases three times.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q17 cases 1, 6, 11 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-hw3-parity-1`

---

### 1186. Under approximate UIP, what dollar interest rate matches \(R_{\mathrm{EUR}}=6\%\) and expected dollar depreciation of 4%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

10%, found by adding the euro interest rate and expected dollar depreciation.

**Intuition:** The worksheet repeats these five unique cases three times.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q17 cases 2, 7, 12 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-hw3-parity-2`

---

### 1187. Under approximate UIP, what dollar interest rate matches \(R_{\mathrm{EUR}}=6\%\) and expected dollar depreciation of 8%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

14%, found by adding the euro interest rate and expected dollar depreciation.

**Intuition:** The worksheet repeats these five unique cases three times.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q17 cases 3, 8, 13 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-hw3-parity-3`

---

### 1188. Under approximate UIP, what dollar interest rate matches \(R_{\mathrm{EUR}}=12\%\) and expected dollar depreciation of -4%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

8%, found by adding the euro interest rate and expected dollar depreciation.

**Intuition:** The worksheet repeats these five unique cases three times.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q17 cases 4, 9, 14 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-hw3-parity-4`

---

### 1189. Under approximate UIP, what dollar interest rate matches \(R_{\mathrm{EUR}}=18\%\) and expected dollar depreciation of 0%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

18%, found by adding the euro interest rate and expected dollar depreciation.

**Intuition:** The worksheet repeats these five unique cases three times.

</details>

Sources: [Chapter 3 · PDF page 44](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=44); [Homework Chapter 3 · Q17 cases 5, 10, 15 · PDF page 4](../courses/ubuffalo/international-finance/Ch3.pdf#page=4)

Card ID: `ub-if-hw3-parity-5`

---

### 1190. With \(E=\text{USD}1.10/\text{EUR}\), \(E^{e}=\text{USD}1.20/\text{EUR}\), and \(R_{\mathrm{EUR}}=5\%\), what is the expected dollar return?

**International Finance · Interest parity practice · PREDICT**

**Homework Q9** (equation)

- Today: $1.10/€
- Expected future: $1.20/€
- Euro interest: 5%

<details>
<summary>Reveal explanation</summary>

The chapter approximation gives \(5\%+\frac{0.10}{1.10}\approx 14.09\%\). The exact conversion gives \(1.05\times \frac{1.20}{1.10}-1\approx 14.55\%\). Both exceed the given 10% dollar rate under equal risk and liquidity.

**Intuition:** Label whether you kept the interest-times-currency-change term.

</details>

Sources: [Chapter 3 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=40); [Homework Chapter 3 · Q9 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-return-110-120`

---

### 1191. With \(E=\text{USD}1.10/\text{EUR}\), \(E^{e}=\text{USD}1.165/\text{EUR}\), and \(R_{\mathrm{EUR}}=5\%\), why is the homework return about 11%?

**International Finance · Interest parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

The approximation is \(5\%+\frac{0.065}{1.10}\approx 10.91\%\), rounding to 11%. The exact return is about 11.20%.

**Intuition:** Rounded choices can hide a meaningful distinction between formulas.

</details>

Sources: [Chapter 3 · PDF page 40](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=40); [Homework Chapter 3 · Q10 · PDF page 2](../courses/ubuffalo/international-finance/Ch3.pdf#page=2)

Card ID: `ub-if-hw3-return-1165`

---

### 1192. At \(E=\text{USD}1.00/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what one-year forward quote satisfies parity?

**International Finance · Covered parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact CIP gives \(F=1.00\times \frac{1.10}{1.05}\approx \text{USD}1.04762/\text{EUR}\). The chapter approximation gives \(F\approx 1.00\times 1.05=\text{USD}1.0500/\text{EUR}\).

**Intuition:** Do not mix the approximate premium with an exact no-arbitrage claim.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57); [Homework Chapter 3 · Q21 row 1 · PDF page 5](../courses/ubuffalo/international-finance/Ch3.pdf#page=5)

Card ID: `ub-if-hw3-forward-1`

---

### 1193. At \(E=\text{USD}1.05/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what one-year forward quote satisfies parity?

**International Finance · Covered parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact CIP gives \(F=1.05\times \frac{1.10}{1.05}\approx \text{USD}1.10000/\text{EUR}\). The chapter approximation gives \(F\approx 1.05\times 1.05=\text{USD}1.1025/\text{EUR}\).

**Intuition:** Do not mix the approximate premium with an exact no-arbitrage claim.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57); [Homework Chapter 3 · Q21 row 2 · PDF page 5](../courses/ubuffalo/international-finance/Ch3.pdf#page=5)

Card ID: `ub-if-hw3-forward-2`

---

### 1194. At \(E=\text{USD}1.10/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what one-year forward quote satisfies parity?

**International Finance · Covered parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact CIP gives \(F=1.10\times \frac{1.10}{1.05}\approx \text{USD}1.15238/\text{EUR}\). The chapter approximation gives \(F\approx 1.10\times 1.05=\text{USD}1.1550/\text{EUR}\).

**Intuition:** Do not mix the approximate premium with an exact no-arbitrage claim.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57); [Homework Chapter 3 · Q21 row 3 · PDF page 5](../courses/ubuffalo/international-finance/Ch3.pdf#page=5)

Card ID: `ub-if-hw3-forward-3`

---

### 1195. At \(E=\text{USD}1.20/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what one-year forward quote satisfies parity?

**International Finance · Covered parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact CIP gives \(F=1.20\times \frac{1.10}{1.05}\approx \text{USD}1.25714/\text{EUR}\). The chapter approximation gives \(F\approx 1.20\times 1.05=\text{USD}1.2600/\text{EUR}\).

**Intuition:** Do not mix the approximate premium with an exact no-arbitrage claim.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57); [Homework Chapter 3 · Q21 row 4 · PDF page 5](../courses/ubuffalo/international-finance/Ch3.pdf#page=5)

Card ID: `ub-if-hw3-forward-4`

---

### 1196. At \(E=\text{USD}1.30/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what one-year forward quote satisfies parity?

**International Finance · Covered parity practice · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exact CIP gives \(F=1.30\times \frac{1.10}{1.05}\approx \text{USD}1.36190/\text{EUR}\). The chapter approximation gives \(F\approx 1.30\times 1.05=\text{USD}1.3650/\text{EUR}\).

**Intuition:** Do not mix the approximate premium with an exact no-arbitrage claim.

</details>

Sources: [Chapter 3 · PDF page 57](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=57); [Homework Chapter 3 · Q21 row 5 · PDF page 5](../courses/ubuffalo/international-finance/Ch3.pdf#page=5)

Card ID: `ub-if-hw3-forward-5`

---

### 1197. A can make 10 shirts or 5 shoes; B can make 6 shirts or 2 shoes. Who has comparative advantage in shoes?

**International Finance · Gains from trade · COMPARE**

**Same resources, alternative outputs** (compare)

- Country A: 10 shirts OR 5 shoes
- Country B: 6 shirts OR 2 shoes

<details>
<summary>Reveal explanation</summary>

A: one shoe costs A two shirts but costs B three shirts. A has lower opportunity cost in shoes even though it is also absolutely more productive in shirts.

**Intuition:** Relative opportunity cost identifies the specialization margin.

</details>

Sources: [Chapter 1 · PDF page 9](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-comparative-numeric`

---

### 1198. What is wrong with saying aggregate gains from trade prove no compensation is needed?

**International Finance · Gains from trade · SPOT THE MISTAKE**

**Spot the claim** (mistake)

- Claim: The country gains, so nobody loses.

<details>
<summary>Reveal explanation</summary>

Aggregate gains do not guarantee every group gains. Import-competing workers or factor owners may lose; whether and how to compensate is a separate policy question.

**Intuition:** An aggregate improvement can coexist with concentrated losses.

</details>

Sources: [Chapter 1 · PDF page 11](../courses/ubuffalo/international-finance/IF_Ch01%20-%20Tagged.pdf#page=11)

Card ID: `ub-if-gains-mistake`

---

### 1199. If GDP is 500, foreign factor receipts are 40, and factor payments abroad are 25, what is GNP?

**International Finance · National income accounting · PREDICT**

**One period, same units** (equation)

- GDP: 500
- Receipts: 40
- Payments: 25

<details>
<summary>Reveal explanation</summary>

515: 500+40−25. Net foreign factor income is 15.

**Intuition:** Use net receipts rather than adding all receipts alone.

</details>

Sources: [Chapter 2 · PDF page 8](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=8)

Card ID: `ub-if-gnp-numeric`

---

### 1200. What finishes the accounting chain if \(Y=200\), \(C=120\), \(G=30\), and \(I=65\)?

**International Finance · Saving and investment · COMPLETE THE SEQUENCE**

**Find the external balance** (flow)

- 1: S \(=\) Y − C − G
- 2: S \(=\) 50
- 3: CA \(=\) S − I \(=\) ?

<details>
<summary>Reveal explanation</summary>

Saving is \(200-120-30=50\). \(CA=50-65=-15\), a current account deficit.

**Intuition:** Subtract domestic investment from saving after computing saving.

</details>

Sources: [Chapter 2 · PDF page 12](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-saving-pipeline`

---

### 1201. If CA+KA+nonreserve FA+discrepancy=−12, what official flow balances the accounts?

**International Finance · Reserves and external wealth · PREDICT**

**Net-inflow convention** (equation)

- Nonofficial total: −12
- Official flow: ?

<details>
<summary>Reveal explanation</summary>

A +12 net official financing credit under the slides’ convention. This can reflect reserve sales or additional foreign official claims.

**Intuition:** A negative settlements balance needs positive official financing.

</details>

Sources: [Chapter 2 · PDF page 29](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=29)

Card ID: `ub-if-official-balance-example`

---

### 1202. With €100 of assets and $80 of liabilities, what happens to net dollar wealth when E rises from 1 to 1.2 $/€?

**International Finance · Reserves and external wealth · COMPARE**

**Same portfolio, different exchange rate** (compare)

- Before: $1.00/€
- After: $1.20/€

<details>
<summary>Reveal explanation</summary>

It rises from $20 to $40: assets rise from $100 to $120 while liabilities stay $80, assuming nothing else changes.

**Intuition:** Currency revaluation can change wealth without any new saving.

</details>

Sources: [Chapter 2 · PDF page 38](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=38)

Card ID: `ub-if-valuation-example`

---

### 1203. An opening net position is −100; transactions add −10, price gains add 8, and currency gains add 7. What is the ending position?

**International Finance · Reserves and external wealth · PREDICT**

**Ignore other adjustments** (equation)

- Opening: −100
- Transactions: −10
- Price + currency gains: 8 + 7

<details>
<summary>Reveal explanation</summary>

−95: −100−10+8+7. The position improves despite negative net transactions.

**Intuition:** Valuation gains can outweigh a negative transaction flow.

</details>

Sources: [Chapter 2 · PDF page 39](../courses/ubuffalo/international-finance/IF_Ch02%20-%20Tagged.pdf#page=39)

Card ID: `ub-if-niip-reconcile-example`

---

### 1204. What is wrong with saying a rise from $1.00/€ to $1.20/€ means dollar appreciation?

**International Finance · Exchange-rate quotations · SPOT THE MISTAKE**

**Spot the quote error** (mistake)

- Claim: More dollars per euro means a stronger dollar.

<details>
<summary>Reveal explanation</summary>

The dollar depreciates: it buys fewer euros. The euro’s dollar price rises 20%, while the dollar’s euro value falls from 1 to \(\frac{1}{1.2}\approx 0.8333\), about 16.67%.

**Intuition:** Reciprocal quotes have opposite signs and different percentage magnitudes.

</details>

Sources: [Chapter 3 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-quote-mistake`

---

### 1205. If euros cost $1.10 in one market and $1.12 in another, what is gross profit on an immediate €1,000 round trip?

**International Finance · Foreign exchange markets · COMPARE**

**Same currency, simultaneous quotes** (compare)

- Market A: $1.10/€
- Market B: $1.12/€

<details>
<summary>Reveal explanation</summary>

Buy at $1.10 and sell at $1.12 for a gross $20 profit before fees, spreads, and execution risk.

**Intuition:** A price gap only becomes profit if both legs are executable.

</details>

Sources: [Chapter 3 · PDF page 18](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=18)

Card ID: `ub-if-arbitrage-example`

---

### 1206. If \(E^{e}=\text{USD}1.20/\text{EUR}\), \(R_{\mathrm{USD}}=10\%\), and \(R_{\mathrm{EUR}}=5\%\), what is today’s approximate UIP equilibrium E?

**International Finance · Interest parity and expectations · PREDICT**

**Approximate UIP** (equation)

- Expected future: $1.20/€
- Interest gap: 5 percentage points

<details>
<summary>Reveal explanation</summary>

\(E=1.20/(1+0.10-0.05)\approx \text{USD}1.14286/\text{EUR}\). This leaves expected dollar depreciation of 5%, offsetting the euro interest disadvantage.

**Intuition:** Solve for today’s price rather than plugging the future rate in as today’s rate.

</details>

Sources: [Chapter 3 · PDF page 54](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=54)

Card ID: `ub-if-uip-equilibrium-example`

---

### 1207. Does \(F=\text{USD}1.113/\text{EUR}\), \(E=\text{USD}1.05/\text{EUR}\), \(R_{\mathrm{EUR}}=4\%\), and \(R_{\mathrm{USD}}=10\%\) satisfy exact CIP?

**International Finance · Covered parity practice · SPOT THE MISTAKE**

**Spot the approximation trap** (mistake)

- Claim: 4% + 6% forward premium \(=\) exact 10% return.

<details>
<summary>Reveal explanation</summary>

No. The covered euro return is \(1.04\times \frac{1.113}{1.05}-1=10.24\%\), above 10%. Exact parity requires \(F=1.05\times \frac{1.10}{1.04}\approx \text{USD}1.11058/\text{EUR}\). The additive approximation hides the gap.

**Intuition:** An approximate equality is not exact no-arbitrage.

</details>

Sources: [Chapter 3 · PDF page 58](../courses/ubuffalo/international-finance/IF_ch03%20-%20Tagged.pdf#page=58)

Card ID: `ub-if-cip-rounding-trap`

---

### 1208. If nominal balances rise from 100 to 120 while P rises from 2 to 3, did real balances rise?

**International Finance · Money demand · COMPARE**

**Money and prices** (compare)

- Before: M \(=\) 100, P \(=\) 2
- After: M \(=\) 120, P \(=\) 3

<details>
<summary>Reveal explanation</summary>

No. They fell from \(\frac{100}{2}=50\) to \(\frac{120}{3}=40\), a 20% decrease.

**Intuition:** More currency units can still buy fewer goods.

</details>

Sources: [Chapter 4 · PDF page 12](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=12)

Card ID: `ub-if-real-balances-example`

---

### 1209. What completes the temporary U.S. expansion chain with fixed prices, output, and expected values?

**International Finance · Money and FX in the short run · COMPLETE THE SEQUENCE**

**Temporary monetary expansion** (flow)

- 1: U.S. M rises; P fixed
- 2: Dollar interest falls
- 3: Dollar/euro quote moves ?

<details>
<summary>Reveal explanation</summary>

Higher U.S. real money supply lowers dollar interest; dollar deposits become less attractive, so E in dollars per euro rises and the dollar depreciates.

**Intuition:** Carry the money-market result into the FX market.

</details>

Sources: [Chapter 4 · PDF page 25](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=25)

Card ID: `ub-if-money-fx-pipeline`

---

### 1210. If nominal money grows 8% and real money demand grows 3%, what inflation rate does the growth approximation predict?

**International Finance · Long-run money and prices · PREDICT**

**Money-market growth accounting** (equation)

- Money growth: 8%
- Real money-demand growth: 3%

<details>
<summary>Reveal explanation</summary>

About 5%. The exact gross-rate calculation is \(\frac{1.08}{1.03}-1\approx 4.85\%\).

**Intuition:** State when you use a growth-rate approximation.

</details>

Sources: [Chapter 4 · PDF page 31](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=31)

Card ID: `ub-if-inflation-growth-example`

---

### 1211. If E starts at 1, jumps to 1.30, then settles at 1.10 dollars per euro, what is the overshoot?

**International Finance · Overshooting and expectations · COMPLETE THE SEQUENCE**

**Permanent money-level increase** (flow)

- Before: $1.00/€
- Immediately: $1.30/€
- Long run: $1.10/€

<details>
<summary>Reveal explanation</summary>

The initial 30% rise exceeds the eventual 10% rise. E later falls from 1.30 to 1.10: a partial dollar recovery, not a return to its original value.

**Intuition:** Separate the immediate move, reversal, and lasting change.

</details>

Sources: [Chapter 4 · PDF page 42](../courses/ubuffalo/international-finance/IF_ch04%20-%20Tagged.pdf#page=42)

Card ID: `ub-if-overshoot-numeric`

---

### 1212. With domestic inflation 6% and foreign inflation 2%, what does relative PPP predict for domestic depreciation?

**International Finance · Purchasing power parity · COMPARE**

**Same time horizon** (compare)

- Domestic inflation: 6%
- Foreign inflation: 2%

<details>
<summary>Reveal explanation</summary>

Approximately 4%. Exactly, \(E_{1}/E_{0}-1=\frac{1.06}{1.02}-1\approx 3.92\%\).

**Intuition:** An inflation differential is the linear approximation to a gross-price ratio.

</details>

Sources: [Chapter 5 · PDF page 9](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=9)

Card ID: `ub-if-ppp-inflation-example`

---

### 1213. If E rises 10% and domestic P rises 10% while foreign P stays fixed, what happens to q?

**International Finance · Real exchange rates · PREDICT**

**q \(=\) EP*/P** (equation)

- E multiplier: 1.10
- P multiplier: 1.10
- P* multiplier: 1.00

<details>
<summary>Reveal explanation</summary>

It is unchanged: the 1.10 multiplier in E cancels the 1.10 multiplier in P. There is nominal depreciation but no real depreciation.

**Intuition:** Currency units can move without changing relative goods prices.

</details>

Sources: [Chapter 5 · PDF page 35](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=35)

Card ID: `ub-if-real-rate-example`

---

### 1214. If expected inflation rises from 2% to 5% and the real rate stays at 1%, how does the approximate nominal rate change?

**International Finance · Fisher effect and inflation · COMPARE**

**Hold the real rate fixed** (compare)

- Old expected inflation: 2%
- New expected inflation: 5%

<details>
<summary>Reveal explanation</summary>

It rises from 3% to 6%, a three-percentage-point increase.

**Intuition:** The Fisher effect compensates for expected purchasing-power loss.

</details>

Sources: [Chapter 5 · PDF page 16](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=16)

Card ID: `ub-if-fisher-example`

---

### 1215. If q rises 8% but \(P/P^{*}\) falls 10%, what happens to \(E=q\frac{P}{P^*}\)?

**International Finance · Real demand and supply · PREDICT**

**Combine both channels** (equation)

- q multiplier: 1.08
- \(P/P^{*}\) multiplier: 0.90

<details>
<summary>Reveal explanation</summary>

E changes by \(1.08\times 0.90-1=-2.8\%\), a nominal appreciation despite real depreciation. Different magnitudes could reverse the net sign.

**Intuition:** Opposing channels must be combined quantitatively.

</details>

Sources: [Chapter 5 · PDF page 41](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=41)

Card ID: `ub-if-supply-nominal-example`

---

### 1216. If domestic and foreign nominal rates are 7% and 4%, and expected inflation is 4% and 2%, what expected real depreciation is implied?

**International Finance · Real interest parity · COMPARE**

**Approximate real parity** (compare)

- Domestic: R \(=\) 7%, \(\pi ^{e}\) \(=\) 4%
- Foreign: R* \(=\) 4%, \(\pi ^{*e}\) \(=\) 2%

<details>
<summary>Reveal explanation</summary>

Real rates are approximately 3% and 2%, so real parity implies 1% expected domestic real depreciation. The nominal gap is 3 points; the inflation gap accounts for 2.

**Intuition:** Subtract inflation before interpreting a real-return gap.

</details>

Sources: [Chapter 5 · PDF page 47](../courses/ubuffalo/international-finance/IF_ch05%20-%20Tagged.pdf#page=47)

Card ID: `ub-if-real-parity-example`

---

### 1217. If 1 and 3 are exact machine numbers, must their quotient be exact?

**AM 205 · Floating-point arithmetic · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. \(1/3\) has a repeating binary expansion, so it must be rounded. Exactly stored inputs do not guarantee an exactly representable result.

**Intuition:** Input accuracy and arithmetic rounding are separate issues.

</details>

Sources: [Review · 1.7](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-exact-operands`

---

### 1218. Does rounding make swapping two finite operands change their sum?

**AM 205 · Floating-point arithmetic · COMPARE**

<details>
<summary>Reveal explanation</summary>

With the same IEEE format and rounding mode, no: \(a+b\) and \(b+a\) round the same exact sum. Regrouping three terms can change intermediate rounding. Exclude NaNs and changes in evaluation precision.

**Intuition:** Swapping two operands differs from regrouping a longer calculation.

</details>

Sources: [Review · 1.9 · commutativity](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-commutative-rounding`

---

### 1219. How far apart are binary64 numbers between \(2^{54}\) and \(2^{55}\)?

**AM 205 · Floating-point arithmetic · PREDICT**

<details>
<summary>Reveal explanation</summary>

The gaps within this interval are \(2^{54-52}=4\). The gap immediately above \(2^{55}\) is 8. Binary64 has 53 significant binary bits.

**Intuition:** One power-of-two interval has one spacing; the next doubles it.

</details>

Sources: [Review · spacing companion](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-gap-at-54`

---

### 1220. What does binary64 compute for \(2^{54}+1\) with nearest rounding?

**AM 205 · Floating-point arithmetic · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(2^{54}\). The neighboring machine numbers are \(2^{54}\) and \(2^{54}+4\); the exact result is closer to the first. This is not a halfway tie.

**Intuition:** Compare the increment with the local gap.

</details>

Sources: [Review · rounding companion](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-round-at-54`

---

### 1221. Why does multiplying two upper-triangular matrices keep zeros below the diagonal?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

For \(i>j\), a nonzero term in \((AB)_{ij}=\sum_k A_{ik}B_{kj}\) would need both \(k\ge i\) and \(k\le j\). That is impossible.

**Intuition:** Both triangular patterns rule out every contribution below the diagonal.

</details>

Sources: [Review · 2.7](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-upper-product`

---

### 1222. Must a lower-triangular matrix times an upper-triangular matrix be triangular?

**AM 205 · Matrix operations · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. For example, \[\begin{bmatrix}1&0\\1&1\end{bmatrix}\begin{bmatrix}1&1\\0&1\end{bmatrix}=\begin{bmatrix}1&1\\1&2\end{bmatrix}.\] The product has nonzero entries on both sides of the diagonal.

**Intuition:** Opposite triangular patterns can fill each other’s zeros.

</details>

Sources: [Review · 2.7 companion · authored example](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-lower-upper-product`

---

### 1223. When is the product of two real symmetric matrices also symmetric?

**AM 205 · Matrix operations · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

Exactly when they commute: \(AB=BA\). Since \((AB)^T=B^TA^T=BA\), symmetry of each factor alone is not enough.

**Intuition:** Transposing a product reverses its order.

</details>

Sources: [Review · 2.8](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=1)

Card ID: `am205-quiz1-symmetric-product`

---

### 1224. Can a singular matrix still have an LU factorization?

**AM 205 · LU factorization · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

Yes. \(\operatorname{diag}(1,0)=I\operatorname{diag}(1,0)\) is an LU factorization. Singularity means at least one zero diagonal entry in the triangular factor; it does not prohibit the factorization.

**Intuition:** Having factors does not guarantee that triangular solves are invertible.

</details>

Sources: [Review · 2.15](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-singular-lu`

---

### 1225. For \(x=(1,1)\), which is largest: its 1-, 2-, or infinity-norm?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

The 1-norm is 2, the 2-norm is \(\sqrt2\), and the infinity-norm is 1. Generally, \(\|x\|_\infty\le\|x\|_2\le\|x\|_1\).

**Intuition:** Largest component, Euclidean length, and total absolute size measure different things.

</details>

Sources: [Review · 2.21 companion](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2); [2023 · Q9](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-vector-norm-order`

---

### 1226. Does a singular matrix have zero matrix norm?

**AM 205 · Matrix conditioning · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. \(A=\operatorname{diag}(1,0)\) is singular but \(\|A\|_2=1\). Singularity means some direction is destroyed, while the 2-norm measures the largest stretch.

**Intuition:** One collapsed direction does not erase every direction.

</details>

Sources: [Review · 2.21](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-singular-norm`

---

### 1227. Can a nonzero matrix have zero 1-, 2-, infinity-, or Frobenius norm?

**AM 205 · Matrix conditioning · QUICK RECALL**

<details>
<summary>Reveal explanation</summary>

No. Each is a norm, and a norm is zero only for the zero matrix. In particular, \(\|A\|_2=0\) means \(Ax=0\) for every unit vector, so every column is zero.

**Intuition:** Zero size is stronger than a zero determinant.

</details>

Sources: [Review · 2.23 and companions](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-zero-norm`

---

### 1228. If \(Ax_1=Ax_2=b\), why is every point on their line another solution?

**AM 205 · Linear systems · PREDICT**

<details>
<summary>Reveal explanation</summary>

For any real \(t\), \[A((1-t)x_1+tx_2)=(1-t)b+tb=b.\] If \(x_1\ne x_2\), varying \(t\) gives infinitely many distinct solutions.

**Intuition:** The coefficients add to one, keeping the same right-hand side.

</details>

Sources: [Review · 2.28 · proof](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-solution-line-proof`

---

### 1229. If you reorder the rows of both A and b, does the solution change?

**AM 205 · Linear systems · PREDICT**

<details>
<summary>Reveal explanation</summary>

No. \(PAx=Pb\) contains the same equations in a different order. Multiplying by \(P^T=P^{-1}\) restores \(Ax=b\). Reordering A without b generally changes the problem.

**Intuition:** Move each equation together with its right-hand side.

</details>

Sources: [Review · 2.32(a)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-row-permutation`

---

### 1230. If \(Ax=b\), which vector solves \(APz=b\) for a permutation matrix P?

**AM 205 · Linear systems · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(z=P^Tx\), because \(Pz=x\). Column permutations reorder the unknowns, so the entries must be relabeled when reporting the original solution.

**Intuition:** Columns correspond to variables; rows correspond to equations.

</details>

Sources: [Review · 2.32(b)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-column-coordinates`

---

### 1231. Why does an invertible left multiplier M preserve the solutions of \(Ax=b\)?

**AM 205 · Linear systems · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(Ax=b\) implies \(MAx=Mb\). Conversely, multiply the transformed system by \(M^{-1}\). If M is singular, this reverse step fails and information can be lost.

**Intuition:** Reversible equation transformations preserve exactly the same constraints.

</details>

Sources: [Review · 2.32(c)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=2)

Card ID: `am205-quiz1-invertible-left`

---

### 1232. Multiply A and b by nonzero \(\alpha\). What changes for a fixed estimate \(\hat x\)?

**AM 205 · Linear-system verification · PREDICT**

<details>
<summary>Reveal explanation</summary>

The exact solution is unchanged, but the residual becomes \(r_{\mathrm{new}}=\alpha(b-A\hat x)=\alpha r\). Its norm scales by \(|\alpha|\), even though the estimate has not improved.

**Intuition:** Raw residual size depends on the units used for the equations.

</details>

Sources: [Review · 2.33(a–b)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-quiz1-residual-rescale`

---

### 1233. Can scaling individual equations improve conditioning without changing their solution?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes. Let \(A=\operatorname{diag}(1,10^{-6})\) and \(D=\operatorname{diag}(1,10^6)\). Then \(DA=I\): its condition number drops from \(10^6\) to 1. Use \(Db\) too; the exact solution stays the same.

**Intuition:** Relative equation scales affect numerical conditioning.

</details>

Sources: [Review · 2.34(a–b) · authored example](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-quiz1-diagonal-row-scaling`

---

### 1234. If a first column is \((2,1)^T\), can row scaling change the partial pivot?

**AM 205 · Pivoting · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes. Initially the first row wins. Multiplying row 2 by 3 makes the column \((2,3)^T\), so the second row wins. Scale its right-hand side too to preserve the system.

**Intuition:** Pivot choices depend on the magnitudes after scaling.

</details>

Sources: [Review · 2.34(c) · authored example](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-quiz1-scaling-pivot`

---

### 1235. What are the first pivots with no, partial, and complete pivoting?

**AM 205 · Pivoting · PREDICT**

\[A=\begin{bmatrix}4&-8&1\\6&5&7\\0&-10&-3\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

No pivoting: 4. Partial pivoting: 6, the largest magnitude in column 1. Complete pivoting: −10, the largest magnitude anywhere in the active matrix.

**Intuition:** The search region determines which entry becomes the pivot.

</details>

Sources: [Review · 2.39](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-quiz1-three-pivots`

---

### 1236. For dense \(A\in\mathbb R^{n\times n}\), why compute \(x(x^TA)\) instead of \((xx^T)A\)?

**AM 205 · Low-rank computation · COMPARE**

<details>
<summary>Reveal explanation</summary>

Compute the row \(x^TA\) in \(O(n^2)\), then its outer product with x in \(O(n^2)\). Forming \(xx^T\) and using ordinary dense matrix multiplication costs \(O(n^3)\). Both expressions give the same matrix in exact arithmetic.

**Intuition:** Choose parentheses that preserve the cheap low-rank structure.

</details>

Sources: [Review · 2.46](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=3)

Card ID: `am205-quiz1-outer-association`

---

### 1237. How do you solve \(LPx=b\) when L is invertible lower triangular?

**AM 205 · Efficient linear solves · PREDICT**

<details>
<summary>Reveal explanation</summary>

Solve \(Ly=b\) by forward substitution, then set \(x=P^Ty\). The intermediate variable is \(y=Px\).

**Intuition:** Undo the permutation after the triangular solve.

</details>

Sources: [Review · 2.49(a)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-lp-solve`

---

### 1238. How do you solve \(PLx=b\) when L is invertible lower triangular?

**AM 205 · Efficient linear solves · PREDICT**

<details>
<summary>Reveal explanation</summary>

First form \(P^Tb\), then solve \(Lx=P^Tb\) by forward substitution. Here the permutation acts on the output, so undo it on b.

**Intuition:** The factor order tells you where to apply the inverse permutation.

</details>

Sources: [Review · 2.49(b)](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-pl-solve`

---

### 1239. When can least squares make its residual exactly zero?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

Exactly when b lies in the column space of A: some linear combination of A’s columns equals b. Then the minimum of \(\|Ax-b\|_2\) is zero.

**Intuition:** An exact fit requires the target to be reachable.

</details>

Sources: [Review · 3.5](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-exact-fit`

---

### 1240. Does a zero least-squares residual guarantee unique coefficients?

**AM 205 · Least-squares algorithms · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. With \(A=[1\;1]\) and \(b=1\), every pair satisfying \(x_1+x_2=1\) fits exactly. A nonzero null-space direction changes coefficients without changing the fitted value.

**Intuition:** Perfect prediction does not imply identifiable coefficients.

</details>

Sources: [Review · 3.6 · authored example](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-exact-nonunique`

---

### 1241. Does an arbitrary Householder reflection automatically zero the tail of any vector?

**AM 205 · Householder reflections · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. Its reflecting direction must be chosen from the vector being reduced. For example, \(H=\operatorname{diag}(-1,1)\) sends \((1,1)^T\) to \((-1,1)^T\), leaving the second entry nonzero.

**Intuition:** A reflection has the desired zeros only when designed for that target.

</details>

Sources: [Review · 3.8](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-reflector-designed`

---

### 1242. Why do least-squares coefficients satisfy \(A^TAx=A^Tb\)?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

At the minimum, the residual \(b-Ax\) is perpendicular to every column of A. Thus \(A^T(b-Ax)=0\), giving the normal equations. They hold even when the minimizing coefficients are not unique.

**Intuition:** The leftover error cannot have a component along a direction you can fit.

</details>

Sources: [Review · 3.14](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-normal-equations`

---

### 1243. Are normal equations strictly worse conditioned for every full-column-rank A?

**AM 205 · Least-squares algorithms · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. \(\kappa_2(A^TA)=\kappa_2(A)^2\), but when \(\kappa_2(A)=1\), both equal 1. For example, A with orthonormal columns has \(A^TA=I\).

**Intuition:** Squaring increases numbers greater than one, not one itself.

</details>

Sources: [Review · 3.14 · equality case](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-normal-condition-one`

---

### 1244. How can you check whether two real vectors are perpendicular?

**AM 205 · Geometry of linear maps · PREDICT**

<details>
<summary>Reveal explanation</summary>

Compute their dot product: \(x^Ty=0\). For example, \((1,2)^T\) and \((2,-1)^T\) are perpendicular because \(2-2=0\).

**Intuition:** Positive and negative contributions cancel exactly.

</details>

Sources: [Review · 3.19](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-orthogonal-dot`

---

### 1245. If x is perpendicular to y and y to z, must x be perpendicular to z?

**AM 205 · Geometry of linear maps · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. Take \(x=z=(1,0)^T\) and \(y=(0,1)^T\). Both are perpendicular to y, but \(x^Tz=1\).

**Intuition:** Sharing a perpendicular direction does not make two vectors perpendicular.

</details>

Sources: [Review · 3.20](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=4)

Card ID: `am205-quiz1-orthogonality-not-transitive`

---

### 1246. For a square orthogonal Q, what are its 2-norm, condition number, and Frobenius norm?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(\|Q\|_2=1\), \(\kappa_2(Q)=1\), and \(\|Q\|_F=\sqrt n\) for \(Q\in\mathbb R^{n\times n}\). Every singular value is 1; the Frobenius norm combines their squares.

**Intuition:** No direction stretches, but the total squared size counts n directions.

</details>

Sources: [Review · 3.23 and companions](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-orthogonal-norms`

---

### 1247. Is \(Q=\begin{bmatrix}0&-1\\1&0\end{bmatrix}\) orthogonal?

**AM 205 · Geometry of linear maps · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes. Its columns are perpendicular unit vectors, so \(Q^TQ=I\). It rotates every vector by 90 degrees without changing its length.

**Intuition:** Orthogonal columns give a length-preserving coordinate transformation.

</details>

Sources: [Review · 3.23 · example](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-orthogonal-example`

---

### 1248. For nonzero w, what makes \(H=I-2ww^T\) orthogonal?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(w^Tw=1\). Along w, H multiplies by \(1-2\|w\|_2^2\), which must be −1 for nonzero w. For an unnormalized vector v, use \(H=I-2vv^T/(v^Tv)\).

**Intuition:** Normalize the reflecting direction, or divide by its squared length.

</details>

Sources: [Review · 3.27](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-householder-unit`

---

### 1249. Does \(H=I-2ww^T\) need unit-length w to be symmetric?

**AM 205 · Householder reflections · COMPARE**

<details>
<summary>Reveal explanation</summary>

No. \((ww^T)^T=ww^T\), so \(H^T=H\) for any real w. Unit length is required for this formula to be an orthogonal reflection, not for symmetry.

**Intuition:** Symmetry and length preservation are different properties.

</details>

Sources: [Review · 3.27 · symmetry](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-householder-symmetric`

---

### 1250. For unit w, which parts of a vector does \(I-2ww^T\) change?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

Write \(x=aw+z\) with \(w^Tz=0\). Then \(Hx=-aw+z\): the component along w flips, while every perpendicular component stays fixed.

**Intuition:** A reflection reverses one direction and preserves its perpendicular plane.

</details>

Sources: [Review · 3.27 · authored companion](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-householder-geometric`

---

### 1251. If an orthogonal Q sends \((1,1)^T\) to \((\alpha,0)^T\), what can \(\alpha\) be?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(\alpha=\pm\sqrt2\). Length preservation fixes \(|\alpha|\), not its sign. Householder QR concentrates a column’s remaining Euclidean length in one entry while zeroing the entries below it.

**Intuition:** The squared length survives even when coordinates disappear.

</details>

Sources: [Review · 3.28](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-householder-alpha`

---

### 1252. Why is \(\kappa_2(A)=\sigma_{\max}/\sigma_{\min}\) for invertible A?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

The largest stretch of A is \(\sigma_{\max}\). The inverse has largest stretch \(1/\sigma_{\min}\), because it reverses A’s weakest direction. Multiply the two norms.

**Intuition:** Sensitivity compares the strongest and weakest directions.

</details>

Sources: [Review · 3.43](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-singular-condition`

---

### 1253. How many Householder reflections suffice to triangularize a square \(n\times n\) matrix?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

At most \(n-1\). Each step clears the entries below one diagonal position. The last column has no entries below its diagonal, so it needs no reflection. Some steps can be skipped if the entries are already zero.

**Intuition:** Count tails that need clearing, not columns alone.

</details>

Sources: [Review · Householder QR](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=5)

Card ID: `am205-quiz1-reflector-count`

---

### 1254. With reduced SVD \(A=U_r\Sigma_rV_r^T\), how do you get the minimum-norm least-squares solution?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(x=V_r\Sigma_r^{-1}U_r^Tb\). Project b onto the nonzero left singular directions, divide by their singular values, then combine the right singular directions. Set null-space coefficients to zero.

**Intuition:** Fit reachable directions and avoid adding invisible coefficient components.

</details>

Sources: [Review · SVD and least squares](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=6)

Card ID: `am205-quiz1-svd-solve`

---

### 1255. If reduced Q has orthonormal columns spanning A’s column space, what does \(QQ^Tb\) do?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

It projects b onto the possible fitted vectors. If b is in that space, \(QQ^Tb=b\); if b is perpendicular to it, \(QQ^Tb=0\). Use reduced Q: a full square orthogonal Q would give \(QQ^T=I\).

**Intuition:** Keep only directions the model can express.

</details>

Sources: [Review · QR and projection](../courses/harvard/am205/quiz/quiz1/quiz1review.pdf#page=6)

Card ID: `am205-quiz1-qr-projector`

---

### 1256. Can you build a 2×2 matrix whose columns span \((1,1)^T\) but not \((1,-1)^T\)?

**AM 205 · Geometry of linear maps · PREDICT**

<details>
<summary>Reveal explanation</summary>

Use \(A=\begin{bmatrix}1&1\\1&1\end{bmatrix}\). Every column combination has equal coordinates, so \((1,1)^T\) is reachable and \((1,-1)^T\) is not.

**Intuition:** Choose columns along the direction you want to keep.

</details>

Sources: [2023 · Q1](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-construct-span`

---

### 1257. Can a 2×2 matrix have 2-norm 4 and Frobenius norm 5?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes: \(A=\operatorname{diag}(4,3)\). Its largest singular value is 4, while \(\|A\|_F=\sqrt{4^2+3^2}=5\).

**Intuition:** The spectral norm takes the maximum; the Frobenius norm combines all directions.

</details>

Sources: [2023 · Q4](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-norms-four-five`

---

### 1258. Does a rectangular or singular real matrix still have an SVD?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes. Every real matrix has \(A=U\Sigma V^T\), with orthogonal factors and nonnegative singular values. Rectangular shape changes dimensions; singularity introduces zero singular values.

**Intuition:** An SVD does not require an inverse.

</details>

Sources: [2023 · Q5](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-svd-exists`

---

### 1259. Must an orthogonal matrix have determinant +1?

**AM 205 · Geometry of linear maps · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. Taking determinants of \(Q^TQ=I\) gives \((\det Q)^2=1\), so \(\det Q=\pm1\). A reflection such as \(\operatorname{diag}(1,-1)\) has determinant −1.

**Intuition:** Length preservation allows orientation reversal.

</details>

Sources: [2023 · Q6](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-orthogonal-determinant`

---

### 1260. Can swapping two finite floating-point factors change their rounded product?

**AM 205 · Floating-point arithmetic · PREDICT**

<details>
<summary>Reveal explanation</summary>

Under the same IEEE format and rounding mode, no. Both orders round the same exact product. This does not mean regrouping several factors is harmless. Exclude NaNs and changes in evaluation precision.

**Intuition:** A single rounded multiplication remains commutative.

</details>

Sources: [2023 · Q7](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-product-commutes`

---

### 1261. When is a real diagonal matrix orthogonal?

**AM 205 · Geometry of linear maps · PREDICT**

<details>
<summary>Reveal explanation</summary>

Exactly when every diagonal entry is +1 or −1. For \(D=\operatorname{diag}(d_i)\), \(D^TD=\operatorname{diag}(d_i^2)\), which equals I only if every \(d_i^2=1\).

**Intuition:** Sign flips preserve length; arbitrary scaling does not.

</details>

Sources: [2023 · Q8](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-diagonal-orthogonal`

---

### 1262. Given a nonzero pivot \(a_{ij}\), how do its column and row form a rank-one approximation?

**AM 205 · Low-rank computation · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(B=A_{:j}A_{i:}/a_{ij}\). Dividing by the pivot makes B match both the chosen column and chosen row. Consequently, \(A-B\) is zero on that row and column.

**Intuition:** One cross samples a column direction and its row weights.

</details>

Sources: [2023 · Q10 · rank-one step](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-cross-formula`

---

### 1263. For this matrix, what rank-one approximation uses the complete pivot 9?

**AM 205 · Low-rank computation · PREDICT**

\[A=\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

\[B=\frac19\begin{bmatrix}3\\6\\9\end{bmatrix}\begin{bmatrix}7&8&9\end{bmatrix}=\begin{bmatrix}7/3&8/3&3\\14/3&16/3&6\\7&8&9\end{bmatrix}.\] It matches the final row and column exactly.

**Intuition:** Divide by the shared entry to avoid counting its scale twice.

</details>

Sources: [2023 · Q10](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-cross-nine`

---

### 1264. A stable binary64 solve keeps about 6 of 16 digits. What condition-number scale might explain this?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

Roughly \(10^{10}\): the rule of thumb is digits lost \(\approx\log_{10}\kappa(A)\). This is a worst-case sensitivity estimate, not proof of the exact condition number from one observed error.

**Intuition:** Ten lost digits suggest ten orders of possible amplification.

</details>

Sources: [2023 · Q12](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=1)

Card ID: `am205-quiz1-six-digits`

---

### 1265. How much storage does \(A=BC\) need for a 10000×10000 rank-100 matrix?

**AM 205 · Low-rank computation · PREDICT**

<details>
<summary>Reveal explanation</summary>

B is 10000×100 and C is 100×10000, so together they store 2,000,000 numbers. A dense A stores 100,000,000: 50 times as many.

**Intuition:** Store the smaller factors when a few directions explain the whole map.

</details>

Sources: [2023 · Q13](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-rank-storage`

---

### 1266. How many multiplications compute \(Ax\) using 10000×100 B and 100×10000 C?

**AM 205 · Low-rank computation · PREDICT**

<details>
<summary>Reveal explanation</summary>

Compute \(y=Cx\), then \(By\). Each stage takes 1,000,000 multiplications, totaling 2,000,000, versus 100,000,000 for dense A. Do not form BC first.

**Intuition:** Keep the intermediate vector in the small 100-dimensional space.

</details>

Sources: [2023 · Q14](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-rank-matvec`

---

### 1267. What does a rank-100 map in \(\mathbb R^{10000}\) do to the unit ball?

**AM 205 · Geometry of linear maps · PREDICT**

<details>
<summary>Reveal explanation</summary>

It produces a bounded ellipsoid lying in a 100-dimensional column space. Its nonzero singular values are the semiaxis lengths. The image is not the entire subspace: input lengths are bounded.

**Intuition:** Rank counts surviving directions, while the unit-ball constraint bounds their extent.

</details>

Sources: [2023 · Q15](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-rank-ball`

---

### 1268. For full-column-rank A, when do two targets give the same least-squares coefficients?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

When \(A^T(b_1-b_2)=0\): their difference is perpendicular to A’s column space. Equivalently, their projections onto the possible fitted vectors are equal.

**Intuition:** Changing only the unfit part of the data leaves coefficients unchanged.

</details>

Sources: [2023 · Q16](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-same-fit`

---

### 1269. For unit w, why does \((I-2ww^T)^T(I-2ww^T)=I\)?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

Expand: \[I-4ww^T+4w(w^Tw)w^T.\] Since \(w^Tw=1\), the last two terms cancel. Thus H preserves length; symmetry also gives \(H^2=I\).

**Intuition:** Reflecting twice restores the original vector.

</details>

Sources: [2023 · Q17](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-householder-proof`

---

### 1270. To convert orthogonal columns into SVD columns, what must you do first?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

Normalize them and absorb their lengths into the middle scaling. For \(C=[(1,0,1)^T\;(0,1,0)^T]\), the column lengths are \(\sqrt2\) and 1. Orthogonal is not the same as orthonormal.

**Intuition:** Singular vectors have unit length; singular values carry the stretching.

</details>

Sources: [2023 · Q18 · normalize factors](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-svd-normalize`

---

### 1271. What are the singular values of \(A=\begin{bmatrix}1&1\\-1&1\\1&1\end{bmatrix}\)?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(A^TA=\begin{bmatrix}3&1\\1&3\end{bmatrix}\), with eigenvalues 4 and 2. The singular values are their square roots: 2 and \(\sqrt2\).

**Intuition:** The squared stretches appear as eigenvalues of the Gram matrix.

</details>

Sources: [2023 · Q18 · singular values](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-svd-factor-example`

---

### 1272. For the displayed A, if \(v_1=(1,1)^T/\sqrt2\), what is its matching left singular vector?

**AM 205 · Least-squares algorithms · PREDICT**

\[A=\begin{bmatrix}1&1\\-1&1\\1&1\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

\(Av_1=(\sqrt2,0,\sqrt2)^T\). Its length is 2, so \(u_1=Av_1/2=(1,0,1)^T/\sqrt2\). Similarly, \(v_2=(-1,1)^T/\sqrt2\) gives \(u_2=(0,1,0)^T\) and \(\sigma_2=\sqrt2\).

**Intuition:** Apply A to a unit input direction, then normalize the output.

</details>

Sources: [2023 · Q18 · singular vectors](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-svd-factor-vectors`

---

### 1273. Can a negative middle factor be left as a negative singular value?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

No. Singular values are nonnegative. Absorb a negative sign into a singular vector instead. Once an SVD is formed, flipping both \(u_i\) and \(v_i\) leaves \(\sigma_i u_iv_i^T\) unchanged.

**Intuition:** Sign choices belong to directions, not stretch magnitudes.

</details>

Sources: [2023 · Q18 · sign convention](../courses/harvard/am205/quiz/quiz1/solns23.pdf#page=2)

Card ID: `am205-quiz1-svd-signs`

---

### 1274. Why can the closest fit in infinity-norm differ from the perpendicular Euclidean fit?

**AM 205 · Least-squares algorithms · COMPARE**

<details>
<summary>Reveal explanation</summary>

An infinity-norm ball is an axis-aligned square in 2D, while a Euclidean ball is a circle. Expand the appropriate shape around b until it touches the line of possible fits. The first contact can occur at different points.

**Intuition:** Changing the error measure changes which discrepancy matters most.

</details>

Sources: [2024 · Q2](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-quiz1-infinity-fit-geometry`

---

### 1275. Fit \(b=(1,0)^T\) by \((t,2t)^T\). Which t minimizes the largest absolute coordinate error?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(t=1/3\). Balance \(1-t=2t\), giving maximum error \(2/3\). The residual has equal-magnitude coordinates. This corner-contact geometry explains the 45-degree direction in the quiz figure; it is not universal for every line.

**Intuition:** The best worst-coordinate fit balances the competing errors.

</details>

Sources: [2024 · Q2 · authored companion](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-quiz1-infinity-fit-example`

---

### 1276. For the same fit \((t,2t)^T\) to \((1,0)^T\), what does ordinary least squares choose?

**AM 205 · Least-squares algorithms · COMPARE**

<details>
<summary>Reveal explanation</summary>

\(t=1/5\), because minimizing \((t-1)^2+4t^2\) gives \(10t-2=0\). This differs from the infinity-norm optimum \(1/3\).

**Intuition:** Least squares balances squared errors; infinity-norm controls the worst coordinate.

</details>

Sources: [2024 · Q2 · authored companion](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-quiz1-two-fit-objectives`

---

### 1277. What matrix properties help accurate linear solves versus low-rank compression?

**AM 205 · Matrix conditioning · COMPARE**

<details>
<summary>Reveal explanation</summary>

Solves benefit from a modest condition number and a stable algorithm. Compression benefits from rapidly decaying singular values, so discarded directions contribute little. A large condition number alone does not guarantee a useful low-rank approximation.

**Intuition:** Invertibility needs every direction; compression deliberately discards weak ones.

</details>

Sources: [2024 · Q3](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-quiz1-solve-vs-compress`

---

### 1278. Does \(A=\operatorname{diag}(1,\ldots,1,10^{-12})\) have a good rank-one approximation?

**AM 205 · Matrix conditioning · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

Not when there are many unit entries. Its condition number is huge, but dropping to rank one discards many equally strong directions. Only the final direction is tiny.

**Intuition:** A ratio of extremes does not describe the whole singular-value spectrum.

</details>

Sources: [2024 · Q3 · authored counterexample](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=1)

Card ID: `am205-quiz1-condition-not-rank`

---

### 1279. What is the rank of this cross-shaped matrix?

**AM 205 · Low-rank approximation · PREDICT**

\[A=\begin{bmatrix}0&1&0\\1&1&1\\0&1&0\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

2. Columns 1 and 3 are identical, giving an upper bound of 2. Columns 1 and 2 are independent, so the rank is at least 2.

**Intuition:** Prove rank with both a construction and an independence check.

</details>

Sources: [2024 · Q4](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-flag-rank`

---

### 1280. How can two outer products build the displayed cross-shaped matrix?

**AM 205 · Low-rank approximation · PREDICT**

\[A=\begin{bmatrix}0&1&0\\1&1&1\\0&1&0\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

\[A=\begin{bmatrix}0\\1\\0\end{bmatrix}\begin{bmatrix}1&1&1\end{bmatrix}+\begin{bmatrix}1\\0\\1\end{bmatrix}\begin{bmatrix}0&1&0\end{bmatrix}.\] The first builds the middle row; the second adds the top and bottom of the middle column.

**Intuition:** Avoid double-counting the central pixel.

</details>

Sources: [2024 · Q4 · rank-one decomposition](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-flag-decompose`

---

### 1281. For dense LU, how does factoring a 2n×n matrix compare with an n×n matrix?

**AM 205 · Efficient linear solves · PREDICT**

<details>
<summary>Reveal explanation</summary>

The leading cost for \(m\ge n\) is \(mn^2-n^3/3\). The ratio is \((2-1/3)/(1-1/3)=5/2\). Doubling rows while fixing columns is different from doubling both dimensions.

**Intuition:** Elimination work shrinks across successive columns.

</details>

Sources: [2024 · Q5](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-tall-factor-cost`

---

### 1282. Does dense Householder QR have the same 2n×n versus n×n cost ratio as LU?

**AM 205 · Efficient linear solves · COMPARE**

<details>
<summary>Reveal explanation</summary>

Yes, to leading order. QR costs \(2mn^2-2n^3/3\), twice the corresponding LU formula. That common factor cancels in the ratio, again giving \(5/2\).

**Intuition:** Cost ratios depend on shape as well as the factorization.

</details>

Sources: [2024 · Q5 · QR companion](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-tall-qr-cost`

---

### 1283. Why can \(\|AB\|_2\) never exceed \(\|A\|_2\|B\|_2\)?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

For every unit x, \(\|ABx\|_2\le\|A\|_2\|Bx\|_2\le\|A\|_2\|B\|_2\). Maximize over x. Each stage can stretch by at most its own maximum.

**Intuition:** The maximum combined stretch cannot beat the product of individual maxima.

</details>

Sources: [2024 · Q6 · bound](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-product-norm-bound`

---

### 1284. For nonzero A and B, when does \(\|AB\|_2=\|A\|_2\|B\|_2\)?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

When some input maximally stretched by B is sent into an input direction maximally stretched by A. Equivalently, B’s top left-singular subspace intersects A’s top right-singular subspace nontrivially. With repeated top singular values, one compatible direction is enough.

**Intuition:** The strongest directions must connect across the two maps.

</details>

Sources: [2024 · Q6 · equality](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-product-norm-alignment`

---

### 1285. For \(A=\operatorname{diag}(2,1)\), which B attains the product-of-norms bound?

**AM 205 · Matrix conditioning · COMPARE**

<details>
<summary>Reveal explanation</summary>

\(B=\operatorname{diag}(3,1)\) gives \(AB=\operatorname{diag}(6,1)\), attaining \(2\cdot3=6\). With \(B=\operatorname{diag}(1,3)\), the product is \(\operatorname{diag}(2,3)\), whose norm is only 3.

**Intuition:** Strong stretches reinforce each other only when their directions line up.

</details>

Sources: [2024 · Q6 · authored companion](../courses/harvard/am205/quiz/quiz1/solns24.pdf#page=2)

Card ID: `am205-quiz1-product-norm-example`

---

### 1286. Can a computed \(A^TA\) be symmetric even when its entries have rounding error?

**AM 205 · Floating-point arithmetic · PREDICT**

<details>
<summary>Reveal explanation</summary>

Yes. Paired entries use the same products in reverse operand order. If both dot products use identical summation order, precision, and rounding, their results agree. Different reduction orders can break exact symmetry; do not assume it for every implementation.

**Intuition:** Rounding error and loss of symmetry are separate questions.

</details>

Sources: [2025 · Q1](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-rounded-gram`

---

### 1287. In the first symmetric Householder step on a 5×5 matrix, which entries are deliberately zeroed?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

Entries \((3,1),(4,1),(5,1)\) and their symmetric partners \((1,3),(1,4),(1,5)\). The first subdiagonal entry is retained. Two-sided updates preserve symmetry while moving toward tridiagonal form.

**Intuition:** Symmetric reduction clears beyond the first off-diagonal, not every off-diagonal entry.

</details>

Sources: [2025 · Q2 · zero pattern](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-similarity-zeros`

---

### 1288. With \(H=\operatorname{diag}(1,\widetilde H)\), which entry of \(H^TAH\) is guaranteed to equal A’s?

**AM 205 · Householder reflections · PREDICT**

<details>
<summary>Reveal explanation</summary>

The top-left entry: \(e_1^TH^TAHe_1=e_1^TAe_1=A_{11}\), because \(He_1=e_1\). Other entries may coincide for special A, but are not generally fixed.

**Intuition:** Leaving the first basis vector unchanged protects its quadratic-form value.

</details>

Sources: [2025 · Q2 · unchanged entry](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-similarity-fixed`

---

### 1289. Why use \(H^TAH\) rather than only \(HA\) in symmetric eigenvalue reduction?

**AM 205 · Householder reflections · COMPARE**

<details>
<summary>Reveal explanation</summary>

For orthogonal H, \(H^T=H^{-1}\), so the two-sided update is a similarity transformation. It preserves eigenvalues and, for symmetric A, symmetry. A one-sided QR update need not preserve A’s eigenvalues.

**Intuition:** Change coordinates on both sides to represent the same linear map.

</details>

Sources: [2025 · Q2 · authored companion](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-similarity-spectrum`

---

### 1290. Does forming \(A+A^T\) guarantee that Cholesky can be used?

**AM 205 · Structured factorizations · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. It guarantees symmetry, not positive definiteness. For \(A=-I\), the sum is \(-2I\), which is negative definite. Standard real Cholesky needs a symmetric positive-definite matrix.

**Intuition:** Check the sign of quadratic forms before choosing Cholesky.

</details>

Sources: [2025 · Q3](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-symmetric-not-spd`

---

### 1291. When Cholesky applies, how does its dense factorization cost compare with LU?

**AM 205 · Structured factorizations · COMPARE**

<details>
<summary>Reveal explanation</summary>

Cholesky takes about \(n^3/3\) floating-point operations, versus \(2n^3/3\) for general LU. Its symmetry lets it do roughly half the leading work.

**Intuition:** Structure saves work only when the required assumptions hold.

</details>

Sources: [2025 · Q3 · operation counts](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=1)

Card ID: `am205-quiz1-cholesky-work`

---

### 1292. Using pivot 2, what rank-one approximation does this matrix produce?

**AM 205 · Low-rank approximation · PREDICT**

\[A=\begin{bmatrix}1&1&1&1\\1&1&1&1\\1&1&1&2\end{bmatrix}.\]

<details>
<summary>Reveal explanation</summary>

\[B=\begin{bmatrix}1/2&1/2&1/2&1\\1/2&1/2&1/2&1\\1&1&1&2\end{bmatrix}.\] It is column 4 times row 3, divided by the pivot 2.

**Intuition:** The chosen row and column are matched exactly.

</details>

Sources: [2025 · Q4 · complete-pivot approximation](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-cross-two`

---

### 1293. A rank-one residual has six entries equal to 1/2 and every other entry zero. What is its Frobenius norm?

**AM 205 · Low-rank approximation · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(\sqrt{6(1/2)^2}=\sqrt{3/2}\). Square each entry, sum them, then take the square root. This is the error of the quiz’s one-step complete-pivot approximation.

**Intuition:** Frobenius error combines entrywise errors in quadrature.

</details>

Sources: [2025 · Q4 · Frobenius error](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-cross-two-error`

---

### 1294. For fixed full-column-rank A, can a target perturbation of length \(\varepsilon\) move its least-squares fit farther than \(\varepsilon\)?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

No. The fitted-vector change is \(\delta\hat b=P\delta b\), with \(P=QQ^T\). Orthogonal projection cannot increase Euclidean length, so \(\|\delta\hat b\|_2\le\varepsilon\).

**Intuition:** Discarding the perpendicular component cannot enlarge a vector.

</details>

Sources: [2025 · Q5 · prediction sensitivity](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-fit-contraction`

---

### 1295. Can least-squares coefficients change greatly even when the fitted vector barely changes?

**AM 205 · Least-squares algorithms · COMPARE**

<details>
<summary>Reveal explanation</summary>

Yes. \(\delta x=A^+\delta b\), so \(\|\delta x\|_2\le\|\delta b\|_2/\sigma_{\min}(A)\). A tiny smallest singular value allows large coefficient changes, while the fitted-vector change remains bounded by \(\|\delta b\|_2\).

**Intuition:** Large, canceling coefficient changes can have small prediction effects.

</details>

Sources: [2025 · Q5 · coefficient sensitivity](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-coefficient-sensitivity`

---

### 1296. Which target perturbation maximizes coefficient change in full-column-rank least squares?

**AM 205 · Least-squares algorithms · PREDICT**

<details>
<summary>Reveal explanation</summary>

\(\delta b=\varepsilon u_{\min}\), along the weakest left singular direction. Then \(\delta x=(\varepsilon/\sigma_{\min})v_{\min}\). A perturbation perpendicular to the column space instead changes no coefficient.

**Intuition:** Noise matters most when it points along the model’s weakest identifiable direction.

</details>

Sources: [2025 · Q5 · equality direction](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-worst-target-direction`

---

### 1297. For invertible square A and B, why is \(\kappa_2(AB)\le\kappa_2(A)\kappa_2(B)\)?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

Bound \(\|AB\|_2\) by \(\|A\|_2\|B\|_2\), and \(\|(AB)^{-1}\|_2=\|B^{-1}A^{-1}\|_2\) by \(\|B^{-1}\|_2\|A^{-1}\|_2\). Multiply the bounds.

**Intuition:** Both the forward map and its inverse contribute to sensitivity.

</details>

Sources: [2025 · Q6 · product bound](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-product-condition-bound`

---

### 1298. If \(\|A\|_2=\|B\|_2=1\) and both condition numbers are 2, how large can \(\kappa_2(AB)\) be?

**AM 205 · Matrix conditioning · PREDICT**

<details>
<summary>Reveal explanation</summary>

At most 4, and 4 is attainable. Take \(A=B=\operatorname{diag}(1,1/2)\); then \(AB=\operatorname{diag}(1,1/4)\), whose condition number is 4.

**Intuition:** Aligned weak directions compound the loss of relative scale.

</details>

Sources: [2025 · Q6 · product construction](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-product-condition-four`

---

### 1299. If A and B each have norm 1 and condition number 2, must A+B be well-conditioned?

**AM 205 · Matrix conditioning · SPOT THE MISTAKE**

<details>
<summary>Reveal explanation</summary>

No. Choose \(A=\operatorname{diag}(1,1/2)\) and \(B=\operatorname{diag}(1,-1/2)\). Each has condition number 2, but \(A+B=\operatorname{diag}(2,0)\) is singular. There is no analogous finite bound for the sum.

**Intuition:** Adding two reliable maps can cancel an entire direction.

</details>

Sources: [2025 · Q6 · sum counterexample](../courses/harvard/am205/quiz/quiz1/solns25.pdf#page=2)

Card ID: `am205-quiz1-sum-condition-unbounded`
