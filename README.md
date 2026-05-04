# Kerno
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A personal knowledge management and note-taking app, built as an alternative to Obsidian — designed with clarity and accessibility in mind.

## About

Kerno is a self-built PKM (Personal Knowledge Management) tool focused on:

- Simple, clear structure
- Fuzzy search (typo-tolerant)
- Code snippets with documentation
- Tag-based organization
- Fast note creation via templates

Built as a learning project to deepen Angular and Supabase skills.

## Tech Stack

| Layer | Technology                |
|---|---------------------------|
| Frontend | Angular 21                |
| Styling | Tailwind CSS              |
| Backend | Supabase (Database + Auth) |
| Search | Fuse.js                   |
| Editor | TipTap / CodeMirror       |
| Desktop | Electron (planned)        |

## Status

Work in progress — early development.

- [x] Project setup
- [ ] Supabase connection
- [ ] Note CRUD
- [ ] Fuzzy search
- [ ] Tags
- [ ] Authentication
- [ ] Electron wrapper

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
ng serve
```

Open `http://localhost:4200` in your browser.

## Prerequisites

- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Supabase account (for backend)

## License

MIT
