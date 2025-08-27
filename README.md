# MyNextJs Landing Page

A modern, responsive, and high-performance landing page built with Next.js and Tailwind CSS.

---

# Features
- Fully responsive design for mobile, tablet, and desktop.
- Hero section with optimized background video and images.
- Animated feature sections using Framer Motion.
- Smooth scrolling navigation and mobile-friendly menu.
- CTA and About sections with engaging animations.
- Footer with social links and quick navigation.

---

# Getting Started

# Prerequisites
- Node.js (v18 or above recommended)
- npm (v9 or above)

# Installation
1. Clone the repository:
```bash
git clone <your-repo-url>
````

2. Navigate to the project directory:

```bash
cd nextjs-landing
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

# Optimization Techniques Implemented

* Reduced image and video sizes to 300-400 KB for faster loading.
* Lazy-loaded images using Next.js `Image` component.
* Applied `max-w-full` and `overflow-x-hidden` to prevent horizontal scrolling.
* Minimized CSS and used Tailwind utility classes for performance.
* Animated elements optimized with Framer Motion and `whileInView` for better LCP.

---

# Lighthouse Performance Scores (After Deployment)

* **Largest Contentful Paint (LCP):** \~1.3s (improved after image/video optimization)
* **Cumulative Layout Shift (CLS):** 0.01
* **Interaction to Next Paint (INP):** 198 ms

  

