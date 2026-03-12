# 🖋️ Modern Blog Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://blog-application-wine-six.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A premium, highly-responsive blog platform engineered for speed, aesthetics, and optimal user engagement. This application features a cinematic dark-themed interface, seamless search capabilities, and efficient data orchestration via a centralized API layer.

---

## 🌟 Key Highlights

- **🚀 Performance Optimized**: Built on the cutting-edge **Next.js 16 App Router** for lightning-fast server-side rendering and static generation.
- **🎨 Elite Aesthetics**: Designed with a sophisticated dark-mode palette using **Tailwind CSS v4**, featuring glassmorphism, smooth transitions, and responsive grid layouts.
- **🔍 Intelligent Search**: Integrated search functionality across the home and blog pages, leveraging URL query parameters for shareable search results.
- **📱 Device Agnostic**: Professional mobile-first architecture ensures a flawless experience from high-resolution monitors to compact smartphone displays.
- **⚡ Dynamic Content**: Real-time content delivery orchestrated from an external MockAPI, ensuring a decoupled and scalable architecture.

---

## 🛠️ Technical Ecosystem

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: URL-based query parameters & React Hooks
- **Data Layer**: Fetch API with resilient error handling

---

## 📂 Architecture Overview

```text
/
├── app/                  # Application routing & core pages
│   ├── blog/             # Paginated insights list & search hub
│   ├── post/             # Dynamic routes for rich-text blog views
│   ├── layout.tsx        # Persistent global state & shell
│   └── page.tsx          # High-impact landing page
├── components/           # Atomic & reusable UI elements
│   ├── HeroFeaturedPost  # High-priority featured content
│   ├── Navbar & Footer   # Global navigation & site mapping
│   ├── PostCard          # Content summary components
│   └── RecentPostsGrid   # Systematic content discovery
├── lib/                  # Backend utilities & API connectors
│   └── api.ts            # Centralized data fetching service
├── public/               # Optimized static media assets
└── package.json          # Dependency & script management
```

---

## � Deployment

The application is deployed and hosted on **Vercel**. 

🔗 **Live Link**: [https://blog-application-wine-six.vercel.app/](https://blog-application-wine-six.vercel.app/)

---

## 💻 Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bharath-Krishna-AB/Blog_Application.git
   cd Blog_Application
   ```

2. **Initialize dependencies:**
   ```bash
   npm install
   ```

3. **Launch development environment:**
   ```bash
   npm run dev
   ```

4. **Access UI:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 👨‍� Developer

**Bharath Krishna AB**
- [GitHub](https://github.com/Bharath-Krishna-AB)
- [LinkedIn](https://linkedin.com/in/bharath-krishna-ab)

---

© 2026 Blog Application Project. Built with ❤️ and Precision.
