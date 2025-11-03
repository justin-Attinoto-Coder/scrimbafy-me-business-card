# scrimbafy-me-business-card

An epic, state-of-the-art digital business card web application built with Vite, showcasing responsive design prowess with modern CSS features, color gradients, and custom animations.

![Desktop View](https://github.com/user-attachments/assets/6eeb4d37-cdec-4da9-a5a0-3648c66ece48)

## ✨ Features

### 🎨 Modern Design
- **Animated Gradient Background**: Continuously shifting purple/pink gradient that creates an immersive experience
- **Gradient Text Effects**: Name displayed with animated gradient text using background-clip
- **Custom Animations**: 
  - Floating avatar effect
  - Subtle zoom on background images
  - Shimmer effect on gradient text
  - Smooth card entrance with fade-in and slide-up
  - Rotating social icons on hover
  - Ripple effects on buttons

### ♿ Accessibility First
- Semantic HTML5 structure with proper ARIA labels and roles
- Keyboard navigation support with visible focus states
- Screen reader friendly with descriptive alt text
- High contrast mode support
- Reduced motion support for users who prefer it
- WCAG 2.1 compliant

### 📱 Fully Responsive
- Mobile-first approach
- Breakpoints for small (480px) and medium (768px) screens
- Flexible layouts that adapt to all screen sizes
- Touch-friendly button sizes on mobile
- Stacked button layout on small screens

### ⚡ Performance Optimized
- Built with Vite for lightning-fast development
- Optimized production builds with code splitting
- Minified CSS and assets
- Modern CSS features with graceful fallbacks

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/justin-Attinoto-Coder/scrimbafy-me-business-card.git
cd scrimbafy-me-business-card
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Customization

### Update Personal Information

Edit `index.html` to customize:
- Name and title
- Website URL
- Email address
- Social media links
- About and Interests sections

### Customize Colors

Edit `styles.css` CSS variables in the `:root` selector:

```css
:root {
    /* Color Palette */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    /* ... more variables ... */
}
```

### Replace Images

Replace the placeholder images in the `images/` directory:
- `avatar.png` - Your profile picture (recommended: 400x400px)
- `intro-bg.png` - Header background image (recommended: 800x400px)

## 🛠️ Technologies Used

- **Vite** - Next generation frontend tooling
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox
  - CSS Custom Properties (variables)
  - CSS Animations & Transitions
  - CSS Gradients
  - Media Queries for responsive design
  - CSS Feature Queries (@supports)

## 📂 Project Structure

```
scrimbafy-me-business-card/
├── images/
│   ├── avatar.png          # Profile avatar
│   └── intro-bg.png        # Header background
├── index.html              # Main HTML file
├── styles.css              # CSS styles with animations
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- Primary: Purple gradient (#667eea → #764ba2)
- Accent: Pink gradient (#f093fb → #f5576c)
- Highlight: Cyan gradient (#4facfe → #00f2fe)

### Typography
- System font stack for optimal performance
- Responsive font sizes
- Gradient text effects with fallbacks

### Interactions
- Hover effects on all interactive elements
- Smooth transitions (150ms - 500ms)
- Focus states for keyboard navigation
- Touch-friendly tap targets (minimum 48x48px)

## 🔒 Security

This project has been scanned for security vulnerabilities:
- ✅ No CodeQL security alerts
- ✅ Dependencies checked against GitHub Advisory Database
- ✅ No production vulnerabilities found

Note: Development dependencies (esbuild/vite) may show npm audit warnings, but these only affect the development server, not production builds.

## 📄 License

MIT License - feel free to use this project as a template for your own business card!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Created with ❤️ using Vite and modern web technologies
