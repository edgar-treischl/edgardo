# Copilot Instructions for Edgardo

## Build, Test, and Lint Commands

### Development
```bash
yarn dev
```
Starts the Vite dev server with hot module replacement (HMR) for React.

### Build
```bash
yarn build
```
Runs TypeScript type checking (`tsc -b`) followed by Vite build. Always run this before deploying to catch type errors early.

### Linting
```bash
yarn lint
```
Runs ESLint using the flat config system (defined in `eslint.config.js`).

### Preview Production Build
```bash
yarn preview
```
Serves the built dist/ folder locally to verify the production build before deployment.

## Project Architecture

### High-Level Overview
This is a **simplified portfolio website** for Edgar, a data scientist. The site is minimal—just a navigation bar and an About page showcasing professional experience, skills, and published work through an interactive interface with data visualizations.

**No authentication, no roles, no complex routing.** Just NavBar + About page.

### Directory Structure
- `src/components/` - Reusable components (NavBar, LanguageBar, TopicTree)
- `src/pages/` - Page components (About.tsx)
- `src/assets/` - Static assets, icons, and images
- `src/App.tsx` - Root component (renders NavBar + About page)
- `src/main.tsx` - React DOM entry point

### Key Technologies
- **React 19** with TypeScript
- **Vite** as the build tool and dev server
- **Nivo Charts** for data visualizations (ResponsiveBar, ResponsiveTreeMap)
- **ESLint** with TypeScript support and React hooks/refresh rules

### Component Architecture

#### Navigation
- **NavBar.tsx** - Simple sticky header with:
  - Logo/branding (text only: "Edgar")
  - Single "About" link
  - Minimal styling (teal hover color matching brand)
  - Props: `onNavigate` callback (optional, currently unused)

#### Page Components
- **About.tsx** - The main portfolio page. Contains:
  - Hero section with avatar and CV download link
  - About Me narrative
  - Professional experience timeline (3 positions via ExperienceItem component)
  - Publications & projects section
  - Skills & tools section with two data visualizations
  - Personal interests section
  - Uses the **FadeIn** animation component for scroll-triggered fade-in effects
  - Uses `IntersectionObserver` for performance-optimized animations (respects `prefers-reduced-motion`)

#### Visualization Components
- **LanguageBar.tsx** - Horizontal bar chart showing language usage percentages (HTML/CSS, R, JS/TS, Docker, Shell, Others, Python)
  - Hard-coded data, configured for Nivo's ResponsiveBar
  - Includes custom tooltips and legend
  - Uses 'nivo' color scheme
  - Note: Uses `// @ts-expect-error` for label prop due to Nivo's complex types

- **TopicTree.tsx** - Treemap visualization grouping repositories by topic
  - Four main categories: Development, DevOps, Collaboration, Others
  - Each category has child topics with a "loc" (lines of code) metric
  - Custom color shading based on value ranges within each group
  - Base teal color with dynamic lightening based on data values

#### Custom Components
- **FadeIn** - React hook-based fade-in animation component (in About.tsx)
  - Observes intersection to trigger animations on scroll
  - Respects `prefers-reduced-motion` for accessibility
  - Smoothly fades in and translates elements upward

- **ExperienceItem** - Timeline item renderer for experience section
  - Props: title, company, years, items array
  - Renders timeline dot, content, and bullet list

### Data Flow
All data is **static/hard-coded**:
- NavBar navigation is self-contained
- Language bar percentages and categories are defined as constants in LanguageBar.tsx
- Topic tree data (groupedTopics) is defined as a constant in TopicTree.tsx
- Experience timeline items are defined as string arrays in About.tsx

No external API calls or dynamic data fetching; all data is baked into the components.

## Key Conventions

### TypeScript Conventions
- **Strict Mode**: Project uses strict TypeScript (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`)
- **Target**: ES2023 with DOM lib
- **Module Resolution**: Bundler mode with `verbatimModuleSyntax`
- **JSX**: Uses `react-jsx` (automatic transform, no React import needed)
- **Type Errors**: For Nivo charts, use `// @ts-expect-error Nivo types` inline for complex callback props

### Component Patterns
- Functional components with hooks
- Props typed with interfaces/types where needed
- CSS modules/separate CSS files per component (NavBar.css, LanguageBar.css, etc.)
- Component comments use simple heading style: `/* ===================== */` to separate sections

### Linting Rules
- React Hooks rules enforced (dependencies validation)
- React Refresh rules enforced (for HMR support)
- No console errors or type mismatches allowed
- Unused variables/parameters are errors
- ESLint uses flat config system (eslint.config.js)

### Styling Conventions
- CSS files co-located with components (App.css, About.css, NavBar.css, index.css)
- Main global styles in index.css
- Component-specific styles in component-named CSS files
- Flexbox and grid for layout (see About.css for section layouts)
- CSS animations (fade-in effects) used with accessibility considerations
- Brand color (teal): `rgb(6, 148, 148)` or `#069494`
- NavBar uses sticky positioning with light background (#f9f9f9)

### File Naming
- Components: PascalCase (.tsx)
- CSS files: match component name (NavBar.tsx → NavBar.css)
- Assets/utilities: lowercase or descriptive (index.ts for exports)

### Import/Export Patterns
- Named exports for reusable components (NavBar)
- Default export for page components (About)
- Centralized asset exports via `src/assets/index.ts`

### Environment/Build Notes
- `import.meta.env.BASE_URL` is used for dynamic paths (CV PDF URL)
- Build produces optimized dist/ folder
- TypeScript errors block the build (tsc -b is run first)
- Vite plugins: @vitejs/plugin-react (using Oxc)
- Bundle includes Nivo chart libraries (large); consider code-splitting if adding more features

## Common Tasks

### Updating NavBar Links
1. Modify navbar-nav in NavBar.tsx to add new button elements
2. Update the onNavigate callback in App.tsx to handle new sections
3. Style in NavBar.css (use .nav-link class as base)

### Adding a New Page/Section
1. Create new component in `src/pages/`
2. Import and add to App.tsx conditional render
3. Add corresponding NavBar link
4. No routing needed; just conditional rendering in App

### Adding a New Visualization
1. Create new component in `src/components/`
2. Import Nivo component (Bar, TreeMap, LineChart, etc.)
3. Define data as a const or import it
4. Configure Nivo props for colors, margins, tooltips
5. Create matching CSS file for wrapper styling
6. Import and use in About.tsx or desired page

### Updating Experience or Skills Data
- Edit the `items`, `itemsPD`, `itemsPL` constants in About.tsx for timeline data
- Edit `data` in LanguageBar.tsx for language percentages
- Edit `groupedTopics` in TopicTree.tsx for topic structure
- All data updates are local; no backend changes required

### Styling Best Practices
- Use consistent spacing (padding, margins follow existing patterns in About.css)
- Maintain the teal color scheme (base teal: rgb(6, 148, 148))
- Ensure responsive layouts using flexbox/grid
- Test with `yarn dev` and check browser DevTools for responsive design
- NavBar is sticky; account for its height in page layouts

### Accessibility
- IntersectionObserver animations respect `prefers-reduced-motion`
- Alt text on images (e.g., avatar `alt="Portrait"`)
- Semantic HTML (h1, h2, strong, ul, li, a, button)
- Sufficient color contrast in charts and text
- Focus states on interactive elements

## Running Tests
Currently, no automated tests are configured. If adding tests, follow standard React/TypeScript testing patterns and place in `src/__tests__/` or co-locate with components as `.test.tsx` files.

