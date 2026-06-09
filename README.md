<div align="center">
  <img src="./public/favicon.svg" width="64" height="64" alt="Hashtag Finder Pro Logo" />
  <h1 align="center">Hashtag Finder Pro</h1>
  <p align="center">
    <strong>Temukan hashtag terbaik untuk YouTube, TikTok, dan Instagram</strong>
    <br />
    Generate hashtag yang relevan dan terbukti efektif — dalam hitungan detik.
  </p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.7-black?style=flat&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat&logo=tailwindcss" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat" alt="MIT License" />
  </p>
  <p>
    <a href="#fitur">Fitur</a> •
    <a href="#niche">Niche</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#memulai">Memulai</a> •
    <a href="#struktur-project">Struktur</a>
  </p>
</div>

---

## ✨ Fitur

<table>
  <tr>
    <td align="center" width="25%">
      <strong>🔍 Keyword Input</strong><br />
      <small>Masukkan niche, keyword, atau judul konten</small>
    </td>
    <td align="center" width="25%">
      <strong>🎯 3 Platform</strong><br />
      <small>YouTube, TikTok, Instagram — atau semua</small>
    </td>
    <td align="center" width="25%">
      <strong>🤖 AI Ranking</strong><br />
      <small>Quality Score ★★★★★ per hashtag</small>
    </td>
    <td align="center" width="25%">
      <strong>📊 4 Kategori</strong><br />
      <small>Viral • Balanced • Niche • Long-tail</small>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>📋 One Click Copy</strong><br />
      <small>Copy per tag, per grup, atau semua</small>
    </td>
    <td align="center">
      <strong>🌐 3 Bahasa</strong><br />
      <small>Indonesia, English, Lainnya</small>
    </td>
    <td align="center">
      <strong>🌙 Dark Mode</strong><br />
      <small>Toggle light/dark otomatis</small>
    </td>
    <td align="center">
      <strong>📤 Export TXT</strong><br />
      <small>Simpan hasil sebagai file .txt</small>
    </td>
  </tr>
</table>

---

## 🧩 Niche Yang Didukung

Proyek ini memiliki database **700+ hashtag** yang dikelompokkan dalam **18 niche**:

<div align="center">

| Niche | Tags | Niche | Tags |
|-------|------|-------|------|
| 🏋️ Fitness | 35 | 🏃 Running | 22 |
| 💰 Investment | 29 | ✈️ Travel | 24 |
| 🍳 Food | 28 | 💻 Technology | 24 |
| 👗 Fashion | 23 | 📸 Photography | 20 |
| 🎵 Music | 22 | 📚 Education | 23 |
| 💼 Business | 23 | 💄 Beauty | 22 |
| 🎮 Gaming | 25 | 🏥 Health | 22 |
| 🕌 Islamic | 23 | 👨‍👩‍👧 Parenting | 24 |
| 🚗 Automotive | 25 | ₿ Crypto / Web3 | 22 |
| 📈 Digital Marketing | 24 | | |

</div>

---

## 🏗️ Tech Stack

<div align="center">

| Teknologi | Penggunaan |
|-----------|-----------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first styling |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [ShadCN UI](https://ui.shadcn.com/) | Komponen UI (inspirasi) |

</div>

---

## 🚀 Memulai

```bash
# Clone repository
git clone https://github.com/ekoriduwan/hashtag_medsos.git

# Masuk ke folder project
cd hashtag-finder-pro

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka **[http://localhost:3000](http://localhost:3000)** di browser.

### Build Production

```bash
npm run build
npm start
```

---

## 📁 Struktur Project

```
src/
├── app/
│   ├── api/generate/route.ts   # API endpoint hashtag engine
│   ├── globals.css              # Global styles + dark mode
│   ├── layout.tsx               # Root layout + ThemeProvider
│   └── page.tsx                 # Halaman utama
├── components/
│   ├── CopyButtons.tsx          # Copy & export buttons
│   ├── HashtagCard.tsx          # Card per hashtag
│   ├── HashtagGroup.tsx         # Grup kategori hashtag
│   ├── PlatformIcons.tsx        # SVG icons YouTube/TikTok/IG
│   ├── QualityScore.tsx         # ★★★★★ rating
│   ├── ResultSection.tsx        # Tabs + hasil
│   ├── SearchCard.tsx           # Form pencarian
│   └── ThemeToggle.tsx          # Dark/light toggle
├── lib/
│   ├── hashtag-data.ts          # Database 700+ hashtag
│   └── hashtag-engine.ts        # Engine scoring & ranking
└── types/
    └── index.ts                 # TypeScript interfaces
```

---

## ⚙️ Cara Kerja

```
User Input (keyword + platform + bahasa)
        │
        ▼
    findNiche() — mencocokkan keyword ke 18 niche
        │
        ▼
    Semantic Expansion — menghasilkan variasi keyword terkait
        │
        ▼
    Filter by Platform & Language
        │
        ▼
    Scoring Engine:
      • Volume score (very-high/high/medium/low)
      • Platform match bonus
      • Trend boost (7d / 30d)
      • Relevancy boost (cocok dengan keyword)
        │
        ▼
    Classification → Viral / Balanced / Niche / Long-tail
        │
        ▼
    Output dengan Quality Score ★★★★★
```

---

## 📊 Contoh Output

### Input: `investasi saham`

| Kategori | Hashtag |
|----------|---------|
| 🔥 Viral | #investasi #saham #investing #stockmarket #finance |
| ⚖️ Balanced | #financialfreedom #wealth #trading #passiveincome |
| 🎯 Niche | #investasipemula #sahamindonesia #reksadana #belajarinvestasi |
| 📌 Long-tail | #investingforbeginners #portfoliodiversification |

---

## 🗺️ Roadmap

- [x] Keyword Input + Platform Selector
- [x] Hashtag Recommendation (Viral/Balanced/Niche/Long-tail)
- [x] Quality Score ★★★★★
- [x] One Click Copy + Export TXT
- [x] Dark Mode
- [x] Language Selector (ID/EN/Lainnya)
- [x] 18 Niche dengan 700+ hashtag
- [ ] Trend Tracker (real-time data)
- [ ] Competitor Analysis
- [ ] AI Caption Generator
- [ ] Hashtag Performance Prediction

---

<div align="center">
  <p>
    Dibuat dengan ❤️ untuk content creator Indonesia
  </p>
  <p>
    <strong>Hashtag Finder Pro</strong> &copy; 2026
  </p>
</div>