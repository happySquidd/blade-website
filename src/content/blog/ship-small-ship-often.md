---
title: "Ship Small, Ship Often"
description: "The fastest way to build something great is to keep building something small."
pubDate: "Apr 27 2026"
---

Every big rewrite I've ever attempted in one heroic push has died in a branch somewhere, half-finished, ashamed of itself. Every project I've actually *shipped* got there the same boring way: small pieces, merged constantly.

It took me embarrassingly long to learn this. So let me save you some time.

## The big-bang trap

The plan always sounds great. "I'll build the whole thing on a branch, then merge it when it's perfect." What actually happens:

- The branch drifts from `main` until merging is a war.
- You can't tell which of your 4,000 changed lines broke the thing.
- You never get feedback, because nobody can see it until it's "done."
- "Done" keeps moving. Motivation runs out before it arrives.

A big batch of work isn't impressive. It's risk you haven't paid for yet.

## Small is a superpower

Instead, make the smallest change that is true and merge it today. A pull request you can review over a coffee. A commit that does one thing.

```
feat: add --json flag to status command
fix: handle empty config file without panicking
refactor: extract retry logic into its own function
```

Each one is boring. Together they're a product. And every one of them:

- Is easy to review, so it actually gets reviewed.
- Is easy to revert, so mistakes cost minutes, not days.
- Ships value *now* instead of someday.

## Make "small" possible

Shipping small isn't just willpower — it's setup. The tooling that makes it painless is worth every minute:

1. **Feature flags** so half-built work can live in `main`, switched off.
2. **A fast test suite** so you trust a green check enough to merge on it.
3. **One-command deploys** so shipping is a reflex, not an event.

Lower the cost of shipping and you'll do it more. Do it more and you'll get better at it. It compounds.

Stop saving up your work for one big beautiful release. Ship the small thing. Ship it today.
