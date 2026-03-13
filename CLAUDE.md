# Hacker News Clone

A read-only Hacker News clone built with Next.js 15, React 19, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel.

## Stack

- **Next.js 15** (App Router, server components)
- **React 19**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax (not the old `@tailwind` directives)
- **shadcn/ui** — minimal usage; only `button` and `utils` initialized so far

## Data

- Source: [HN Firebase REST API](https://hacker-news.firebaseio.com/v0)
- Fetches top 30 story IDs, then fetches all 30 items in parallel via `Promise.all`
- Pages revalidate every **60 seconds** via Next.js ISR (`revalidate = 60` in `page.tsx` and `next: { revalidate: 60 }` on each `fetch` in `lib/hn-api.ts`)
- No API key or authentication required

## Project Structure

```
app/
  layout.tsx        # Root layout with HN orange header
  page.tsx          # Home page — fetches and renders top 30 stories
  globals.css       # Tailwind v4 + shadcn CSS variables
components/
  StoryItem.tsx     # Single story row (title, domain, points, author, time, comments)
  StoryList.tsx     # Ordered list of StoryItem rows
  ui/               # shadcn/ui primitives (auto-generated)
lib/
  hn-api.ts         # HN API fetch logic
  utils.ts          # shadcn cn() helper
types/
  hn.ts             # HNStory TypeScript interface
```

## Deployment

- Hosted on Vercel
- No environment variables required
- Standard Next.js build: `npm run build`
