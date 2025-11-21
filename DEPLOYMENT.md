# GitHub Pages Deployment

## 🚀 Automated Deployment

Your portfolio is configured for automatic deployment to GitHub Pages:
- **URL:** https://dwibudisetyonugroho.github.io/
- **Trigger:** Every push to `main` branch
- **Build:** Automated via GitHub Actions

## 📋 Deployment Steps

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Configure for GitHub Pages deployment"

# Add remote (if not already added)
git remote add origin https://github.com/dwibudisetyonugroho/dwibudisetyonugroho.github.io.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/dwibudisetyonugroho/dwibudisetyonugroho.github.io
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

# Build for production
npm run build

# The output will be in the 'out' folder
# You can preview it with a local server:
npx serve out
```

## 📝 Configuration Summary

- ✅ **Static Export:** Configured in `next.config.ts`
- ✅ **Root Deployment:** No base path needed (user site)
- ✅ **GitHub Actions:** Auto-deployment workflow created
- ✅ **Jekyll Disabled:** `.nojekyll` file added

## 🔄 Update Your Site

Every time you push changes to the `main` branch:
1. GitHub Actions automatically triggers
2. Builds your Next.js site
3. Deploys to GitHub Pages
4. Site updates in ~2-3 minutes

## ⚠️ Important Notes

- **First-time setup:** You must enable GitHub Pages in repository settings
- **Branch:** Workflow triggers on `main` branch only
- **Images:** All images are unoptimized (required for static export)
- **Build time:** ~1-3 minutes per deployment

## 🐛 Troubleshooting

### Deployment fails
- Check GitHub Actions logs: https://github.com/dwibudisetyonugroho/dwibudisetyonugroho.github.io/actions
- Verify `package.json` dependencies are correct
- Ensure all imports are valid

### Site shows 404
- Verify GitHub Pages is enabled in Settings
- Check that Source is set to "GitHub Actions"
- Wait 2-3 minutes for DNS propagation

### CSS/JS not loading (503 Errors)
- **Cause:** GitHub Pages CDN propagation delay (common after renaming repositories)
- **Solution:** **WAIT.** It can take 10 minutes to 24 hours for the cache to clear.
- **Action:** Do NOT keep pushing new changes. Let the current deployment sit.
- **Verify:** Check if `.nojekyll` exists in the `public` folder (it should).

## 📊 Deployment Status

Check deployment status anytime:
- **Actions:** https://github.com/dwibudisetyonugroho/dwibudisetyonugroho.github.io/actions
- **Deployments:** https://github.com/dwibudisetyonugroho/dwibudisetyonugroho.github.io/deployments
