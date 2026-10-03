# AM 205 Quiz 1 coverage

Added October 3, 2026: 83 new cards; 14 existing cards reused with additional citations. All existing IDs and card text are preserved.

## Sources and review method

- `quiz1review.pdf`: all 6 pages, text extracted and diagrams/equations visually checked.
- `solns23.pdf`: both pages, text and visual review.
- `solns24.pdf`: both scanned pages read visually; text extraction was empty.
- `solns25.pdf`: both pages, text and visual review.

Scope includes every numbered question and related conceptual prompt. The repeated review 2.15 is covered once. Grade distributions and administrative material are excluded. Numerical companion examples are marked in their source locators. Cards are authored explanations, not official solution transcriptions.

## Interpretation details

- Binary64 statements use fixed precision and rounding; commutativity does not imply associativity. The interval through 2^55 has gaps of 4; the next gap is 8.
- Normal-equation conditioning assumes full column rank; equality is possible at condition number 1. Projection uses reduced Q spanning the column space.
- The 2023 digit-loss estimate is a sensitivity heuristic, not an exact diagnosis from observed error. A rank-100 ball image is a bounded ellipsoid inside a subspace, not the entire subspace.
- The 2024 infinity-norm picture uses square contact geometry. The 45-degree residual is not universal for all lines. Large condition number alone does not guarantee good low-rank compression.
- Dense LU and Householder QR shape comparisons use leading-order operation counts. Norm-product equality requires a compatible top singular direction, accounting for repeated singular values.
- The 2025 computed Gram-matrix symmetry assumes paired dot products follow the same evaluation order. Symmetric Householder reduction is a two-sided similarity step; it differs from ordinary QR.
- All claims about least-squares perturbations hold for fixed A; full column rank is stated for unique coefficient bounds.

## Question-to-card ledger

