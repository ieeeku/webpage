# IEEE Kathmandu University Student Branch

## Run it

```bash
pnpm install
pnpm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — Hero (what/where the club is), stats, focus areas, and an events teaser.
- `/events` — full events listing (upcoming + past), each card links to a detail page.
- `/events/[slug]` — event detail: cover image, description, tags, optional
  photo gallery, and a "Register interest" CTA.
- `/blog` — post listing.
- `/blog/[slug]` — full post.
- `/people` — the team, grouped by hierarchy tier (see below).
- `/contact` — contact details + an FAQ accordion.

Navbar and footer live in `app/layout.tsx`, so they're shared across every page.

## Editing content

Everything editorial lives in `lib/data/` as plain typed arrays — no CMS,
just files you edit directly:

- **`lib/data/events.ts`** — add an event by pushing a new object onto the
  `events` array. Each event supports a `cover` image, an optional `gallery`
  array of extra photos, `tags`, a `society`, a `registerUrl`, and a
  `status: "upcoming" | "past"`. Drop the actual image files under
  `public/events/` and reference them as `/events/<year>/your-file.jpg`.
- **`lib/data/team.ts`** — the People page hierarchy. Each member is
  `{ name, position, department, avatar?, tier }` where `tier` is `0–4`:

  0=> Branch Advisors
  1=> Board
  2=> Executive committee 
  3=> Society coordinators
  4=> General committee members

  The page groups and renders members by tier automatically — add someone
  with `tier: 3` and they show up under "Society coordinators" with no
  other changes needed. `avatar` is optional; without one, a flat initials
  mark is used (put photos under `public/teams/<board/executive>`).
- **`lib/data/blog.ts`** — same pattern: `title`, `date`, `author`, `tags`,
  `excerpt`, optional `cover`, and `content` as an array of paragraphs.
- **`lib/data/faqs.ts`** — plain `{ question, answer }` list rendered as an
  accordion on `/contact`.

## Assets

No real photos are included. `components/MediaCover.tsx` and
`components/Avatar.tsx` fall back to flat, on-brand placeholders (using the
tertiary accent + mono labels) whenever an image path isn't provided, so the
site looks intentional today and upgrades cleanly once real photos land in
`public/events/`, `public/team/`, and `public/blog/`.
