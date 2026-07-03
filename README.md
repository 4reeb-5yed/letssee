# Personal Site

A thoughtful personal portfolio and blog built with Next.js 15, following a comprehensive design specification.

## Quick Start

### Prerequisites

- **Node.js** 20+ installed
- **PostgreSQL** database (local or cloud like Neon/Supabase)
- **Git** for version control

### Step 1: Clone & Install

```bash
git clone https://github.com/4reeb-5yed/letssee.git
cd letssee
npm install
```

### Step 2: Configure Environment

```bash
cp .env.example .env
# Edit .env with your values
```

**Required environment variables:**

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `AUTH_SECRET` | Auth encryption secret | Generate with `openssl rand -base64 32` |
| `ADMIN_EMAIL` | Your admin login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Your admin password (min 8 chars) | `your-secure-password` |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | `http://localhost:3000` |

### Step 3: Set Up Database

```bash
npm run db:generate
npm run db:push
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Access Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter your `ADMIN_EMAIL` and `ADMIN_PASSWORD`
3. You'll be redirected to the admin dashboard

## Project Structure

```
letssee/
├── src/
│   ├── app/
│   │   ├── (public)/          # Public website pages
│   │   ├── (admin)/          # Admin/CMS pages
│   │   └── api/              # API routes
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── public/           # Public site components
│   │   └── admin/            # Admin-specific components
│   ├── lib/
│   │   ├── auth/             # Authentication config
│   │   └── db/               # Database client & types
│   └── styles/
│       └── tokens.css        # Design system tokens
├── prisma/
│   └── schema.prisma         # Database schema
└── Configuration files       # next.config, tailwind, etc.
```

## Design System

The site uses a custom design system defined in `src/styles/tokens.css`:

- **Colors**: Warm neutral base with terracotta accent (#C9512B)
- **Typography**: Fraunces (display), Public Sans (body), JetBrains Mono (code)
- **Spacing**: 8px base unit scale
- **Motion**: Scroll-triggered animations with reduced-motion support

### Key Design Tokens

```css
/* Colors */
--color-ink:        #0E0D0B  /* Primary text */
--color-paper:      #FAF8F4  /* Background */
--color-accent:     #C9512B  /* Accent (terracotta) */

/* Typography */
--text-base: 1.125rem  /* 18px */
--text-xl:  2.1875rem /* 35px */
--text-3xl: 3.4375rem /* 55px */

/* Spacing */
--space-3: 1rem   /* 16px */
--space-6: 3rem   /* 48px */
--space-9: 8rem   /* 128px */
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
```

## Admin Features

After logging in at `/admin/login`, you can:

- **Dashboard**: Overview of your content
- **Projects**: Create/edit portfolio projects with rich text editor
- **Site Settings**: Update hero text, SEO, contact CTA
- **Media**: Upload and manage images

### Creating Your First Project

1. Go to `/admin/projects`
2. Click "New Project"
3. Fill in title, slug, summary, content
4. Use the rich text editor for body content
5. Toggle "Feature on homepage" if desired
6. Click "Save Draft" or "Save & Publish"

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm i -g vercel
vercel
```

### Required Environment Variables for Production

```
DATABASE_URL=postgresql://...
AUTH_SECRET=<generated-secret>
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=<secure-password>
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js v5
- **Editor**: Tiptap (ProseMirror-based rich text)
- **Hosting**: Vercel (recommended)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma Documentation](https://prisma.io/docs)
- [NextAuth.js Documentation](https://authjs.dev/)
- [Tiptap Documentation](https://tiptap.dev/docs)

## License

MIT