| Source and objective | Card IDs |
| --- | --- |
| quiz1review, p. 1 · Review · 1.7 | `am205-quiz1-exact-operands` |
| quiz1review, p. 1 · Review · 1.8 · nonuniform spacing | `am205-binade-boundary` |
| quiz1review, p. 1 · Review · 1.9 · associativity | `am205-associative` |
| quiz1review, p. 1 · Review · 1.9 · commutativity | `am205-quiz1-commutative-rounding` |
| quiz1review, p. 1 · Review · spacing companion | `am205-quiz1-gap-at-54` |
| quiz1review, p. 1 · Review · rounding companion | `am205-quiz1-round-at-54` |
| quiz1review, p. 1 · Review · 2.7 | `am205-quiz1-upper-product` |
| quiz1review, p. 1 · Review · 2.7 companion · authored example | `am205-quiz1-lower-upper-product` |
| quiz1review, p. 1 · Review · 2.8 | `am205-quiz1-symmetric-product` |
| quiz1review, p. 2 · Review · 2.14 | `am205-zero-pivot-nonsingular` |
| quiz1review, p. 2 · Review · 2.15 | `am205-quiz1-singular-lu` |
| quiz1review, p. 2 · Review · 2.17 | `am205-spd-sensitive` |
| quiz1review, p. 2 · Review · 2.21 companion | `am205-quiz1-vector-norm-order` |
| quiz1review, p. 2 · Review · 2.21 | `am205-quiz1-singular-norm` |
| quiz1review, p. 2 · Review · 2.23 and companions | `am205-quiz1-zero-norm` |
| quiz1review, p. 2 · Review · 2.28 | `am205-two-solutions` |
| quiz1review, p. 2 · Review · 2.28 · proof | `am205-quiz1-solution-line-proof` |
| quiz1review, p. 2 · Review · 2.32(a) | `am205-quiz1-row-permutation` |
| quiz1review, p. 2 · Review · 2.32(b) | `am205-quiz1-column-coordinates` |
| quiz1review, p. 2 · Review · 2.32(c) | `am205-quiz1-invertible-left` |
| quiz1review, p. 3 · Review · 2.33(a–b) | `am205-quiz1-residual-rescale` |
| quiz1review, p. 3 · Review · 2.33(c) | `am205-scaled-residual` |
| quiz1review, p. 3 · Review · 2.34(a–b) · authored example | `am205-quiz1-diagonal-row-scaling` |
| quiz1review, p. 3 · Review · 2.34(c) · authored example | `am205-quiz1-scaling-pivot` |
| quiz1review, p. 3 · Review · 2.39 | `am205-quiz1-three-pivots` |
| quiz1review, p. 3 · Review · 2.46 | `am205-quiz1-outer-association` |
| quiz1review, p. 4 · Review · 2.49(a) | `am205-quiz1-lp-solve` |
| quiz1review, p. 4 · Review · 2.49(b) | `am205-quiz1-pl-solve` |
| quiz1review, p. 4 · Review · 3.5 | `am205-quiz1-exact-fit` |
| quiz1review, p. 4 · Review · 3.6 · authored example | `am205-quiz1-exact-nonunique` |
| quiz1review, p. 4 · Review · 3.8 | `am205-quiz1-reflector-designed` |
| quiz1review, p. 4 · Review · 3.14 | `am205-quiz1-normal-equations` |
| quiz1review, p. 4 · Review · 3.14 · conditioning | `am205-normal-squared` |
| quiz1review, p. 4 · Review · 3.14 · equality case | `am205-quiz1-normal-condition-one` |
| quiz1review, p. 4 · Review · 3.19 | `am205-quiz1-orthogonal-dot` |
| quiz1review, p. 4 · Review · 3.20 | `am205-quiz1-orthogonality-not-transitive` |
| quiz1review, p. 5 · Review · 3.23 and companions | `am205-quiz1-orthogonal-norms` |
| quiz1review, p. 5 · Review · 3.23 · example | `am205-quiz1-orthogonal-example` |
| quiz1review, p. 5 · Review · 3.26 | `am205-orthogonal-map` |
| quiz1review, p. 5 · Review · 3.27 | `am205-quiz1-householder-unit` |
| quiz1review, p. 5 · Review · 3.27 · symmetry | `am205-quiz1-householder-symmetric` |
| quiz1review, p. 5 · Review · 3.27 · authored companion | `am205-quiz1-householder-geometric` |
| quiz1review, p. 5 · Review · 3.28 | `am205-quiz1-householder-alpha` |
| quiz1review, p. 5 · Review · 3.43 | `am205-quiz1-singular-condition` |
| quiz1review, p. 5 · Review · Householder QR | `am205-quiz1-reflector-count` |
| quiz1review, p. 6 · Review · QR and least squares | `am205-qr-reduction` |
| quiz1review, p. 6 · Review · SVD and least squares | `am205-quiz1-svd-solve` |
| quiz1review, p. 6 · Review · SVD minimum norm | `am205-svd-minimum-norm` |
| quiz1review, p. 6 · Review · QR and projection | `am205-quiz1-qr-projector` |
| solns23, p. 1 · 2023 · Q1 | `am205-quiz1-construct-span` |
| solns23, p. 1 · 2023 · Q2 | `am205-zero-pivot-nonsingular` |
| solns23, p. 1 · 2023 · Q3 | `am205-condition-scale` |
| solns23, p. 1 · 2023 · Q4 | `am205-quiz1-norms-four-five` |
| solns23, p. 1 · 2023 · Q5 | `am205-quiz1-svd-exists` |
| solns23, p. 1 · 2023 · Q6 | `am205-quiz1-orthogonal-determinant` |
| solns23, p. 1 · 2023 · Q7 | `am205-quiz1-product-commutes` |
| solns23, p. 1 · 2023 · Q8 | `am205-quiz1-diagonal-orthogonal` |
| solns23, p. 1 · 2023 · Q9 | `am205-quiz1-vector-norm-order` |
| solns23, p. 1 · 2023 · Q10 · rank-one step | `am205-quiz1-cross-formula` |
| solns23, p. 1 · 2023 · Q10 | `am205-quiz1-cross-nine` |
| solns23, p. 1 · 2023 · Q11 | `am205-spacing-at-100` |
| solns23, p. 1 · 2023 · Q12 | `am205-quiz1-six-digits` |
| solns23, p. 2 · 2023 · Q13 | `am205-quiz1-rank-storage` |
| solns23, p. 2 · 2023 · Q14 | `am205-quiz1-rank-matvec` |
| solns23, p. 2 · 2023 · Q15 | `am205-quiz1-rank-ball` |
| solns23, p. 2 · 2023 · Q16 | `am205-quiz1-same-fit` |
| solns23, p. 2 · 2023 · Q17 | `am205-quiz1-householder-proof` |
| solns23, p. 2 · 2023 · Q18 · normalize factors | `am205-quiz1-svd-normalize` |
| solns23, p. 2 · 2023 · Q18 · singular values | `am205-quiz1-svd-factor-example` |
| solns23, p. 2 · 2023 · Q18 · singular vectors | `am205-quiz1-svd-factor-vectors` |
| solns23, p. 2 · 2023 · Q18 · sign convention | `am205-quiz1-svd-signs` |
| solns24, p. 1 · 2024 · Q1 | `am205-largest-consecutive-integers`, `am205-even-large` |
| solns24, p. 1 · 2024 · Q2 | `am205-quiz1-infinity-fit-geometry` |
| solns24, p. 1 · 2024 · Q2 · authored companion | `am205-quiz1-infinity-fit-example` |
| solns24, p. 1 · 2024 · Q2 · authored companion | `am205-quiz1-two-fit-objectives` |
| solns24, p. 1 · 2024 · Q3 | `am205-quiz1-solve-vs-compress` |
| solns24, p. 1 · 2024 · Q3 · authored counterexample | `am205-quiz1-condition-not-rank` |
| solns24, p. 2 · 2024 · Q4 | `am205-quiz1-flag-rank` |
| solns24, p. 2 · 2024 · Q4 · rank-one decomposition | `am205-quiz1-flag-decompose` |
| solns24, p. 2 · 2024 · Q5 | `am205-quiz1-tall-factor-cost` |
| solns24, p. 2 · 2024 · Q5 · QR companion | `am205-quiz1-tall-qr-cost` |
| solns24, p. 2 · 2024 · Q6 · bound | `am205-quiz1-product-norm-bound` |
| solns24, p. 2 · 2024 · Q6 · equality | `am205-quiz1-product-norm-alignment` |
| solns24, p. 2 · 2024 · Q6 · authored companion | `am205-quiz1-product-norm-example` |
| solns25, p. 1 · 2025 · Q1 | `am205-quiz1-rounded-gram` |
| solns25, p. 1 · 2025 · Q2 · zero pattern | `am205-quiz1-similarity-zeros` |
| solns25, p. 1 · 2025 · Q2 · unchanged entry | `am205-quiz1-similarity-fixed` |
| solns25, p. 1 · 2025 · Q2 · authored companion | `am205-quiz1-similarity-spectrum` |
| solns25, p. 1 · 2025 · Q3 | `am205-quiz1-symmetric-not-spd` |
| solns25, p. 1 · 2025 · Q3 · operation counts | `am205-quiz1-cholesky-work` |
| solns25, p. 2 · 2025 · Q4 · complete-pivot approximation | `am205-quiz1-cross-two` |
| solns25, p. 2 · 2025 · Q4 · Frobenius error | `am205-quiz1-cross-two-error` |
| solns25, p. 2 · 2025 · Q5 · prediction sensitivity | `am205-quiz1-fit-contraction` |
| solns25, p. 2 · 2025 · Q5 · coefficient sensitivity | `am205-quiz1-coefficient-sensitivity` |
| solns25, p. 2 · 2025 · Q5 · equality direction | `am205-quiz1-worst-target-direction` |
| solns25, p. 2 · 2025 · Q6 · product bound | `am205-quiz1-product-condition-bound` |
| solns25, p. 2 · 2025 · Q6 · product construction | `am205-quiz1-product-condition-four` |
| solns25, p. 2 · 2025 · Q6 · sum counterexample | `am205-quiz1-sum-condition-unbounded` |
