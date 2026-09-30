# StudyScroll: master feed

Updated 2026-09-29. 291 curated cards.

Expanding, uncapped coverage of current assignments and lecture concepts, with supporting textbook sections. Includes concept explanations, calculation prompts, derivation steps, implementation pitfalls, and cross-course connections. Coverage is tracked in coverage.json; card presence is not proof of mastery or exhaustive source review.

The editable source of truth is [master-feed.json](master-feed.json). This readable document is generated with `npm run feed:build`. Edit the JSON, then regenerate; the Next app imports that same JSON directly.

These are authored learning prompts derived from the listed materials, not quotations or official answer keys. Companion examples and cross-course explanations add interpretation. Reveal the explanation only after attempting the prompt.

## Course map

- **AM 205:** floating-point spacing, rounding, matrix operations, linear-map geometry, pivoting, low-rank approximation, algebraic least squares.
- **AM 207:** inverse transforms, Monte Carlo rates, Metropolis–Hastings, stationarity and detailed balance, coarse states, SSA, moment closure, Bayesian updating.
- **STAT 244:** column and null spaces, estimability, identifiability, reparameterization, projections, contrasts, variance estimation, Gauss–Markov.
See [coverage.json](coverage.json) for learning-objective mappings and [CURATION.md](CURATION.md) for the uncapped content workflow. Scope is current lectures and assignments with supporting textbook sections. No fixed total, per-course quota, or daily card limit applies.

## Feed

### 01. The number after 99 is not 100.

**AM 205 · Floating-point arithmetic · QUICK RECALL**

In IEEE binary64, what is the next representable number larger than 99?

Start by finding the power-of-two interval containing 99.

<details>
<summary>Reveal explanation</summary>

99 lies in [2⁶, 2⁷). Binary64 has 53 significant binary digits, so spacing in this interval is 2⁽⁶⁻⁵²⁾ = 2⁻⁴⁶. The next number is 99 + 2⁻⁴⁶.

Spacing is constant inside a power-of-two interval, then doubles at the next boundary.

**Remember:** Spacing depends on magnitude.

</details>

