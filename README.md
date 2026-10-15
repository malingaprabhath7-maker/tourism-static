# Travel Lanka · ට්‍රැවල් ලංකා

A bilingual (English and Sinhala) tour site for Sri Lanka — a portfolio project by **Malinga Prabhath**.

**Live:** https://malingaprabhath7-maker.github.io/tourism-static/ · සිංහල: https://malingaprabhath7-maker.github.io/tourism-static/si/

> Demo only: it is not a real travel agency, and no booking or payment is made.

## Features

- **Search from the home page** by region, interest and length
- **Tour list with live filters** — region, interest, days and budget — and sorting
- **Tour pages** with highlights, a day-by-day route, what is included, the best time to go and an OpenStreetMap map
- **Request a tour** — the form works out the total for your group and opens a ready-made message in WhatsApp or email
- **My trip** — save tours on your device, see the total days and price for your group, share the plan on WhatsApp
- **USD or LKR prices**, switchable anywhere on the site
- **Gallery** with a full-screen viewer
- English and Sinhala, light and dark mode, works on phones

## Tech

- [Astro 5](https://astro.build) static site, [Tailwind CSS 4](https://tailwindcss.com), TypeScript
- No database: tours live in `src/data/packages.ts`; saved trips use the browser's local storage
- Deployed to GitHub Pages by GitHub Actions on every push

## Edit tours

Open `src/data/packages.ts`. Each tour has English and Sinhala text, a day-by-day plan, price in USD and map coordinates. Add a photo to `public/images/` and set `image` — tours without a photo show a coloured card until one is added.

```bash
npm install
npm run dev      # http://localhost:4321/tourism-static/
npm run build
```

## History

The first version was a PHP and MySQL site, later made static with Bootstrap. It is kept on the [`v1-original`](https://github.com/malingaprabhath7-maker/tourism-static/tree/v1-original) branch.
