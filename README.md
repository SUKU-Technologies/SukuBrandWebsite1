# BrandWebsite - Modern Company Web Platform

A modern, responsive, and feature-rich corporate website built with React and Vite. This project showcases digital transformation services, company values, career opportunities, and customer engagement capabilities with SEO optimization and smooth animations.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Available Scripts](#available-scripts)
- [Component Documentation](#component-documentation)
- [Pages Overview](#pages-overview)
- [Key Dependencies](#key-dependencies)
- [Configuration Files](#configuration-files)
- [Deployment](#deployment)
- [Contributing Guidelines](#contributing-guidelines)
- [Troubleshooting](#troubleshooting)

---

## Overview

BrandWebsite is a comprehensive corporate website solution designed for companies offering digital transformation, software solutions, digital visibility services, and CRS (Corporate Social Responsibility) initiatives. The platform features an intuitive navigation system, engaging UI/UX with animations, multi-page architecture, and complete SEO optimization.

### Key Highlights:
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite and code splitting
- 🎨 Modern UI with Tailwind CSS and Framer Motion animations
- 🔍 SEO optimized with React Helmet
- 📧 Email integration via EmailJS
- 🎯 Cookie consent management
- 📊 Analytics tracking ready
- ♿ Accessibility-focused components

---

## Tech Stack

### Frontend Framework & Build Tool
- **React 19.1.0** - UI library with hooks and modern React features
- **Vite 7.0.4** - Next-generation build tool with HMR (Hot Module Replacement)
- **React Router DOM 7.7.0** - Client-side routing for multi-page navigation

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Tailwind CSS Vite 4.1.11** - Vite plugin for Tailwind optimization
- **Lucide React 0.528.0** - Beautiful icon library
- **React Icons 5.5.0** - Popular icon sets (Font Awesome, Bootstrap, etc.)
- **Swiper 11.2.10** - Touch carousel/slider library
- **Framer Motion 12.23.6** - Animation and gesture library

### Utilities & Services
- **Axios 1.11.0** - HTTP client for API requests
- **EmailJS Browser 4.4.1** - Client-side email service integration
- **React Hot Toast 2.5.2** - Toast notifications
- **React Toastify 11.0.5** - Alternative toast notifications
- **React Modal 3.16.3** - Modal/dialog component
- **React Spinners 0.17.0** - Loading spinners
- **React Helmet Async 2.0.5** - SEO and meta tag management

### Development Tools
- **ESLint 9.30.1** - Code linting and quality
- **ESLint Plugin React Refresh 0.4.20** - React Fast Refresh integration
- **ESLint Plugin React Hooks 5.2.0** - React hooks best practices
- **Vite React Plugin 4.6.0** - React optimization for Vite

---

## Features

### 🌐 Multi-Page Architecture
- **Landing Page** - Hero section with services overview
- **About Page** - Company mission, vision, CEO profile, and team information
- **Services Pages** - Digital Transformation, Digital Visibility, Software Solutions
- **Careers Page** - Job listings with filtering, company culture, and team testimonials
- **Contact Page** - Contact form with multiple channels of communication
- **CRS Page** - Corporate Social Responsibility initiatives and reports
- **Privacy Policy** - Legal compliance and data protection information

### 🎨 UI/UX Features
- Smooth animations using Framer Motion
- Interactive rotating circles and visual elements
- Carousel sections for testimonials and partners
- Modal dialogues for detailed information
- Loading spinners during content fetches
- Smooth scroll-to-top functionality
- Page loading animations on first visit

### 📧 Communication
- Email contact form with EmailJS integration
- Real-time form validation and error handling
- Toast notifications for user feedback
- Contact information display (phone, email, address)

### 🔍 SEO & Analytics
- Meta tag management with React Helmet
- Page-specific title and description tags
- Analytics ready service structure
- Cookie consent for user tracking compliance

### 🍪 User Experience
- Cookie consent banner with user preferences
- Local storage for user preferences
- First-visit page loader animation
- Responsive navigation bar
- Footer with company information

### 🎯 Performance Optimization
- Lazy loading for all pages (route-based code splitting)
- Suspense boundaries with loading fallbacks
- Optimized image serving
- CSS-in-JS optimization
- Fast refresh during development

---

## Project Structure

```
brandwebsite/
├── public/
│   └── pdfs/                          # Public PDF files (reports, documents)
│
├── src/
│   ├── assets/                        # Static assets (images, fonts, etc.)
│   │
│   ├── components/                    # Reusable UI components
│   │   ├── AboutHome.jsx              # About section on landing page
│   │   ├── ContactBanner.jsx          # Call-to-action contact section
│   │   ├── ContactUs.jsx              # Contact section component
│   │   ├── CookieConsent.jsx          # Cookie consent banner
│   │   ├── Feature.jsx                # Feature card component
│   │   ├── Footer.jsx                 # Website footer
│   │   ├── Hero.jsx                   # Hero banner section
│   │   ├── HowWeWork.jsx              # Process explanation section
│   │   ├── LocationBanner.jsx         # Location/map section
│   │   ├── NavBar.jsx                 # Navigation bar
│   │   ├── PageLoading.jsx            # Loading spinner component
│   │   ├── PartnerText.jsx            # Partner/client section
│   │   ├── RotatingCircle.jsx         # Animated rotating circle
│   │   ├── ScrollToTop.jsx            # Scroll to top button
│   │   ├── ServicesHome.jsx           # Services showcase on landing
│   │   ├── TestimonialsHome.jsx       # Client testimonials carousel
│   │   │
│   │   ├── AboutPage/                 # About page specific components
│   │   │   ├── AboutWhoWeAre.jsx
│   │   │   ├── Ceo.jsx
│   │   │   └── VisionAndMission.jsx
│   │   │
│   │   ├── Crs/                       # CRS page components
│   │   │   ├── CrsPrinciples.jsx
│   │   │   └── CrsReport.jsx
│   │   │
│   │   ├── DigiTransform/             # Digital Transformation components
│   │   │   ├── AnalysisAndConsult.jsx
│   │   │   ├── ChangeManagement.jsx
│   │   │   ├── DigitalStrategy.jsx
│   │   │   └── ScalingAndSupport.jsx
│   │   │
│   │   └── ForCareersPage/            # Careers page components
│   │       ├── CoreValues.jsx
│   │       ├── Impressions.jsx
│   │       ├── JobCard.jsx
│   │       ├── JobFilters.jsx
│   │       ├── JobList.jsx
│   │       ├── JoinUs.jsx
│   │       ├── TeamTestimonial.jsx
│   │       └── JobForm.jsx
│   │
│   │   └── ForContactPage/            # Contact page components
│   │       ├── ContactForm.jsx
│   │       ├── ContactHeader.jsx
│   │       └── ContactInfo.jsx
│   │
│   ├── hooks/
│   │   └── useCookieConsent.js        # Custom hook for cookie management
│   │
│   ├── Layout/
│   │   └── RootLayout.jsx             # Main layout wrapper with navbar/footer
│   │
│   ├── pages/                         # Page components (route-based)
│   │   ├── About.jsx                  # About page
│   │   ├── Careers.jsx                # Careers/jobs page
│   │   ├── Contact.jsx                # Contact page
│   │   ├── CRS.jsx                    # Corporate Social Responsibility
│   │   ├── DigitalVisibility.jsx      # Digital Visibility service page
│   │   ├── DigiTransform.jsx          # Digital Transformation service page
│   │   ├── LandingPage.jsx            # Homepage
│   │   ├── PrivacyPolicy.jsx          # Privacy policy page
│   │   └── SoftwareSolutions.jsx      # Software Solutions service page
│   │
│   ├── services/
│   │   └── analytics.js               # Analytics tracking service
│   │
│   ├── App.jsx                        # Main app component with routing
│   ├── App.css                        # App-level styles
│   ├── main.jsx                       # React DOM entry point
│   └── index.css                      # Global styles
│
├── .gitignore                          # Git ignore rules
├── eslint.config.js                   # ESLint configuration
├── index.html                          # HTML entry point
├── package.json                        # Dependencies and scripts
├── package-lock.json                  # Dependency lock file
├── README.md                           # This file
└── vite.config.js                     # Vite configuration
```

---

## Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8+) or **yarn** (v3+)
- **Git** (for version control)

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brandwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables** (if needed)
   Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=https://api.example.com
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173` (Vite's default port)

---

## Development

### Development Workflow

1. **Hot Module Replacement (HMR)**
   - Changes to components automatically reflect in the browser
   - State is preserved when possible
   - No full page reload needed

2. **Code Structure Best Practices**
   - Keep components in appropriate folders
   - One component per file (use named exports for utilities)
   - Use React hooks (useState, useEffect, useContext)
   - Implement error boundaries for resilience
   - Use lazy loading for route-based code splitting

3. **Styling Approach**
   - Use Tailwind CSS utility classes for styling
   - Place component-specific styles in `{ComponentName}.css`
   - Global styles in `index.css`
   - Avoid inline styles unless absolutely necessary

4. **Routing**
   - Define new routes in `App.jsx`
   - Use React Router's `useNavigate()` for programmatic navigation
   - Implement route guards if authentication is needed
   - Use lazy loading for page components

---

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with HMR enabled. Access at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory. 
- Minifies JavaScript and CSS
- Optimizes images and assets
- Generates source maps for debugging
- Output is ready for deployment

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment. Serves the `dist/` folder at `http://localhost:4173`

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and adherence to style guidelines.
- Identifies syntax errors
- Detects unused variables
- Checks React hooks best practices
- Enforces consistent code style

---

## Component Documentation

### Core Layout Components

#### **NavBar.jsx**
- Sticky navigation bar with responsive mobile menu
- Highlights active route
- Company logo/brand
- Navigation links to all pages
- Mobile hamburger menu

#### **Footer.jsx**
- Company information section
- Quick links
- Contact information
- Social media links
- Copyright notice

#### **RootLayout.jsx**
- Main layout wrapper
- Contains NavBar and Footer
- Outlet for page content
- Cookie Consent banner integration

### Home Page Components

#### **Hero.jsx**
- Banner section with call-to-action
- Background image or gradient
- Headline and subheadline
- CTA buttons

#### **ServicesHome.jsx**
- Showcase of main services
- Cards showing Digital Transformation, Digital Visibility, Software Solutions
- Links to detailed service pages

#### **AboutHome.jsx**
- Brief company overview
- Key achievements
- Link to full About page

#### **TestimonialsHome.jsx**
- Swiper carousel of client testimonials
- Star ratings and quotes
- Client names and titles

#### **HowWeWork.jsx**
- Process overview (4-5 step process)
- Visual explanation of workflow

#### **PartnerText.jsx**
- Partner/client logos section
- Trust indicators

### Feature Components

#### **CookieConsent.jsx**
- Cookie consent banner
- Accept/reject options
- Links to privacy policy
- Integrates with `useCookieConsent` hook

#### **PageLoading.jsx**
- Full-screen loading animation
- Smooth fade-out on completion
- Used on first visit and route transitions

#### **ScrollToTop.jsx**
- Floating button to scroll to top
- Appears on scroll down
- Smooth scroll animation

#### **RotatingCircle.jsx**
- Animated SVG circle for visual interest
- Used in various sections for decoration

---

## Pages Overview

### Landing Page (`LandingPage.jsx`)
- **Purpose**: First impression and overview
- **Components Used**: Hero, ServicesHome, AboutHome, HowWeWork, TestimonialsHome, PartnerText, ContactBanner
- **Key Sections**:
  - Hero banner with CTA
  - Services overview
  - How it works process
  - Client testimonials
  - Contact CTA

### About Page (`About.jsx`)
- **Purpose**: Detailed company information
- **Components Used**: AboutWhoWeAre, VisionAndMission, Ceo
- **Key Sections**:
  - Company mission and vision
  - CEO message
  - Team highlights
  - Company values

### Digital Transformation (`DigiTransform.jsx`)
- **Purpose**: Detailed service page
- **Components Used**: DigitalStrategy, ChangeManagement, AnalysisAndConsult, ScalingAndSupport
- **Key Sections**:
  - Service overview
  - Four transformation pillars
  - Case studies
  - Benefits and outcomes

### Digital Visibility (`DigitalVisibility.jsx`)
- **Purpose**: Digital visibility service details
- **Key Sections**:
  - Service introduction
  - SEO and digital marketing strategies
  - Case studies
  - Pricing or packages (if applicable)

### Software Solutions (`SoftwareSolutions.jsx`)
- **Purpose**: Software development services
- **Key Sections**:
  - Technology stack
  - Project examples
  - Development process
  - Team expertise

### Careers Page (`Careers.jsx`)
- **Purpose**: Job listings and company culture showcase
- **Components Used**: JobFilters, JobList, JoinUs, CoreValues, TeamTestimonial, Impressions
- **Key Sections**:
  - Company culture and values
  - Open positions (filterable)
  - Employee testimonials
  - Application process
  - Benefits and perks

### Contact Page (`Contact.jsx`)
- **Purpose**: Contact form and information
- **Components Used**: ContactHeader, ContactForm, ContactInfo
- **Key Sections**:
  - Contact form with validation
  - Contact information (address, phone, email)
  - Map integration (optional)
  - Response time expectations

### CRS Page (`CRS.jsx`)
- **Purpose**: Corporate Social Responsibility initiatives
- **Components Used**: CrsPrinciples, CrsReport
- **Key Sections**:
  - CSR principles and commitments
  - Initiatives and projects
  - Impact reports
  - Sustainability goals

### Privacy Policy (`PrivacyPolicy.jsx`)
- **Purpose**: Legal compliance
- **Content**:
  - Data collection practices
  - User rights
  - Cookie policy
  - GDPR compliance
  - Contact for privacy concerns

---

## Key Dependencies

### Routing & Navigation
- **react-router-dom**: Client-side routing for multi-page navigation

### Animations & UI Effects
- **framer-motion**: Smooth transitions, animations, and gesture handling
- **react-spinners**: Loading spinner components
- **swiper**: Touch-enabled carousels and sliders

### Forms & Communication
- **@emailjs/browser**: Send emails directly from browser client
- **axios**: HTTP requests to backend APIs

### Notifications & Feedback
- **react-hot-toast**: Toast notifications (success/error messages)
- **react-toastify**: Alternative toast notification system
- **react-modal**: Modal/dialog components for overlays

### Icons & Typography
- **lucide-react**: Modern SVG icons
- **react-icons**: Collection of popular icon sets

### SEO & Meta Management
- **react-helmet-async**: Manage title, meta tags, and head elements

### Styling
- **tailwindcss**: Utility-first CSS framework
- **tailwindcss/vite**: Vite plugin for Tailwind optimizations

---

## Configuration Files

### **vite.config.js**
Vite build configuration:
- React plugin for HMR
- Build optimization settings
- Server configuration for development
- Alias paths (optional)

### **eslint.config.js**
Code quality and linting rules:
- React best practices
- React hooks validation
- ES6+ compatibility
- Code style enforcement

### **tailwind.config.js** (if present)
Tailwind CSS customization:
- Custom colors and themes
- Font families
- Breakpoints
- Plugins

### **index.html**
HTML entry point:
- Root div for React
- Favicon and metadata
- Script tags for JavaScript

---

## Deployment

### Build Optimization

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Contents of `dist/` folder**
   - `index.html` - Main entry point
   - `assets/` - Optimized JavaScript, CSS, and images
   - Source maps (optional)

### Deployment Platforms

#### **Vercel** (Recommended for React + Vite)
```bash
npm i -g vercel
vercel
```
- Automatic deployments on git push
- Built-in analytics and performance monitoring
- Serverless functions support

#### **Netlify**
```bash
npm i -g netlify-cli
netlify deploy
```
- Easy GitHub integration
- Automatic builds
- Form submissions support

#### **GitHub Pages**
- Update `vite.config.js` with base path
- Push to `gh-pages` branch
- Enable GitHub Pages in repository settings

#### **Traditional Hosting** (AWS, DigitalOcean, etc.)
1. Build the project: `npm run build`
2. Upload `dist/` folder to web server
3. Configure web server to serve `index.html` for all routes
4. Example nginx configuration:
   ```nginx
   server {
       listen 80;
       server_name example.com;
       root /var/www/dist;
       
       location / {
           try_files $uri /index.html;
       }
   }
   ```

### Environment Variables for Production
Create `.env.production` file:
```
VITE_API_BASE_URL=https://api.production.com
VITE_EMAILJS_SERVICE_ID=production_service_id
VITE_EMAILJS_TEMPLATE_ID=production_template_id
```

---

## Contributing Guidelines

### Setting Up for Contribution

1. **Fork and Clone**
   ```bash
   git clone <your-fork-url>
   cd brandwebsite
   git remote add upstream <original-repo-url>
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Follow Code Standards**
   - Run `npm run lint` before committing
   - Fix any linting errors
   - Keep commits atomic and meaningful

4. **Testing Checklist**
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices (iOS and Android)
   - Verify responsive design
   - Check console for errors
   - Test form submissions
   - Verify animations performance

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots for UI changes
   - Ensure CI checks pass

### Code Style Conventions

- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Comments**: Add comments for complex logic
- **Imports**: Organize imports (React, libraries, local components)
- **Props**: Use prop destructuring in component signatures
- **Hooks**: Place hooks at the top of component
- **Formatting**: Use consistent indentation (2 or 4 spaces)

---

## Troubleshooting

### Common Issues

#### **Port 5173 Already in Use**
```bash
# Kill the process using port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or specify different port
npm run dev -- --port 3000
```

#### **Module Not Found Errors**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Verify import paths are correct
- Check file extensions (.jsx, .js)

#### **Build Fails**
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

#### **EmailJS Not Working**
- Verify environment variables are set correctly
- Check EmailJS credentials in `.env`
- Ensure email template ID matches in EmailJS dashboard
- Check browser console for specific error messages

#### **Styles Not Applying**
- Verify Tailwind CSS is installed: `npm ls tailwindcss`
- Check `index.css` for Tailwind directives
- Rebuild project: `npm run build`
- Clear browser cache (Ctrl+Shift+Delete)

#### **Images Not Loading**
- Verify image paths from `src/assets/`
- Check image file names and extensions
- Ensure images are in `public/` for public URLs
- Use relative paths in imports

#### **HMR Not Working**
- Restart dev server: `npm run dev`
- Check Vite configuration in `vite.config.js`
- Ensure no conflicting build tools

### Performance Issues

1. **Slow Build Times**
   - Upgrade to latest Node.js version
   - Use `npm ci` instead of `npm install`
   - Verify no large files in assets

2. **High Memory Usage**
   - Reduce number of open tabs
   - Clear browser cache
   - Restart development server

3. **Slow Page Load**
   - Check Network tab in DevTools
   - Verify lazy loading is working
   - Optimize images (use WebP format)
   - Check for large CSS bundles

### Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Review [React documentation](https://react.dev/)
- Check [React Router documentation](https://reactrouter.com/)
- Search existing GitHub issues
- Create a new issue with reproduction steps

---

## License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

## Contact & Support

For questions, issues, or suggestions:
- **Email**: [contact@brandwebsite.com](mailto:contact@brandwebsite.com)
- **Phone**: [Your Phone Number]
- **Website**: [https://brandwebsite.com](https://brandwebsite.com)

---

**Last Updated**: February 2026  
**Version**: 1.0.0

---
