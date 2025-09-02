# Arnav Gupta's Portfolio Website

A modern, performant single-page portfolio website built with React 18, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance for showcasing Arnav's skills and projects.

---



https://github.com/user-attachments/assets/5c47bba6-b3fa-4ddc-a769-457388d422d0



---

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Performance Optimized**: Code splitting, lazy loading, optimized builds
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes
- **SEO Optimized**: Meta tags, structured data, and performance metrics
- **Welcome Screen**: Elegant one-time display with smooth zoom-out transition
- **Interactive Navigation**: Sticky navigation with active section highlighting
- **Type Safety**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks + Custom Hooks
- **Performance**: Intersection Observer, Code Splitting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── layout/       # Layout components
│   │   └── Navigation.tsx
│   ├── sections/     # Page sections
│   │   └── Hero.tsx
│   └── WelcomeScreen.tsx
├── hooks/           # Custom React hooks
│   ├── useIntersectionObserver.ts
│   └── useLocalStorage.ts
├── data/           # Portfolio data
│   └── portfolio.ts
├── types/          # TypeScript definitions
│   └── index.ts
├── utils/          # Utility functions
│   └── index.ts
├── App.tsx         # Main app component
├── main.tsx        # React entry point
└── index.css       # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #0ea5e9)
- **Secondary**: Slate grays (#64748b to #0f172a)
- **Accent**: Sky blue (#0ea5e9)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono
- **Responsive**: Fluid typography with clamp()

### Breakpoints
- **Mobile**: 0-479px
- **Large Mobile**: 480-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+

## 🚀 Performance Features

- **Core Web Vitals Optimized**
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
  - FCP: < 1.8s

- **Optimization Techniques**
  - Code splitting with React.lazy()
  - Image optimization
  - Critical CSS inlining
  - Resource preloading
  - Intersection Observer for animations

## 📱 Responsive Design

The website follows a mobile-first approach with:
- Fluid typography and spacing
- Responsive grid layouts
- Touch-friendly interactions
- Optimized navigation for mobile devices

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader optimization
- Focus management
- Color contrast compliance

## 🎭 Animation Integration

The website is designed to easily integrate with:
- **GSAP**: For advanced animations
- **Three.js**: For 3D elements
- **Custom Components**: Prepared slots for external animations

### Animation Slots
```typescript
// Hero typing animation
<TypingAnimation phrases={phrases} />

// Skills interactive display
<InteractiveSkills skills={skillsData} />

// 3D project previews
<Project3DPreview project={project} />

// Scroll-triggered animations
<ScrollAnimation />
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
- Optimized for React and TypeScript
- Code splitting enabled
- Source maps for debugging
- Custom chunk splitting

### Tailwind Configuration
- Custom color palette
- Responsive breakpoints
- Custom animations
- Component utilities

## 📈 Performance Monitoring

The website includes performance monitoring utilities:
- Core Web Vitals measurement
- Intersection Observer for animations
- Debounced scroll handlers
- Optimized re-renders

## 🎯 Future Enhancements

- [ ] Skills section with interactive elements
- [ ] Projects section with 3D previews
- [ ] Experience & Education timeline
- [ ] Contact form with validation
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Portfolio filtering
- [ ] Advanced animations

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Arnav Gupta**
- Email: arnavguptamodinagar@gmail.com
- LinkedIn: [Arnav Gupta](https://linkedin.com/in/arnav-gupta-8351641b6)
- GitHub: [arnavgupta27](https://github.com/arnavgupta27)

---

