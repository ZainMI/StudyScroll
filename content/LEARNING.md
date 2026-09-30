# Learning system

The feed supports retrieval practice with corrective explanations and spaced revisits. Ratings are self-reported; the app does not grade answers or claim mastery.

## A study session

1. Form an answer mentally, aloud, or on paper before revealing. If a concept is new, read the explanation and choose Again.
2. Reveal and compare your reasoning with the explanation, including the assumptions and intermediate steps.
3. Rate recall: Again = could not recall; Hard = partial or needed help; Easy = correct unaided; Super easy = correct and effortless.
4. Swipe onward. Leaving a revealed card without a rating defaults to Easy. Unrevealed cards stay unrated, and explicit choices are never overwritten. This default is a convenience, not evidence of successful recall.

## Scheduling policy

This is a transparent heuristic, not FSRS or a fitted memory model. Each rating schedules from now: Again 10 minutes, Hard 30 minutes, Easy 1 hour, Super easy 3 hours. These fixed intervals also apply during early practice. Existing stored review dates remain until the card is rated again. The stored keys good/easy remain for compatibility and now display as Easy/Super easy. A lapse resets the consecutive-success count.

Due reviews are ordered oldest first and mixed with new cards at up to three reviews per new card. New cards rotate courses/topics when possible, and put available prerequisites first. This is ordering support, not proof that a prerequisite is mastered. A course-specific feed cannot enforce dependencies outside that course. Cards with broken/cyclic dependencies remain accessible.

The session order stays stable when you rate. Reviews becoming due are inserted after the current card while the page is open (checked every 30 seconds and on window focus). Leave and return to the feed to rebuild its priority order. Future-due cards are not forced into the learning feed merely to keep you scrolling. Unrated cards remain new on your next visit. The feed has no card quota.

Choose whole courses or groups of topics and lectures in Study. Selected sessions include due reviews, new cards, then early practice; overlapping selections appear once. Early practice resets the due date using the chosen fixed interval. Saved cards are unscheduled practice and leave review dates unchanged. Use Session to return to the selected material. Repeated ratings of the same session occurrence are prevented. Older Reviewed flags migrate without inventing historical review dates or successful retrievals.

Progress is stored in this browser's localStorage alongside imported cards, and survives reloads. Clearing browser data clears the schedule. There is no account sync or objective answer checking. Solving full problems away from the feed remains necessary, particularly for derivations and simulation work.

## Research basis and limits

Retrieval practice, spacing, and feedback motivate this design. The exact intervals and 3:1 mix above are product heuristics and have not been validated for this learner or these courses.

- [Retrieval practice](https://www.retrievalpractice.org/retrievalpractice)
- [Spacing](https://www.retrievalpractice.org/spacing)
- [Feedback](https://www.retrievalpractice.org/feedback)

## Resetting progress

Open My courses → Reset learning progress and confirm. This clears recall ratings, review dates, and reviewed flags on this device. Your course material, imported cards, and saved bookmarks remain. Cancel leaves progress untouched.
