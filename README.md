# IT Guru — Products Dashboard

A product management SPA built with React 19, TypeScript, and Vite. Features JWT-protected routes, a searchable/sortable products table, add/edit modals, and pagination — all backed by the [DummyJSON](https://dummyjson.com) public API.

**Live demo:** https://shadowfieng.github.io/it-guru/

## Features

- Authentication with protected routes
- Products table with search, column sorting, and pagination (20 items/page)
- Add and edit products via modal forms with Zod validation
- Toast notifications for mutations
- Loading states with progress bar

## Tech stack

| Layer | Library |
|---|---|
| UI | React 19, Tailwind CSS v4 |
| Routing | React Router v7 |
| Server state | TanStack Query v5 |
| Client state | Zustand v5 |
| Validation | Zod v4 |
| Build | Vite 8, React Compiler |

## Getting started

```bash
pnpm install
pnpm dev
```

### Environment variables

| Variable | Default | Description |
|---|---|---|
| `VITE_API_BASE_URL` | `https://dummyjson.com` | Base URL for the API |
| `VITE_BASE` | `/` | Vite base path (set automatically on CI) |

## Scripts

```bash
pnpm dev       # start dev server
pnpm build     # type-check + build
pnpm preview   # preview production build
pnpm lint      # run ESLint
```

## Project structure

```
src/
├── app/          # App entry, router, providers
├── features/
│   ├── auth/     # Login form, auth store
│   └── products/ # Products table, modals, store, API
├── pages/        # Page compositions
└── shared/       # API client, UI kit, hooks, config
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the included workflow (`.github/workflows/deploy.yml`).
