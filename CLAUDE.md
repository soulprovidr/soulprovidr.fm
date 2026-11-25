# soulprovidr.fm

Setup, structure, services and deployment are in the README:

@README.md

## Working in this repo

- Node comes from mise and may not be on PATH in non-interactive shells. If `npm` or `npx` isn't found, prefix it with `mise exec --`.
- `API_URL` comes from the git-ignored `mise.toml`. It is blank in the tracked `.env`, so check the process environment before concluding it is unset.
- The site is TanStack Start. Older branches and files may mention Next.js, Astro or Netlify; those setups are obsolete.
- Ask before pushing `main`: it may deploy the live site.
- Always tidy up: when a change leaves code, styles, props, imports or packages unused, remove them in the same change. Check for other uses first, and say what was removed.

## Conventions

- Import with the path aliases `@components`, `@content`, `@lib` and `@styles`.
- Style with SCSS modules next to the component. Use the variables in `src/styles/variables.scss` instead of hard-coded colours or fonts.
- Fonts are self-hosted through `@fontsource-variable` packages imported in `src/styles/global.scss`: Plus Jakarta Sans for headings and title-like text, Figtree for everything else.
- The look is warm and human: cream background, charcoal text, blue accent, sunflower highlight, rounded corners.
- Simple pages are MDX in `src/content/`. Each route sets its own title and social meta tags in `head`.
- Fetch from the Soul Provider API in a server function called by the route's loader, as in `src/routes/_layout/playlists.tsx`.
- Commit messages are short sentences ending in a period, e.g. "Add Google Analytics."

## Gotchas

- `/playlists` catches API errors and renders an empty list. "No playlists found" usually means the request failed: check that `API_URL` is set in the server process and that its host resolves.
- After switching branches or restarting the dev server, a "Cannot access '…RouteImport' before initialization" error can come from hot reloading `routeTree.gen.ts`. Reload the page before investigating further.

## Verifying changes

There are no automated tests.

1. Run `npm run build`. "Module level directives" warnings from `node_modules` are expected.
2. Check the affected pages in the browser, including at phone width, and check the console for errors.
3. `npx tsc --noEmit` already reports errors, so compare against the errors from before your change.
