# AM 205 comprehensive Quiz 1 study-sheet coverage

Updated October 4, 2026. Source: `courses/harvard/am205/quiz/quiz1/quiz1-study-sheet.md` (all 286 lines read).

53 new cards and 121 reused cards; 174 unique cards in the comprehensive study group. Existing IDs, wording, and citations are preserved. Citations use section headings because the source is Markdown, not PDF pages.

## Scope and interpretation

- All seven instructional sections are covered, including formulas, assumptions, proofs, examples, counterexamples, computation, geometry, and operation counts. Section 8 is a retrieval checklist for these same objectives; it does not require duplicate cards.
- Source references and the suggested priority list are study context, not instructions to modify the app or evidence of the learner’s actual mistakes.
- Corrected the overly broad unit-sphere statement: a map with a nontrivial null space can send the sphere to a filled ellipsoid, not just its boundary. The dedicated counterexample explains this; the original source file is unchanged.
- Condition-number and relative-error formulas specify invertibility/full column rank and nonzero denominators. Rank-deficient condition number uses the sheet’s infinite-value convention, not a ratio restricted to positive singular values.
- The floating-point relative model excludes underflow and overflow; reflector construction handles zero input explicitly. Companion calculations are labeled as authored examples in their locators.
- No fixed card quota was used. Coverage is not a claim of learner mastery.

## Learning-objective ledger

