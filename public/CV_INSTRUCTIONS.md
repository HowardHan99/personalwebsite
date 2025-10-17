# CV Management Instructions

## How to Upload Your CV

You can now upload CVs with timestamps and the link will **automatically serve the latest one**!

### Naming Convention

Use any of these formats:
- `cv.pdf` (basic)
- `cv-2024.pdf`
- `cv-2024-03.pdf`
- `cv-2024-03-15.pdf`
- `cv-march-2024.pdf`

### How It Works

The system automatically:
1. Scans all files starting with `cv` and ending with `.pdf`
2. Sorts them alphabetically (reverse order)
3. Serves the latest one

### Examples

**Upload these files:**
```
public/
├── cv-2024-01.pdf
├── cv-2024-03.pdf
└── cv-2024-10.pdf  ← This one will be served (latest)
```

The link `/api/cv` will automatically serve `cv-2024-10.pdf`!

### To Update Your CV

1. Upload new CV file with timestamp: `public/cv-2024-11.pdf`
2. That's it! The link automatically updates
3. (Optional) Delete old CVs to save space

### Best Practices

**Good naming:**
- `cv-2024-10.pdf` ✅
- `cv-2024-10-15.pdf` ✅
- `cv-oct-2024.pdf` ✅

**Bad naming:**
- `resume.pdf` ❌ (doesn't start with "cv")
- `cv_2024.pdf` ❌ (use hyphens, not underscores)
- `CV.pdf` ❌ (use lowercase "cv")

### Keep Version History

You can keep all old CVs:
```
public/
├── cv-2024-01.pdf  ← Old version (kept for history)
├── cv-2024-03.pdf  ← Old version (kept for history)
└── cv-2024-10.pdf  ← Latest (automatically served)
```

Or delete old ones to save space:
```
public/
└── cv-2024-10.pdf  ← Only latest version
```

Both approaches work!

---

**Current CV Link**: `/api/cv` (downloads as "howardhancv.pdf")

