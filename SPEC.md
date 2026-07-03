# Personal Site — Complete Specification

This document contains the complete specification for building the personal site.
See README.md for the implementation overview.

The full specification was provided in the conversation and includes:

## Part 1 — Design System
- Color tokens (ink, paper, accent, etc.)
- Typography (Fraunces, Public Sans, JetBrains Mono)
- Spacing scale (8px base)
- Motion specifications
- Component styling rules

## Part 2 — Architecture
- Public site routes (/, /work, /work/[slug], /writing, /writing/[slug], /about, /contact)
- Admin site routes (/admin/*)
- Data flow between public and admin

## Part 3 — Data Model
- Prisma schema with all entities
- Rich text storage as JSON
- Content pipeline

## Part 4 — Technical Stack
- Next.js 15 App Router
- Tailwind CSS v4
- PostgreSQL with Prisma
- Auth.js v5
- Tiptap editor

## Part 5 — Engineering Standards
- Performance budgets
- Accessibility standards
- Testing strategy
- Build sequence phases