| Section and objective | Card IDs |
| --- | --- |
| §1 · Machine epsilon, rounding, spacing examples, and representability | `am205-roundoff-versus-epsilon`, `am205-largest-consecutive-integers`, `am205-even-large`, `am205-spacing-at-100`, `am205-binade-boundary`, `am205-quiz1-gap-at-54`, `am205-quiz1-round-at-54`, `am205-quiz1-exact-operands`, `am205-fraction-range` |
| §1 · Commutativity, associativity, cancellation, underflow, and Gram symmetry | `am205-quiz1-commutative-rounding`, `am205-quiz1-product-commutes`, `am205-associative`, `am205-cancellation`, `am205-exact-subtraction`, `am205-subnormal-role`, `am205-quiz1-rounded-gram` |
| §1 · precision range | `am205-q1-sheet-precision-range` |
| §1 · spacing rule | `am205-q1-sheet-spacing-rule` |
| §1 · rounding model | `am205-q1-sheet-rounding-model` |
| §1 · underflow vs overflow | `am205-q1-sheet-underflow-vs-overflow` |
| §2 · Basic vector and matrix norms, zero norm, and singular matrices | `am205-quiz1-vector-norm-order`, `am205-matrix-norms`, `am205-quiz1-norms-four-five`, `am205-quiz1-zero-norm`, `am205-quiz1-singular-norm`, `am205-norm-bound` |
| §2 · Vector norm formulas · authored companion | `am205-q1-sheet-vector-norm-practice` |
| §2 · norm dimension bound | `am205-q1-sheet-norm-dimension-bound` |
| §2 · max coordinate bound | `am205-q1-sheet-max-coordinate-bound` |
| §2 · Triangle inequality · authored companion | `am205-q1-sheet-norm-triangle` |
| §2 · Homogeneity versus conditioning · authored companion | `am205-q1-sheet-norm-scalar` |
| §2 · Condition numbers, scaling, digit loss, and counterexamples | `am205-quiz1-singular-condition`, `am205-condition-one`, `am205-condition-scaling`, `am205-condition-scale`, `am205-spd-sensitive`, `am205-quiz1-six-digits`, `am205-quiz1-product-condition-bound`, `am205-quiz1-product-condition-four`, `am205-quiz1-sum-condition-unbounded` |
| §2 · rectangular condition | `am205-q1-sheet-rectangular-condition` |
| §2 · worst case not every | `am205-q1-sheet-worst-case-not-every` |
| §2 · relative rhs bound | `am205-q1-sheet-relative-rhs-bound` |
| §2 · Stability, residual interpretation, and scale | `am205-conditioning`, `am205-problem-vs-solver`, `am205-linear-backward-data`, `am205-small-residual-counterexample`, `am205-scaled-residual`, `am205-quiz1-residual-rescale` |
| §2 · backward stable | `am205-q1-sheet-backward-stable` |
| §2 · residual to error | `am205-q1-sheet-residual-to-error` |
| §2 · Residual error bound · authored companion | `am205-q1-sheet-relative-residual-bound` |
| §2 · scaled residual formula | `am205-q1-sheet-scaled-residual-formula` |
| §3 · Solution structure and reversible transformations | `am205-consistency`, `am205-two-solutions`, `am205-quiz1-solution-line-proof`, `am205-quiz1-row-permutation`, `am205-quiz1-column-coordinates`, `am205-quiz1-invertible-left`, `am205-quiz1-diagonal-row-scaling`, `am205-quiz1-scaling-pivot` |
| §3 · unique system | `am205-q1-sheet-unique-system` |
| §3 · cannot cancel | `am205-q1-sheet-cannot-cancel` |
| §3 · LU, pivot choice, and ordered triangular solves | `am205-solve-with-permutation`, `am205-triangular-step`, `am205-forward-backward`, `am205-pivot-scope`, `am205-quiz1-three-pivots`, `am205-column-permutation`, `am205-zero-pivot-nonsingular`, `am205-quiz1-singular-lu`, `am205-quiz1-lp-solve`, `am205-quiz1-pl-solve` |
| §3 · Triangular and symmetric products; Cholesky | `am205-quiz1-upper-product`, `am205-quiz1-lower-upper-product`, `am205-quiz1-symmetric-product`, `am205-cholesky`, `am205-quiz1-symmetric-not-spd`, `am205-quiz1-cholesky-work` |
| §3 · spd directions | `am205-q1-sheet-spd-directions` |
| §4 · Orthogonality, norm preservation, inverse, determinant, and diagonal tests | `am205-quiz1-orthogonal-dot`, `am205-quiz1-orthogonality-not-transitive`, `am205-orthogonal-map`, `am205-orthogonal-inverse`, `am205-quiz1-orthogonal-norms`, `am205-quiz1-orthogonal-determinant`, `am205-quiz1-diagonal-orthogonal` |
| §4 · Householder formula, geometric action, normalization, proof, and targeting | `am205-quiz1-householder-unit`, `am205-quiz1-householder-symmetric`, `am205-quiz1-householder-geometric`, `am205-quiz1-householder-proof`, `am205-quiz1-householder-alpha`, `am205-quiz1-reflector-designed` |
| §4 · thin q identity | `am205-q1-sheet-thin-q-identity` |
| §4 · reflector construct | `am205-q1-sheet-reflector-construct` |
| §4 · reflector sign | `am205-q1-sheet-reflector-sign` |
| §4 · Constructing a reflector · authored companion | `am205-q1-sheet-reflector-example` |
| §4 · reflector proof target | `am205-q1-sheet-reflector-proof-target` |
| §4 · Constructing a reflector · boundary case | `am205-q1-sheet-reflector-zero-input` |
| §5 · Thin QR dimensions · authored companion | `am205-q1-sheet-thin-qr-shapes` |
| §5 · Square reflector count and symmetric tridiagonalization | `am205-quiz1-reflector-count`, `am205-quiz1-similarity-zeros`, `am205-quiz1-similarity-fixed`, `am205-quiz1-similarity-spectrum` |
| §5 · tall reflectors | `am205-q1-sheet-tall-reflectors` |
| §5 · Least-squares geometry, exact fits, uniqueness, and normal equations | `am205-quiz1-exact-fit`, `am205-quiz1-exact-nonunique`, `am205-quiz1-normal-equations`, `am205-normal-squared`, `am205-quiz1-normal-condition-one` |
| §5 · unique ls | `am205-q1-sheet-unique-ls` |
| §5 · QR and SVD solution methods | `am205-qr-reduction`, `am205-quiz1-svd-solve`, `am205-svd-minimum-norm` |
| §5 · qr pythagoras | `am205-q1-sheet-qr-pythagoras` |
| §5 · qr inconsistent | `am205-q1-sheet-qr-inconsistent` |
| §5 · QR solve · authored companion | `am205-q1-sheet-qr-small-solve` |
| §5 · Projection actions and perturbation bounds | `am205-quiz1-qr-projector`, `am205-quiz1-same-fit`, `am205-quiz1-fit-contraction`, `am205-quiz1-coefficient-sensitivity`, `am205-quiz1-worst-target-direction` |
| §5 · projector twice | `am205-q1-sheet-projector-twice` |
| §5 · pseudoinverse projector | `am205-q1-sheet-pseudoinverse-projector` |
| §5 · Alternative error norms and contact geometry | `am205-quiz1-infinity-fit-geometry`, `am205-quiz1-infinity-fit-example`, `am205-quiz1-two-fit-objectives` |
| §5 · norm balls | `am205-q1-sheet-norm-balls` |
| §6 · Existence, normalization, signs, and SVD construction example | `am205-quiz1-svd-exists`, `am205-quiz1-svd-normalize`, `am205-quiz1-svd-factor-example`, `am205-quiz1-svd-factor-vectors`, `am205-quiz1-svd-signs` |
| §6 · Compact SVD dimensions · authored companion | `am205-q1-sheet-compact-svd-shapes` |
| §6 · svd directions | `am205-q1-sheet-svd-directions` |
| §6 · svd column row | `am205-q1-sheet-svd-column-row` |
| §6 · svd nullspace | `am205-q1-sheet-svd-nullspace` |
| §6 · svd eigenvalues | `am205-q1-sheet-svd-eigenvalues` |
| §6 · svd by hand | `am205-q1-sheet-svd-by-hand` |
| §6 · svd gram caution | `am205-q1-sheet-svd-gram-caution` |
| §6 · svd inverse | `am205-q1-sheet-svd-inverse` |
| §6 · Ellipsoid geometry and norm-product alignment | `am205-disk`, `am205-quiz1-rank-ball`, `am205-quiz1-product-norm-bound`, `am205-quiz1-product-norm-alignment`, `am205-quiz1-product-norm-example` |
| §6 · Sphere-versus-ball caveat · authored counterexample to unrestricted sphere claim | `am205-q1-sheet-sphere-collapse` |
| §6 · Read properties from singular values · authored companion | `am205-q1-sheet-singular-values-read` |
| §7 · Rank bounds, rank-one constructions, and error examples | `am205-outer-product-rank`, `am205-rank-sum`, `am205-quiz1-flag-rank`, `am205-quiz1-flag-decompose`, `am205-quiz1-cross-formula`, `am205-quiz1-cross-two`, `am205-quiz1-cross-two-error`, `am205-quiz1-condition-not-rank`, `am205-quiz1-solve-vs-compress` |
| §7 · Nonsingular minor rank bound · authored companion | `am205-q1-sheet-rank-minor` |
| §7 · truncated svd best | `am205-q1-sheet-truncated-svd-best` |
| §7 · Frobenius tail error | `am205-svd-tail` |
| §7 · spectral tail | `am205-q1-sheet-spectral-tail` |
| §7 · Truncated SVD errors · authored companion | `am205-q1-sheet-tail-error-practice` |
| §7 · elimination not optimal | `am205-q1-sheet-elimination-not-optimal` |
| §7 · factor storage general | `am205-q1-sheet-factor-storage-general` |
| §7 · flops vs products | `am205-q1-sheet-flops-vs-products` |
| §7 · factor matvec general | `am205-q1-sheet-factor-matvec-general` |
| §7 · Concrete savings, factorization costs, and product association | `am205-quiz1-rank-storage`, `am205-quiz1-rank-matvec`, `am205-lu-reuse`, `am205-many-b-cost`, `am205-quiz1-cholesky-work`, `am205-quiz1-tall-factor-cost`, `am205-quiz1-tall-qr-cost`, `am205-quiz1-outer-association` |
| §7 · Operation-count scaling · authored companion | `am205-q1-sheet-square-cost-scaling` |

