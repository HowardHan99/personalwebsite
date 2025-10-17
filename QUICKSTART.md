# ⚡ Quick Start Guide

Get your website running in 5 minutes!

## 1. Install & Run

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## 2. Edit Your Content

### Update Profile
```typescript
// data/personalInfo.ts
name: "Your Name"
title: "Your Title"
institution: "Your Institution"
```

### Add News
```typescript
// data/news.ts
{
  id: "news-1",
  date: "2024-03-15",
  content: "Your news here!",
  type: "publication"
}
```

### Add Publication
```typescript
// data/publications.ts - Paste into BIBTEX_CONTENT
@inproceedings{paper2024,
  author = {Your Name and Others},
  title = {Paper Title},
  booktitle = {CHI},
  year = {2024},
  image = {/images/pub-chi2024.jpg},
  tags = {HCI, AI},
  highlight = {Your Name}
}
```

### Add Project
```typescript
// data/projects.ts
{
  id: "my-project",
  title: "Project Title",
  description: "Description...",
  image: "/images/project.jpg",
  advisors: "Advised by...",
  tags: ["#HCI"]
}
```

## 3. Upload Files

### Images
Place in `public/images/`:
- `profile.jpg` (400x400px)
- `pub-*.jpg` (240x180px ratio)
- `project-*.jpg` (240x180px ratio)

### CV (Auto-Updates!)
Place in `public/`:
- `cv.pdf` or `cv-2024-03.pdf` (any timestamp works)
- Downloads as `howardhancv.pdf` (branded!)
- Upload new version → auto-updates
- Example: Upload `cv-2025-10.pdf`, link serves it as `howardhancv.pdf`

## 4. Toggle Features

```typescript
// data/siteConfig.ts
showNews: true          // Show news section
showProjects: true      // Show projects
showPublications: true  // Show publications
darkModeEnabled: true   // Dark mode toggle
```

## 5. Use Admin Panel (Optional)

- **Documentation**: `/admin`
- **Interactive Editor**: `/admin-edit`

Quick forms to add content!

## 6. Deploy

```bash
git add .
git commit -m "My website"
git push
```

Then import to Vercel at [vercel.com](https://vercel.com)

---

**That's it!** 🎉

For more details, see [README.md](README.md) or visit `/admin`
