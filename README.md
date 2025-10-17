# Personal Academic Website

Modern, modular React-based personal website built with Next.js for academic researchers.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build
```

## ✨ Features

- **Dark Mode** - Toggle with 🌙/☀️ icon in header
- **News Section** - Toggleable news feed with compact icon display
- **Admin Panel** - Easy content management at `/admin` and `/admin-edit`
- **BibTeX Support** - Paste publications directly from Google Scholar
- **Responsive Design** - Works on all devices
- **SEO Optimized** - Ready for search engines

## 📁 Key Files to Edit

```
data/
├── siteConfig.ts      # Toggle features on/off
├── personalInfo.ts    # Your profile, bio, links
├── publications.ts    # Add publications (BibTeX format)
├── projects.ts        # Research projects
└── news.ts           # News and updates

public/
├── images/           # Upload images here
│   └── profile.jpg   # Your profile photo (400x400px)
└── cv.pdf           # Your CV
```

## 🎛️ Toggle Features

Edit `data/siteConfig.ts`:

```typescript
export const siteConfig = {
  showNews: true,          // Show news section (icons mode)
  showProjects: true,      // Show projects section
  showPublications: true,  // Show publications section
  darkModeEnabled: true,   // Enable dark mode toggle
};
```

## ⚡ Admin Panel

Two admin pages for content management:

**Documentation** - `/admin`
- Guides and examples
- File locations
- Best practices

**Interactive Editor** - `/admin-edit`
- Add news items
- Add publications (paste BibTeX)
- Add projects
- Edit profile

## 📝 Adding Content

### Quick Method (Forms)
1. Visit `/admin-edit`
2. Fill out forms
3. Submit (generates code if auto-save fails)
4. Refresh to see changes

### Manual Method
1. Edit files in `data/` folder
2. Save
3. Refresh browser

## 📄 Add Publication

```typescript
// data/publications.ts - Add to BIBTEX_CONTENT
@inproceedings{yourname2024,
  author = {Your Name and Others},
  title = {Your Paper Title},
  booktitle = {CHI},
  year = {2024},
  image = {/images/pub-chi2024.jpg},
  pdflink = {/papers/chi2024.pdf},
  tags = {HCI, AI},
  highlight = {Your Name}
}
```

## 🔬 Add Project

```typescript
// data/projects.ts
{
  id: "project-id",
  title: "Your Project Title",
  subtitle: "Skills: #HCI #AI",
  image: "/images/project.jpg",
  tags: ["#HCI", "#AI"],
  advisors: "Advised by Prof. Name",
  description: "Project description...",
}
```

## 📰 Add News

```typescript
// data/news.ts
{
  id: "news-1",
  date: "2024-03-15",
  content: "Paper accepted to CHI 2024!",
  type: "publication", // award, publication, talk, general
}
```

## 🎨 Customize Colors

Edit `styles/globals.css`:

```css
:root {
  --link-color: #e85d04;      /* Links (light mode) */
  --header-accent: #4a9eff;   /* Header border */
}

[data-theme="dark"] {
  --link-color: #ff8c42;      /* Links (dark mode) */
}
```

## 🖼️ Images & Files

### Images
Place in `public/images/`:
- **profile.jpg** - 400x400px (square)
- **project-*.jpg** - 240x180px ratio
- **pub-*.jpg** - 240x180px ratio

### CV (Automatic Latest)
Place in `public/`:
- **cv.pdf** or **cv-2024-03.pdf** (with any timestamp)
- Downloads as `howardhancv.pdf` (branded filename!)
- Automatically serves the latest version
- Upload `cv-2025-10.pdf` → link auto-updates
- Keep old versions or delete them (your choice)

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Click Deploy

Vercel auto-detects Next.js and deploys instantly!

## 🎯 Project Structure

```
personalwebsite/
├── components/        # React components
├── data/             # Edit your content here!
├── pages/            # Next.js pages
│   ├── index.tsx     # Home page
│   ├── admin.tsx     # Documentation
│   └── admin-edit.tsx # Interactive editor
├── public/           # Static assets
│   ├── images/       # Your images
│   └── papers/       # PDF papers
└── styles/           # CSS modules
```

## 💡 Tips

- **News ON** (`showNews: true`) → Compact icons (🎓📄✉️💼)
- **News OFF** (`showNews: false`) → Full button links
- Bookmark `/admin` and `/admin-edit` for quick access
- Use `/admin-edit` for quick additions
- Edit files directly for complex changes

## 📚 More Help

Visit `/admin` for detailed guides and examples.

---

Built with Next.js • Ready for Vercel • MIT License