## Section 8 checklist crosswalk

| Checklist item | Coverage |
| --- | --- |
| 1. Floating-point spacing and rounding | §1 spacing rule and linked worked examples |
| 2. Vector and matrix norms | §2 norm practice, bounds, and linked matrix norm cards |
| 3. Singular-value properties | §6 singular-values-read, nullspace, and dimensions |
| 4. Error/stability/SPD distinctions | §2 backward stability and residual bounds; §3 SPD directions |
| 5. Pivot selection | §3 pivoting cards and the three-pivots example |
| 6. Permuted triangular solves | §3 LP/PL and LU solves; §5 small QR solve |
| 7. Conditioning counterexamples | §2 condition-scale and spd-sensitive; §3 zero-pivot-nonsingular |
| 8. Householder proof and construction | §4 proof, sign choice, construction, worked example, zero case |
| 9. Thin QR / compact SVD dimensions and projection | §4 thin-Q; §5 shapes and projector proofs; §6 compact SVD |
| 10. Normal equations and conditioning | §5 normal-equation derivation and squared conditioning |
| 11. QR / SVD least squares and rank loss | §5 solution methods, decomposition, uniqueness, minimum norm |
| 12. SVD normalization and signs | §6 existing normalization example and sign cards |
| 13. Elimination approximation and norm | §7 cross construction and Frobenius error example |
| 14. Rank, ellipsoid geometry, storage, costs | §6 sphere caveat and geometry; §7 bounds, savings, operation counts |
