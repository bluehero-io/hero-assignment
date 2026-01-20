# Hero Assignment Monorepo

This repository is a monorepo for the Hero assessment. It uses **Next.js (latest)** with **React 18+**, **TypeScript**, and **Supabase**, and follows a server-first approach (SSR/RSC) with no client-side DB calls. Data access is routed through Supabase **custom schemas**, **public views** for reads, and **public functions** for writes with **RLS** enabled.

## Repository Structure

- `apps/` — Application(s) (Next.js).
- `packages/` — Shared packages/components/utilities.
- `supabase/` — Supabase config, migrations, and function definitions.
- `tests/` — Cross-cutting test assets and helpers.

## Setup

### Prerequisites

- Node.js (latest LTS)
- pnpm
- Supabase CLI (optional for local DB work)

### Install

```bash
pnpm install
```

### Local Supabase Setup

The apps expect to read from Supabase views. To run with local Supabase:

1. **Start Supabase locally** (Docker required):
   ```bash
   supabase start
   ```
   
   This will output `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

2. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Then update `.env.local` with the values from `supabase start` output:
   - `SUPABASE_URL`: The local API URL (e.g., `http://localhost:54321`)
   - `SUPABASE_ANON_KEY`: The anonymous key from the output

3. **Apply migrations and seed data** (automatic with `supabase start`, or manual):
   ```bash
   supabase db push
   supabase db seed
   ```

### Run the apps

For the **portal** app:
```bash
pnpm -F portal dev
```

For the **jobs** app:
```bash
pnpm -F jobs dev
```

Both apps will run in development mode and read listings from Supabase (if configured) or fall back to hardcoded i18n data.

### Lint & typecheck

```bash
pnpm lint
pnpm typecheck
```

### Required command

```bash
turbo run build test lint
```

### Tests

```bash
pnpm test
```

> Notes
> - Prefer SSR/RSC for data processing; avoid client-side DB calls.
> - Use feature-based structure and follow SOLID/DRY.
> - Security practices should align with OWASP Top 10.
> - UI uses TailwindCSS + ShadCN UI + Framer Motion for a minimal, Apple Liquid Glass-inspired design (light, tactile, elegant, accessible; WCAG 2.1 AA). Keep motion subtle (≤400 ms) and only when it improves UX.
