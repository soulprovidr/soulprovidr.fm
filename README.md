# Soul Provider

Internet radio for those who like to groove. Live at [soulprovidr.fm](https://soulprovidr.fm).

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React, server-rendered) with file-based routing
- [Vite](https://vite.dev) for development and builds, [Nitro](https://nitro.build) for the production server
- TypeScript, SCSS modules and MDX

## Running locally

You need Node.js `^20.19.0` or `>=22.12.0`, and npm. [mise](https://mise.jdx.dev) is optional, and is what manages the Node version and environment variables in the examples here.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set the [environment variables](#environment-variables). With mise, create a `mise.toml` in the project root (it's ignored by git):

   ```toml
   [tools]
   node = "22.21.1"

   [env]
   API_URL = "<Soul Provider API URL>"
   ```

3. Start the dev server on port 3000:

   ```bash
   npm run dev -- --port 3000
   ```

If `npm` isn't found, mise isn't active in your shell. Prefix commands with `mise exec --`.

### Commands

| Command         | What it does                             |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the dev server                     |
| `npm run build` | Build for production into `.output/`     |
| `npm start`     | Serve the production build (build first) |

## Environment variables

| Variable  | Required for | Description                                          |
| --------- | ------------ | ---------------------------------------------------- |
| `API_URL` | `/playlists` | Base URL of the Soul Provider API, no trailing slash |

`API_URL` is only read on the server. If it's missing or the API can't be reached, `/playlists` renders an empty list and the API error is not logged.

## Project structure

```
public/           Static files
src/
  components/     UI, grouped by feature (radio, playlists, chromecast, ...)
  content/        MDX for the home, FAQ and privacy pages
  lib/            API client, hooks and utilities
  routes/         One file per page; _layout/ pages share the radio player
  styles/         Global styles, plus fonts and colours in variables.scss
```

`src/routeTree.gen.ts` is generated from `src/routes/`, so don't edit it.

## External services

| Service           | Used for                                                                      |
| ----------------- | ----------------------------------------------------------------------------- |
| RadioKing         | Audio stream (`WebRadioProvider.tsx`) and now-playing data (`useMetadata.ts`) |
| Soul Provider API | Playlists (`src/lib/api/`)                                                    |
| Google Cast       | `/chromecast`, the page that runs on Chromecast devices                       |
| Google Analytics  | Site analytics; the measurement ID is in `src/routes/__root.tsx`              |

## Deployment

The site is hosted on [Railway](https://railway.com):

- **Build:** `npm run build`
- **Start:** `npm start`
- **Variables:** set `API_URL` on the Railway service
