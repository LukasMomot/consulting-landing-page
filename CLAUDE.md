# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based consulting landing page for IT services, built with Create React App. The project showcases expertise in web development and software architecture with a German-language interface.

## Development Commands

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Deploy to Netlify
yarn deploy
```

## Architecture

### Styling System
The project uses a three-layer styling approach:
- **Tailwind CSS** (v2.1.1) - Utility classes and design tokens
- **twin.macro** (v2.3.3) - Compile-time Tailwind-to-styled-components conversion
- **styled-components** (v5.2.3) - Runtime CSS-in-JS for complex styling

Primary brand color: `#F58A07` (orange theme defined in tailwind config)

### Component Structure
Components are organized by functionality in `src/components/`:
- `hero/` - Landing page hero sections (9 variants)
- `features/` - Feature showcase components (13 variants)
- `forms/` - Contact/subscription forms (6 variants)
- `testimonials/` - Customer testimonials (7 variants)
- `pricing/` - Pricing tables (5 variants)
- `footers/` - Footer components (7 variants)
- `misc/` - Shared components (buttons, headings, layouts)

### Routing Structure
- `/` - Main consulting landing page (`ConsultantLandingPage.js`)
- `/consultant` - Same as root
- `/thank-you` - Thank you page after form submissions
- `/impressum` - German legal information
- `/datenschutz` - German privacy policy
- `/components/:type/:name` - Component demo system

### Key Files
- `src/ConsultantLandingPage.js` - Main landing page component
- `src/tailwind.config.js` - Extensive Tailwind customization
- `babel-plugin-macros.config.js` - twin.macro configuration
- `jsconfig.json` - Enables absolute imports from `src/`

### Component Patterns
Most components follow this pattern:
```javascript
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Container = tw.div`relative`;
const StyledButton = styled(BaseButton)(props => [
  tw`mt-8 w-44 text-sm inline-block`,
  props.buttonRounded && tw`rounded-full`
]);
```

### Animation System
- Uses Framer Motion v4.1.5
- `AnimationRevealPage` wrapper provides scroll-triggered animations
- Can be disabled per page with `disabled` prop

### Import System
Uses absolute imports from `src/` directory:
```javascript
import Hero from "components/hero/TwoColumnWithVideo.js";
import { PrimaryButton } from "components/misc/Buttons.js";
```

### Content Structure
Current landing page sections with anchor navigation:
- `#services` - Service offerings
- `#values` - Core values presentation
- `#magnet` - Lead magnet (free e-book)
- `#facts` - Statistics and achievements
- `#contact` - Contact information

## Deployment

The project is configured for Netlify deployment with the `yarn deploy` command, which builds and deploys to production.