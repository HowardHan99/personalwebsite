# Vercel Deployment & Custom Domain Guide

## Part 1: Deploy to Vercel

### Step 1: Commit Your Code to Git

```bash
# Add all files
git add .

# Commit with a message
git commit -m "Initial website deployment"
```

### Step 2: Push to GitHub

**Option A: If you already have a GitHub repository**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Option B: Create a new repository**
1. Go to https://github.com/new
2. Create a new repository (e.g., "personal-website")
3. Don't initialize with README (your project already has files)
4. Copy the commands from GitHub and run them

### Step 3: Deploy to Vercel

**Option A: Deploy via Vercel Website (Recommended)**

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In" (use GitHub account for easiest integration)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete

**Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - What's your project's name? personal-website
# - In which directory is your code located? ./
# - Want to override the settings? No

# Deploy to production
vercel --prod
```

Your site is now live at: `https://your-project-name.vercel.app`

---

## Part 2: Connect GoDaddy Custom Domain

### Step 1: Add Domain to Vercel

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain name (e.g., `howardhan.com`)
4. Click "Add"
5. Vercel will show you DNS configuration instructions

### Step 2: Configure DNS in GoDaddy

**For Root Domain (howardhan.com)**

1. Log in to your GoDaddy account
2. Go to "My Products" → "DNS" → Click on your domain
3. Scroll to "Records" section
4. **Add A Record**:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: `600` (or default)
   - Click "Save"

**For www Subdomain (www.howardhan.com)**

5. **Add CNAME Record**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600` (or default)
   - Click "Save"

**Important**: Remove any conflicting A or CNAME records for `@` and `www`

### Step 3: Verify Domain in Vercel

1. Back in Vercel, wait for DNS propagation (5-60 minutes)
2. Vercel will automatically verify your domain
3. Once verified, you'll see a green checkmark
4. SSL certificate will be automatically provisioned (1-2 minutes)

### Step 4: Set Primary Domain (Optional)

1. In Vercel project → "Settings" → "Domains"
2. Click the three dots next to your preferred domain
3. Select "Set as Primary"
4. This will be your main URL (others redirect to it)

---

## DNS Configuration Quick Reference

### Option 1: Root Domain Only (howardhan.com)

| Type | Name | Value           | TTL |
|------|------|-----------------|-----|
| A    | @    | 76.76.21.21     | 600 |

### Option 2: Root + WWW (Recommended)

| Type  | Name | Value                  | TTL |
|-------|------|------------------------|-----|
| A     | @    | 76.76.21.21            | 600 |
| CNAME | www  | cname.vercel-dns.com   | 600 |

### Option 3: WWW Only

| Type  | Name | Value                  | TTL |
|-------|------|------------------------|-----|
| CNAME | www  | cname.vercel-dns.com   | 600 |

---

## Troubleshooting

### Domain Not Verifying

- **Wait longer**: DNS propagation can take up to 48 hours (usually < 1 hour)
- **Check DNS**: Use https://dnschecker.org to verify DNS records
- **Clear cache**: Clear browser cache or try incognito mode
- **Remove conflicting records**: Make sure no other A/CNAME records conflict

### SSL Certificate Issues

- SSL is automatically provisioned by Vercel
- Wait 1-2 minutes after domain verification
- If issues persist, remove and re-add the domain

### "Invalid Configuration" Error

- Make sure you're using the correct DNS values
- A Record: `76.76.21.21` (not your Vercel app URL)
- CNAME: `cname.vercel-dns.com` (not your specific deployment URL)

### GoDaddy-Specific Tips

- **Disable Parked Domain**: In GoDaddy settings, make sure the domain isn't parked
- **Disable Domain Forwarding**: Remove any forwarding rules
- **Check Nameservers**: Make sure nameservers are set to GoDaddy's defaults (not third-party)

---

## Post-Deployment Checklist

✅ Website is live on Vercel
✅ Custom domain is connected
✅ SSL certificate is active (https://)
✅ www redirects to non-www (or vice versa)
✅ Test on mobile and desktop
✅ Check all pages load correctly
✅ Verify CV download works
✅ Test dark mode toggle
✅ Test all external links

---

## Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Automatic deployment to production
- **Every push to other branches** → Preview deployment
- **Pull requests** → Automatic preview links

You can view deployments in the Vercel dashboard.

---

## Environment Variables (If Needed Later)

If you need to add environment variables:

1. Vercel Dashboard → Your Project → "Settings" → "Environment Variables"
2. Add variables for different environments:
   - Production
   - Preview
   - Development
3. Redeploy for changes to take effect

---

## Custom Domain Examples

### What You'll Get

- `howardhan.com` → Your website
- `www.howardhan.com` → Redirects to howardhan.com (or vice versa)
- `howardhan.vercel.app` → Still works (can be disabled in settings)

### Subdomains (Advanced)

You can also add subdomains:
- `blog.howardhan.com`
- `research.howardhan.com`

Just add CNAME records in GoDaddy pointing to `cname.vercel-dns.com`

---

## Next Steps After Deployment

1. **Google Search Console**: Submit your sitemap
2. **Analytics**: Add Google Analytics or Vercel Analytics
3. **Monitoring**: Set up error tracking
4. **Performance**: Check Lighthouse scores
5. **SEO**: Add meta tags, Open Graph images
6. **Favicon**: Add your favicon.ico

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **GoDaddy DNS Help**: https://www.godaddy.com/help/dns-management-19228
- **DNS Checker**: https://dnschecker.org

