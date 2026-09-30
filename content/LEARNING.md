# Learning system

The feed supports retrieval practice with corrective explanations and spaced revisits. Ratings are self-reported; the app does not grade answers or claim mastery.

## A study session

1. Form an answer mentally, aloud, or on paper before revealing. If a concept is new, read the explanation and choose Again.
2. Reveal and compare your reasoning with the explanation, including the assumptions and intermediate steps.
3. Rate recall: Again = could not recall; Hard = partial or needed help; Good = correct unaided; Easy = correct and effortless.
4. Swipe onward. Revealing, scrolling, dwell time, and bookmarks never count as a successful retrieval.

## Scheduling policy

This is a transparent heuristic, not FSRS or a fitted memory model. Initial intervals are Again 10 minutes, Hard 6 hours, Good 1 day, Easy 4 days. Subsequent due reviews use 1.2×, 2.5×, or 3.5× the previous interval for Hard, Good, or Easy, with minimums of 6 hours, 1 day, and 4 days. Again resets to 10 minutes. Intervals stop growing at one year; this is not a limit on content or reviews. Early successful practice cannot push a due date later. A lapse resets the consecutive-success count.

Due reviews are ordered oldest first and mixed with new cards at up to three reviews per new card. New cards rotate courses/topics when possible, and put available prerequisites first. This is ordering support, not proof that a prerequisite is mastered. A course-specific feed cannot enforce dependencies outside that course. Cards with broken/cyclic dependencies remain accessible.

The session order stays stable when you rate. Reviews becoming due are inserted after the current card while the page is open (checked every 30 seconds and on window focus). Leave and return to the feed to rebuild its priority order. Future-due cards are not forced into the learning feed merely to keep you scrolling. Unrated cards remain new on your next visit. The feed has no card quota.

Saved cards and Browse all material are unscheduled practice: they let you explore without changing review dates. Return to For you to resume scheduled learning. Repeated ratings of the same session occurrence are prevented. Older Reviewed flags migrate without inventing historical review dates or successful retrievals.

Progress is stored in this browser's localStorage alongside imported cards, and survives reloads. Clearing browser data clears the schedule. There is no account sync or objective answer checking. Solving full problems away from the feed remains necessary, particularly for derivations and simulation work.

## Research basis and limits

Retrieval practice, spacing, and feedback motivate this design. The exact intervals and 3:1 mix above are product heuristics and have not been validated for this learner or these courses.

- [Retrieval practice](https://www.retrievalpractice.org/retrievalpractice)
- [Spacing](https://www.retrievalpractice.org/spacing)
- [Feedback](https://www.retrievalpractice.org/feedback)
