# AM 209a: lectures 1–8

Course label: **AM 209a**, as requested. The supplied Ed course labels its material **COMPSCI 1090A**. This is the same source link the user supplied, not a separately identified AM course.

253 authored question–answer–intuition cards. Downloaded 18 PDF decks; 17 core decks support the cards. The optional advanced regularization deck is retained as supporting material, not treated as required new topics. Repeated animation/build slides are consolidated. Cards do not imply mastery or replace full coding exercises.

| Lecture | Material | Cards |
| --- | --- | ---: |
| 1 | [Introduction to Data Science](https://edstem.org/us/courses/99171/lessons/177081) | 20 |
| 2 | [Data and Pandas](https://edstem.org/us/courses/99171/lessons/177083) | 32 |
| 3 | [Visualization and EDA](https://edstem.org/us/courses/99171/lessons/177082) | 34 |
| 4 | [Introduction to Regression: kNN and Evaluation](https://edstem.org/us/courses/99171/lessons/177084) | 31 |
| 5 | [Simple and Multiple Linear Regression](https://edstem.org/us/courses/99171/lessons/177085) | 35 |
| 6 | [Interactions, Polynomial Regression, Model Selection and CV](https://edstem.org/us/courses/99171/lessons/177086) | 35 |
| 7 | [Bias–Variance, Ridge and Lasso](https://edstem.org/us/courses/99171/lessons/177087) | 30 |
| 8 | [Regression Inference, Bootstrap and Prediction Intervals](https://edstem.org/us/courses/99171/lessons/177088) | 36 |

## Local sources

PDFs are stored in `courses/am209a/lecnotes/` under the existing `/courses/` gitignore rule. Each card links to a physical PDF page. Local source links require those files on the machine running the app; the flashcard text itself is bundled in the app.

Lecture 2 ends with a live notebook exercise; no separate live notebook was available in that lesson view. The deck’s concepts are covered, without claiming coverage of unseen notebook cells. Optional readings, later lectures, quizzes and administrative content were not imported.

## Mathematical clarifications

- Lecture 4: the mean predictor is a baseline, not the worst possible model; negative R² is possible. MSE changes with the square of a unit conversion.
- Lectures 5–6: OLS fitting does not require normally distributed errors. Fitted residuals are not the same as independent model errors. Exact collinearity differs from near collinearity.
- Lecture 7: cards distinguish reducible estimation error and irreducible response noise without reproducing the slides’ reversed epistemic/aleatoric labels. The ridge formula specifies SSE versus MSE scaling and whether the intercept is penalized.
- Lecture 8: bootstrap replicate SD estimates estimator standard error; dividing by the square root of the number of replicates instead estimates simulation averaging uncertainty. The usual regression t reference requires the classical model assumptions. Confidence coverage is not posterior probability.

Stable IDs begin with `am209a-`. Topic prerequisites order definitions before their follow-up checks. Existing courses and review IDs are preserved.
