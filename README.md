# Annika Akter — Personal Portfolio

A modern, sleek, fully responsive personal portfolio website for a Frontend Developer, built with Next.js (App Router), React, Tailwind CSS, Lucide React, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** JavaScript (JSX)

## Getting Started

### Prerequisites

- Node.js 18+ (tested with Node 24)
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── siteConfig.js        # <-- Personal info & links (edit this)
├── public/                  # <-- Put resume.pdf and profile.jpg here
├── tailwind.config.js
├── postcss.config.mjs
├── next.config.mjs
└── README.md
```

## Where to Replace Placeholders

All personal information and links live in `data/siteConfig.js`. Update:

- `name`, `role`, `email`, `location`, `tagline`
- `socials.github`, `socials.linkedin`, `socials.twitter`, `socials.facebook`, `socials.email`
- `resumeUrl` — e.g. `"/resume.pdf"` after placing your CV in `/public`
- `profileImage` — e.g. `"/profile.jpg"` after placing your photo in `/public`

Project data lives in `components/Projects.jsx` inside the `projects` array. Update titles, descriptions, tags, `live`, and `repo` URLs.

### Resume / CV

1. Place your PDF (e.g. `resume.pdf`) in the `/public` folder.
2. Set `resumeUrl: "/resume.pdf"` in `data/siteConfig.js`.

### Profile Image

1. Place your photo (e.g. `profile.jpg`) in the `/public` folder.
2. Set `profileImage: "/profile.jpg"` in `data/siteConfig.js`.

### Project Screenshots

The project cards currently use gradient placeholders. To use real screenshots, replace the placeholder block in `components/Projects.jsx` with an `<img>` pointing to your image in `/public`.

## Contact Form

The contact form is frontend-only (simulated send). To make it functional, wire `handleSubmit` in `components/Contact.jsx` to your backend or a service like Formspree / EmailJS.

## License

MIT — feel free to use and customize.