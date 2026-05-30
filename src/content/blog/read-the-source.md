---
title: "Read the Source: The Habit That Made Me a Better Engineer"
description: "The library you depend on is just code someone wrote. Go read it."
pubDate: "May 09 2026"
---

For a long time I treated the libraries I imported like black boxes — magic that worked until it didn't, at which point I'd flail around Stack Overflow hoping someone had hit the same wall.

Then I started reading the source. Not all of it, not heroically. Just the function I was actually calling. It changed how I work more than any course or book ever did.

## Dependencies are not magic

That framework you reach for every day? It's a folder of files written by people who were figuring it out as they went, same as you. When you open it up, three things happen:

1. **The fear goes away.** It stops being magic and starts being code. Code you can reason about.
2. **You debug 10x faster.** When something breaks, you're reading the actual logic instead of guessing at it.
3. **You steal good ideas.** The best way to learn how to structure code is to read code written by people better than you.

## How to actually do it

Don't try to read a whole codebase top to bottom — you'll bounce off. Instead:

```bash
# Jump straight to the thing you're using
$ grep -rn "export function useQuery" node_modules/some-lib/src
```

Find the function you call. Read *that*. Follow the one call inside it that looks interesting. Stop when you're satisfied. You're not auditing the project; you're answering a question.

> Read with a question in mind. "How does it cache this?" "Why is this async?" A question gives you a thread to pull, so you don't drown.

## What you'll find

You'll find that the experts write messy code too. You'll find clever tricks and embarrassing hacks side by side. You'll find `// TODO: fix this properly` comments from five years ago in software running on millions of machines.

Mostly, you'll find that the gap between you and the people who wrote your tools is smaller than you think. It's just code. Go read it.
