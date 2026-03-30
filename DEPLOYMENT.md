# Deployment Guide

Panduan deploy EA Platform ke berbagai hosting platform.

---

## 🚀 Vercel (Recommended)

Vercel adalah platform paling mudah untuk deploy Next.js.

### Prerequisites
- Akun Vercel (https://vercel.com)
- GitHub/GitLab/Bitbucket repository

### Steps

1. **Push ke Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/ea-platform.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka https://vercel.com
   - Login / Sign up
   - Klik "New Project"
   - Import repository lo
   - Pilih framework: **Next.js**
   - Klik "Deploy"

3. **Set Environment Variables**
   Di Vercel Dashboard:
   - Settings → Environment Variables
   - Tambahkan:
     ```
     DATABASE_URL=file:./db/production.db
     NEXTAUTH_SECRET=your-secret-key-here
     NEXTAUTH_URL=https://your-domain.vercel.app
     ```

4. **Done!** 
   Lo akan dapat URL seperti: `https://ea-platform.vercel.app`

### Vercel CLI (Optional)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 🌐 Netlify

Netlify juga support Next.js dengan plugin khusus.

### Prerequisites
- Akun Netlify (https://netlify.com)
- Git repository

### Steps

1. **Push ke Git Repository** (sama seperti Vercel)

2. **Deploy ke Netlify**
   - Buka https://app.netlify.com
   - Login / Sign up
   - Klik "Add new site" → "Import an existing project"
   - Connect ke Git provider
   - Pilih repository
   - Build settings sudah otomatis terdeteksi dari `netlify.toml`
   - Klik "Deploy site"

3. **Set Environment Variables**
   Di Netlify Dashboard:
   - Site settings → Environment variables
   - Tambahkan variables yang diperlukan

4. **Done!**
   Lo akan dapat URL seperti: `https://ea-platform.netlify.app`

### Netlify CLI (Optional)
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## 🔥 Firebase Hosting

Firebase Hosting untuk yang sudah familiar dengan Google Cloud.

### Prerequisites
- Akun Google / Firebase (https://console.firebase.google.com)
- Firebase CLI

### Steps

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login ke Firebase**
   ```bash
   firebase login
   ```

3. **Buat Project Firebase**
   - Buka https://console.firebase.google.com
   - Klik "Add project"
   - Ikuti langkah-langkahnya
   - Catat Project ID

4. **Update .firebaserc**
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```

5. **Enable Firebase Functions**
   ```bash
   # Upgrade project ke Blaze plan (required untuk functions)
   # Di Firebase Console → Billing → Upgrade
   
   # Deploy
   firebase deploy
   ```

### Firebase CLI Commands
```bash
# Initialize (first time)
firebase init

# Deploy all
firebase deploy

# Deploy hosting only
firebase deploy --only hosting

# Deploy functions only
firebase deploy --only functions
```

---

## ⚠️ Important Notes

### Database (SQLite)

Untuk production, SQLite tidak ideal karena:
- File database akan di-reset setiap deploy
- Tidak bisa scale horizontal

**Recommended untuk production:**
1. **Vercel/Netlify** → Gunakan Vercel Postgres, PlanetScale, atau Supabase
2. **Firebase** → Gunakan Firestore

### Environment Variables

Pastikan set environment variables ini:
```env
DATABASE_URL="file:./db/production.db"  # atau connection string database lain
NEXTAUTH_SECRET="generate-dengan-openssl-rand-base64-32"
NEXTAUTH_URL="https://your-domain.com"
```

### Generate NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

---

## 📦 Recommended Stack untuk Production

| Platform | Database | File Storage |
|----------|----------|--------------|
| Vercel | Vercel Postgres / PlanetScale | Vercel Blob |
| Netlify | Supabase / PlanetScale | Netlify Blobs |
| Firebase | Firestore | Firebase Storage |

---

## 🆘 Troubleshooting

### Build Failed
- Check Node.js version (minimum 18)
- Check dependencies: `bun install`
- Check build log untuk error details

### API Routes Not Working
- Pastikan environment variables sudah diset
- Check function timeout settings
- Check logs di dashboard

### Database Issues
- Pastikan DATABASE_URL benar
- Run migrations: `bun run db:push`
- Check database connection

---

## 📞 Support

Kalau ada masalah, bisa contact:
- Email: dewakupas@example.com
- Saweria: https://saweria.co/dewakupas
