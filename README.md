# RASHEEQA SABREEN Z — PERSONAL PORTFOLIO

> **AI & Data Science Student | Web Developer**  
> *"Exploring the intersection of artificial intelligence, web development and creative technology to build meaningful digital experiences."*

---

## 🌌 Visual Identity & Design System

A bespoke, cinematic digital portfolio engineered specifically for **Rasheeqa Sabreen Z**. It fuses deep cosmic navy tones, dynamic ambient waves (electric cyan, indigo, violet, and soft magenta), responsive glassmorphic cards, and an interactive 3D particle sphere.

### Key Highlights
- **Recruiter-Focused & Clean**: Delivers authentic, verified credentials, coursework, internships, and project breakdowns without arbitrary ranking percentages.
- **Dynamic 3D AI Sphere**: Interactive Canvas 3D particle plexus with perspective pitch/yaw response to desktop cursor movement.
- **Ambient Waves Canvas**: Multiband sinusoidal wave generation with floating starlight particles.
- **Authentic Assets Integrated**: Directly incorporates Rasheeqa's actual portrait photo, official resume PDF, and verified certificate files.
- **Interactive Project Lab**: Complete project modals featuring architecture breakdowns, problem statements, engineering approaches, tech stacks, and outcome metrics.
- **Accessible & Responsive**: Fully fluid typography, mobile drawer navigation, keyboard navigation support, and `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Modular Modern CSS with CSS custom properties (`var(--aurora-cyan)`, etc.), backdrop filters, and responsive grids.
- **Graphics & Animation**:
  - HTML5 Canvas 3D Sphere Projection (Euler rotation, golden-ratio Fibonacci point distribution)
  - Ambient Canvas wave simulation
  - `canvas-confetti` celebration on interaction
- **Icons**: Lucide React + custom SVG brand icons for GitHub and LinkedIn
- **Hosting**: Source code is maintained on GitHub; no deployment platform is configured in this repository.

---

## 📁 Project Structure

```
Portfolio new/
├── public/
│   ├── assets/
│   │   ├── certificates/
│   │   │   ├── uipath-certificate.pdf         # UiPath Automation Developer Associate
│   │   │   ├── vrk-c-cpp-certificate.pdf      # VRK Solutions C & C++ Programming
│   │   │   ├── ibm-ai-certificate.pdf         # IBM Artificial Intelligence Foundations
│   │   │   ├── mongodb-certificate.pdf        # MongoDB Database Architecture
│   │   │   └── ai-productivity-certificate.pdf# Digital Productivity in AI
│   │   ├── docs/
│   │   │   └── rasheeqa-resume.pdf            # Official downloadable resume PDF
│   │   └── images/
│   │       ├── rasheeqa-portrait.png          # Authentic professional portrait
│   │       ├── project-voice.svg              # AI Voice Assistant illustration
│   │       ├── project-library.svg            # Library Management System illustration
│   │       ├── project-peekaboo.svg           # Peek-a-Boo VC02 Board illustration
│   │       ├── project-resume.svg             # AI Resume Screening illustration
│   │       └── project-cert.svg               # Digital Certificate Verification illustration
│   ├── favicon.svg                            # Custom emblem favicon
│   └── robots.txt                             # Search crawler instructions
├── src/
│   ├── components/
│   │   ├── AuroraBackground.jsx               # High-performance canvas waves & particles
│   │   ├── AuroraOrb.jsx                      # Interactive 3D particle sphere
│   │   ├── Navbar.jsx                         # Sticky navigation with scroll-spy & mobile drawer
│   │   ├── Hero.jsx                           # Fullscreen hero with role ticker & portrait
│   │   ├── About.jsx                          # Narrative, second distinct portrait & 4 pillars
│   │   ├── Education.jsx                      # Academic timeline (Achariya B.Tech, HSC, SSLC)
│   │   ├── Skills.jsx                         # Interactive skills universe with category filters
│   │   ├── Projects.jsx                       # Interactive showcase cards
│   │   ├── ProjectModal.jsx                   # Deep architectural view modal
│   │   ├── Experience.jsx                     # Internship timeline (Twilight IT Solutions, Ignite Labs)
│   │   ├── Certifications.jsx                 # Verified certifications gallery & PDF links
│   │   ├── Contact.jsx                        # Validated contact form, mailto & copy buttons
│   │   ├── Footer.jsx                         # Brand signature, copyright & back-to-top
│   │   └── SocialIcons.jsx                    # Verified SVG brand icons
│   ├── data/
│   │   └── portfolioData.js                   # Centralized single source of truth
│   ├── App.jsx                                # Root application assembly
│   ├── index.css                              # Design tokens, glassmorphism, animations
│   └── main.jsx                               # React root entry
├── index.html                                 # SEO metadata, Open Graph & Google Fonts
├── package.json                               # Dependencies & build scripts
└── vite.config.js                             # Vite configuration
```

---

## 🚀 Local Development

To run the application locally on your machine:

1. **Clone or Navigate to the Directory**:
   ```bash
   cd "Portfolio new"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the URL shown in your terminal).

5. **Build for Production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

---

## 🌐 Publishing on GitHub Pages

The `Myportfolio` repository includes a GitHub Actions workflow that builds and publishes the site whenever changes are pushed to `main`.

1. In the repository, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Check the **Actions** tab for the deployment workflow. Once it completes, the site will be available at <https://rasheeqa3007.github.io/Myportfolio/>.

## 📸 Managing Assets

- **Updating Your Photo**: Replace `public/assets/images/rasheeqa-portrait.png` with your new image.
- **Updating Your Resume**: Replace `public/assets/docs/rasheeqa-resume.pdf` whenever you update your resume.
- **Adding New Certifications / Projects**: Edit `src/data/portfolioData.js` to add, update, or remove credentials and projects without touching component code.

---

## 📬 Contact Details

- **Name**: Rasheeqa Sabreen Z
- **Email**: [rasheeqasabreen07@gmail.com](mailto:rasheeqasabreen07@gmail.com)
- **LinkedIn**: [linkedin.com/in/rasheeqa-sabreen-z/](https://www.linkedin.com/in/rasheeqa-sabreen-z/)
- **GitHub**: [github.com/rasheeqa3007](https://github.com/rasheeqa3007)