Sources: [PS1 · Q1(a)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-spacing`

---

### 02. A uniform draw becomes a waiting time.

**AM 207 · Inverse-transform sampling · TINY PROBLEM**

Let U be uniform on (0,1). Find a transformation of U that produces an exponential waiting time with rate λ > 0.

<details>
<summary>Reveal explanation</summary>

The exponential CDF is F(t) = 1 − e⁻ˡᵗ. Solving U = F(t) gives T = −log(1 − U)/λ. Since 1 − U is also uniform, −log(U)/λ has the same distribution.

Keep the logarithm input strictly positive. The mean waiting time is 1/λ.

**Remember:** Invert the CDF to change the distribution.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse`

---

### 03. A model is a space of possible means.

**STAT 244 · Column spaces · QUICK RECALL**

For an n × p matrix X, why is {Xβ : β ∈ ℝᵖ} a subspace of ℝⁿ?

<details>
<summary>Reveal explanation</summary>

It contains zero because X0 = 0. It is closed under addition because Xβ₁ + Xβ₂ = X(β₁ + β₂). It is closed under scalar multiplication because cXβ = X(cβ).

This column space is the set of mean vectors the linear model can represent.

**Remember:** The columns define the model’s possibilities.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-space`

---

### 04. The two gaps beside 2 are different.

**AM 205 · Floating-point arithmetic · TINY PROBLEM**

What are the binary64 gaps immediately below and immediately above 2?

<details>
<summary>Reveal explanation</summary>

Below 2, numbers lie in [1,2) and the gap is 2⁻⁵². Above 2, they lie in [2,4) and the gap is 2⁻⁵¹. The next larger number is 2 + 2⁻⁵¹, while the predecessor is 2 − 2⁻⁵².

**Remember:** Spacing changes at a power-of-two boundary.

</details>

Sources: [PS1 · Q1(a)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-binade-boundary`

---

### 05. Why does inverting the CDF work?

**AM 207 · Inverse-transform sampling · BUILD THE PROOF**

Assume F is continuous and strictly increasing and U is uniform on (0,1). Show that X=F⁻¹(U) has CDF F.

<details>
<summary>Reveal explanation</summary>

P(X≤x)=P(F⁻¹(U)≤x)=P(U≤F(x))=F(x). Monotonicity lets you move the inequality through F. A generalized inverse extends the method to distributions with jumps or flat regions.

**Remember:** Prove the distribution through its CDF.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-inverse-proof`

---

### 06. Which space does each vector live in?

**STAT 244 · Column spaces · TINY PROBLEM**

For an n×p design matrix X, identify the ambient spaces of β, Xβ, C(X), and N(X).

<details>
<summary>Reveal explanation</summary>

β and N(X) live in ℝᵖ, the coefficient space. Xβ and C(X) live in ℝⁿ, the observation space. Confusing these spaces makes expressions like “the residual lies in N(X)” dimensionally wrong; ordinary least-squares residuals lie in N(Xᵀ).

**Remember:** Check dimensions before proving a statement.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-ambient-dimensions`

---

### 07. Two constants often share the name epsilon.

**AM 205 · Floating-point arithmetic · COMPARE DEFINITIONS**

In binary64 with round-to-nearest, distinguish the gap between 1 and its successor from the usual unit roundoff u.

<details>
<summary>Reveal explanation</summary>

The gap is 2⁻⁵². Unit roundoff is u = 2⁻⁵³, half that spacing, used in the relative rounding bound for normal results. Some software calls the former machine epsilon; some texts use epsilon for the latter. Check the convention before applying an error bound.

**Remember:** State the convention, not just the symbol.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-roundoff-versus-epsilon`

---

### 08. Move a uniform draw into a new interval.

**AM 207 · Inverse-transform sampling · TINY PROBLEM**

Given U∼Uniform(0,1), create a draw uniform on [−2,5]. What is its density?

<details>
<summary>Reveal explanation</summary>

X=−2+7U is uniform on that interval. Its density is 1/7 there and zero outside. A translation sets the lower endpoint; scaling sets the interval length.

**Remember:** Shift and scale the unit interval.

</details>

Sources: [Lecture 02 · uniform transformation](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=28)

Card ID: `am207-affine-uniform`

---

### 09. Count identifiable and invisible directions.

**STAT 244 · Column spaces · TINY PROBLEM**

X is a 10×4 matrix of rank 3. What are dim C(X), dim N(X), and dim C(X)⊥?

<details>
<summary>Reveal explanation</summary>

They are 3, 4−3=1, and 10−3=7. One coefficient-space direction is invisible to the mean, while seven observation-space directions are perpendicular to the fitted-value space. These dimensions refer to two different ambient spaces.

**Remember:** Rank-nullity depends on the domain dimension.

</details>

Sources: [Linear algebra notes · subspaces and rank](../courses/stat244/lecnotes/notes-linalg.pdf#page=4)

Card ID: `stat244-rank-nullity`

---

### 10. Build a tiny floating-point grid.

**AM 205 · Floating-point arithmetic · WORKED EXAMPLE**

A normalized binary system has p=3 significant bits, including the leading 1. List its representable values in [1,2).

<details>
<summary>Reveal explanation</summary>

The significands are 1.00₂, 1.01₂, 1.10₂, and 1.11₂. They represent 1, 1.25, 1.5, and 1.75. The gap is 2^(1−p)=1/4. In [2,4), multiply these values by 2, so the gap becomes 1/2.

**Remember:** Build one interval, then scale it.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-toy-binary`

---

### 11. Rate and scale are reciprocals.

**AM 207 · Inverse-transform sampling · TINY PROBLEM**

For an exponential rate λ=4 per second, what are the mean and variance of a waiting time?

<details>
<summary>Reveal explanation</summary>

Mean is 1/λ=0.25 seconds. Variance is 1/λ²=1/16 second². A random-number API using an exponential scale parameter expects 0.25, not 4. Check parameter conventions before sampling.

**Remember:** Rate has inverse-time units; scale has time units.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-exponential-number`

---

### 12. The model can stay fixed even if every column changes.

**STAT 244 · Column spaces · SPOT THE MISTAKE**

If two design matrices have different columns, must they define different least-squares mean models?

<details>
<summary>Reveal explanation</summary>

No. Different bases can span the same column space. The model consists of all possible Xβ vectors, not the particular list of columns. Compare column spaces and constraints, not just the literal entries.

**Remember:** A basis is a representation of a space.

</details>

Sources: [HW1 · Q1](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-span-not-columns`

---

### 13. When does adding one stop moving?

**AM 205 · Floating-point arithmetic · TINY PROBLEM**

Binary64 represents every integer up to 2⁵³ exactly. What happens to 2⁵³ + 1 in round-to-nearest, ties-to-even arithmetic?

<details>
<summary>Reveal explanation</summary>

In [2⁵³,2⁵⁴), adjacent numbers are spaced by 2. The exact result lies halfway between 2⁵³ and 2⁵³+2, and the tie rule selects 2⁵³. This does not mean all integers above 2⁵³ are unrepresentable: the even ones in this interval are representable.

**Remember:** Exact integers stop being consecutive.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-largest-consecutive-integers`

---

### 14. Survival for another interval forgets the elapsed wait.

**AM 207 · Inverse-transform sampling · DERIVATION**

For T∼Exp(λ), compute P(T>s+t | T>s).

<details>
<summary>Reveal explanation</summary>

It is P(T>s+t)/P(T>s)=exp(−λ(s+t))/exp(−λs)=exp(−λt). The conditional remaining waiting time has the original distribution. This property applies to a constant hazard, not to arbitrary waiting-time laws.

**Remember:** Exponential survival makes the elapsed time cancel.

</details>

Sources: [Lecture 01 · p. 44](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=44)

Card ID: `am207-memoryless-proof`

---

### 15. Which direction can neither column reach?

**STAT 244 · Fundamental subspaces · TINY PROBLEM**

X has columns (1,1,0)ᵀ and (0,1,1)ᵀ.

Find all vectors perpendicular to both columns.

<details>
<summary>Reveal explanation</summary>

For v = (a,b,c)ᵀ, orthogonality requires a + b = 0 and b + c = 0. Thus v = t(1,−1,1)ᵀ.

In general, C(X)⊥ = N(Xᵀ). Be careful about orientation: N(X) instead equals C(Xᵀ)⊥.

**Remember:** Orthogonality becomes a null-space equation.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-null`

---

### 16. Gradual underflow trades relative precision for range.

**AM 205 · Floating-point arithmetic · QUICK RECALL**

What happens to floating-point spacing in the subnormal range?

<details>
<summary>Reveal explanation</summary>

Subnormals use a fixed minimum exponent and allow a leading zero significand. Their absolute spacing is constant, extending values toward zero. Relative spacing grows as the values shrink, so the usual small relative-error bound for normal values no longer applies uniformly.

**Remember:** Subnormals preserve small absolute values.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-subnormal-role`

---

### 17. Ten times more precise costs how much?

**AM 207 · Monte Carlo · TINY PROBLEM**

For independent samples with finite variance, a Monte Carlo average has standard error σ/√N.

How many samples do you need to shrink that error by a factor of 10?

<details>
<summary>Reveal explanation</summary>

100 times as many. Solving σ/√N_new = (σ/√N_old)/10 gives N_new = 100 N_old.

The N⁻¹ᐟ² exponent is dimension-independent, but variance, evaluation cost, and relative error can still depend strongly on dimension.

**Remember:** Error shrinks with √N, not N.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mc-rate`

---

### 18. Orthogonal to every row means annihilated by X.

**STAT 244 · Fundamental subspaces · BUILD THE PROOF**

Prove N(X)=C(Xᵀ)⊥ by looking at row-vector dot products.

<details>
<summary>Reveal explanation</summary>

Xv=0 means every row of X has dot product zero with v. Therefore v is orthogonal to every linear combination of those rows, which form C(Xᵀ). Conversely, orthogonality to the row space includes each row, so every component of Xv is zero.

**Remember:** A null-space equation is a collection of orthogonality tests.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-nullspace-test`

---

### 19. Count the gaps. Then count the endpoints.

**AM 205 · Floating-point arithmetic · TINY PROBLEM**

How many binary64 numbers lie in the closed interval [1.5, 2]?

The spacing below 2 is 2⁻⁵².

<details>
<summary>Reveal explanation</summary>

There are (2 − 1.5) / 2⁻⁵² = 2⁵¹ gaps. Both endpoints are representable and included, so there are 2⁵¹ + 1 numbers.

The larger spacing above 2 does not change the number of points up to and including 2.

**Remember:** Numbers = gaps + 1.

</details>

Sources: [PS1 · Q1(b)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-count`

---

### 20. An integral is an average times volume.

**AM 207 · Monte Carlo · WORKED EXAMPLE**

To estimate ∫₂⁵f(x)dx using independent uniform samples on [2,5], what estimator do you use?

<details>
<summary>Reveal explanation</summary>

Use 3·N⁻¹Σf(Xᵢ). Uniform density is 1/3, so the sample average estimates one third of the integral. On a d-dimensional region sampled uniformly, multiply by the region’s volume.

**Remember:** Do not forget the domain-volume factor.

</details>

Sources: [Lecture 03 · pp. 25–27](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=26)

Card ID: `am207-integral-volume`

---

### 21. Split a vector into its mean and centered part.

**STAT 244 · Fundamental subspaces · WORKED EXAMPLE**

For y=(1,2,6)ᵀ, project onto span((1,1,1)ᵀ), then compute the orthogonal residual.

<details>
<summary>Reveal explanation</summary>

The projection is the mean times the ones vector: (3,3,3)ᵀ. The residual is (−2,−1,3)ᵀ. Its components sum to zero, so it is perpendicular to the ones vector. Their sum recovers y.

**Remember:** Centering removes the intercept-space component.

</details>

Sources: [HW1 · Q2](../courses/stat244/homeworks/ps1/hw1.pdf#page=1)

Card ID: `stat244-orthogonal-decomposition-example`

---

### 22. A nonrepresentable endpoint does not get an extra point.

**AM 205 · Floating-point arithmetic · DERIVATION**

For a uniform grid a+kδ, k≥0, count grid points in [a,b] when b need not lie on the grid.

<details>
<summary>Reveal explanation</summary>

The largest allowed k is floor((b−a)/δ). Including k=0 gives floor((b−a)/δ)+1 points. Do not round the quotient to the nearest integer. For the homework interval [1/2,2/3], δ=2⁻⁵³, giving floor(2⁵³/6)+1.

**Remember:** Use a floor when the upper endpoint is between points.

</details>

Sources: [PS1 · Q1(b)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-non-grid-endpoint`

---

### 23. Linearity of expectation proves unbiasedness.

**AM 207 · Monte Carlo · BUILD THE PROOF**

For identically distributed draws with E[f(Xᵢ)]=I, why is Î=N⁻¹Σf(Xᵢ) unbiased? Is independence required for that step?

<details>
<summary>Reveal explanation</summary>

E[Î]=N⁻¹ΣE[f(Xᵢ)]=I. Independence is not required for this expectation identity. Independence matters for the simple variance formula σ²/N; dependence adds covariance terms.

**Remember:** Separate the unbiasedness argument from the variance argument.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-mean-unbiased-proof`

---

### 24. Unidentified coefficients can still give an identified answer.

**STAT 244 · Estimability · THINK IT THROUGH**

Suppose β is not unique because X has dependent columns. What condition makes ℓᵀβ estimable by a linear unbiased estimator?

<details>
<summary>Reveal explanation</summary>

There must be an a with Xᵀa = ℓ, meaning ℓ lies in C(Xᵀ), the row space of X. Then E[aᵀy] = aᵀXβ = ℓᵀβ.

Equivalently, ℓ must be orthogonal to every null direction of X, so changing β without changing Xβ cannot change the target ℓᵀβ.

**Remember:** Estimate what the data can distinguish.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-estimable`

---

### 25. Different inputs. The same reciprocal.

**AM 205 · Rounding & information loss · CONNECT THE DOTS**

Real-number reciprocals are one-to-one. Why can two different floating-point inputs produce exactly the same computed reciprocal?

<details>
<summary>Reveal explanation</summary>

Rounding maps a continuum of exact results onto a finite grid. For inputs in [1.5, 2], exact reciprocals lie in [0.5, 2/3]. That output interval contains fewer binary64 grid points than the input interval. In binary64, rounding 2/3 goes downward, so rounded outputs remain in this interval. By the pigeonhole principle, at least two inputs share an output.

**Remember:** Rounding can destroy one-to-one mappings.

</details>

Sources: [PS1 · Q1(c–e)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-reciprocal`

---

### 26. Estimate the sampling error, not the spread of individual draws.

**AM 207 · Monte Carlo · TINY PROBLEM**

Function values have sample standard deviation s=3 across N=900 independent draws. Estimate the standard error of their mean.

<details>
<summary>Reveal explanation</summary>

s/√N=3/30=0.1. The value 3 describes variation of individual function evaluations; 0.1 describes estimated variation of the average across repeated samples. If estimating an integral with a volume factor, multiply the standard error by that factor too.

**Remember:** Spread of draws and uncertainty of their average differ.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-standard-error-number`

---

### 27. A sum can be estimable when its pieces are not.

**STAT 244 · Estimability · TINY PROBLEM**

Suppose X=[x x] with x≠0. Are β₁, β₂, β₁+β₂, and β₁−β₂ identifiable from the mean?

<details>
<summary>Reveal explanation</summary>

The mean is x(β₁+β₂), so only the sum among these targets is identifiable. Adding t to β₁ and subtracting t from β₂ leaves the mean unchanged but changes either individual coefficient and their difference. The row space is span((1,1)ᵀ).

**Remember:** Look for functions unchanged by null directions.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-duplicate-columns`

---

### 28. A collision must exist. That does not locate it.

**AM 205 · Rounding & information loss · SPOT THE MISTAKE**

A counting argument proves that some floating-point reciprocals collide. Does it imply every pair of adjacent inputs has equal reciprocals?

<details>
<summary>Reveal explanation</summary>

No. More inputs than possible rounded outputs guarantees at least one collision, not a collision at each adjacent pair. To locate examples, evaluate neighboring machine numbers, for example with nextafter. The proof and the search answer different questions.

**Remember:** Existence is not a statement about every pair.

</details>

Sources: [PS1 · Q1(c–e)](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-pigeonhole-not-all`

---

### 29. RMSE equals standard deviation only when bias is zero.

**AM 207 · Monte Carlo · DERIVATION**

State the decomposition of mean squared estimation error into variance and squared bias.

<details>
<summary>Reveal explanation</summary>

E[(Î−I)²]=Var(Î)+(E[Î]−I)². For an unbiased estimator, RMSE=√Var(Î). For a biased estimator, a reported standard error does not account for the squared-bias contribution.

**Remember:** Error bars about a mean do not automatically include bias.

</details>

Sources: [HW1 · Q2 · Monte Carlo integration](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-rmse-bias`

---

### 30. Estimability tells you how to build an estimator.

**STAT 244 · Estimability · BUILD THE PROOF**

If ℓ=Xᵀa and E[y]=Xβ, why is aᵀy an unbiased estimator of ℓᵀβ?

<details>
<summary>Reveal explanation</summary>

E[aᵀy]=aᵀE[y]=aᵀXβ=(Xᵀa)ᵀβ=ℓᵀβ. This is why membership in the row space is sufficient. Conversely, any linear estimator unbiased for all β must satisfy this coefficient identity.

**Remember:** Match the expectation coefficient-by-coefficient.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-construct-unbiased-estimator`

---

### 31. “Multiplying by the reciprocal always gives one.”

**AM 205 · Floating-point arithmetic · SPOT THE MISTAKE**

A programmer asserts k * (1.0 / k) == 1.0 for every positive integer k representable in binary64.

Why is this guaranteed for k = 4, but not by the same reasoning for k = 5?

<details>
<summary>Reveal explanation</summary>

1/4 = 2⁻² is exactly representable, and multiplying by 4 gives exactly 1. In contrast, 1/5 has a repeating binary expansion and is rounded. The subsequent multiplication is rounded again. It may still produce exactly 1, but the real-arithmetic identity alone does not guarantee it.

**Remember:** An algebraic identity is not a rounding guarantee.

</details>

Sources: [PS1 · Q2](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-roundtrip`

---

### 32. The grid pays for every dimension.

**AM 207 · High-dimensional integration · CONNECT THE DOTS**

A smooth integrand gives composite midpoint error O(h²). A d-dimensional tensor grid uses N points.

What is its error rate in N, and when does its exponent match Monte Carlo?

<details>
<summary>Reveal explanation</summary>

Since N is proportional to h⁻ᵈ, h is proportional to N⁻¹ᐟᵈ. Midpoint error is therefore O(N⁻²ᐟᵈ). This matches the Monte Carlo N⁻¹ᐟ² exponent at d = 4.

These are rates under the stated smoothness and finite-variance assumptions; constants still matter for a finite computation.

**Remember:** A grid costs nᵈ points.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid`

---

### 33. A group difference survives an arbitrary baseline shift.

**STAT 244 · Estimability · TINY PROBLEM**

In μᵢ=α+γᵢ with all γ levels unconstrained, is γ₂−γ₁ identifiable even though α and individual γᵢ are not?

<details>
<summary>Reveal explanation</summary>

Yes, when those group means are represented in the observed design: γ₂−γ₁=μ₂−μ₁. A shift α→α+c and γᵢ→γᵢ−c cancels in the difference. Identifiability of a contrast does not require identifying every coefficient separately.

**Remember:** Differences can remove the redundant baseline.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-contrast-invariance`

---

### 34. Why does 0.5 terminate but 0.1 repeat?

**AM 205 · Floating-point arithmetic · EXPLAIN WHY**

What property of a reduced rational fraction determines whether it has a terminating binary expansion?

<details>
<summary>Reveal explanation</summary>

Its denominator must be a power of 2. Multiplying by enough powers of 2 must turn it into an integer. The denominator of 1/2 meets this condition; the reduced denominator of 1/10 includes a factor of 5, so its binary expansion repeats.

**Remember:** The denominator determines which base can terminate.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-finite-binary`

---

### 35. A million points can still mean a coarse high-dimensional grid.

**AM 207 · High-dimensional integration · TINY PROBLEM**

With N=nᵈ≤10⁶ and d=8, what is the largest integer n allowed per axis?

<details>
<summary>Reveal explanation</summary>

n≤(10⁶)^(1/8)≈5.623, so n=5. The grid uses 5⁸=390,625 points; n=6 would require 1,679,616. Large total counts can still give poor resolution along every coordinate.

**Remember:** Exponential growth in dimension consumes resolution.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-grid-budget`

---

### 36. A new prediction can be unidentified.

**STAT 244 · Estimability · THINK IT THROUGH**

With rank-deficient training matrix X, when is a proposed mean prediction x₀β uniquely determined by the training mean model?

<details>
<summary>Reveal explanation</summary>

When the row vector x₀ lies in the row space of X. Equivalently, x₀v=0 for every v∈N(X). Otherwise two coefficient vectors producing identical training means can give different x₀β. A solver selecting one coefficient vector does not resolve that informational ambiguity.

**Remember:** A numerical choice does not make an estimand identifiable.

</details>

Sources: [HW1 · Q5–6](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-new-point-estimability`

---

### 37. Which side does the operation go on?

**AM 205 · Matrix operations · QUICK RECALL**

You want to double row 1 of B, then add column 3 to column 2.

Which operation multiplies B from the left, and which from the right?

<details>
<summary>Reveal explanation</summary>

Row operations act from the left: LB. Column operations act from the right: BC. Together the result is LBC. For the column addition, C is the identity with an extra 1 at entry (3,2).

Order matters: later left operations appear farther left; later right operations appear farther right.

**Remember:** Rows: left. Columns: right.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-operations`

---

### 38. Factor the separable integral before approximating it.

**AM 207 · High-dimensional integration · DERIVATION**

For f(x)=exp(−Σxᵢ²) on [0,1]ᵈ, why does the integral equal [∫₀¹exp(−u²)du]ᵈ?

<details>
<summary>Reveal explanation</summary>

The exponential factors into ∏exp(−xᵢ²), and the domain is a product of identical intervals. Repeated integration separates the factors. Each one-dimensional integral equals √π erf(1)/2. The analytic factorization provides a useful reference for the numerical methods.

**Remember:** Exploit separability when both function and domain allow it.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-product-integral`

---

### 39. One least-squares problem. Two different questions.

**STAT 244 · AM 205 × STAT 244 · ACROSS YOUR COURSES**

You minimize ‖Xβ − y‖². What does each course ask about this same operation?

<details>
<summary>Reveal explanation</summary>

AM 205: Can the numerical algorithm compute a reliable solution? QR avoids explicitly forming the normal equations, whose condition number squares that of a full-column-rank design.
STAT 244: What is the projection geometry, and under what assumptions do estimates support inference? A stable numerical answer alone does not establish those statistical assumptions.

**Remember:** Numerical reliability and valid inference require different checks.

</details>

Sources: [HW2 · Q5–9](../courses/stat244/homeworks/ps2/hw2.pdf#page=3); [PS2 · Q3](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `bridge-fit`

---

### 40. Swapping first is not the same as scaling first.

**AM 205 · Matrix operations · TINY PROBLEM**

Take B=[[1,2],[3,4]]. Scale row 1 by 2, then swap the rows. What result do you get? What if you reverse the steps?

<details>
<summary>Reveal explanation</summary>

Scale then swap gives [[3,4],[2,4]]. Swap then scale gives [[6,8],[1,2]]. If S scales row 1 and P swaps rows, the operations are PSB versus SPB. Matrix multiplication is generally noncommutative.

**Remember:** Later row operations multiply farther left.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-row-column-order`

---

### 41. A slope of minus one-half predicts a concrete gain.

**AM 207 · High-dimensional integration · READ THE PLOT**

An error curve behaves like E(N)=CN⁻¹ᐟ² on a log–log plot. What happens to error when N is multiplied by 16?

<details>
<summary>Reveal explanation</summary>

The error is multiplied by 16⁻¹ᐟ²=1/4. A fitted slope describes the scaling exponent, not the error constant C. Two methods can have different finite-budget performance even when one has a better asymptotic slope.

**Remember:** Read both slope and vertical position.

</details>

Sources: [HW1 · Q2(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=2)

Card ID: `am207-slope-interpretation`

---

### 42. One intercept. Every category. One dependency.

**STAT 244 · Identifiability · SPOT THE MISTAKE**

You include an intercept and an indicator column for every level of a categorical predictor.

What makes the coefficients nonidentifiable?

<details>
<summary>Reveal explanation</summary>

The indicators sum to the intercept column. Adding c to the intercept and subtracting c from every category coefficient leaves every fitted value unchanged.

Drop one indicator, remove the intercept for a single-factor model, or impose an appropriate constraint. These choices can identify coefficients while preserving the same fitted-value space.

**Remember:** Different coefficients can encode the same model.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-alias`

---

### 43. Where does the off-diagonal one go?

**AM 205 · Matrix operations · TINY PROBLEM**

You want column 1 ← column 1 + 3 column 2 for an m×2 matrix B. Write the right multiplier.

<details>
<summary>Reveal explanation</summary>

Use C=[[1,0],[3,1]], so BC has first column B[:,1]+3B[:,2] in one-based notation and leaves the second unchanged. Each column of C supplies the coefficients for the corresponding output column.

**Remember:** Read a right multiplier one output column at a time.

</details>

Sources: [PS1 · Q3](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-column-add-index`

---

### 44. The normalizing constant disappears.

**AM 207 · Metropolis–Hastings · QUICK RECALL**

You know a target density only up to a constant: π(x) = f(x)/Z. With a symmetric random-walk proposal, can you still run Metropolis–Hastings?

<details>
<summary>Reveal explanation</summary>

Yes. The acceptance probability is min(1, π(x′)/π(x)) = min(1, f(x′)/f(x)); Z cancels. Symmetry also cancels the proposal ratio.

For a nonsymmetric proposal, retain q(x | x′)/q(x′ | x). Evaluate log ratios when densities are extremely small.

**Remember:** Ratios can be easier than normalized densities.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh`

---

### 45. Four columns can span only three directions.

**STAT 244 · Identifiability · TINY PROBLEM**

For one factor with three observed levels, your design has an intercept and three level indicators. What is its rank, assuming every level appears?

<details>
<summary>Reveal explanation</summary>

Rank 3, not 4. The intercept equals the sum of the indicator columns. The three indicators are independent when each level occurs, so they span a three-dimensional group-mean space. Drop one indicator with the intercept, or use all three without an intercept.

**Remember:** Count independent directions, not column labels.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-dummy-rank`

---

### 46. A circle goes into a matrix.

**AM 205 · Geometry of linear maps · PICTURE IT**

You sample points uniformly by area in a unit disk, then plot Ax for a nonsingular 2 × 2 matrix A.

What shape appears, and what controls its principal axis lengths?

<details>
<summary>Reveal explanation</summary>

A filled ellipse. The singular values of A are the semiaxis lengths, and its left singular vectors give the principal axis directions. If A is singular, the image collapses to a line segment or a point.

Sampling radius uniformly is not uniform by area: use radius √U with U uniform on [0,1], or rejection sampling in the square.

**Remember:** Linear maps turn disks into ellipses.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-disk`

---

### 47. The reverse proposal probability matters.

**AM 207 · Metropolis–Hastings · TINY PROBLEM**

At current x and proposed y, π(y)/π(x)=2, q(x|y)=0.1, and q(y|x)=0.5. What is the MH acceptance probability?

<details>
<summary>Reveal explanation</summary>

α=min(1,2×0.1/0.5)=0.4. A higher target density does not guarantee acceptance for an asymmetric proposal: the proposal ratio compensates for directional bias.

**Remember:** Use target ratio times reverse-to-forward proposal ratio.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-asymmetric-acceptance`

---

### 48. An identifying constraint need not remove mean vectors.

**STAT 244 · Identifiability · EXPLAIN WHY**

Why can setting one group effect to zero resolve coefficient ambiguity without restricting the possible group means?

<details>
<summary>Reveal explanation</summary>

The intercept can absorb that reference effect, and the remaining effects express differences from it. Every original set of group means still has a representation. This is a change of coordinates; a substantive restriction such as “all group means are equal” would shrink the model space.

**Remember:** Separate identifying conventions from scientific assumptions.

</details>

Sources: [Least-squares theory · p. 2](../courses/stat244/lecnotes/notes-lstheory.pdf#page=2)

Card ID: `stat244-constraints-not-model`

---

### 49. Stretching two directions multiplies area.

**AM 205 · Geometry of linear maps · TINY PROBLEM**

A 2×2 linear map has singular values 3 and 1/2. What happens to a unit disk’s semiaxes and area?

<details>
<summary>Reveal explanation</summary>

The semiaxes become 3 and 1/2. The area is π×3×1/2=3π/2. The area scale |det(A)| equals the product of singular values, 3/2; the determinant’s sign would additionally indicate orientation.

**Remember:** Singular values describe length; their product describes volume.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-singular-values-area`

---

### 50. Subtract log densities before exponentials underflow.

**AM 207 · Metropolis–Hastings · READ THE CODE**

For a symmetric proposal, write the log-space MH acceptance comparison using U∼Uniform(0,1).

<details>
<summary>Reveal explanation</summary>

Compute Δ=logπ(y)−logπ(x), then accept if log U<min(0,Δ). Comparing log U<Δ is equivalent because log U≤0. Avoid separately exponentiating very negative log densities and dividing two underflowed zeros.

**Remember:** Ratios become stable differences on the log scale.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-log-space`

---

### 51. New coordinates. Same predictions.

**STAT 244 · Reparameterization · CONNECT THE DOTS**

Let A be invertible. Why do ordinary least-squares models with design matrices X and XA have the same fitted values?

<details>
<summary>Reveal explanation</summary>

Every XAγ equals Xβ with β = Aγ, and every Xβ equals XA(A⁻¹β). Their column spaces are identical. Both fitted vectors are the unique orthogonal projection of y onto that space.

Coefficients change coordinates. The fitted vector, residuals, and SSE do not.

**Remember:** Predictions depend on the space, not its basis.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-recode`

---

### 52. One nonzero singular value leaves a line segment.

**AM 205 · Geometry of linear maps · PICTURE IT**

For A=[[2,0],[0,0]], what is the image of the unit disk? Is it a filled ellipse with positive area?

<details>
<summary>Reveal explanation</summary>

It is the segment {(x,0): −2≤x≤2}. The second coordinate is always zero, so the map has rank one and area zero. This is a degenerate ellipse, not a two-dimensional region.

**Remember:** Rank counts surviving directions.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-rank-collapse`

---

### 53. The accepted probability flow is a symmetric minimum.

**AM 207 · Metropolis–Hastings · DERIVATION**

Show why MH’s accepted off-diagonal flow π(x)q(y|x)α(x,y) satisfies detailed balance.

<details>
<summary>Reveal explanation</summary>

Substitute α=min(1,π(y)q(x|y)/(π(x)q(y|x))). The flow becomes min(π(x)q(y|x),π(y)q(x|y)), unchanged when x and y are exchanged. The rejection probability supplies the remaining self-transition mass.

**Remember:** Detailed balance follows from the same two-way minimum.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=4)

Card ID: `am207-mh-detailed-balance-proof`

---

### 54. Which direction does the coefficient transformation go?

**STAT 244 · Reparameterization · TINY PROBLEM**

If X*=XA with invertible A and Xβ=X*γ, how are β and γ related when X has full column rank?

<details>
<summary>Reveal explanation</summary>

β=Aγ and γ=A⁻¹β. Substitution gives XAγ=Xβ, and full column rank makes the coefficient representation unique. If X is rank deficient, Aγ−β may also lie in N(X); equality of mean vectors alone no longer forces coefficient equality.

**Remember:** Track the rank assumption when equating coefficients.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-parameter-map`

---

### 55. Rotations cannot change Euclidean length.

**AM 205 · Geometry of linear maps · QUICK RECALL**

If QᵀQ=I, show that ‖Qx‖₂=‖x‖₂. What does Q do to the unit disk when Q is square?

<details>
<summary>Reveal explanation</summary>

‖Qx‖₂²=xᵀQᵀQx=xᵀx. A square orthogonal map preserves the unit disk, possibly rotating or reflecting it. All its singular values equal one.

**Remember:** Orthogonal coordinates preserve Euclidean geometry.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1)

Card ID: `am205-orthogonal-map`

---

### 56. Rejected does not mean deleted.

**AM 207 · MCMC correctness · SPOT THE MISTAKE**

A sampler saves only accepted proposals and discards every rejected step. Does this generally preserve the intended target distribution?

<details>
<summary>Reveal explanation</summary>

No. On a rejection, the next chain state equals the previous state, and that repeat counts as a sample. These holding times are part of the Markov transition kernel. Dropping repeats produces a jump chain that generally has a different stationary distribution.

**Remember:** A repeated state is still a sample.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-reject`

---

### 57. Equal full-rank spaces imply an invertible change of basis.

**STAT 244 · Reparameterization · BUILD THE PROOF**

X₁ and X₂ are n×p, both full column rank, with equal column spaces. Why can X₁=X₂A only use a nonsingular A?

<details>
<summary>Reveal explanation</summary>

Each column of X₁ lies in C(X₂), so its coordinates give a column of A. If A were singular, some nonzero v would satisfy Av=0. Then X₁v=X₂Av=0, contradicting full column rank of X₁.

**Remember:** Coordinate changes between bases are invertible.

</details>

Sources: [HW2 · Q1 and Q4](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-column-space-converse`

---

### 58. A tiny pivot can make a big mess.

**AM 205 · Gaussian elimination · SPOT THE MISTAKE**

The first pivot is 10⁻¹², while entries below it are 5 and 13.

Why can elimination without pivoting lose accuracy even when the matrix is nonsingular?

<details>
<summary>Reveal explanation</summary>

The multipliers become 5 × 10¹² and 13 × 10¹². Intermediate entries grow huge; later subtractions can leave small results whose relative rounding error is large. Partial pivoting chooses the largest magnitude entry in the active column, avoiding this tiny first pivot.

Nonsingularity guarantees an exact solution, not an accurate implementation.

**Remember:** Algorithmic stability is a separate question.

</details>

Sources: [PS2 · Q1](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-pivot`

---

### 59. Discarding self-transitions can erase a 90–10 balance.

**AM 207 · MCMC correctness · WORKED EXAMPLE**

A two-state chain has P(A→B)=0.1 and P(B→A)=0.9. Its stationary probabilities are (0.9,0.1). What happens if you retain only state changes?

<details>
<summary>Reveal explanation</summary>

The retained sequence alternates A,B,A,B,…, so its long-run frequencies are 1/2 and 1/2. The original chain spends longer holding at A. Dropping repeated states removes those residence times and changes the distribution represented by the stored sequence.

**Remember:** Holding times carry stationary weight.

</details>

Sources: [Lecture 03 · pp. 4–6](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-jump-chain-example`

---

### 60. All solutions form a shifted null space.

**STAT 244 · Rank-deficient least squares · THINK IT THROUGH**

If β̂ is one least-squares solution, what are all the others? When is the solution set itself a vector space?

<details>
<summary>Reveal explanation</summary>

All solutions are β̂ + N(X): adding a null vector leaves the fitted values unchanged. This is an affine space.

It is a vector subspace exactly when it contains zero, equivalently when β̂ ∈ N(X), or Xβ̂ = 0. Otherwise the shift takes it away from the origin.

**Remember:** An affine space need not contain zero.

</details>

Sources: [HW2 · Q2](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine`

---

### 61. A zero first pivot does not prove singularity.

**AM 205 · Gaussian elimination · SPOT THE MISTAKE**

Consider A=[[0,1],[1,0]]. Can elimination without row exchanges begin? Is A singular?

<details>
<summary>Reveal explanation</summary>

The first pivot is zero, so standard unpivoted elimination cannot divide by it. But det(A)=−1, and swapping the rows gives the identity. The matrix is nonsingular and perfectly conditioned in the 2-norm. Pivoting is needed even for some well-conditioned matrices.

**Remember:** Algorithmic breakdown is not the same as singularity.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-zero-pivot-nonsingular`

---

### 62. From uniform to heavy-tailed.

**AM 207 · Proposal distributions · BUILD THE SAMPLER**

What transformation of U ∼ Uniform(0,1) gives a Cauchy proposal centered at x with scale γ?

Does this random-walk proposal require a nontrivial proposal ratio in MH?

<details>
<summary>Reveal explanation</summary>

Use x′ = x + γ tan(π(U − 1/2)). The Cauchy CDF is 1/2 + arctan((x′ − x)/γ)/π. Inverting it gives that transformation.

With fixed γ the proposal is symmetric about x, so q(x′ | x) = q(x | x′); the proposal ratio cancels.

**Remember:** Heavy tails from the tangent transform.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy`

---

### 63. Draw all least-squares coefficients for duplicate columns.

**STAT 244 · Rank-deficient least squares · WORKED EXAMPLE**

If X=[x x] and the best fitted vector is 3x, what are all coefficient solutions? Is that set a vector space?

<details>
<summary>Reveal explanation</summary>

All (β₁,β₂) satisfying β₁+β₂=3: for example (3,0)+t(1,−1). The line does not contain zero, so it is affine but not a vector subspace. If the best fit were zero, the line β₁+β₂=0 would be the null space itself.

**Remember:** A nonzero fitted value shifts the solution set.

</details>

Sources: [HW2 · Q2](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-affine-example`

---

### 64. Bounded multipliers do not bound every later entry by one.

**AM 205 · Gaussian elimination · SPOT THE MISTAKE**

Partial pivoting gives multipliers of magnitude at most one. Does that prevent element growth in U?

<details>
<summary>Reveal explanation</summary>

No. Updates subtract a multiple of one row from another; magnitudes can grow when signs differ. For rows [1,−1] and [1,1], eliminating the first column produces a second entry 2 despite a multiplier of 1. Growth control is more subtle than the multiplier bound.

**Remember:** Subtraction can increase magnitude.

</details>

Sources: [Heath · Ch. 2 review Q2.27, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-multiplier-growth`

---

### 65. The tangent formula has recognizable quartiles.

**AM 207 · Proposal distributions · TINY PROBLEM**

For a Cauchy random variable with center m and scale γ, what samples correspond to U=0.25,0.5,0.75 under inverse-CDF sampling?

<details>
<summary>Reveal explanation</summary>

The formula m+γtan(π(U−1/2)) gives m−γ, m, and m+γ. These are the lower quartile, median, and upper quartile. Center is a median; the Cauchy mean is not defined.

**Remember:** A center parameter need not be an expectation.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-cauchy-quantile`

---

### 66. “Normal” does not mean Gaussian here.

**STAT 244 · Least-squares geometry · QUICK RECALL**

Why are XᵀXβ̂ = Xᵀy called the normal equations?

Do you need normally distributed errors to derive them?

<details>
<summary>Reveal explanation</summary>

Rearranging gives Xᵀ(y − Xβ̂) = 0: the residual is normal, or perpendicular, to every column of X. You can derive this by differentiating the squared-error objective or by projection geometry.

No distributional assumption is required to minimize ordinary squared error. Gaussian assumptions are used for particular likelihood and inference results.

**Remember:** The residual is perpendicular to the model space.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-normal`

---

### 67. The determinant has a sign to remember.

**AM 205 · LU factorization · TINY PROBLEM**

Given PA = LU, where L has unit diagonal, how do you recover det(A) from U and the row swaps?

<details>
<summary>Reveal explanation</summary>

Taking determinants gives det(P) det(A) = det(U), since det(L) = 1. Because det(P) is ±1, det(A) = det(P) ∏ᵢ uᵢᵢ. An odd number of row swaps changes the sign; an even number does not.

Agreement between two numerical determinant calculations is useful evidence, but it is not by itself a proof of accuracy.

**Remember:** Track the permutation, not just the diagonal.

</details>

Sources: [PS2 · Q1(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-det`

---

### 68. Inverse transforms have dangerous endpoints.

**AM 207 · Proposal distributions · SPOT THE MISTAKE**

Why should an inverse-Cauchy implementation avoid evaluating U exactly at 0 or 1?

<details>
<summary>Reveal explanation</summary>

The tangent argument becomes −π/2 or π/2, where the mathematical quantile is infinite. Numerical evaluation near these endpoints can yield enormous finite values. Use a generator and endpoint handling consistent with an open interval, and preserve the intended tail behavior rather than arbitrary clipping.

**Remember:** Endpoint conventions affect extreme draws.

</details>

Sources: [HW2 · Q1(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-endpoint-tangent`

---

### 69. Expand the loss before taking its gradient.

**STAT 244 · Least-squares geometry · DERIVATION**

Expand S(β)=‖y−Xβ‖² and compute its gradient and Hessian.

<details>
<summary>Reveal explanation</summary>

S=yᵀy−2βᵀXᵀy+βᵀXᵀXβ. The gradient is −2Xᵀy+2XᵀXβ, and the Hessian is 2XᵀX. The Hessian is positive semidefinite, so a stationary point minimizes S; it is positive definite when X has full column rank.

**Remember:** Rank determines uniqueness, not existence of the projection.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-differentiate-loss`

---

### 70. Why is a flat flag easier to compress?

**AM 205 · Low-rank approximation · EXPLAIN WHY**

Your homework compares a flat flag image with a photograph of a waving flag.

Why might the flat image need fewer rank-one pieces for a good approximation?

<details>
<summary>Reveal explanation</summary>

Repeated stripes and repeated shapes make many rows or columns strongly related. A photograph adds folds, shading, perspective, and background detail, creating variation that needs more rank-one terms.

This is about good approximate rank, not necessarily small exact rank: pixel noise and image compression artifacts can make an image full rank.

**Remember:** Repeated structure is compressible.

</details>

Sources: [PS2 · Q2](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rank`

---

### 71. 50% acceptance is not 50% understanding.

**AM 207 · MCMC diagnostics · SPOT THE MISTAKE**

Two random-walk samplers both accept half their proposals. One targets a round Gaussian; the other targets a Gaussian with correlation 0.99.

Must their sample quality be similar?

<details>
<summary>Reveal explanation</summary>

No. The highly correlated target is a narrow, tilted ridge. Independent coordinate proposals may need tiny steps to avoid leaving it, moving slowly along the ridge even at 50% acceptance.

Inspect traces, autocorrelation, and exploration of the target. Acceptance rate alone does not measure effective independent information.

**Remember:** Mixing depends on geometry, too.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-mixing`

---

### 72. An intercept forces the OLS residuals to sum to zero.

**STAT 244 · Least-squares geometry · BUILD THE PROOF**

If the design includes the ones vector, derive why Σeᵢ=0 at an ordinary least-squares solution.

<details>
<summary>Reveal explanation</summary>

The normal equations give Xᵀe=0. Taking the component corresponding to the intercept yields 1ᵀe=0. Without an intercept, this identity is not generally guaranteed. With weighted least squares, the relevant orthogonality is weighted.

**Remember:** Use the actual columns in the normal equations.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-residual-sum-zero`

---

### 73. Turn matrix error into per-pixel error.

**AM 205 · Low-rank approximation · TINY PROBLEM**

For an m×n image residual R, express RMS pixel error using the Frobenius norm.

<details>
<summary>Reveal explanation</summary>

RMS = √[ΣᵢⱼRᵢⱼ²/(mn)] = ‖R‖F/√(mn). If one image is stored on [0,255] and another on [0,1], their raw RMS errors are not directly comparable without accounting for the scale.

**Remember:** Normalize both dimensions and pixel units.

</details>

Sources: [PS2 · Q2](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-rms-frobenius`

---

### 74. Correlation makes one Gaussian direction narrow.

**AM 207 · MCMC diagnostics · TINY PROBLEM**

For Σ=[[1,ρ],[ρ,1]], identify the eigen-directions and eigenvalues. What happens at ρ=0.99?

<details>
<summary>Reveal explanation</summary>

Directions (1,1) and (1,−1) have eigenvalues 1+ρ and 1−ρ. At 0.99 these are 1.99 and 0.01. Standard-deviation axis ratio is √199≈14.1. Independent equal-scale proposals do not naturally match this tilted geometry.

**Remember:** Target covariance determines useful proposal directions.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-correlated-normal-axes`

---

### 75. The fit and residual are perpendicular.

**STAT 244 · Least-squares geometry · BUILD THE PROOF**

Given Xᵀe=0 and ŷ=Xβ̂, show ŷᵀe=0.

<details>
<summary>Reveal explanation</summary>

ŷᵀe=β̂ᵀXᵀe=0. Thus ‖y‖²=‖ŷ+e‖²=‖ŷ‖²+‖e‖². This is an uncentered identity; the usual decomposition around the sample mean additionally uses the intercept-space relationship.

**Remember:** Do not confuse centered and uncentered sums of squares.

</details>

Sources: [Least-squares theory · p. 9](../courses/stat244/lecnotes/notes-lstheory.pdf#page=9)

Card ID: `stat244-fitted-orthogonality`

---

### 76. “Another rank-one update must reduce RMS error.”

**AM 205 · Low-rank approximation · SPOT THE MISTAKE**

You use iterative Gaussian elimination with complete pivoting to approximate an image. Is the Frobenius error guaranteed to decrease after every update, as with truncated SVD?

<details>
<summary>Reveal explanation</summary>

No. Complete pivoting greedily selects a largest-magnitude residual entry; it does not solve the best rank-k approximation problem in Frobenius norm. RMS error can rise on an intermediate update.

Truncated SVD does minimize Frobenius error for each rank, and its error is nonincreasing as more singular components are retained.

**Remember:** A greedy pivot is not an SVD guarantee.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-greedy`

---

### 77. Nearly every move accepted can still be slow.

**AM 207 · MCMC diagnostics · COMPARE METHODS**

Compare a random-walk proposal with a very tiny scale to one with a very large scale.

<details>
<summary>Reveal explanation</summary>

Tiny steps often accept but explore slowly because nearby states carry similar information. Huge steps often land in low-probability regions and reject, producing long holds. Tune for effective exploration of relevant quantities, not acceptance rate in isolation.

**Remember:** Movement distance and acceptance must be considered together.

</details>

Sources: [HW2 · Q1(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `am207-proposal-scale-extremes`

---

### 78. A projection done twice is still one projection.

**STAT 244 · Projection matrices · QUICK RECALL**

What two matrix identities characterize an orthogonal projection P in Euclidean space? Why is I − P also one?

<details>
<summary>Reveal explanation</summary>

Symmetry: Pᵀ = P. Idempotence: P² = P. For the complement, (I − P)ᵀ = I − P and (I − P)² = I − 2P + P² = I − P.

P extracts the component in a subspace; I − P extracts the perpendicular component.

**Remember:** Symmetric + idempotent.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projection`

---

### 79. One outer product clears a pivot row and column.

**AM 205 · Low-rank approximation · DERIVATION**

A residual matrix R has a nonzero pivot Rᵢⱼ. Define U=R[:,j]R[i,:]/Rᵢⱼ. What happens to row i and column j of R−U in exact arithmetic?

<details>
<summary>Reveal explanation</summary>

U[i,:]=RᵢⱼR[i,:]/Rᵢⱼ=R[i,:], and U[:,j]=R[:,j]Rᵢⱼ/Rᵢⱼ=R[:,j]. Thus both vanish in the residual. U has rank at most one. Repeating this constructs a sum of rank-one approximations.

**Remember:** Elimination is a sequence of rank-one corrections.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-elimination-update`

---

### 80. Changing the kernel forever needs more theory.

**AM 207 · MCMC diagnostics · SPOT THE MISTAKE**

Why is tuning a proposal during a warm-up stage and then freezing it simpler to justify than unrestricted adaptation throughout sampling?

<details>
<summary>Reveal explanation</summary>

A fixed proposal after warm-up defines a fixed Markov kernel with the intended invariant target under the usual MH conditions. Continual history-dependent adaptation changes that setup and needs additional conditions for validity. Hitting a preferred acceptance rate alone is not a convergence proof.

**Remember:** Separate tuning from the samples used for inference.

</details>

Sources: [Lecture 03 · adaptive proposal discussion, companion caution](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=23)

Card ID: `am207-warmup-adaptation`

---

### 81. Projecting twice is not enough to mean perpendicular.

**STAT 244 · Projection matrices · SPOT THE MISTAKE**

P=[[1,1],[0,0]] satisfies P²=P. Is it an orthogonal projection?

<details>
<summary>Reveal explanation</summary>

No, since Pᵀ≠P. It maps onto the first coordinate axis along an oblique direction. For y=(0,1)ᵀ the fit is (1,0)ᵀ and residual (−1,1)ᵀ; their dot product is −1, not zero.

**Remember:** Idempotence gives a projection; symmetry makes it orthogonal.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-idempotent-not-orthogonal`

---

### 82. Stop before dividing by an all-zero residual.

**AM 205 · Low-rank approximation · READ THE CODE**

An iterative low-rank routine chooses the largest-magnitude residual entry and divides a row by that pivot. What should it do when that entry is zero?

<details>
<summary>Reveal explanation</summary>

If the largest magnitude is zero, the entire residual is zero: the approximation is already exact in the represented arithmetic. Stop rather than divide by zero. A numerical tolerance can support approximate stopping, but should be defined relative to the scale and intended error.

**Remember:** The pivot also supplies a stopping signal.

</details>

Sources: [PS2 · Q2 · method comparison](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-zero-residual-pivot`

---

### 83. Stationary does not mean reversible.

**AM 207 · Stationarity & reversibility · SPOT THE MISTAKE**

A three-state chain deterministically cycles A → B → C → A. The uniform distribution is stationary. Does it satisfy detailed balance?

<details>
<summary>Reveal explanation</summary>

No. Uniform probability is preserved by the cycle, but probability flows from A to B and none flows directly from B to A. Detailed balance requires πᵢPᵢⱼ = πⱼPⱼᵢ for each pair.

It is sufficient for stationarity, not necessary. This example is also periodic, so a point-mass initial distribution does not converge to the uniform distribution.

**Remember:** Balanced totals can hide circulating flow.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-balance`

---

### 84. A projection’s eigenvalues can only be zero or one.

**STAT 244 · Projection matrices · BUILD THE PROOF**

If Pv=λv with v≠0 and P²=P, what equation must λ satisfy?

<details>
<summary>Reveal explanation</summary>

P²v=λ²v, but also P²v=Pv=λv. Hence λ²=λ, so λ is 0 or 1. For an orthogonal projector, the trace equals its rank because it counts eigenvalues equal to one.

**Remember:** Projection either retains or removes each eigen-direction.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-projector-eigenvalues`

---

### 85. Curved shape. Linear unknowns.

**AM 205 · Least squares · BUILD THE MODEL**

For points (xᵢ, yᵢ), fit b x² + c xy + d y² ≈ 1.

What is one row of the design matrix? Why is this a linear least-squares problem?

<details>
<summary>Reveal explanation</summary>

Row i is [xᵢ², xᵢyᵢ, yᵢ²], the parameter vector is [b, c, d]ᵀ, and the response is a vector of ones. The features can be nonlinear in the coordinates while the model remains linear in its unknown coefficients.

This minimizes algebraic residuals, not geometric distances to the curve.

**Remember:** Linear in parameters, not necessarily in inputs.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse`

---

### 86. Solve stationarity with flow and normalization.

**AM 207 · Stationarity & reversibility · WORKED EXAMPLE**

P=[[0.8,0.2],[0.3,0.7]]. Find the stationary distribution.

<details>
<summary>Reveal explanation</summary>

Let π=(a,b). Stationarity implies 0.2a=0.3b and a+b=1. Thus a=0.6,b=0.4. Multiplying πP verifies (0.6,0.4). Every irreducible two-state chain is reversible, but that does not extend to arbitrary larger chains.

**Remember:** Normalize the stationary flow relation.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationary-two-state`

---

### 87. Degrees of freedom can be counted on the diagonal.

**STAT 244 · Projection matrices · TINY PROBLEM**

An ordinary least-squares hat matrix H projects onto a rank-r model space. What are tr(H) and tr(I−H)?

<details>
<summary>Reveal explanation</summary>

They are r and n−r. The projector eigenvalues are 1 on the model space and 0 on its orthogonal complement. This counts fitted and residual dimensions without requiring the design to have independent columns.

**Remember:** Use model rank for fitted degrees of freedom.

</details>

Sources: [HW2 · Q5(a–c)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-hat-trace`

---

### 88. Coordinates become features.

**AM 205 · Least squares · TINY PROBLEM**

For a measured point (x,y)=(2,−3), what row belongs in the centered-ellipse design matrix for parameters (b,c,d)?

<details>
<summary>Reveal explanation</summary>

[x²,xy,y²]=[4,−6,9], with right-hand-side value 1. The model predicts 4b−6c+9d for that row. The cross-product feature keeps its sign; it is not |xy|.

**Remember:** Build each feature from the observed coordinates.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-design-row`

---

### 89. Sum the pairwise balance equations.

**AM 207 · Stationarity & reversibility · BUILD THE PROOF**

For a row-stochastic P, assume πᵢPᵢⱼ=πⱼPⱼᵢ for every i,j. Show that π is stationary.

<details>
<summary>Reveal explanation</summary>

Sum over i: ΣᵢπᵢPᵢⱼ=πⱼΣᵢPⱼᵢ=πⱼ because row j sums to one. Therefore πP=π. Stationarity only requires these total equalities; it does not force each pairwise equality separately.

**Remember:** Pairwise balance is stronger than total balance.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-detailed-implies-stationary`

---

### 90. Split the data into three perpendicular pieces.

**STAT 244 · Nested models · BUILD THE PROOF**

For nested model spaces V₀ ⊆ V₁ with orthogonal projectors P₀ and P₁, what do P₀y, (P₁ − P₀)y, and (I − P₁)y represent?

<details>
<summary>Reveal explanation</summary>

They are the fit in the smaller model, the extra component captured by the larger model, and the residual outside the larger model. Nesting implies P₁P₀ = P₀P₁ = P₀, making the three projectors mutually orthogonal.

Their sum is I, so the three vectors add to y and their squared lengths add to ‖y‖².

**Remember:** Small fit + extra fit + residual.

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nested`

---

### 91. Small equation residual is not small Euclidean distance.

**AM 205 · Least squares · SPOT THE MISTAKE**

A fit minimizes Σ(bxᵢ²+cxᵢyᵢ+dyᵢ²−1)². Is this the same as minimizing squared shortest distances from the points to the ellipse?

<details>
<summary>Reveal explanation</summary>

No. It penalizes the equation’s algebraic residual. Geometric distance requires finding nearest points on the curve, a nonlinear problem. The algebraic formulation is computationally convenient but gives a different loss and can weight locations differently.

**Remember:** Name the loss you actually minimized.

</details>

Sources: [PS2 · Q3(a)](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-algebraic-distance`

---

### 92. An invariant distribution need not attract every start.

**AM 207 · Stationarity & reversibility · SPOT THE MISTAKE**

A chain alternates deterministically between two states. Its uniform distribution is stationary. Do marginals from a fixed starting state converge to it?

<details>
<summary>Reveal explanation</summary>

No. The chain has period two and alternates between point masses. Starting in the uniform distribution preserves it, but starting at one state causes persistent oscillation. For finite chains, irreducibility and aperiodicity provide the usual convergence guarantee.

**Remember:** Invariant and limiting distributions are distinct concepts.

</details>

Sources: [HW2 · Q2(b) · companion example](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-stationarity-not-convergence`

---

### 93. Projecting a smaller-space vector onto the larger space does nothing.

**STAT 244 · Nested models · BUILD THE PROOF**

If V₀⊆V₁, why are P₁P₀=P₀ and P₀P₁=P₀ for orthogonal projectors?

<details>
<summary>Reveal explanation</summary>

P₀v already lies in V₀ and therefore V₁, so P₁P₀v=P₀v for every v. Taking transposes and using symmetry gives P₀P₁=P₀ as well. The second identity follows from orthogonality; do not assume projectors always commute.

**Remember:** Nesting supplies the useful product identities.

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-nesting-product`

---

### 94. A fitted quadratic is not automatically an ellipse.

**AM 205 · Model validity · SPOT THE MISTAKE**

Your least-squares solver returns b, c, d. Before plotting b x² + c xy + d y² = 1 as an ellipse, what should you check?

<details>
<summary>Reveal explanation</summary>

Form Q = [[b, c/2], [c/2, d]]. For a real nondegenerate ellipse with right-hand side 1, Q must be positive definite. Equivalently, b > 0 and bd − c²/4 > 0.

An unconstrained algebraic fit does not enforce this. Other coefficients can describe a hyperbola, a degenerate curve, or no real points.

**Remember:** Validate the geometry after fitting.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-check`

---

### 95. What you hide can bring back memory.

**AM 207 · The Markov property · THINK IT THROUGH**

Alice sends the ball to Carol with probability 2/3; Bob sends it to Carol with probability 1/2. You record only “Carol” or “not Carol.”

Why is the coarsened process not guaranteed to be Markov?

<details>
<summary>Reveal explanation</summary>

The hidden identity inside “not Carol” affects the next-step probability of Carol. History can change whether Alice or Bob is likely to hold the ball, so the current coarse state may not contain enough information.

For strong lumpability, every state within a block must have the same total transition probability into each other block. Here 2/3 ≠ 1/2.

**Remember:** A state must retain the relevant information.

</details>

Sources: [HW2 · Q2(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumping`

---

### 96. Subtracting arbitrary projectors need not give a projector.

**STAT 244 · Nested models · SPOT THE MISTAKE**

Let P₀=diag(1,0) and P₁=diag(0,1). Is P₁−P₀ an orthogonal projector?

<details>
<summary>Reveal explanation</summary>

No. P₁−P₀=diag(−1,1), whose square is I rather than itself. The familiar extra-sum-of-squares projector requires nested model spaces, which these coordinate axes are not.

**Remember:** Check nesting before using a difference of projectors.

</details>

Sources: [HW2 · Q5(d)](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-difference-without-nesting`

---

### 97. The off-diagonal entries each contribute half.

**AM 205 · Model validity · TINY PROBLEM**

Why is the quadratic-form matrix for bx²+cxy+dy² equal to [[b,c/2],[c/2,d]] rather than [[b,c],[c,d]]?

<details>
<summary>Reveal explanation</summary>

Expanding [x,y]Q[x,y]ᵀ gives Q₁₁x²+(Q₁₂+Q₂₁)xy+Q₂₂y². With symmetry, the two equal off-diagonal contributions must sum to c, so each is c/2.

**Remember:** Expand the quadratic form to verify coefficients.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-quadratic-cross-term`

---

### 98. Sometimes a coarse state retains enough information.

**AM 207 · The Markov property · TINY PROBLEM**

States A and B are combined. If both send total probability 0.4 to block C and 0.6 to block {A,B}, does their different internal A/B behavior prevent strong lumpability?

<details>
<summary>Reveal explanation</summary>

Not for this two-block partition. Their total outgoing probability to each block agrees, so the next coarse state does not depend on which hidden member currently holds. Internal transitions may differ while the block-level process remains Markov.

**Remember:** Compare probabilities to blocks, not individual destinations.

</details>

Sources: [HW2 · Q2(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=2)

Card ID: `am207-lumpable-example`

---

### 99. Same model. A different intercept.

**STAT 244 · Contrast coding · READ THE COEFFICIENT**

With treatment coding, what does the intercept represent? With sum coding, what does it represent? Assume other numeric predictors are zero.

<details>
<summary>Reveal explanation</summary>

Treatment coding: the fitted mean of the reference group. Sum coding: the equally weighted average of the fitted group means, because the group deviations sum to zero.

This is not generally the sample-size-weighted overall mean. With an intercept and equivalent full-rank coding, the group predictions remain unchanged.

**Remember:** Coding changes the question each coefficient answers.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-contrasts`

---

### 100. Eigenvalues reveal the ellipse’s axis lengths.

**AM 205 · Model validity · TINY PROBLEM**

If a positive-definite quadratic form Q has eigenvalues 4 and 1/9, what are the semiaxis lengths of zᵀQz=1?

<details>
<summary>Reveal explanation</summary>

In Q’s orthonormal eigenbasis, the equation is 4u²+(1/9)v²=1. The semiaxes are 1/√4=1/2 and 1/√(1/9)=3. Large quadratic-form eigenvalues correspond to short axes, not long ones.

**Remember:** Quadratic-form axes use inverse square roots.

</details>

Sources: [PS2 · Q3 · interpretation](../courses/am205/homeworks/ps2/ps2.pdf#page=1)

Card ID: `am205-ellipse-axes`

---

### 101. Straighten the uncertainty before measuring it.

**AM 207 · AM 207 × STAT 244 · ACROSS YOUR COURSES**

A Gaussian vector has positive-definite covariance Σ. Why transform y to z = Σ⁻¹ᐟ²(y − μ)?

<details>
<summary>Reveal explanation</summary>

The transformed vector has mean zero and covariance I. For a Gaussian it is standard multivariate normal, and ‖z‖² = (y − μ)ᵀΣ⁻¹(y − μ) has a chi-squared distribution with dimension-many degrees of freedom.

This same geometry explains why covariance-aware coordinates can help a sampler explore a narrow correlated Gaussian. A parameter transformation in general also requires the appropriate density Jacobian.

**Remember:** Whitening measures distance in uncertainty units.

</details>

Sources: [HW2 · Q11](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [HW2 · Q1](../courses/am207/homeworks/ps2/hw02.pdf#page=1)

Card ID: `bridge-whiten`

---

### 102. Decode three group means from treatment coding.

**STAT 244 · Contrast coding · WORKED EXAMPLE**

At a fixed numeric predictor value, suppose the reference fitted mean is 10 and treatment coefficients for B and C are 2 and −3. What are the fitted group means?

<details>
<summary>Reveal explanation</summary>

A:10, B:12, C:7. The two coefficients are differences from the reference, not absolute group means. If an additional baseline term contributes 4 at this predictor value, add it to all three means.

**Remember:** Separate the shared part from the group contrast.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-treatment-numeric`

---

### 103. Uniform radius crowds the center.

**AM 205 · AM 205 × AM 207 · ACROSS YOUR COURSES**

To sample uniformly by area inside a disk, why use r = √U instead of r = U, with a uniform angle?

<details>
<summary>Reveal explanation</summary>

The fraction of disk area inside radius r is πr²/π = r². Thus the desired radius CDF is F(r) = r² on [0,1], and inverse-transform sampling gives r = √U.

A uniform radius assigns too much probability to inner rings, whose areas are smaller. This connects AM 205’s disk experiment to AM 207’s transformations and Jacobians.

**Remember:** Uniform area is not uniform radius.

</details>

Sources: [PS1 · Q4](../courses/am205/homeworks/ps1/ps1.pdf#page=1); [HW1 · Q4 · transformations](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `bridge-disk`

---

### 104. Two random draws. One reaction.

**AM 207 · Stochastic simulation · TINY PROBLEM**

A system has propensities a₁ = 2 and a₂ = 3 per second.

What is the mean waiting time until the next event, and the probability that event is reaction 2?

<details>
<summary>Reveal explanation</summary>

Total propensity is a₀ = 5 per second. The waiting time is exponential with mean 1/5 = 0.2 seconds. Reaction 2 is selected with probability a₂/a₀ = 3/5.

After applying the selected reaction, recompute propensities. If a₀ = 0, no further reactions are possible at the current state.

**Remember:** When: total rate. Which: relative rates.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa`

---

### 105. The omitted deviation is minus the others.

**STAT 244 · Contrast coding · WORKED EXAMPLE**

A three-level sum-coded model has intercept 10 and two displayed effects 2 and −1. What is the third effect and the three group means at zero numeric predictors?

<details>
<summary>Reveal explanation</summary>

The third effect is −(2−1)=−1. The means are 12,9,9, whose equally weighted average is 10. This average is over levels, not over their observed sample sizes.

**Remember:** Sum-to-zero coding fixes the missing deviation.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-sum-coding-numeric`

---

### 106. Before solving it, ask whether it is well posed.

**AM 205 · Foundations of computation · QUICK RECALL**

What three properties define a well-posed computational problem?

<details>
<summary>Reveal explanation</summary>

A solution exists; it is unique; and it depends continuously on the data. Ill-conditioning concerns sensitivity even when these conditions hold. An ill-posed problem may need reformulation, constraints, or regularization before numerical computation is meaningful.

**Remember:** Existence, uniqueness, continuous dependence.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-wellposed`

---

### 107. Carry out one direct-SSA event.

**AM 207 · Stochastic simulation · WORKED EXAMPLE**

Current propensities are (1,3,6), U₁=e⁻², and U₂=0.35. What waiting time and reaction are selected?

<details>
<summary>Reveal explanation</summary>

Total rate is 10, so τ=−log(e⁻²)/10=0.2. The cumulative reaction probabilities are 0.1,0.4,1. Since 0.35 lies in the second interval, select reaction 2. Update the state, then recompute affected propensities.

**Remember:** One draw sets the time; the other chooses the channel.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-event-number`

---

### 108. A contrast column’s scale changes its coefficient.

**STAT 244 · Contrast coding · READ THE COEFFICIENT**

For the R-style three-group Helmert coding in HW2, why is the first coefficient half the B−A mean difference?

<details>
<summary>Reveal explanation</summary>

The first contrast takes values −1 for A, +1 for B, and 0 for C. Subtracting the A mean from the B mean gives 2γ₁. The second column takes −1,−1,+2, so C minus the average of A and B equals 3γ₂. Always inspect the coding matrix.

**Remember:** Contrast coefficients depend on column normalization.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-helmert-scaling`

---

### 109. More precision does not fix a wrong model.

**AM 205 · Error sources · SORT THE IDEAS**

Distinguish modeling error, discretization error, rounding error, and uncertainty already in the input data.

<details>
<summary>Reveal explanation</summary>

Modeling error comes from how the mathematical model approximates reality. Discretization replaces an infinite or continuous computation with a finite approximation. Rounding uses a finite set of machine numbers. Input uncertainty exists before the algorithm starts.

More arithmetic precision directly addresses rounding, not all four sources.

**Remember:** Identify the source before choosing the remedy.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-errors`

---

### 110. Do not apply an event after the requested end time.

**AM 207 · Stochastic simulation · READ THE CODE**

Your current time is 9.8, the simulation horizon is 10, and the sampled waiting time is 0.5. What should you record at time 10?

<details>
<summary>Reveal explanation</summary>

The current state remains unchanged through time 10 because the next event would occur at 10.3. Do not apply that event and label its state as occurring within the horizon. Correct handling matters for endpoint summaries and time-weighted statistics.

**Remember:** An event’s state update belongs at its actual event time.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-ssa-horizon`

---

### 111. Equivalent contrasts may stop being equivalent without the intercept.

**STAT 244 · Contrast coding · SPOT THE MISTAKE**

Treatment, sum, and Helmert coding span the same factor model when correctly augmented with an intercept. Can you automatically drop the intercept from each and keep that equivalence?

<details>
<summary>Reveal explanation</summary>

No. Sum and Helmert columns span zero-sum contrasts across levels, while treatment columns have a different span before adding the intercept. The augmented spaces coincide; the unaugmented spaces need not. Compare the actual column spaces after the change.

**Remember:** Equivalence depends on the full design matrix.

</details>

Sources: [HW2 · Q3–4](../courses/stat244/homeworks/ps2/hw2.pdf#page=2)

Card ID: `stat244-remove-intercept-caveat`

---

### 112. A smaller step can make the computation worse.

**AM 205 · Error sources · THINK IT THROUGH**

For a forward difference [f(x+h)−f(x)]/h, why can decreasing h eventually increase the error?

<details>
<summary>Reveal explanation</summary>

Truncation error typically decreases like O(h), but rounding and function-evaluation errors in the numerator can be amplified by division by h, giving a term of order u/h under a simple scale model. Extremely small h may also make x+h round to x. Balance both errors rather than shrinking h indefinitely.

**Remember:** Convergence in exact arithmetic is only part of the story.

</details>

Sources: [Heath · Ch. 1 review Q1.50, printed p. 41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-discretization-tradeoff`

---

### 113. Zero total propensity means no next event.

**AM 207 · Stochastic simulation · SPOT THE MISTAKE**

All reaction propensities at the current state are zero. Should the SSA compute −log(U)/0 or choose a random reaction anyway?

<details>
<summary>Reveal explanation</summary>

No. With no allowed reactions, the state is absorbing under the current time-homogeneous reaction model. Advance the record to the horizon without a reaction or stop. If rates have external time dependence, a separate algorithm must account for future changes.

**Remember:** No available channel means no jump.

</details>

Sources: [Lecture 05 · p. 21](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=21)

Card ID: `am207-zero-propensity`

---

### 114. SSE divided by n—or by n minus p?

**STAT 244 · Variance estimation · SPOT THE MISTAKE**

For a full-column-rank Gaussian linear model with n observations and p fitted coefficients, compare the maximum-likelihood and unbiased estimates of σ².

<details>
<summary>Reveal explanation</summary>

The MLE is SSE/n (assuming positive residual sum of squares). The unbiased estimate is SSE/(n − p), because E[SSE] = (n − p)σ² under the model.

More generally, use n − rank(X) residual degrees of freedom. The MLE optimizes likelihood; unbiasedness is a different criterion.

**Remember:** Likelihood and unbiasedness are different goals.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance`

---

### 115. An exact subtraction can expose inaccurate inputs.

**AM 205 · Error sources · SPOT THE MISTAKE**

Suppose two large approximate quantities share many leading digits. Why can their difference have large relative error even if the final machine subtraction is exact?

<details>
<summary>Reveal explanation</summary>

The true difference can be much smaller than either operand. Preexisting operand errors then become large relative to that difference. Cancellation removes matching leading digits; it does not have to introduce fresh rounding in the subtraction itself.

**Remember:** Track the errors already present in the operands.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-cancellation`

---

### 116. Two identical reactants must be counted as pairs.

**AM 207 · Stochastic simulation · TINY PROBLEM**

For reaction 2A→B with per-unordered-pair rate c and n A molecules, what is the propensity?

<details>
<summary>Reveal explanation</summary>

c·C(n,2)=c n(n−1)/2. At n=1 it is zero. Using cn² would allow self-pairing and overcount ordered pairs. Rate-constant conventions can absorb factors, so state the convention before comparing formulas.

**Remember:** Count distinct reacting combinations.

</details>

Sources: [Lecture 05 · propensity examples](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=20)

Card ID: `am207-combinatorial-propensity`

---

### 117. The likelihood estimate and unbiased estimate differ.

**STAT 244 · Variance estimation · TINY PROBLEM**

For n=20, rank(X)=4, and SSE=80, calculate the Gaussian MLE and unbiased estimate of σ².

<details>
<summary>Reveal explanation</summary>

MLE:80/20=4. Unbiased estimate:80/(20−4)=5. Their difference reflects the four fitted directions consuming residual degrees of freedom. Under the model E[SSE]=16σ², so dividing by 20 biases downward.

**Remember:** The denominator encodes the criterion.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-numeric`

---

### 118. Rewrite before subtracting nearly equal numbers.

**AM 205 · Error sources · WORKED EXAMPLE**

For small positive x, how can you evaluate √(1+x)−1 without directly subtracting two nearly equal numbers?

<details>
<summary>Reveal explanation</summary>

Multiply numerator and denominator by √(1+x)+1 to obtain x/[√(1+x)+1]. The denominator is near 2, so this avoids subtracting nearly equal terms. Algebraically equivalent expressions can behave very differently in floating-point arithmetic.

**Remember:** Choose a form that avoids unnecessary cancellation.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-rationalize-small-difference`

---

### 119. The average of a product is not the product of averages.

**AM 207 · Moment closure · SPOT THE MISTAKE**

A reaction rate contains RF, the product of rabbit and fox counts. Why can the exact equation for E[F] depend on more than E[R] and E[F]?

<details>
<summary>Reveal explanation</summary>

Because E[RF] = E[R]E[F] + Cov(R,F). The exact mean equation can therefore involve second moments. Their equations can involve still higher moments.

Replacing E[RF] by E[R]E[F] is a mean-field closure assumption, not a general identity. In the urn model, linear drift permits a closed mean equation without this replacement.

**Remember:** Nonlinearity couples the moments.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-closure`

---

### 120. Differentiate with respect to variance, not standard deviation.

**STAT 244 · Variance estimation · DERIVATION**

Let s=σ² and R=SSE>0. For ℓ(s)=−(n/2)log s−R/(2s)+constant, verify the curvature at ŝ=R/n.

<details>
<summary>Reveal explanation</summary>

ℓ′(s)=−n/(2s)+R/(2s²). Then ℓ″(s)=n/(2s²)−R/s³. Substituting ŝ=R/n gives −n³/(2R²)<0. If R=0, there is no positive interior maximizer of this form; the variance tends toward the boundary.

**Remember:** Name the parameter before differentiating.

</details>

Sources: [HW2 · Q7; least-squares theory](../courses/stat244/homeworks/ps2/hw2.pdf#page=4); [Least-squares theory · variance estimator](../courses/stat244/lecnotes/notes-lstheory.pdf)

Card ID: `stat244-variance-second-derivative`

---

### 121. An intermediate can overflow even when the answer fits.

**AM 205 · Error sources · SPOT THE MISTAKE**

Why can directly computing √(a²+b²) fail for a=b=10³⁰⁰ in binary64, and how can you rewrite it?

<details>
<summary>Reveal explanation</summary>

Squaring either input overflows, although the norm is about 1.414×10³⁰⁰ and is representable. Let m=max(|a|,|b|); for m>0 compute m√[(a/m)²+(b/m)²]. Return zero when m=0. Scaling keeps the squared terms at most one.

**Remember:** Check intermediates, not just the final range.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-overflow-rewrite`

---

### 122. Quantify the mean-field error in a product.

**AM 207 · Moment closure · TINY PROBLEM**

E[R]=10, E[F]=4, and Cov(R,F)=−6. Compare E[RF] with the mean-field replacement E[R]E[F].

<details>
<summary>Reveal explanation</summary>

E[RF]=10·4−6=34. The product-of-means approximation is 40, overestimating this moment by 6. Positive covariance would reverse the direction. The error is not determined by the marginal means alone.

**Remember:** The omitted covariance has both magnitude and sign.

</details>

Sources: [HW2 · Q3(c) and Q4(a–b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-covariance-gap`

---

### 123. “Best” comes with a comparison class.

**STAT 244 · Gauss–Markov · SPOT THE MISTAKE**

Gauss–Markov calls ordinary least squares BLUE. Does that mean it beats every possible estimator or requires Gaussian errors?

<details>
<summary>Reveal explanation</summary>

Neither. With full-column-rank X, E[y] = Xβ, and Var(y) = σ²I, OLS has minimum variance among estimators that are linear in y and unbiased for the target. Normality is not required.

Biased or nonlinear estimators are outside this comparison class. “Best” does not promise the lowest test error for every prediction task.

**Remember:** Best linear unbiased—not universally best.

</details>

Sources: [HW2 · Q9](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-blue`

---

### 124. Infinity and NaN mean different failures.

**AM 205 · Error sources · PREDICT THE RESULT**

Under usual IEEE floating-point semantics, distinguish nonzero finite division by zero from 0/0. How should a downstream comparison treat NaN?

<details>
<summary>Reveal explanation</summary>

Nonzero finite division by zero yields a signed infinity (depending on the language’s exception behavior); 0/0 is invalid and produces NaN. NaN does not compare equal to itself, so use a dedicated isnan check rather than x==NaN. Language-level operators may raise exceptions instead of returning these values.

**Remember:** Understand both IEEE semantics and language behavior.

</details>

Sources: [Heath · Ch. 1 review, printed pp. 40–41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=61)

Card ID: `am205-exceptional-values`

---

### 125. Four heads does not make the probability exactly 4/11.

**AM 207 · Bayesian updating · TINY PROBLEM**

Observe 4 heads in 11 independent tosses of a coin with unknown head probability θ. Start with a uniform prior on θ.

What is the posterior distribution?

<details>
<summary>Reveal explanation</summary>

The likelihood is proportional to θ⁴(1 − θ)⁷. A uniform prior is Beta(1,1), so the posterior is Beta(5,8). Its mean is 5/13 and its mode is 4/11.

The posterior expresses uncertainty over θ; a point estimate alone does not. This is a derived companion calculation to the lecture coin example.

**Remember:** Posterior ∝ likelihood × prior.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-bayes`

---

### 126. Which conclusions need normality?

**STAT 244 · Gauss–Markov · SORT THE ASSUMPTIONS**

Separate these claims: OLS is unbiased; OLS is BLUE; coefficient t statistics have exact t distributions.

<details>
<summary>Reveal explanation</summary>

Unbiasedness follows from E[y]=Xβ and a full-rank fixed design. BLUE additionally needs the spherical covariance condition σ²I for ordinary OLS. Exact finite-sample t reference distributions use Gaussian errors as well. Without normality, asymptotic inference may still be possible under additional conditions.

**Remember:** Use only the assumptions each conclusion needs.

</details>

Sources: [HW2 · Q9](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-normality-separation`

---

### 127. One millimeter can be tiny—or enormous.

**AM 205 · Error measures · TINY PROBLEM**

An estimate is 0.002 and the exact value is 0.001. Find the absolute and relative errors. What changes when the exact value is zero?

<details>
<summary>Reveal explanation</summary>

Absolute error is |0.002 − 0.001| = 0.001. Relative error is 0.001 / 0.001 = 1, or 100%. Relative error divided by the exact value is undefined when that value is zero; use an absolute tolerance or a meaningful external scale instead.

**Remember:** Absolute error needs scale to be interpretable.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-relative`

---

### 128. Prior counts and observed counts combine.

**AM 207 · Bayesian updating · BUILD THE RULE**

If θ∼Beta(a,b) and you observe h heads and t tails in independent Bernoulli trials, what is the posterior?

<details>
<summary>Reveal explanation</summary>

Beta(a+h,b+t), because the prior contributes θ^(a−1)(1−θ)^(b−1) and the likelihood contributes θ^h(1−θ)^t. The posterior mean is (a+h)/(a+b+h+t). This applies when the trials share the same θ and the stated conditional-independence model.

**Remember:** Multiply kernels and recognize the distribution.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-beta-update-general`

---

### 129. An inverse identity can survive singularity.

**STAT 244 · Generalized inverses · QUICK RECALL**

For a matrix B, what identity defines a generalized inverse G in the sense used in your notes? Is G necessarily unique?

<details>
<summary>Reveal explanation</summary>

BGB = B. Such a G need not be unique. The Moore–Penrose pseudoinverse adds further conditions and is unique.

Do not freely replace BG or GB with the identity: that is an ordinary-inverse property and generally fails for a singular matrix.

**Remember:** BGB = B does not imply BG = I.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse`

---

### 130. Correct answer. Slightly different question.

**AM 205 · Error analysis · TINY PROBLEM**

Approximate √2 by 1.4. What is the absolute forward error? What input makes 1.4 an exact square root?

<details>
<summary>Reveal explanation</summary>

Forward error is |1.4 − √2| ≈ 0.0142. Since 1.4² = 1.96, the result is exact for the nearby input 1.96, with absolute backward error |1.96 − 2| = 0.04.

Backward error asks how much the input would need to change to justify the computed result.

**Remember:** Forward: output error. Backward: input perturbation.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-backward`

---

### 131. Prediction averages over parameter uncertainty.

**AM 207 · Bayesian updating · TINY PROBLEM**

After observing 4 heads and 7 tails with a uniform prior, what is the posterior probability of a head on the next exchangeable toss?

<details>
<summary>Reveal explanation</summary>

The posterior is Beta(5,8). Integrating θ against it gives P(next head|data)=E[θ|data]=5/13≈0.3846. This is a predictive probability, distinct from the posterior mode 4/11 or a claim that θ equals one number with certainty.

**Remember:** Posterior prediction integrates the unknown parameter.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-posterior-predictive`

---

### 132. A generalized inverse can have a free entry.

**STAT 244 · Generalized inverses · TINY PROBLEM**

For B=diag(1,0), show that G=diag(1,t) is a generalized inverse for any real t. Which t gives its Moore–Penrose pseudoinverse?

<details>
<summary>Reveal explanation</summary>

BGB=diag(1,0)=B for every t. The Moore–Penrose pseudoinverse is diag(1,0), so t=0. The extra Moore–Penrose conditions remove freedoms left by BGB=B.

**Remember:** The sandwich condition alone does not imply uniqueness.

</details>

Sources: [Linear algebra notes · pp. 4–5](../courses/stat244/lecnotes/notes-linalg.pdf#page=5)

Card ID: `stat244-ginverse-example`

---

### 133. The residual is an input perturbation.

**AM 205 · Error analysis · TINY PROBLEM**

Let r=b−Ax̂. If you keep A fixed, for what perturbed right-hand side is x̂ an exact solution?

<details>
<summary>Reveal explanation</summary>

Ax̂=b−r, so the perturbed right-hand side is b̃=b−r. The backward change is Δb=−r. For nonzero b, ‖r‖/‖b‖ is the relative right-hand-side perturbation. This concerns a square solve; a least-squares residual can be nonzero even at the exact minimizer.

**Remember:** A residual can describe a nearby problem.

</details>

Sources: [Heath · §1.2.5, printed p. 12](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=33)

Card ID: `am205-linear-backward-data`

---

### 134. A likelihood is a function of the parameter, not automatically its density.

**AM 207 · Bayesian updating · SPOT THE MISTAKE**

Why is p(data|θ) not automatically the posterior density p(θ|data)?

<details>
<summary>Reveal explanation</summary>

The posterior is proportional to likelihood times prior, normalized over θ. A likelihood treats the observed data as fixed while varying θ; it need not integrate to one over θ. Reversing the conditional requires Bayes’ rule, not just renaming the arguments.

**Remember:** The conditioning direction matters.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-likelihood-not-posterior`

---

### 135. Check a proposed generalized inverse by sandwiching it.

**STAT 244 · Generalized inverses · BUILD THE PROOF**

Let A be invertible and G a generalized inverse of B. Show that A⁻¹G is a valid generalized inverse of BA.

<details>
<summary>Reveal explanation</summary>

Compute (BA)(A⁻¹G)(BA) = BGB A = BA. That is exactly the required sandwich identity.

This constructs a valid choice; it does not assert that every generalized inverse of BA must equal this one.

**Remember:** Verify the defining identity directly.

</details>

Sources: [HW2 · Q1(a)](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-ginverse-product`

---

### 136. “A stable solver fixes an ill-conditioned problem.”

**AM 205 · Conditioning vs stability · SPOT THE MISTAKE**

Why can a backward-stable algorithm still return an inaccurate solution?

<details>
<summary>Reveal explanation</summary>

Backward stability makes the result exact for slightly perturbed data. An ill-conditioned problem can amplify that small perturbation into a large output change. Roughly, relative forward error is bounded by conditioning times relative backward error in an appropriate local analysis.

Conditioning describes the problem; stability describes the algorithm.

**Remember:** Small backward error can become large forward error.

</details>

Sources: [Heath · §1.2.6, printed p. 13](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-conditioning`

---

### 137. The binomial coefficient may cancel for estimation but not for evidence.

**AM 207 · Bayesian updating · THINK IT THROUGH**

For h heads in n flips, compare the likelihood of one specified sequence with the likelihood of the unordered count h.

<details>
<summary>Reveal explanation</summary>

A specified sequence has probability θ^h(1−θ)^(n−h). The count has C(n,h) times that probability. The coefficient does not depend on θ, so both produce the same normalized posterior shape under the same prior. Their data-event probabilities differ, so the factor can matter for evidence calculations.

**Remember:** Constants can be irrelevant for one task and essential for another.

</details>

Sources: [Lecture 06 · pp. 45–51 · companion calculation](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=51)

Card ID: `am207-sequence-versus-count`

---

### 138. The inverse factor changes sides with the product.

**STAT 244 · Generalized inverses · BUILD THE PROOF**

If G is a generalized inverse of B and A is invertible, verify that GA⁻¹ is a generalized inverse of AB.

<details>
<summary>Reveal explanation</summary>

(AB)(GA⁻¹)(AB) = ABG(A⁻¹A)B = ABGB = A(BGB) = AB. Thus GA⁻¹ is a generalized inverse of AB when BGB = B and A is invertible.

**Remember:** Reassociation is allowed; reordering is not.

</details>

Sources: [HW2 · Q1(a)](../courses/stat244/homeworks/ps2/hw2.pdf#page=1)

Card ID: `stat244-right-product`

---

### 139. How many digits might sensitivity consume?

**AM 205 · Conditioning vs stability · TINY PROBLEM**

A backward-stable solve uses data accurate to roughly 12 decimal digits, and κ(A)≈10⁴. Roughly how many accurate digits might remain?

<details>
<summary>Reveal explanation</summary>

About 8 digits in a typical first-order worst-case estimate: relative error scales like 10⁴×10⁻¹²=10⁻⁸. This is a heuristic bound, not a promise; the direction of data error and solver constants matter.

**Remember:** Conditioning can amplify error by orders of magnitude.

</details>

Sources: [Heath · Ch. 2 review Q2.64–65, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-digits-lost`

---

### 140. A density greater than one is allowed.

**AM 207 · Probability foundations · SPOT THE MISTAKE**

X is uniform on [0, 0.2], so its density is 5 there. Does this violate the rule that probabilities are at most one?

<details>
<summary>Reveal explanation</summary>

No. Probability is the integral of density over a set. Here the total area is 5 × 0.2 = 1. A density has units of inverse x-units; its height is not itself an event probability. For a continuous distribution, a single point has probability zero.

**Remember:** Probability is area, not density height.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-density`

---

### 141. The coefficients can vary while the projection stays fixed.

**STAT 244 · Rank deficiency · EXPLAIN WHY**

Why does XGXᵀ give the same fitted-value projector for every generalized inverse G of XᵀX?

<details>
<summary>Reveal explanation</summary>

On C(X), the operator XGXᵀ acts as the identity; on C(X)⊥, Xᵀv = 0, so it acts as zero. Every observation vector decomposes uniquely into those two subspaces.

Thus the action on every vector is fixed even if G and the coefficient estimate are not unique.

**Remember:** Unique fitted values do not require unique coefficients.

</details>

Sources: [HW2 · Q10](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-projector-unique`

---

### 142. Sensitivity has a derivative.

**AM 205 · Conditioning vs stability · DERIVATION**

For a differentiable scalar function y=f(x), with x and f(x) nonzero, derive its local relative condition number.

<details>
<summary>Reveal explanation</summary>

For a small input perturbation Δx, Δy≈f′(x)Δx. Divide output relative error by input relative error: |Δy/f(x)| / |Δx/x| ≈ |x f′(x)/f(x)|. The formula needs care near zeros of x or f, where this relative scaling is undefined or misleading.

**Remember:** Relative conditioning compares relative changes.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-scalar-condition`

---

### 143. Recover interval probability from a CDF.

**AM 207 · Probability foundations · TINY PROBLEM**

If a continuous random variable has F(1)=0.2 and F(3)=0.8, what is P(1<X≤3)? Is it the density at 3?

<details>
<summary>Reveal explanation</summary>

The probability is F(3)−F(1)=0.6. A density is the local derivative of an absolutely continuous CDF where the derivative exists. A CDF difference accumulates probability over an interval; a density value alone does not.

**Remember:** Use CDF differences for interval probabilities.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-cdf-density`

---

### 144. Different coefficients, identical fitted vector.

**STAT 244 · Rank deficiency · WORKED EXAMPLE**

For X=[[1,0],[1,0]], y=(1,3)ᵀ, describe the fitted values and all least-squares coefficient vectors.

<details>
<summary>Reveal explanation</summary>

The first coefficient is the mean, β₁=2, while β₂ is arbitrary because its column is zero. All fits are (2,2)ᵀ, and the residual is (−1,1)ᵀ. Any valid least-squares solution gives the same projection.

**Remember:** Unused coefficient directions cannot change the fit.

</details>

Sources: [HW2 · Q10](../courses/stat244/homeworks/ps2/hw2.pdf#page=4)

Card ID: `stat244-g-inverse-fitted-numeric`

---

### 145. Square roots damp relative input errors.

**AM 205 · Conditioning vs stability · TINY PROBLEM**

For f(x)=√x and x>0, compute |x f′(x)/f(x)|.

<details>
<summary>Reveal explanation</summary>

Since f′(x)=1/(2√x), the relative condition number is x/(2x)=1/2. A small relative input error produces about half as much relative output error locally. Absolute sensitivity, 1/(2√x), is a different measure and grows near zero.

**Remember:** Absolute and relative sensitivity can tell different stories.

</details>

Sources: [Heath · §1.2.6, printed pp. 13–14](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=34)

Card ID: `am205-sqrt-condition`

---

### 146. A candidate density needs total mass one.

**AM 207 · Probability foundations · WORKED EXAMPLE**

Let f(x)=cx on [0,2] and zero elsewhere. Find c and then P(X≤1).

<details>
<summary>Reveal explanation</summary>

Normalization gives ∫₀²cx dx=2c=1, so c=1/2. Then P(X≤1)=∫₀¹x/2 dx=1/4. A function being nonnegative is necessary but not enough to make it a density.

**Remember:** Check nonnegativity and normalization.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-normalize-density`

---

### 147. Why the projected fit is closest.

**STAT 244 · Projection proofs · BUILD THE PROOF**

Let μ̂ be the orthogonal projection of y onto C(X). For any μ in C(X), explain why ‖y−μ‖² ≥ ‖y−μ̂‖².

<details>
<summary>Reveal explanation</summary>

Write y−μ = (y−μ̂) + (μ̂−μ). The first term is perpendicular to C(X); the second lies in it. Therefore the cross term is zero and ‖y−μ‖² = ‖y−μ̂‖² + ‖μ̂−μ‖².

The last term is nonnegative. This proves the claim without differentiating.

**Remember:** Perpendicular pieces make squared lengths add.

</details>

Sources: [HW2 · Q6](../courses/stat244/homeworks/ps2/hw2.pdf#page=3)

Card ID: `stat244-pythagoras`

---

### 148. Same numbers. Different parentheses.

**AM 205 · Floating-point arithmetic · PREDICT THE RESULT**

In binary64, compare (10¹⁶ + (−10¹⁶)) + 1 with 10¹⁶ + ((−10¹⁶) + 1).

<details>
<summary>Reveal explanation</summary>

The first evaluates to 1. In the second, the addition of 1 to −10¹⁶ rounds back to −10¹⁶ under round-to-nearest, ties-to-even, so the result is 0.

Floating-point addition is not associative. Parallel reductions or reordered sums can therefore give different answers.

**Remember:** Parentheses can change floating-point results.

</details>

Sources: [Heath · Ch. 1 review · floating-point properties](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-associative`

---

### 149. Average the function under the distribution.

**AM 207 · Probability foundations · QUICK RECALL**

For a continuous X with density p, what is E[g(X)]? Do you first need the distribution of Y=g(X)?

<details>
<summary>Reveal explanation</summary>

E[g(X)]=∫g(x)p(x)dx when the expectation exists. You can compute it directly under X without deriving Y’s density. For discrete X, replace the integral by a weighted sum. This is the basis of many Monte Carlo estimators.

**Remember:** Transform the integrand before transforming the distribution.

</details>

Sources: [Lecture 01 · pp. 35–37](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=36)

Card ID: `am207-expectation-function`

---

### 150. Every competing unbiased estimator adds variance.

**STAT 244 · Gauss–Markov proof · BUILD THE PROOF**

Write another linear unbiased estimator as By, where B = (XᵀX)⁻¹Xᵀ + A. Why must AX = 0, and what happens to its variance?

<details>
<summary>Reveal explanation</summary>

Unbiasedness for every β requires BX = I, so AX = BX−I = 0. Under Var(y)=σ²I, the cross terms vanish and Var(By) = σ²(XᵀX)⁻¹ + σ²AAᵀ.

AAᵀ is positive semidefinite, so every linear contrast has at least the OLS variance.

**Remember:** The extra component has nonnegative variance.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-blue-proof`

---

### 151. Small terms can disappear into a large partial sum.

**AM 205 · Floating-point arithmetic · EXPLAIN WHY**

When summing positive numbers of very different magnitudes, why can adding smaller terms first help?

<details>
<summary>Reveal explanation</summary>

A small addend may be below half the spacing of a large partial sum and round away. Combining small terms first can let them accumulate into a representable contribution. Pairwise or compensated summation can also help. No ordering is a universal optimality guarantee for arbitrary signed data.

**Remember:** Preserve small contributions before the scale grows.

</details>

Sources: [Heath · Ch. 1 review Q1.45–49, printed p. 41](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=62)

Card ID: `am205-positive-sum-order`

---

### 152. Conditioning changes the denominator.

**AM 207 · Probability foundations · TINY PROBLEM**

A fair six-sided die is known to show an even result. What is the probability that it shows a value greater than 3?

<details>
<summary>Reveal explanation</summary>

The conditional possibilities are {2,4,6}; two exceed 3. The probability is 2/3, or P({4,6})/P({2,4,6})=(2/6)/(3/6). Conditioning restricts and renormalizes the sample space.

**Remember:** The denominator is the probability of the information.

</details>

Sources: [Lecture 01 · conditional probability example](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=18)

Card ID: `am207-conditional-probability`

---

### 153. Show the variance gap for one estimable contrast.

**STAT 244 · Gauss–Markov proof · DERIVATION**

A competing linear unbiased estimate of ℓᵀβ has weights a=X(XᵀX)⁻¹ℓ+z with Xᵀz=0. What is its excess variance over the OLS contrast?

<details>
<summary>Reveal explanation</summary>

Under Var(y)=σ²I, Var(aᵀy)=σ²aᵀa. The cross term is zero because ℓᵀ(XᵀX)⁻¹Xᵀz=0. The excess is σ²zᵀz≥0, with equality when z=0.

**Remember:** The perpendicular extra component contributes nonnegative variance.

</details>

Sources: [Least-squares theory · pp. 19–20](../courses/stat244/lecnotes/notes-lstheory.pdf#page=19)

Card ID: `stat244-contrast-variance-gap`

---

### 154. Many printed digits are not many correct digits.

**AM 205 · Floating-point arithmetic · SPOT THE MISTAKE**

What is the difference between arithmetic precision and accuracy of a computed result?

<details>
<summary>Reveal explanation</summary>

Precision describes the representational capacity of the arithmetic. Accuracy describes closeness to the desired answer. High precision can reduce rounding error, but cannot recover missing input information or make a poor model correct.

Printing 16 digits does not establish that all 16 are meaningful.

**Remember:** Representation capacity is not an accuracy certificate.

</details>

Sources: [Heath · Ch. 1 review, printed p. 39](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=60)

Card ID: `am205-precision`

---

### 155. Disjoint events usually are not independent.

**AM 207 · Probability foundations · SPOT THE MISTAKE**

If A and B are disjoint and each has positive probability, can they be independent?

<details>
<summary>Reveal explanation</summary>

No. Disjointness gives P(A∩B)=0, whereas independence would require P(A)P(B)>0. Learning that A happened rules out B, which is strong dependence. An event of probability zero is an exceptional case.

**Remember:** Mutual exclusion is different from independence.

</details>

Sources: [Lecture 01 · probability rules, companion example](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=12)

Card ID: `am207-independence-vs-disjoint`

---

### 156. Unequal uncertainty calls for a different distance.

**STAT 244 · Generalized least squares · CONNECT THE DOTS**

If Var(y)=σ²V with known positive-definite V, what replaces ordinary squared residual length?

<details>
<summary>Reveal explanation</summary>

Minimize (y−Xβ)ᵀV⁻¹(y−Xβ). This is ordinary least squares after whitening y and X by V⁻¹ᐟ². For full-column-rank X, β̂ = (XᵀV⁻¹X)⁻¹XᵀV⁻¹y.

The residual is orthogonal to C(X) under the V⁻¹-weighted inner product, not necessarily under the ordinary Euclidean one.

**Remember:** Whiten, then project.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-gls`

---

### 157. A tiny determinant can be harmless.

**AM 205 · Matrix conditioning · TINY PROBLEM**

For A = 10⁻¹⁰ I₂, compare det(A) with its 2-norm condition number. Is A ill-conditioned?

<details>
<summary>Reveal explanation</summary>

det(A) = 10⁻²⁰, but κ₂(A) = σmax/σmin = 1. Both singular values are 10⁻¹⁰. Uniform scaling makes the determinant tiny without making the solve sensitive to relative perturbations.

Determinant magnitude alone is a poor near-singularity diagnostic.

**Remember:** Conditioning is about relative stretching.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-condition-scale`

---

### 158. Stretching values thins the density.

**AM 207 · Transformations · TINY PROBLEM**

If Y = 2X and X has density fX, what is fY(y)? Why is the factor 1/2 needed?

<details>
<summary>Reveal explanation</summary>

fY(y) = fX(y/2)/2. The mapping doubles interval lengths, so density must halve to preserve probability mass. The inverse-map derivative has magnitude |dx/dy| = 1/2.

For a differentiable one-to-one transformation, multiply by the absolute determinant of the inverse Jacobian.

**Remember:** Preserve mass when coordinates change.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-jacobian`

---

### 159. Verify that the transformed errors are spherical.

**STAT 244 · Generalized least squares · DERIVATION**

If Var(y)=σ²V and A=V⁻¹ᐟ² is the symmetric inverse square root, calculate Var(Ay).

<details>
<summary>Reveal explanation</summary>

Var(Ay)=A(σ²V)Aᵀ=σ²V⁻¹ᐟ²VV⁻¹ᐟ²=σ²I. Transform X with the same A so the mean becomes AXβ. Whitening only the response while leaving X unchanged defines a different model.

**Remember:** Transform both response and design.

</details>

Sources: [Least-squares theory · pp. 20–22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=20)

Card ID: `stat244-whitening-covariance`

---

### 160. Column sums and row sums measure different amplification.

**AM 205 · Matrix conditioning · TINY PROBLEM**

For A=[[1,−2],[3,4]], compute ‖A‖₁ and ‖A‖∞.

<details>
<summary>Reveal explanation</summary>

The induced 1-norm is the maximum absolute column sum: max(1+3,2+4)=6. The infinity-norm is the maximum absolute row sum: max(1+2,3+4)=7. Taking the sum of every entry’s magnitude is neither of these induced norms.

**Remember:** One-norm: columns. Infinity-norm: rows.

</details>

Sources: [Heath · Ch. 2 review · matrix norms](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-matrix-norms`

---

### 161. The absolute value keeps the density nonnegative.

**AM 207 · Transformations · TINY PROBLEM**

If Y=−3X, express fY(y) in terms of fX.

<details>
<summary>Reveal explanation</summary>

The inverse is x=−y/3 with derivative −1/3. Thus fY(y)=fX(−y/3)/3. The sign reverses orientation, while the absolute derivative rescales probability density. Forgetting the absolute value would produce a negative density.

**Remember:** Orientation changes do not make negative probability.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-negative-scale`

---

### 162. More precise observations get more weight.

**STAT 244 · Weighted least squares · TINY PROBLEM**

Two independent measurements have variances σ² and 4σ². What relative weights should weighted least squares use?

<details>
<summary>Reveal explanation</summary>

Weights are proportional to inverse variance: 1 and 1/4. The noisier measurement receives less weight.

For an average of m independent equal-variance observations, variance is σ²/m, so the corresponding precision weight is m.

**Remember:** Weight by precision, not by variance.

</details>

Sources: [Least-squares theory · p. 22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weights`

---

### 163. Compare largest and smallest scaling factors.

**AM 205 · Matrix conditioning · TINY PROBLEM**

For D=diag(4,−6,2), what is its condition number in the induced 1-, 2-, and infinity-norms?

<details>
<summary>Reveal explanation</summary>

All three give 6/(2)=3. The norm is the largest diagonal magnitude, 6; the inverse norm is the largest reciprocal magnitude, 1/2. The negative sign changes orientation along a coordinate, not the magnitude ratio.

**Remember:** For a diagonal matrix, use absolute diagonal values.

</details>

Sources: [Heath · Ch. 2 review Q2.57, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-diagonal-condition`

---

### 164. A determinant measures local area scaling.

**AM 207 · Transformations · DERIVATION**

If Y=AX for an invertible 2×2 matrix A, what is the transformed density?

<details>
<summary>Reveal explanation</summary>

fY(y)=fX(A⁻¹y)|det(A⁻¹)|=fX(A⁻¹y)/|det(A)|. A small area element grows by |det(A)|, so density changes by its reciprocal. If A is singular, this ordinary two-dimensional density formula does not apply.

**Remember:** Match the Jacobian to the dimension of the density.

</details>

Sources: [Lecture 02 · pp. 15–17](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=16)

Card ID: `am207-two-dimensional-jacobian`

---

### 165. Compute the best constant when precision differs.

**STAT 244 · Weighted least squares · WORKED EXAMPLE**

For independent observations y₁=2 and y₂=8 with known variances proportional to 1 and 4, what weighted least-squares constant do you fit?

<details>
<summary>Reveal explanation</summary>

Use weights 1 and 1/4. The fitted constant is (1·2+(1/4)·8)/(1+1/4)=4/1.25=3.2. The noisier value 8 has less influence. The unweighted mean 5 answers a different optimization problem.

**Remember:** Precision weights pull toward the more reliable measurement.

</details>

Sources: [Least-squares theory · p. 22](../courses/stat244/lecnotes/notes-lstheory.pdf#page=22)

Card ID: `stat244-weighted-mean`

---

### 166. A tiny residual is not the whole answer.

**AM 205 · Linear-system verification · SPOT THE MISTAKE**

You compute x̂ with small residual r = b − Ax̂. What additional issue matters before concluding that x̂ is close to the true x?

<details>
<summary>Reveal explanation</summary>

Check scaling and conditioning. The residual changes if you scale both A and b, even though the true solution does not. And x̂ − x = −A⁻¹r, so an ill-conditioned system can amplify a small residual.

Use a scaled residual together with a condition estimate.

**Remember:** Small residual + good conditioning supports accuracy.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-residual`

---

### 167. Squaring forgets a sign. The density must remember both.

**AM 207 · Noninjective transformations · SPOT THE MISTAKE**

Let Y = X² for a continuous X. For y > 0, why is using only x = √y insufficient when X can be negative?

<details>
<summary>Reveal explanation</summary>

Both √y and −√y map to y. Add their contributions:
fY(y) = [fX(√y) + fX(−√y)] / (2√y).

A change-of-variables formula must sum over all valid inverse branches; omit a branch and you can lose probability mass.

**Remember:** Count every preimage.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-multiple-roots`

---

### 168. Degrees of freedom count projected directions.

**STAT 244 · Quadratic forms · QUICK RECALL**

For y ∼ N(μ,σ²I) and an orthogonal projector P of rank r, what is (y−μ)ᵀP(y−μ)/σ² distributed as?

<details>
<summary>Reveal explanation</summary>

A chi-squared variable with r degrees of freedom. In an orthonormal coordinate system adapted to the projection, it is the sum of squares of r independent standard normals.

Mutually orthogonal projected Gaussian components produce independent quadratic forms. Gaussianity is essential to this exact distributional statement.

**Remember:** Rank becomes degrees of freedom.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-cochran`

---

### 169. A residual can hide a large error in one direction.

**AM 205 · Linear-system verification · WORKED EXAMPLE**

A=diag(1,10⁻⁸), b=(1,10⁻⁸)ᵀ, and x̂=(1,0)ᵀ. Find the true solution and residual.

<details>
<summary>Reveal explanation</summary>

The true solution is x=(1,1)ᵀ, so the error norm is 1. But r=b−Ax̂=(0,10⁻⁸)ᵀ is tiny. The small second singular value suppresses the visible residual while permitting a large error in x₂.

**Remember:** Weakly scaled directions can conceal solution error.

</details>

Sources: [Heath · §2.3.5, printed p. 61](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=82)

Card ID: `am205-small-residual-counterexample`

---

### 170. Two inverse branches produce one density.

**AM 207 · Noninjective transformations · WORKED EXAMPLE**

X is uniform on [−1,1] and Y=X². Find F_Y(y) and f_Y(y) for 0<y<1.

<details>
<summary>Reveal explanation</summary>

F_Y(y)=P(−√y≤X≤√y)=√y. Differentiating gives f_Y(y)=1/(2√y). Both roots contribute in the change-of-variables formula. The density diverges near zero but integrates to one.

**Remember:** An unbounded density can still be integrable.

</details>

Sources: [Lecture 02 · pp. 19–20](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=19)

Card ID: `am207-square-uniform-density`

---

### 171. A rank-two projection keeps two squared normals.

**STAT 244 · Quadratic forms · TINY PROBLEM**

Z∼N(0,I₃) and P=diag(1,1,0). Find the distribution, mean, and variance of ZᵀPZ.

<details>
<summary>Reveal explanation</summary>

It is Z₁²+Z₂²∼χ²₂, with mean 2 and variance 4. The third coordinate contributes nothing. Replacing P with a general symmetric matrix would usually give a weighted sum of chi-squared variables rather than this simple χ² result.

**Remember:** Idempotent eigenvalues make the chi-squared degrees simple.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-quadratic-rank-two`

---

### 172. Exactly two solutions? Not for a linear system.

**AM 205 · Linear systems · BUILD THE PROOF**

Suppose Ax = b and Ay = b with x ≠ y. Can these be the only two solutions over the real numbers?

<details>
<summary>Reveal explanation</summary>

No. For every real t, A[(1 − t)x + ty] = (1 − t)b + tb = b. The line through x and y contains infinitely many solutions.

Also A(y − x) = 0 with y − x nonzero, so the matrix has a nontrivial null space.

**Remember:** Two distinct solutions imply a whole affine line.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-two-solutions`

---

### 173. Why does an envelope produce the right distribution?

**AM 207 · Rejection sampling · BUILD THE SAMPLER**

To sample normalized p using proposal q with p(x) ≤ Mq(x), draw X from q and accept with probability p(X)/(Mq(X)). What is the distribution conditional on acceptance?

<details>
<summary>Reveal explanation</summary>

The joint accepted density is q(x) × p(x)/(Mq(x)) = p(x)/M. Integrating gives acceptance probability 1/M, so normalizing accepted draws gives p(x).

The envelope must bound the target everywhere; silently clipping a ratio above 1 can bias the result.

**Remember:** An envelope converts proposal draws into target draws.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-rejection`

---

### 174. Why Gaussian fits and residuals are independent.

**STAT 244 · Quadratic forms · DERIVATION**

Under y∼N(Xβ,σ²I), use H to show that Hy and (I−H)y are independent.

<details>
<summary>Reveal explanation</summary>

Their cross-covariance is σ²H(I−H)ᵀ=σ²(H−H²)=0. Both are linear transformations of the same Gaussian vector, hence jointly Gaussian. Zero cross-covariance then implies independence. Orthogonality alone is not a universal independence proof.

**Remember:** Geometry plus Gaussianity yields independence.

</details>

Sources: [Inference notes · p. 3](../courses/stat244/lecnotes/notes-lsinf.pdf#page=3)

Card ID: `stat244-independent-fit-residual`

---

### 175. The right-hand side must lie in the column space.

**AM 205 · Linear systems · TINY PROBLEM**

A=[[1,2],[2,4]]. Compare Ax=(3,6)ᵀ with Ax=(3,7)ᵀ.

<details>
<summary>Reveal explanation</summary>

The first is consistent because the second equation is twice the first; it has infinitely many solutions x₁+2x₂=3. The second is inconsistent because it demands both twice that expression equal 6 and equal 7. Singularity alone does not decide existence.

**Remember:** A singular system can be consistent or inconsistent.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-consistency`

---

### 176. A loose envelope wastes accepted opportunities.

**AM 207 · Rejection sampling · TINY PROBLEM**

For normalized target p and proposal q with p≤Mq, suppose M=5. What fraction of proposals is accepted in ideal rejection sampling?

<details>
<summary>Reveal explanation</summary>

The acceptance probability is 1/M=0.2. On average, 5 proposals are needed per accepted draw. A smaller valid M improves efficiency; choosing M too small can invalidate the sampler rather than merely make it faster.

**Remember:** Tighten the envelope without breaking the bound.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-envelope-efficiency`

---

### 177. Extra fit compared with remaining noise.

**STAT 244 · Nested-model inference · BUILD THE STATISTIC**

Nested Gaussian linear models have ranks p₀ < p₁ and residual sums SSE₀ and SSE₁. What F statistic tests the smaller model?

<details>
<summary>Reveal explanation</summary>

F = [(SSE₀−SSE₁)/(p₁−p₀)] / [SSE₁/(n−p₁)]. Under the null and the spherical Gaussian error model, it has F(p₁−p₀, n−p₁) distribution.

The numerator measures improvement per added direction; the denominator estimates noise variance from the larger model.

**Remember:** Improvement per degree of freedom, scaled by noise.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-test`

---

### 178. More unknowns do not guarantee a solution.

**AM 205 · Linear systems · SPOT THE MISTAKE**

A has fewer rows than columns. Is Ax=b necessarily solvable for every b?

<details>
<summary>Reveal explanation</summary>

No. Solvability for every b requires full row rank. For example, A=[[1,0,0],[0,0,0]] cannot produce b=(0,1)ᵀ. If a solution exists for an underdetermined real system, the nontrivial null space makes it nonunique.

**Remember:** Count equations and check rank.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-underdetermined`

---

### 179. Rejection sampling can use an unnormalized target too.

**AM 207 · Rejection sampling · THINK IT THROUGH**

If f is an unnormalized target and f(x)≤cq(x), how do you accept, and what is the overall acceptance probability?

<details>
<summary>Reveal explanation</summary>

Accept a q draw with probability f(x)/(cq(x)). Accepted points have density f/Z where Z=∫f. The overall acceptance probability is Z/c, not automatically 1/c unless f is normalized. You need a valid envelope even when Z is unknown.

**Remember:** Keep track of which density is normalized.

</details>

Sources: [Lecture 02 · pp. 32–34](../courses/am207/lecnotes/Lecture_02_Transforms_Sampling_0914.pdf#page=32)

Card ID: `am207-unknown-normalizer`

---

### 180. The central F law belongs to the null model.

**STAT 244 · Nested-model inference · SPOT THE MISTAKE**

Why does the usual central F distribution for a nested-model test require the smaller model to contain the true mean?

<details>
<summary>Reveal explanation</summary>

Under the null, (H₁−H₀)μ=0, so the improvement quadratic form is centered and has a central chi-squared distribution. Under an alternative within the full model, it is generally noncentral. The test compares observed improvement with the null reference.

**Remember:** Centering the numerator uses the null hypothesis.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-null-needed`

---

### 181. Partial and complete pivoting search different places.

**AM 205 · Pivoting · QUICK RECALL**

Where do partial and complete pivoting choose the next pivot? Why can complete pivoting reorder the unknowns?

<details>
<summary>Reveal explanation</summary>

Partial pivoting searches the active column and swaps rows. Complete pivoting searches the entire remaining submatrix and may swap both rows and columns. Row swaps reorder equations; column swaps reorder variables.

Track the column permutation when recovering the original ordering of the solution.

**Remember:** Rows reorder equations. Columns reorder unknowns.

</details>

Sources: [Heath · Ch. 2 review, printed p. 93](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=114)

Card ID: `am205-pivot-scope`

---

### 182. Change where you sample. Correct what you average.

**AM 207 · Importance sampling · QUICK RECALL**

You need Eₚ[f(X)] but draw Xᵢ from q. What weights recover the expectation, and what support condition is essential?

<details>
<summary>Reveal explanation</summary>

Use N⁻¹ Σ f(Xᵢ)p(Xᵢ)/q(Xᵢ). The identity follows from writing ∫fp = ∫(fp/q)q. Require q > 0 wherever fp contributes, and appropriate integrability for the expectation.

A poor q can produce enormous or infinite variance despite the identity being correct.

**Remember:** Support first. Variance second.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance`

---

### 183. One named factor can add several test degrees of freedom.

**STAT 244 · Nested-model inference · TINY PROBLEM**

A full model adds a four-level categorical factor to a smaller model. If all three added contrast directions are independent, how many numerator degrees of freedom does the joint F test use?

<details>
<summary>Reveal explanation</summary>

Three, because a four-level factor contributes three independent directions with an intercept. The count is rank(full)−rank(reduced), not the number of variable names added. Dependencies or empty levels can change that rank difference.

**Remember:** A factor is not necessarily a one-degree-of-freedom term.

</details>

Sources: [Inference notes · pp. 3–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-rank-not-predictors`

---

### 184. Find the first pivot under three policies.

**AM 205 · Pivoting · TINY PROBLEM**

For A=[[1,9,2],[4,3,0],[−7,2,5]], which first pivot is selected with no pivoting, partial pivoting, and complete pivoting?

<details>
<summary>Reveal explanation</summary>

No pivoting uses 1. Partial pivoting searches the first column and selects −7 by magnitude. Complete pivoting searches the whole matrix and selects 9. Complete pivoting moves that entry into place with a column exchange here.

**Remember:** Compare magnitudes inside the correct search region.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-pivot-choice`

---

### 185. Weights correct an intentionally different sampling distribution.

**AM 207 · Importance sampling · WORKED EXAMPLE**

Target probabilities are p(A)=0.8,p(B)=0.2, but proposal probabilities are q(A)=q(B)=0.5. Give the weights for estimating Pₚ(A).

<details>
<summary>Reveal explanation</summary>

Weights p/q are 1.6 at A and 0.4 at B. The integrand is the indicator of A, so the ordinary estimator averages 1.6 for A draws and 0 for B draws. Its expectation under q is 0.5·1.6=0.8.

**Remember:** The weight corrects the probability of seeing each point.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-importance-discrete`

---

### 186. A bigger F means a smaller likelihood ratio.

**STAT 244 · Nested-model inference · DERIVATION**

For nested Gaussian models fitted to the same n observations, express the maximized null/full likelihood ratio in terms of SSE₀ and SSE₁.

<details>
<summary>Reveal explanation</summary>

λ=(SSE₀/SSE₁)^(−n/2), assuming positive sums of squares. Since SSE₀/SSE₁=1+(p₁−p₀)F/(n−p₁), λ decreases as F grows. Small likelihood ratios and large F statistics express the same direction of evidence.

**Remember:** The two tests order the evidence the same way.

</details>

Sources: [Inference notes · pp. 5–6](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-lrt-monotone`

---

### 187. One matrix. A hundred right-hand sides.

**AM 205 · Efficient linear solves · THINK IT THROUGH**

You must solve Ax = b for many different b vectors. Why save an LU factorization instead of solving from scratch each time?

<details>
<summary>Reveal explanation</summary>

For a dense n × n matrix, factorization costs O(n³), while two triangular solves cost O(n²) per right-hand side. Reuse the factors and permutation for each new b.

Explicitly forming A⁻¹ is usually unnecessary for applying the solve.

**Remember:** Factor once; solve many times.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-lu-reuse`

---

### 188. Weights cannot recover a region never sampled.

**AM 207 · Importance sampling · SPOT THE MISTAKE**

If q(x)=0 on a region where f(x)p(x) has nonzero contribution, can importance weights fix the missing contribution?

<details>
<summary>Reveal explanation</summary>

No. No draw visits that region, and p/q is undefined there. The integral identity cannot represent the omitted mass through samples from q. Support coverage is a correctness requirement, separate from efficiency or variance.

**Remember:** You cannot reweight observations you can never obtain.

</details>

Sources: [Lecture 03 · pp. 33–36](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=34)

Card ID: `am207-missing-support`

---

### 189. Calculate the comparison before interpreting it.

**STAT 244 · Nested-model inference · TINY PROBLEM**

A reduced model has SSE=120 and rank 2. A full nested model has SSE=80 and rank 4, with n=24. Compute F and its null degrees of freedom.

<details>
<summary>Reveal explanation</summary>

F = [(120−80)/(4−2)] / [80/(24−4)] = 20/4 = 5. The null reference is F(2,20), assuming the normal linear model conditions.

The number alone is not a p-value; compare it with that reference distribution.

**Remember:** Use ranks, not just the count of named predictors.

</details>

Sources: [Inference notes · p. 5 · companion calculation](../courses/stat244/lecnotes/notes-lsinf.pdf#page=5)

Card ID: `stat244-f-number`

---

### 190. Apply the row permutation to b too.

**AM 205 · Efficient linear solves · BUILD THE ALGORITHM**

Given PA=LU, list the steps to solve Ax=b without forming inverses.

<details>
<summary>Reveal explanation</summary>

First compute Pb. Solve Ly=Pb by forward substitution, then Ux=y by backward substitution. Applying P to A but not b changes the equations and generally gives the wrong solution.

**Remember:** The factorization transforms the whole system.

</details>

Sources: [Heath · Ch. 2 review · repeated systems](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-solve-with-permutation`

---

### 191. Canceling a constant changes the estimator.

**AM 207 · Importance sampling · SPOT THE MISTAKE**

With unnormalized importance weights wᵢ, why use Σwᵢf(Xᵢ)/Σwᵢ? Is it generally unbiased at finite N?

<details>
<summary>Reveal explanation</summary>

The ratio cancels the unknown common scale in the target weights. It is generally biased at finite N because the denominator is random, though it is consistent under suitable conditions.

Ordinary importance sampling with a known normalized target has a different unbiasedness argument.

**Remember:** Self-normalization trades exact unbiasedness for convenience.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-self-normalized`

---

### 192. An equality of two coefficients is one restriction.

**STAT 244 · General linear hypotheses · BUILD THE MODEL**

How would you express H₀: β₂ = β₃ in the form Λβ=c? Why can’t an arbitrary restriction always be tested when X is rank deficient?

<details>
<summary>Reveal explanation</summary>

Choose a row Λ with 1 in position 2, −1 in position 3, and zeros elsewhere; set c=0.

For rank-deficient X, the tested linear functions must be estimable: each row of Λ must lie in C(Xᵀ), equivalently N(X) ⊆ N(Λ). Otherwise the restriction can change without changing the observable mean.

**Remember:** A testable claim must be identifiable from the model.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraints`

---

### 193. Solve from the row with one unknown.

**AM 205 · Efficient linear solves · WORKED EXAMPLE**

Solve [[2,0,0],[3,1,0],[1,−2,4]]x=(4,7,12)ᵀ.

<details>
<summary>Reveal explanation</summary>

The first row gives x₁=2. The second gives 3·2+x₂=7, so x₂=1. The third gives 2−2+4x₃=12, so x₃=3. Forward substitution uses values as soon as they are known.

**Remember:** Lower triangular means solve top to bottom.

</details>

Sources: [Heath · Ch. 2 exercises · triangular solves](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=117)

Card ID: `am205-triangular-step`

---

### 194. A weighted average uses the weight sum, not the sample count.

**AM 207 · Importance sampling · TINY PROBLEM**

Unnormalized weights are (1,2,7) and function values are (0,1,1). Compute the self-normalized estimate.

<details>
<summary>Reveal explanation</summary>

(1·0+2·1+7·1)/(1+2+7)=9/10=0.9. Dividing by 3 would give 3, which is not a normalized average of these indicator values. This estimator differs from ordinary importance sampling with known normalized density weights.

**Remember:** Know which importance estimator you are implementing.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-normalize-weights-number`

---

### 195. Write two restrictions as two rows.

**STAT 244 · General linear hypotheses · TINY PROBLEM**

For β=(β₀,β₁,β₂,β₃)ᵀ, express β₁=β₂ and β₃=2 as Λβ=c.

<details>
<summary>Reveal explanation</summary>

Use Λ=[[0,1,−1,0],[0,0,0,1]] and c=(0,2)ᵀ. The two rows are independent, so these are two independent restrictions. The nonzero right-hand side makes the restricted coefficient set affine rather than a subspace.

**Remember:** Each independent row encodes one restriction.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constraint-matrix`

---

### 196. The transpose reverses the factor order.

**AM 205 · Efficient linear solves · BUILD THE ALGORITHM**

If A=LU with nonsingular triangular factors, how do you solve Aᵀx=b using those same factors?

<details>
<summary>Reveal explanation</summary>

Aᵀ=UᵀLᵀ. First solve Uᵀy=b, then Lᵀx=y. Uᵀ is lower triangular; Lᵀ is upper triangular. A pivoted factorization requires handling the permutation as well.

**Remember:** Transpose the order as well as each factor.

</details>

Sources: [Heath · Ch. 2 review Q2.48, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-transpose-solve`

---

### 197. A thousand proposals can collapse to one influential point.

**AM 207 · Importance sampling · THINK IT THROUGH**

In self-normalized importance sampling, one normalized weight is 0.99. Why should you be cautious about the estimate?

<details>
<summary>Reveal explanation</summary>

Almost the entire estimate is determined by one draw; the remaining samples contribute little. This suggests poor overlap or a heavy-tail mismatch between proposal and weighted target. More nominal samples alone may not reliably fix a bad proposal. Inspect weight concentration and relevant tail behavior.

**Remember:** Nominal sample size can hide weight concentration.

</details>

Sources: [Lecture 03 · p. 35](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=35)

Card ID: `am207-weight-degeneracy`

---

### 198. Solve the normal equations and constraints together.

**STAT 244 · General linear hypotheses · BUILD THE ALGORITHM**

For full-rank X, how can a block linear system compute constrained least squares under Λβ=c?

<details>
<summary>Reveal explanation</summary>

Solve [[XᵀX,Λᵀ],[Λ,0]] [β,ξ]ᵀ = [Xᵀy,c]ᵀ, with an appropriate scaling absorbed in multiplier ξ. The lower block enforces the constraints; the upper block imposes stationarity of the constrained objective.

**Remember:** Lagrange multipliers add equations for the restrictions.

</details>

Sources: [Inference notes · pp. 8–10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=9)

Card ID: `stat244-constrained-normal-equations`

---

### 199. You need A⁻¹Bc, not A⁻¹.

**AM 205 · Efficient linear solves · CHOOSE THE METHOD**

For dense n×n A and B and vector c, how would you compute A⁻¹Bc efficiently?

<details>
<summary>Reveal explanation</summary>

Compute v=Bc, then solve Ax=v using a factorization of A. There is no need to form either A⁻¹ or the n×n product A⁻¹B. If A’s factors are already available, both the matrix-vector multiply and solve cost O(n²).

**Remember:** Apply the operator to the vector directly.

</details>

Sources: [Heath · Ch. 2 review Q2.44–46, printed p. 94](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=115)

Card ID: `am205-inverse-product-cost`

---

### 200. Ten thousand chain states are not ten thousand independent draws.

**AM 207 · Monte Carlo error · SPOT THE MISTAKE**

Why is the usual independent-sample standard error s/√N potentially too optimistic for positively autocorrelated MCMC samples?

<details>
<summary>Reveal explanation</summary>

The variance of an average includes covariance terms between draws. Positive serial correlations add variance. Under suitable stationary mixing conditions, an effective sample size accounts for the integrated autocorrelation of the quantity being estimated.

The relevant correlation is for f(X), so different estimated quantities may have different effective sample sizes.

**Remember:** Dependence reduces the information in repeated draws.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-autocorrelation`

---

### 201. Don’t drop the estimated noise scale.

**STAT 244 · Coefficient inference · QUICK RECALL**

For full-rank Gaussian regression, give the estimated standard error and t interval for βⱼ. Let s² = SSE/(n−p).

<details>
<summary>Reveal explanation</summary>

The estimated standard error is s√[(XᵀX)⁻¹ⱼⱼ]. A pointwise interval is β̂ⱼ ± t₁₋α/₂,ₙ₋ₚ × s√[(XᵀX)⁻¹ⱼⱼ].

The square root of the matrix diagonal alone is missing the noise scale s. The t distribution accounts for estimating σ.

**Remember:** Coefficient uncertainty includes the noise scale.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-t-ci`

---

### 202. Symmetry alone does not buy you Cholesky.

**AM 205 · Structured factorizations · TINY PROBLEM**

What extra condition makes a real symmetric matrix admit A = LLᵀ with a real, positive diagonal L?

<details>
<summary>Reveal explanation</summary>

Positive definiteness. For A = [[4,2],[2,2]], L = [[2,0],[1,1]], and multiplying LLᵀ recovers A.

An SPD matrix can still be ill-conditioned—for example diag(1, 10⁻¹²). Existence of a convenient factorization does not guarantee low sensitivity.

**Remember:** Symmetric positive definite is the key condition.

</details>

Sources: [Heath · Ch. 2 review, printed p. 95](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-cholesky`

---

### 203. Strong correlation shrinks effective information.

**AM 207 · Monte Carlo error · TINY PROBLEM**

For a stationary quantity with autocorrelation ρₖ=rᵏ and r=0.8, use N_eff≈N/(1+2Σρₖ). What is N_eff for N=9000?

<details>
<summary>Reveal explanation</summary>

Σₖ≥1rᵏ=r/(1−r)=4. The integrated factor is 1+2·4=9, giving N_eff≈1000. This calculation assumes the stationary correlation model and a suitable central-limit regime; it does not account for failure to explore other modes.

**Remember:** An ESS estimate is conditional on the chain’s behavior.

</details>

Sources: [Lecture 03 · p. 6 and pp. 30–32 · comparison](../courses/am207/lecnotes/Lecture_03_MCMC_Monte_Carlo_0916.pdf#page=6)

Card ID: `am207-ar1-effective-size`

---

### 204. A matrix entry is a variance multiplier.

**STAT 244 · Coefficient inference · TINY PROBLEM**

s²=9 and (XᵀX)⁻¹ⱼⱼ=0.04. What is the estimated standard error of β̂ⱼ? If β̂ⱼ=1.2, what t statistic tests βⱼ=0?

<details>
<summary>Reveal explanation</summary>

s=3 and √0.04=0.2, so SE=0.6. The t statistic is 1.2/0.6=2. Its reference degrees of freedom are n−p under the full-rank Gaussian model. The t value alone is not enough to determine the exact p-value without the degrees of freedom.

**Remember:** Take the square root of the complete variance expression.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-standard-error-number`

---

### 205. Positive diagonal entries alone are not enough.

**AM 205 · Structured factorizations · TINY PROBLEM**

Does A=[[1,2],[2,1]] have a real Cholesky factor with positive diagonal?

<details>
<summary>Reveal explanation</summary>

No. It is symmetric with positive diagonal, but its eigenvalues are 3 and −1. Also v=(1,−1) gives vᵀAv=−2. It is not positive definite. Standard positive-definite Cholesky fails; symmetric-indefinite factorizations are a different method.

**Remember:** Positive definiteness concerns all directions.

</details>

Sources: [Heath · Ch. 2 review, printed pp. 92–96](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=113)

Card ID: `am205-positive-definite-test`

---

### 206. Count events or wait for one?

**AM 207 · Poisson processes · TINY PROBLEM**

Events arrive at constant rate ν. What are the distribution of the count by time t and the probability of no events?

<details>
<summary>Reveal explanation</summary>

N(t) ∼ Poisson(νt), so P(N(t) = 0) = exp(−νt) and E[N(t)] = νt. The time until the first event has survival function exp(−νt), hence an exponential distribution with rate ν.

**Remember:** Poisson counts and exponential waits are two views.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson`

---

### 207. A frequentist confidence interval describes a procedure.

**STAT 244 · Coefficient inference · SPOT THE MISTAKE**

In the fixed-parameter frequentist model, what does 95% confidence mean for an interval-building method?

<details>
<summary>Reveal explanation</summary>

Across repeated datasets generated under the assumed model, about 95% of intervals produced by the method cover the fixed true parameter. It is not, by itself, a posterior probability statement about the parameter inside this particular realized interval.

**Remember:** Distinguish repeated-sampling coverage from posterior probability.

</details>

Sources: [Inference notes · p. 10](../courses/stat244/lecnotes/notes-lsinf.pdf#page=10)

Card ID: `stat244-confidence-interpretation`

---

### 208. A full-looking matrix can cost only linear work.

**AM 205 · Low-rank computation · TINY PROBLEM**

If A = uvᵀ is n × n, how do you compute Ax without forming all n² entries?

<details>
<summary>Reveal explanation</summary>

Compute the scalar s = vᵀx, then return us. This takes O(n) arithmetic and stores two length-n vectors. A sum of k such terms costs O(nk), making low-rank structure valuable when k is small.

**Remember:** Use factors instead of expanding the matrix.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-rank-one`

---

### 209. Convert the rate into the interval’s expected count.

**AM 207 · Poisson processes · TINY PROBLEM**

A Poisson process has rate 2 per minute. Over 30 seconds, what are the expected count and probability of no events?

<details>
<summary>Reveal explanation</summary>

Thirty seconds is half a minute, so λt=1. The expected count is 1 and P(N=0)=e⁻¹≈0.3679. Always express time and rate in compatible units.

**Remember:** The Poisson parameter is rate times duration.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-poisson-number`

---

### 210. Predicting one response is harder than estimating its mean.

**STAT 244 · Prediction intervals · THINK IT THROUGH**

Why is a prediction interval for a new independent response wider than a confidence interval for its conditional mean at the same x₀?

<details>
<summary>Reveal explanation</summary>

The mean estimate has variance σ²x₀(XᵀX)⁻¹x₀ᵀ. Predicting a new response adds its independent noise variance σ², giving σ²[1+x₀(XᵀX)⁻¹x₀ᵀ].

Under the Gaussian model, replace σ by s and use the appropriate t quantile. The added 1 is the future observation’s uncertainty.

**Remember:** A future observation adds its own noise.

</details>

Sources: [Inference notes · pp. 12–13](../courses/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction`

---

### 211. All columns point in one direction.

**AM 205 · Low-rank computation · BUILD THE PROOF**

For nonzero u and v, why does uvᵀ have rank one?

<details>
<summary>Reveal explanation</summary>

Column j equals vⱼu, so every column lies in span(u). At least one column is nonzero because v is nonzero, so the column space has dimension exactly one. If either vector is zero, the rank is zero.

**Remember:** An outer product has one column-space direction.

</details>

Sources: [Heath · Ch. 2 review · rank-one matrices](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=116)

Card ID: `am205-outer-product-rank`

---

### 212. Nonoverlapping intervals carry independent counts.

**AM 207 · Poisson processes · QUICK RECALL**

For a homogeneous Poisson process, how are counts in [0,1] and (1,2] related? How about N(1) and N(2)?

<details>
<summary>Reveal explanation</summary>

Counts in disjoint time intervals are independent. But N(2)=N(1)+the second-interval count, so cumulative counts N(1) and N(2) are dependent. Do not confuse independent increments with independent cumulative values.

**Remember:** Independence belongs to increments, not the accumulated count.

</details>

Sources: [HW1 · Q1(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-independent-increments`

---

### 213. The extra noise is visible in the formula.

**STAT 244 · Prediction intervals · TINY PROBLEM**

Let s=2 and x₀(XᵀX)⁻¹x₀ᵀ=0.25. Compare the estimated standard deviations used for a mean-response interval and a new-observation interval.

<details>
<summary>Reveal explanation</summary>

For the estimated mean, s√0.25=1. For a new independent observation, s√(1+0.25)=√5≈2.236. Using the same t multiplier therefore yields a wider prediction interval.

**Remember:** The prediction standard deviation includes the added one.

</details>

Sources: [Inference notes · pp. 12–13](../courses/stat244/lecnotes/notes-lsinf.pdf#page=13)

Card ID: `stat244-prediction-width-number`

---

### 214. The normal equations can square your trouble.

**AM 205 · Least-squares algorithms · SPOT THE MISTAKE**

For full-column-rank X, how does κ₂(XᵀX) compare with κ₂(X)? Why might a least-squares solver use QR or SVD?

<details>
<summary>Reveal explanation</summary>

The eigenvalues of XᵀX are the squared singular values of X, so κ₂(XᵀX) = κ₂(X)². Explicitly forming XᵀX can worsen numerical sensitivity.

QR or SVD avoids that particular formation and is generally preferable for difficult least-squares problems. They cannot remove intrinsic ill-conditioning in the data.

**Remember:** A correct formula need not be the best algorithm.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-normal-squared`

---

### 215. Remember which geometric convention you are using.

**AM 207 · Discrete waiting times · TINY PROBLEM**

An event succeeds independently each generation with probability p. T counts generations including the successful one. What are P(T=t) and E[T]?

<details>
<summary>Reveal explanation</summary>

For t = 1,2,…, P(T=t) = (1−p)ᵗ⁻¹p and E[T] = 1/p. The t−1 failures happen before the success.

If instead T counts failures before success, its support starts at zero and its mean is (1−p)/p.

**Remember:** Define the support before using the formula.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric`

---

### 216. 95% each does not mean 95% all at once.

**STAT 244 · Simultaneous inference · SPOT THE MISTAKE**

Why can many pointwise 95% confidence intervals fail to provide 95% simultaneous coverage?

<details>
<summary>Reveal explanation</summary>

Each interval controls its own marginal coverage. The event that all intervals cover is a different event, typically with lower probability.

Scheffé’s approach uses a confidence ellipsoid to produce wider intervals that jointly cover all linear combinations under the normal model. Pointwise and simultaneous procedures answer different coverage questions.

**Remember:** State which collection of claims is covered.

</details>

Sources: [Inference notes · pp. 11–12](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-simultaneous`

---

### 217. An orthogonal change leaves the residual length unchanged.

**AM 205 · Least-squares algorithms · DERIVATION**

For full-column-rank X with reduced QR factorization X=QR, how do you solve minβ ‖y−Xβ‖²?

<details>
<summary>Reveal explanation</summary>

Split y into QQᵀy and (I−QQᵀ)y. Then ‖y−QRβ‖²=‖Qᵀy−Rβ‖²+‖(I−QQᵀ)y‖². The second term is independent of β. Solve the triangular system Rβ=Qᵀy.

**Remember:** Rotate the least-squares problem into a triangular solve.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-qr-reduction`

---

### 218. Surviving five failures is a tail event.

**AM 207 · Discrete waiting times · TINY PROBLEM**

T counts trials through the first success with probability p=0.2 each trial. Find P(T>5) and P(T=3).

<details>
<summary>Reveal explanation</summary>

P(T>5)=0.8⁵=0.32768. P(T=3)=0.8²·0.2=0.128. The first event asks for five failures; the second asks for two failures followed by success.

**Remember:** A tail probability and a point probability use different events.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-geometric-number`

---

### 219. Scheffé protects a whole family of linear combinations.

**STAT 244 · Simultaneous inference · READ THE FORMULA**

In the full-rank Gaussian model, what multiplier replaces the pointwise t critical value for simultaneous Scheffé intervals over all linear combinations of β?

<details>
<summary>Reveal explanation</summary>

Use √[p F₁₋α;p,n−p] in aᵀβ̂ ± s√[pF]√[aᵀ(XᵀX)⁻¹a]. The larger family of protected statements costs wider intervals. For a lower-dimensional prespecified family, the appropriate dimension can differ.

**Remember:** The protection family determines the multiplier.

</details>

Sources: [Inference notes · pp. 11–12](../courses/stat244/lecnotes/notes-lsinf.pdf#page=12)

Card ID: `stat244-scheffe-factor`

---

### 220. A pseudoinverse chooses among equivalent fits.

**AM 205 · Least-squares algorithms · THINK IT THROUGH**

When X is rank deficient, what extra criterion selects the Moore–Penrose least-squares solution X⁺y?

<details>
<summary>Reveal explanation</summary>

It has minimum Euclidean coefficient norm among all least-squares solutions. Other solutions add vectors in N(X), leaving fitted values unchanged but increasing norm relative to the minimum-norm solution. Numerical pseudoinverses also need a tolerance for deciding which singular values count as zero.

**Remember:** Minimum residual and minimum coefficient norm are separate criteria.

</details>

Sources: [Heath · §3.3–3.5 · supporting least-squares reading](../courses/am205/Scientific%20Computing%20An%20Introductory%20Survey.pdf#page=134)

Card ID: `am205-svd-minimum-norm`

---

### 221. One sibling among the other offspring.

**AM 207 · Population sampling · THINK IT THROUGH**

In the homework reproduction scheme, each of N parents has exactly two offspring. Two survivors are sampled uniformly without replacement. What is their probability of sharing a parent one generation back?

<details>
<summary>Reveal explanation</summary>

Given one sampled offspring, exactly one of the remaining 2N−1 offspring is its sibling. The probability is 1/(2N−1).

For large N it is approximately 1/(2N). The exact answer depends on the stated reproduction scheme; do not automatically substitute a different population model’s formula.

**Remember:** Model details determine the transition probability.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-coalescent`

---

### 222. Bigger space. Smaller orthogonal complement.

**STAT 244 · Subspace proofs · BUILD THE PROOF**

If A ⊆ B are subspaces, why is B⊥ ⊆ A⊥?

<details>
<summary>Reveal explanation</summary>

A vector perpendicular to every vector of B is automatically perpendicular to every vector of its subset A. So it belongs to A⊥.

In finite dimensions, taking complements twice returns the original subspace. This is useful for proving (W₁∩W₂)⊥ = W₁⊥ + W₂⊥.

**Remember:** Orthogonal complements reverse inclusion.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-orthocomplement`

---

### 223. Check the exact finite-N probability before taking a limit.

**AM 207 · Population sampling · TINY PROBLEM**

Under the homework’s two-offspring-per-parent scheme with N=3 parents, what is the one-generation probability that two distinct sampled offspring share a parent?

<details>
<summary>Reveal explanation</summary>

There are 6 offspring. Given the first, exactly 1 of the other 5 is its sibling, so the probability is 1/5. The approximation 1/(2N)=1/6 is not exact at this small N.

**Remember:** Asymptotic approximations need a scale check.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-finite-population-check`

---

### 224. A sum of perpendicular pieces annihilates an intersection.

**STAT 244 · Subspace proofs · BUILD THE PROOF**

If v=v₁+v₂ with v₁∈W₁⊥ and v₂∈W₂⊥, why is v∈(W₁∩W₂)⊥?

<details>
<summary>Reveal explanation</summary>

For every w in the intersection, w belongs to both spaces. Thus vᵀw=v₁ᵀw+v₂ᵀw=0+0=0. This proves one inclusion in (W₁∩W₂)⊥=W₁⊥+W₂⊥; the reverse needs its own argument.

**Remember:** A set equality requires both inclusions.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-intersection-complement`

---

### 225. A waiting-time limit needs the right clock.

**AM 207 · Continuous limits · SPOT THE MISTAKE**

Let T be geometric with success probability about 1/(2N). As N grows, why examine T/(2N) instead of T itself?

<details>
<summary>Reveal explanation</summary>

The mean waiting time grows like 2N. For t ≥ 0, P(T/(2N) > t) is approximately (1−1/(2N))^(2Nt), which tends to e⁻ᵗ. Thus the scaled waiting time approaches Exp(1).

At a fixed unscaled time, the success probability tends to zero; rescaling reveals a nondegenerate limit.

**Remember:** Scale time with the growing mean.

</details>

Sources: [HW1 · Q1(c)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-scaling-limit`

---

### 226. The perpendicular remainder must have zero length.

**STAT 244 · Subspace proofs · BUILD THE PROOF**

In finite-dimensional Euclidean space, prove that (A⊥)⊥⊆A for a subspace A.

<details>
<summary>Reveal explanation</summary>

Decompose u∈(A⊥)⊥ as u=a+b with a∈A and b∈A⊥. Since u is perpendicular to b, 0=uᵀb=aᵀb+bᵀb=‖b‖². Therefore b=0 and u=a∈A. The other inclusion follows directly from orthogonality.

**Remember:** Use the orthogonal decomposition to prove membership.

</details>

Sources: [HW1 · Q7](../courses/stat244/homeworks/ps1/hw1.pdf#page=2)

Card ID: `stat244-double-complement`

---

### 227. Two branches, twice the rate.

**AM 207 · Conditional distributions · TINY PROBLEM**

Two independent lineages each accumulate mutations at rate ν for a fixed time t. What is the distribution of their total mutation count? What if t is random?

<details>
<summary>Reveal explanation</summary>

Conditional on t, the independent Poisson counts add to Poisson(2νt). If t is random, the unconditional count is a mixture over t, not generally Poisson with mean 2νE[t].

The law of total expectation still gives E[count] = 2νE[t].

**Remember:** Conditioning and averaging distributions are different steps.

</details>

Sources: [HW1 · Q1(d–e)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-two-lineages`

---

### 228. The transpose belongs on the other side.

**STAT 244 · Random vectors · TINY PROBLEM**

If Y has mean μ and covariance Σ, what are the mean and covariance of AY+b? Does this require Y to be Gaussian?

<details>
<summary>Reveal explanation</summary>

Mean: Aμ+b. Covariance: AΣAᵀ. These hold for any random vector with finite second moments.

If Y is Gaussian, the transformed vector is also Gaussian; that is an additional distributional conclusion, not a prerequisite for the moment formulas.

**Remember:** Linear transformations act on both sides of covariance.

</details>

Sources: [Inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-cov-transform`

---

### 229. Random exposure adds extra count variation.

**AM 207 · Conditional distributions · DERIVATION**

If K|T∼Poisson(2νT), use total variance to express Var(K), assuming the moments exist.

<details>
<summary>Reveal explanation</summary>

Var(K)=E[Var(K|T)]+Var(E[K|T])=2νE[T]+4ν²Var(T). Random exposure time contributes the second term. Unless T is constant, the marginal variance can exceed the mean, unlike an ordinary Poisson count.

**Remember:** Mixing a rate or exposure can create overdispersion.

</details>

Sources: [HW1 · Q1(d–e)](../courses/am207/homeworks/ps1/hw01.pdf#page=1)

Card ID: `am207-mixture-variance`

---

### 230. Zero covariance is not universal independence.

**STAT 244 · Random vectors · SPOT THE MISTAKE**

Let X be standard normal and Y=X². Are X and Y independent just because Cov(X,Y)=0?

<details>
<summary>Reveal explanation</summary>

No. Symmetry gives E[X³]=0 and thus zero covariance, but Y is determined by X. Zero cross-covariance implies independence for jointly Gaussian blocks; (X,X²) is not jointly Gaussian.

**Remember:** Check joint normality, not just marginal facts.

</details>

Sources: [Inference notes · p. 1](../courses/stat244/lecnotes/notes-lsinf.pdf#page=1)

Card ID: `stat244-gaussian-uncorrelated`

---

### 231. Invert one line segment at a time.

**AM 207 · Inverse-transform sampling · BUILD THE SAMPLER**

A CDF is linear between (xᵢ,Fᵢ) and (xᵢ₊₁,Fᵢ₊₁), with Fᵢ₊₁ > Fᵢ. Given uniform U in this CDF interval, how do you produce X?

<details>
<summary>Reveal explanation</summary>

X = xᵢ + (U−Fᵢ)(xᵢ₊₁−xᵢ)/(Fᵢ₊₁−Fᵢ). First locate the segment in CDF space, then interpolate in x. Flat segments have zero probability and should not cause division by zero.

The density on a segment is its CDF slope.

**Remember:** Find the probability interval, then invert.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-piecewise-cdf`

---

### 232. Small pairwise correlations do not rule out a dependency.

**STAT 244 · Multicollinearity · SPOT THE MISTAKE**

Why can pairwise predictor correlations miss multicollinearity?

<details>
<summary>Reveal explanation</summary>

A predictor can be nearly a linear combination of several others without being almost perfectly correlated with any one of them. Examine the design as a whole, using appropriate scaling, singular values, or regressions of individual predictors on the remaining set.

Near-collinearity inflates uncertainty in certain coefficient directions even when fitted values are relatively stable.

**Remember:** Dependencies can involve more than two columns.

</details>

Sources: [Inference notes · pp. 14–15](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-collinearity`

---

### 233. Interpolate in probability coordinates.

**AM 207 · Inverse-transform sampling · TINY PROBLEM**

A linear CDF segment joins (x,F)=(2,0.3) and (5,0.9). For U=0.5, find the inverse sample.

<details>
<summary>Reveal explanation</summary>

X=2+[(0.5−0.3)/(0.9−0.3)](5−2)=2+(1/3)·3=3. The fraction is measured along the CDF range, then applied to the x interval.

**Remember:** Probability fraction maps to position fraction.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-inverse-interpolation-number`

---

### 234. Two uncertain slopes can still make a stable prediction.

**STAT 244 · Multicollinearity · THINK IT THROUGH**

Why can two nearly duplicate predictors give unstable individual coefficients but fairly stable fitted values on the observed data?

<details>
<summary>Reveal explanation</summary>

Changing one coefficient upward and the other downward can nearly cancel in Xβ because the columns are close. The weakly determined difference direction may have high coefficient variance, while the well-determined sum direction governs most observed predictions. Extrapolation away from the observed relationship can expose the uncertainty.

**Remember:** Ask which coefficient combination the data actually constrain.

</details>

Sources: [Inference notes · pp. 14–15](../courses/stat244/lecnotes/notes-lsinf.pdf#page=14)

Card ID: `stat244-stable-sum-unstable-parts`

---

### 235. A flat CDF interval contains no probability mass.

**AM 207 · Inverse-transform sampling · SPOT THE MISTAKE**

A CDF is constant on x∈[2,4]. Should an inverse sampler choose points uniformly throughout [2,4] whenever it encounters that CDF value?

<details>
<summary>Reveal explanation</summary>

No. A flat segment has zero probability mass, so a continuous uniform U hits that single CDF value with probability zero. A robust generalized inverse handles the boundary convention without dividing by a zero CDF increment.

**Remember:** Flat in the CDF means absent mass, not uniform density.

</details>

Sources: [HW1 · Q3](../courses/am207/homeworks/ps1/hw01.pdf#page=3)

Card ID: `am207-cdf-flat-segment`

---

### 236. A predictor is almost predicted by the other predictors.

**STAT 244 · Multicollinearity · TINY PROBLEM**

Regressing predictor xⱼ on the other predictors gives Rⱼ²=0.95. What is its VIF, and what does it describe?

<details>
<summary>Reveal explanation</summary>

VIFⱼ = 1/(1−Rⱼ²) = 20. In the standard regression setting, it quantifies coefficient-variance inflation associated with linear dependence on the other predictors.

A large VIF is a diagnostic, not an automatic command to delete a substantively important variable.

**Remember:** Explain the redundancy before changing the model.

</details>

Sources: [Inference notes · pp. 15–18](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif`

---

### 237. A radius and an angle make two Gaussians.

**AM 207 · Normal sampling · BUILD THE DERIVATION**

For independent uniform U₁,U₂ in (0,1), define R = √(−2 log U₁), Θ = 2πU₂. Why do R cos Θ and R sin Θ become independent standard normals?

<details>
<summary>Reveal explanation</summary>

R has density r exp(−r²/2) for r ≥ 0, while Θ is independent uniform on [0,2π). The polar-to-Cartesian inverse Jacobian contributes 1/r. Their joint density becomes exp(−(x²+y²)/2)/(2π), which factors into two standard normal densities.

**Remember:** The Jacobian cancels the radial factor.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-box-muller`

---

### 238. Variance inflation and standard-error inflation differ.

**STAT 244 · Multicollinearity · TINY PROBLEM**

A predictor has VIF=9. Holding the comparison’s noise and predictor sum of squares fixed, by what factor is its standard error inflated?

<details>
<summary>Reveal explanation</summary>

By √9=3, because VIF multiplies the coefficient variance. Confusing variance with standard deviation would overstate the standard-error factor as 9.

**Remember:** Square roots convert variance factors to error-bar factors.

</details>

Sources: [Inference notes · pp. 15–18](../courses/stat244/lecnotes/notes-lsinf.pdf#page=15)

Card ID: `stat244-vif-standard-error`

---

### 239. Derive the radial distribution before the Cartesian one.

**AM 207 · Normal sampling · DERIVATION**

For R=√(−2 log U), U uniform on (0,1), compute P(R≤r) for r≥0.

<details>
<summary>Reveal explanation</summary>

R≤r is equivalent to −2log U≤r², hence U≥exp(−r²/2). Therefore F_R(r)=1−exp(−r²/2), and f_R(r)=r exp(−r²/2). For r<0 the CDF is zero. Be careful: solving for U reverses the inequality.

**Remember:** Track the monotonicity of each transformation.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-cdf`

---

### 240. Read the exponent in the generalized VIF output.

**STAT 244 · Multicollinearity · READ THE OUTPUT**

Software prints GVIF^(1/(2·df))=2 for a factor. What is GVIF^(1/df), the corresponding variance-inflation scale used in your notes?

<details>
<summary>Reveal explanation</summary>

Square the displayed value: 4. The displayed root is on a standard-error-like scale, while squaring returns the variance-inflation scale. Do not compare differently exponentiated columns with the same numerical cutoff.

**Remember:** A diagnostic threshold must match the reported scale.

</details>

Sources: [Inference notes · pp. 16–17](../courses/stat244/lecnotes/notes-lsinf.pdf#page=17)

Card ID: `stat244-gvif-scale`

---

### 241. The square of the Gaussian radius is exponential up to scale.

**AM 207 · Normal sampling · CONNECT THE DOTS**

In Box–Muller, what is the distribution of R²/2?

<details>
<summary>Reveal explanation</summary>

R²/2=−log U, so it has an Exp(1) distribution. Equivalently, R² has χ²₂ distribution because it equals the sum of squares of two independent standard normals. This links inverse transforms, polar geometry, and chi-squared laws.

**Remember:** One construction can reveal several distribution identities.

</details>

Sources: [HW1 · Q4(a–b)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-radial-square-exponential`

---

### 242. Keep only what the earlier columns cannot explain.

**STAT 244 · Orthogonalization · BUILD THE ALGORITHM**

How does Gram–Schmidt construct the next orthogonal direction from xₖ?

<details>
<summary>Reveal explanation</summary>

Subtract its projection onto the span of earlier columns: ũₖ=(I−Hₖ₋₁)xₖ. Normalize if an orthonormal basis is desired. A zero residual means the new column adds no direction.

The ordered partial spans are preserved, but the particular basis depends on the input ordering. Numerically stable variants matter in computation.

**Remember:** A new basis vector is a residual.

</details>

Sources: [Inference notes · pp. 20–23](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt`

---

### 243. The square-to-disk rejection rate is geometric.

**AM 207 · Rejection geometry · TINY PROBLEM**

Draw a point uniformly from [−1,1]² and accept it when 0 < x²+y² < 1. What fraction is rejected?

<details>
<summary>Reveal explanation</summary>

The square area is 4 and disk area is π, so acceptance probability is π/4 and rejection probability is 1−π/4 ≈ 0.2146. Removing the origin or boundary does not change the ideal continuous probability.

In the polar normal sampler, excluding zero also prevents a division by zero and log(0).

**Remember:** Area ratios become acceptance probabilities.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-marsaglia`

---

### 244. Remove the first vector’s component.

**STAT 244 · Orthogonalization · WORKED EXAMPLE**

Take x₁=(1,1)ᵀ and x₂=(1,0)ᵀ. Compute x₂’s residual after projection onto x₁.

<details>
<summary>Reveal explanation</summary>

The projection coefficient is (x₁ᵀx₂)/(x₁ᵀx₁)=1/2. The residual is (1,0)−(1/2)(1,1)=(1/2,−1/2). Its dot product with x₁ is zero. Normalize it to obtain (1,−1)/√2.

**Remember:** Subtract the projection before normalizing.

</details>

Sources: [Inference notes · pp. 20–23](../courses/stat244/lecnotes/notes-lsinf.pdf#page=20)

Card ID: `stat244-gram-schmidt-number`

---

### 245. The accepted disk point can replace an angle calculation.

**AM 207 · Rejection geometry · BUILD THE SAMPLER**

With (V₁,V₂) uniform in the unit disk and S=V₁²+V₂²>0, what transformation gives a standard normal pair?

<details>
<summary>Reveal explanation</summary>

Set (X,Y)=√[−2log S/S]·(V₁,V₂). Under uniform disk sampling, S is uniform on (0,1) and independent of the angle. The transformed radius becomes √(−2log S), the same radius law used in Box–Muller.

**Remember:** Uniform squared radius supplies the inverse-transform input.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-polar-transform`

---

### 246. Changing coordinates does not create information.

**STAT 244 · Reparameterization · SPOT THE MISTAKE**

You orthogonalize all predictors and obtain uncorrelated transformed coefficient estimates. Did you eliminate uncertainty in the original coefficients?

<details>
<summary>Reveal explanation</summary>

No. If the transformation is invertible and all directions are retained, it is the same model in a new basis. Transforming coefficients and covariance back recovers the original OLS uncertainty.

Reducing uncertainty requires new information or a changed estimator/model, such as regularization or dropping directions—with corresponding tradeoffs.

**Remember:** An easier coordinate system is not new data.

</details>

Sources: [Inference notes · pp. 18–20](../courses/stat244/lecnotes/notes-lsinf.pdf#page=19)

Card ID: `stat244-orthogonalization-limit`

---

### 247. How many square proposals per accepted disk point?

**AM 207 · Rejection geometry · TINY PROBLEM**

If independent proposals are accepted with probability π/4, what is the expected number of proposals for one accepted point?

<details>
<summary>Reveal explanation</summary>

The proposal count is geometric with mean 1/(π/4)=4/π≈1.273. This counts proposals, not necessarily runtime: vectorization, random-number generation, and function costs also matter when comparing normal samplers.

**Remember:** Acceptance probability predicts work only in proposal units.

</details>

Sources: [HW1 · Q4(d)](../courses/am207/homeworks/ps1/hw01.pdf#page=4)

Card ID: `am207-rejection-efficiency`

---

### 248. Large predictor variance need not mean useful signal.

**STAT 244 · Principal components regression · SPOT THE MISTAKE**

PCR keeps the leading principal components of X. Why can it discard a direction that matters for predicting y?

<details>
<summary>Reveal explanation</summary>

PCA chooses directions using variation in X alone. A low-variance predictor direction can still be strongly associated with y. Dropping it may lose signal.

Keeping all components recovers OLS when X has full column rank; keeping fewer changes the model and generally introduces bias. Select component count using an appropriate evaluation design.

**Remember:** Predictor variance is not response relevance.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr`

---

### 249. To get there in two steps, sum over the middle.

**AM 207 · Markov transitions · QUICK RECALL**

For a time-homogeneous discrete Markov chain with row-stochastic transition matrix P, what is the probability of going from i to k in two steps?

<details>
<summary>Reveal explanation</summary>

(P²)ᵢₖ = Σⱼ PᵢⱼPⱼₖ. Multiply the probabilities along each possible two-step path and sum over intermediate states.

The continuous-state counterpart integrates over the intermediate state. This is the Chapman–Kolmogorov composition rule.

**Remember:** Compose paths by summing over intermediate states.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-ck`

---

### 250. Keeping all principal components is only a rotation.

**STAT 244 · Principal components regression · COMPARE METHODS**

For a full-rank centered predictor matrix, why can PCR with all p components reproduce OLS while PCR with k<p components cannot generally do so?

<details>
<summary>Reveal explanation</summary>

The full orthogonal component matrix is an invertible change of coordinates preserving C(X). Keeping only k components restricts the fitted-value space to C(XQ₁:ₖ). That removes directions and can reduce variance at the price of bias.

**Remember:** Truncation changes the model; rotation alone does not.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pcr-full-versus-truncated`

---

### 251. Choose a row-vector or column-vector convention once.

**AM 207 · Markov transitions · READ THE EQUATION**

Rows of P index the current state and columns index the next state. How do you propagate a row distribution p? How about a column distribution?

<details>
<summary>Reveal explanation</summary>

For a row distribution, p_next=pP. For a column distribution, p_next=Pᵀp. Both express the same sum over incoming states. Mixing the conventions can produce plausible-looking but incorrect equations.

**Remember:** Transition orientation must match distribution orientation.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-transition-matrix-orientation`

---

### 252. Unsupervised does not mean safe outside validation.

**STAT 244 · Principal components regression · SPOT THE MISTAKE**

Why should PCA for a cross-validated PCR model be fitted inside each training fold even though it does not use y?

<details>
<summary>Reveal explanation</summary>

The validation predictors affect estimated means, scales, and component directions if PCA is fitted on the entire dataset. That lets held-out data shape the procedure being evaluated. Fit all learned transformations inside the fold to reproduce genuinely unseen-data use.

**Remember:** Preprocessing can leak information without reading labels.

</details>

Sources: [Inference notes · pp. 23–24](../courses/stat244/lecnotes/notes-lsinf.pdf#page=23)

Card ID: `stat244-pca-fold-boundary`

---

### 253. Count both routes into the destination.

**AM 207 · Markov transitions · TINY PROBLEM**

With P=[[0.8,0.2],[0.3,0.7]], compute the two-step probability A→B.

<details>
<summary>Reveal explanation</summary>

There are two paths: A→A→B contributes 0.8·0.2=0.16, and A→B→B contributes 0.2·0.7=0.14. The total is 0.30. This is entry (A,B) of P².

**Remember:** Sum products over intermediate states.

</details>

Sources: [Lecture 04 · pp. 43–45](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=43)

Card ID: `am207-two-step-number`

---

### 254. PCR and PLS look for different directions.

**STAT 244 · Latent predictor methods · COMPARE METHODS**

What information does PLS use when constructing components that ordinary PCA for PCR does not?

<details>
<summary>Reveal explanation</summary>

PLS uses association with the response as well as predictor structure. PCA for PCR finds predictor-variance directions without considering y.

Neither method universally wins. When evaluating either, fit centering, scaling, and component construction inside each training fold, then compare held-out predictions.

**Remember:** Supervised components still need honest validation.

</details>

Sources: [Inference notes · pp. 24–25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls`

---

### 255. Probability has an incoming and an outgoing budget.

**AM 207 · Master equations · BUILD THE EQUATION**

For a birth–death chain with upward rate w₊(n) and downward rate w₋(n), write the structure of dpₙ/dt.

<details>
<summary>Reveal explanation</summary>

dpₙ/dt = w₊(n−1)pₙ₋₁ + w₋(n+1)pₙ₊₁ − [w₊(n)+w₋(n)]pₙ.

Incoming rates are evaluated at the source states n−1 and n+1, not at n. At boundaries, omit impossible transitions or define their rates to be zero.

**Remember:** Incoming flux minus outgoing flux.

</details>

Sources: [Lecture 05 · p. 6](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-master`

---

### 256. PLS components already use the response.

**STAT 244 · Latent predictor methods · SPOT THE MISTAKE**

What is especially problematic about fitting PLS components on all observations before splitting into training and validation sets?

<details>
<summary>Reveal explanation</summary>

PLS uses the response to construct its directions. Fitting it before the split allows validation outcomes to influence the feature representation. The later model evaluation is therefore contaminated even if the final regression fit uses only training rows.

**Remember:** Supervised feature construction belongs inside training.

</details>

Sources: [Inference notes · pp. 24–25](../courses/stat244/lecnotes/notes-lsinf.pdf#page=24)

Card ID: `stat244-pls-supervised-boundary`

---

### 257. Every outgoing flux enters somewhere else.

**AM 207 · Master equations · BUILD THE PROOF**

Why does summing a finite-state master equation over all states give total derivative zero, assuming all transitions remain in the state space?

<details>
<summary>Reveal explanation</summary>

Each term w(i,j)pⱼ enters state i and leaves state j. Summing all equations cancels these paired contributions. This preserves Σpᵢ=1 from a normalized initial condition. Missing boundary terms or incorrect rate indices can break conservation.

**Remember:** Conservation is a useful equation check.

</details>

Sources: [Lecture 05 · p. 6](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=6)

Card ID: `am207-probability-conservation`

---

### 258. A pure-death process cannot leave zero.

**AM 207 · Master equations · BUILD THE EQUATION**

For n particles independently decaying at rate γ each, write dpₙ/dt and the n=0 equation.

<details>
<summary>Reveal explanation</summary>

dpₙ/dt=γ(n+1)pₙ₊₁−γnpₙ. At zero, dp₀/dt=γp₁: there is inflow from one particle and no outflow. A loss term involving a negative particle count would violate the model.

**Remember:** Boundary states need explicit impossible-transition rates.

</details>

Sources: [Lecture 04 · radioactive decay, pp. 61–63](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=62)

Card ID: `am207-death-boundary`

---

### 259. A generator turns jumps into change in an average.

**AM 207 · Markov generators · CONNECT THE DOTS**

For jumps x → x + νⱼ at rates aⱼ(x), what does the generator do to a test function f?

<details>
<summary>Reveal explanation</summary>

Lf(x) = Σⱼ aⱼ(x)[f(x+νⱼ) − f(x)]. Subject to the usual integrability conditions, dE[f(X)]/dt = E[Lf(X)].

Choosing f(x) = x yields mean dynamics; choosing products or squares produces moment equations. This avoids re-deriving every moment from the full probability equation.

**Remember:** Rate × change, summed over jumps.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator`

---

### 260. A constant observable cannot change.

**AM 207 · Markov generators · TINY PROBLEM**

For Lf(x)=Σⱼaⱼ(x)[f(x+νⱼ)−f(x)], what is L1? Why is this a useful check?

<details>
<summary>Reveal explanation</summary>

L1=0 because every difference is 1−1=0. Consequently dE[1]/dt=0, reflecting conservation of total probability. A proposed generator that changes a constant has a missing or incorrect loss term.

**Remember:** Generators annihilate constant functions.

</details>

Sources: [Lecture 04 · pp. 49–55](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=49)

Card ID: `am207-generator-constant`

---

### 261. Choose f(n)=n to get the mean equation.

**AM 207 · Markov generators · DERIVATION**

For pure death with rate γn and jump −1, use the generator to obtain the mean dynamics.

<details>
<summary>Reveal explanation</summary>

Lf(n)=γn[(n−1)−n]=−γn. Thus m′=E[Lf]=−γm, giving m(t)=m(0)e⁻ᵞᵗ. This closes exactly because the drift is linear. Individual trajectories remain discrete and random.

**Remember:** The mean equation can be exact without deterministic paths.

</details>

Sources: [Lecture 04 · radioactive decay mean](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=63)

Card ID: `am207-death-mean`

---

### 262. Which color must leave each urn?

**AM 207 · Transition rates · BUILD THE MODEL**

Each urn has N balls; B total are blue; n blue are in the left urn. Swaps occur at rate λ. What factors make the upward rate w₊(n)?

<details>
<summary>Reveal explanation</summary>

To increase n, draw a green ball from the left, probability (N−n)/N, and a blue ball from the right, probability (B−n)/N. Thus w₊(n) = λ(N−n)(B−n)/N².

Similarly, w₋(n) = λn(N−B+n)/N². Swaps of equal colors do not change n.

**Remember:** Count the events that actually change the state.

</details>

Sources: [HW2 · Q3(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-rates`

---

### 263. Check rates at the extreme states.

**AM 207 · Transition rates · TINY PROBLEM**

For the homework urn model with 0≤n≤B≤N, evaluate w₋(0) and w₊(B). Why must these vanish?

<details>
<summary>Reveal explanation</summary>

w₋(0)=0 because the left urn has no blue ball to lose. w₊(B)=0 because the right urn has no blue ball to send. Nonzero outward rates would permit impossible negative or excessive blue counts.

**Remember:** Physical constraints should appear in the rates.

</details>

Sources: [HW2 · Q3(a)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-boundaries`

---

### 264. Quadratic rates can leave a linear drift.

**AM 207 · Moment equations · BUILD THE DERIVATION**

Using the urn rates, w₊(n)−w₋(n) = λ(B−2n)/N. Why does the equation for the mean close exactly?

<details>
<summary>Reveal explanation</summary>

The drift is linear, so its expectation depends only on m = E[n]: m′ = (λ/N)(B−2m). Therefore m(t) = B/2 + (m(0)−B/2)exp(−2λt/N).

The relaxation timescale is N/(2λ). The limiting mean is approached asymptotically, not reached exactly at a finite time in general.

**Remember:** Closure depends on the drift, not each rate alone.

</details>

Sources: [HW2 · Q3(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-mean`

---

### 265. A relaxation time removes one factor of e.

**AM 207 · Moment equations · TINY PROBLEM**

For N=50, λ=1 per second, B=50, and n(0)=50, what is the exact mean at t=25 seconds?

<details>
<summary>Reveal explanation</summary>

m(t)=25+25exp(−2t/50). At t=25, m=25+25/e≈34.197. The relaxation time N/(2λ)=25 seconds shrinks the deviation from equilibrium by 1/e, not all the way to zero.

**Remember:** A timescale is not a finite equilibration deadline.

</details>

Sources: [HW2 · Q3(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-timescale-number`

---

### 266. At equilibrium, the left urn is a sample without replacement.

**AM 207 · Stationary distributions · EXPLAIN WHY**

Why is the stationary blue-ball count hypergeometric rather than binomial?

<details>
<summary>Reveal explanation</summary>

The left urn contains N of the total 2N balls, with exactly B blue in the whole system. The count has probability C(B,n)C(2N−B,N−n)/C(2N,N). Fixed total counts couple the draws; they are not independent Bernoulli trials.

Checking πₙw₊(n) = πₙ₊₁w₋(n+1) verifies detailed balance.

**Remember:** A conserved finite population suggests hypergeometric counts.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-urn-stationary`

---

### 267. Count a small urn system by hand.

**AM 207 · Stationary distributions · TINY PROBLEM**

Two urns each contain N=2 balls, with B=2 blue in total. Under uniform equilibrium allocation, find P(n=0),P(n=1),P(n=2) for the left urn.

<details>
<summary>Reveal explanation</summary>

There are C(4,2)=6 equally likely two-ball subsets. Counts are C(2,n)C(2,2−n): 1,4,1. Thus probabilities are (1/6,2/3,1/6), with mean 1. This gives a small exact target for testing a simulation.

**Remember:** Small state spaces make good validation cases.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-hypergeometric-small`

---

### 268. Detailed balance gives a stationary recursion.

**AM 207 · Stationary distributions · BUILD THE DERIVATION**

For neighboring states of a birth–death chain, how can you build stationary probabilities recursively from the rates?

<details>
<summary>Reveal explanation</summary>

Use πₙ₊₁/πₙ=w₊(n)/w₋(n+1) wherever the denominator is positive. Starting from an arbitrary scale π₀, multiply these ratios, then normalize. Check boundaries and whether the resulting sum is finite.

**Remember:** Compute relative weights first, normalization last.

</details>

Sources: [HW2 · Q3(d)](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-birth-death-recursion`

---

### 269. An event histogram can overweight busy states.

**AM 207 · Simulation diagnostics · SPOT THE MISTAKE**

You simulate a continuous-time chain and count its state once per jump. Does that histogram necessarily estimate the fraction of time spent in each state?

<details>
<summary>Reveal explanation</summary>

No. States with faster exit rates generate more events per unit time. Estimate time occupancy by weighting each visited state by its holding time, or sample the trajectory at equally spaced times.

An event-index histogram describes the embedded jump chain, which can have a different stationary distribution.

**Remember:** Weight by time when estimating time occupancy.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-time-histogram`

---

### 270. Two visits can occupy very different fractions of time.

**AM 207 · Simulation diagnostics · TINY PROBLEM**

A trajectory visits A for 9 seconds and B for 1 second. Compare its per-visit histogram with its time-occupancy histogram.

<details>
<summary>Reveal explanation</summary>

The per-visit histogram assigns 1/2 to each because there are two visits. Time occupancy assigns 0.9 to A and 0.1 to B. If the question concerns the stationary state at a randomly chosen time, the latter is the relevant estimate.

**Remember:** Match the histogram weights to the sampling question.

</details>

Sources: [HW2 · Q3(e) · simulation diagnostic](../courses/am207/homeworks/ps2/hw02.pdf#page=3)

Card ID: `am207-holding-time-number`

---

### 271. One reaction changes several counts at once.

**AM 207 · Reaction systems · BUILD THE MODEL**

For grass consumption G + R → 2R, what is the change vector in (G,R,F)? What is the change for R + F → 2F?

<details>
<summary>Reveal explanation</summary>

Grass consumption changes counts by (−1,+1,0). Predation changes them by (0,−1,+1). Multiply each change vector by its propensity to build the drift, then sum over reactions.

Rates describe how often an event occurs; change vectors describe what each event does.

**Remember:** Separate event frequency from event effect.

</details>

Sources: [HW2 · Q4](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-stoichiometry`

---

### 272. A death reaction contributes a negative drift.

**AM 207 · Reaction systems · BUILD THE EQUATION**

For rabbits born through G+R→2R at propensity βGR/N, dying at μR, and eaten at γRF/N, write the exact equation for dE[R]/dt.

<details>
<summary>Reveal explanation</summary>

dE[R]/dt=(β/N)E[GR]−μE[R]−(γ/N)E[RF]. The birth jump adds one rabbit and the two loss channels each remove one. Replacing product moments with products of means is an additional closure step.

**Remember:** Write the exact moment equation before approximating it.

</details>

Sources: [HW2 · Q4](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-reaction-drift`

---

### 273. From event counts to population densities.

**AM 207 · Mean-field dynamics · BUILD THE EQUATION**

Use g=G/N, r=R/N, f=F/N for the grass–rabbit–fox model. What are the mean-field density equations?

<details>
<summary>Reveal explanation</summary>

g′ = α(1−g) − βgr
r′ = βgr − μr − γrf
f′ = γrf − δf.

This deterministic closure neglects correlations in the stochastic counts. At a coexistence fixed point r* = δ/γ, g* = α/(α+βδ/γ), and f* = (βg*−μ)/γ must be positive.

**Remember:** Track gains and losses before solving fixed points.

</details>

Sources: [HW2 · Q4(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-meanfield`

---

### 274. A positive fixed point must satisfy positivity, not just zero derivatives.

**AM 207 · Mean-field dynamics · DERIVATION**

For the grass–rabbit–fox mean-field system, use f*>0 to derive r*, then state the condition for f*>0.

<details>
<summary>Reveal explanation</summary>

From f′=f(γr−δ), coexistence gives r*=δ/γ. Then g*=α/(α+βδ/γ) and f*=(βg*−μ)/γ. Coexistence requires positive parameters and β α/(α+βδ/γ)>μ. Algebraic fixed points outside nonnegative densities are not biologically admissible.

**Remember:** Solve equilibrium equations and check the state constraints.

</details>

Sources: [HW2 · Q4(b)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-coexistence-condition`

---

### 275. Half a fox cannot keep a population alive.

**AM 207 · Stochastic vs deterministic models · THINK IT THROUGH**

Why can an SSA realization go extinct when the mean-field ODE shows small positive densities?

<details>
<summary>Reveal explanation</summary>

SSA uses integer populations and discrete events. A last individual can disappear, after which an absorbing boundary may prevent recovery. A smooth ODE describes continuous densities and generally misses that event-level extinction mechanism.

Larger system size often reduces typical relative fluctuations, but rare events and boundary behavior still deserve separate analysis.

**Remember:** Small counts expose the discreteness.

</details>

Sources: [HW2 · Q4(c)](../courses/am207/homeworks/ps2/hw02.pdf#page=4)

Card ID: `am207-extinction`

---

### 276. The next reaction can be in any cell.

**AM 207 · Spatial stochastic systems · BUILD THE SIMULATION**

In a Delta–Notch grid, should you independently advance each cell by one full SSA event and call that one shared time step?

<details>
<summary>Reveal explanation</summary>

No. For a direct SSA of the coupled system, enumerate all allowed reaction channels across all cells, sum their propensities, sample one global waiting time, and choose one channel in proportion to its propensity. Then update any affected neighboring propensities.

Enforce the count bounds and the specified boundary cells; they are part of the model.

**Remember:** Coupled cells share one event clock.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-notch`

---

### 277. Boundary cells contribute to the specified neighborhood.

**AM 207 · Spatial stochastic systems · READ THE MODEL**

In the Delta–Notch model, what details must a correct computation of neighboring mean Delta respect?

<details>
<summary>Reveal explanation</summary>

Exclude the focal cell itself; use the specified hexagonal-neighbor offsets; and implement the stated fictitious boundary cells with Delta fixed at zero. Replacing the boundary by periodic wrapping or averaging only over existing interior neighbors defines a different model.

**Remember:** Neighborhood and boundary rules are part of the dynamics.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-neighbor-average`

---

### 278. Clip the event rate before an impossible jump, not the state afterward.

**AM 207 · Spatial stochastic systems · SPOT THE MISTAKE**

The model limits molecule counts to [0,Z]. Why is setting a production propensity to zero at Z preferable to letting the event occur and clipping the resulting state?

<details>
<summary>Reveal explanation</summary>

The specification makes that transition impossible. A zero propensity removes it from both the channel selection and total event rate. Sampling a forbidden event and clipping afterward can waste event time and alter the state process unless treated by a separately justified null-event method.

**Remember:** Forbidden channels should not silently change the clock.

</details>

Sources: [HW2 · Q5](../courses/am207/homeworks/ps2/hw02.pdf#page=5)

Card ID: `am207-bounded-propensities`

---

### 279. A bigger step can make a negative population.

**AM 207 · Accelerated simulation · SPOT THE MISTAKE**

Tau-leaping draws Poisson reaction counts over a time interval τ. What assumption makes this useful, and what can go wrong?

<details>
<summary>Reveal explanation</summary>

It approximates propensities as constant over the interval, using counts Kⱼ ∼ Poisson(aⱼτ). Large changes can violate that approximation, and unbounded Poisson draws may consume more molecules than exist.

Control the step or use a method with appropriate population constraints; merely accepting negative counts produces an invalid state.

**Remember:** Speed comes with an approximation to control.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau`

---

### 280. A propensity becomes an expected count over a step.

**AM 207 · Accelerated simulation · TINY PROBLEM**

For constant propensity a=12 per second and τ=0.1 seconds, what is the tau-leap reaction-count distribution and its mean?

<details>
<summary>Reveal explanation</summary>

K∼Poisson(aτ)=Poisson(1.2), with mean and variance 1.2. K need not be 0 or 1; that is how a leap can skip individual-event simulation. The approximation needs propensities to remain nearly constant over the interval.

**Remember:** Rate times duration sets the count parameter.

</details>

Sources: [Lecture 05 · pp. 38–43](../courses/am207/lecnotes/Lecture_05_Stochastic_Simulation_0923.pdf#page=39)

Card ID: `am207-tau-count-number`

---

### 281. An exponential rate is events divided by total waiting time.

**AM 207 · Inference · TINY PROBLEM**

Given N independent exponential waiting times tᵢ with rate ν, derive the maximum-likelihood estimate.

<details>
<summary>Reveal explanation</summary>

The log likelihood is N log ν − νΣtᵢ. Its derivative is N/ν − Σtᵢ, giving ν̂ = N/Σtᵢ = 1/mean(t), when total time is positive.

This identifies a point estimate; uncertainty in ν still needs to be quantified.

**Remember:** Use the likelihood of the observations themselves.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-likelihood`

---

### 282. Add waiting times before estimating a common rate.

**AM 207 · Inference · TINY PROBLEM**

You observe waiting times 0.2,0.3,0.5 seconds from independent Exp(ν) draws. What is the MLE of ν?

<details>
<summary>Reveal explanation</summary>

N=3 and the total waiting time is 1 second, so ν̂=3 per second. The estimate is reciprocal of the sample mean, not the average of the reciprocals of the individual times.

**Remember:** Estimate a common rate from total exposure.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-exp-mle-number`

---

### 283. Binning is an analysis choice, not part of the raw observations.

**AM 207 · Inference · SPOT THE MISTAKE**

Why can fitting an exponential curve to a histogram produce estimates that depend on the bin width?

<details>
<summary>Reveal explanation</summary>

The histogram changes when edges and widths change, so a loss between bar heights and a curve changes too. The likelihood of raw independent waiting times uses their actual values and avoids that arbitrary binning choice. Histograms remain useful for visualization and diagnostics.

**Remember:** Keep visualization choices separate from the observation model.

</details>

Sources: [Lecture 06 · p. 60](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=60)

Card ID: `am207-histogram-fit`

---

### 284. A flat prior is not flat in every coordinate.

**AM 207 · Bayesian inference · SPOT THE MISTAKE**

If θ has a uniform prior on (0,1), is the log-odds φ = log(θ/(1−θ)) also uniform?

<details>
<summary>Reveal explanation</summary>

No. Density transforms with a Jacobian: pφ(φ) = pθ(θ(φ)) |dθ/dφ| = θ(1−θ), which depends on φ.

“Uniform” specifies a coordinate-dependent choice, not an absence of all assumptions. Bayesian inference should state the parameterization and prior.

**Remember:** A prior is part of the model.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-prior`

---

### 285. A gamma prior is conjugate to an exponential rate.

**AM 207 · Bayesian inference · DERIVATION**

Use a Gamma(a,b) prior on ν in shape–rate form and N independent exponential times with total T. Derive the posterior.

<details>
<summary>Reveal explanation</summary>

The prior kernel is ν^(a−1)e^(−bν), and the likelihood kernel is ν^N e^(−Tν). Their product is Gamma(a+N,b+T). Its mean is (a+N)/(b+T). If software uses a scale, convert it to 1/(b+T).

**Remember:** State shape–rate or shape–scale explicitly.

</details>

Sources: [Lecture 06 · Bayesian exponential example, pp. 61–64](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=61)

Card ID: `am207-gamma-exponential`

---

### 286. An improper prior can yield a proper posterior—but check it.

**AM 207 · Bayesian inference · TINY PROBLEM**

With a flat prior proportional to 1 on ν>0 and N exponential observations with positive total T, what is the posterior kernel and normalized family?

<details>
<summary>Reveal explanation</summary>

The posterior kernel is ν^N e^(−Tν), giving Gamma(N+1,T) in shape–rate form. It is proper when T>0. The prior itself does not integrate to one, so it should not be described as a proper uniform distribution on the positive half-line.

**Remember:** Posterior propriety is a condition to verify.

</details>

Sources: [Lecture 06 · flat-prior exponential example](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=62)

Card ID: `am207-flat-rate-posterior`

---

### 287. A credible interval answers a conditional probability question.

**AM 207 · Bayesian inference · COMPARE INTERPRETATIONS**

What does a 95% Bayesian credible interval for θ state, and what does it depend on?

<details>
<summary>Reveal explanation</summary>

It contains 95% of the posterior probability under the chosen likelihood and prior, conditional on the observed data. Different interval definitions can select different sets with the same mass. Its interpretation depends on the modeling assumptions, not just on the observed counts.

**Remember:** Posterior uncertainty is conditional on a model.

</details>

Sources: [Lecture 06 · pp. 50–53 · transformation companion](../courses/am207/lecnotes/Lecture_06_Introduction_UQ_0928.pdf#page=50)

Card ID: `am207-credible-interval-meaning`

---

### 288. Small jumps can become diffusion.

**AM 207 · Random-walk limits · BUILD THE DERIVATION**

A symmetric walk jumps left or right by Δx, each at rate 1/(2τ). How does the master equation lead to a diffusion coefficient?

<details>
<summary>Reveal explanation</summary>

The incoming-minus-outgoing equation is ṗₙ=(pₙ₋₁−2pₙ+pₙ₊₁)/(2τ). Rewriting the second difference with denominator Δx² gives the continuum approximation ∂ₜp=D∂ₓₓp with D=Δx²/(2τ).

A nontrivial limit holds Δx²/τ fixed as both scales shrink.

**Remember:** Match the jump and time scales.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion`

---

### 289. Halving jump size requires quartering the waiting scale.

**AM 207 · Random-walk limits · TINY PROBLEM**

For D=Δx²/(2τ), how must τ change if Δx is halved while D stays fixed?

<details>
<summary>Reveal explanation</summary>

τ must be divided by 4. The numerator becomes Δx²/4, so the denominator must shrink by the same factor. Keeping τ fixed instead would reduce D by a factor of four.

**Remember:** Diffusive time scales like distance squared.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-scaling`

---

### 290. Random displacement grows like the square root of time.

**AM 207 · Random-walk limits · TINY PROBLEM**

For one-dimensional diffusion with coefficient D starting at zero, what are the mean squared displacement and root-mean-square displacement?

<details>
<summary>Reveal explanation</summary>

E[X(t)²]=2Dt and RMS displacement=√(2Dt). Multiplying time by four doubles the RMS displacement. This differs from ballistic motion, where distance grows linearly with time.

**Remember:** Diffusion spreads in square-root time.

</details>

Sources: [Lecture 04 · pp. 69–71](../courses/am207/lecnotes/Lecture_04_Master_Equation_0921.pdf#page=71)

Card ID: `am207-diffusion-msd`

---

### 291. The same rules can express different interpretations.

**AM 207 · Probability interpretations · COMPARE IDEAS**

Contrast a repeated-trials interpretation of probability with a Bayesian degree-of-belief interpretation.

<details>
<summary>Reveal explanation</summary>

A repeated-trials interpretation ties probability to long-run frequencies under a specified repeatable process. A Bayesian interpretation uses probability to quantify uncertainty conditional on available information, including uncertainty about unknown parameters.

Both use probability rules, but what is treated as uncertain and how an inference is interpreted can differ. A prior must state the information or assumptions it represents.

**Remember:** Distinguish the rules from their interpretation.

</details>

Sources: [Lecture 01 · pp. 19–23 and p. 45](../courses/am207/lecnotes/Lecture_01_Probabilities_Definition_Transform.pdf#page=23)

Card ID: `am207-probability-views`
